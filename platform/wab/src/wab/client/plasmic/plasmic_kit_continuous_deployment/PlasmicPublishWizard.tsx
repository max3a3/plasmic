// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: fpbcKyXdMTvY59T4C5fjcC
// Component: JhFt3V1Imn

import * as React from "react";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

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
import IconButton from "../../components/widgets/IconButton"; // plasmic-import: LPry-TF4j22a/component
import Button from "../../components/widgets/Button"; // plasmic-import: SEF-sRmSoqV5c/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_plasmic_kit_design_system_css from "../PP__plasmickit_design_system.module.css"; // plasmic-import: tXkSR39sgCDWSitZxC5xFV/projectcss
import plasmic_plasmic_kit_color_tokens_css from "../plasmic_kit_q_4_color_tokens/plasmic_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import projectcss from "../../components/modals/plasmic/plasmic_kit_project_settings/plasmic_plasmic_kit_project_settings.module.css"; // plasmic-import: fpbcKyXdMTvY59T4C5fjcC/projectcss
import sty from "./PlasmicPublishWizard.module.css"; // plasmic-import: JhFt3V1Imn/css

import ClosesvgIcon from "../q_4_icons/icons/PlasmicIcon__Closesvg"; // plasmic-import: DhvEHyCHT/icon
import ChevronDownsvgIcon from "../q_4_icons/icons/PlasmicIcon__ChevronDownsvg"; // plasmic-import: xZrB9_0ir/icon
import ArrowRightsvgIcon from "../q_4_icons/icons/PlasmicIcon__ArrowRightsvg"; // plasmic-import: 9Jv8jb253/icon
import OpenIcon from "../plasmic_kit/PlasmicIcon__Open"; // plasmic-import: 7D0GDLdF72udM/icon
import image3SqODPlYut from "./images/image3.svg"; // plasmic-import: sq-oDPlYUT/picture

createPlasmicElementProxy;

export type PlasmicPublishWizard__VariantMembers = {};
export type PlasmicPublishWizard__VariantsArgs = {};
type VariantPropType = keyof PlasmicPublishWizard__VariantsArgs;
export const PlasmicPublishWizard__VariantProps = new Array<VariantPropType>();

export type PlasmicPublishWizard__ArgsType = {};
type ArgPropType = keyof PlasmicPublishWizard__ArgsType;
export const PlasmicPublishWizard__ArgProps = new Array<ArgPropType>();

export type PlasmicPublishWizard__OverridesType = {
  root?: p.Flex<"div">;
  img?: p.Flex<typeof p.PlasmicImg>;
  closeButton?: p.Flex<typeof IconButton>;
  laterButton?: p.Flex<typeof Button>;
  connectButton?: p.Flex<typeof Button>;
};

export interface DefaultPublishWizardProps {
  className?: string;
}

const $$ = {};

function PlasmicPublishWizard__RenderFunc(props: {
  variants: PlasmicPublishWizard__VariantsArgs;
  args: PlasmicPublishWizard__ArgsType;
  overrides: PlasmicPublishWizard__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants,
  };

  const $ctx = ph.useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

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
        sty.root
      )}
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__nOs1D)}
      >
        <p.PlasmicImg
          data-plasmic-name={"img"}
          data-plasmic-override={overrides.img}
          alt={""}
          className={classNames(sty.img)}
          displayHeight={"36px"}
          displayMaxHeight={"none"}
          displayMaxWidth={"none"}
          displayMinHeight={"0"}
          displayMinWidth={"0"}
          displayWidth={"36px"}
          loading={"lazy"}
          src={{
            src: image3SqODPlYut,
            fullWidth: 150,
            fullHeight: 150,
            aspectRatio: 1,
          }}
        />

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__ybcji)}
        >
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__q75N)}
          >
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__nblJd)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__qzEe
                )}
              >
                {"Welcome to your new project!"}
              </div>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__xWr3
                )}
              >
                {"Publish to a GitHub repo and JAMstack website."}
              </div>
            </p.Stack>
            <IconButton
              data-plasmic-name={"closeButton"}
              data-plasmic-override={overrides.closeButton}
              children2={
                <ChevronDownsvgIcon
                  className={classNames(projectcss.all, sty.svg__rgZf)}
                  role={"img"}
                />
              }
              className={classNames("__wab_instance", sty.closeButton)}
              size={"small"}
            >
              <ClosesvgIcon
                className={classNames(projectcss.all, sty.svg__ldxfz)}
                role={"img"}
              />
            </IconButton>
          </p.Stack>
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox___7H4GJ)}
          >
            <Button
              data-plasmic-name={"laterButton"}
              data-plasmic-override={overrides.laterButton}
              className={classNames("__wab_instance", sty.laterButton)}
              endIcon={
                <ChevronDownsvgIcon
                  className={classNames(projectcss.all, sty.svg__lexrD)}
                  role={"img"}
                />
              }
              size={"wide"}
              startIcon={
                <ArrowRightsvgIcon
                  className={classNames(projectcss.all, sty.svg__wi8N)}
                  role={"img"}
                />
              }
              type={["clear"]}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___0QRy
                )}
              >
                {"Do this later"}
              </div>
            </Button>
            <Button
              data-plasmic-name={"connectButton"}
              data-plasmic-override={overrides.connectButton}
              className={classNames("__wab_instance", sty.connectButton)}
              endIcon={
                <OpenIcon
                  className={classNames(projectcss.all, sty.svg__dqvOq)}
                  role={"img"}
                />
              }
              size={"wide"}
              startIcon={
                <ArrowRightsvgIcon
                  className={classNames(projectcss.all, sty.svg__sijl)}
                  role={"img"}
                />
              }
              type={["primary"]}
            >
              {"Connect to GitHub"}
            </Button>
          </p.Stack>
        </p.Stack>
      </p.Stack>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "img", "closeButton", "laterButton", "connectButton"],
  img: ["img"],
  closeButton: ["closeButton"],
  laterButton: ["laterButton"],
  connectButton: ["connectButton"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  img: typeof p.PlasmicImg;
  closeButton: typeof IconButton;
  laterButton: typeof Button;
  connectButton: typeof Button;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPublishWizard__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPublishWizard__VariantsArgs;
    args?: PlasmicPublishWizard__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicPublishWizard__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicPublishWizard__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicPublishWizard__ArgProps,
          internalVariantPropNames: PlasmicPublishWizard__VariantProps,
        }),
      [props, nodeName]
    );
    return PlasmicPublishWizard__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPublishWizard";
  } else {
    func.displayName = `PlasmicPublishWizard.${nodeName}`;
  }
  return func;
}

export const PlasmicPublishWizard = Object.assign(
  // Top-level PlasmicPublishWizard renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),
    closeButton: makeNodeComponent("closeButton"),
    laterButton: makeNodeComponent("laterButton"),
    connectButton: makeNodeComponent("connectButton"),

    // Metadata about props expected for PlasmicPublishWizard
    internalVariantProps: PlasmicPublishWizard__VariantProps,
    internalArgProps: PlasmicPublishWizard__ArgProps,
  }
);

export default PlasmicPublishWizard;
/* prettier-ignore-end */