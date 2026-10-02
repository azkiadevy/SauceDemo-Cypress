Cypress.Commands.add("login", (username, password) => {
  cy.visit("/");

  cy.get('[data-test="username"]').should("be.visible").type(username);
  cy.get('[data-test="password"]').should("be.visible").type(password);
  cy.get('[data-test="login-button"]').should("be.visible").click();
  cy.url().should("include", "/inventory.html");
});

Cypress.Commands.add(
  "checkoutProduct",
  (firstName, lastName, postalCode) => {

    cy.get(".shopping_cart_link").should("be.visible").click();
    cy.get('[data-test="checkout"]').click();
    cy.get('[data-test="firstName"]').type(firstName);
    cy.get('[data-test="lastName"]').type(lastName);
    cy.get('[data-test="postalCode"]').type(postalCode);
    cy.get('[data-test="continue"]').click();

  }
);