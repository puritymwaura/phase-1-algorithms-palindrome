function isPalindrome(word) {
  let arr = word.split('')
  arr = arr.reverse()
  arr = arr.join('')
  return arr === word
}


// console.log(isPalindrome('racecar'))
// /home/purity/Desktop/moringa/phase-1/phase-1-algorithms-palindrome/index.js
/* 
  loop through string forward
  assign the looped outcome to a variable
  loop through string backwards
  compare current outcome with previous variable
  if similar return true
  if not return false

  reverse the string
  compare the reversed string with the original string
  if similar, return true, else return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
