function roundTo(value, places) {
  var rtn = 0;
  var factorial = Math.pow(10, places);
  rtn = Math.round(value * factorial);
  rtn = rtn / factorial;
  return rtn;
}

const preventCollapse = 0.05;

function capsize(options) {
  const { fontMetrics } = options;
  const capHeightScale = fontMetrics.capHeight / fontMetrics.unitsPerEm;
  const specifiedFontSize = options.capHeight / capHeightScale;
  const specifiedCapHeight = options.capHeight;
  const specifiedLineHeight = specifiedCapHeight + options.lineGap;
  return createCss({
    lineHeight: specifiedLineHeight,
    fontSize: specifiedFontSize,
    fontMetrics,
  });
}

const PRECISION = 4;

function createCss({ lineHeight, fontSize, fontMetrics }) {
  const toScale = (value) => value / fontSize;

  const absoluteDescent = Math.abs(fontMetrics.descent);
  const capHeightScale = fontMetrics.capHeight / fontMetrics.unitsPerEm;
  const descentScale = absoluteDescent / fontMetrics.unitsPerEm;
  const ascentScale = fontMetrics.ascent / fontMetrics.unitsPerEm;
  const lineGapScale = fontMetrics.lineGap / fontMetrics.unitsPerEm;
  const contentArea =
    fontMetrics.ascent + fontMetrics.lineGap + absoluteDescent;
  const lineHeightScale = contentArea / fontMetrics.unitsPerEm;
  const lineHeightNormal = lineHeightScale * fontSize;
  const specifiedLineHeightOffset = lineHeight
    ? (lineHeightNormal - lineHeight) / 2
    : 0;

  const leadingTrim = (value) =>
    value - toScale(specifiedLineHeightOffset) + toScale(preventCollapse);

  return {
    fontSize: `${roundTo(fontSize, PRECISION)}px`,
    lineHeight: lineHeight ? `${roundTo(lineHeight, PRECISION)}px` : "normal",
    padding: `${preventCollapse}px 0`,
    "::before": {
      content: "''",
      marginTop: `${roundTo(
        leadingTrim(ascentScale - capHeightScale + lineGapScale / 2) * -1,
        PRECISION
      )}em`,
      display: "block",
      height: 0,
    },
    "::after": {
      content: "''",
      marginBottom: `${roundTo(
        leadingTrim(descentScale + lineGapScale / 2) * -1,
        PRECISION
      )}em`,
      display: "block",
      height: 0,
    },
  };
}

export default capsize;
