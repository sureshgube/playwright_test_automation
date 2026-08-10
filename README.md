# Playwright + Cucumber UI Automation Framework

A basic UI automation framework using Playwright and Cucumber BDD for browser-based testing.

## Tech Stack

- Playwright
- TypeScript
- Cucumber.js
- Node.js

## Project Structure

```text
tests/
  features/
    example.feature
  steps/
    example.steps.ts
  support/
    world.ts
playwright.config.ts
cucumber.json
package.json
```

## Install

```bash
npm install
```

## Run the sample BDD test

```bash
npm run test:bdd
```

## Optional Playwright test runner example

```bash
npm run test:ui
```

## Notes

- The sample test opens https://example.com and validates the page title.
- You can extend this by adding more feature files under tests/features and step definitions under tests/steps.
