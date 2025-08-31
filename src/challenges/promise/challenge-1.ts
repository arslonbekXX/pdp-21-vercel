function getExamineAnswer(askHour: number) {
	const answers: string[] = ["answer-1", "answer-2", "answer-3", "answer-4"];
	const examineFinishHour = 12;
	const examineCheckingHour = 8;

	return new Promise<string[]>((resolve, reject) => {
		const examineCheckingFinishHour = examineFinishHour + examineCheckingHour;
		if (askHour < examineFinishHour) reject(new Error("Examine is not finished"));
		if (askHour <= examineCheckingFinishHour) reject(new Error("Examine is not checked"));

		resolve(answers);
	});
}

const handleReject = ({ message }: Error) => console.error("Error: ", message);
const handleResolve = (value: string[]) => console.log("Fulfilled: Examine results", value);

getExamineAnswer(8).catch(handleReject); // Error: Examine is not finished
getExamineAnswer(12.5).catch(handleReject); // Error: Examine is not checked
getExamineAnswer(21).then(handleResolve); // Fulfilled: Examine results of ["answer-1", "answer-2", "answer-3", "answer-4"]
