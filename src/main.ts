type Action =
	| { type: "increment"; payload: number }
	| { type: "decrement"; payload: number }
	| { type: "reset" }
	| { type: "none" };

type State = { count: number };
type Reducer = (state: State, action: Action) => State;
type Listener = () => void;

function createStore(initialState: State, reducer: Reducer) {
	let state = initialState;
	const listeners: Listener[] = [];

	function dispatch(action: Action) {
		const prevState = state;
		state = reducer(prevState, action);

		if (prevState !== state) listeners.forEach((listener) => listener());
	}

	function subscribe(listener: Listener) {
		listeners.push(listener);

		return function () {
			const idx = listeners.indexOf(listener);
			listeners.splice(idx, 1);
		};
	}

	function getState() {
		return state;
	}

	return { dispatch, subscribe, getState };
}

const reducer: Reducer = (prevState, action) => {
	const state = structuredClone(prevState);

	switch (action.type) {
		case "increment":
			state.count += action.payload;
			return state;
		case "decrement":
			state.count -= action.payload;
			return state;
		case "reset":
			state.count = 0;
			return state;
		case "none":
	}

	return prevState;
};

const store = createStore({ count: 0 }, reducer);

const unsubscribe1 = store.subscribe(() => console.log("[L1] state = ", store.getState()));
const unsubscribe2 = store.subscribe(() => console.log("[L2] state = ", store.getState()));

store.dispatch({ type: "increment", payload: 10 }); // 10

unsubscribe1();
store.dispatch({ type: "decrement", payload: 50 }); // -40
store.dispatch({ type: "none" }); // -40
