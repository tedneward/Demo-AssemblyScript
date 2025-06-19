import assert from "assert";
import { add } from "../build/debug.js";
import { subtract } from "../build/debug.js";
import { multiply } from "../build/debug.js";
import { divide } from "../build/debug.js";

assert.strictEqual(add(1, 2), 3);
console.log(".");
assert.strictEqual(subtract(3, 2), 1);
console.log(".");
assert.strictEqual(multiply(2, 3), 6);
console.log(".");
assert.strictEqual(divide(6, 2), 3);
console.log(".");
