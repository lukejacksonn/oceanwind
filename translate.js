export default (theme) => (str) => {
  let n, x;

  if (str.startsWith('-')) {
    n = true;
    str = str.slice(1);
  }

  let i = str.split('-');
  const out = {};

  switch (i.length) {
    case 1:
      switch (i[0]) {
        case 'hidden':
          out['display'] = 'none';
          break;
        case 'inline':
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
          out['-webkit-font-smoothing'] = 'antialiased';
          out['-moz-osx-font-smoothing'] = 'grayscale';
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
          out['overflow'] = 'hidden';
          out['text-overflow'] = 'ellipsis';
          out['white-space'] = 'nowrap';
          break;
        case 'transition':
          out[`${i[0]}-property`] =
            'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform';
          break;
        case 'resize':
          out[i[0]] = 'both';
          break;
        case 'rounded':
          (x = theme.rounded['']) && (out['border-radius'] = x);
          break;
        case 'clearfix':
          out['selectors'] = {
            '&::after': {
              content: '""',
              display: 'table',
              clear: 'both',
            },
          };
          break;
      }
      break;
    case 2:
      switch (i[0]) {
        case 'normal':
          switch (i[1]) {
            case 'case':
              out['text-transform'] = 'none';
              break;
          }
          break;
        case 'flow':
          switch (i[1]) {
            case 'root':
              out['display'] = 'flow-root';
              break;
          }
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
              out['top'] = '0';
              out['right'] = '0';
              out['bottom'] = '0';
              out['left'] = '0';
              break;
            case 'auto':
              out['top'] = 'auto';
              out['right'] = 'auto';
              out['bottom'] = 'auto';
              out['left'] = 'auto';
              break;
          }
          break;
        case 'flex':
          switch (i[1]) {
            case 'row':
              out[`${i[0]}-direction`] = i[1];
              break;
            case 'col':
              out[`${i[0]}-direction`] = 'column';
              break;
            case 'wrap':
              out[`${i[0]}-${i[1]}`] = i[1];
              break;
            case 'initial':
              out[i[0]] = '0 1 auto';
              break;
            case '1':
              out[i[0]] = '1 1 0%';
              break;
            case 'auto':
              out[i[0]] = `1 1 ${i[1]}`;
              break;
            case 'none':
              out[i[0]] = i[1];
              break;
            case 'grow':
            case 'shrink':
              out[`${i[0]}-${i[1]}`] = '1';
              break;
          }
          break;
        case 'items':
          switch (i[1]) {
            case 'start':
            case 'end':
              out[`align-${i[0]}`] = `flex-${i[1]}`;
              break;
            default:
              out[`align-${i[0]}`] = i[1];
              break;
          }
          break;
        case 'content':
          switch (i[1]) {
            case 'start':
            case 'end':
              out[`align-${i[0]}`] = `flex-${i[1]}`;
              break;
            case 'between':
            case 'around':
              out[`align-${i[0]}`] = `space-${i[1]}`;
              break;
            default:
              out[`align-${i[0]}`] = i[1];
              break;
          }
          break;
        case 'justify':
          switch (i[1]) {
            case 'start':
            case 'end':
              out[`${i[0]}-content`] = `flex-${i[1]}`;
              break;
            case 'between':
            case 'around':
              out[`${i[0]}-content`] = `space-${i[1]}`;
              break;
            default:
              out[`${i[0]}-content`] = i[1];
              break;
          }
          break;
        case 'self':
          switch (i[1]) {
            case 'start':
            case 'end':
              out[`align-${i[0]}`] = `flex-${i[1]}`;
              break;
            default:
              out[`align-${i[0]}`] = i[1];
              break;
          }
          break;
        case 'order':
          switch (i[1]) {
            case 'none':
              out[i[0]] = '0';
              break;
            case 'last':
              out[i[0]] = '9999';
              break;
            case 'first':
              out[i[0]] = '-9999';
              break;
            default:
              out[i[0]] = i[1];
              break;
          }
          break;
        case 'col':
          i[1] === 'auto' && (out['grid-column'] = i[1]);
          break;
        case 'row':
          i[1] === 'auto' && (out['grid-row'] = i[1]);
          break;
        case 'w':
          switch (i[1]) {
            case 'screen':
              out['width'] = '100vw';
              break;
            default:
              (x = theme.unit[i[1]])
                ? (out['width'] = x)
                : (out['width'] = `calc(${i[1]} * 100%)`);
              break;
          }
          break;
        case 'h':
          switch (i[1]) {
            case 'screen':
              out['height'] = '100vh';
              break;
            default:
              (x = theme.unit[i[1]])
                ? (out['height'] = x)
                : (out['height'] = `calc(${i[1]} * 100%)`);
              break;
          }
          break;
        case 'text':
          switch (i[1]) {
            case 'left':
            case 'center':
            case 'right':
            case 'justify':
              out[`${i[0]}-align`] = i[1];
              break;
            case 'current':
              out['color'] = 'currentColor';
              break;
            default:
              (x = theme.text[i[1]])
                ? (out['font-size'] = x)
                : (out['color'] = i[1]);
              break;
          }
          break;
        case 'subpixel':
          'antialiased' === i[1] &&
            ((out['-webkit-font-smoothing'] = 'auto'),
            (out['-moz-osx-font-smoothing'] = 'auto'));
          break;
        case 'not':
          'italic' === i[1] && (out['font-style'] = 'normal');
          break;
        case 'list':
          switch (i[1]) {
            case 'inside':
            case 'outside':
              out[`${i[0]}-style-position`] = i[1];
              break;
            default:
              out[`${i[0]}-style-type`] = i[1];
              break;
          }
        case 'no':
          'underline' === i[1] && (out['text-decoration'] = 'none');
          break;
        case 'line':
          'through' === i[1] && (out['text-decoration'] = 'line-through');
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
              out['background-color'] = i[1];
              break;
          }
          break;
        case 'border':
          switch (i[1]) {
            case 'solid':
            case 'dashed':
            case 'dotted':
            case 'double':
            case 'none':
              out[`${i[0]}-style`] = i[1];
              break;
            case 'collapse':
              out[`${i[0]}-${i[1]}`] = i[1];
              break;
            case 'separate':
              out[`${i[0]}-collapse`] = i[1];
              break;
            case 'current':
              out[`${i[0]}-color`] = 'currentColor';
              break;
            default:
              (x = theme.border[i[1]])
                ? (out[i[0] + '-width'] = x)
                : (out[i[0] + '-color'] = i[1]);
              break;
          }
          break;
        case 'shadow':
          switch (i[1]) {
            case 'none':
              out[`box-${i[0]}`] = 'none';
              break;
            default:
              out['box-shadow'] = theme.shadow[i[1]] || i[1];
              break;
          }
          break;
        case 'opacity':
          out[i[0]] = '100' === i[1] ? '1' : `0.${i[1]}`;
          break;
        case 'transition':
          switch (i[1]) {
            case 'colors':
              out[`${i[0]}-property`] =
                'background-color, border-color, color, fill, stroke';
              break;
            case 'shadow':
              out[`${i[0]}-property`] = 'box-shadow';
              break;
            default:
              out[`${i[0]}-property`] = i[1];
              break;
          }
          break;
        case 'ease':
          switch (i[1]) {
            case 'linear':
              out['transition-timing-function'] = 'linear';
              break;
            case 'in':
              out['transition-timing-function'] = 'cubic-bezier(0.4, 0, 1, 1)';
              break;
            case 'out':
              out['transition-timing-function'] = 'cubic-bezier(0, 0, 0.2, 1)';
              break;
          }
          break;
        case 'appearance':
          'none' === i[1] && (out[i[0]] = i[1]);
          break;
        case 'outline':
          'none' === i[1] && (out[i[0]] = '0');
          break;
        case 'resize':
          switch (i[1]) {
            case 'x':
              out[i[0]] = 'vertical';
              break;
            case 'y':
              out[i[0]] = 'horizontal';
              break;
            case 'none':
              out[i[0]] = i[1];
              break;
          }
          break;
        case 'fill':
          'current' === i[1] && (out['fill'] = 'currentColor');
          break;
        case 'stroke':
          'current' === i[1]
            ? (out['stroke'] = 'currentColor')
            : (out['stroke-width'] = i[1]);
          break;
        case 'sr':
          'only' === i[1] &&
            ((out['width'] = '1px'),
            (out['height'] = '1px'),
            (out['padding'] = '0'),
            (out['margin'] = '-1px'),
            (out['overflow'] = 'hidden'),
            (out['clip'] = 'rect(0,0,0,0)'),
            (out['border-width'] = '0'));
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
          out[`-webkit-overflow-${i[0]}`] = i[1];
          break;
        case 'z':
          out['z-index'] = i[1];
          break;
        case 'gap':
          (x = theme.unit[i[1]]) && (out['gap'] = x);
          break;
        case 'p':
          (x = theme.unit[i[1]]) && (out['padding'] = x);
          break;
        case 'py':
          (x = theme.unit[i[1]]) &&
            ((out['padding-top'] = x), (out['padding-bottom'] = x));
          break;
        case 'px':
          (x = theme.unit[i[1]]) &&
            ((out['padding-left'] = x), (out['padding-right'] = x));
          break;
        case 'pt':
          (x = theme.unit[i[1]]) && (out['padding-top'] = x);
          break;
        case 'pr':
          (x = theme.unit[i[1]]) && (out['padding-right'] = x);
          break;
        case 'pb':
          (x = theme.unit[i[1]]) && (out['padding-bottom'] = x);
          break;
        case 'pl':
          (x = theme.unit[i[1]]) && (out['padding-left'] = x);
          break;
        case 'm':
          (x = theme.unit[i[1]]) && (out['margin'] = `${n ? '-' : ''}${x}`);
          break;
        case 'my':
          (x = theme.unit[i[1]]) &&
            ((out['margin-top'] = `${n ? '-' : ''}${x}`),
            (out['margin-bottom'] = `${n ? '-' : ''}${x}`));
          break;
        case 'mx':
          (x = theme.unit[i[1]]) &&
            ((out['margin-left'] = `${n ? '-' : ''}${x}`),
            (out['margin-right'] = `${n ? '-' : ''}${x}`));
          break;
        case 'mt':
          (x = theme.unit[i[1]]) && (out['margin-top'] = `${n ? '-' : ''}${x}`);
          break;
        case 'mr':
          (x = theme.unit[i[1]]) &&
            (out['margin-right'] = `${n ? '-' : ''}${x}`);
          break;
        case 'mb':
          (x = theme.unit[i[1]]) &&
            (out['margin-bottom'] = `${n ? '-' : ''}${x}`);
          break;
        case 'ml':
          (x = theme.unit[i[1]]) &&
            (out['margin-left'] = `${n ? '-' : ''}${x}`);
          break;
        case 'font':
          if ((x = theme.font[i[1]])) out['font-family'] = x;
          if ((x = theme.weight[i[1]])) out['font-weight'] = x;
          break;
        case 'tracking':
          (x = theme.tracking[i[1]]) && (out['letter-spacing'] = x);
          break;
        case 'leading':
          (x = theme.leading[i[1]]) && (out['line-height'] = x);
          break;
        case 'align':
          out[`vertical-${i[0]}`] = i[1];
          break;
        case 'whitespace':
          out['white-space'] = i[1];
          break;
        case 'rounded':
          (x = theme.rounded[i[1]]) && (out['border-radius'] = x);
          break;
        case 'duration':
          out[`transition-${i[0]}`] = `${theme.duration[i[1]]}ms`;
          break;
        case 'delay':
          out['transition-delay'] = `${theme.duration[i[1]]}ms`;
          break;
        case 'scale':
          out['transform'] = `scale(${theme.scale[i[1]]})`;
          break;
        case 'rotate':
          out['transform'] = `rotate(${n ? i[1] * -1 : i[1]}deg)`;
          break;
        case 'origin':
          out[`transform-${i[0]}`] = i[1];
          break;
        case 'cursor':
          out[i[0]] = i[1];
          break;
        case 'select':
          out['user-select'] = i[1];
          break;
        case 'placeholder':
          out[`::${i[0]}`] = { color: theme.colors[i[1]] };
          break;
      }
      break;
    case 3:
      switch (i[0]) {
        case 'placeholder':
          out[`::${i[0]}`] = { color: theme.colors[i[1]][i[2]] };
          break;
        case 'table':
          out['display'] = `${i[0]}-${i[1]}-${i[2]}`;
          break;
        case 'object':
          'scale' === i[1]
            ? (out[i[0] + '-fit'] = `${i[1]}-${i[2]}`)
            : (out[i[0] + '-position'] = `${i[1]} ${i[2]}`);
          break;
        case 'inset':
          switch (i[1]) {
            case 'y':
              out['top'] = i[2];
              out['bottom'] = i[2];
              break;
            case 'x':
              out['left'] = i[2];
              out['right'] = i[2];
              break;
          }
          break;
        case 'flex':
          switch (i[1]) {
            case 'row':
              'reverse' === i[2] && (out[`${i[0]}-direction`] = `row-${i[2]}`);
              break;
            case 'col':
              'reverse' === i[2] &&
                (out[`${i[0]}-direction`] = `column-${i[2]}`);
              break;
            case 'no':
              'wrap' === i[2] && (out[`${i[0]}-${i[2]}`] = `${i[1]}${i[2]}`);
              break;
            case 'wrap':
              'reverse' === i[2] &&
                (out[`${i[0]}-${i[1]}`] = `${i[1]}-${i[2]}`);
              break;
            case 'grow':
            case 'shrink':
              '0' === i[2] && (out[`${i[0]}-${i[1]}`] = '0');
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
              switch (i[2]) {
                case '0':
                  out['min-width'] = '0';
                  break;
                case 'full':
                  out['min-width'] = '100%';
                  break;
              }
              break;
            case 'h':
              switch (i[2]) {
                case '0':
                  out['min-height'] = '0';
                  break;
                case 'full':
                  out['min-height'] = '100%';
                  break;
                case 'screen':
                  out['min-height'] = '100vh';
                  break;
              }
              break;
          }
          break;
        case 'max':
          switch (i[1]) {
            case 'w':
              switch (i[2]) {
                case 'full':
                  out['max-width'] = '100%';
                  break;
                case 'none':
                  out['max-width'] = i[2];
                  break;
                default:
                  (x = theme.width[i[2]]) && (out['max-width'] = x);
                  break;
              }
              break;
            case 'h':
              switch (i[2]) {
                case 'full':
                  out['max-height'] = '100%';
                  break;
                case 'screen':
                  out['max-height'] = '100vh';
                  break;
              }
              break;
          }
          break;
        case 'whitespace':
          'no' === i[1]
            ? 'wrap' === i[2] && (out['white-space'] = 'nowrap')
            : (out['white-space'] = `${i[1]}-${i[2]}`);
          break;
        case 'bg':
          switch (i[1]) {
            case 'no':
              'repeat' === i[2] &&
                (out[`background-${i[2]}`] = `${i[1]}-${i[2]}`);
              break;
            case 'repeat':
              switch (i[2]) {
                case 'x':
                case 'y':
                  out[`background-${i[1]}`] = `${i[1]}-${i[2]}`;
                  break;
                default:
                  out[`background-${i[1]}`] = i[2];
                  break;
              }
              break;
            case 'left':
              out['background-position'] = `${i[1]} ${i[2]}`;
              break;
            case 'right':
              out['background-position'] = `${i[1]} ${i[2]}`;
              break;
            default:
              theme.colors[i[1]] &&
                (x = theme.colors[i[1]][i[2]]) &&
                (out['background-color'] = x);
              break;
          }
          break;
        case 'ease':
          'in' === i[1] &&
            'out' === i[2] &&
            (out['transition-timing-function'] =
              'cubic-bezier(0.4, 0, 0.2, 1)');
          break;
        case 'not':
          'sr' === i[1] &&
            'only' === i[2] &&
            ((out['position'] = 'static'),
            (out['width'] = 'auto'),
            (out['height'] = 'auto'),
            (out['padding'] = '0'),
            (out['margin'] = '0'),
            (out['overflow'] = 'visible'),
            (out['clip'] = 'auto'),
            (out['white-space'] = 'normal'));
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
              (x = theme.unit[i[2]]) && (out['column-gap'] = x);
              break;
          }
          break;
        case 'row':
          switch (i[1]) {
            case 'span':
              out[`grid-${i[0]}`] = `span ${i[2]} / span ${i[2]}`;
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
              if ((x = theme.rounded[i[2]])) {
                out['border-top-left-radius'] = x;
                out['border-top-right-radius'] = x;
              }
              break;
            case 'r':
              if ((x = theme.rounded[i[2]])) {
                out['border-top-right-radius'] = x;
                out['border-bottom-right-radius'] = x;
              }
              break;
            case 'b':
              if ((x = theme.rounded[i[2]])) {
                out['border-bottom-left-radius'] = x;
                out['border-bottom-right-radius'] = x;
              }
              break;
            case 'l':
              if ((x = theme.rounded[i[2]])) {
                out['border-top-left-radius'] = x;
                out['border-bottom-left-radius'] = x;
              }
              break;
            case 'tl':
              (x = theme.rounded[i[2]]) && (out['border-top-left-radius'] = x);
              break;
            case 'tr':
              (x = theme.rounded[i[2]]) && (out['border-top-right-radius'] = x);
              break;
            case 'bl':
              (x = theme.rounded[i[2]]) &&
                (out['border-bottom-left-radius'] = x);
              break;
            case 'br':
              (x = theme.rounded[i[2]]) &&
                (out['border-bottom-right-radius'] = x);
              break;
          }
          break;
        case 'border':
          switch (i[1]) {
            case 't':
              (x = theme.border[i[2]]) && (out[`${i[0]}-top-width`] = x);
              break;
            case 'r':
              (x = theme.border[i[2]]) && (out[`${i[0]}-right-width`] = x);
              break;
            case 'b':
              (x = theme.border[i[2]]) && (out[`${i[0]}-bottom-width`] = x);
              break;
            case 'l':
              (x = theme.border[i[2]]) && (out[`${i[0]}-left-width`] = x);
              break;
            default:
              theme.colors[i[1]] &&
                (x = theme.colors[i[1]][i[2]]) &&
                (out[`${i[0]}-color`] = x);
              break;
          }
          break;
        case 'scale':
          out['transform'] = `scale${i[1].toUpperCase()}(${theme.scale[i[2]]})`;
          break;
        case 'translate':
          (x = theme.unit[i[2]]) &&
            (out['transform'] = `${i[0]}${i[1].toUpperCase()}(${
              n ? '-' : ''
            }${x})`);
          break;
        case 'skew':
          (x = theme.skew[i[2]]) &&
            (out['transform'] = `${i[0]}${i[1].toUpperCase()}(${
              n ? '-' : ''
            }${x})`);
          break;
        case 'pointer':
          'events' === i[1] && (out[`${i[0]}-${i[1]}`] = i[2]);
          break;
        case 'text':
          theme.colors[i[1]] &&
            (x = theme.colors[i[1]][i[2]]) &&
            (out['color'] = x);
          break;
        case 'align':
          out[`vertical-${i[0]}`] = `${i[1]}-${i[2]}`;
          break;
        case 'origin':
          out[`transform-${i[0]}`] = `${i[1]} ${i[2]}`;
          break;
        case 'cursor':
          out[i[0]] = `${i[1]}-${i[2]}`;
          break;
        case 'space':
          out['selectors'] = {
            '& > * + *': {
              [`margin-${i[1] === 'x' ? 'left' : 'top'}`]: `${n ? '-' : ''}${
                theme.unit[i[2]]
              }`,
            },
          };
          break;
      }
      break;
    case 4:
      switch (i[0]) {
        case 'grid':
          'flow' === i[1] && 'col' === i[2]
            ? (out[`${i[0]}-auto-flow`] = `column ${i[3]}`)
            : (out[`${i[0]}-auto-flow`] = `row ${i[3]}`);
          break;
        case 'max':
          'w' === i[1] &&
            'screen' === i[2] &&
            (x = theme.screen[i[3]]) &&
            (out['max-width'] = x);
          break;
      }
      break;
  }

  return out;
};
