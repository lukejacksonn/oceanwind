import windy from './windy.js';
import { css } from './otion.js';
import config from './config.js';
import dictionary from './dictionary.js';

const theme = {
  word: '\\w+',
};

window.xx = dictionary.slice(0, 30).reduce((a, [prop, val]) => {
  let vars = prop
    .map((x) => (x[0] === '$' ? `(${theme[x.slice(1)]})` : `(${x})`))
    .join('-');

  const re = new RegExp(vars);
  // console.log(vars, val[1]);

  return {
    ...a,
    [prop[0]]: (args) => ({
      [val[0]]:
        console.log(re.test([prop[0], args].filter(Boolean).join('-'))) ||
        [prop[0], args].filter(Boolean).join('-').replace(re, val[1]),
    }),
  };
}, {});

console.log(xx);

const mediaQuery = (b) => (rules) => ({
  '@media': {
    [`(min-width: ${config.screens[b]})`]: rules,
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
  classes = classes[0];

  const rules = classes.split(' ').reduce((a, x) => {
    let mod;
    if (x.includes(':')) {
      mod = x.split(':')[0];
      x = x.split(':')[1];
    }
    let rule = windy(x);
    if (a.transform != undefined && rule.transform != undefined) {
      rule = {
        ...rule,
        transform: [a.transform, rule.transform].join(' '),
      };
    }
    if (config.screens[mod]) rule = mediaQuery(mod)(rule);
    if (mod === 'hover') rule = { ':hover': rule };
    return mergeDeep(a, rule);
  }, {});

  // console.log(rules);

  return css(rules);
};

// console.log(ow(`pt-4 bg-blue-500 flex-col-reverse`));

// console.log(windy`p-4`);

import { render, h } from 'https://unpkg.com/preact?module';
import htm from 'https://unpkg.com/htm?module';

const html = htm.bind(h);

render(
  html`
    <main
      className=${ow`sm:bg-red-500 md:bg-purple-800 font-sans w-full h-screen flex items-center justify-center`}
    >
      <div className=${ow`bg-white max-w-sm rounded overflow-hidden shadow-lg`}>
        <img
          className=${ow`w-full`}
          src="https://source.unsplash.com/WLUHO9A_xik/1600x900"
          alt="Sunset in the mountains"
        />
        <div className=${ow`px-6 py-4`}>
          <div className=${ow`font-bold text-xl mb-2`}>The Coldest Sunset</div>
          <p className=${ow`text-gray-700 text-base`}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div
          className=${ow`px-6 py-4 bg-gray-200 border-t-2 border-gray-600 border-solid`}
        >
          <span
            className=${ow`inline-block bg-gray-300 rounded-full px-2 py-1 text-sm font-semibold text-gray-700 mr-2`}
            >#photography</span
          >
          <span
            className=${ow`inline-block bg-gray-300 rounded-full px-2 py-1 text-sm font-semibold text-gray-700 mr-2`}
            >#travel</span
          >
          <span
            className=${ow`inline-block bg-gray-300 rounded-full px-2 py-1 text-sm font-semibold text-gray-700`}
            >#winter</span
          >
        </div>
      </div>
    </main>
  `,
  document.body
);

const styleSheet = document.createElement('style');

styleSheet.innerText = `
  * { box-sizing: border-box; margin: 0; padding: 0; border: 0; }
  img { width: 100%; height: auto; }
  h1,h2,h3,h4,h5,h6 {
    font-size: inherit;
    font-weight: inherit;
  }
`;

document.head.appendChild(styleSheet);
