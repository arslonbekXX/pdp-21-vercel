function findMax(str) {
	let maxCount = 0;
	let maxChar;

	for (let i = 0; i < str.length; i++) {
		let count = 1;

		for (let j = i + 1; j < str.length; j++) {
			if (str[i] + str[i + 1] === str[j] + str[j + 1]) count++;
		}

		if (count > maxCount) {
			maxCount = count;
			maxChar = str[i] + str[i + 1];
		}
	}

	console.log(`MAX CHAR - ${maxChar}`);
	console.log(`MAX COUNT - ${maxCount}`);
}

findMax('abccaabdfnfnkbb');
findMax('aabbabccbcbcbabbccb');
