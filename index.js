import { css } from './otion.js';

const spacings = (i) =>
  i === 'a'
    ? 'auto'
    : `${
        [0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 32, 40, 48, 56, 64][i] / 4
      }rem`;

const breakpoints = [640, 768, 1024, 1280];

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

const spaces = {
  x: 'left',
  y: 'top',
};

const join = (a, b) => (b ? `${a}-${b}` : a);

const applySpacingInDirection = (t) => (i, d) =>
  [directions[d] || '']
    .flat()
    .reduce((a, b) => ({ ...a, [join(t, b)]: spacings(i) }), {});

const directive = {
  container: () => ({
    '@media': breakpoints.reduce(
      (a, b) => ({
        ...a,
        [`(min-width: ${b}px)`]: { 'max-width': `${b}px` },
      }),
      {}
    ),
  }),
  box: (t) => ({ 'box-sizing': `${t}-box` }),
  bg: (c, i = 0) => ({ background: colors[c][i] }),
  m: applySpacingInDirection('margin'),
  p: applySpacingInDirection('padding'),
  s: (i, d) => ({
    selectors: {
      '& > * + *': {
        [`margin-${spaces[d]}`]: spacings(i),
      },
    },
  }),
};

const mediaQuery = (b) => (rules) => ({
  '@media': {
    [`(min-width: ${breakpoints[b]}px)`]: rules,
  },
});

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
    if (breakpoint) rules = mediaQuery(breakpoint)(rules);
    console.log(rules);
    return { ...a, ...rules };
  }, {});
};

const styleSheet = document.createElement('style');

styleSheet.innerText = `
  * { box-sizing: border-box; margin: 0; padding: 0; }
  h1,h2,h3,h4,h5,h6 {
    font-size: inherit;
    font-weight: inherit;
  }
`;

document.head.appendChild(styleSheet);

const main = document.createElement('main');

main.className = css(
  windy('p-12 m-4 bg-green m-8-t p-17-t s-17-y m-a-x container box-border')
);

main.innerHTML = `
  <h1 class=${css(windy('bg-blue'))}>Hello World</h1>
`;
document.body.appendChild(main);

// console.log(JSON.stringify(windy('bg-blue m l')));
