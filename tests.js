import translate from './translate.js';
import theme from './theme.js';

const cases = {
  hidden: { display: 'none' },
  inline: { display: 'inline' },
  flex: { display: 'flex' },
  grid: { display: 'grid' },
  table: { display: 'table' },

  'flow-root': { display: 'flow-root' },
  'inline-block': { display: 'inline-block' },
  'inline-flex': { display: 'inline-flex' },
  'inline-grid': { display: 'inline-grid' },
  'table-caption': { display: 'table-caption' },
  'table-cell': { display: 'table-cell' },
  'table-column': { display: 'table-column' },
  'table-row': { display: 'table-row' },

  static: { position: 'static' },
  fixed: { position: 'fixed' },
  absolute: { position: 'absolute' },
  relative: { position: 'relative' },
  sticky: { position: 'sticky' },

  visible: { visibility: 'visible' },
  invisible: { visibility: 'hidden' },

  antialiased: {
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',
  },

  italic: { 'font-style': 'italic' },

  underline: { 'text-decoration': 'underline' },

  uppercase: { 'text-transform': 'uppercase' },
  lowercase: { 'text-transform': 'lowercase' },
  capitalize: { 'text-transform': 'capitalize' },
  'normal-case': { 'text-transform': 'none' },

  truncate: {
    overflow: 'hidden',
    'text-overflow': 'ellipsis',
    'white-space': 'nowrap',
  },

  transition: {
    'transition-property':
      'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform',
  },

  resize: {
    resize: 'both',
  },

  'table-auto': { 'table-layout': 'auto' },
  'table-fixed': { 'table-layout': 'fixed' },

  'flex-row': { 'flex-direction': 'row' },
  'flex-col': { 'flex-direction': 'column' },
  'flex-wrap': { 'flex-wrap': 'wrap' },
  'flex-initial': { flex: '0 1 auto' },
  'flex-1': { flex: '1 1 0%' },
  'flex-auto': { flex: '1 1 auto' },
  'flex-none': { flex: 'none' },
  'flex-grow': { 'flex-grow': '1' },
  'flex-shrink': { 'flex-shrink': '1' },

  'items-start': { 'align-items': 'flex-start' },
  'items-end': { 'align-items': 'flex-end' },
  'items-center': { 'align-items': 'center' },
  'items-baseline': { 'align-items': 'baseline' },
  'items-stretch': { 'align-items': 'stretch' },

  'content-start': { 'align-content': 'flex-start' },
  'content-end': { 'align-content': 'flex-end' },
  'content-between': { 'align-content': 'space-between' },
  'content-around': { 'align-content': 'space-around' },
  'content-center': { 'align-content': 'center' },

  'justify-start': { 'justify-content': 'flex-start' },
  'justify-end': { 'justify-content': 'flex-end' },
  'justify-between': { 'justify-content': 'space-between' },
  'justify-around': { 'justify-content': 'space-around' },
  'justify-center': { 'justify-content': 'center' },

  'self-auto': { 'align-self': 'auto' },
  'self-start': { 'align-self': 'flex-start' },
  'self-end': { 'align-self': 'flex-end' },
  'self-center': { 'align-self': 'center' },
  'self-stretch': { 'align-self': 'stretch' },

  'order-none': { order: '0' },
  'order-last': { order: '9999' },
  'order-first': { order: '-9999' },
  'order-1': { order: '1' },
  'order-12': { order: '12' },

  'row-auto': { 'grid-row': 'auto' },
  'col-auto': { 'grid-column': 'auto' },

  'w-full': { width: '100%' },
  'w-screen': { width: '100vw' },
  'w-1': { width: theme.unit['1'] },
  'w-99': { width: 'calc(99 * 100%)' },

  'h-full': { height: '100%' },
  'h-screen': { height: '100vh' },
  'h-1': { height: theme.unit['1'] },
  'h-99': { height: 'calc(99 * 100%)' },

  'text-left': { 'text-align': 'left' },
  'text-right': { 'text-align': 'right' },
  'text-center': { 'text-align': 'center' },
  'text-justify': { 'text-align': 'justify' },

  'text-current': { color: 'currentColor' },

  'text-xs': { 'font-size': theme.text['xs'] },

  'text-orange': { color: 'orange' },

  'subpixel-antialiased': {
    '-webkit-font-smoothing': 'auto',
    '-moz-osx-font-smoothing': 'auto',
  },

  'not-italic': { 'font-style': 'normal' },

  'list-inside': { 'list-style-position': 'inside' },
  'list-outside': { 'list-style-position': 'outside' },

  'list-none': { 'list-style-type': 'none' },
  'list-disc': { 'list-style-type': 'disc' },
  'list-decimal': { 'list-style-type': 'decimal' },

  'no-underline': { 'text-decoration': 'none' },

  'line-through': { 'text-decoration': 'line-through' },

  'break-normal': { 'word-break': 'normal', 'overflow-wrap': 'normal' },
  'break-words': { 'overflow-wrap': 'break-word' },
  'break-all': { 'word-break': 'break-all' },

  'bg-fixed': { 'background-attachment': 'fixed' },
  'bg-bottom': { 'background-position': 'bottom' },
  'bg-repeat': { 'background-repeat': 'repeat' },
  'bg-auto': { 'background-size': 'auto' },
  'bg-current': { 'background-color': 'currentColor' },
  'bg-rebeccapurple': { 'background-color': 'rebeccapurple' },

  'border-solid': { 'border-style': 'solid' },
  'border-collapse': { 'border-collapse': 'collapse' },
  'border-separate': { 'border-collapse': 'separate' },
  'border-current': { 'border-color': 'currentColor' },
  'border-1': { 'border-width': theme.border['1'] },
  'border-hotpink': { 'border-color': 'hotpink' },

  'shadow-none': { 'box-shadow': 'none' },
  'shadow-xs': { 'box-shadow': theme.shadow['xs'] },

  'opacity-100': { opacity: '1' },
  'opacity-50': { opacity: '0.50' },
  'opacity-0': { opacity: '0.0' },

  'opacity-69': { opacity: '0.69' },

  'transition-colors': {
    'transition-property':
      'background-color, border-color, color, fill, stroke',
  },
  'transition-shadow': { 'transition-property': 'box-shadow' },
  'transition-all': { 'transition-property': 'all' },
  'transition-none': { 'transition-property': 'none' },

  'ease-linear': { 'transition-timing-function': 'linear' },
  'ease-in': {
    'transition-timing-function': 'cubic-bezier(0.4, 0, 1, 1)',
  },
  'ease-out': {
    'transition-timing-function': 'cubic-bezier(0, 0, 0.2, 1)',
  },

  'appearance-none': { appearance: 'none' },
  'outline-none': { outline: '0' },

  'resize-x': { resize: 'vertical' },
  'resize-y': { resize: 'horizontal' },
  'resize-none': { resize: 'none' },

  'fill-current': { fill: 'currentColor' },
  'stroke-current': { stroke: 'currentColor' },
  'stroke-1': { 'stroke-width': '1' },

  'sr-only': {
    width: '1px',
    height: '1px',
    padding: '0',
    margin: '-1px',
    overflow: 'hidden',
    clip: 'rect(0,0,0,0)',
    'border-width': '0',
  },

  'box-border': { 'box-sizing': 'border-box' },
  'box-content': { 'box-sizing': 'content-box' },

  'float-left': { float: 'left' },
  'float-right': { float: 'right' },

  'clear-left': { clear: 'left' },
  'clear-right': { clear: 'right' },
  'clear-both': { clear: 'both' },

  'overflow-auto': { overflow: 'auto' },
  'overflow-hidden': { overflow: 'hidden' },
  'overflow-visible': { overflow: 'visible' },
  'overflow-scroll': { overflow: 'scroll' },

  'scrolling-touch': { '-webkit-overflow-scrolling': 'touch' },
  'scrolling-auto': { '-webkit-overflow-scrolling': 'auto' },

  'z-0': { 'z-index': '0' },
  'z-auto': { 'z-index': 'auto' },
  'z-10': { 'z-index': '10' },

  'gap-0': { gap: theme.unit['0'] },
  'gap-1': { gap: theme.unit['1'] },
  'gap-10': { gap: theme.unit['10'] },

  'p-0': { padding: theme.unit['0'] },
  'p-1': { padding: theme.unit['1'] },
  'p-10': { padding: theme.unit['10'] },

  'px-0': {
    'padding-left': theme.unit['0'],
    'padding-right': theme.unit['0'],
  },

  'py-0': {
    'padding-top': theme.unit['0'],
    'padding-bottom': theme.unit['0'],
  },

  'pt-0': {
    'padding-top': theme.unit['0'],
  },

  'pr-0': {
    'padding-right': theme.unit['0'],
  },

  'pb-0': {
    'padding-bottom': theme.unit['0'],
  },

  'pl-0': {
    'padding-left': theme.unit['0'],
  },

  'm-0': { margin: theme.unit['0'] },
  'm-1': { margin: theme.unit['1'] },
  'm-10': { margin: theme.unit['10'] },

  'mx-0': {
    'margin-left': theme.unit['0'],
    'margin-right': theme.unit['0'],
  },

  'my-0': {
    'margin-top': theme.unit['0'],
    'margin-bottom': theme.unit['0'],
  },

  'mt-0': {
    'margin-top': theme.unit['0'],
  },

  'mr-0': {
    'margin-right': theme.unit['0'],
  },

  'mb-0': {
    'margin-bottom': theme.unit['0'],
  },

  'ml-0': {
    'margin-left': theme.unit['0'],
  },

  'font-sans': { 'font-family': theme.font['sans'] },
  'font-hairline': { 'font-weight': theme.weight['hairline'] },

  'tracking-tighter': { 'letter-spacing': theme.tracking['tighter'] },
  'tracking-widest': { 'letter-spacing': theme.tracking['widest'] },

  'leading-3': { 'line-height': theme.leading['3'] },
  'leading-tight': { 'line-height': theme.leading['tight'] },

  'align-baseline': { 'vertical-align': 'baseline' },

  rounded: { 'border-radius': theme.rounded[''] },
  'rounded-none': { 'border-radius': theme.rounded['none'] },
  'rounded-full': { 'border-radius': theme.rounded['full'] },

  'duration-75': { 'transition-duration': `${theme.duration['75']}ms` },

  'delay-75': { 'transition-delay': `${theme.duration['75']}ms` },

  'scale-0': { transform: `scale(${theme.scale['0']})` },
  'scale-50': { transform: `scale(${theme.scale['50']})` },
  'scale-100': { transform: `scale(${theme.scale['100']})` },

  'rotate-0': { transform: `rotate(${theme.rotate['0']}deg)` },
  'rotate-45': { transform: `rotate(${theme.rotate['45']}deg)` },
  'rotate-180': { transform: `rotate(${theme.rotate['180']}deg)` },
  '-rotate-90': { transform: `rotate(-${theme.rotate['90']}deg)` },

  'origin-center': { 'transform-origin': 'center' },

  'cursor-pointer': { cursor: 'pointer' },

  'select-none': { 'user-select': 'none' },
  'select-auto': { 'user-select': 'auto' },

  'table-column-group': { display: 'table-column-group' },

  'object-scale-down': { 'object-fit': 'scale-down' },
  'object-left-bottom': { 'object-position': 'left bottom' },

  'inset-x-0': { left: '0', right: '0' },
  'inset-x-auto': { left: 'auto', right: 'auto' },

  'inset-y-0': { top: '0', bottom: '0' },
  'inset-y-auto': { top: 'auto', bottom: 'auto' },

  'flex-row-reverse': { 'flex-direction': 'row-reverse' },
  'flex-col-reverse': { 'flex-direction': 'column-reverse' },
  'flex-no-wrap': { 'flex-wrap': 'nowrap' },
  'flex-wrap-reverse': { 'flex-wrap': 'wrap-reverse' },
  'flex-grow-0': { 'flex-grow': '0' },
  'flex-shrink-0': { 'flex-shrink': '0' },

  'grid-cols-1': { 'grid-template-columns': 'repeat(1, minmax(0, 1fr))' },
  'grid-cols-none': { 'grid-template-columns': 'none' },

  'grid-rows-1': { 'grid-template-rows': 'repeat(1, minmax(0, 1fr))' },
  'grid-rows-none': { 'grid-template-rows': 'none' },

  'grid-flow-row': { 'grid-auto-flow': 'row' },
  'grid-flow-col': { 'grid-auto-flow': 'col' },

  'min-w-0': { 'min-width': '0' },
  'min-w-full': { 'min-width': '100%' },

  'min-h-0': { 'min-height': '0' },
  'min-h-full': { 'min-height': '100%' },

  'max-w-none': { 'max-width': 'none' },
  'max-w-full': { 'max-width': '100%' },
  'max-w-xs': { 'max-width': theme.width['xs'] },

  'max-h-full': { 'max-height': '100%' },
  'max-h-screen': { 'max-height': '100vh' },

  'whitespace-normal': { 'white-space': 'normal' },
  'whitespace-no-wrap': { 'white-space': 'nowrap' },
  'whitespace-pre-wrap': { 'white-space': 'pre-wrap' },

  'bg-no-repeat': { 'background-repeat': 'no-repeat' },
  'bg-repeat-x': { 'background-repeat': 'repeat-x' },
  'bg-repeat-y': { 'background-repeat': 'repeat-y' },
  'bg-repeat-round': { 'background-repeat': 'round' },
  'bg-repeat-space': { 'background-repeat': 'space' },
  'bg-left-bottom': { 'background-position': 'left bottom' },
  'bg-right-bottom': { 'background-position': 'right bottom' },

  'bg-red-100': { 'background-color': theme.colors['red']['100'] },
  'bg-gray-500': { 'background-color': theme.colors['gray']['500'] },

  'ease-in-out': {
    'transition-timing-function': 'cubic-bezier(0.4, 0, 0.2, 1)',
  },

  'not-sr-only': {
    position: 'static',
    width: 'auto',
    height: 'auto',
    padding: '0',
    margin: '0',
    overflow: 'visible',
    clip: 'auto',
    'white-space': 'normal',
  },

  'overflow-x-hidden': { 'overflow-x': 'hidden' },
  'overflow-y-hidden': { 'overflow-y': 'hidden' },

  'col-span-1': { 'grid-column': 'span 1 / span 1' },
  'col-span-12': { 'grid-column': 'span 12 / span 12' },

  'col-start-1': { 'grid-column-start': '1' },
  'col-start-12': { 'grid-column-start': '12' },

  'col-end-1': { 'grid-column-end': '1' },
  'col-end-12': { 'grid-column-end': '12' },

  'col-gap-1': { 'column-gap': theme.unit['1'] },
  'col-gap-px': { 'column-gap': theme.unit['px'] },

  'row-span-1': { 'grid-row': 'span 1 / span 1' },
  'row-span-12': { 'grid-row': 'span 12 / span 12' },

  'row-start-1': { 'grid-row-start': '1' },
  'row-start-7': { 'grid-row-start': '7' },

  'row-end-1': { 'grid-row-end': '1' },
  'row-end-7': { 'grid-row-end': '7' },

  '-m-0': { margin: `-${theme.unit['0']}` },
  '-m-10': { margin: `-${theme.unit['10']}` },
  '-m-px': { margin: `-${theme.unit['px']}` },

  'rounded-t-sm': {
    'border-top-left-radius': theme.rounded['sm'],
    'border-top-right-radius': theme.rounded['sm'],
  },

  'rounded-r-sm': {
    'border-top-right-radius': theme.rounded['sm'],
    'border-bottom-right-radius': theme.rounded['sm'],
  },

  'rounded-b-sm': {
    'border-bottom-left-radius': theme.rounded['sm'],
    'border-bottom-right-radius': theme.rounded['sm'],
  },

  'rounded-l-sm': {
    'border-top-left-radius': theme.rounded['sm'],
    'border-bottom-left-radius': theme.rounded['sm'],
  },

  'rounded-tl-sm': {
    'border-top-left-radius': theme.rounded['sm'],
  },

  'rounded-tr-sm': {
    'border-top-right-radius': theme.rounded['sm'],
  },

  'rounded-bl-sm': {
    'border-bottom-left-radius': theme.rounded['sm'],
  },

  'rounded-br-sm': {
    'border-bottom-right-radius': theme.rounded['sm'],
  },

  'border-t-1': { 'border-top-width': theme.border['1'] },
  'border-r-1': { 'border-right-width': theme.border['1'] },
  'border-b-1': { 'border-bottom-width': theme.border['1'] },
  'border-l-1': { 'border-left-width': theme.border['1'] },

  'border-red-500': { 'border-color': theme.colors['red']['500'] },

  'scale-x-50': { transform: `scaleX(${theme.scale['50']})` },
  'scale-y-50': { transform: `scaleY(${theme.scale['50']})` },

  'translate-x-1': { transform: `translateX(${theme.unit['1']})` },
  'translate-y-1': { transform: `translateY(${theme.unit['1']})` },

  '-translate-x-1': { transform: `translateX(-${theme.unit['1']})` },
  '-translate-y-1': { transform: `translateY(-${theme.unit['1']})` },

  'skew-x-3': { transform: `skewX(${theme.skew['3']})` },
  'skew-y-3': { transform: `skewY(${theme.skew['3']})` },

  '-skew-x-3': { transform: `skewX(-${theme.skew['3']})` },
  '-skew-y-3': { transform: `skewY(-${theme.skew['3']})` },

  'pointer-events-none': { 'pointer-events': 'none' },
  'pointer-events-auto': { 'pointer-events': 'auto' },

  'align-text-top': { 'vertical-align': 'text-top' },
  'align-text-bottom': { 'vertical-align': 'text-bottom' },

  'origin-top-left': { 'transform-origin': 'top left' },

  'cursor-not-allowed': { cursor: 'not-allowed' },

  'grid-flow-row-dense': { 'grid-auto-flow': 'row dense' },
  'grid-flow-col-dense': { 'grid-auto-flow': 'column dense' },

  'max-w-screen-xs': { 'max-width': theme.screen['xs'] },

  clearfix: {
    selectors: {
      '&::after': {
        content: '""',
        display: 'table',
        clear: 'both',
      },
    },
  },
};

const test = Object.entries(cases).reduce(
  (a, [i, o]) => ({
    ...a,
    [i]: {
      input: i,
      expected: o,
      actual: translate(theme)(i),
      passed: JSON.stringify(translate(theme)(i)) === JSON.stringify(o),
    },
  }),
  {}
);

console.log({
  failed: Object.values(test).filter((x) => !x.passed),
  passed: Object.values(test).filter((x) => x.passed),
});
