import * as Hapi from "@hapi/hapi";
import { NotesController } from "./controllers/notesControllers";

const notesController = new NotesController();

const baseRoute = {
	name: "attendance",
	register: async (server: Hapi.Server) => {
		server.route([
			{ method: "POST", path: "/notes", handler: notesController.createNote },
			{ method: "GET", path: "/notes", handler: notesController.getAllNotes },
			{
				method: "GET",
				path: "/notes/{id}",
				handler: notesController.getNoteById,
			},
			{
				method: "PUT",
				path: "/notes/{id}",
				handler: notesController.updateNoteById,
			},
			{
				method: "DELETE",
				path: "/notes/{id}",
				handler: notesController.deleteNoteById,
			},
		]);
	},
};

export default baseRoute;
