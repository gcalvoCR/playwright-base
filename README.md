# Playwright Base

## Prerequisites

1. **Text Editor**  
  - Install [Visual Studio Code](https://code.visualstudio.com/download) if you don't have a text editor.
2. **Node.js (v14 or higher)**  
  - Download and install from [nodejs.org](https://nodejs.org/en/download/) if not already installed.
  - To check your Node.js version, run in your terminal:
    ```sh
    node --version
    # Example output: v14.17.1
    ```
  - If you see `command not found: node`, you need to install Node.js.

## Installation

Initialize a new Playwright project by running:
```sh
npm init playwright@latest
```

### Important Files

After installation, you should see the following files and folders:
```
playwright.config.ts
package.json
package-lock.json
tests/
  example.spec.ts
tests-examples/
  demo-todo-app.spec.ts
```

### Running Your First Test

Execute all tests with:
```sh
npx playwright test
```

### Debugging Tests

Pause the test execution for debugging:
```js
await page.pause();
```

### Generating Code

Use Playwright's code generator:
```sh
npx playwright codegen <url>
```

### Running Specific Tests

- Use `.only` to run a specific test or suite.
- Run a specific test file:
  ```sh
  npx playwright test tests/example.spec.ts
  ```

