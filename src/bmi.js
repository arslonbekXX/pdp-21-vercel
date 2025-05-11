/**
 * Calculates BMI (Body Mass Index) based on weight and height
 * @param {number} weight - The weight in kilograms
 * @param {number} height - The height in meters
 * @returns {number} The BMI value
 */
function calculateBMI(weight, height) {
	return weight / (height * height);
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
	getBMI() {},
	getBMIStatus() {},
	displayBMI() {},
};
const name1 = 'Kent';
const weight1 = 70;
const height1 = 1.75;
const bmi1 = calculateBMI(weight1, height1);

const name2 = 'John';
const weight2 = 90;
const height2 = 1.8;
const bmi2 = calculateBMI(weight2, height2);

const name3 = 'Mark';
const weight3 = 85;
const height3 = 1.7;
const bmi3 = calculateBMI(weight3, height3);

// console.log('Kent:  BMI is ' + bmi1.toFixed(2) + ' and status is ', getBMIStatus(bmi1));
// console.log('John:  BMI is ' + bmi2.toFixed(2) + ' and status is ', getBMIStatus(bmi2));
// console.log('Mark:  BMI is ' + bmi3.toFixed(2) + ' and status is ', getBMIStatus(bmi3));

user1.displayBMI(); // Kent:  BMI is 22.86 and status is Normal
user2.displayBMI(); // John:  BMI is 27.78 and status is Overweight
user3.displayBMI(); // Mark:  BMI is 29.41 and status is Obese
