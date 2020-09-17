const isObject = (obj) => obj && typeof obj === 'object';
const merge = (...objects) => {
  return objects.reduce((prev, obj) => {
    Object.keys(obj).forEach((key) => {
      const pVal = prev[key];
      const oVal = obj[key];
      if (isObject(pVal) && isObject(oVal)) {
        prev[key] = merge(pVal, oVal);
      } else {
        // Transform fules need special concatenation
        prev[key] = key === 'transform' && pVal ? [oVal, pVal].join(' ') : oVal;
      }
    });
    return prev;
  }, {});
};

export default merge;
