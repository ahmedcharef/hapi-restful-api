import Hapi from "@hapi/hapi";
import { Server } from "@hapi/hapi";
export let server: Server;
export const init = async (): Promise<Server> => {
  server = Hapi.server({
    port: 3000,
    host: "127.0.0.1",
  });

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
