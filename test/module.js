import { configure, process } from '../index.js';

const theme = configure({
  strict: false,
  spacing: {
    999: '999ex',
  },
  colors: {
    primary: '#FFA500',
    red: {
      999: '#FF69B4',
      default: '#FF0000',
    },
  },
  borderRadius: {
    '2xl': '2rem',
  },
});

process(theme)('testing hidden hidden');

try {
  process({ strict: true })('testing');
  console.log('❌ Strict mode failing');
} catch {
  console.log('✅ Strict mode passing');
}

const cases = {
  hidden: { display: 'none' },
  inline: { display: 'inline' },
  flex: { display: 'flex' },
  grid: { display: 'grid' },
  table: { display: 'table' },
  block: { display: 'block' },

  'top-0': { top: '0' },
  'right-0': { right: '0' },
  'bottom-0': { bottom: '0' },
  'left-0': { left: '0' },

  'top-auto': { top: 'auto' },
  'right-auto': { right: 'auto' },
  'bottom-auto': { bottom: 'auto' },
  'left-auto': { left: 'auto' },

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

  resize: { resize: 'both' },

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
  'w-1': { width: theme.width['1'] },

  'h-full': { height: '100%' },
  'h-screen': { height: '100vh' },
  'h-1': { height: theme.height['1'] },

  'text-left': { 'text-align': 'left' },
  'text-right': { 'text-align': 'right' },
  'text-center': { 'text-align': 'center' },
  'text-justify': { 'text-align': 'justify' },

  'text-current': { color: 'currentColor' },

  'text-xs': { 'font-size': theme.fontSize['xs'] },

  'text-primary': { color: theme.colors['primary'] },
  'text-red': { color: theme.colors['red']['default'] },
  'text-red-500': { color: theme.colors['red']['500'] },

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
  'bg-primary': { 'background-color': 'rgba(255,165,0,var(--ow-bg-opacity,1))' },
  'bg-red': { 'background-color': 'rgba(255,0,0,var(--ow-bg-opacity,1))' },
  'bg-red-999': { 'background-color': 'rgba(255,105,180,var(--ow-bg-opacity,1))' },
  'bg-red-500': { 'background-color': 'rgba(245,101,101,var(--ow-bg-opacity,1))' },
  'bg-invalid': { 'background-color': undefined },
  'bg-opacity-50': { '--ow-bg-opacity': '0.5' },

  'bg-no-repeat': { 'background-repeat': 'no-repeat' },
  'bg-repeat-x': { 'background-repeat': 'repeat-x' },
  'bg-repeat-y': { 'background-repeat': 'repeat-y' },
  'bg-repeat-round': { 'background-repeat': 'round' },
  'bg-repeat-space': { 'background-repeat': 'space' },
  'bg-left-bottom': { 'background-position': 'left bottom' },
  'bg-right-bottom': { 'background-position': 'right bottom' },

  'border-solid': { 'border-style': 'solid' },
  'border-collapse': { 'border-collapse': 'collapse' },
  'border-separate': { 'border-collapse': 'separate' },
  'border-current': { 'border-color': 'currentColor' },
  border: { 'border-width': theme.borderWidth['default'] },

  'border-t': { 'border-top-width': theme.borderWidth['default'] },
  'border-r': { 'border-right-width': theme.borderWidth['default'] },
  'border-b': { 'border-bottom-width': theme.borderWidth['default'] },
  'border-l': { 'border-left-width': theme.borderWidth['default'] },

  'border-t-2': { 'border-top-width': theme.borderWidth['2'] },
  'border-r-2': { 'border-right-width': theme.borderWidth['2'] },
  'border-b-2': { 'border-bottom-width': theme.borderWidth['2'] },
  'border-l-2': { 'border-left-width': theme.borderWidth['2'] },

  'border-primary': { 'border-color': 'rgba(255,165,0,var(--ow-border-opacity,1))' },
  'border-red': { 'border-color': 'rgba(255,0,0,var(--ow-border-opacity,1))' },
  'border-red-500': { 'border-color': 'rgba(245,101,101,var(--ow-border-opacity,1))' },
  'border-red-999': { 'border-color': 'rgba(255,105,180,var(--ow-border-opacity,1))' },
  'border-invalid': { 'border-color': undefined },
  'border-opacity-50': { '--ow-border-opacity': '0.5' },

  shadow: { 'box-shadow': theme.boxShadow['default'] },
  'shadow-none': { 'box-shadow': 'none' },
  'shadow-xs': { 'box-shadow': theme.boxShadow['xs'] },

  'opacity-100': { opacity: '1' },
  'opacity-50': { opacity: '0.5' },
  'opacity-0': { opacity: '0' },

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

  'gap-0': { gap: theme.gap['0'] },
  'gap-1': { gap: theme.gap['1'] },
  'gap-10': { gap: theme.gap['10'] },

  'p-0': { padding: theme.padding['0'] },
  'p-1': { padding: theme.padding['1'] },
  'p-10': { padding: theme.padding['10'] },

  'px-0': {
    'padding-left': theme.padding['0'],
    'padding-right': theme.padding['0'],
  },

  'py-0': {
    'padding-top': theme.padding['0'],
    'padding-bottom': theme.padding['0'],
  },

  'pt-0': { 'padding-top': theme.padding['0'] },
  'pr-0': { 'padding-right': theme.padding['0'] },
  'pb-0': { 'padding-bottom': theme.padding['0'] },
  'pl-0': { 'padding-left': theme.padding['0'] },

  'm-0': { margin: theme.margin['0'] },
  'm-1': { margin: theme.margin['1'] },
  'm-10': { margin: theme.margin['10'] },

  'm-auto': { margin: 'auto' },

  'mx-0': {
    'margin-left': theme.margin['0'],
    'margin-right': theme.margin['0'],
  },

  'my-0': {
    'margin-top': theme.margin['0'],
    'margin-bottom': theme.margin['0'],
  },

  'mt-0': { 'margin-top': theme.margin['0'] },
  'mr-0': { 'margin-right': theme.margin['0'] },
  'mb-0': { 'margin-bottom': theme.margin['0'] },
  'ml-0': { 'margin-left': theme.margin['0'] },

  'font-sans': { 'font-family': theme.fontFamily['sans'] },
  'font-hairline': { 'font-weight': theme.fontWeight['hairline'] },

  'tracking-tighter': { 'letter-spacing': theme.letterSpacing['tighter'] },
  'tracking-widest': { 'letter-spacing': theme.letterSpacing['widest'] },

  'leading-3': { 'line-height': theme.lineHeight['3'] },
  'leading-tight': { 'line-height': theme.lineHeight['tight'] },

  'align-baseline': { 'vertical-align': 'baseline' },

  rounded: { 'border-radius': theme.borderRadius['default'] },
  'rounded-none': { 'border-radius': theme.borderRadius['none'] },
  'rounded-full': { 'border-radius': theme.borderRadius['full'] },

  'duration-75': {
    'transition-duration': `${theme.transitionDuration['75']}`,
  },

  'delay-75': { 'transition-delay': `${theme.transitionDelay['75']}` },

  'scale-0': { transform: `scale(${theme.scale['0']})` },
  'scale-50': { transform: `scale(${theme.scale['50']})` },
  'scale-100': { transform: `scale(${theme.scale['100']})` },

  'rotate-0': { transform: `rotate(${theme.rotate['0']})` },
  'rotate-45': { transform: `rotate(${theme.rotate['45']})` },
  'rotate-180': { transform: `rotate(${theme.rotate['180']})` },
  '-rotate-90': { transform: `rotate(-${theme.rotate['90']})` },

  'origin-center': { 'transform-origin': 'center' },

  'cursor-pointer': { cursor: 'pointer' },

  'select-none': { 'user-select': 'none' },
  'select-auto': { 'user-select': 'auto' },

  'table-column-group': { display: 'table-column-group' },

  'object-scale-down': { 'object-fit': 'scale-down' },
  'object-left-bottom': { 'object-position': 'left bottom' },

  'inset-0': { top: '0', right: '0', bottom: '0', left: '0' },
  'inset-auto': { top: 'auto', right: 'auto', bottom: 'auto', left: 'auto' },

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
  'max-w-xs': { 'max-width': theme.maxWidth['xs'] },
  'max-w-screen-sm': { 'max-width': theme.maxWidth['screen-sm'] },
  'max-w-screen-sm': { 'max-width': theme.screens['sm'] },

  'max-h-full': { 'max-height': '100%' },
  'max-h-screen': { 'max-height': '100vh' },

  'whitespace-normal': { 'white-space': 'normal' },
  'whitespace-no-wrap': { 'white-space': 'nowrap' },
  'whitespace-pre-wrap': { 'white-space': 'pre-wrap' },

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

  'col-gap-1': { 'column-gap': theme.spacing['1'] },
  'col-gap-px': { 'column-gap': theme.spacing['px'] },

  'row-span-1': { 'grid-row': 'span 1 / span 1' },
  'row-span-12': { 'grid-row': 'span 12 / span 12' },

  'row-start-1': { 'grid-row-start': '1' },
  'row-start-7': { 'grid-row-start': '7' },

  'row-end-1': { 'grid-row-end': '1' },
  'row-end-7': { 'grid-row-end': '7' },

  '-m-0': { margin: `-${theme.spacing['0']}` },
  '-m-10': { margin: `-${theme.spacing['10']}` },
  '-m-px': { margin: `-${theme.spacing['px']}` },

  'rounded-t': {
    'border-top-left-radius': theme.borderRadius['default'],
    'border-top-right-radius': theme.borderRadius['default'],
  },

  'rounded-r': {
    'border-top-right-radius': theme.borderRadius['default'],
    'border-bottom-right-radius': theme.borderRadius['default'],
  },

  'rounded-b': {
    'border-bottom-left-radius': theme.borderRadius['default'],
    'border-bottom-right-radius': theme.borderRadius['default'],
  },

  'rounded-l': {
    'border-bottom-left-radius': theme.borderRadius['default'],
    'border-top-left-radius': theme.borderRadius['default'],
  },

  'rounded-tl': {
    'border-top-left-radius': theme.borderRadius['default'],
  },

  'rounded-tr': {
    'border-top-right-radius': theme.borderRadius['default'],
  },

  'rounded-bl': {
    'border-bottom-left-radius': theme.borderRadius['default'],
  },

  'rounded-br': {
    'border-bottom-right-radius': theme.borderRadius['default'],
  },

  'rounded-t-sm': {
    'border-top-left-radius': theme.borderRadius['sm'],
    'border-top-right-radius': theme.borderRadius['sm'],
  },

  'rounded-r-sm': {
    'border-top-right-radius': theme.borderRadius['sm'],
    'border-bottom-right-radius': theme.borderRadius['sm'],
  },

  'rounded-b-sm': {
    'border-bottom-left-radius': theme.borderRadius['sm'],
    'border-bottom-right-radius': theme.borderRadius['sm'],
  },

  'rounded-l-sm': {
    'border-bottom-left-radius': theme.borderRadius['sm'],
    'border-top-left-radius': theme.borderRadius['sm'],
  },

  'rounded-tl-sm': {
    'border-top-left-radius': theme.borderRadius['sm'],
  },

  'rounded-tr-sm': {
    'border-top-right-radius': theme.borderRadius['sm'],
  },

  'rounded-bl-sm': {
    'border-bottom-left-radius': theme.borderRadius['sm'],
  },

  'rounded-br-sm': {
    'border-bottom-right-radius': theme.borderRadius['sm'],
  },

  'scale-x-50': { transform: `scaleX(${theme.scale['50']})` },
  'scale-y-50': { transform: `scaleY(${theme.scale['50']})` },

  'translate-x-1': { transform: `translateX(${theme.spacing['1']})` },
  'translate-y-1': { transform: `translateY(${theme.spacing['1']})` },

  '-translate-x-1': { transform: `translateX(-${theme.spacing['1']})` },
  '-translate-y-1': { transform: `translateY(-${theme.spacing['1']})` },

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

  clearfix: {
    '::after': {
      content: '""',
      display: 'table',
      clear: 'both',
    },
  },

  'space-x-0': {
    selectors: {
      '& > * + *': { 'margin-left': theme.spacing['0'] },
    },
  },
  '-space-x-0': {
    selectors: {
      '& > * + *': { 'margin-left': '-' + theme.spacing['0'] },
    },
  },
  'space-y-0': {
    selectors: {
      '& > * + *': { 'margin-top': theme.spacing['0'] },
    },
  },
  '-space-y-0': {
    selectors: {
      '& > * + *': { 'margin-top': '-' + theme.spacing['0'] },
    },
  },

  'placeholder-transparent': {
    '::placeholder': { color: theme.colors['transparent'] },
  },
  'placeholder-red': {
    '::placeholder': { color: theme.colors['red']['default'] },
  },
  'placeholder-red-500': {
    '::placeholder': { color: theme.colors['red']['500'] },
  },
  'placeholder-primary': {
    '::placeholder': { color: '#FFA500' },
  },
  'placeholder-red-999': {
    '::placeholder': { color: '#FF69B4' },
  },

  'divide-x': { selectors: { '& > * + *': { 'border-left-width': '1px' } } },
  'divide-x-0': { selectors: { '& > * + *': { 'border-left-width': '0' } } },

  'divide-y': { selectors: { '& > * + *': { 'border-top-width': '1px' } } },
  'divide-y-0': { selectors: { '& > * + *': { 'border-top-width': '0' } } },

  'divide-solid': {
    selectors: { '& > * + *': { 'border-style': 'solid' } },
  },

  'divide-transparent': {
    selectors: { '& > * + *': { 'border-color': theme.colors['transparent'] } },
  },
  'divide-red': {
    selectors: {
      '& > * + *': { 'border-color': theme.colors['red']['default'] },
    },
  },
  'divide-red-500': {
    selectors: { '& > * + *': { 'border-color': theme.colors['red']['500'] } },
  },

  'p-999': { padding: '999ex' },
  'rounded-2xl': { 'border-radius': '2rem' },

  'rotate-45 hover:(bg-red-500)': {
    transform: `rotate(${theme.rotate['45']})`,
    ':hover': { 'background-color': 'rgba(245,101,101,var(--ow-bg-opacity,1))' },
  },

  'rotate-45 hover:(bg-red-500 text-blue-500)': {
    transform: `rotate(${theme.rotate['45']})`,
    ':hover': {
      'background-color': 'rgba(245,101,101,var(--ow-bg-opacity,1))',
      color: theme.colors['blue']['500'],
    },
  },

  'rotate-45 sm:hover:(bg-red-500)': {
    transform: `rotate(${theme.rotate['45']})`,
    '@media': {
      [`(min-width: ${theme.screens['sm']})`]: {
        ':hover': {
          'background-color': 'rgba(245,101,101,var(--ow-bg-opacity,1))',
        },
      },
    },
  },

  'rotate-45 sm:hover:(bg-red-500 text-blue-500)': {
    transform: `rotate(${theme.rotate['45']})`,
    '@media': {
      [`(min-width: ${theme.screens['sm']})`]: {
        ':hover': {
          'background-color': 'rgba(245,101,101,var(--ow-bg-opacity,1))',
          color: theme.colors['blue']['500'],
        },
      },
    },
  },

  [`sm:(rotate-45 hover:(bg-red-500))`]: {
    '@media': {
      [`(min-width: ${theme.screens['sm']})`]: {
        transform: `rotate(${theme.rotate['45']})`,
        ':hover': {
          'background-color': 'rgba(245,101,101,var(--ow-bg-opacity,1))',
        },
      },
    },
  },

  [`sm:(rotate-45 hover:(bg-red-500 text-blue-500))`]: {
    '@media': {
      [`(min-width: ${theme.screens['sm']})`]: {
        transform: `rotate(${theme.rotate['45']})`,
        ':hover': {
          'background-color': 'rgba(245,101,101,var(--ow-bg-opacity,1))',
          color: theme.colors['blue']['500'],
        },
      },
    },
  },

  [`sm:(
      rotate-45
      hover:(bg-red-500)
    )`]: {
    '@media': {
      [`(min-width: ${theme.screens['sm']})`]: {
        transform: `rotate(${theme.rotate['45']})`,
        ':hover': {
          'background-color': 'rgba(245,101,101,var(--ow-bg-opacity,1))',
        },
      },
    },
  },

  [`sm:(
      rotate-45
      hover:(bg-red-500 text-blue-500)
    )`]: {
    '@media': {
      [`(min-width: ${theme.screens['sm']})`]: {
        transform: `rotate(${theme.rotate['45']})`,
        ':hover': {
          'background-color': 'rgba(245,101,101,var(--ow-bg-opacity,1))',
          color: theme.colors['blue']['500'],
        },
      },
    },
  },

  [`sm:(
      rotate-45
      hover:(
        bg-red-500
      )
    )`]: {
    '@media': {
      [`(min-width: ${theme.screens['sm']})`]: {
        transform: `rotate(${theme.rotate['45']})`,
        ':hover': {
          'background-color': 'rgba(245,101,101,var(--ow-bg-opacity,1))',
        },
      },
    },
  },

  [`sm:(
      rotate-45
      hover:(
        bg-red-500
        text-blue-500
      )
    )`]: {
    transform: `rotate(${theme.rotate['45']})`,
    '@media': {
      [`(min-width: ${theme.screens['sm']})`]: {
        ':hover': {
          'background-color': 'rgba(245,101,101,var(--ow-bg-opacity,1))',
          color: theme.colors['blue']['500'],
        },
      },
    },
  },

  [`sm:(
      rotate-45
      hover:(
        bg-red-500
        text-blue-500
      )
    )`]: {
    '@media': {
      [`(min-width: ${theme.screens['sm']})`]: {
        transform: `rotate(${theme.rotate['45']})`,
        ':hover': {
          'background-color': 'rgba(245,101,101,var(--ow-bg-opacity,1))',
          color: theme.colors['blue']['500'],
        },
      },
    },
  },
};

