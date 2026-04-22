/**
 * R3F + @emergentbase/visual-edits compatibility shim.
 *
 * The visual-edits babel plugin injects JSX attrs like `x-line-number`,
 * `x-column`, `x-id`, etc. on every element. For DOM elements React ignores
 * them; for react-three-fiber host elements, R3F's `resolve()` splits keys
 * on `-` and walks `target.x["line-number"]`, which throws because `x`
 * doesn't exist on THREE objects.
 *
 * R3F's resolve() short-circuits if `key in root` is true — in that case
 * it assigns `root[key] = value` silently. So we just register every
 * injected attribute as a harmless own-property on the relevant THREE
 * prototypes. Keys include a dash so R3F won't try to pierce.
 */
import * as THREE from "three";

const INJECTED_KEYS = [
  "x-file-name",
  "x-line-number",
  "x-column",
  "x-component",
  "x-component-path",
  "x-component-line",
  "x-id",
  "x-dynamic",
  "x-excluded",
  "x-source-type",
  "x-source-var",
  "x-source-file",
  "x-source-file-abs",
  "x-source-line",
  "x-source-path",
  "x-source-editable",
  "x-array-var",
  "x-array-file",
  "x-array-line",
  "x-array-item-param",
  "x-array-inline",
  "x-array-index",
  "data-ve-dynamic",
];

const ATTACH_TO = [
  THREE.Object3D?.prototype,
  THREE.Material?.prototype,
  THREE.BufferGeometry?.prototype,
  THREE.Light?.prototype,
  THREE.Camera?.prototype,
  THREE.Texture?.prototype,
];

ATTACH_TO.forEach((proto) => {
  if (!proto) return;
  INJECTED_KEYS.forEach((k) => {
    if (Object.prototype.hasOwnProperty.call(proto, k)) return;
    try {
      Object.defineProperty(proto, k, {
        value: undefined,
        writable: true,
        configurable: true,
        enumerable: false,
      });
    } catch (_) {
      /* best effort */
    }
  });
});

// eslint-disable-next-line no-console
console.info("[r3f-shim] applied", INJECTED_KEYS.length, "keys to", ATTACH_TO.filter(Boolean).length, "prototypes");

export {};
