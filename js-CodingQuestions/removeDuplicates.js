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

console.log(uniqueforeach(arr));

//Filter
const uniqueFilter = arr => {
  return arr.filter((element, index, array) => {
    return index === array.indexOf(element);
  });
};
console.log(uniqueFilter(arr));
