/**
 *一道'JS算法'提升软实力
 * 输入：['a', ['b', 'c'], 2, ['d', 'e', 'f'], 'g', 3, 4]
 * 输出: a, b, c, 2, d, e, f, g, 3, 4
 *
 */
const arr = ["a", ["b", "c"], 2, ["d", "e", "f"], "g", 3, 4];
const arrsToArray = arr => {
  return arr.reduce((ans, val) => {
    return ans.concat(Array.isArray(val) ? arrsToArray(val) : val);
  });
};
console.log(arrsToArray(arr));
