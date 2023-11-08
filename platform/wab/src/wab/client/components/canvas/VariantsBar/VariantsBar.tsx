import { Dropdown } from "antd";
import defer from "lodash/defer";
import last from "lodash/lodash";
import { observer } from "mobx-react-lite";
import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { isKnownArenaFrame, Variant } from "../../../../classes";
import { ensure } from "../../../../common";
import { useSignalListener } from "../../../../commons/components/use-signal-listener";
import {
  getSuperComponentVariantGroupToComponent,
  isFrameComponent,
} from "../../../../components";
import { areRectsIntersecting, Box } from "../../../../geom";
import { isDedicatedArena, isMixedArena } from "../../../../shared/Arenas";
import { withoutIrrelevantScreenVariants } from "../../../../shared/PinManager";
import {
  getAllVariantsForTpl,
  isScreenVariant,
} from "../../../../shared/Variants";
import { frameToClientRect, scalerToClientRect } from "../../../coords";
import { plasmicCanvasTransformEvent } from "../../../definitions/events";
import PlasmicVariantsBar from "../../../plasmic/plasmic_kit_variants_bar/PlasmicVariantsBar";
import { StudioCtx, usePlasmicCtx } from "../../../studio-ctx/StudioCtx";
import { ViewCtx } from "../../../studio-ctx/view-ctx";
import { makeVariantsController } from "../../variants/VariantsController";
import { getSpotlightDomInfo, getSpotlightInfo } from "../Spotlight";
import VariantBadge from "./VariantBadge";
import VariantsDrawer from "./VariantsDrawer";

const HOVER_TAG_HEIGHT = 30;
const CANVAS_PADDING = 15;
const GUTTER = 7;

function useFocusedVariants(viewCtx: ViewCtx) {
  const { studioCtx } = usePlasmicCtx();

  const variantsController = makeVariantsController(studioCtx, viewCtx);
  const canChangeVariants = variantsController?.canChangeActiveVariants();
  const activeVariants = variantsController?.getActiveNonBaseVariants() ?? [];
  const targetedVariants = activeVariants?.filter((it) =>
    variantsController?.isTargeted(it)
  );

  const currentComponent = viewCtx?.currentComponent();

  const displayVariants = currentComponent
    ? withoutIrrelevantScreenVariants({
        site: studioCtx.site,
        component: currentComponent,
        activeVariants,
        targetedVariants,
      })
    : [];

  return {
    variantsController,
    canChangeVariants,
    activeVariants,
    targetedVariants,
    displayVariants,
  };
}

function getFocusedElementRect(studioCtx: StudioCtx) {
  const vc = studioCtx.focusedViewCtx();
  const focusObj = studioCtx.hoverBoxControlledObj;

  if (isKnownArenaFrame(focusObj) && vc) {
    return scalerToClientRect(
      studioCtx.getArenaFrameScalerRect(focusObj)!,
      studioCtx
    );
  } else {
    const objRect = vc?.focusedDomElt()?.[0]?.getBoundingClientRect();

    return vc && objRect
      ? Box.fromRect(frameToClientRect(objRect, vc)).rect()
      : {
          width: 0,
          height: 0,
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        };
  }
}

