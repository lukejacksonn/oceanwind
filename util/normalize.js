const handleVariantGrouping = (prefix) => (acc, x) => {
  if (prefix) {
    x = prefix + x;
    if (x.endsWith(')')) {
      x = x.slice(0, -1);
      prefix = null;
    }
  } else {
    const start = x.match(/(.*:)+\(/);
    if (start) {
      prefix = start[1];
      x = start.input.replace('(', '');
    }
  }
  return x.endsWith(':') ? acc : [...acc, x];
};

export default (strings, ...values) =>
  (typeof strings === 'string'
    ? strings
    : Array.isArray(strings)
    ? strings.reduce(
        (str, rule, i) => (str += [rule || '', values[i] || ''].join(' ')),
        ''
      )
    : Object.entries(strings).reduce(
        (str, [rule, val]) => (str = [str, val ? rule : ''].join(' ')),
        ''
      )
  )
    .replace(/\s\s+/g, ' ')
    .trim()
    .split(' ')
    .reduce(handleVariantGrouping(), []);
