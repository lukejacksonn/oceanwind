import translate from './translate.js';
import theme from './theme.js';

import { css } from './otion.js';

const mediaQuery = (b) => (rules) => ({
  '@media': {
    [`(min-width: ${theme.screen[b]})`]: rules,
  },
});

function mergeDeep(...objects) {
  const isObject = (obj) => obj && typeof obj === 'object';
  return objects.reduce((prev, obj) => {
    Object.keys(obj).forEach((key) => {
      const pVal = prev[key];
      const oVal = obj[key];
      if (Array.isArray(pVal) && Array.isArray(oVal)) {
        prev[key] = pVal.concat(...oVal);
      } else if (isObject(pVal) && isObject(oVal)) {
        prev[key] = mergeDeep(pVal, oVal);
      } else {
        prev[key] = oVal;
      }
    });
    return prev;
  }, {});
}

const ow = (classes) => {
  if (!classes[0]) return '';
  classes = classes[0].replace(/\s\s+/g, ' ');
  const rules = classes.split(' ').reduce((a, x) => {
    let mod;
    if (x.includes(':')) {
      mod = x.split(':')[0];
      x = x.split(':')[1];
    }
    let rule = translate(theme)(x);
    if (a.transform != undefined && rule.transform != undefined) {
      rule = {
        ...rule,
        transform: [a.transform, rule.transform].join(' '),
      };
    }
    if (theme.screen[mod]) rule = mediaQuery(mod)(rule);
    if (mod === 'hover') rule = { ':hover': rule };
    return mergeDeep(a, rule);
  }, {});

  console.log({ [classes.trim()]: rules });
  return css(rules);
};

export default ow;
