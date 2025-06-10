import { MIN_OR_MAX_DISTANCE, MAX_NUMBER } from './constants';
import type { Operation, Question, Status } from './types';

export function generateNumber(max: number) {
	return Math.floor(Math.random() * max);
}

function generateOperation() {
	const operations: Operation[] = ['*', '+', '-'];
	const randomIdx = generateNumber(operations.length);
	const operation = operations[randomIdx];

	return operation;
}

function getCorrectAnswer(number1: number, number2: number, operation: Operation) {
	let answer = eval(`${number1} ${operation} ${number2}`);

	return answer;
}

function generateAnswers(correct: number) {
	const answers: number[] = [correct];

	for (let i = 0; i < 3; i++) {
		const randomNumber = generateNumber(MIN_OR_MAX_DISTANCE);
		const answer = correct + (Math.random() < 0.5 ? 1 : -1) * randomNumber;

		if (answers.includes(answer)) {
			i--;
			continue;
		}

		answers.push(answer);
	}

	return answers.sort(() => Math.random() - 0.5);
}

export function getStatus(question: Question) {
	let status: Status = question.correctAnswer === question.selectedAnswer ? 'correct' : 'incorrect';

	return status;
}

export function generateQuestion() {
	const number1 = generateNumber(MAX_NUMBER); // 10
	const number2 = generateNumber(MAX_NUMBER); // 31
	const operation = generateOperation(); // "+"
	const correctAnswer = getCorrectAnswer(number1, number2, operation);
	const answers = generateAnswers(correctAnswer);

	const question: Question = {
		number1,
		number2,
		operation,
		correctAnswer,
		answers,
	};

	return question;
}
