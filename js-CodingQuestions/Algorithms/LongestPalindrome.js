/**
 * @param s: a string which consists of lowercase or uppercase letters
 * @return: the length of the longest palindromes that can be built
 */
const longestPalindrome = function(s) {
  if (s.length === 0 || s === null) {
    return 0;
  }
  let count = 0;
  let setOfUniqueElement = new Set();
  let remove = 0;
  for (let c of s) {
    // console.log(set)
    if (setOfUniqueElement.has(c)) {
      setOfUniqueElement.delete(c);
    } else {
      setOfUniqueElement.add(c);
    }
  }
  console.log(setOfUniqueElement);
  if (setOfUniqueElement.size > 1) {
    remove = setOfUniqueElement.size - 1;
  }
  count = s.length - remove;
  return count;
};
/**
 push everything to a Set, if a element is duplicated, remove it
then we find all the unique elements.
Next we can get the remove size = number of unique elements - 1, since we can have one element in the center of the palidrome
Then we can find the max palidrome by using the total size - the remove size
 */
