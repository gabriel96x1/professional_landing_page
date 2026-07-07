# Testing Conventions

This project follows a test-driven development workflow for all application
changes.

## Default Workflow

For every behavior change, bug fix, refactor with observable risk, or new
feature:

1. Write or update the relevant tests first.
2. Run the tests and confirm they fail for the expected reason.
3. Implement the change in the real application code.
4. Re-run the tests, lint, and build until the implementation passes.

Tests are the specification for the change. Once implementation work begins, do
not edit those tests again just to make the code pass.

## Test Immutability Rule

After the initial failing test has been written and implementation has started:

- Do not loosen assertions.
- Do not delete failing tests.
- Do not replace a specific behavioral assertion with a weaker snapshot or
  smoke test.
- Do not change expected values to match an incorrect implementation.
- Do not move coverage away from the behavior under change.

Only application code should change during the implementation phase.

## Allowed Test Changes After Implementation Starts

Changing tests after implementation has started is allowed only when one of
these is true:

- The user changes or clarifies the requirement.
- The test has a setup error unrelated to the intended behavior.
- The test asserts behavior that contradicts existing project documentation.
- The test depends on unstable timing, environment state, or non-deterministic
  data and must be made deterministic without weakening the assertion.

When this happens, call it out clearly before or while making the test change.

## Coverage

The pre-commit hook runs coverage checks with the configured threshold. New code
should either be covered by tests or be intentionally excluded only when it is
not meaningful to execute in unit tests, such as generated artifacts or framework
bootstrap files.

Do not reduce coverage thresholds to make a change pass. If a threshold fails,
add meaningful tests or reconsider the implementation boundaries.

## Test Types

Prefer the smallest reliable test that proves the behavior:

- Pure helpers: unit tests.
- Route and locale logic: unit tests around stable helpers where possible.
- React components: component tests focused on rendered behavior and accessible
  output.
- Full user flows: end-to-end or route-level tests when multiple layers must
  work together.

Avoid testing implementation details when the user-visible behavior can be
asserted directly.

## Vitest Projects And Browser Mode

Vitest is configured with two unit-test projects:

- Node tests use `tests/**/*.test.{ts,tsx}` for pure helpers, server components,
  App Router page functions, route helpers, request config, and proxy adapters.
- Browser tests use `tests/**/*.browser.test.{ts,tsx}` for interactive React
  components that need a real DOM, events, local storage, hash state, or
  accessible role queries.

Browser tests run through Vitest Browser Mode with the Playwright provider:

- The configured browser is headless Chromium via `@vitest/browser-playwright`.
- Install/update the local browser runtime with:

```bash
bunx playwright install chromium
```

- Browser Mode starts a local Vitest browser server on localhost. In sandboxed
  agent environments this may require escalated permission, but on a normal
  developer machine it should run as part of `bun run test:coverage` and
  `bun run precommit`.
- These tests are still unit/component tests. Do not start `next dev` or test
  full HTTP routes from `.browser.test.tsx` files.
- Use `tests/helpers/browser-render.tsx` to mount React components and clean up
  after each test.
- Use `tests/helpers/browser-interact.ts` for user interactions so React updates
  are wrapped in `act`.
- Use `tests/helpers/test-state.ts` to reset mocked locale, router, middleware,
  and navigation state between tests.

Prefer Browser Mode over jsdom when testing client components in this project.
Good browser-test candidates include menu open/close behavior, Escape handling,
theme toggling, local storage, same-anchor scrolling, language switching, form
labels, external-link labels, and other accessible DOM interactions.

## Validation

Before handing off a change, run the relevant project checks:

```bash
bun run lint
bun run test:coverage
bun run build
```

For commit readiness, the Husky pre-commit hook also runs:

```bash
bun run precommit
```
