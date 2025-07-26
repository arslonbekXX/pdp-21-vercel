/**
 * 1. Sizda getAddress funksiyasi bor va u taxminiy address qaytaradi. allAddresse =  ["tashkent", "xiva", "xorazm", "namangan", "andijon","qashqadaryo", "bukhara", "fergana", "jizzax", "samarkand", "navoiy", "sirdaryo", "surxondaryo"].
 * 2. Sizda borish mumkin bolgan address lar royhati xam bor allowedAddresses = [{name: "tashkent"},{name: "xiva"}, {name: "xorazm"}]
 * 3. Siz getAddress funksiyasini ishlatib undan taxminiy address olasiz
 * 4. Siz olgan yangi address borish mumkin bolgan address lar royhatida bolmasa `Borish mumkin emas bu ${address} manzilga` degan error qaytaring, aks holda `Siz ${address} manziliga borishingiz mumkin` degan message qaytaring
 *
 *
 *
 */

const allAddresse = [
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
function getAddress() {}
const allowedAddresses = [{ name: "tashkent" }, { name: "xiva" }, { name: "xorazm" }];

function init() {}

window.addEventListener("load", init);
