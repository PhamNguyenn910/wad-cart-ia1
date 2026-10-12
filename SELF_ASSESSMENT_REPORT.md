# IA#1 — Self-Assessment Report

**Course:** CSC13008 — Web Application Development

**Assignment:** IA#1 — cartTotal with a Harness

**Repository:** https://github.com/PhamNguyenn910/wad-cart-ia1

## 1. Self-Assessment

| Criterion | Max | My Score | Evidence |
|---|---:|---:|---|
| Behaviour | 30 | 30 | `src/cart.js`; commit `029da1a`. The function handles subtotal, VAT, shipping, rounding, empty carts, and the required `RangeError` cases. |
| Tests | 20 | 19 | `test/cart.test.js`; 12 passing tests covering the worked example, empty cart, shipping thresholds, invalid inputs, rounding, and return type. |
| Harness | 20 | 19 | `AGENTS.md`, `scripts/check-format.js`, `package.json`, and `.github/workflows/ci.yml`. The CI workflow runs syntax, format, and unit-test checks on push. |
| Brief | 15 | 15 | `BRIEF.md`; commit `dabdd3e`. The brief defines the allowed files, function contract, edge cases, testing requirements, and no-dependency constraint. |
| AI-LOG.md | 15 | 14 | `AI-LOG.md`; commits `6572c01`, `e5ca6c3`, and `8dfaac9`. The log explains AI suggestions, decisions, rejected additions, manual work, and debugging. |
| **Total** | **100** | **97** | |

## 2. Validation Evidence

The starter test was initially failing because `cartTotal()` was not implemented.

After implementing the function and adding the unit tests, I validated the project using:

- `node --check` — passed.
- `npm test` — 12 tests passed, 0 failed.
- `npm run format` — passed.
- `git diff --check` — no reported errors.

GitHub Actions also completed successfully on the final validated commit.

**CI evidence:** https://github.com/PhamNguyenn910/wad-cart-ia1/actions/runs/38200849950

## 3. What I Did Not Manage

I did not add a full ESLint or Prettier setup. Instead, I used a small dependency-free format checker because the assignment only required a working format or lint gate.

I also did not implement additional validation for inputs such as `NaN` or `Infinity`, since the specification did not clearly define their expected behavior.

Although all 12 unit tests pass, I did not measure formal code coverage or use mutation testing. These would be useful for a larger project, but were not required for this assignment.

## 4. Final Reflection

I think the main requirements are covered, and I have evidence from both local testing and GitHub Actions.

The part I found most useful was reviewing the implementation against the specification rather than assuming that AI-generated code was already correct. I also learned that passing a Git command does not guarantee that the code will pass its tests.

I gave myself 97/100 because the required functionality and workflow are complete, while leaving a few points for improvements in testing, tooling, and documentation.
