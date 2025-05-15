/*🟥 14. conferenceManager (real-time session management)*/

const conferenceManager = {
	sessions: [],
	addSession(title, speaker, capacity) {
		const session = { title, speaker, capacity, attendees: [] };

		this.sessions.push(session);
	},
	registerAttendee(sessionTitle, attendeeName) {
		const session = this.sessions.find((session) => session.title === sessionTitle);

		if (!session) {
			return console.error(`Session(${sessionTitle}) is not found!!!`);
		}

		if (session.attendees.length >= session.capacity) {
			return console.error(`Session(${sessionTitle}) is full!!!`);
		}

		session.attendees.push(attendeeName);
	},
	listAttendees(sessionTitle) {
		const session = this.sessions.find((session) => session.title === sessionTitle);

		if (!session) {
			console.error(`Session(${sessionTitle}) is not found!!!`);
			return [];
		}

		return session.attendees;
	},
	getSessionStatus(sessionTitle) {
		const session = this.sessions.find((session) => session.title === sessionTitle); // undefined

		if (!session) return 'Not Found';
		if (session.attendees.length < session.capacity) return 'Open';

		return 'Full';
	},
	removeAttendee(sessionTitle, attendeeName) {
		const session = this.sessions.find((session) => session.title === sessionTitle); // undefined
		if (!session) console.error(`Session(${sessionTitle}) is not found!!!`);

		const attendeeIdx = session.attendees.indexOf(attendeeName);
		if (attendeeIdx === -1) console.error(`Attendee(${attendeeName}) is not found!!!`);

		session.attendees.splice(attendeeIdx, 1);
	},
};

conferenceManager.addSession('JavaScript Advanced', 'Ali', 2);
conferenceManager.addSession('Node.js Basics', 'Laylo', 3);

// Qatnashchilar ro‘yxatga olinadi
conferenceManager.registerAttendee('JavaScript Advanced', 'Sardor');
conferenceManager.registerAttendee('JavaScript Advanced', 'Dilnoza');
conferenceManager.registerAttendee('JavaScript Advanced', 'Nodir');
// 👉 Capacity to‘ldi – bu yerda ro‘yxatga olinmasligi kerak

// Attendee ro‘yxatini tekshirish
console.log(conferenceManager.listAttendees('JavaScript Advanced'));
// 👉 ['Sardor', 'Dilnoza']

// Session holati
console.log(conferenceManager.getSessionStatus('JavaScript Advanced'));
// 👉 'Full'
console.log(conferenceManager.getSessionStatus('Node.js Basics'));
// 👉 'Open'
console.log(conferenceManager.getSessionStatus('Python 101'));
// 👉 'Not Found'

// Attendee’ni o‘chirish
conferenceManager.removeAttendee('JavaScript Advanced', 'Dilnoza');
console.log(conferenceManager.listAttendees('JavaScript Advanced'));
// 👉 ['Sardor']

// Hozir holati qayta ochiladi
console.log(conferenceManager.getSessionStatus('JavaScript Advanced'));
// 👉 'Open'

console.log(conferenceManager);
