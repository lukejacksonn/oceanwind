import { css } from './otion.js';

window.css = css;

const spacings = (i) =>
  i === 'a'
    ? 'auto'
    : i === 'px'
    ? '1px'
    : i.includes('/')
    ? `${i.split('/')[0] / i.split('/')[1]}%`
    : i === 'full'
    ? '100%'
    : `${
        [0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 32, 40, 48, 56, 64][i] / 4
      }rem`;

const breakpoints = { sm: 640, md: 768, lg: 1024, xl: 1280 };

const fontSizes = [0.75, 0.875, 1, 1.125, 1.25, 1.5, 1.875, 2.25, 3, 4];
const fontWeights = [100, 200, 300, 400, 500, 600, 700, 800, 900];
const fontFamilies = {
  sans:
    'font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
  serif: 'font-family: Georgia, Cambria, "Times New Roman", Times, serif',
  mono:
    'font-family: Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
};

const letterSpacings = [-0.05, -0.025, 0, 0.025, 0.05, 0.1];
const lineHeights = [
  1,
  1.25,
  1.375,
  1.5,
  1.625,
  2,
  '0.75rem',
  '1rem',
  '1.25rem',
  '1.5rem',
  '1.75rem',
  '2rem',
];

const opacities = [0, 0.25, 0.5, 0.75, 1];
const borderRadius = [0, 0.125, 0.25, 0.375, 0.5];
const borderWidths = [1, 2, 4, 8];

const colors = {
  red: ['#ff0000', '#ee0000'],
  green: ['#00ff00'],
  blue: ['#0000ff'],
};

const directions = {
  t: 'top',
  r: 'right',
  b: 'bottom',
  l: 'left',
  x: ['left', 'right'],
  y: ['top', 'bottom'],
};

const corners = {
  t: ['top-left', 'top-right'],
  r: ['top-right', 'bottom-right'],
  b: ['bottom-left', 'bottom-right'],
  l: ['bottom-left', 'top-left'],
  tl: ['top-left'],
  tr: ['top-right'],
  bl: ['bottom-left'],
  br: ['bottom-right'],
};

const spaces = {
  x: 'left',
  y: 'top',
};

const boxShadows = [
  'none',
  '0 0 0 1px rgba(0, 0, 0, 0.05)',
  '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
  '0 0 0 3px rgba(66, 153, 225, 0.5)',
];

const transitionDurations = [75, 100, 150, 200, 300, 500, 700, 1000];

const timingFunctions = {
  linear: 'linear',
  in: 'cubic-bezier(0.4, 0, 1, 1)',
  out: 'cubic-bezier(0, 0, 0.2, 1)',
  'in-out': 'cubic-bezier(0.4, 0, 0.2, 1);',
};

const join = (a, b) => (b ? `${a}-${b}` : a);

const applySpacingInDirection = (t) => (i, d) =>
  [directions[d] || '']
    .flat()
    .reduce((a, b) => ({ ...a, [join(t, b)]: spacings(i) }), {});

const flexes = {
  initial: '0 1 auto',
  1: '1 1 0%',
  auto: '1 1 auto',
  none: 'none',
};

