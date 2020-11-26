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

const edges = {
  t: ['top'],
  r: ['right'],
  b: ['bottom'],
  l: ['left'],
  y: ['top', 'bottom'],
  x: ['left', 'right'],
};

const helper = (xs) => ([x, position, y], val) =>
  xs[position].reduce(
    (a, b) => ({
      ...a,
      [[x, b, y].filter(Boolean).join('-')]: val,
    }),
    {}
  );

const cornersHelper = helper(corners);
const edgesHelper = helper(edges);

const colorHelper = (colors, color, shade) => {
  const base = colors[color];
  return (
    base &&
    (typeof base === 'string' ? base : shade ? base[shade] : base['default'])
  );
};

// Adopted from `react-colorful` here: https://github.com/omgovich/react-colorful/blob/master/src/utils/convert.ts
const hexToRgb = (hex) => {
  if (!/^#[0-9a-fA-F]{8}$|#[0-9a-fA-F]{6}$|#[0-9a-fA-F]{4}$|#[0-9a-fA-F]{3}$/i.test(hex)) return undefined;

  if (hex.length <= 4) {
    return `${parseInt(hex[1] + hex[1], 16)},${parseInt(hex[2] + hex[2], 16)},${parseInt(hex[3] + hex[3], 16)}`;
  }

  return `${parseInt(hex.substr(1, 2), 16)},${parseInt(hex.substr(3, 2), 16)},${parseInt(hex.substr(5, 2), 16)}`
}

const keywordMap = {"aliceblue":"#f0f8ff","antiquewhite":"#faebd7","aqua":"#00ffff","aquamarine":"#7fffd4","azure":"#f0ffff",
  "beige":"#f5f5dc","bisque":"#ffe4c4","black":"#000000","blanchedalmond":"#ffebcd","blue":"#0000ff","blueviolet":"#8a2be2","brown":"#a52a2a","burlywood":"#deb887",
  "cadetblue":"#5f9ea0","chartreuse":"#7fff00","chocolate":"#d2691e","coral":"#ff7f50","cornflowerblue":"#6495ed","cornsilk":"#fff8dc","crimson":"#dc143c","cyan":"#00ffff",
  "darkblue":"#00008b","darkcyan":"#008b8b","darkgoldenrod":"#b8860b","darkgray":"#a9a9a9","darkgreen":"#006400","darkkhaki":"#bdb76b","darkmagenta":"#8b008b","darkolivegreen":"#556b2f",
  "darkorange":"#ff8c00","darkorchid":"#9932cc","darkred":"#8b0000","darksalmon":"#e9967a","darkseagreen":"#8fbc8f","darkslateblue":"#483d8b","darkslategray":"#2f4f4f","darkturquoise":"#00ced1",
  "darkviolet":"#9400d3","deeppink":"#ff1493","deepskyblue":"#00bfff","dimgray":"#696969","dodgerblue":"#1e90ff",
  "firebrick":"#b22222","floralwhite":"#fffaf0","forestgreen":"#228b22","fuchsia":"#ff00ff",
  "gainsboro":"#dcdcdc","ghostwhite":"#f8f8ff","gold":"#ffd700","goldenrod":"#daa520","gray":"#808080","green":"#008000","greenyellow":"#adff2f",
  "honeydew":"#f0fff0","hotpink":"#ff69b4",
  "indianred ":"#cd5c5c","indigo":"#4b0082","ivory":"#fffff0","khaki":"#f0e68c",
  "lavender":"#e6e6fa","lavenderblush":"#fff0f5","lawngreen":"#7cfc00","lemonchiffon":"#fffacd","lightblue":"#add8e6","lightcoral":"#f08080","lightcyan":"#e0ffff","lightgoldenrodyellow":"#fafad2",
  "lightgrey":"#d3d3d3","lightgreen":"#90ee90","lightpink":"#ffb6c1","lightsalmon":"#ffa07a","lightseagreen":"#20b2aa","lightskyblue":"#87cefa","lightslategray":"#778899","lightsteelblue":"#b0c4de",
  "lightyellow":"#ffffe0","lime":"#00ff00","limegreen":"#32cd32","linen":"#faf0e6",
  "magenta":"#ff00ff","maroon":"#800000","mediumaquamarine":"#66cdaa","mediumblue":"#0000cd","mediumorchid":"#ba55d3","mediumpurple":"#9370d8","mediumseagreen":"#3cb371","mediumslateblue":"#7b68ee",
  "mediumspringgreen":"#00fa9a","mediumturquoise":"#48d1cc","mediumvioletred":"#c71585","midnightblue":"#191970","mintcream":"#f5fffa","mistyrose":"#ffe4e1","moccasin":"#ffe4b5",
  "navajowhite":"#ffdead","navy":"#000080",
  "oldlace":"#fdf5e6","olive":"#808000","olivedrab":"#6b8e23","orange":"#ffa500","orangered":"#ff4500","orchid":"#da70d6",
  "palegoldenrod":"#eee8aa","palegreen":"#98fb98","paleturquoise":"#afeeee","palevioletred":"#d87093","papayawhip":"#ffefd5","peachpuff":"#ffdab9","peru":"#cd853f","pink":"#ffc0cb","plum":"#dda0dd","powderblue":"#b0e0e6","purple":"#800080",
  "rebeccapurple":"#663399","red":"#ff0000","rosybrown":"#bc8f8f","royalblue":"#4169e1",
  "saddlebrown":"#8b4513","salmon":"#fa8072","sandybrown":"#f4a460","seagreen":"#2e8b57","seashell":"#fff5ee","sienna":"#a0522d","silver":"#c0c0c0","skyblue":"#87ceeb","slateblue":"#6a5acd","slategray":"#708090","snow":"#fffafa","springgreen":"#00ff7f","steelblue":"#4682b4",
  "tan":"#d2b48c","teal":"#008080","thistle":"#d8bfd8","tomato":"#ff6347","turquoise":"#40e0d0",
  "violet":"#ee82ee",
  "wheat":"#f5deb3","white":"#ffffff","whitesmoke":"#f5f5f5",
  "yellow":"#ffff00","yellowgreen":"#9acd32"}

const toRgb = (color) => {
  if (!color) return color;
  if (color[0] === '#') return hexToRgb(color);
  return hexToRgb(keywordMap[color]);
}

export default (theme) => (str) => {
  let x;
  let n = '';

  if (str[0] === '-') {
    n = '-';
    str = str.slice(1);
  }

  let i = str.split('-');
  let out = {};

  switch (i.length) {
    case 1:
      switch (i[0]) {
        case 'hidden':
          out['display'] = 'none';
          break;
        case 'inline':
        case 'block':
        case 'flex':
        case 'grid':
        case 'table':
          out['display'] = i[0];
          break;
        case 'static':
        case 'fixed':
        case 'absolute':
        case 'relative':
        case 'sticky':
          out['position'] = i[0];
          break;
        case 'visible':
          out['visibility'] = i[0];
          break;
        case 'invisible':
          out['visibility'] = 'hidden';
          break;
        case 'antialiased':
          out = {
            '-webkit-font-smoothing': 'antialiased',
            '-moz-osx-font-smoothing': 'grayscale',
          };
          break;
        case 'italic':
          out['font-style'] = i[0];
          break;
        case 'underline':
          out['text-decoration'] = i[0];
          break;
        case 'uppercase':
        case 'lowercase':
        case 'capitalize':
          out['text-transform'] = i[0];
          break;
        case 'truncate':
          out = {
            overflow: 'hidden',
            'text-overflow': 'ellipsis',
            'white-space': 'nowrap',
          };
          break;
        case 'transition':
          out['transition-property'] =
            'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform';
          break;
        case 'resize':
          out['resize'] = 'both';
          break;
        case 'rounded':
          out['border-radius'] = theme.borderRadius['default'];
          break;
        case 'clearfix':
          out['::after'] = {
            content: '""',
            display: 'table',
            clear: 'both',
          };
          break;
        case 'border':
          out['border-width'] = theme.borderWidth['default'];
          break;
        case 'shadow':
          out['box-shadow'] = theme.boxShadow['default'];
          break;
      }
      break;
    case 2:
      switch (i[0]) {
        case 'normal':
          if (i[1] === 'case') out['text-transform'] = 'none';
          break;
        case 'flow':
          if (i[1] === 'root') out['display'] = 'flow-root';
          break;
        case 'inline':
          switch (i[1]) {
            case 'block':
            case 'flex':
            case 'grid':
              out['display'] = `${i[0]}-${i[1]}`;
              break;
          }
          break;
        case 'table':
          switch (i[1]) {
            case 'caption':
            case 'cell':
            case 'column':
            case 'row':
              out['display'] = `${i[0]}-${i[1]}`;
              break;
            case 'auto':
            case 'fixed':
              out[`${i[0]}-layout`] = i[1];
              break;
          }
          break;
        case 'object':
          switch (i[1]) {
            case 'contain':
            case 'cover':
            case 'fill':
            case 'none':
              out[`${i[0]}-fit`] = i[1];
              break;
            default:
              out[`${i[0]}-position`] = i[1];
              break;
          }
          break;
        case 'inset':
          switch (i[1]) {
            case '0':
            case 'auto':
              out = { top: i[1], right: i[1], bottom: i[1], left: i[1] };
              break;
          }
          break;
        case 'flex':
          switch (i[1]) {
            case 'row':
              out[`flex-direction`] = i[1];
              break;
            case 'col':
              out[`flex-direction`] = 'column';
              break;
            case 'wrap':
              out[`flex-wrap`] = i[1];
              break;
            case '1':
            case 'auto':
            case 'initial':
            case 'none':
              out['flex'] = theme.flex[i[1]];
              break;
            case 'grow':
              out[`flex-grow`] = theme.flexGrow['default'];
              break;
            case 'shrink':
              out[`flex-shrink`] = theme.flexShrink['default'];
              break;
          }
          break;
        case 'items':
          switch (i[1]) {
            case 'start':
            case 'end':
              out[`align-items`] = `flex-${i[1]}`;
              break;
            default:
              out[`align-items`] = i[1];
              break;
          }
          break;
        case 'content':
          switch (i[1]) {
            case 'start':
            case 'end':
              out[`align-content`] = `flex-${i[1]}`;
              break;
            case 'between':
            case 'around':
              out[`align-content`] = `space-${i[1]}`;
              break;
            default:
              out[`align-content`] = i[1];
              break;
          }
          break;
        case 'justify':
          switch (i[1]) {
            case 'start':
            case 'end':
              out[`justify-content`] = `flex-${i[1]}`;
              break;
            case 'between':
            case 'around':
              out[`justify-content`] = `space-${i[1]}`;
              break;
            default:
              out[`justify-content`] = i[1];
              break;
          }
          break;
        case 'self':
          switch (i[1]) {
            case 'start':
            case 'end':
              out[`align-self`] = `flex-${i[1]}`;
              break;
            default:
              out[`align-self`] = i[1];
              break;
          }
          break;
        case 'order':
          out['order'] = theme.order[i[1]];
          break;
        case 'col':
          if (i[1] === 'auto') out['grid-column'] = i[1];
          break;
        case 'row':
          if (i[1] === 'auto') out['grid-row'] = i[1];
          break;
        case 'w':
          out['width'] = theme.width[i[1]];
          break;
        case 'h':
          out['height'] = theme.height[i[1]];
          break;
        case 'text':
          switch (i[1]) {
            case 'left':
            case 'center':
            case 'right':
            case 'justify':
              out[`text-align`] = i[1];
              break;
            case 'current':
              out['color'] = 'currentColor';
              break;
            default:
              if ((x = theme.fontSize[i[1]])) out['font-size'] = x;
              else out['color'] = colorHelper(theme.colors, i[1]);
              break;
          }
          break;
        case 'subpixel':
          if ('antialiased' === i[1])
            out = {
              '-webkit-font-smoothing': 'auto',
              '-moz-osx-font-smoothing': 'auto',
            };
          break;
        case 'not':
          if ('italic' === i[1]) out['font-style'] = 'normal';
          break;
        case 'list':
          switch (i[1]) {
            case 'inside':
            case 'outside':
              out[`list-style-position`] = i[1];
              break;
            default:
              out[`list-style-type`] = i[1];
              break;
          }
          break;
        case 'no':
          if ('underline' === i[1]) out['text-decoration'] = 'none';
          break;
        case 'line':
          if ('through' === i[1]) out['text-decoration'] = 'line-through';
          break;
        case 'break':
          switch (i[1]) {
            case 'normal':
              out['word-break'] = i[1];
              out['overflow-wrap'] = i[1];
              break;
            case 'words':
              out['overflow-wrap'] = 'break-word';
              break;
            case 'all':
              out['word-break'] = 'break-all';
              break;
          }
          break;
        case 'bg':
          switch (i[1]) {
            case 'fixed':
            case 'local':
            case 'scroll':
              out['background-attachment'] = i[1];
              break;
            case 'bottom':
            case 'center':
            case 'left':
            case 'right':
            case 'top':
              out['background-position'] = i[1];
              break;
            case 'repeat':
              out[`background-${i[1]}`] = i[1];
              break;
            case 'auto':
            case 'cover':
            case 'contain':
              out['background-size'] = i[1];
              break;
            case 'current':
              out['background-color'] = 'currentColor';
              break;
            default:
              out['background-color'] = `rgba(${toRgb(colorHelper(theme.colors, i[1]))},var(--ow-bg-opacity,1))`;
              break;
          }
          break;
        case 'border':
          switch (i[1]) {
            case 't':
            case 'r':
            case 'b':
            case 'l':
              out = edgesHelper(
                ['border', i[1], 'width'],
                theme.borderWidth['default']
              );
              break;
            case 'solid':
            case 'dashed':
            case 'dotted':
            case 'double':
            case 'none':
              out[`border-style`] = i[1];
              break;
            case 'collapse':
              out[`border-collapse`] = i[1];
              break;
            case 'separate':
              out[`border-collapse`] = i[1];
              break;
            case 'current':
              out[`border-color`] = 'currentColor';
              break;
            default:
              if ((x = theme.borderWidth[i[1]])) out['border-width'] = x;
              else out['border-color'] = `rgba(${toRgb(colorHelper(theme.colors, i[1]))},var(--ow-border-opacity,1))`;
              break;
          }
          break;
        case 'shadow':
          out['box-shadow'] = theme.boxShadow[i[1]];
          break;
        case 'opacity':
          out['opacity'] = theme.opacity[i[1]];
          break;
        case 'transition':
          out[`transition-property`] = theme.transitionProperty[i[1]];
          break;
        case 'ease':
          out['transition-timing-function'] =
            theme.transitionTimingFunction[i[1]];
          break;
        case 'appearance':
          if ('none' === i[1]) out[i[0]] = i[1];
          break;
        case 'outline':
          if ('none' === i[1]) out[i[0]] = '0';
          break;
        case 'resize':
          switch (i[1]) {
            case 'x':
              out['resize'] = 'vertical';
              break;
            case 'y':
              out['resize'] = 'horizontal';
              break;
            case 'none':
              out['resize'] = i[1];
              break;
          }
          break;
        case 'fill':
          if ('current' === i[1]) out['fill'] = theme.fill[i[1]];
          break;
        case 'stroke':
          'current' === i[1]
            ? (out['stroke'] = theme.stroke['current'])
            : (out['stroke-width'] = theme.strokeWidth[i[1]]);
          break;
        case 'sr':
          if ('only' === i[1])
            out = {
              width: '1px',
              height: '1px',
              padding: '0',
              margin: '-1px',
              overflow: 'hidden',
              clip: 'rect(0,0,0,0)',
              'border-width': '0',
            };
          break;
        case 'box':
          out['box-sizing'] = `${i[1]}-box`;
          break;
        case 'float':
        case 'clear':
        case 'overflow':
          out[i[0]] = i[1];
          break;
        case 'scrolling':
          out[`-webkit-overflow-scrolling`] = i[1];
          break;
        case 'z':
          out['z-index'] = theme.zIndex[i[1]];
          break;
        case 'gap':
          out['gap'] = theme.gap[i[1]];
          break;
        case 'p':
          out['padding'] = theme.padding[i[1]];
          break;
        case 'py':
        case 'px':
        case 'pt':
        case 'pr':
        case 'pb':
        case 'pl':
          out = edgesHelper(['padding', i[0][1]], theme.padding[i[1]]);
          break;
        case 'm':
          out['margin'] = `${n}${theme.margin[i[1]]}`;
          break;
        case 'my':
        case 'mx':
        case 'mt':
        case 'mr':
        case 'mb':
        case 'ml':
          out = edgesHelper(['margin', i[0][1]], `${n}${theme.margin[i[1]]}`);
          break;
        case 'font':
          if ((x = theme.fontFamily[i[1]])) out['font-family'] = x;
          if ((x = theme.fontWeight[i[1]])) out['font-weight'] = x;
          break;
        case 'tracking':
          out['letter-spacing'] = theme.letterSpacing[i[1]];
          break;
        case 'leading':
          out['line-height'] = theme.lineHeight[i[1]];
          break;
        case 'align':
          out[`vertical-align`] = i[1];
          break;
        case 'whitespace':
          out['white-space'] = i[1];
          break;
        case 'rounded':
          switch (i[1]) {
            case 't':
            case 'r':
            case 'b':
            case 'l':
            case 'tl':
            case 'tr':
            case 'bl':
            case 'br':
              out = cornersHelper(
                ['border', i[1], 'radius'],
                theme.borderRadius['default']
              );
              break;
            default:
              out['border-radius'] = theme.borderRadius[i[1]];
              break;
          }
          break;
        case 'duration':
          out['transition-duration'] = `${theme.transitionDuration[i[1]]}`;
          break;
        case 'delay':
          out['transition-delay'] = `${theme.transitionDelay[i[1]]}`;
          break;
        case 'scale':
          out['transform'] = `scale(${theme.scale[i[1]]})`;
          break;
        case 'rotate':
          out['transform'] = `rotate(${n ? '-' : ''}${theme.rotate[i[1]]})`;
          break;
        case 'origin':
          out['transform-origin'] = i[1];
          break;
        case 'cursor':
          out['cursor'] = i[1];
          break;
        case 'select':
          out['user-select'] = i[1];
          break;
        case 'placeholder':
          out['::placeholder'] = {
            color: colorHelper(theme.placeholderColor, i[1]),
          };
          break;
        case 'divide':
          switch (i[1]) {
            case 'x':
            case 'y':
              out['selectors'] = {
                '& > * + *': {
                  [`border-${i[1] === 'x' ? 'left' : 'top'}-width`]: theme
                    .divideWidth['default'],
                },
              };
              break;
            default:
              out['selectors'] = {
                '& > * + *': (x = colorHelper(theme.colors, i[1]))
                  ? { [`border-color`]: x }
                  : { 'border-style': i[1] },
              };
              break;
          }
          break;
        case 'top':
        case 'right':
        case 'bottom':
        case 'left':
          out[i[0]] = i[1];
          break;
      }
      break;
    case 3:
      switch (i[0]) {
        case 'divide':
          switch (i[1]) {
            case 'x':
            case 'y':
              out['selectors'] = {
                '& > * + *': {
                  [`border-${i[1] === 'x' ? 'left' : 'top'}-width`]: theme
                    .divideWidth[i[2]],
                },
              };
              break;
            default:
              out['selectors'] = {
                '& > * + *': {
                  [`border-color`]: colorHelper(theme.colors, i[1], i[2]),
                },
              };
              break;
          }
          break;
        case 'placeholder':
          out['::placeholder'] = {
            color: colorHelper(theme.placeholderColor, i[1], i[2]),
          };
          break;
        case 'table':
          out['display'] = `${i[0]}-${i[1]}-${i[2]}`;
          break;
        case 'object':
          'scale' === i[1]
            ? (out['object-fit'] = `${i[1]}-${i[2]}`)
            : (out['object-position'] = `${i[1]} ${i[2]}`);
          break;
        case 'inset':
          switch (i[1]) {
            case 'y':
              out = { top: i[2], bottom: i[2] };
              break;
            case 'x':
              out = { left: i[2], right: i[2] };
              break;
          }
          break;
        case 'flex':
          switch (i[1]) {
            case 'row':
              if ('reverse' === i[2]) out[`flex-direction`] = `row-${i[2]}`;
              break;
            case 'col':
              if ('reverse' === i[2]) out[`flex-direction`] = `column-${i[2]}`;
              break;
            case 'no':
              if ('wrap' === i[2]) out[`flex-wrap`] = `${i[1]}${i[2]}`;
              break;
            case 'wrap':
              if ('reverse' === i[2]) out[`flex-wrap`] = `${i[1]}-${i[2]}`;
              break;
            case 'grow':
            case 'shrink':
              if ('0' === i[2]) out[`flex-${i[1]}`] = i[2];
              break;
          }
          break;
        case 'grid':
          switch (i[1]) {
            case 'cols':
              out[`grid-template-columns`] =
                'none' === i[2] ? i[2] : `repeat(${i[2]}, minmax(0, 1fr))`;
              break;
            case 'rows':
              out[`grid-template-rows`] =
                'none' === i[2] ? i[2] : `repeat(${i[2]}, minmax(0, 1fr))`;
              break;
            case 'flow':
              out['grid-auto-flow'] = i[2];
              break;
          }
          break;
        case 'min':
          switch (i[1]) {
            case 'w':
              out['min-width'] = theme.minWidth[i[2]];
              break;
            case 'h':
              out['min-height'] = theme.minHeight[i[2]];
              break;
          }
          break;
        case 'max':
          switch (i[1]) {
            case 'w':
              out['max-width'] = theme.maxWidth[i[2]];
              break;
            case 'h':
              out['max-height'] = theme.maxHeight[i[2]];
              break;
          }
          break;
        case 'whitespace':
          if (i[1] + i[2] === 'nowrap') out['white-space'] = 'nowrap';
          else out['white-space'] = `${i[1]}-${i[2]}`;
          break;
        case 'bg':
          switch (i[1]) {
            case 'no':
              if ('repeat' === i[2])
                out[`background-repeat`] = `${i[1]}-${i[2]}`;
              break;
            case 'repeat':
              switch (i[2]) {
                case 'x':
                case 'y':
                  out[`background-repeat`] = `${i[1]}-${i[2]}`;
                  break;
                default:
                  out[`background-repeat`] = i[2];
                  break;
              }
              break;
            case 'left':
              out['background-position'] = `${i[1]} ${i[2]}`;
              break;
            case 'right':
              out['background-position'] = `${i[1]} ${i[2]}`;
              break;
            case 'opacity':
              out['--ow-bg-opacity'] = i[2] / 100;
              break;
            default:
              out['background-color'] = `rgba(${toRgb(colorHelper(theme.colors, i[1], i[2]))},var(--ow-bg-opacity,1))`;
              break;
          }
          break;
        case 'ease':
          if (i[1] + i[2] === 'inout')
            out['transition-timing-function'] = 'cubic-bezier(0.4, 0, 0.2, 1)';
          break;
        case 'not':
          if (i[1] + i[2] === 'sronly')
            out = {
              position: 'static',
              width: 'auto',
              height: 'auto',
              padding: '0',
              margin: '0',
              overflow: 'visible',
              clip: 'auto',
              'white-space': 'normal',
            };
          break;
        case 'overflow':
          out[`${i[0]}-${i[1]}`] = i[2];
          break;
        case 'col':
          switch (i[1]) {
            case 'span':
              out['grid-column'] = `span ${i[2]} / span ${i[2]}`;
              break;
            case 'start':
            case 'end':
              out[`grid-column-${i[1]}`] = i[2];
              break;
            case 'gap':
              out['column-gap'] = theme.spacing[i[2]];
              break;
          }
          break;
        case 'row':
          switch (i[1]) {
            case 'span':
              out[`grid-row`] = `span ${i[2]} / span ${i[2]}`;
              break;
            case 'start':
            case 'end':
              out[`grid-row-${i[1]}`] = i[2];
              break;
          }
          break;
        case 'rounded':
          switch (i[1]) {
            case 't':
            case 'r':
            case 'b':
            case 'l':
            case 'tl':
            case 'tr':
            case 'bl':
            case 'br':
              out = cornersHelper(
                ['border', i[1], 'radius'],
                theme.borderRadius[i[2]]
              );
              break;
          }
          break;
        case 'border':
          switch (i[1]) {
            case 't':
            case 'r':
            case 'b':
            case 'l':
              out = edgesHelper(
                ['border', i[1], 'width'],
                theme.borderWidth[i[2]]
              );
              break;
            case 'opacity':
              out['--ow-border-opacity'] = i[2] / 100;
              break;
            default:
              out[`border-color`] = `rgba(${toRgb(colorHelper(theme.colors, i[1], i[2]))},var(--ow-border-opacity,1))`;
              break;
          }
          break;
        case 'scale':
          out['transform'] = `scale${i[1].toUpperCase()}(${theme.scale[i[2]]})`;
          break;
        case 'translate':
          out['transform'] = `${i[0]}${i[1].toUpperCase()}(${n}${
            theme.spacing[i[2]]
          })`;
          break;
        case 'skew':
          out['transform'] = `${i[0]}${i[1].toUpperCase()}(${n}${
            theme.skew[i[2]]
          })`;
          break;
        case 'pointer':
          if ('events' === i[1]) out[`pointer-events`] = i[2];
          break;
        case 'text':
          out['color'] = colorHelper(theme.colors, i[1], i[2]);
          break;
        case 'align':
          out[`vertical-align`] = `${i[1]}-${i[2]}`;
          break;
        case 'origin':
          out[`transform-origin`] = `${i[1]} ${i[2]}`;
          break;
        case 'cursor':
          out['cursor'] = `${i[1]}-${i[2]}`;
          break;
        case 'space':
          out['selectors'] = {
            '& > * + *': {
              [`margin-${i[1] === 'x' ? 'left' : 'top'}`]: `${n}${
                theme.margin[i[2]]
              }`,
            },
          };
          break;
      }
      break;
    case 4:
      switch (i[0]) {
        case 'grid':
          if ('flow' === i[1]) {
            if ('col' === i[2]) out[`grid-auto-flow`] = `column ${i[3]}`;
            if ('row' === i[2]) out[`grid-auto-flow`] = `row ${i[3]}`;
          }
          break;
        case 'max':
          if (i[1] + i[2] === 'wscreen')
            out['max-width'] = theme.maxWidth[`screen-${i[3]}`];
          break;
      }
      break;
  }

  return out;
};
