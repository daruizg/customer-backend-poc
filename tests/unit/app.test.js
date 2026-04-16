import test from "node:test";
import assert from "node:assert/strict";
import { once } from "node:events";

import { buildApp } from "../../src/app.js";

test("GET /health returns service status", async () => {
  const server = buildApp();
  server.listen(0, "127.0.0.1");
  await once(server, "listening");

  const address = server.address();
  const response = await fetch(`http://127.0.0.1:${address.port}/health`);
  const body = await response.json();

  assert.equal(response.status, 200);
  assert.deepEqual(body, {
    status: "ok",
    service: "customer-backend-poc",
  });

  await new Promise((resolve, reject) => {
    server.close((error) => {
      if (error) {
        reject(error);
        return;
      }

      resolve();
    });
  });
});
