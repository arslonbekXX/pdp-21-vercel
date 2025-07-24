/**
 * Challenge 1:
 *
 *
 *
 */

const p1 = {
	name: "kent",
	run() {
		console.log(`${this.name} is running`);
	},
};

const p2 = {
	name: "mark",
	jump() {
		console.log(`${this.name} is jumping`);
	},
};

/* your code here

 --------- Call Method ---------
  Kent is running;
  Mark is running;
  Kent is jumping;
  Mark is jumping;

 --------- Apply Method ---------
  Kent is running;
  Mark is running;
  Kent is jumping;
  Mark is jumping;

 --------- Bind Method ---------
  Kent is running;
  Mark is running;
  Kent is jumping;
  Mark is jumping;

*/
