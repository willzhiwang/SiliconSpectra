/**
 * @param s: A string
 * @return: Whether the string is a valid palindrome
 */
const isPalindrome = function(s) {
  if (s.length === 0 || s === null) {
    return true;
  }
  s = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  //console.log(s)
  let start = 0,
    end = s.length - 1;

  while (start < end) {
    //console.log(s[start],s[end])
    if (s[start] && s[end] && s[start] !== s[end]) {
      return false;
    } else {
      start++;
      end--;
    }
  }
  return true;
};
/**
 *  Two pointer, from start and end to center
And make sure start < end, 
for example [0,1,2]:
start = 0, end = 2;  ==> start = 1, end =1, and center will not be compared
for example [0,1,2,3]:
start = 0, end = 3;  ==> start = 1, end =2; ==>  start = 2, end =1; which stop looping 

regex: //^ means negate and i means ignore casing
*/
