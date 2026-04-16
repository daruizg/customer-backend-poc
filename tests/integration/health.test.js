import test from "node:test";
import assert from "node:assert/strict";
import { once } from "node:events";

import { buildApp } from "../../src/app.js";

test("unknown routes return 404", async () => {
  const server = buildApp();
  server.listen(0, "127.0.0.1");
  await once(server, "listening");

  const address = server.address();
  const response = await fetch(`http://127.0.0.1:${address.port}/unknown`);
  const body = await response.json();

  assert.equal(response.status, 404);
  assert.deepEqual(body, {
    message: "Not Found",
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
