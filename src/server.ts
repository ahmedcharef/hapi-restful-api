import Hapi from "@hapi/hapi";
import { Server } from "@hapi/hapi";
import dotenv from "dotenv";
import notesRoutes from "./notesRoutes";
import requestMiddleware from "./requestMiddleware";

export let server: Server;
export const init = async (): Promise<Server> => {
	dotenv.config();

	server = Hapi.server({
		port: process.env.PORT || 3000,
		host: process.env.HOST || "127.0.0.1",
	});
	server.register(requestMiddleware);
	server.register([notesRoutes]);
	return server;
};
export const start = async (): Promise<void> => {
	console.log(`Listening on ${server.settings.host}:${server.settings.port}`);
	return server.start();
};
process.on("unhandledRejection", (err) => {
	console.error("unhandledRejection");
	console.error(err);
	process.exit(1);
});
