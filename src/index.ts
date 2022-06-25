import server from "./server";

(async () => {
  //await server.initLocalDatabases();
  await server.initServer((process.env.PORT || "3000"), "0.0.0.0");
})();