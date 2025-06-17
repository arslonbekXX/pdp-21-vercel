export type PlayerID = "player1" | "player2";

export interface Player {
	total: number;
	current: number;
	nextPlayer: PlayerID;
}

export interface Game {
	player1: Player;
	player2: Player;
	current: PlayerID;
}
