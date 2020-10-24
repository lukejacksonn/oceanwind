const handleVariantGrouping = (arr) => {
  let prefix = [];
  return arr.reduce((acc, x) => {
    const start = x.match(/(.*:)+\(/);
    const end = x.match(/\)/g) || [];

    if (start) {
      prefix = prefix.concat(start[1].split('('));
      x = start.input.replace(start[0], '');
      console.log(prefix, x);
    }

    x = prefix.join('') + x;

    if (end.length > 0) {
      end.forEach(() => {
        x = x.slice(0, -1);
        prefix.pop();
      });
    }

    return x.endsWith(':') ? acc : [...acc, x];
  }, []);
};

export default (strings, ...values) =>
  handleVariantGrouping(
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
  );
