var g = {
  font: {
    sans:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    serif: 'Georgia, Cambria, "Times New Roman", Times, serif',
    mono:
      'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  },
  unit: {
    auto: 'auto',
    full: '100%',
    px: '1px',
    0: '0',
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    8: '2rem',
    10: '2.5rem',
    12: '3rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
    32: '8rem',
    40: '10rem',
    48: '12rem',
    56: '15rem',
    64: '16rem',
  },
  width: {
    xs: '20rem',
    sm: '24rem',
    md: '28rem',
    lg: '32rem',
    xl: '36rem',
    '2xl': '42rem',
    '3xl': '48rem',
    '4xl': '56rem',
    '5xl': '64rem',
    '6xl': '72rem',
    full: '100%',
  },
  screen: { sm: '640px', md: '768px', lg: '1024px', xl: '1280px' },
  text: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '4rem',
  },
  weight: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  tracking: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0em',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
  leading: {
    none: 1,
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
    3: '0.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    7: '1.75rem',
    8: '2rem',
  },
  rounded: {
    none: 0,
    sm: '0.125rem',
    md: '0.375rem',
    lg: '0.5rem',
    full: '9999px',
  },
  border: { 1: '1px', 2: '2px', 4: '4px', 8: '8px' },
  shadow: {
    xs: '0 0 0 1px rgba(0, 0, 0, 0.05)',
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    '': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg:
      '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl:
      '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
    outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
  },
  colors: {
    gray: {
      100: '#F7FAFC',
      200: '#EDF2F7',
      300: '#E2E8F0',
      400: '#CBD5E0',
      500: '#A0AEC0',
      600: '#718096',
      700: '#4A5568',
      800: '#2D3748',
      900: '#1A202C',
    },
    red: {
      100: '#FFF5F5',
      200: '#FED7D7',
      300: '#FEB2B2',
      400: '#FC8181',
      500: '#F56565',
      600: '#E53E3E',
      700: '#C53030',
      800: '#9B2C2C',
      900: '#742A2A',
    },
    orange: {
      100: '#FFFAF0',
      200: '#FEEBC8',
      300: '#FBD38D',
      400: '#F6AD55',
      500: '#ED8936',
      600: '#DD6B20',
      700: '#C05621',
      800: '#9C4221',
      900: '#7B341E',
    },
    yellow: {
      100: '#FFFFF0',
      200: '#FEFCBF',
      300: '#FAF089',
      400: '#F6E05E',
      500: '#ECC94B',
      600: '#D69E2E',
      700: '#B7791F',
      800: '#975A16',
      900: '#744210',
    },
    green: {
      100: '#F0FFF4',
      200: '#C6F6D5',
      300: '#9AE6B4',
      400: '#68D391',
      500: '#48BB78',
      600: '#38A169',
      700: '#2F855A',
      800: '#276749',
      900: '#22543D',
    },
    teal: {
      100: '#E6FFFA',
      200: '#B2F5EA',
      300: '#81E6D9',
      400: '#4FD1C5',
      500: '#38B2AC',
      600: '#319795',
      700: '#2C7A7B',
      800: '#285E61',
      900: '#234E52',
    },
    blue: {
      100: '#EBF8FF',
      200: '#BEE3F8',
      300: '#90CDF4',
      400: '#63B3ED',
      500: '#4299E1',
      600: '#3182CE',
      700: '#2B6CB0',
      800: '#2C5282',
      900: '#2A4365',
    },
    indigo: {
      100: '#EBF4FF',
      200: '#C3DAFE',
      300: '#A3BFFA',
      400: '#7F9CF5',
      500: '#667EEA',
      600: '#5A67D8',
      700: '#4C51BF',
      800: '#434190',
      900: '#3C366B',
    },
    purple: {
      100: '#FAF5FF',
      200: '#E9D8FD',
      300: '#D6BCFA',
      400: '#B794F4',
      500: '#9F7AEA',
      600: '#805AD5',
      700: '#6B46C1',
      800: '#553C9A',
      900: '#44337A',
    },
    pink: {
      100: '#FFF5F7',
      200: '#FED7E2',
      300: '#FBB6CE',
      400: '#F687B3',
      500: '#ED64A6',
      600: '#D53F8C',
      700: '#B83280',
      800: '#97266D',
      900: '#702459',
    },
  },
};
function h(d, b, a) {
  let c;
  switch (a.length) {
    case 1:
      switch (a[0]) {
        case 'hidden':
          b.display = 'none';
          return;
        case 'inline':
        case 'flex':
        case 'grid':
        case 'table':
          b.display = a[0];
          return;
        case 'static':
        case 'fixed':
        case 'absolute':
        case 'relative':
        case 'sticky':
          b.position = a[0];
          return;
        case 'visible':
          b.visibility = a[0];
          return;
        case 'invisible':
          b.visibility = 'hidden';
          return;
        case 'antialiased':
          b['-webkit-font-smoothing'] = 'antialiased';
          b['-moz-osx-font-smoothing'] = 'grayscale';
          return;
        case 'italic':
          b['font-style'] = a[0];
          return;
        case 'underline':
          b['text-decoration'] = a[0];
          return;
        case 'uppercase':
        case 'lowercase':
        case 'capitalize':
          b['text-transform'] = a[0];
          return;
        case 'normal-case':
          b['text-transform'] = 'none';
          return;
        case 'truncate':
          b.overflow = 'hidden';
          b['text-overflow'] = 'ellipsis';
          b['white-space'] = 'nowrap';
          return;
        case 'transition':
          b[a[0] + '-property'] =
            'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform';
          return;
        case 'resize':
          b[a[0]] = 'both';
          return;
        default:
          return;
      }
    case 2:
      switch (a[0]) {
        case 'flow':
          'root' === a[1] && (b.display = a[0] + ('-' + a[1]));
          return;
        case 'inline':
          switch (a[1]) {
            case 'block':
            case 'flex':
            case 'grid':
              b.display = a[0] + ('-' + a[1]);
              return;
            default:
              return;
          }
        case 'table':
          switch (a[1]) {
            case 'caption':
            case 'cell':
            case 'column':
            case 'row':
              b.display = a[0] + ('-' + a[1]);
              return;
            case 'auto':
            case 'fixed':
              b[a[0] + '-layout'] = a[1];
              return;
            default:
              return;
          }
        case 'object':
          switch (a[1]) {
            case 'contain':
            case 'cover':
            case 'fill':
            case 'none':
              b[a[0] + '-fit'] = a[1];
              return;
            default:
              b[a[0] + '-position'] = a[1];
              return;
          }
        case 'inset':
          switch (a[1]) {
            case '0':
              b.top = '0';
              b.right = '0';
              b.bottom = '0';
              b.left = '0';
              return;
            case 'auto':
              b.top = 'auto';
              b.right = 'auto';
              b.bottom = 'auto';
              b.left = 'auto';
              return;
            default:
              return;
          }
        case 'flex':
          switch (a[1]) {
            case 'row':
              b[a[0] + '-direction'] = a[1];
              return;
            case 'col':
              b[a[0] + '-direction'] = 'column';
              return;
            case 'wrap':
              b[a[0] + ('-' + a[1])] = a[1];
              return;
            case 'initial':
              b[a[0]] = '0 1 auto';
              return;
            case '1':
              b[a[0]] = '1 1 0%';
              return;
            case 'auto':
              b[a[0]] = '1 1 ' + a[1];
              return;
            case 'none':
              b[a[0]] = a[1];
              return;
            case 'grow':
            case 'shrink':
              b[a[0] + ('-' + a[1])] = '1';
              return;
            default:
              return;
          }
        case 'items':
          switch (a[1]) {
            case 'start':
            case 'end':
              b['align-' + a[0]] = 'flex-' + a[1];
              return;
            default:
              b['align-' + a[0]] = a[1];
              return;
          }
        case 'content':
          switch (a[1]) {
            case 'start':
            case 'end':
              b['align-' + a[0]] = 'flex-' + a[1];
              return;
            case 'between':
            case 'around':
              b['align-' + a[0]] = 'space-' + a[1];
              return;
            default:
              b['align-' + a[0]] = a[1];
              return;
          }
        case 'justify':
          switch (a[1]) {
            case 'start':
            case 'end':
              b[a[0] + '-content'] = 'flex-' + a[1];
              return;
            case 'between':
            case 'around':
              b[a[0] + '-content'] = 'space-' + a[1];
              return;
            default:
              b[a[0] + '-content'] = a[1];
              return;
          }
        case 'self':
          switch (a[1]) {
            case 'start':
            case 'end':
              b['align-' + a[0]] = 'flex-' + a[1];
              return;
            default:
              b['align-' + a[0]] = a[1];
              return;
          }
        case 'order':
          switch (a[1]) {
            case 'none':
              b[a[0]] = '0';
              return;
            case 'last':
              b[a[0]] = '9999';
              return;
            case 'first':
              b[a[0]] = '-9999';
              return;
            default:
              b[a[0]] = a[1];
              return;
          }
        case 'col':
          'auto' === a[1] && (b['grid-column'] = a[1]);
          return;
        case 'row':
          'auto' === a[1] && (b['grid-' + a[0]] = 'auto');
          return;
        case 'w':
          switch (a[1]) {
            case 'full':
              b.width = '100%';
              return;
            case 'screen':
              b.width = '100vw';
              return;
            default:
              (c = d.unit[a[1]])
                ? ((a[1] = c), (b.width = a[1]))
                : (b.width = 'calc(' + (a[1] + ' * 100%)'));
              return;
          }
        case 'h':
          switch (a[1]) {
            case 'full':
              b.height = '100%';
              return;
            case 'screen':
              b.height = '100vh';
              return;
            default:
              if ((c = d.unit[a[1]])) {
                (a[1] = c), (b.height = a[1]);
              }
              return;
          }
        case 'text':
          switch (a[1]) {
            case 'left':
            case 'center':
            case 'right':
            case 'justify':
              b[a[0] + '-align'] = a[1];
              return;
            case 'current':
              b.color = 'currentColor';
              return;
            default:
              (c = d.text[a[1]])
                ? ((a[1] = c), (b['font-size'] = a[1]))
                : (b.color = a[1]);
              return;
          }
        case 'subpixel':
          'antialiased' === a[1] &&
            ((b['-webkit-font-smoothing'] = 'auto'),
            (b['-moz-osx-font-smoothing'] = 'auto'));
          return;
        case 'not':
          'italic' === a[1] && (b['font-style'] = 'normal');
          return;
        case 'list':
          switch (a[1]) {
            case 'inside':
            case 'outside':
              b[a[0] + '-style-position'] = a[1];
              return;
            default:
              b[a[0] + '-style-type'] = a[1];
              return;
          }
        case 'no':
          'underline' === a[1] && (b['text-decoration'] = 'none');
          return;
        case 'line':
          'through' === a[1] && (b['text-decoration'] = 'line-through');
          return;
        case 'break':
          switch (a[1]) {
            case 'normal':
              b['word-break'] = a[1];
              b['overflow-wrap'] = a[1];
              return;
            case 'words':
              b['overflow-wrap'] = 'break-word';
              return;
            case 'all':
              b['word-break'] = 'break-all';
              return;
            default:
              return;
          }
        case 'bg':
          switch (a[1]) {
            case 'fixed':
            case 'local':
            case 'scroll':
              b['background-attachment'] = a[1];
              return;
            case 'bottom':
            case 'center':
            case 'left':
            case 'right':
            case 'top':
              b['background-position'] = a[1];
              return;
            case 'repeat':
              b['background-' + a[1]] = a[1];
              return;
            case 'auto':
            case 'cover':
            case 'contain':
              b['background-size'] = a[1];
              return;
            case 'current':
              b['background-color'] = 'currentColor';
              return;
            default:
              b['background-color'] = a[1];
              return;
          }
        case 'border':
          switch (a[1]) {
            case 'solid':
            case 'dashed':
            case 'dotted':
            case 'double':
            case 'none':
              b[a[0] + '-style'] = a[1];
              return;
            case 'collapse':
              b[a[0] + ('-' + a[1])] = a[1];
              return;
            case 'separate':
              b[a[0] + '-collapse'] = a[1];
              return;
            case 'current':
              b[a[0] + '-color'] = 'currentColor';
              return;
            default:
              (c = d.border[a[1]])
                ? ((a[1] = c), (b[a[0] + '-width'] = a[1]))
                : (b[a[0] + '-color'] = a[1]);
              return;
          }
        case 'shadow':
          if ('none' === a[1]) {
            b['box-' + a[0]] = a[1];
          } else {
            if ((c = d.shadow[a[1]])) {
              (a[1] = c), (b['box-' + a[0]] = a[1]);
            }
          }
          return;
        case 'opacity':
          b[a[0]] = '100' === a[1] ? '1' : '0.' + a[1];
          return;
        case 'transition':
          switch (a[1]) {
            case 'colors':
              b[a[0] + '-property'] =
                'background-color, border-color, color, fill, stroke';
              return;
            case 'shadow':
              b[a[0] + '-property'] = 'box-shadow';
              return;
            default:
              b[a[0] + '-property'] = a[1];
              return;
          }
        case 'ease':
          switch (a[1]) {
            case 'linear':
              b['transition-timing-function'] = 'linear';
              return;
            case 'in':
              b['transition-timing-function'] = 'cubic-bezier(0.4, 0, 1, 1)';
              return;
            case 'out':
              b['transition-timing-function'] = 'cubic-bezier(0, 0, 0.2, 1)';
              return;
            default:
              return;
          }
        case 'appearance':
          'none' === a[1] && (b[a[0]] = a[1]);
          return;
        case 'outline':
          'none' === a[1] && (b[a[0]] = '0');
          return;
        case 'resize':
          switch (a[1]) {
            case 'x':
              b[a[0]] = 'vertical';
              return;
            case 'y':
              b[a[0]] = 'horizontal';
              return;
            case 'none':
              b[a[0]] = a[1];
              return;
            default:
              return;
          }
        case 'fill':
          'current' === a[1] && (b.fill = 'currentColor');
          return;
        case 'stroke':
          'current' === a[1]
            ? (b.stroke = 'currentColor')
            : (b['stroke-width'] = a[1]);
          return;
        case 'sr':
          'only' === a[1] &&
            ((b.width = '1px'),
            (b.height = '1px'),
            (b.padding = '0'),
            (b.margin = '-1px'),
            (b.overflow = 'hidden'),
            (b.clip = 'rect(0,0,0,0)'),
            (b['border-width'] = '0'));
          return;
        case 'box':
          b['box-sizing'] = a[1] + '-box';
          return;
        case 'float':
          b[a[0]] = a[1];
          return;
        case 'clear':
          b[a[0]] = a[1];
          return;
        case 'overflow':
          b[a[0]] = a[1];
          return;
        case 'scrolling':
          b['-webkit-overflow-' + a[0]] = a[1];
          return;
        case 'z':
          b['z-index'] = a[1];
          return;
        case 'gap':
          if ((c = d.unit[a[1]])) {
            (a[1] = c), (b.gap = a[1]);
          }
          return;
        case 'p':
          if ((c = d.unit[a[1]])) {
            (a[1] = c), (b.padding = a[1]);
          }
          return;
        case 'py':
          if ((c = d.unit[a[1]])) {
            (a[1] = c), (b['padding-top'] = a[1]), (b['padding-bottom'] = a[1]);
          }
          return;
        case 'px':
          if ((c = d.unit[a[1]])) {
            (a[1] = c), (b['padding-right'] = a[1]), (b['padding-left'] = a[1]);
          }
          return;
        case 'pt':
          if ((c = d.unit[a[1]])) {
            (a[1] = c), (b['padding-top'] = a[1]);
          }
          return;
        case 'pr':
          if ((c = d.unit[a[1]])) {
            (a[1] = c), (b['padding-right'] = a[1]);
          }
          return;
        case 'pb':
          if ((c = d.unit[a[1]])) {
            (a[1] = c), (b['padding-bottom'] = a[1]);
          }
          return;
        case 'pl':
          if ((c = d.unit[a[1]])) {
            (a[1] = c), (b['padding-left'] = a[1]);
          }
          return;
        case 'm':
          if ((c = d.unit[a[1]])) {
            (a[1] = c), (b.margin = a[1]);
          }
          return;
        case 'my':
          if ((c = d.unit[a[1]])) {
            (a[1] = c), (b['margin-top'] = a[1]), (b['margin-bottom'] = a[1]);
          }
          return;
        case 'mx':
          if ((c = d.unit[a[1]])) {
            (a[1] = c), (b['margin-right'] = a[1]), (b['margin-left'] = a[1]);
          }
          return;
        case 'mt':
          if ((c = d.unit[a[1]])) {
            (a[1] = c), (b['margin-top'] = a[1]);
          }
          return;
        case 'mr':
          if ((c = d.unit[a[1]])) {
            (a[1] = c), (b['margin-right'] = a[1]);
          }
          return;
        case 'mb':
          if ((c = d.unit[a[1]])) {
            (a[1] = c), (b['margin-bottom'] = a[1]);
          }
          return;
        case 'ml':
          if ((c = d.unit[a[1]])) {
            (a[1] = c), (b['margin-left'] = a[1]);
          }
          return;
        case 'font':
          if ((c = d.font[a[1]])) {
            (a[1] = c), (b['font-family'] = a[1]);
          } else {
            if ((c = d.weight[a[1]])) {
              (a[1] = c), (b[a[0] + '-weight'] = a[1]);
            }
          }
          return;
        case 'tracking':
          if ((c = d.tracking[a[1]])) {
            (a[1] = c), (b['letter-spacing'] = a[1]);
          }
          return;
        case 'leading':
          if ((c = d.leading[a[1]])) {
            (a[1] = c), (b['line-height'] = a[1]);
          }
          return;
        case 'align':
          b['vertical-' + a[0]] = a[1];
          return;
        case 'whitespace':
          b['white-space'] = a[1];
          return;
        case 'rounded':
          if ((c = d.rounded[a[1]])) {
            (a[1] = c), (b['border-radius'] = a[1]);
          }
          return;
        case 'duration':
          b['transition-' + a[0]] = a[1] + 'ms';
          return;
        case 'delay':
          b['transition-delay'] = a[1] + 'ms';
          return;
        case 'scale':
          b.transform = a[0] + ('(0.' + (a[1] + ')'));
          return;
        case 'rotate':
          b.transform = a[0] + ('(' + (a[1] + 'deg)'));
          return;
        case 'origin':
          b['transform-' + a[0]] = a[1];
          return;
        case 'cursor':
          b[a[0]] = a[1];
          return;
        case 'select':
          b['user-select'] = a[1];
          return;
        default:
          return;
      }
    case 3:
      switch (a[0]) {
        case 'table':
          switch (a[1]) {
            case 'column':
              'group' === a[2] &&
                (b.display = a[0] + ('-' + (a[1] + ('-' + a[2]))));
              return;
            case 'footer':
              'group' === a[2] &&
                (b.display = a[0] + ('-' + (a[1] + ('-' + a[2]))));
              return;
            case 'header':
              'group' === a[2] &&
                (b.display = a[0] + ('-' + (a[1] + ('-' + a[2]))));
              return;
            case 'row':
              'group' === a[2] &&
                (b.display = a[0] + ('-' + (a[1] + ('-' + a[2]))));
              return;
            default:
              return;
          }
        case 'object':
          'scale' === a[1]
            ? 'down' === a[2] && (b[a[0] + '-fit'] = a[0] + ('-' + a[1]))
            : (b[a[0] + '-position'] = a[1] + (' ' + a[2]));
          return;
        case 'inset':
          switch (a[1]) {
            case 'y':
              switch (a[2]) {
                case '0':
                  b.top = '0';
                  b.bottom = '0';
                  return;
                case 'auto':
                  b.top = 'auto';
                  b.bottom = 'auto';
                  return;
                default:
                  return;
              }
            case 'x':
              switch (a[2]) {
                case '0':
                  b.right = '0';
                  b.left = '0';
                  return;
                case 'auto':
                  b.right = 'auto';
                  b.left = 'auto';
                  return;
                default:
                  return;
              }
            default:
              return;
          }
        case 'flex':
          switch (a[1]) {
            case 'row':
              'reverse' === a[2] && (b[a[0] + '-direction'] = 'row-' + a[2]);
              return;
            case 'col':
              'reverse' === a[2] && (b[a[0] + '-direction'] = 'column-' + a[2]);
              return;
            case 'no':
              'wrap' === a[2] && (b[a[0] + ('-' + a[2])] = a[1] + a[2]);
              return;
            case 'wrap':
              'reverse' === a[2] &&
                (b[a[0] + ('-' + a[1])] = a[1] + ('-' + a[2]));
              return;
            case 'grow':
              '0' === a[2] && (b[a[0] + ('-' + a[1])] = '0');
              return;
            case 'shrink':
              '0' === a[2] && (b[a[0] + ('-' + a[1])] = '0');
              return;
            default:
              return;
          }
        case 'grid':
          switch (a[1]) {
            case 'cols':
              b[a[0] + '-template-columns'] =
                'none' === a[2]
                  ? a[2]
                  : 'repeat(' + (a[2] + ', minmax(0, 1fr))');
              return;
            case 'rows':
              b[a[0] + ('-template-' + a[1])] =
                'none' === a[2]
                  ? 'none'
                  : 'repeat(' + (a[2] + ', minmax(0, 1fr))');
              return;
            case 'flow':
              b[a[0] + ('-auto-' + a[1])] = a[2];
              return;
            default:
              return;
          }
        case 'min':
          switch (a[1]) {
            case 'w':
              switch (a[2]) {
                case '0':
                  b.width = '0';
                  return;
                case 'full':
                  b.width = '100%';
                  return;
                default:
                  return;
              }
            case 'h':
              switch (a[2]) {
                case '0':
                  b.height = '0';
                  return;
                case 'full':
                  b.height = '100%';
                  return;
                case 'screen':
                  b.height = '100vh';
                  return;
                default:
                  return;
              }
            default:
              return;
          }
        case 'max':
          switch (a[1]) {
            case 'w':
              switch (a[2]) {
                case 'full':
                  b['max-width'] = '100%';
                  return;
                case 'none':
                  b['max-width'] = a[2];
                  return;
                default:
                  if ((c = d.width[a[2]])) {
                    (a[2] = c), (b['max-width'] = a[2]);
                  }
                  return;
              }
            case 'h':
              switch (a[2]) {
                case 'full':
                  b.height = '100%';
                  return;
                case 'screen':
                  b.height = '100vh';
                  return;
                default:
                  return;
              }
            default:
              return;
          }
        case 'whitespace':
          'no' === a[1]
            ? 'wrap' === a[2] && (b['white-space'] = 'nowrap')
            : (b['white-space'] = a[1] + ('-' + a[2]));
          return;
        case 'bg':
          switch (a[1]) {
            case 'no':
              'repeat' === a[2] &&
                (b['background-' + a[2]] = a[1] + ('-' + a[2]));
              return;
            case 'repeat':
              switch (a[2]) {
                case 'x':
                case 'y':
                  b['background-' + a[1]] = a[1] + ('-' + a[2]);
                  return;
                default:
                  b['background-' + a[1]] = a[2];
                  return;
              }
            case 'left':
              b['background-position'] = a[1] + (' ' + a[2]);
              return;
            case 'right':
              b['background-position'] = a[1] + (' ' + a[2]);
              return;
            default:
              d.colors[a[1]] &&
                (c = d.colors[a[1]][a[2]]) &&
                ((a[2] = c), (b['background-color'] = a[2]));
              return;
          }
        case 'ease':
          'in' === a[1] &&
            'out' === a[2] &&
            (b['transition-timing-function'] = 'cubic-bezier(0.4, 0, 0.2, 1)');
          return;
        case 'not':
          'sr' === a[1] &&
            'only' === a[2] &&
            ((b.width = 'auto'),
            (b.height = 'auto'),
            (b.padding = '0'),
            (b.margin = '0'),
            (b.overflow = 'visible'),
            (b.clip = 'auto'),
            (b['white-space'] = 'normal'));
          return;
        case 'overflow':
          switch (a[1]) {
            case 'x':
              b[a[0] + '-x'] = a[2];
              return;
            case 'y':
              b[a[0] + '-y'] = a[2];
              return;
            default:
              return;
          }
        case 'col':
          switch (a[1]) {
            case 'span':
              b['grid-column'] = 'span ' + (a[2] + (' / span ' + a[2]));
              return;
            case 'start':
              b['grid-column-' + a[1]] = a[2];
              return;
            case 'end':
              b['grid-column-' + a[1]] = a[2];
              return;
            case 'gap':
              if ((c = d.unit[a[2]])) {
                (a[2] = c), (b.gap = a[2]);
              }
              return;
            default:
              return;
          }
        case 'row':
          switch (a[1]) {
            case 'span':
              b['grid-' + a[0]] = 'span ' + (a[2] + (' / span ' + a[2]));
              return;
            case 'start':
              b['grid-' + (a[0] + ('-' + a[1]))] = a[2];
              return;
            case 'end':
              b['grid-' + (a[0] + ('-' + a[1]))] = a[2];
              return;
            default:
              return;
          }
        case '':
          switch (a[1]) {
            case 'm':
              if ((c = d.unit[a[2]])) {
                (a[2] = c), (b.margin = '-' + a[2]);
              }
              return;
            case 'my':
              if ((c = d.unit[a[2]])) {
                (a[2] = c),
                  (b['margin-top'] = a[2]),
                  (b['margin-bottom'] = '-' + a[2]);
              }
              return;
            case 'mx':
              if ((c = d.unit[a[2]])) {
                (a[2] = c),
                  (b['margin-right'] = '-' + a[2]),
                  (b['margin-left'] = '-' + a[2]);
              }
              return;
            case 'mt':
              if ((c = d.unit[a[2]])) {
                (a[2] = c), (b['margin-top'] = '-' + a[2]);
              }
              return;
            case 'mr':
              if ((c = d.unit[a[2]])) {
                (a[2] = c), (b['margin-right'] = '-' + a[2]);
              }
              return;
            case 'mb':
              if ((c = d.unit[a[2]])) {
                (a[2] = c), (b['margin-bottom'] = '-' + a[2]);
              }
              return;
            case 'ml':
              if ((c = d.unit[a[2]])) {
                (a[2] = c), (b['margin-left'] = '-' + a[2]);
              }
              return;
            case 'rotate':
              b.transform = a[1] + ('(-' + (a[2] + 'deg)'));
              return;
            default:
              return;
          }
        case 'rounded':
          switch (a[1]) {
            case 't':
              if ((c = d.rounded[a[2]])) {
                (a[2] = c),
                  (b['border-top-left-radius'] = a[1]),
                  (b['border-bottom-left-radius'] = a[1]);
              }
              return;
            case 'r':
              if ((c = d.rounded[a[2]])) {
                (a[2] = c),
                  (b['border-top-right-radius'] = a[1]),
                  (b['border-bottom-right-radius'] = a[1]);
              }
              return;
            case 'b':
              if ((c = d.rounded[a[2]])) {
                (a[2] = c),
                  (b['border-bottom-left-radius'] = a[1]),
                  (b['border-bottom-right-radius'] = a[1]);
              }
              return;
            case 'l':
              if ((c = d.rounded[a[2]])) {
                (a[2] = c),
                  (b['border-top-left-radius'] = a[1]),
                  (b['border-bottom-left-radius'] = a[1]);
              }
              return;
            case 'tl':
              if ((c = d.rounded[a[2]])) {
                (a[2] = c), (b['border-top-left-radius'] = a[1]);
              }
              return;
            case 'tr':
              if ((c = d.rounded[a[2]])) {
                (a[2] = c), (b['border-top-right-radius'] = a[1]);
              }
              return;
            case 'bl':
              if ((c = d.rounded[a[2]])) {
                (a[2] = c), (b['border-bottom-left-radius'] = a[1]);
              }
              return;
            case 'br':
              if ((c = d.rounded[a[2]])) {
                (a[2] = c), (b['border-bottom-right-radius'] = a[1]);
              }
              return;
            default:
              return;
          }
        case 'border':
          switch (a[1]) {
            case 't':
              if ((c = d.border[a[2]])) {
                (a[2] = c), (b[a[0] + '-top-width'] = a[1]);
              }
              return;
            case 'r':
              if ((c = d.border[a[2]])) {
                (a[2] = c), (b[a[0] + '-right-width'] = a[1]);
              }
              return;
            case 'b':
              if ((c = d.border[a[2]])) {
                (a[2] = c), (b[a[0] + '-bottom-width'] = a[1]);
              }
              return;
            case 'l':
              if ((c = d.border[a[2]])) {
                (a[2] = c), (b[a[0] + '-left-width'] = a[1]);
              }
              return;
            default:
              d.colors[a[1]] &&
                (c = d.colors[a[1]][a[2]]) &&
                ((a[2] = c), (b[a[0] + '-color'] = a[2]));
              return;
          }
        case 'scale':
          switch (a[1]) {
            case 'x':
              b.transform = a[0] + ('X(0.' + (a[1] + ')'));
              return;
            case 'y':
              b.transform = a[0] + ('Y(0.' + (a[1] + ')'));
              return;
            default:
              return;
          }
        case 'translate':
          switch (a[1]) {
            case 'x':
              (c = d.unit[a[2]])
                ? ((a[2] = c), (b.transform = a[0] + ('X(' + (a[2] + ')'))))
                : (b.transform = a[0] + ('X(calc(' + (a[1] + ' * 100%))')));
              return;
            case 'y':
              (c = d.unit[a[2]])
                ? ((a[2] = c), (b.transform = a[0] + ('Y(' + (a[2] + ')'))))
                : (b.transform = a[0] + ('Y(calc(' + (a[1] + ' * 100%))')));
              return;
            default:
              return;
          }
        case 'skew':
          switch (a[1]) {
            case 'x':
              b.transform = 'skewX(' + (a[2] + 'deg)');
              return;
            case 'y':
              b.transform = 'skewY(' + (a[2] + ')');
              return;
            default:
              return;
          }
        case 'pointer':
          'events' === a[1] && (b[a[0] + ('-' + a[1])] = a[2]);
          return;
        case 'text':
          d.colors[a[1]] &&
            (c = d.colors[a[1]][a[2]]) &&
            ((a[2] = c), (b.color = a[2]));
          return;
        case 'align':
          b['vertical-' + a[0]] = a[1] + ('-' + a[2]);
          return;
        case 'origin':
          b['transform-' + a[0]] = a[1] + (' ' + a[2]);
          return;
        case 'cursor':
          b[a[0]] = a[1] + ('-' + a[2]);
          return;
        default:
          return;
      }
    case 4:
      switch (a[0]) {
        case 'grid':
          'flow' === a[1] &&
            'dense' === a[3] &&
            (b[a[0] + ('-auto-' + a[1])] = a[2] + (' ' + a[3]));
          break;
        case 'max':
          'w' === a[1] &&
            'screen' === a[2] &&
            (c = d.screen[a[3]]) &&
            ((a[3] = c), (b['max-width'] = a[3]));
          break;
        case '':
          switch (a[1]) {
            case 'translate':
              switch (a[2]) {
                case 'x':
                  (c = d.unit[a[3]])
                    ? ((a[3] = c),
                      (b.transform = a[1] + ('X(-' + (a[2] + ')'))))
                    : (b.transform =
                        a[1] + ('X(calc(' + (a[1] + ' * -100%))')));
                  return;
                case 'y':
                  (c = d.unit[a[3]])
                    ? ((a[3] = c),
                      (b.transform = a[1] + ('Y(-' + (a[2] + ')'))))
                    : (b.transform =
                        a[1] + ('Y(calc(' + (a[1] + ' * -100%))')));
                  return;
                default:
                  return;
              }
            case 'skew':
              switch (a[2]) {
                case 'x':
                  b.transform = 'skewX(-' + (a[2] + 'deg)');
                  break;
                case 'y':
                  b.transform = 'skewY(-' + (a[2] + 'deg)');
              }
          }
      }
  }
}
var k = /[\s,]/;
export default function (d) {
  for (var b = [], a = 0, c = '', e = []; a <= d.length; ) {
    var f = d[a++];
    !f || k.test(f)
      ? (c && (e.push(c), (c = '')), e.length && (b.push(e), (e = [])))
      : '-' === f
      ? (e.push(c), (c = ''))
      : (c += f);
  }
  d = {};
  a = 0;
  for (c = b.length; a < c; a++) {
    h(g, d, b[a]);
  }
  return d;
}
//# sourceMappingURL=oceanwind-core.mjs.map
