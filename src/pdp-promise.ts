type Executor = (resolve: (value: any) => void, reject: (error: Error) => void) => void;
class PDPPromise {
	result: any;
	status: "pending" | "fulfilled" | "rejected" = "pending";
	private onFulfilled: ((value: any) => void) | undefined;
	private onRejected: ((error: Error) => void) | undefined;
	constructor(executor: Executor) {
		executor(this.resolve.bind(this), this.reject.bind(this));
	}

	then(onFulfilled: (value: any) => void) {
		this.onFulfilled = onFulfilled;
	}

	catch(onRejected: (error: Error) => void) {
		this.onRejected = onRejected;
	}
	resolve(value: any) {
		this.status = "fulfilled";
		this.result = value;
		if (this.onFulfilled) this.onFulfilled(value);
	}
	reject(error: Error) {
		this.status = "rejected";
		this.result = error;
		if (this.onRejected) this.onRejected(error);
	}
}

const p1 = new PDPPromise((resolve, reject) => {
	setTimeout(() => {
		reject(new Error("result of p1 promise"));
	}, 2000);
});

p1.then((value) => console.log("value = ", value));
p1.catch((error) => console.error("error = ", error.message));
