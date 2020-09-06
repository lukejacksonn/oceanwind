import translate from './core/translate.js';
import theme from './core/theme.js';
import merge from './util/merge.js';
import { css } from './util/otion.js';

export default ([rules]) => {
  // Keep track of processed rules
  const seen = {};
  // Go through each rule in the array and translate to css
  const styles = rules
    .replace(/\s\s+/g, ' ')
    .trim()
    .split(' ')
    .map((rule) => {
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
      if (!Object.keys(translation)[0])
        console.warn(`No translation for ${directive}`);
      // Apply variants to the translation
      variants.reverse().forEach((variant) => {
        let size = theme.screen[variant];
        if (size)
          translation = { '@media': { [`(min-width: ${size})`]: translation } };
        else translation = { [`:${variant}`]: translation };
      });
      // Return translation with variants applied
      return translation;
    });
  // Return class names for styles
  return css(merge(...styles));
};
