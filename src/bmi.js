/**
 * Calculates BMI (Body Mass Index) based on weight and height
 * @param {number} weight - The weight in kilograms
 * @param {number} height - The height in meters
 * @returns {number} The BMI value
 */
function calculateBMI(weight, height) {
	const bmi = (weight / (height * height)).toFixed(2);
	return Number(bmi);
}

/**
 * Calculates BMI (Body Mass Index) status based on BMI value
 *
 * BMI Categories:
 * - Underweight: BMI < 18.5
 * - Normal: 18.5 <= BMI < 25
 * - Overweight: 25 <= BMI < 30
 * - Obese: 30 <= BMI < 35
 * - Extremely Obese: BMI >= 35
 *
 * @param {number} bmi - The BMI value
 * @returns {string} The BMI status (Underweight, Normal, Overweight, or Obese)
 */
function getBMIStatus(bmi) {
	if (bmi < 18.5) return 'Underweight';
	if (bmi >= 18.5 && bmi < 25) return 'Normal';
	if (bmi >= 25 && bmi < 30) return 'Overweight';
	if (bmi >= 30 && bmi < 35) return 'Obese';
	if (bmi >= 35) return 'Extremely Obese';
}

const user1 = {
	name: 'Kent',
	weight: 70,
	height: 1.75,
	getBMI() {
		const bmi = calculateBMI(this.weight, this.height);

		return bmi;
	},
	getBMIStatus() {
		const bmi = this.getBMI();
		const status = getBMIStatus(bmi);

		return status;
	},
	displayBMI() {
		const bmi = this.getBMI();
		const status = this.getBMIStatus();

		console.log(`${this.name}:  BMI is ${bmi} and status is ${status}`);
	},
};

const user2 = {
	name: 'John',
	weight: 90,
	height: 1.8,
	getBMI() {
		const bmi = calculateBMI(this.weight, this.height);

		return bmi;
	},
	getBMIStatus() {
		const bmi = this.getBMI();
		const status = getBMIStatus(bmi);

		return status;
	},
	displayBMI() {
		const bmi = this.getBMI();
		const status = this.getBMIStatus();

		console.log(`${this.name}:  BMI is ${bmi} and status is ${status}`);
	},
};

const user3 = {
	name: 'Mark',
	weight: 85,
	height: 1.7,
	getBMI() {
		const bmi = calculateBMI(this.weight, this.height);

		return bmi;
	},
	getBMIStatus() {
		const bmi = this.getBMI();
		const status = getBMIStatus(bmi);

		return status;
	},
	displayBMI() {
		const bmi = this.getBMI();
		const status = this.getBMIStatus();

		console.log(`${this.name}:  BMI is ${bmi} and status is ${status}`);
	},
};

user1.displayBMI(); // Kent:  BMI is 22.86 and status is Normal
user2.displayBMI(); // John:  BMI is 27.78 and status is Overweight
user3.displayBMI(); // Mark:  BMI is 29.41 and status is Obese
