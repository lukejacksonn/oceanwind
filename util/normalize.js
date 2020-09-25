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
    .split(' ');
