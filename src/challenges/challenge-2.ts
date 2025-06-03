// const boxes = document.querySelectorAll('.box') as NodeListOf<HTMLDivElement>;

// boxes.forEach((box) => {
// 	const hex = generateHexColor();
// 	box.style.backgroundColor = hex;
// 	box.innerText = hex;

// 	box.onclick = (event: MouseEvent) => {
// 		if (!event.altKey) {
// 			document.body.style.backgroundColor = box.innerText;
// 		} else {
// 			const hex1 = generateHexColor();
// 			box.style.backgroundColor = hex1;
// 			box.innerText = hex1;
// 		}
// 	};
// });

export function generateHexColor() {
	let hex = '#';
	const hexCharacters = '0123456789abcdef';
	for (let i = 0; i < 6; i++) {
		const randomIdx = Math.floor(Math.random() * hexCharacters.length);
		hex += hexCharacters[randomIdx];
	}

	return hex;
}

/**
 * 1 - generateHexColor ni qanday qilamiz ? 👍
 *     1.1 - hex color nima ?
 *     1.2 - qanday qilib random qilish mumkin ?
 *     1.3 - har bitta belgi qanday random qilinadi ?
 *     1.4 -
 * 2 - generate bolgan color malumotlarni div larga qanday joylaymiz ? 👍
 * 3 - div bosilganda body ni background ni qanday o'zgartiramiz ?
 * 4 -
 *
 */
