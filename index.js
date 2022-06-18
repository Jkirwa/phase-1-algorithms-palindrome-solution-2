function isPalindrome(word) {
  // Write your algorithm here
  for(let i=0;i<word.length/2;i++){
    const j=word.length-1-i;
    if (word[i] === word[j]){
      return true
    }
      return false
  }
}

/* 
  Add your pseudocode here
  That means if true;
  The first letter is the same as the last letter,the second letter is the same as the second last letter,until the middle it returns true.

iiterate from the begginning to the middle and check each letter to the corresponding letter from the end
  if the letters dont match return false
  else return true

*/

/*
  Add written explanation of your solution here
  Compares the last and first letters and if the letters match then its a palindrome.
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
