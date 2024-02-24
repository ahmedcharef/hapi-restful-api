import Note from "../models/note";

export default class NoteService {
	private notes: Note[] = [];

	createNote(title: string, body: string): Note {
		try {
			const note = new Note(title, body);
			this.notes.push(note);
			return note;
			// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		} catch (error: any) {
			if (error.isJoi) {
				console.error("Validation error", error.details);
				throw error.details[0].message;
			}
			console.error("Unknown error", error);
			throw error;
		}
	}

	getAllNotes(): Note[] {
		return this.notes;
	}

	getNoteById(id: string): Note | undefined {
		return this.notes.find((note) => note.id === id);
	}

	updateNote(id: string, title: string, body: string): Note | string {
		try {
			const note = new Note(title, body);

			const noteIndex = this.notes.findIndex((note) => note.id === id);
			if (noteIndex === -1) {
				return "Note not found";
			}

			this.notes[noteIndex] = note;

			return this.notes[noteIndex];
		} catch (error: any) {
			if (error.isJoi) {
				console.error("Validation error", error.details);
				throw error.details[0].message;
			}
			console.error("Unknown error", error);
			throw error;
		}
	}

	deleteNote(id: string): string {
		const noteIndex = this.notes.findIndex((note) => note.id === id);
		if (noteIndex === -1) {
			return "Note not found";
		}
		this.notes.splice(noteIndex, 1);
		return "Note deleted successfully";
	}
}
