import { Character } from "./character";

type DamageName = "fireball" | "lightning" | "ice_shard" | "magic_missile";
type RestorationName = "heal" | "greater_heal" | "full_heal" | "regeneration";
type MagicName = DamageName | RestorationName;

type Magics = Record<MagicName, { damage: number; mana: number; health: number }>;
export const magics: Magics = {
	fireball: { damage: 35, mana: 20, health: 0 },
	lightning: { damage: 45, mana: 30, health: 0 },
	ice_shard: { damage: 30, mana: 25, health: 0 },
	magic_missile: { damage: 20, mana: 15, health: 0 },
	heal: { damage: 0, mana: 15, health: 25 },
	greater_heal: { damage: 0, mana: 30, health: 50 },
	full_heal: { damage: 0, mana: 40, health: 100 },
	regeneration: { damage: 0, mana: 25, health: 15 },
};

export class Mage extends Character {
	constructor(name: string, level: number, public mana: number, public spells: MagicName[]) {
		super(name, level);
	}

	castSpell(magicName: MagicName, target: Character) {
		const magic = magics[magicName];

		if (this.mana < magic.mana) return console.error("❌ Not enough mana!");

		const isAttack = magic.damage > 0;

		if (isAttack) {
			if (this !== target) return console.error("❌ You can't attack yourself!");
			if (target.health <= 0) return console.error("❌ Target is already defeated!");

			const damage = magic.damage;
			if (damage < 1) return console.error("❌ Damage cannot be less than 1!");

			target.takeDamage(damage);
			this.mana -= magic.mana;
			console.log(`💫 ${this.name} casts ${magicName} on ${target.name}!`);
		} else {
			target.heal(magic.health);
			this.mana -= magic.mana;
			console.log(`💫 ${this.name} casts ${magicName} on ${target.name}!`);
		}
	}
}
