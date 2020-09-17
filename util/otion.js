/* eslint-disable */
// Inspired by https://github.com/garycourt/murmurhash-js
// Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
function murmur2(str) {
  // 'm' and 'r' are mixing constants generated offline.
  // They're not really 'magic', they just happen to work well.
  // const m = 0x5bd1e995;
  // const r = 24;
  // Initialize the hash
  var h = 0; // Mix 4 bytes at a time into the hash

  var k,
    i = 0,
    len = str.length;

  for (; len >= 4; ++i, len -= 4) {
    k =
      (str.charCodeAt(i) & 0xff) |
      ((str.charCodeAt(++i) & 0xff) << 8) |
      ((str.charCodeAt(++i) & 0xff) << 16) |
      ((str.charCodeAt(++i) & 0xff) << 24);
    k =
      /* Math.imul(k, m): */
      (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0xe995) << 16);
    k ^=
      /* k >>> r: */
      k >>> 24;
    h =
      /* Math.imul(k, m): */
      ((k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0xe995) << 16)) ^
      /* Math.imul(h, m): */
      ((h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0xe995) << 16));
  } // Handle the last few bytes of the input array

  switch (len) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h =
        /* Math.imul(h, m): */
        (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0xe995) << 16);
  } // Do a few final mixes of the hash to ensure the last few
  // bytes are well-incorporated.

  h ^= h >>> 13;
  h =
    /* Math.imul(h, m): */
    (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0xe995) << 16);
  return ((h ^ (h >>> 15)) >>> 0).toString(36);
}

var t = /^(br|hy|us|wr|text-si|scroll-snap-t)/,
  e = /^(ap|us|tab-|border-e|margin-e|margin-s|padding-e|padding-s|border-sta)/,
  r = /^(ap|br|hy|us|wr|mas|colu|clip-|box-de|font-k|text-e|font-fe|shape-i|text-or|text-si|border-e|margin-e|margin-s|padding-e|padding-s|border-sta|background-cl|scroll-snap-t|text-decoration-)/,
  s = /^(pos|background-cl)/,
  a = {},
  n = function (s) {
    return a[s]
      ? a[s]
      : (a[s] = (1 * t.test(s)) | (2 * e.test(s)) | (4 * r.test(s)));
  },
  o = function (t, e) {
    return s.test(t) ? e.replace(/(sticky|text)/, '-webkit-$1, $1') : e;
  };

const isDeno = typeof window !== 'undefined' && window.Deno;
const isBrowser = isDeno ? false : typeof window !== 'undefined';
const isDev =
  isDeno || isBrowser ? false : process.env.NODE_ENV !== 'production';

const STYLE_ELEMENT_ID = '__otion';
function getStyleElement() {
  // Hydrate existing style element if available
  let el = document.getElementById(STYLE_ELEMENT_ID);
  if (el) return el; // Create a new one otherwise

  el = document.createElement('style');
  el.id = STYLE_ELEMENT_ID;
  return document.head.appendChild(el);
}

/**
 * Creates an injector which inserts style rules through the CSS Object Model.
 */

function CSSOMInjector({ nonce, target = getStyleElement().sheet }) {
  // eslint-disable-next-line no-param-reassign
  target.ownerNode.nonce = nonce;
  return {
    sheet: target,

    insert(rule, index) {
      // Avoid render failure during production if a rule cannot be parsed
      try {
        return target.insertRule(rule, index);
      } catch {
        return -1;
      }
    },
  };
}
/**
 * Creates an injector which inserts style rules through the Document Object Model.
 */

function DOMInjector({ nonce, target = getStyleElement() }) {
  // eslint-disable-next-line no-param-reassign
  target.nonce = nonce;
  return {
    sheet: target.sheet,

    insert(rule, index) {
      target.insertBefore(
        document.createTextNode(rule),
        target.childNodes[index]
      );
      return index;
    },
  };
}
/**
 * An injector placeholder which performs no operations. Useful for avoiding errors in a non-browser environment.
 */

const NoOpInjector = {
  insert() {
    return 0;
  },
};

function minifyValue(value) {
  // Remove excess white space characters
  return value.trim().replace(/\s+/g, ' ');
}
function minifyCondition(condition) {
  return minifyValue(condition).replace(/([([]) | ([)\]])| ?(:) ?/g, '$1$2$3');
}

