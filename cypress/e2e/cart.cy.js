describe("Shopping Cart", () => {

  beforeEach(() => {
    cy.login("standard_user", "secret_sauce");
});


  it("should add product to cart", () => {

    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    
    cy.get(".shopping_cart_badge").should("have.text", "1");

  });


  it("should remove product from cart", () => {

    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="remove-sauce-labs-backpack"]').click();

    cy.get(".shopping_cart_badge").should("not.exist");

  });


  it("should display selected product in cart", () => {

    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get(".shopping_cart_link").click();
    cy.url().should("include", "/cart.html");

    cy.get(".inventory_item_name").should("contain", "Sauce Labs Backpack");

  });

});