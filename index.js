import translate from './translate.js';
import defaultTheme, { globals } from './theme.js';

import merge from './util/merge.js';
import normalize from './util/normalize.js';

import { css } from './vendor/otion.js';

// For server side rendering with client hydration
export { setup, hydrate } from './vendor/otion.js';

export const process = (theme) => (strings, values) => {
  // Keep track of processed rules
  const seen = {};
  // Go through each rule in the array and translate to css
  const styles = normalize(strings, values).map((rule) => {
    // Warn about any duplicate rule declarations
    if (seen[rule]) console.warn(`Duplicate delclaration of ${rule}`);
    // Mark rule as seen
    seen[rule] = true;
    // Split the rule into parts
    rule = rule.split(':');
    // Seperate out directive from variants
    let directive = rule.pop();
    let variants = rule;
    // Lookup translation for directive
    let translation = translate(theme)(directive);
    // Warn if there was no translation for the given directive
    if (!Object.keys(translation)[0]) {
      console.warn(`No translation for ${directive}`);
    }
    // Apply variants to the translation
    variants.reverse().forEach((variant) => {
      let size = theme.screens[variant];
      if (size) {
        translation = {
          '@media': { [`(min-width: ${size})`]: translation },
        };
      } else translation = { [`:${variant}`]: translation };
    });
    // Return translation with variants applied
    return translation;
  });
  // Deep merge all translations
  return merge(...styles);
};

// Utility for merging overrides with the default theme
export const configure = (input) =>
  merge(defaultTheme(merge(globals, input)), input);

// If passed a theme then return process primed with merged themes
export const themed = (input) => {
  const theme = configure(input);
  return (strings, ...values) => css(process(theme)(strings, values));
};

// If passed a tagged template then process with the default theme
const defaultThemeApplied = defaultTheme(globals);
export default (strings, ...values) =>
  css(process(defaultThemeApplied)(strings, values));
