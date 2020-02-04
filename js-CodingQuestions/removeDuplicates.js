/**
 * 数组去重
 */

let arr = ["1", "2", "3", "1", "a", "b", "b"];

// forEach

//Filter
const uniqueFilter = arr => {
  return arr.filter((element, index, array) => {
    return index === array.indexOf(element);
  });
};
console.log(uniqueFilter(arr));
