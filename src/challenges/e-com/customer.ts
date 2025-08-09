import { faker } from "@faker-js/faker";

export class Customer {
	private customerId = faker.string.uuid();
	private bonusPoints = 0;

	constructor(private fullName: string, private email: string, private phoneNumber: string) {}

	getCustomerId() {
		return this.customerId;
	}

	getFullName() {
		return this.fullName;
	}

	getEmail() {
		return this.email;
	}

	getPhoneNumber() {
		return this.phoneNumber;
	}

	getBonusPoints() {
		return this.bonusPoints;
	}

	addBonusPoints(points: number) {}
	useBonusPoints(points: number) {}
	updateContactInfo(email: string, phone: string) {}
	getTotalOrders() {}
}
