// Bank Account misoli - Encapsulation namunasi

class BankAccount {
	// Private xususiyatlar - tashqaridan to'g'ridan-to'g'ri kirish mumkin emas
	private accountNumber: string;
	private balance: number;
	private pin: number;

	// Protected xususiyat - faqat bu class va child class'larda ishlatiladi
	protected accountType: string;

	// Public xususiyat - har yerdan kirish mumkin
	public ownerName: string;

	constructor(accountNumber: string, ownerName: string, pin: number, initialBalance: number = 0) {
		this.accountNumber = accountNumber;
		this.ownerName = ownerName;
		this.pin = pin;
		this.balance = initialBalance;
		this.accountType = "Savings";
	}

	// Public metodlar - tashqi dunyodan ishlatish uchun
	public deposit(amount: number): void {
		if (amount > 0) {
			this.balance += amount;
			console.log(`${amount} so'm kiritildi. Joriy balans: ${this.balance}`);
		} else {
			console.log("Miqdor 0 dan katta bo'lishi kerak");
		}
	}

	public withdraw(amount: number, enteredPin: number): void {
		if (!this.validatePin(enteredPin)) {
			console.log("PIN kod noto'g'ri!");
			return;
		}

		if (amount > 0 && amount <= this.balance) {
			this.balance -= amount;
			console.log(`${amount} so'm yechildi. Joriy balans: ${this.balance}`);
		} else {
			console.log("Noto'g'ri miqdor yoki balans yetarli emas");
		}
	}

	// Public getter metod - balansni olish uchun
	public getBalance(enteredPin: number): number | null {
		if (this.validatePin(enteredPin)) {
			return this.balance;
		}
		console.log("PIN kod noto'g'ri!");
		return null;
	}

	// Public getter metod - hisob raqamini ko'rish uchun (maskirovka qilingan)
	public getAccountInfo(): string {
		return `Hisob: ****${this.accountNumber.slice(-4)}, Egasi: ${this.ownerName}`;
	}

	// Private metod - faqat class ichida ishlatiladi
	private validatePin(enteredPin: number): boolean {
		return this.pin === enteredPin;
	}

	// Protected metod - child class'larda ham ishlatilishi mumkin
	protected calculateInterest(rate: number): number {
		return this.balance * (rate / 100);
	}
}

// Child class misoli
class PremiumAccount extends BankAccount {
	private creditLimit: number;

	constructor(
		accountNumber: string,
		ownerName: string,
		pin: number,
		initialBalance: number,
		creditLimit: number
	) {
		super(accountNumber, ownerName, pin, initialBalance);
		this.creditLimit = creditLimit;
		this.accountType = "Premium"; // protected xususiyatga kirish
	}

	// Parent class'ning protected metodiga kirish
	public getMonthlyInterest(): number {
		return this.calculateInterest(2.5); // Premium account uchun yuqori foiz
	}

	public getAccountTypeInfo(): string {
		return `Account type: ${this.accountType}`; // protected xususiyat
	}
}

// Foydalanish misoli
const myAccount = new BankAccount("1234567890", "Ali Valiev", 1234, 1000);

// Public metodlar va xususiyatlarga kirish
console.log(myAccount.ownerName); // To'g'ri - public
console.log(myAccount.getAccountInfo()); // To'g'ri - public metod

myAccount.deposit(500); // To'g'ri - public metod
myAccount.withdraw(200, 1234); // To'g'ri - PIN bilan

console.log("Balans:", myAccount.getBalance(1234)); // To'g'ri - PIN bilan

// Quyidagilar xato bo'ladi (TypeScript error beradi):
// console.log(myAccount.balance); // Error: private xususiyat
// console.log(myAccount.accountNumber); // Error: private xususiyat
// console.log(myAccount.pin); // Error: private xususiyat
// myAccount.validatePin(1234); // Error: private metod

// Premium account misoli
const premiumAccount = new PremiumAccount("9876543210", "Zarina Karimova", 5678, 5000, 10000);
console.log("Oylik foiz:", premiumAccount.getMonthlyInterest());
console.log(premiumAccount.getAccountTypeInfo());

// Encapsulation'ning afzalliklari:
// 1. Ma'lumotlar himoyalangan
// 2. Class ichki implementatsiyasi yashirilgan
// 3. Validatsiya va mantiq nazorati
// 4. Kodni o'zgartirish osonroq
// 5. Ma'lumotlar butunligi ta'minlangan
