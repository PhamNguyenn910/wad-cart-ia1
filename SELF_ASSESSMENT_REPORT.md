# IA#1 — Self-Assessment Report

**Course:** CSC13008 — Web Application Development

**Assignment:** IA#1 — cartTotal with a Harness

**Repository:** https://github.com/PhamNguyenn910/wad-cart-ia1

## 1. Self-Assessment

| Criterion | Max | My Score | Evidence |
|---|---:|---:|---|
| Behaviour | 30 | 30 | `src/cart.js`; commit `029da1a`. The function follows the specified rules for subtotal, VAT, shipping, rounding, empty carts, and `RangeError`. The worked example returns `467400` as a number. |
| Tests | 20 | 20 | `test/cart.test.js`; 12 passing unit tests. They cover the worked example, empty cart, shipping below and at the threshold, VAT calculation, invalid prices and quantities, rounding, and return type. Each test focuses on a specific behavior. |
| Harness | 20 | 20 | `AGENTS.md`, `scripts/check-format.js`, `package.json`, and `.github/workflows/ci.yml`. The rules file defines the stack, commands, constraints, and things that must never be changed. Both `npm test` and `npm run format` work, and GitHub Actions runs automatically on push. |
| Brief | 15 | 15 | `BRIEF.md`; commit `dabdd3e`. The brief defines the allowed files, function contract, required behavior, error cases, testing requirements, and no-dependency constraint. |
| AI-LOG.md | 15 | 15 | `AI-LOG.md`; commits `6572c01`, `e5ca6c3`, and `8dfaac9`. The log records the AI tool, its suggestions, what I reviewed and changed, which suggestions I did not use, my manual work, and the debugging process. |
| **Total** | **100** | **100** | |

## 2. Validation Evidence

The starter test initially failed because `cartTotal()` had not been implemented.

After implementing the function and adding the unit tests, I checked the project using:

- `node --check test/cart.test.js` — passed.
- `npm test` — 12 tests passed, 0 failed.
- `npm run format` — passed.
- `git diff --check` — no reported errors.

GitHub Actions also completed successfully, including syntax checking, formatting, and unit testing.

**CI evidence:** https://github.com/PhamNguyenn910/wad-cart-ia1/actions/runs/38212933496

## 3. What I Did Not Manage

I did not set up a full ESLint or Prettier configuration. Instead, I used a small dependency-free format checker because the assignment only required one working format or lint gate.

I also did not add extra validation for inputs such as `NaN` or `Infinity`, since the specification did not clearly define how those cases should be handled.

I did not measure formal code coverage or run mutation testing. These could be useful for a larger project, but they were not required for this homework.

## 4. Final Reflection

I believe the project meets the requirements in all five grading criteria, and I can support my self-assessment with source code, unit tests, documentation, commit history, and CI results.

The most useful part of this assignment was learning how to review AI-generated code against the specification instead of accepting it immediately. I also learned that a successful Git commit does not guarantee that the code is correct, so testing and reviewing changes are important.

I gave myself 100/100 because the required functionality, tests, harness, brief, and AI usage log meet the highest descriptions in the rubric. I understand that the final score will still depend on the lecturer's evaluation.
