import { MAX_QUESTIONS_COUNT } from './constants';
import type { Question } from './types';
import { generateQuestion, getStatus } from './utils';
import { num1Elm, operationElm, num2Elm, variantlarElm, variantBtns } from './elements';

// VARIABLES
const questions: Question[] = [];
let question: Question;

// HANDLE FUNCTIONS
function handleSelectAnswer(event: MouseEvent) {
	variantlarElm.style.pointerEvents = 'none';

	const variantBtn = event.target as HTMLButtonElement;
	const answer = +variantBtn.innerText;
	question.selectedAnswer = answer;
	const status = getStatus(question);

	variantBtn.style.background = status === 'correct' ? 'green' : 'red';
	setTimeout(init, 100);
}

// UI FUNCTIONS
function renderQuestion() {
	num1Elm.innerText = question.number1.toString();
	operationElm.innerText = question.operation;
	num2Elm.innerText = question.number2.toString();
}

function renderAnswers() {
	variantlarElm.style.pointerEvents = 'unset';

	for (let i = 0; i < variantBtns.length; i++) {
		const variantBtn = variantBtns[i];
		const answer = question.answers[i];
		variantBtn.innerText = answer.toString();
		variantBtn.removeAttribute('style');

		variantBtn.onclick = handleSelectAnswer;
	}
}

// LOGIC FUNCTIONS

function init() {
	if (questions.length === MAX_QUESTIONS_COUNT) {
		const correctCount = questions.reduce(
			(a, q) => a + Number(q.correctAnswer === q.selectedAnswer),
			0
		);
		const incorrectCount = MAX_QUESTIONS_COUNT - correctCount;

		console.log('correctCount = ', correctCount);
		console.log('incorrectCount = ', incorrectCount);
		return;
	}

	const nextQuestion = generateQuestion();
	questions.push(nextQuestion);
	question = nextQuestion;

	renderQuestion();
	renderAnswers();
}

window.addEventListener('load', init);
