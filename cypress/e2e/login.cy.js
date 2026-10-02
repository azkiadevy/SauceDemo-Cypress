describe("SauceDemo - Login", () => {

  beforeEach(() => {
    cy.visit("/");
  });

  it("should login successfully with valid credentials", () => {

    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();
    cy.url().should("include", "/inventory.html");
    // Check if the products page is displayed
    cy.get(".title").should("be.visible").and("contain", "Products");
  });


  it("should show error message with invalid credentials", () => {

    cy.get('[data-test="username"]').type("invalid_user");
    cy.get('[data-test="password"]').type("wrong_password");
    cy.get('[data-test="login-button"]').click();
    // Check if the error message is displayed
    cy.get('[data-test="error"]').should("be.visible")
      .and("contain", "Username and password do match"); // make this test failed
  });


  it("should show validation when username is empty", () => {

    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();
    // Check if the error message is displayed
    cy.get('[data-test="error"]').should("be.visible")
      .and("contain", "Username is required");
  });

});