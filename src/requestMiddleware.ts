import { Server, Request, ResponseToolkit, Plugin } from "@hapi/hapi";

const requestMiddleware: Plugin<void> = {
	name: "requestMiddleware",
	register: (server: Server) => {
		server.ext("onRequest", (request: Request, h: ResponseToolkit) => {
			const startTime = Date.now();
			const { method, path } = request;
			console.log(`Request received: ${method} ${path}`);
			request.events.on("finish", () => {
				const duration = Date.now() - startTime;
				console.log(`Request processed in ${duration} ms`);
			});
			return h.continue;
		});
	},
};

export default requestMiddleware;
