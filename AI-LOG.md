# IA#1 — AI Usage Log

**Date:** 2026-10-12  
**AI Tool:** ChatGPT (Web)  
**Project:** CSC13008 — cartTotal with a Harness  
**Repository:** https://github.com/PhamNguyenn910/wad-cart-ia1

## 1. Understanding the Task and Setting Up the Harness

**What I asked:** I first asked ChatGPT to explain the assignment and rubric because I wanted to understand what the lecturer expected beyond simply writing a working function.

**What AI suggested:** ChatGPT helped propose the project rules, a simple format checker, and a GitHub Actions workflow.

**What I reviewed and decided:** I questioned whether the first version of `AGENTS.md` was specific enough. After reviewing it, I requested clearer rules about file scope, input validation, testing, and things AI must not change. I also reviewed the CI configuration and asked whether it could be improved without adding unnecessary tools or dependencies.

I decided to keep the harness simple and use Node.js built-in features because the assignment is small and does not require a large testing framework.

**What I did myself:** I created the files in VS Code, ran the setup commands, configured my GitHub repository, checked the results, and committed each part separately.

**Evidence:** Commits `7e7c76e`, `fb6b70f`, and `535832c`.

## 2. Preparing the Implementation Brief

**What I asked:** I asked ChatGPT to help turn the assignment requirements into a clear brief before starting the implementation.

**What AI suggested:** A structured brief describing the function contract, allowed files, error cases, constraints, and expected tests.

**What I reviewed and decided:** I checked the brief against the slides, README, and rubric to make sure it did not introduce requirements outside the assignment. I also kept the implementation scope limited to `src/cart.js` and `test/cart.test.js`.

I wanted the brief to be detailed enough for AI to follow, but not so restrictive that it would make a simple task unnecessarily complicated.

**What I did myself:** I organized the brief in the repository, corrected its formatting issues, reviewed the Git changes, and committed it before implementing the function.

**Evidence:** `BRIEF.md` — commit `dabdd3e`.

## 3. Reviewing the cartTotal Implementation

**What I asked:** I asked ChatGPT to suggest an implementation and then questioned whether its logic was complete, efficient, and consistent with the specification.

**What AI suggested:** A solution using `for...of` to calculate the subtotal, `RangeError` for invalid inputs, and `Math.round()` for the final result.

**What I reviewed and decided:**

- I checked why the free-shipping condition must use the subtotal before VAT, especially when the amount is exactly at the threshold.
- I reviewed the quantity validation to make sure zero, negative values, and decimal quantities were rejected.
- I checked that the final result was a number rather than a string, since using `toFixed()` could cause problems.
- I considered additional validation for values such as `NaN` and `Infinity`, but decided not to add it because the specification did not define how those cases should be handled.
- I kept the single-loop approach because it was easy to follow and did not require extra data structures.

I used ChatGPT's proposed implementation after reviewing these points instead of adding more validation or abstractions just for the sake of making the code look more advanced.

**What I did myself:** I applied the implementation in VS Code, inspected the changes, and ran the original test to verify the worked example.

**Evidence:** `src/cart.js` — commit `029da1a`.

## 4. Testing, Debugging, and Validation

**What I asked:** After the first test passed, I asked ChatGPT whether the implementation covered all the important cases and how to test it more thoroughly.

**What AI suggested:** Eleven additional unit tests covering empty carts, shipping thresholds, invalid prices and quantities, rounding, and the return type.

**What I reviewed and decided:** I checked the expected results instead of relying only on the code's output. I paid particular attention to the exact free-shipping threshold and the case where VAT pushes the total above the threshold but shipping should still be charged.

I also wanted each test to focus on one behavior so that a failure would be easier to understand.

**Issue and correction:** During the review process, a Terminal command was accidentally inserted into `test/cart.test.js`. This caused a syntax error, and the format checker also reported a missing final newline.

I checked the error output, removed the incorrect line, fixed the file ending, and reran the validation commands. I kept the fix in a separate commit instead of hiding the mistake.

**Final results:**
- `node --check`: passed.
- `npm test`: 12 passed, 0 failed.
- `npm run format`: passed.
- `git diff --check`: no reported errors.
- GitHub Actions CI: passed after the correction.

**Evidence:** `test/cart.test.js`, commits `029da1a` and `c371526`.

**CI run:** https://github.com/PhamNguyenn910/wad-cart-ia1/actions/runs/38199159823

## 5. What I Learned

The most useful part of this assignment was not generating the function itself, but learning how to check whether an AI-generated solution actually follows the requirements.

ChatGPT provided the initial code, test suggestions, and configuration examples. I worked on understanding their purpose, questioning unclear parts, deciding what was necessary for the assignment, and validating the results through Git, local tests, and CI.

I also realized that a successful commit does not mean the code is correct. The accidental syntax error showed why reviewing changes and running tests before pushing are important.

Overall, I used AI as a programming assistant, but treated the assignment specification and actual test results as the final reference when deciding whether the work was complete.