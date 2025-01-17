import L from "lodash";
import { ensureKnownComponent, ensureKnownTplComponent } from "../classes";
import { Comparator } from "../cmp";
import { jsonClone, mkUuid } from "../common";
import { ComponentType, mkComponent } from "../components";
import { jsonLit } from "../exprs";
import { mkParam } from "../lang";
import * as bundler from "../shared/bundler";
import { typeFactory } from "../shared/core/model-util";
import { TEST_GLOBAL_VARIANT } from "../test/tpls";
import { mkTplComponentX, mkTplTagX } from "../tpls";

describe("bundler", () =>
  it("should work", function () {
    let field;
    const component = mkComponent({
      name: "Component",
      tplTree: mkTplTagX("div"),
      params: [
        mkParam({
          name: "className",
          type: typeFactory.text(),
          paramType: "prop",
        }),
      ],
      type: ComponentType.Plain,
    });

    const instance = mkTplComponentX({
      component,
      args: { className: jsonLit("my-class") },
      baseVariant: TEST_GLOBAL_VARIANT,
    });
    const b = new bundler.Bundler();
    const componentUuid = mkUuid();
    const componentBundle = b.bundle(
      component,
      componentUuid,
      "1-some-version"
    );
    const instanceUuid = mkUuid();
    const instanceBundle = b.bundle(instance, instanceUuid, "1-some-version");
    expect(componentBundle).toEqual(jsonClone(componentBundle));
    expect(instanceBundle).toEqual(jsonClone(instanceBundle));

    const instance2 = b.unbundle(instanceBundle, instanceUuid);
    expect(instance2).toBe(instance);
    const component2 = b.unbundle(componentBundle, componentUuid);
    expect(component2).toBe(component);
    expect(b.bundle(component, componentUuid, "1-some-version")).toEqual(
      componentBundle
    );
    expect(b.bundle(instance, instanceUuid, "1-some-version")).toEqual(
      instanceBundle
    );
    expect(instance.component).toBe(component);

    const b2 = new bundler.Bundler();
    expect(() => b2.unbundle(instanceBundle, instanceUuid)).toThrow();
    expect(L.isEmpty(b2._addr2inst)).toBe(true);
    expect(L.isEmpty(b2._uid2addr)).toBe(true);

    const component3 = ensureKnownComponent(
      b2.unbundle(jsonClone(componentBundle), componentUuid)
    );
    expect(component3).not.toBe(component);
    const instance3 = ensureKnownTplComponent(
      b2.unbundle(jsonClone(instanceBundle), instanceUuid)
    );
    expect(instance3).not.toBe(instance);
    const cmp = new Comparator();
    expect(cmp.deepEq(component, component3)).toBe(true);
    expect(cmp.deepEq(instance, instance3)).toBe(true);
    expect(cmp.deepEq(component, instance)).toBe(false);
    expect(instance3.component).toBe(component3);

    component3.params.push(
      mkParam({
        name: "className2",
        type: typeFactory.text(),
        paramType: "prop",
      })
    );
  }));
