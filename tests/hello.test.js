const test = require("node:test");
const assert = require("node:assert");
const { greet } = require("../src/hello");

test("greet returns a greeting", () => {
  assert.strictEqual(greet("world"), "Hello, world!");
});

test("greet defaults to English when lang omitted (backward compat)", () => {
  assert.strictEqual(greet("world"), "Hello, world!");
});

test("greet returns Korean greeting for lang=ko", () => {
  assert.strictEqual(greet("월드", "ko"), "안녕하세요, 월드!");
});