const directive = {
  /* Layout */

  container: () => ({
    '@media': Object.values(breakpoints).reduce(
      (a, b) => ({
        ...a,
        [`(min-width: ${b}px)`]: { 'max-width': `${b}px` },
      }),
      {}
    ),
  }),
  box: (t) => ({ 'box-sizing': `${t}-box` }),
  d: (...t) => ({ display: t.join('-') }),
  fl: (t) => ({ float: t }),
  cl: (t) =>
    t === 'fix'
      ? {
          selectors: {
            '&::after': { content: '', display: 'table', clear: 'both' },
          },
        }
      : { clear: t },
  obf: (...t) => ({ 'object-fit': t.join('-') }),
  obp: (...t) => ({ 'object-position': t.map((x) => directions[x]).join(' ') }),
  ov: (t) => ({ overflow: t }),
  ovx: (t) => ({ 'overflow-x': t }),
  ovy: (t) => ({ 'overflow-y': t }),
  wos: (t) => ({ '-webkit-overflow-scrolling': t }),
  pos: (t) => ({ position: t }),
  top: (t) => ({ top: t }),
  right: (t) => ({ right: t }),
  bottom: (t) => ({ bottom: t }),
  left: (t) => ({ left: t }),
  v: (t) => ({ visibility: t }),
  z: (i) => ({
    'z-index': i === 'auto' ? 'auto' : [0, 10, 20, 30, 40, 50][i || 0],
  }),

  /* Flexbox */

  fd: (...d) => ({ 'flex-direction': d.join('-') }),
  fw: (...d) => ({ 'flex-wrap': d.join('-') }),
  ai: (...t) => ({ 'align-items': t.join('-') }),
  jc: (...t) => ({ 'align-items': t.join('-') }),
  f: (t) => ({
    flex: flexes[t] || flexes['initial'],
  }),
  fg: (t) => ({ 'flex-grow': t ? 1 : 0 }),
  fs: (t) => ({ 'flex-shrink': t ? 1 : 0 }),
  or: (i) => ({ order: i }),

  /* Grid */

  /* Spacing */

  m: applySpacingInDirection('margin'),
  p: applySpacingInDirection('padding'),
  s: (i, d) => ({
    selectors: {
      '& > * + *': {
        [`margin-${spaces[d]}`]: spacings(i),
      },
    },
  }),

  /* Sizing */

  w: (i) => ({ width: i === 'screen' ? '100vw' : spacings(i) }),
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
    'font-family': fontFamilies[t],
  }),
  fsi: (i) => ({ 'font-size': fontSizes[i || 0] }),
  fsm: (t) => ({
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',
  }),
  fst: (t) => ({ 'font-style': t }),
  fw: (i) => ({ 'font-weight': fontWeights[i || 0] }),
  ls: (i) => ({ 'letter-spacing': `${letterSpacings[i || 0]}em` }),
  lh: (i) => ({ 'line-height': lineHeights[i || 0] }),
  lst: (t) => ({ 'list-style-type': t }),
  lsp: (t) => ({ 'list-style-position': t }),
  phc: (t, i) => ({ '::placeholder': { color: colors[t][i || 0] } }),
  pho: (i) => ({ '::placeholder': { opacity: opacities[i || 0] } }),
  ta: (t) => ({ 'text-align': t }),
  tc: (t, i) => ({ 'text-color': colors[t][i || 0] }),
  to: (i) => ({ 'text-opacity': opacities[i || 0] }),
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
  bgc: (t, i) => ({ 'background-color': colors[t][i || 0] }),
  // bgo: (t, i) => ({ 'background-opacity': colors[t][i || 0] }), TODO
  bgp: (...t) => ({ 'background-position': t.join(' ') }),
  bgr: (...t) => ({ 'background-repeat': t.join('-') }),
  bgs: (t) => ({ 'background-size': t }),

  /* Borders */

  br: (i, d) =>
    !corners[d]
      ? { 'border-radius': `${borderRadius[i] || 0}rem` }
      : corners[d].reduce(
          (a, b) => ({
            ...a,
            [[`border`, b, 'radius'].join('-')]: `${borderRadius[i] || 0}rem`,
          }),
          {}
        ),
  bw: (i, d) => ({
    [`border-${directions[d] ? directions[d] + '-' : ''}width`]: `${
      borderWidths[i || 0]
    }px`,
  }),
  bc: (t, i) => ({ 'border-color': colors[t][i || 0] }),
  bs: (t) => ({ 'border-style': t }),
  bd: (d, i) => ({
    selectors: {
      '& > * + *': { [`border-${spaces[d]}-width`]: borderWidths[i] },
    },
  }),
  bdc: (t, i) => ({
    selectors: { '& > * + *': { [`border-color`]: colors[t][i || 0] } },
  }),
  bds: (t) => ({ selectors: { '& > * + *': { [`border-style`]: t } } }),

  /* Tables */

  tbc: (t) => ({ 'border-collapse': t }),
  tl: (t) => ({ 'table-layout': t }),

  /* Effects */

  bs: (i) => ({ 'box-shadow': boxShadows[i] }),
  tl: (t) => ({ 'table-layout': t }),
  op: (i) => ({ opacity: opacities[i || 0] }),

  /* Transitions */

  trp: (t) => ({ 'transition-property': t }),
  trd: (i) => ({ 'transition-duration': transitionDurations[i] }),
  trtf: (i) => ({ 'transition-timing-function': timingFunctions[i] }),
  trde: (i) => ({ 'transition-delay': transitionDurations[i] }),

  /* Transitions */

  tr: (t, i) => ({
    transform:
      {
        scale: `scale(${scales[i]})`,
        rotate: `rotate(${rotates[i]}deg)`,
        translateX: `translateX(${spacings(i)})`,
        translateY: `translateY(${spacings(i)})`,
        skewX: `skewX(${skews[i]}deg)`,
        skewY: `skewY(${skews[i]}deg)`,
      }[t] || '',
  }),
  tro: (...d) => ({
    'transform-origin': d.map((x) => directions[x]).join(' '),
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
  f: (t) => ({ fill: t ? t : 'currentColor' }),
};

const scales = [0, 0.5, 0.75, 0.9, 0.95, 1, 1.05, 1.1, 1.25, 1.5];
const rotates = [0, 45, 90, 180, 270];
const skews = [0, 3, 6, 9, 12];

const mediaQuery = (b) => (rules) => ({
  '@media': {
    [`(min-width: ${breakpoints[b]}px)`]: rules,
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
  return classes.split(' ').reduce((a, x) => {
    let breakpoint;
    if (x.includes(':')) {
      breakpoint = x.split(':')[0];
      x = x.split(':')[1];
    }
    const [k, ...args] = x.split('-');
    if (!directive[k]) return a;
    let rules = directive[k](...args);
    if (a.transform != undefined && rules.transform != undefined) {
      rules = { ...rules, transform: [a.transform, rules.transform].join(' ') };
    }
    if (breakpoint) rules = mediaQuery(breakpoint)(rules);
    console.log(mergeDeep(a, rules));
    return mergeDeep(a, rules);
  }, {});
};

const styleSheet = document.createElement('style');

styleSheet.innerText = `
  * { box-sizing: border-box; margin: 0; padding: 0; border: 0; }
  h1,h2,h3,h4,h5,h6 {
    font-size: inherit;
    font-weight: inherit;
  }
`;

document.head.appendChild(styleSheet);

const main = document.createElement('main');

main.className = css(
  windy(
    'bgc-green m-10 p-10 bd-x-1 bdc-red bds-solid bs-6 op-3 tr-scale-1 tr-rotate-1 tr-skewX-1 tr-translateY-10'
  )
);

main.innerHTML = `
  <h1 class="${css(windy('d-inline-flex'))}">Hello World</h1>
  <button class="${css(windy('ws-nowrap'))}">Hey idshfiuerf ierhfi he</button>
  <button>Hey idshfiuerf ierhfi he</button>
  <button>Hey idshfiuerf ierhfi he</button>
  <button>Hey idshfiuerf ierhfi he</button>
`;
document.body.appendChild(main);

// console.log(JSON.stringify(windy('bg-blue m l')));
