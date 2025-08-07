import type { TRANSACTION_STATUS, TRANSACTION_TYPE } from "./enum";

export interface Transaction {
	id: string;
	type: TRANSACTION_TYPE;
	amount: number;
	date: string;
	status: TRANSACTION_STATUS;
	note?: string;
}

export interface TransactionP2P extends Transaction {
	fromCardNumber: string;
	toCardNumber: string;
	fromBankCode: string;
	toBankCode: string;
}

export interface ValidationResult {
	isSuccessful: boolean;
	errorMessage?: string;
}
export interface P2PTransactionResult {
	isSuccessful: boolean;
	transactionId?: string;
	errorReason?: string;
}