/*
    The order of rules is influenced by CSS usage metrics:

    - https://www.cssstats.com/stats/?url=css-tricks.com
    - https://www.cssstats.com/stats/?url=joshwcomeau.com
    - https://www.cssstats.com/stats/?url=mastery.games
    - https://www.cssstats.com/stats/?url=nytimes.com
    - https://www.chromestatus.com/metrics/css/popularity
*/
// Includes support for CSS custom properties
const PROPERTY_ACCEPTS_UNITLESS_VALUES = /^(-|f[lo].*?[^se]$|g.{6,}[^ps]$|z|o[pr]|(-w.{6})?li.*?(t|mp)$|an|(bo|s).{5}im|sca|m.{7}[ds]|ta|c.*?[st]$|wido|ini)/; // TODO: Add tests to match everything below, without false positives
const PROPERTY_PRECEDENCE_CORRECTION_GROUPS = /^(?:(border-(?!w|c|sty)|[tlbr].{2,4}m?$|c.{7}$)|([fl].{5}l|g.{8}$|pl))/; // TODO: Add tests to match everything below, with no conflicting longhands

/*
    Sources:

    - https://bitsofco.de/when-do-the-hover-focus-and-active-pseudo-classes-apply/#orderofstyleshoverthenfocusthenactive
    - https://developer.mozilla.org/docs/Web/CSS/:active#Active_links
*/
const PRECEDENCES_BY_PSEUDO_CLASS = new Map([
  [
    /* li */
    'nk',
    1,
  ],
  [
    /* vi */
    'sited',
    2,
  ],
  [
    /* em */
    'pty',
    3,
  ],
  [
    /* fo */
    'cus-w',
    /* ithin */
    4,
  ],
  [
    /* ho */
    'ver',
    5,
  ],
  [
    /* fo */
    'cus',
    6,
  ],
  [
    /* fo */
    'cus-v',
    /* isible */
    7,
  ],
  [
    /* ac */
    'tive',
    8,
  ],
  [
    /* di */
    'sable',
    /* d */
    9,
  ],
]);
const PSEUDO_CLASS_PRECEDENCE_GROUP_COUNT = 9;

function rulePrecedence(property, pseudoClass, isConditionalRule) {
  let precedence = 0;
  const isCustomProperty = property[1] === '-';

  if (!isCustomProperty) {
    // The property's baseline precedence is based on "-" counting
    const unprefixedProperty =
      property[0] === '-'
        ? property.slice(property.indexOf('-', 1)) + 1
        : property;
    const matches = PROPERTY_PRECEDENCE_CORRECTION_GROUPS.exec(
      unprefixedProperty
    );
    precedence =
      (matches
        ? +!!matches[1] ||
          /* +1 */
          -!!matches[2]
        : /* -1 */
          0) + 1;
    let position = 1; // First character of the property can't be `-`

    while (
      // eslint-disable-next-line no-cond-assign
      (position = unprefixedProperty.indexOf('-', position) + 1)
    ) {
      /* > 0 */
      ++precedence;
    }
  } // Pseudo-classes also have an impact on rule precedence

  const conditionalPrecedenceGroupExistenceMultiplier = 2;
  precedence *=
    conditionalPrecedenceGroupExistenceMultiplier *
    ((pseudoClass &&
      PRECEDENCES_BY_PSEUDO_CLASS.get(pseudoClass.slice(3, 8))) ||
      PSEUDO_CLASS_PRECEDENCE_GROUP_COUNT + 1); // Conditional rules should take precedence over non-conditionals

  precedence += +isConditionalRule;
  return precedence;
}

const PRECEDENCE_GROUP_COUNT = 72;

function toHyphenLower(match) {
  return `-${match.toLowerCase()}`;
}
/**
 * Creates a new otion instance. Usable for managing styles of multiple browsing contexts (e.g. an `<iframe>` besides the main document).
 */

