// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: dyzP6dbCdycwJpqiR2zkwe
// Component: -491oma_4M
import * as React from "react";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants,
} from "@plasmicapp/react-web";
import DocsPortalHeader from "../../components/docs/DocsPortalHeader"; // plasmic-import: 6yrnCqYwJf/component
import DocsPortalTabs from "../../components/docs/DocsPortalTabs"; // plasmic-import: g_uMeV_Uh6/component
import ComponentsPanel from "../../components/docs/ComponentsPanel"; // plasmic-import: c-G65M7vor/component
import ComponentListItem from "../../components/docs/ComponentListItem"; // plasmic-import: vY12pF45uf/component
import ImagesPanel from "../../components/docs/ImagesPanel"; // plasmic-import: p94ACk9Ka-/component
import ImageListItem from "../../components/docs/ImageListItem"; // plasmic-import: tnA9SknzQ5/component
import DocsComponentsPortal from "../../components/docs/DocsComponentsPortal"; // plasmic-import: MQIZtdluUpm/component
import DocsImagesPortal from "../../components/docs/DocsImagesPortal"; // plasmic-import: UROUkkTIR8X/component
import DocsPortalIntro from "../../components/docs/DocsPortalIntro"; // plasmic-import: 13UGPPY1WI6/component

import {
  CodegenTypeValue,
  useCodegenType,
} from "./PlasmicGlobalVariant__CodegenType"; // plasmic-import: IFgLgWglLv/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_plasmic_kit_design_system_css from "../PP__plasmickit_design_system.module.css"; // plasmic-import: tXkSR39sgCDWSitZxC5xFV/projectcss
import plasmic_plasmic_kit_color_tokens_css from "../plasmic_kit_q_4_color_tokens/plasmic_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import projectcss from "./plasmic_plasmic_kit_docs_portal.module.css"; // plasmic-import: dyzP6dbCdycwJpqiR2zkwe/projectcss
import sty from "./PlasmicDocsPortal.module.css"; // plasmic-import: -491oma_4M/css

import TrashIcon from "../plasmic_kit/PlasmicIcon__Trash"; // plasmic-import: 7bxap5bzcUODa/icon
import PlusCircleIcon from "../plasmic_kit/PlasmicIcon__PlusCircle"; // plasmic-import: miOAezEgkL3Po/icon
import GearIcon from "../plasmic_kit/PlasmicIcon__Gear"; // plasmic-import: ZmVZmXEc9f_SR/icon

export type PlasmicDocsPortal__VariantMembers = {
  activeTab: "intro" | "components" | "images";
};

export type PlasmicDocsPortal__VariantsArgs = {
  activeTab?: SingleChoiceArg<"intro" | "components" | "images">;
};

type VariantPropType = keyof PlasmicDocsPortal__VariantsArgs;
export const PlasmicDocsPortal__VariantProps = new Array<VariantPropType>(
  "activeTab"
);

export type PlasmicDocsPortal__ArgsType = {};
type ArgPropType = keyof PlasmicDocsPortal__ArgsType;
export const PlasmicDocsPortal__ArgProps = new Array<ArgPropType>();

export type PlasmicDocsPortal__OverridesType = {
  root?: p.Flex<"div">;
  docsPortalHeader?: p.Flex<typeof DocsPortalHeader>;
  body?: p.Flex<"div">;
  sidebar?: p.Flex<"div">;
  docsPortalTabs?: p.Flex<typeof DocsPortalTabs>;
  itemsContainer?: p.Flex<"div">;
  componentsPanel?: p.Flex<typeof ComponentsPanel>;
  imagesPanel?: p.Flex<typeof ImagesPanel>;
  bodyContent?: p.Flex<"div">;
  docsComponentsPortal?: p.Flex<typeof DocsComponentsPortal>;
  docsImagesPortal?: p.Flex<typeof DocsImagesPortal>;
  docsPortalIntro?: p.Flex<typeof DocsPortalIntro>;
};

export interface DefaultDocsPortalProps {
  activeTab?: SingleChoiceArg<"intro" | "components" | "images">;
  className?: string;
}

export const defaultDocsPortal__Args: Partial<PlasmicDocsPortal__ArgsType> = {};

