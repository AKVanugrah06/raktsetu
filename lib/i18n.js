import en from "@/locales/en.json";

const dictionaries = { en };

/**
 * Looks up a dot-notation key (e.g. "home.heroTitle") in a locale's
 * translation file. Falls back to "en" for an unknown locale, and to the
 * key itself if the path isn't found, so missing translations never crash
 * the page. `vars` fills in any {{placeholder}} tokens in the string, so
 * configurable numbers (like the request expiry window) never have to be
 * hardcoded into the translated copy.
 */
export function t(key, vars = {}, locale = "en") {
  const dictionary = dictionaries[locale] ?? dictionaries.en;
  const value = key
    .split(".")
    .reduce(
      (node, part) =>
        node && typeof node === "object" ? node[part] : undefined,
      dictionary
    );

  const interpolate = (node) => {
    if (typeof node === "string") {
      return node.replace(/{{\s*(\w+)\s*}}/g, (match, name) =>
        name in vars ? String(vars[name]) : match
      );
    }
    if (Array.isArray(node)) return node.map(interpolate);
    if (node && typeof node === "object") {
      return Object.fromEntries(
        Object.entries(node).map(([k, v]) => [k, interpolate(v)])
      );
    }
    return node;
  };

  return value === undefined ? key : interpolate(value);
}
