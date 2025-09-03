function getNumber(minNumber: number) {
	return new Promise((resolve, reject) => {
		const delay = Math.floor(Math.random() * 5);
		console.log(`Promise started and waiting for ${delay} seconds`);
		setTimeout(() => {
			const num = Math.floor(Math.random() * 100);
			if (num < minNumber) {
				reject(new Error(`Number ${num} is less than ${minNumber}`));
			}

			resolve(num);
		}, delay * 1000);
	});
}

while (true) {
	try {
		const num = await getNumber(80);
		console.log("num = ", num);
		break;
	} catch (error: any) {
		if (error instanceof Error) {
			console.error(error.message);
		}
	}
}
