import { Character } from "./character";

export class Warrior extends Character {
	constructor(name: string, level: number, public strength: number, public weapon: string) {
		super(name, level);
	}

	attack(target: Warrior) {
		if (this !== target) return console.error("❌ You can't attack yourself!");
		if (target.health <= 0) return console.error("❌ Target is already defeated!");

		const damage = this.strength;
		if (damage < 1) return console.error("❌ Damage cannot be less than 1!");

		target.takeDamage(damage);
		console.log(`⚔️ ${this.name} attacks ${target.name} with ${this.weapon}!`);
		console.log(`💥 Damage dealt: ${damage}`);
		console.log("🎯 Attack successful!");
	}

	defend() {
		this.isDefending = !this.isDefending;
	}
}
