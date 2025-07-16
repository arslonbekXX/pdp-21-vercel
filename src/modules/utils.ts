export const calculateAge = (birthYear: number) => {
	const date = new Date();
	return date.getFullYear() - birthYear;
};

const calculateBMI = (weight: number, height: number) => {};

export default calculateBMI;
