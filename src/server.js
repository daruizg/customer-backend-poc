import { buildApp } from "./app.js";

const port = Number(process.env.PORT || 3000);
const host = process.env.HOST || "0.0.0.0";

const server = buildApp();

server.listen(port, host, () => {
  console.log(`customer-backend-poc listening on ${host}:${port}`);
});
