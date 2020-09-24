export default (rules, values) =>
  (typeof rules === 'string'
    ? rules
    : Array.isArray(rules)
    ? // Compile template literals with dynamic values
      rules.reduce(
        (acc, string, i) =>
          (acc += string + (values[i] == null ? '' : values[i])),
        ''
      )
    : // Construct class names conditionally from an object
      Object.entries(rules).reduce(
        (string, [k, v]) => (v ? [string, k].join(' ') : string),
        ''
      )
  )
    .replace(/\s\s+/g, ' ')
    .trim()
    .split(' ');
