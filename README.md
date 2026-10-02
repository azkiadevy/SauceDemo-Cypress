# SauceDemo Cypress E2E Automation

End-to-end test automation project for [SauceDemo](https://www.saucedemo.com/) using **Cypress**.

This project is built as part of my QA Automation portfolio to practice and demonstrate web UI automation, functional testing, positive and negative test scenarios, assertions, and test execution using Cypress.

## Tech Stack

* **Cypress** – E2E test automation
* **JavaScript** – Programming language
* **Node.js / npm** – Runtime and package management
* **Chrome** – Browser for test execution
* **SauceDemo** – Application under test

## Test Coverage

The current implementation covers the following areas:

### Login

* Login with valid credentials
* Login with invalid credentials
* Login validation with empty username
* Verify successful navigation to the Products page
* Verify login error messages

### Products

* Verify product listing
* Verify product information
* Verify product count
* Sort products by price: Low to High
* Sort products by name: A to Z
* Open product detail page

### Shopping Cart

* Add product to cart
* Remove product from cart
* Verify product appears in the cart
* Verify cart URL

### Checkout

* Verify checkout information page
* Validate required checkout information
* Complete checkout flow
* Verify order completion page

## Project Structure

```text
saucedemo-cypress/
│
├── cypress/
│   ├── e2e/
│   │   ├── login.cy.js
│   │   ├── product.cy.js
│   │   ├── cart.cy.js
│   │   └── checkout.cy.js
│   │
│   ├── fixtures/
│   │   └── testData.json
│   │
│   └── support/
│       ├── commands.js
│       └── e2e.js
│
├── cypress.config.js
├── package.json
├── package-lock.json
└── README.md
```

## Prerequisites

Make sure the following are installed:

* Node.js
* npm
* Google Chrome

Check your Node.js and npm versions:

```bash
node --version
npm --version
```

## Installation

Clone the repository:

```bash
git clone <your-repository-url>
```

Navigate to the project directory:

```bash
cd saucedemo-cypress
```

Install project dependencies:

```bash
npm install
```

Verify Cypress installation:

```bash
npx cypress verify
```

## Running the Tests

### Open Cypress Test Runner

Run:

```bash
npm run cy:open
```

Select:

```text
E2E Testing
```

Then select Chrome and choose the test spec you want to execute.

### Run Tests in Headless Mode

Run all E2E tests:

```bash
npm run cy:run
```

### Run Tests in Chrome

```bash
npm run cy:chrome
```

### Run Tests in Headed Mode

```bash
npm run cy:headed
```

## Running a Specific Test

To run a specific test file:

```bash
npx cypress run --spec "cypress/e2e/login.cy.js"
```

For example:

```bash
npx cypress run --spec "cypress/e2e/checkout.cy.js"
```

## Test Evidence

The project is configured to capture screenshots when tests fail:

```javascript
screenshotOnRunFailure: true
```

Test execution videos are also enabled:

```javascript
video: true
```

This provides additional evidence for debugging failed test cases and reviewing test execution.

## Example Test Flow

The checkout test covers the following end-to-end scenario:

```text
Login
  ↓
Product Listing
  ↓
Add Product to Cart
  ↓
Open Cart
  ↓
Checkout
  ↓
Enter Customer Information
  ↓
Review Order
  ↓
Complete Order
  ↓
Verify Order Confirmation
```

## Testing Approach

The automation suite currently includes:

* Positive testing
* Negative testing
* Input validation
* UI element validation
* URL validation
* Text assertions
* Element count assertions
* Sorting validation
* End-to-end user flow testing
* Screenshot on failure
* Video recording

## Future Improvements

The project is still under development. Planned improvements include:

* [ ] Improve test data management using fixtures
* [ ] Add more reusable custom commands
* [ ] Implement Page Object Model
* [ ] Add Smoke Test suite
* [ ] Add Regression Test suite
* [ ] Improve test tagging and test organization
* [ ] Add HTML test reporting
* [ ] Integrate test execution with CI/CD
* [ ] Add GitHub Actions
* [ ] Improve cross-browser test coverage

## Application Under Test

**SauceDemo**

https://www.saucedemo.com/

Test credentials used in this project:

```text
Username: standard_user
Password: secret_sauce
```

## Author

**Devy Azkia Putri**

QA Engineer | Quality Assurance & Test Automation

Skills demonstrated in this project:

* Cypress
* JavaScript
* E2E Testing
* Functional Testing
* UI Automation
* Positive & Negative Testing
* Test Assertions
* Test Automation Framework Development
