input = "aaabccdefg";
mostUsbedWords = 2;
//返回最多出现的两个值， [a,c] (a出现3次，c出现2次)

const getMostUsedWords = (input, mostUsbedWords) => {
  let resultArr = [];
  let obj = {};

  let arr = input.split(" ");

  for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) {
      obj[arr[i]] = 1;
    } else {
      obj[arr[i]]++;
    }
  }

  let valueArr = Object.values(obj).sort((a, b) => b - a);

  //你的OBJS和我的结构不一样 我的是{}   不能用.sORT
  for (let key in obj) {
    if (obj[key] === mostUsedWords) {
      resultArr.push(obj[key]);
    }

    return resultArr;
  }
};
