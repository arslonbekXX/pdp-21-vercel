/**
 * 1. Sizda getAddress funksiyasi bor va u taxminiy address qaytaradi. allAddresse =  ["tashkent", "xiva", "xorazm", "namangan", "andijon","qashqadaryo", "bukhara", "fergana", "jizzax", "samarkand", "navoiy", "sirdaryo", "surxondaryo"].
 * 2. Sizda borish mumkin bolgan address lar royhati xam bor allowedAddresses = [{name: "tashkent"},{name: "xiva"}, {name: "xorazm"}]
 * 3. Siz getAddress funksiyasini ishlatib undan taxminiy address olasiz
 * 4. Siz olgan yangi address borish mumkin bolgan address lar royhatida bolmasa `Borish mumkin emas bu ${address} manzilga` degan error qaytaring, aks holda `Siz ${address} manziliga borishingiz mumkin` degan message qaytaring
 *
 *
 *
 */

const allAddresses = [
	"tashkent",
	"xiva",
	"xorazm",
	"namangan",
	"andijon",
	"qashqadaryo",
	"bukhara",
	"fergana",
	"jizzax",
	"samarkand",
	"navoiy",
	"sirdaryo",
	"surxondaryo",
];
function getAddress() {
	const idx = Math.floor(Math.random() * allAddresses.length);
	const address = allAddresses[idx];

	return address;
}
const allowedAddresses = [{ name: "tashkent" }, { name: "xiva" }, { name: "xorazm" }];

function go() {
	try {
		const address = getAddress();
		const isAllowed = allowedAddresses.some((a) => a.name === address);

		if (isAllowed) return `Siz ${address} manziliga borishingiz mumkin`;

		throw new Error(`Borish mumkin emas bu ${address} manzilga`);
	} catch (error: any) {
		if (error instanceof Error) return error.message;
	}
}

console.log(go());
console.log("Hi");
