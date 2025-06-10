export type Operation = '+' | '-' | '*';
export type Status = 'correct' | 'incorrect';

export interface Question {
	number1: number;
	number2: number;
	operation: Operation;
	correctAnswer: number;
	answers: number[];
	selectedAnswer?: number;
}
