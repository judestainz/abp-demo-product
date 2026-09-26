import { test } from "node:test";
import assert from "node:assert/strict";
import { greeting } from "../greeting.mjs";

test("greeting names the person", () => {
  assert.equal(greeting("team"), "Hello, team!");
});
