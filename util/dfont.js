const BASE_FONTS = ['sans-serif', 'serif', 'monospace'];

const removeQuotes = (name) => {
  const matches = String(name).match(/^["']?(.+?)["']?$/i);
  return Array.isArray(matches) ? matches[1] : '';
};

export default (family) => {
  const opts = {
    text: 'abcdefghijklmnopqrstuvwxyz0123456789',
    fontSize: 72,
    baseFont: 'sans-serif',
  };

  const fontFamily = family || 'serif';
  const fonts = fontFamily.split(',');
  const canvas = window.document.createElement('canvas');
  const context = canvas.getContext('2d');

  return fonts
    .map((font) => {
      const fontName = removeQuotes(font.trim());
      if (!!~BASE_FONTS.indexOf(fontName.toLowerCase())) {
        return fontName;
      }

      context.font = `${opts.fontSize}px ${opts.baseFont}`;
      const baselineSize = context.measureText(opts.text).width;

      context.font = `${opts.fontSize}px ${fontName}, ${opts.baseFont}`;
      return baselineSize !== context.measureText(opts.text).width && fontName;
    })
    .filter(Boolean)[0];
};