function useFloatingBarForFocusedFrame({
  activeVariants,
  viewCtx,
  contained,
}: {
  activeVariants: Variant[];
  viewCtx: ViewCtx;
  contained?: boolean;
}) {
  const { studioCtx } = usePlasmicCtx();
  const panelRef = useRef<HTMLDivElement | null>(null);
  const [showPanel, setShowPanel] = useState(true);

  if (contained) {
    // NOTE this violates the rules of hooks! We are not calling all the hooks.
    // This is okay because the same VariantsBar is always EITHER contained or
    // not, and the same instance will never swap between the two modes.
    return { showPanel, panelRef };
  }
  const getFocusedComponentRect = useCallback(() => {
    const spotlightInfo = getSpotlightInfo(viewCtx!);
    const spotlightDOMInfo = getSpotlightDomInfo(viewCtx!);

    return spotlightInfo.shouldRender
      ? spotlightDOMInfo.focusedScalerRect
      : studioCtx.getArenaFrameScalerRect(viewCtx?.arenaFrame());
  }, [viewCtx]);

  const updatePosition = useCallback(() => {
    window.requestAnimationFrame(() => {
      if (!panelRef.current) {
        return;
      }

      const focusedComponentRect = getFocusedComponentRect();

      if (!focusedComponentRect) {
        return;
      }

      const clipperRect = studioCtx.canvasClipper().getBoundingClientRect();
      const componentRect = scalerToClientRect(focusedComponentRect, studioCtx);
      const panelRect = panelRef.current.getBoundingClientRect();
      const controlledObj = studioCtx.hoverBoxControlledObj;
      const focusedElementRect = getFocusedElementRect(studioCtx);
      const hoverTagHeight =
        isKnownArenaFrame(controlledObj) &&
        isDedicatedArena(studioCtx.currentArena)
          ? 0
          : HOVER_TAG_HEIGHT; // TODO: dynamically measure

      const componentTopMargin =
        (isMixedArena(studioCtx.currentArena)
          ? HOVER_TAG_HEIGHT
          : focusedElementRect && focusedElementRect.height
          ? Math.max(
              componentRect.top - (focusedElementRect.top - hoverTagHeight),
              0
            )
          : 0) +
        GUTTER * 1.3;

      const maxTranslateX =
        clipperRect.width - panelRect.width - CANVAS_PADDING;
      const maxTranslateY =
        clipperRect.height - panelRect.height - CANVAS_PADDING;

      let translateX = Math.max(
        Math.min(componentRect.left - clipperRect.left + GUTTER, maxTranslateX),
        CANVAS_PADDING
      );

      let translateY = Math.max(
        Math.min(
          componentRect.top -
            componentTopMargin -
            clipperRect.top -
            panelRect.height,
          maxTranslateY
        ),
        CANVAS_PADDING
      );

      panelRef.current.style.transform = `translate(${translateX}px, ${translateY}px)`;

      setShowPanel(areRectsIntersecting(clipperRect, componentRect));
    });
  }, [
    viewCtx?.focusedSelectable(),
    getFocusedComponentRect,
    studioCtx,
    activeVariants.length,
  ]);

  useEffect(() => {
    const frameListener = studioCtx.styleChanged.add(updatePosition);
    window.addEventListener(plasmicCanvasTransformEvent, updatePosition);

    return () => {
      frameListener.detach();
      window.removeEventListener(plasmicCanvasTransformEvent, updatePosition);
    };
  }, [updatePosition]);

  useSignalListener(studioCtx.framesChanged, updatePosition, [
    studioCtx,
    updatePosition,
  ]);

  const focusedComponentRect = getFocusedComponentRect();

  useEffect(updatePosition, [
    focusedComponentRect?.left,
    focusedComponentRect?.top,
    studioCtx.zoom,
  ]);

  useLayoutEffect(updatePosition, [updatePosition]);

  return {
    showPanel: showPanel && !studioCtx.showStackOfParents,
    panelRef,
  };
}

export const VariantsBar = observer(function VariantsBar_({
  contained,
}: {
  contained?: boolean;
}) {
  const { studioCtx, viewCtx } = usePlasmicCtx();

  if (studioCtx.isLiveMode) {
    return null;
  }

  if (!viewCtx || viewCtx.isDisposed || !viewCtx.valState().maybeValSysRoot()) {
    return null;
  }

  const valComponent = last(viewCtx.valComponentStack());
  const component = valComponent?.tpl?.component;

  if (studioCtx.isTransforming() && !contained) {
    return null;
  }

  if (isFrameComponent(component)) {
    return null;
  }
  const spotlightInfo = getSpotlightInfo(viewCtx);

  const allAvailableVariants = getAllVariantsForTpl({
    component: viewCtx.currentComponent(),
    tpl: viewCtx.focusedTpl(),
    site: viewCtx.site,
  }).filter(
    // We do not show screen variants in the drawer in dedicated arenas
    // when in spotlight mode.
    (v) =>
      !(
        isScreenVariant(v) &&
        spotlightInfo.shouldRender &&
        isDedicatedArena(studioCtx.currentArena)
      )
  );

  if (allAvailableVariants.length === 0) {
    return null;
  }

  return <VariantsBarInner viewCtx={viewCtx} contained={contained} />;
});

