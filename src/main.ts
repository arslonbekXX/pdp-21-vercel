/**
 * Challenge-1:
 *  Vazifa: Yuqoridagi obyektni ko‘zdan kechirib,
 faqat string qiymatga ega bo‘lgan maydonlar nomlarini array ko‘rinishida qaytaring.
 Bunda `for...in` yordamida obyekt ustida aylaning va `typeof` bilan tekshiring.


  Kutilgan natija: ["name", "city"]

 */

// const person = {
// 	name: 'Arslon',
// 	age: 25,
// 	city: 'Tashkent',
// 	isAdmin: false,
// };

// let strings: string[] = [];

// for (const key in person) {
// 	const value = person[key as keyof typeof person];
// 	if (typeof value === 'string') {
// 		strings.push(key);
// 	}
// }

// console.log(strings);

/**
 * Challenge-2:
 *  Vazifa: Quyidagi `saveSettings` funksiyasi sozlamalarni localStorage'ga saqlasin.
 `loadSettings` esa uni olib qaytarsin.
 JSON.stringify va JSON.parse dan foydalanish shart.


  Eslatma:
  - Sozlamalarni "app-settings" degan kalit bilan saqlang.
  - loadSettings null qaytarishi mumkin.
  - Natijani console.log orqali tekshirib ko‘ring.

 *
 */
interface Settings {
	theme: 'light' | 'dark';
	fontSize: number;
	language: string;
}

const SETTINGS_KEY = 'app-settings';

function saveSettings(settings: Settings) {
	localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
}

function loadSettings() {
	const value = localStorage.getItem(SETTINGS_KEY);

	if (value === null) return value;

	const settings: Settings = JSON.parse(value);

	return settings;
}

function updateSettings(settings: Partial<Settings>) {}

saveSettings({ theme: 'dark', fontSize: 30, language: 'en' });
const settings1 = loadSettings();
console.log(settings1); // { theme: 'dark', fontSize: 30, language: 'en' }

updateSettings({ fontSize: 50, theme: 'light' });
const settings2 = loadSettings();
console.log(settings2); // { theme: 'light', fontSize: 50, language: 'en' }
