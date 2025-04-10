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
 * - Obese: BMI >= 30
 *
 * @param {number} bmi - The BMI value
 * @returns {string} The BMI status (Underweight, Normal, Overweight, or Obese)
 */
function getBMIStatus(bmi) {}