let failed;
let passed;

const test = Object.entries(cases).reduce((a, [i, o]) => {
  const result = process(theme)([i]);
  return {
    ...a,
    [i]: {
      input: i,
      expected: o,
      actual: result,
      passed: result && JSON.stringify(result) === JSON.stringify(o),
    },
  };
}, {});

failed = Object.values(test).filter((x) => !x.passed);
passed = Object.values(test).filter((x) => x.passed);

failed.length > 0
  ? console.error('❌ Translations Failing', failed)
  : console.log('✅ Translations Passing', passed.length);

const expectedOutput = JSON.stringify({
  margin: theme.margin['1'],
  padding: theme.padding['1'],
});

const processArray = process(theme)(['m-1', 'p-1']);
const processString = process(theme)('m-1 p-1');
const processLiteral = process(theme)`m-1 p-1`;
const processLiteralWithParts = process(theme)`m-1 ${'p-1'}`;
const processObject = process(theme)({
  'm-1': true,
  'p-1': true,
});

const inputs = {
  processArray: JSON.stringify(processArray) === expectedOutput,
  processString: JSON.stringify(processString) === expectedOutput,
  processLiteral: JSON.stringify(processLiteral) === expectedOutput,
  processLiteralWithParts:
    JSON.stringify(processLiteralWithParts) === expectedOutput,
  processObject: JSON.stringify(processObject) === expectedOutput,
};

failed = Object.values(inputs).filter((x) => !x);
passed = Object.values(inputs).filter((x) => x);

failed.length > 0
  ? console.error('❌ Inputs Failing', failed)
  : console.log('✅ Inputs Passing', passed.length);
