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
	return 'Underweight';
}

const name1 = 'Kent';
const weight1 = 70;
const height1 = 1.75;

const name2 = 'John';
const weight2 = 90;
const height2 = 1.8;

const name3 = 'Mark';
const weight3 = 85;
const height3 = 1.7;

console.log('Kent:  BMI is 18 and status is ', getBMIStatus(18));
console.log('John:  BMI is 18 and status is ', getBMIStatus(18));
console.log('Mark:  BMI is 18 and status is ', getBMIStatus(18));
