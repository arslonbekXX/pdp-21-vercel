// Parking Spot
export interface ParkingSpot {
	id: string;
	number: string; // Spot raqami yoki nomi
	status: 'available' | 'occupied' | 'reserved' | 'unavailable';
	level?: string; // Qavat yoki hudud
	type?: 'regular' | 'handicap' | 'electric'; // Spot turi
}

// Reservation
export interface Reservation {
	id: string;
	parkingSpotId: string;
	vehicleId: string;
	startTime: string; // ISO Date
	endTime?: string; // ISO Date (agar hali tugamagan bo‘lsa null bo‘lishi mumkin)
	status: 'active' | 'completed' | 'cancelled';
}

// Vehicle
export interface Vehicle {
	id: string;
	plateNumber: string; // Davlat raqami
	ownerName?: string;
	model?: string;
	color?: string;
}

// Parking Event (Entry/Exit)
export interface ParkingEvent {
	id: string;
	vehicleId: string;
	parkingSpotId: string;
	type: 'entry' | 'exit';
	timestamp: string; // ISO Date
	fee?: number; // faqat "exit" event uchun hisoblangan to‘lov
}
