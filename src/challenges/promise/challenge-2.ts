interface Examine {
	name: string;
	finishTime: number;
	result: string;
}

const examines: Examine[] = [
	{ name: "Math", finishTime: 6, result: "result-1" },
	{ name: "Physics", finishTime: 12, result: "result-2" },
	{ name: "Chemistry", finishTime: 10, result: "result-3" },
	{ name: "Biology", finishTime: 4, result: "result-4" },
];

const promises = examines.map(
	(examine) =>
		new Promise<Examine>((resolve) => setTimeout(() => resolve(examine), examine.finishTime * 1000))
);

function getExaminesResult(askType: "all" | "each") {
	if (askType === "all") {
		Promise.all(promises).then((examines: Examine[]) => {
			const maxTime = examines.reduce((max, examine) => Math.max(max, examine.finishTime), 0);
			const results = examines.map((examine) => `${examine.name}:${examine.result}`);
			console.log(`after ${maxTime}s all result:`, results);
		});
	} else if (askType === "each") {
		for (const promise of promises) {
			promise.then(({ finishTime, name, result }) => {
				console.log(`after ${finishTime}s ${name} result: ${result}`);
			});
		}
	}
}

// getExaminesResult("all");
/**
 *  after 12s all result: ["Math:result-1", "Physics:result-2", "Chemistry:result-3", "Biology:result-4"]
 */
getExaminesResult("each");
/**
 * after 4s Biology result: "result-4"
 * after 6s Math result: "result-1"
 * after 10s Chemistry result: "result-3"
 * after 12s Physics result: "result-2"
 */
