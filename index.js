import { css } from './otion.js';
import config from './config.js';
import dictionary from './dictionary.js';

window.css = css;

const spacings = ([x]) => {
  if (x === 'auto') return 'auto';
  if (x === 'px') return '1px';
  if (x === 'full') return '100%';
  if (/\d\/\d/.test(x)) return `${(x.split('/')[0] / x.split('/')[1]) * 100}%`;
  if (/^(0|1|2|3|4|5|6|8|10|12|16|20|24|32|40|48|56|64)$/.test(x))
    return `${x / 4}rem`;
  console.warn('Bad spacing unit:', x);
  return undefined;
};

// console.log({
//   auto: spacings('a'),
//   '1px': spacings('px'),
//   '100%': spacings('full'),
//   '50%': spacings('1/2'),
//   '6rem': spacings(24),
//   undefined: spacings(37),
// });

const spaces = {
  x: 'left',
  y: 'top',
};

const after = (x) => ({ selectors: { '&::after': x } });

const T = (k, vf = (v) => v.join('')) => (...v) => ({
  [k]: vf(v),
});

const A = (k) => (...v) => ({ [k]: flexes(v.join('-')) });

const join = (seperator) => (args) => args.join(seperator);

const flexes = (x) =>
  x
    .replace('no-wrap', 'nowrap')
    .replace('col', 'column')
    .replace('between', 'space-between')
    .replace('around', 'space-around')
    .replace('start', 'flex-start')
    .replace('end', 'flex-end');

