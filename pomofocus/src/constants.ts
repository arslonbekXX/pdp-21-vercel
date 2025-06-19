import type { Mode } from "./types";

export const times: Record<Mode, number> = {
	POMODORO: 1500, // 25 * 60,
	SHORT_BREAK: 300, // 5 * 60
	LONG_BREAK: 900, // 15 * 60
};
