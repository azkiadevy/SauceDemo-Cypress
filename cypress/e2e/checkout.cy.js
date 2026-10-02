describe("Checkout", () => {

  beforeEach(() => {
    cy.login("standard_user", "secret_sauce");

    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();

    cy.get(".shopping_cart_link").click();

    cy.get('[data-test="checkout"]').click();
  });


  it("should display checkout information page", () => {

    cy.url().should("include", "/checkout-step-one.html");
    cy.get(".title").should("contain", "Checkout: Your Information");

  });


  it("should show validation when checkout information is empty", () => {

    cy.get('[data-test="continue"]').click();

    cy.get('[data-test="error"]').should("be.visible");

  });


  it("should complete checkout successfully", () => {

    cy.get('[data-test="firstName"]').type("Devy");
    cy.get('[data-test="lastName"]').type("Azkia");
    cy.get('[data-test="postalCode"]').type("40559");
    cy.get('[data-test="continue"]').click();
    cy.url().should("include", "/checkout-step-two.html");
    cy.get('[data-test="finish"]').click();
    cy.url().should("include", "/checkout-complete.html");

    cy.get(".complete-header").should("be.visible")
      .and("contain", "Thank you for your order");

  });

});