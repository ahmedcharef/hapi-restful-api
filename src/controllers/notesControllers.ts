import Hapi, { ResponseToolkit, ResponseValue } from "@hapi/hapi";
import NoteService from "../services/notesServices";
import Note from "../models/note";

export class NotesController {
	private noteService: NoteService;
	private notes: Note[] = [];

	constructor() {
		this.noteService = new NoteService();
	}

	createNote = async (
		request: Hapi.Request,
		h: Hapi.ResponseToolkit,
	): Promise<Hapi.ResponseObject> => {
		try {
			const { title, body } = request.payload as Note;
			const note = this.noteService.createNote(title, body);
			return h.response(note).code(201);
		} catch (error) {
			return h.response(error as ResponseValue).code(400);
		}
	};

	getAllNotes = async (
		request: Hapi.Request,
		h: Hapi.ResponseToolkit,
	): Promise<Hapi.ResponseObject> => {
		const notes = this.noteService.getAllNotes();
		return h.response(notes).code(200);
	};

	getNoteById = async (
		request: Hapi.Request,
		h: Hapi.ResponseToolkit,
	): Promise<Hapi.ResponseObject> => {
		const note = this.noteService.getNoteById(request.params.id);
		if (!note) {
			return h.response("Note not found").code(404);
		}
		return h.response(note).code(200);
	};

	updateNoteById = async (
		request: Hapi.Request,
		h: Hapi.ResponseToolkit,
	): Promise<Hapi.ResponseObject> => {
		try {
			const { title, body } = request.payload as Note;
			const note = this.noteService.updateNote(request.params.id, title, body);
			if (note === "Note not found") {
				return h.response(note).code(404);
			}
			return h.response(note).code(200);
		} catch (error) {
			return h.response(error as ResponseValue).code(400);
		}
	};

	deleteNoteById = async (
		request: Hapi.Request,
		h: Hapi.ResponseToolkit,
	): Promise<Hapi.ResponseObject> => {
		const result = this.noteService.deleteNote(request.params.id);
		if (result === "Note not found") {
			return h.response(result).code(404);
		}
		return h.response(result).code(200);
	};
}
