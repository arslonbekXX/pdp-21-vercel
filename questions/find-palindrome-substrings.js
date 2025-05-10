console.log('------- FIND PALINDROME SUBSTRINGS ------');

/**
 * @param {string[]} words Array of words
 * @param {string} pattern Only one character
 * @return {string[]} Only palindromes that include pattern as a substring
 */
function findPalindromeMatches(words, pattern) {
	const filteredWords = words.filter((word) => word.includes(pattern));
	const palindromeWords = filteredWords.filter(
		(word) => word === word.split('').reverse().join('')
	);

	return palindromeWords;
}

// "refer".split('') => ['r', 'e', 'f', 'e', 'r']
// ['r', 'e', 'f', 'e', 'r'].reverse() => ['r', 'e', 'f', 'e', 'r']
// ['r', 'e', 'f', 'e', 'r'].join('') => 'refer'

console.log(findPalindromeMatches(['level', 'refer', 'hello', 'deed', 'noon'], 'e')); // ['level','refer','deed']
console.log(findPalindromeMatches(['racecar', 'world', 'abcba', 'moon', 'radar'], 'a')); // ['racecar','abcba','radar']
console.log(findPalindromeMatches(['madam', 'robot', 'civic', 'kayak', 'apple'], 'o')); // ['robot']
console.log(findPalindromeMatches(['eye', 'pop', 'wow', 'zip'], 'p')); // ['pop']