function PlasmicDocsPortal__RenderFunc(props: {
  variants: PlasmicDocsPortal__VariantsArgs;
  args: PlasmicDocsPortal__ArgsType;
  overrides: PlasmicDocsPortal__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const args = Object.assign({}, defaultDocsPortal__Args, props.args);
  const $props = args;

  const globalVariants = ensureGlobalVariants({
    codegenType: useCodegenType(),
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_plasmic_kit_design_system_css.plasmic_tokens,
        plasmic_plasmic_kit_color_tokens_css.plasmic_tokens,
        sty.root,
        {
          [sty.rootglobal_codegenType_codegen_activeTab_intro]:
            hasVariant(variants, "activeTab", "intro") &&
            hasVariant(globalVariants, "codegenType", "codegen"),
        }
      )}
    >
      <DocsPortalHeader
        data-plasmic-name={"docsPortalHeader"}
        data-plasmic-override={overrides.docsPortalHeader}
        className={classNames("__wab_instance", sty.docsPortalHeader, {
          [sty.docsPortalHeaderactiveTab_images]: hasVariant(
            variants,
            "activeTab",
            "images"
          ),

          [sty.docsPortalHeaderactiveTab_intro]: hasVariant(
            variants,
            "activeTab",
            "intro"
          ),

          [sty.docsPortalHeaderglobal_codegenType_codegen_activeTab_intro]:
            hasVariant(variants, "activeTab", "intro") &&
            hasVariant(globalVariants, "codegenType", "codegen"),
          [sty.docsPortalHeaderglobal_codegenType_loader]: hasVariant(
            globalVariants,
            "codegenType",
            "loader"
          ),

          [sty.docsPortalHeaderglobal_codegenType_loader_activeTab_intro]:
            hasVariant(variants, "activeTab", "intro") &&
            hasVariant(globalVariants, "codegenType", "loader"),
        })}
      />

      <div
        data-plasmic-name={"body"}
        data-plasmic-override={overrides.body}
        className={classNames(projectcss.all, sty.body, {
          [sty.bodyglobal_codegenType_codegen_activeTab_intro]:
            hasVariant(variants, "activeTab", "intro") &&
            hasVariant(globalVariants, "codegenType", "codegen"),
        })}
      >
        <div
          data-plasmic-name={"sidebar"}
          data-plasmic-override={overrides.sidebar}
          className={classNames(projectcss.all, sty.sidebar, {
            [sty.sidebarglobal_codegenType_codegen_activeTab_intro]:
              hasVariant(variants, "activeTab", "intro") &&
              hasVariant(globalVariants, "codegenType", "codegen"),
          })}
        >
          <DocsPortalTabs
            data-plasmic-name={"docsPortalTabs"}
            data-plasmic-override={overrides.docsPortalTabs}
            activeTab={
              hasVariant(variants, "activeTab", "images")
                ? ("images" as const)
                : hasVariant(variants, "activeTab", "components")
                ? ("components" as const)
                : hasVariant(variants, "activeTab", "intro")
                ? ("intro" as const)
                : undefined
            }
            className={classNames("__wab_instance", sty.docsPortalTabs, {
              [sty.docsPortalTabsactiveTab_components]: hasVariant(
                variants,
                "activeTab",
                "components"
              ),

              [sty.docsPortalTabsactiveTab_images]: hasVariant(
                variants,
                "activeTab",
                "images"
              ),

              [sty.docsPortalTabsactiveTab_intro]: hasVariant(
                variants,
                "activeTab",
                "intro"
              ),

              [sty.docsPortalTabsglobal_codegenType_codegen_activeTab_intro]:
                hasVariant(variants, "activeTab", "intro") &&
                hasVariant(globalVariants, "codegenType", "codegen"),
            })}
          />

          <div
            data-plasmic-name={"itemsContainer"}
            data-plasmic-override={overrides.itemsContainer}
            className={classNames(projectcss.all, sty.itemsContainer, {
              [sty.itemsContaineractiveTab_intro]: hasVariant(
                variants,
                "activeTab",
                "intro"
              ),

              [sty.itemsContainerglobal_codegenType_codegen_activeTab_intro]:
                hasVariant(variants, "activeTab", "intro") &&
                hasVariant(globalVariants, "codegenType", "codegen"),
              [sty.itemsContainerglobal_codegenType_loader]: hasVariant(
                globalVariants,
                "codegenType",
                "loader"
              ),

              [sty.itemsContainerglobal_codegenType_loader_activeTab_intro]:
                hasVariant(variants, "activeTab", "intro") &&
                hasVariant(globalVariants, "codegenType", "loader"),
            })}
          >
            {(
              hasVariant(variants, "activeTab", "components") ? true : false
            ) ? (
              <ComponentsPanel
                data-plasmic-name={"componentsPanel"}
                data-plasmic-override={overrides.componentsPanel}
                className={classNames("__wab_instance", sty.componentsPanel, {
                  [sty.componentsPanelactiveTab_components]: hasVariant(
                    variants,
                    "activeTab",
                    "components"
                  ),
                })}
              />
            ) : null}
            {(hasVariant(variants, "activeTab", "images") ? true : false) ? (
              <ImagesPanel
                data-plasmic-name={"imagesPanel"}
                data-plasmic-override={overrides.imagesPanel}
                className={classNames("__wab_instance", sty.imagesPanel, {
                  [sty.imagesPanelactiveTab_images]: hasVariant(
                    variants,
                    "activeTab",
                    "images"
                  ),
                })}
              >
                <ImageListItem
                  className={classNames(
                    "__wab_instance",
                    sty.imageListItem__zbiyv
                  )}
                  icon={
                    <TrashIcon
                      className={classNames(projectcss.all, sty.svg__tw8Ab)}
                      role={"img"}
                    />
                  }
                />

                <ImageListItem
                  className={classNames(
                    "__wab_instance",
                    sty.imageListItem__ayOzm
                  )}
                  icon={
                    <PlusCircleIcon
                      className={classNames(projectcss.all, sty.svg__qPzxc)}
                      role={"img"}
                    />
                  }
                >
                  {"plus circle"}
                </ImageListItem>

                <ImageListItem
                  className={classNames(
                    "__wab_instance",
                    sty.imageListItem__j6Vtg
                  )}
                  icon={
                    <GearIcon
                      className={classNames(projectcss.all, sty.svg__m7Y86)}
                      role={"img"}
                    />
                  }
                >
                  {"gear"}
                </ImageListItem>
              </ImagesPanel>
            ) : null}
          </div>
        </div>

        <div
          data-plasmic-name={"bodyContent"}
          data-plasmic-override={overrides.bodyContent}
          className={classNames(projectcss.all, sty.bodyContent, {
            [sty.bodyContentactiveTab_images]: hasVariant(
              variants,
              "activeTab",
              "images"
            ),

            [sty.bodyContentactiveTab_intro]: hasVariant(
              variants,
              "activeTab",
              "intro"
            ),

            [sty.bodyContentglobal_codegenType_codegen_activeTab_intro]:
              hasVariant(variants, "activeTab", "intro") &&
              hasVariant(globalVariants, "codegenType", "codegen"),
          })}
        >
          {(
            hasVariant(variants, "activeTab", "images")
              ? false
              : hasVariant(variants, "activeTab", "components")
              ? true
              : false
          ) ? (
            <DocsComponentsPortal
              data-plasmic-name={"docsComponentsPortal"}
              data-plasmic-override={overrides.docsComponentsPortal}
              className={classNames(
                "__wab_instance",
                sty.docsComponentsPortal,
                {
                  [sty.docsComponentsPortalactiveTab_components]: hasVariant(
                    variants,
                    "activeTab",
                    "components"
                  ),

                  [sty.docsComponentsPortalactiveTab_images]: hasVariant(
                    variants,
                    "activeTab",
                    "images"
                  ),
                }
              )}
            />
          ) : null}
          {(hasVariant(variants, "activeTab", "images") ? true : false) ? (
            <DocsImagesPortal
              data-plasmic-name={"docsImagesPortal"}
              data-plasmic-override={overrides.docsImagesPortal}
              className={classNames("__wab_instance", sty.docsImagesPortal, {
                [sty.docsImagesPortalactiveTab_components]: hasVariant(
                  variants,
                  "activeTab",
                  "components"
                ),

                [sty.docsImagesPortalactiveTab_images]: hasVariant(
                  variants,
                  "activeTab",
                  "images"
                ),
              })}
            />
          ) : null}
          {(hasVariant(variants, "activeTab", "intro") ? true : false) ? (
            <DocsPortalIntro
              data-plasmic-name={"docsPortalIntro"}
              data-plasmic-override={overrides.docsPortalIntro}
              className={classNames("__wab_instance", sty.docsPortalIntro, {
                [sty.docsPortalIntroactiveTab_components]: hasVariant(
                  variants,
                  "activeTab",
                  "components"
                ),

                [sty.docsPortalIntroactiveTab_images]: hasVariant(
                  variants,
                  "activeTab",
                  "images"
                ),

                [sty.docsPortalIntroactiveTab_intro]: hasVariant(
                  variants,
                  "activeTab",
                  "intro"
                ),

                [sty.docsPortalIntroglobal_codegenType_codegen]: hasVariant(
                  globalVariants,
                  "codegenType",
                  "codegen"
                ),

                [sty.docsPortalIntroglobal_codegenType_codegen_activeTab_intro]:
                  hasVariant(variants, "activeTab", "intro") &&
                  hasVariant(globalVariants, "codegenType", "codegen"),
                [sty.docsPortalIntroglobal_codegenType_loader]: hasVariant(
                  globalVariants,
                  "codegenType",
                  "loader"
                ),

                [sty.docsPortalIntroglobal_codegenType_loader_activeTab_intro]:
                  hasVariant(variants, "activeTab", "intro") &&
                  hasVariant(globalVariants, "codegenType", "loader"),
              })}
            />
          ) : null}
        </div>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "docsPortalHeader",
    "body",
    "sidebar",
    "docsPortalTabs",
    "itemsContainer",
    "componentsPanel",
    "imagesPanel",
    "bodyContent",
    "docsComponentsPortal",
    "docsImagesPortal",
    "docsPortalIntro",
  ],

  docsPortalHeader: ["docsPortalHeader"],
  body: [
    "body",
    "sidebar",
    "docsPortalTabs",
    "itemsContainer",
    "componentsPanel",
    "imagesPanel",
    "bodyContent",
    "docsComponentsPortal",
    "docsImagesPortal",
    "docsPortalIntro",
  ],

  sidebar: [
    "sidebar",
    "docsPortalTabs",
    "itemsContainer",
    "componentsPanel",
    "imagesPanel",
  ],

  docsPortalTabs: ["docsPortalTabs"],
  itemsContainer: ["itemsContainer", "componentsPanel", "imagesPanel"],
  componentsPanel: ["componentsPanel"],
  imagesPanel: ["imagesPanel"],
  bodyContent: [
    "bodyContent",
    "docsComponentsPortal",
    "docsImagesPortal",
    "docsPortalIntro",
  ],

  docsComponentsPortal: ["docsComponentsPortal"],
  docsImagesPortal: ["docsImagesPortal"],
  docsPortalIntro: ["docsPortalIntro"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  docsPortalHeader: typeof DocsPortalHeader;
  body: "div";
  sidebar: "div";
  docsPortalTabs: typeof DocsPortalTabs;
  itemsContainer: "div";
  componentsPanel: typeof ComponentsPanel;
  imagesPanel: typeof ImagesPanel;
  bodyContent: "div";
  docsComponentsPortal: typeof DocsComponentsPortal;
  docsImagesPortal: typeof DocsImagesPortal;
  docsPortalIntro: typeof DocsPortalIntro;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicDocsPortal__OverridesType,
  DescendantsType<T>
>;

type NodeComponentProps<T extends NodeNameType> = {
  // Explicitly specify variants, args, and overrides as objects
  variants?: PlasmicDocsPortal__VariantsArgs;
  args?: PlasmicDocsPortal__ArgsType;
  overrides?: NodeOverridesType<T>;
} & Omit<PlasmicDocsPortal__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
  // Specify args directly as props
  Omit<PlasmicDocsPortal__ArgsType, ReservedPropsType> &
  // Specify overrides for each element directly as props
  Omit<
    NodeOverridesType<T>,
    ReservedPropsType | VariantPropType | ArgPropType
  > &
  // Specify props for the root element
  Omit<
    Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
    ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
  >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicDocsPortal__ArgProps,
      internalVariantPropNames: PlasmicDocsPortal__VariantProps,
    });

    return PlasmicDocsPortal__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicDocsPortal";
  } else {
    func.displayName = `PlasmicDocsPortal.${nodeName}`;
  }
  return func;
}

export const PlasmicDocsPortal = Object.assign(
  // Top-level PlasmicDocsPortal renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    docsPortalHeader: makeNodeComponent("docsPortalHeader"),
    body: makeNodeComponent("body"),
    sidebar: makeNodeComponent("sidebar"),
    docsPortalTabs: makeNodeComponent("docsPortalTabs"),
    itemsContainer: makeNodeComponent("itemsContainer"),
    componentsPanel: makeNodeComponent("componentsPanel"),
    imagesPanel: makeNodeComponent("imagesPanel"),
    bodyContent: makeNodeComponent("bodyContent"),
    docsComponentsPortal: makeNodeComponent("docsComponentsPortal"),
    docsImagesPortal: makeNodeComponent("docsImagesPortal"),
    docsPortalIntro: makeNodeComponent("docsPortalIntro"),

    // Metadata about props expected for PlasmicDocsPortal
    internalVariantProps: PlasmicDocsPortal__VariantProps,
    internalArgProps: PlasmicDocsPortal__ArgProps,
  }
);

export default PlasmicDocsPortal;
/* prettier-ignore-end */