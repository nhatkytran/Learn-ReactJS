const html = ([first, ...strings], ...values) => {
  return values
    .reduce(
      (acc, cur) => {
        return acc.concat(cur, strings.shift());
      },
      [first]
    )
    .filter(item => (item && item !== true) || item === 0)
    .join('');
};

export default html;