const directive = {
  /* Layout */

  container: () => ({
    '@media': Object.values(config.screens).reduce(
      (a, b) => ({ ...a, [`(min-width: ${b})`]: { 'max-width': b } }),
      {}
    ),
  }),

  box: T('box-sizing', (arg) => `${arg}-box`),
  display: T('display', join('-')),

  float: T('float'),
  clearfix: () => after({ content: '', display: 'table', clear: 'both' }),
  clear: T('clear'),

  object: (...args) =>
    ['contain', 'cover', 'fill', 'none', 'scale'].includes(args[0])
      ? T('object-fit', join('-'))(...args)
      : { 'object-position': (config.edge[args] || args).join(' ') },

  overflow: (...args) =>
    ['x', 'y'].includes(args[0])
      ? T(`overflow-${args[0]}`)(...args.slice(1))
      : T('overflow')(...args),

  scrolling: T('-webkit-overflow-scrolling'),

  ...['static', 'fixed', 'absolute', 'relative', 'sticky'].reduce(
    (a, position) => ({ ...a, [position]: () => ({ position }) }),
    {}
  ),

  inset: (...args) =>
    ['x', 'y'].includes(args[0])
      ? config.edge[args[0]].reduce(
          (a, edge) => ({ ...a, [edge]: args[1] }),
          {}
        )
      : { top: args[0], right: args[0], bottom: args[0], left: args[0] },

  top: T('top'),
  right: T('right'),
  bottom: T('bottom'),
  left: T('left'),

  invisible: () => ({ visibility: 'hidden' }),
  visible: () => ({ visibility: 'visible' }),

  z: (i) => ({ 'z-index': config.index[i] }),

  /* Flexbox */

  flex: (...args) =>
    args.includes('wrap')
      ? { 'flex-wrap': flexes(args.join('-')) }
      : args.includes('col') || args.includes('row')
      ? { 'flex-direction': flexes(args.join('-')) }
      : args.includes('grow') || args.includes('shrink')
      ? { [`flex-${args[0]}`]: args[1] || '1' }
      : { flex: config.flex[args[0]] },

  items: A('align-items'),
  content: A('align-content'),
  self: A('align-self'),
  justify: A('justify-content'),

  order: (i) => ({ order: i }),

  /* Grid */

  /* Spacing */

  m: T('margin', (...arg) => spacings(arg.join(''))),
  p: T('padding', (...arg) => spacings(arg.join(''))),
  ...'mt,mr,mb,ml,mx,my,pt,pl,pr,pb,pl,px,py'.split(',').reduce(
    (a, d) => ({
      ...a,
      [d]: (...s) =>
        config.edge[d[1]].reduce(
          (b, edge) => ({
            ...b,
            [`${d[0] === 'm' ? 'margin' : 'padding'}-${edge}`]: spacings(s),
          }),
          {}
        ),
    }),
    {}
  ),

  space: (d, ...args) => ({
    selectors: {
      '& > * + *': {
        [`margin-${d === 'x' ? 'left' : 'top'}`]: spacings(args),
      },
    },
  }),

  /* Sizing */

  w: (...i) => ({ width: i === 'screen' ? '100vw' : spacings(i) }),
  mnw: (i) => ({ 'min-width': i === 'full' ? '100%' : 0 }),
  mxw: (i) => ({ 'max-width': spacings(i) }),

  h: (i) => ({ height: i === 'screen' ? '100vh' : spacings(i) }),
  mnh: (i) => ({
    'min-height': i === 'screen' ? '100vh' : i === 'full' ? '100%' : 0,
  }),
  mxh: (i) => ({
    'max-height': i === 'screen' ? '100vh' : i === 'full' ? '100%' : 0,
  }),

  /* Typography */

  ff: (t) => ({
    'font-family': config.fontFamily[t],
  }),
  fsi: (i) => ({ 'font-size': config.fontSize[i || 0] }),
  fsm: (t) => ({
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',
  }),
  fst: (t) => ({ 'font-style': t }),
  fw: (i) => ({ 'font-weight': config.fontWeight[i] }),
  ls: (i) => ({ 'letter-spacing': `${config.tracking[i]}em` }),
  lh: (i) => ({ 'line-height': config.lineHeight[i] }),
  lst: (t) => ({ 'list-style-type': t }),
  lsp: (t) => ({ 'list-style-position': t }),
  phc: (t, i) => ({ '::placeholder': { color: config.colors[t][i] } }),
  pho: (i) => ({ '::placeholder': { opacity: config.opacity[i] } }),
  ta: (t) => ({ 'text-align': t }),
  tc: (t, i) => ({ 'text-color': config.colors[t][i] }),
  to: (i) => ({ 'text-opacity': config.opacity[i] }),
  td: (...t) => ({ 'text-decoration': t.join('-') }),
  tt: (t) => ({ 'text-transform': t }),
  va: (t) => ({ 'vertical-align': t }),
  ws: (...t) => ({ 'white-space': t.join('-') }),
  wb: (t) =>
    ({
      normal: { 'word-break': 'normal', 'overflow-wrap': 'normal' },
      words: { 'overflow-wrap': 'break-word' },
      all: { 'word-break': 'break-all' },
      truncate: {
        overflow: 'hidden',
        'text-overflow': 'ellipsis',
        'white-space': 'nowrap',
      },
    }[t] || {}),

  /* Backgrounds */

  bga: (t) => ({ 'background-attachment': t }),
  bgc: (t, i) => ({ 'background-color': config.colors[t][i] }),
  // bgo: (t, i) => ({ 'background-opacity': config.colors[t][i || 0] }), TODO
  bgp: (...t) => ({ 'background-position': t.join(' ') }),
  bgr: (...t) => ({ 'background-repeat': t.join('-') }),
  bgs: (t) => ({ 'background-size': t }),

  /* Borders */

  br: (i, d) =>
    !config.corner[d]
      ? { 'border-radius': `${config.rounded[i]}rem` }
      : config.corner[d].reduce(
          (a, b) => ({
            ...a,
            [[`border`, b, 'radius'].join('-')]: `${config.rounded[i] || 0}rem`,
          }),
          {}
        ),
  bw: (i, d) => ({
    [`border-${config.edge[d] ? config.edge[d] + '-' : ''}width`]: `${
      config.borderWidth[i || 0]
    }px`,
  }),
  bc: (t, i) => ({ 'border-color': config.colors[t][i || 0] }),
  bs: (t) => ({ 'border-style': t }),
  bd: (d, i) => ({
    selectors: {
      '& > * + *': { [`border-${spaces[d]}-width`]: config.borderWidth[i] },
    },
  }),
  bdc: (t, i) => ({
    selectors: { '& > * + *': { [`border-color`]: config.colors[t][i || 0] } },
  }),
  bds: (t) => ({ selectors: { '& > * + *': { [`border-style`]: t } } }),

  /* Tables */

  tbc: (t) => ({ 'border-collapse': t }),
  tl: (t) => ({ 'table-layout': t }),

  /* Effects */

  bs: (i) => ({ 'box-shadow': config.shadow[i] }),
  tl: (t) => ({ 'table-layout': t }),
  op: (i) => ({ opacity: config.opacity[i] }),

  /* Transitions */

  trp: (t) => ({ 'transition-property': t }),
  trd: (i) => ({ 'transition-duration': config.duration[i] }),
  trtf: (i) => ({ 'transition-timing-function': config.timing[i] }),
  trde: (i) => ({ 'transition-delay': config.duration[i] }),

  /* Transitions */

  tr: (t, i) => ({
    transform:
      {
        scale: `scale(${config.scale[i]})`,
        rotate: `rotate(${config.rotate[i]}deg)`,
        translateX: `translateX(${spacings(i)})`,
        translateY: `translateY(${spacings(i)})`,
        skewX: `skewX(${config.skew[i]}deg)`,
        skewY: `skewY(${config.skew[i]}deg)`,
      }[t] || '',
  }),
  tro: (...d) => ({
    'transform-origin': d.map((x) => config.edge[x]).join(' '),
  }),

  /* Interactivity */

  reset: () => ({ appearance: 'none' }),
  c: (t) => ({ cursor: t }),
  o: (t) => ({ outline: t === 'none' ? 'none' : '' }),
  pe: (t) => ({ 'pointer-events': t }),
  r: (t) => ({
    resize: { none: 'none', y: 'vertical', x: 'horizontal' }[t] || 'both',
  }),
  u: (t) => ({ 'user-select': t }),
  fill: (t) => ({ fill: t ? t : 'currentColor' }),
};

