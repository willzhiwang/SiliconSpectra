/**
 * js 统计一个字符串频率最高的字母
 */
let str = "abcdefghijkbbb";
//console.log(str);

const strChar = str => {
  let max = 0;
  let obj = {};
  let maxElement = "";
  let strArr = [...str];
  strArr.forEach(element => {
    if (obj[element] == undefined) {
      obj[element] = 1;
    } else {
      obj[element]++;
    }
    if (obj[element] > max) {
      max = obj[element];
      maxElement = element;
    }
  });
  return maxElement;
};
console.log(strChar(str));
