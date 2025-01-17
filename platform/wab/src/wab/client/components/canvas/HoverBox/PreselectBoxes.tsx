import cn from "classnames";
import { observer } from "mobx-react-lite";
import React from "react";
import { ensure, maybe } from "../../../../common";
import { $ } from "../../../../deps";
import { hasLayoutBox } from "../../../../dom";
import { makeSelectableFullKey, Selectable, SQ } from "../../../../selection";
import { getArenaFrames } from "../../../../shared/Arenas";
import { isTplTagOrComponent, isTplVariantable } from "../../../../tpls";
import { frameToScalerRect } from "../../../coords";
import { computeNodeOutlineTagLayoutClass } from "../../../node-outline";
import {
  cssPropsForInvertTransform,
  StudioCtx,
  useStudioCtx,
} from "../../../studio-ctx/StudioCtx";
import { ViewCtx } from "../../../studio-ctx/view-ctx";
import { summarizeFocusObj } from "../../../utils/tpl-client-utils";
import { createNodeIcon } from "../../sidebar-tabs/tpl-tree";
import {
  BASE_VARIANT_COLOR,
  NON_BASE_VARIANT_COLOR,
} from "../../studio/GlobalCssVariables";
import { EditableNodeLabel } from "../EditableNodeLabel";
import styles from "./HoverBox.module.scss";
import { recomputeBounds } from "./recomputeBounds";

export const PreselectBoxes = observer(PreselectBoxes_);
function PreselectBoxes_() {
  const studioCtx = useStudioCtx();

  if (studioCtx.isTransforming()) {
    return null;
  }

  const viewCtx = studioCtx.viewCtxs
    // read through all ViewCtx's hovered dom element so that we are
    // subscribed to any hover change.
    .filter((vc) => !!vc.$hoveredDomElt())
    .find((vc) =>
      getArenaFrames(studioCtx.currentArena).includes(vc.arenaFrame())
    );

  const hoveredSelectable = viewCtx?.hoveredSelectable();
  const cloneKey = hoveredSelectable
    ? viewCtx?.sel2cloneKey(hoveredSelectable)
    : undefined;
  const hoveredSQ =
    viewCtx && hoveredSelectable
      ? SQ(hoveredSelectable, viewCtx.valState())
      : undefined;
  const ancestorsSelectables = hoveredSQ?.ancestors().toArray() ?? [];

  const preselectBoxes = studioCtx.showAncestorsHoverBoxes()
    ? ancestorsSelectables.map((selectable) => (
        <PreselectBox
          key={makeSelectableFullKey(selectable)}
          selectable={selectable}
          cloneKey={cloneKey}
          studioCtx={studioCtx}
          viewCtx={viewCtx}
          isHoveredElt={hoveredSelectable === selectable}
        />
      ))
    : !!hoveredSelectable && (
        <PreselectBox
          selectable={hoveredSelectable}
          cloneKey={cloneKey}
          studioCtx={studioCtx}
          viewCtx={viewCtx}
          isHoveredElt={true}
        />
      );
  return <>{preselectBoxes}</>;
}

export const PreselectBox = observer(PreselectBox_);
function PreselectBox_(props: {
  selectable: Selectable;
  cloneKey: string | undefined;
  studioCtx: StudioCtx;
  viewCtx: ViewCtx | undefined;
  isHoveredElt: boolean;
}) {
  const { selectable, cloneKey, studioCtx, viewCtx, isHoveredElt } = props;

  const $element = maybe(
    viewCtx &&
      viewCtx.renderState.sel2dom(selectable, viewCtx.canvasCtx, cloneKey),
    (dom) => $(dom)
  );
  const $focused =
    viewCtx === studioCtx.focusedViewCtx() && viewCtx?.focusedDomElt();

  const tpl = selectable.tpl;

  const shouldShow =
    viewCtx &&
    !studioCtx.shouldHidePreselectBox() &&
    $element?.length &&
    $element?.get(0).isConnected &&
    $element?.toArray().filter(hasLayoutBox)?.length > 0 &&
    (studioCtx.showStackOfParents || !$focused || !$element.is($focused));

  if (!shouldShow) {
    return null;
  }

  const shouldShowHoverTag =
    isHoveredElt &&
    shouldShow &&
    $element &&
    (!$focused || !$element.is($focused));

  const frameRect = shouldShow ? recomputeBounds($element!).rect() : undefined;
  const scalerRect =
    frameRect &&
    frameToScalerRect(
      frameRect,
      ensure(viewCtx, "viewCtx must not be nullish.")
    );
  const cssProps = cssPropsForInvertTransform(studioCtx.zoom, scalerRect);

  const isTargetingSomeNonBaseVariant =
    isTplVariantable(tpl) &&
    viewCtx?.variantTplMgr().isTargetingNonBaseVariant(tpl);

  const effectiveVariantSetting =
    shouldShowHoverTag && isTplTagOrComponent(tpl)
      ? viewCtx!.effectiveCurrentVariantSetting(tpl)
      : undefined;
  const boxInFrame = shouldShowHoverTag
    ? recomputeBounds($element!)
    : undefined;
  const tagName = shouldShowHoverTag
    ? summarizeFocusObj(selectable!, viewCtx, effectiveVariantSetting)
    : undefined;
  const tagPosClasses =
    shouldShowHoverTag && boxInFrame
      ? computeNodeOutlineTagLayoutClass(
          viewCtx!.canvasCtx.$doc(),
          boxInFrame.posRect()
        )
      : [];
  const tagIcon =
    shouldShowHoverTag && createNodeIcon(tpl!, effectiveVariantSetting);

  return (
    <div
      className={cn("PreselectBox", {
        [styles.hoveringParentStack]: studioCtx.showStackOfParents,
      })}
      data-original-width={scalerRect ? scalerRect.width : undefined}
      data-original-height={scalerRect ? scalerRect.height : undefined}
      style={{
        display: shouldShow ? "block" : "none",
        ...(scalerRect ? scalerRect : {}),
        ...cssProps,
      }}
    >
      <div
        className={styles.preselectBoxBorder}
        style={{
          borderColor: isTargetingSomeNonBaseVariant
            ? NON_BASE_VARIANT_COLOR
            : BASE_VARIANT_COLOR,
          ...(!isHoveredElt && {
            opacity: 0.1,
            borderWidth: "2px",
          }),
        }}
      />
      {shouldShowHoverTag && (
        <div className={styles.hoverBoxTagContainer}>
          <div className={cn("node-outline-tag", tagPosClasses)}>
            {tagName && (
              <EditableNodeLabel
                studioCtx={studioCtx}
                displayName={tagName}
                icon={tagIcon}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}
