/* 🟦 4. userManager (massiv ichidagi object bilan ishlash) */
// const userManager = {
// 	users: [
// 		{ name: 'Kent', email: 'kent@gmail.com' },
// 		{ name: 'John', email: 'john@gmail.com' },
// 	],
// 	addUser(name, email) {
// 		const user = { name, email };
// 		this.users.push(user);
// 	},
// 	removeUser(email) {
// 		const userIdx = this.users.findIndex((user) => user.email === email);
// 		if (userIdx !== undefined) this.users.splice(userIdx, 1);
// 	},
// 	listUsers() {
// 		for (const user of this.users) {
// 			console.log(`${user.name}'s email is ${user.email} `);
// 		}
// 	},
// };

// userManager.addUser('Sherlock', 'sherlock@gmail.com');
// userManager.addUser('Sherbek', 'sherbek@gmail.com');
// userManager.removeUser('john@gmail.com');
// userManager.listUsers();

/* 🟦 6. lightSystem (switching pattern)
// 🎯 Maqsad: toggle ishlatish va this.statusni yangilash

// lightSystem object yarating.
// Properties: status = 'off'
// Methods:
// 1. turnOn()
// 2. turnOff()
// 3. toggle() – status ni almashtirsin
// 4. logStatus() – statusni consolega chiqarish
*/

// const lightSystem = {
// 	status: 'off',
// 	turnOn() {
// 		this.status = 'on';
// 	},
// 	turnOff() {
// 		this.status = 'off';
// 	},
// 	toggle() {
// 		this.status = this.status === 'on' ? 'off' : 'on';
// 	},
// 	logStatus() {
// 		console.log(`Light is ${this.status}`);
// 	},
// };

// console.log(`Light is ${lightSystem.status}`);
// lightSystem.turnOn();
// console.log(`Light is ${lightSystem.status}`);

// lightSystem.turnOff();
// console.log(`Light is ${lightSystem.status}`);

// lightSystem.turnOn();
// console.log(`Light is ${lightSystem.status}`);

/*
🟨 7. library (book management)
// 🎯 Maqsad: book objectlar, status, va borrow qilishni boshqarish

// library object yarating.
// Properties: books = [ { title, author, isAvailable: true } ]
// Methods:
// 1. addBook(title, author) – yangi kitob qo‘shish
// 2. borrowBook(title) – isAvailable false bo‘lsin
//    agar allaqachon olingan bo‘lsa, "Book already borrowed" chiqarsin
// 3. returnBook(title) – isAvailable true qilib qo‘ysin
// 4. listAvailableBooks() – faqat mavjud kitoblar chiqsin
*/

// const library = {
// 	books: [
// 		{ title: 'Sherlock Holmes', author: 'Arthur Conan Doyle', isAvailable: true },
// 		{ title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', isAvailable: true },
// 	],
// 	addBook(title, author) {
// 		const book = { title, author, isAvailable: true };
// 		this.books.push(book);
// 	},
// 	borrowBook(title) {
// 		const book = this.books.find((book) => book.title === title);
// 		if (!book) console.error(`Book(${title}) is not found`);
// 		if (!book.isAvailable) console.error(`Book(${title}) already borrowed`);
// 		else book.isAvailable = false;
// 	},
// 	returnBook(title) {
// 		const book = this.books.find((book) => book.title === title);
// 		if (!book) console.error(`Book(${title}) is not found`);

// 		book.isAvailable = true;
// 	},
// 	listAvailableBooks() {
// 		for (const book of this.books) {
// 			if (book.isAvailable) {
// 				console.log(`${book.title} by ${book.author}`);
// 			}
// 		}

// 		console.log('-------');
// 	},
// };

// library.listAvailableBooks();

// library.addBook('Deep Work', 'Cal Newport');
// library.listAvailableBooks();

// library.borrowBook('Deep Work');
// library.listAvailableBooks();

// library.returnBook('Deep Work');
// library.listAvailableBooks();
/**
 * 🟥 10. smartHome (multi-object boshqaruv)
 * // 🎯 Maqsad: murakkab qurilmalar tizimi, har bir qurilmaning turli xatti-harakatlari

// smartHome object yarating.
// Properties:
// - devices: [
//    { name, type: 'light'|'tv'|'camera', status: 'off', energyUsage: 0 }
//  ]

// Methods:
// 1. addDevice(name, type) – faqat yuqoridagi 3 turga ruxsat berilsin
// 2. toggleDevice(name)
//    - 'light' – status 'on' bo‘lsa energyUsage += 5
//    - 'tv' – status 'on' bo‘lsa energyUsage += 20
//    - 'camera' – status 'on' bo‘lsa energyUsage += 10
// 3. removeDevice(name)
// 4. listDevicesByType(type) – berilgan type bo‘yicha ro‘yxat chiqarish
// 5. getTotalEnergyUsage() – umumiy energyUsage ni qaytarish
 */

function getEnergyUsage(type) {
	if (type === 'light') return 5;
	if (type === 'tv') return 20;
	if (type === 'camera') return 10;
}

const smartHome = {
	devices: [],
	addDevice(name, type) {},
	toggleDevice(name) {},
	removeDevice(name) {},
	listDevicesByType(type) {},
	getTotalEnergyUsage() {},
};