function createInstance() {
  let injector;
  let prefix;
  let ruleIndexesByIdentName;
  let nextRuleIndexesByPrecedenceGroup;

  function checkSetup() {
    if (!injector || !prefix || !ruleIndexesByIdentName) {
      throw new Error(
        'On a custom otion instance, `setup()` must be called before usage.'
      );
    }
  }

  function updatePrecedenceGroupRanges(fromPrecedence) {
    for (let i = fromPrecedence; i <= PRECEDENCE_GROUP_COUNT; ++i) {
      ++nextRuleIndexesByPrecedenceGroup[i];
    }
  }

  function hydrateScopedSubtree(cssRule, isConditionalRule) {
    if (
      cssRule.type === 1
      /* CSSRule.STYLE_RULE */
    ) {
      const { selectorText, style } = cssRule; // eslint-disable-next-line @typescript-eslint/no-non-null-assertion

      const [, identName, pseudoClass] = /^..([0-9a-z]+)(:.*)?/.exec(
        selectorText
      );
      const property = style[0];

      if (property) {
        // Broken rule declarations are ignored
        updatePrecedenceGroupRanges(
          rulePrecedence(property, pseudoClass, !!isConditionalRule)
        );
      }

      ruleIndexesByIdentName.set(identName, ruleIndexesByIdentName.size);
    } else {
      /* cssRule.type === CSSRule.MEDIA_RULE */
      hydrateScopedSubtree(cssRule.cssRules[0], true);
    }
  }

  function normalizeDeclaration(property, value) {
    const formattedValue =
      typeof value === 'number' &&
      !PROPERTY_ACCEPTS_UNITLESS_VALUES.test(property)
        ? `${value}px` // Append missing unit
        : minifyValue(`${value}`);
    return prefix(property, formattedValue);
  }

  function serializeDeclarationList(property, value) {
    if (typeof value !== 'object') {
      return normalizeDeclaration(property, value);
    }

    let cssText = '';
    value.forEach((fallbackValue) => {
      if (fallbackValue) {
        cssText += `;${normalizeDeclaration(property, fallbackValue)}`;
      }
    }); // The leading declaration separator character gets removed

    return cssText.slice(1);
  }

  function decomposeToClassNames(
    rules,
    cssTextHead,
    cssTextTail,
    maxPrecedingConditionalRuleIndexesByPrecedenceGroup,
    classSelectorStartIndex
  ) {
    let classNames = ''; // TODO: Replace `var` with `const` once it minifies equivalently
    // eslint-disable-next-line guard-for-in, no-restricted-syntax, no-var, vars-on-top

    for (var key in rules) {
      const value = rules[key];

      if (value != null) {
        if (typeof value !== 'object' || Array.isArray(value)) {
          // Class specificities are controlled with repetition, see:
          // https://csswizardry.com/2014/07/hacks-for-dealing-with-specificity/
          // TODO: Consider removing IE vendor prefix support
          const property = key.replace(/^ms|[A-Z]/g, toHyphenLower);
          const declarations = serializeDeclarationList(property, value);
          const className = `_${murmur2(cssTextHead + declarations)}`;
          const isConditionalRule = cssTextTail;
          let ruleIndex = ruleIndexesByIdentName.get(className);

          if (ruleIndex == null || isConditionalRule) {
            const precedence = rulePrecedence(
              property,
              classSelectorStartIndex == null
                ? ''
                : cssTextHead.slice(classSelectorStartIndex),
              !!isConditionalRule
            );

            if (
              ruleIndex == null || // Re-insert conditional rule if necessary to fix CSS source order
              maxPrecedingConditionalRuleIndexesByPrecedenceGroup[precedence] >
                ruleIndex
            ) {
              const scopeSelector = `.${className}`;
              injector.insert(
                `${
                  cssTextHead.slice(0, classSelectorStartIndex) +
                  scopeSelector +
                  (classSelectorStartIndex != null
                    ? `${
                        cssTextHead
                          .slice(classSelectorStartIndex)
                          .replace(/&/g, scopeSelector) // Resolve references
                      }{`
                    : '{')
                }${declarations}}${cssTextTail}`,
                nextRuleIndexesByPrecedenceGroup[precedence]
              );
              updatePrecedenceGroupRanges(precedence);
              ruleIndex = ruleIndexesByIdentName.size;
              ruleIndexesByIdentName.set(className, ruleIndex);

              if (isConditionalRule) {
                // eslint-disable-next-line no-param-reassign
                maxPrecedingConditionalRuleIndexesByPrecedenceGroup[
                  precedence
                ] = Math.max(
                  maxPrecedingConditionalRuleIndexesByPrecedenceGroup[
                    precedence
                  ],
                  ruleIndex
                );
              }
            }
          }

          classNames += ` ${className}`;
        } else {
          let parentRuleHeads;
          let firstParentRuleHead =
            key[0] === ':' || key[0] === '@' || key[0] === '&'
              ? key
              : minifyCondition(key);
          let parentRuleTail = '';
          let scopeClassSelectorStartIndex = classSelectorStartIndex;

          if (scopeClassSelectorStartIndex == null) {
            if (
              firstParentRuleHead[0] === ':' ||
              firstParentRuleHead[0] === '&'
            ) {
              scopeClassSelectorStartIndex = cssTextHead.length;
              parentRuleHeads = firstParentRuleHead
                .split(
                  // Separate selector list items by ","
                  // Inspired by: https://stackoverflow.com/a/9030062
                  /,(?![^[]*?[^\\]["']\s*?\])/
                )
                .map((
                  singleSelector // Keep non-first occurrences of "&" for later replacement
                ) => minifyValue(singleSelector).replace('&', ''));
            } else if (firstParentRuleHead === 'selectors') {
              firstParentRuleHead = '';
            } else if (firstParentRuleHead[0] !== '@') {
              firstParentRuleHead += '{';
              parentRuleTail = '}';
            }
          }

          (parentRuleHeads || [firstParentRuleHead]).forEach(
            // eslint-disable-next-line no-loop-func
            (parentRuleHead) => {
              classNames += decomposeToClassNames(
                value,
                cssTextHead + parentRuleHead,
                parentRuleTail + cssTextTail,
                maxPrecedingConditionalRuleIndexesByPrecedenceGroup,
                scopeClassSelectorStartIndex
              );
            }
          );
        }
      }
    }

    return classNames;
  }

  return {
    setup(options) {
      injector =
        options.injector || // eslint-disable-next-line no-nested-ternary
        (isBrowser
          ? isDev
            ? DOMInjector({})
            : CSSOMInjector({})
          : NoOpInjector);

      prefix =
        options.prefix ||
        ((property, value) => {
          const declaration = `${property}:${o(property, value)}`;
          let cssText = declaration;
          const flag = n(property);
          if (flag & 0b001) cssText += `;-ms-${declaration}`;
          if (flag & 0b010) cssText += `;-moz-${declaration}`;
          if (flag & 0b100) cssText += `;-webkit-${declaration}`;
          return cssText;
        });

      ruleIndexesByIdentName = new Map();
      nextRuleIndexesByPrecedenceGroup = new Uint16Array(
        PRECEDENCE_GROUP_COUNT
      );
    },

    hydrate() {
      if (isDev) checkSetup(); // eslint-disable-next-line @typescript-eslint/no-non-null-assertion

      const { cssRules } = injector.sheet;

      for (let i = 0, { length } = cssRules; i < length; ++i) {
        const cssRule = cssRules[i];

        if (
          cssRule.type === 7
          /* CSSRule.KEYFRAMES_RULE */
        ) {
          // Keyframes needn't be checked recursively, as they are never nested
          ruleIndexesByIdentName.set(cssRule.name, ruleIndexesByIdentName.size);
        } else {
          hydrateScopedSubtree(cssRule);
        }
      }
    },

    css(rules) {
      if (isDev) checkSetup(); // The leading white space character gets removed

      return decomposeToClassNames(
        rules,
        '',
        '',
        new Uint16Array(PRECEDENCE_GROUP_COUNT)
      ).slice(1);
    },

    keyframes(rules) {
      if (isDev) checkSetup();
      let identName;
      return {
        toString() {
          if (!identName) {
            let cssText = ''; // TODO: Replace var with const once it minifies equivalently
            // eslint-disable-next-line guard-for-in, no-restricted-syntax, no-var, vars-on-top

            for (var time in rules) {
              cssText += `${time}{`;
              const declarations = rules[time]; // TODO: Replace var with const once it minifies equivalently
              // eslint-disable-next-line guard-for-in, no-restricted-syntax, no-var, vars-on-top

              for (var property in declarations) {
                const value = declarations[property];

                if (value != null) {
                  cssText += serializeDeclarationList(property, value);
                }
              }

              cssText += '}';
            }

            identName = `_${murmur2(cssText)}`;

            if (!ruleIndexesByIdentName.has(identName)) {
              injector.insert(
                `@keyframes ${identName}{${cssText}}`,
                ruleIndexesByIdentName.size
              );
              ruleIndexesByIdentName.set(
                identName,
                ruleIndexesByIdentName.size
              );
            }
          } // eslint-disable-next-line @typescript-eslint/no-non-null-assertion

          return identName;
        },
      };
    },
  };
}

const defaultInstance = createInstance();
defaultInstance.setup({}); // Make sure to keep documentation comments for aliases

/* eslint-disable prefer-destructuring */

const setup = defaultInstance.setup;
const hydrate = defaultInstance.hydrate;
const css = defaultInstance.css;
const keyframes = defaultInstance.keyframes;

export {
  CSSOMInjector,
  DOMInjector,
  NoOpInjector,
  createInstance,
  css,
  hydrate,
  keyframes,
  setup,
};
