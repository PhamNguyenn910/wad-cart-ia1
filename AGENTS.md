
# Project Rules — IA#1 cartTotal

## Stack and Environment
- Node.js 22+, npm 10+, and plain JavaScript (ES Modules).
- Use built-in JavaScript and Node.js APIs only.
- No external dependencies or additional frameworks.
- Use `node:test` and `node:assert/strict` for testing.

## Project Scope
- `src/cart.js`: implement the cartTotal function.
- `test/cart.test.js`: add unit tests for the specification.
- `package.json`: modify only with approval for harness setup.
- Do not modify unrelated files without permission.
- Preserve the existing exported function signature.

## Functional Requirements
- Calculate subtotal as the sum of `price * qty`.
- Calculate VAT from the subtotal using `vatRate`.
- Shipping is free when subtotal >= `freeShipFrom`.
- An empty cart must return 0 without VAT or shipping.
- Negative prices or non-positive/non-integer quantities must throw RangeError.
- Return the final total rounded to whole đồng as a number.
- The provided example must return exactly 467400.

## Coding and Testing Rules
- Use 2-space indentation and named exports.
- Keep the implementation simple, readable, and focused.
- Test normal cases, boundary conditions, and invalid inputs.
- Derive expected test results from the specification.
- Never change expected results just to make tests pass.

## Workflow and Validation
- Read the README, existing code, tests, and task brief first.
- Make only the changes required for the current task.
- Review `git diff` before accepting generated changes.
- Run `npm test` after implementation changes.
- Report actual test results and unresolved issues honestly.

## Never
- Never install dependencies without permission.
- Never change the function signature or weaken existing tests.
- Never invent extra requirements or unsupported behavior.
- Never hide errors, failures, or unverified assumptions.
- Never commit secrets, `.env`, or `node_modules`.
