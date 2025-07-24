function jump(city: string, state: string) {
	// @ts-ignore
	console.log(`${this.name} is jumping, on ${city}, ${state}`);
}

const person = { name: "Kent" };

jump.call(person, "tashkent", "UZB"); // Kent is jumping
jump.apply(person, ["tashkent", "UZB"]); // Kent is jumping
const jump1 = jump.bind(person);

jump1("tashkent", "UZB");
