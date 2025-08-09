import { faker } from "@faker-js/faker";
import type { Product } from "./product";

export enum ORDER_STATUS {
	PENDING, // Kutilmoqda
	PROCESSING, // Qayta ishlanmoqda
	SHIPPED, // Yuborilgan
	DELIVERED, // Yetkazilgan
	CANCELLED, // Bekor qilingan
}

export class Order {
	private orderId = faker.string.uuid();

	constructor(
		private customerId: string,
		private orderItems: Product[],
		private totalAmount: number,
		private orderStatus: ORDER_STATUS
	) {}
}
