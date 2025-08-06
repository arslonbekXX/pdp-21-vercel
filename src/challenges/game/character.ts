import { MAX_HEALTH } from "./constants";

export class Character {
	public isDefending = false;
	public health = MAX_HEALTH;

	constructor(public name: string, public level: number) {}

	levelUp() {
		this.level++;
		this.health = MAX_HEALTH;

		console.log(`🎉 ${this.name} Level Up! New level: ${this.level}`);
		console.log(`💚 Health full restored: ${this.health}/${MAX_HEALTH}`);
	}

	takeDamage(amount: number) {
		if (amount < 0) return console.error("amount must be positive");

		if (this.isDefending) {
			amount = amount / 2;
			this.isDefending = false;
		}

		this.health -= amount;

		if (this.health <= 0) {
			this.health = 0;
			console.log(`💀 ${this.name} has been defeated!`);
		} else {
			console.log(`💔 ${this.name} took ${amount} damage!`);
			console.log(`❤️ Remaining health: ${this.health}/${MAX_HEALTH}`);
		}
	}

	heal(amount: number) {
		if (amount < 0) return console.error("Amount must be positive");
		if (this.health === 0) return console.error("❌ Cannot heal a defeated character!");

		this.health += amount;
		if (this.health > MAX_HEALTH) this.health = MAX_HEALTH;

		console.log(`💚 Conan healed for ${amount} health!`);
		console.log(`❤️ Current health: ${this.health}/${MAX_HEALTH}`);
	}
}