const mediaQuery = (b) => (rules) => ({
  '@media': {
    [`(min-width: ${config.screens[b]}px)`]: rules,
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

const windy = (classes) => {
  if (!classes) return {};
  console.log(classes);

  return classes.split(' ').reduce((a, x) => {
    let breakpoint;
    if (x.includes(':')) {
      breakpoint = x.split(':')[0];
      x = x.split(':')[1];
    }
    const [k, ...args] = x.split('-');
    if (!directive[k]) {
      console.log('Could not find directive', k);
      return a;
    }
    let rules = directive[k](...args);

    if (a.transform != undefined && rules.transform != undefined) {
      rules = { ...rules, transform: [a.transform, rules.transform].join(' ') };
    }
    if (breakpoint) rules = mediaQuery(breakpoint)(rules);
    console.log(mergeDeep(a, rules));
    return mergeDeep(a, rules);
  }, {});
};

import { render, h } from 'https://unpkg.com/preact?module';
import htm from 'https://unpkg.com/htm?module';

const html = htm.bind(h);
const ob = (x) => css(windy(x));

const main = ob('mt-56 space-y-2 w-1/2 sm:bg-red-500');
const h1 = ob('');
const btn = ob('');
const img = ob('');
const ul = ob('');

render(
  html`
    <main className=${main}>
      <h1 className=${h1}>Heloo Wolrd</h1>
      <button className=${btn}>Click ME</button>
      <img
        className=${img}
        src="https://source.unsplash.com/WLUHO9A_xik/1600x900"
      />
      <ul className=${ul}>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
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
