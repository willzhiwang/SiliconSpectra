/**
 * 数组去重
 */

let arr = ["1", "2", "3", "1", "a", "b", "b"];

// forEach and Obj keys
const uniqueforeach = arr => {
  let obj = {};
  arr.forEach(value => {
    obj[value] = "";
  });
  // console.log(obj);
  return Object.keys(obj);
};

console.log("for each", uniqueforeach(arr));

//Filter
const uniqueFilter = arr => {
  return arr.filter((element, index, array) => {
    return index === array.indexOf(element);
  });
};
console.log("filter", uniqueFilter(arr));

//Set
const uniqueSet = arr => {
  // set to array
  const set = new Set(arr);
  return Array.from(set);
};
console.log("Set", uniqueSet(arr));

//reduce
const uniqueReduce = arr => {
  const unique = arr.reduce((map, item) => {
    map[item] = 0;
    return map;
  }, {});
  return Object.keys(unique);
};
console.log("Reduce", uniqueReduce(arr));
