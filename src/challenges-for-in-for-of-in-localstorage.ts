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
// interface Settings {
// 	theme: 'light' | 'dark';
// 	fontSize: number;
// 	language: string;
// }

// const SETTINGS_KEY = 'app-settings';

// function saveSettings(settings: Settings) {
// 	localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
// }

// function loadSettings() {
// 	const value = localStorage.getItem(SETTINGS_KEY);

// 	if (value === null) return value;

// 	const settings: Settings = JSON.parse(value);

// 	return settings;
// }

// function updateSettings(settings: Partial<Settings>) {
// 	const oldSettings = loadSettings()!;
// 	const newSettings: Settings = { ...oldSettings, ...settings };
// 	saveSettings(newSettings);
// }

// // START
// saveSettings({ theme: 'dark', fontSize: 30, language: 'en' });

// const settings1 = loadSettings();
// console.log(settings1); // { theme: 'dark', fontSize: 30, language: 'en' }

// updateSettings({ fontSize: 40, theme: 'light' });

// const settings2 = loadSettings();
// console.log(settings2); // { theme: 'dark', fontSize: 50, language: 'en' }

/**
 * Challenge-3:
 *
 *
 Vazifa: Ikki foydalanuvchini birlashtiring (user1, user2)
 ammo ularning `password` va `token` maydonlarini natijadan olib tashlang.
 Destructuring orqali password va token ni ajratib oling,
 qolgan qismini Spread bilan birlashtiring.


  Kutilgan natija:
  - password va token bo‘lmagan umumiy obyekt qaytsin
  - `Partial<User>` tipidan foydalanishingiz mumkin

 *
 *
 */
// interface User {
// 	id: number;
// 	name: string;
// 	email: string;
// 	password: string;
// 	token: string;
// }

// const user1: User = {
// 	id: 123,
// 	name: 'Lent',
// 	email: 'lent@domain.com',
// 	password: 'lent123',
// 	token: 'dasnkjdnkpdsnfijdsnjkdsa',
// };
// const user2: User = {
// 	id: 124,
// 	name: 'Kent',
// 	email: 'kent@domain.com',
// 	password: 'kent123',
// 	token: 'dasnjdn sakjd',
// };

// const { password, token, ...user } = { ...user1, ...user2 };
// console.log(user);

/**
	* Challenge-4:
	*
	*

 Vazifa: Ushbu array ichidan musbat juft sonlarni ajratib oling,
 va ularning kvadratlarini hisoblang.
 Buni ikkita alohida funksiyada amalga oshiring:
 1. `imperativeApproach` — for/if orqali
 2. `declarativeApproach` — .filter() va .map() yordamida

  Kutilgan natija: [16, 36, 144]

 */

// const numbers = [4, -1, 6, 0, -8, 5, 12, -3];

// function imperativeApproach(nums: number[]) {
// 	const filtered: number[] = [];
// 	for (const num of nums) {
// 		if (!(num % 2) && num > 0) filtered.push(num);
// 	}

// 	return filtered;
// }

// function declarativeApproach(nums: number[]) {
// 	const filtered: number[] = nums.filter((num) => num > 0 && !(num % 2));

// 	return filtered;
// }

// console.log(imperativeApproach(numbers));
// console.log(declarativeApproach(numbers));

/*
Challenge-5:
// LocalStorage da quyidagi sozlamalar saqlangan bo‘lsin:


 Vazifa: localStorage'dan ushbu ma'lumotlarni olib,
 faqat string qiymatga ega bo‘lganlarni ajratib oling
 va ularni KATTA harflarga o‘girib, array holatida qaytaring.

 Masalan: ["DARK", "EN"]


  Talab:
  - load qismida JSON.parse ishlatiladi
  - for...in bilan string tipli qiymatlar ajratiladi
  - stringlarni .toUpperCase() bilan o‘zgartiring
*/

// localStorage.setItem(
// 	'settings',
// 	JSON.stringify({
// 		theme: 'dark',
// 		language: 'en',
// 		fontSize: 14,
// 		debug: true,
// 	})
// );
