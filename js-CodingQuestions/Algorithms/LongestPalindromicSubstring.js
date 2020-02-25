/**
 * @param s: input string
 * @return: the longest palindromic substring
 */
const longestPalindrome = function(s) {
  let longest = "";

  for (let mid = 0; mid < s.length; mid++) {
    longest = findLength(s, mid, mid, longest);
    longest = findLength(s, mid, mid + 1, longest);
  }
  return longest;
};

function findLength(s, left, right, longest) {
  let length = 0;
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--;
    right++;
  }
  left++;
  console.log(left, right);

  if (right - left > longest.length) {
    newlongest = s.substring(left, right);
    return newlongest;
  }
  return longest;
}