const VariantsBarInner = observer(function VariantsBarInner_({
  contained,
  viewCtx,
}: {
  contained?: boolean;
  viewCtx: ViewCtx;
}) {
  const {
    variantsController,
    canChangeVariants,
    activeVariants,
    targetedVariants,
    displayVariants,
  } = useFocusedVariants(viewCtx);

  const { studioCtx } = usePlasmicCtx();
  const { showPanel, panelRef } = useFloatingBarForFocusedFrame({
    activeVariants,
    viewCtx,
    contained,
  });
  const preventDismissingRef = useRef(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const component = viewCtx?.currentComponent();
  const groupToSuperComp =
    component && getSuperComponentVariantGroupToComponent(component);

  useEffect(
    /* Close variants drawer on unmount */ () => () =>
      studioCtx.setShowVariantsDrawer(false),
    []
  );

  useEffect(
    /* When selection change, close the variants drawer */ () => {
      studioCtx.setShowVariantsDrawer(false);
    },
    [
      studioCtx.focusedViewCtx()?.arenaFrame().uid,
      studioCtx.focusedViewCtx()?.focusedSelectable()?.tpl?.uid,
    ]
  );

  const getVariantUnpinHandler = (it: Variant) =>
    canChangeVariants
      ? () => viewCtx?.change(() => variantsController?.onToggleVariant(it))
      : undefined;

  const getVariantToggleHandler = (it: Variant) =>
    variantsController?.canToggleTargeting(it)
      ? () =>
          viewCtx?.change(() =>
            variantsController.onTargetVariant(
              it,
              !variantsController.isTargeted(it)
            )
          )
      : undefined;

  const handleRecordingButtonClick = () => {
    viewCtx?.change(() =>
      variantsController?.onToggleTargetingOfActiveVariants()
    );
  };

  const handleDropdownVisibleChange = (visible) => {
    studioCtx.setShowVariantsDrawer(visible);
  };

  useLayoutEffect(() => {
    if (studioCtx.showVariantsDrawer) {
      defer(() => searchInputRef.current?.focus());
    }
  }, [studioCtx.showVariantsDrawer]);

  const handleClearVariants = () => {
    variantsController?.onClearVariants();
  };

  const handleRemoveVariant = (variant: Variant) => {
    variantsController?.onToggleVariant(variant);
  };

  const handleTargetVariant = (variant: Variant) => {
    variantsController?.onTargetVariant(variant, true);
  };

  const spotlightInfo = getSpotlightInfo(
    ensure(viewCtx, "Expected viewCtx to be not null in VariantsBar")
  );

  return !canChangeVariants && !displayVariants.length ? null : (
    <>
      <PlasmicVariantsBar
        isFocused
        isEditable={canChangeVariants}
        isEmpty={!displayVariants.length}
        contained={contained}
        root={{
          ref: contained ? null : panelRef,
          style: {
            visibility: showPanel ? "visible" : "hidden",
          },
        }}
        dropdownTrigger={{
          onMouseDown: () => {
            preventDismissingRef.current = true;
            defer(() => {
              preventDismissingRef.current = false;
            });
          },
        }}
        emptyListMessage={{
          children: "Edit variants",
          onMouseDown: () =>
            studioCtx.showVariantsDrawer
              ? studioCtx.setShowVariantsDrawer(false)
              : setTimeout(() => studioCtx.setShowVariantsDrawer(true)),
        }}
        chevronDownIcon={{
          wrap: (chevronDownIcon) => (
            <Dropdown
              transitionName=""
              trigger={["click"]}
              placement={"bottomLeft"}
              visible={studioCtx.showVariantsDrawer}
              onVisibleChange={handleDropdownVisibleChange}
              overlay={() => (
                <VariantsDrawer
                  component={component}
                  targetedVariants={targetedVariants}
                  onClearVariants={handleClearVariants}
                  onRemoveVariant={handleRemoveVariant}
                  onTargetVariant={handleTargetVariant}
                  searchInputRef={searchInputRef}
                  hideScreen={
                    isDedicatedArena(studioCtx.currentArena) &&
                    !!spotlightInfo.shouldRender
                  }
                  onDismiss={() => {
                    if (!preventDismissingRef.current) {
                      studioCtx.setShowVariantsDrawer(false);
                    }
                  }}
                />
              )}
            >
              <div data-test-id="variants-bar-dropdown-trigger">
                {chevronDownIcon}
              </div>
            </Dropdown>
          ),
        }}
        recordingButton={{
          isRecording: targetedVariants.length > 0,
          onClick: handleRecordingButtonClick,
        }}
        variantsList={
          <>
            {displayVariants.map((variant) => (
              <VariantBadge
                key={variant.uid}
                isFocused
                isUnpinnable={canChangeVariants}
                onUnpin={getVariantUnpinHandler(variant)}
                onToggle={getVariantToggleHandler(variant)}
                isRecording={targetedVariants.includes(variant)}
                variant={variant}
                component={component!}
                superComp={
                  variant.parent
                    ? groupToSuperComp?.get(variant.parent)
                    : undefined
                }
              />
            ))}
          </>
        }
      />
    </>
  );
});