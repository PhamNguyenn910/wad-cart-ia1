# IA#1 — Implementation Brief: cartTotal

## 1. Objective

Implement the `cartTotal(items, options)` function in `src/cart.js` using plain JavaScript. The function must calculate the final shopping cart total, including VAT and shipping, according to the Session 02 specification and the starter repository's README.

## 2. Project Context and Scope

The project uses Node.js 22+, ES Modules, and the built-in Node.js test runner.

Read `README.md`, `AGENTS.md`, and the existing implementation and tests before making changes.

Allowed modifications:
- `src/cart.js` — implement the function.
- `test/cart.test.js` — add specification-based unit tests.

Do not modify `package.json`, the CI workflow, project rules, or other files without permission. Do not install external dependencies.

## 3. Input and Output Contract

Function signature:

`cartTotal(items, options)`

Inputs:

- `items`: an array of objects containing `name`, `price`, and `qty`.
- `options`: an object containing `vatRate`, `freeShipFrom`, and `shipFee`.

Required behavior:

1. Calculate the subtotal as the sum of `price * qty`.
2. Calculate VAT as `subtotal * vatRate`.
3. Set shipping to `0` when `subtotal >= freeShipFrom`; otherwise, use `shipFee`.
4. Return `subtotal + VAT + shipping`, rounded to the nearest whole đồng.
5. The return value must be a JavaScript `number`, not a string.
6. An empty cart must return `0`, without VAT or shipping.
7. A negative `price` must throw `RangeError`.
8. A `qty` that is not a positive integer must throw `RangeError`.

The free-shipping threshold must be evaluated using the subtotal before VAT.

## 4. Reference Example

Input:

```javascript
cartTotal(
  [
    { name: 'Áo thun', price: 180000, qty: 2 },
    { name: 'Sổ tay', price: 45000, qty: 1 }
  ],
  {
    vatRate: 0.08,
    freeShipFrom: 500000,
    shipFee: 30000
  }
)
```

Expected result: `467400` (number).

Subtotal: `405000`
VAT: `32400`
Shipping: `30000`

## 5. Testing Requirements

Use `node:test` and `node:assert/strict`.

Tests must cover the worked example, an empty cart, shipping below and at the free-shipping threshold, invalid negative prices, and invalid quantities including zero, negative values, and non-integers.

Include a case that verifies rounding and the numeric return type.

Keep tests focused on individual behaviors and derive expected results from the specification, not from the current implementation.

Do not remove, weaken, or change existing assertions merely to make tests pass.

## 6. Implementation Constraints

Use only built-in JavaScript and Node.js features. Preserve the existing named export and function signature.

Keep the implementation small, readable, and consistent with `AGENTS.md`.

Do not invent additional business requirements or introduce unnecessary abstractions.

## 7. Workflow and Acceptance Criteria

Before implementation, explain the proposed changes briefly.

Implement the function and the required tests within the authorized scope. Provide changes for human review before they are accepted.

The completed implementation must satisfy all specified behaviors, pass `npm test`, and pass `npm run format`.

Report any failed validation or unresolved issue honestly. Do not claim a command passed without actual execution evidence.

Final acceptance requires review of the Git diff and a successful GitHub Actions CI run after the completed code is pushed.
