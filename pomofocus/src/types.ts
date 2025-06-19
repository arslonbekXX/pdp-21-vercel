export type Mode = "POMODORO" | "LONG_BREAK" | "SHORT_BREAK";
export interface Pomofocus {
	mode: Mode;
	time: number;
	intervalId: number | null;
}
