console.log('------- FIND PALINDROME SUBSTRINGS ------');

/**
 * @param {string[]} words Array of words
 * @param {string} pattern Only one character
 * @return {string[]} Only palindromes that include pattern as a substring
 */
function findPalindromeMatches(words, pattern) {}

console.log(
	findPalindromeMatches(['level', 'refer', 'hello', 'deed', 'noon'], 'e')
); // ['level','refer','deed']
console.log(
	findPalindromeMatches(['racecar', 'world', 'abcba', 'moon', 'radar'], 'a')
); // ['racecar','abcba','radar']
console.log(
	findPalindromeMatches(['madam', 'robot', 'civic', 'kayak', 'apple'], 'o')
); // ['robot']
console.log(findPalindromeMatches(['eye', 'pop', 'wow', 'zip'], 'p')); // ['pop']
