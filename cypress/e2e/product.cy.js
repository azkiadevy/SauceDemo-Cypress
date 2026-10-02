describe("Product", () => {

  beforeEach(() => {
    cy.login("standard_user", "secret_sauce");
  });


  it("should display product listing", () => {

    cy.get(".inventory_item").should("have.length", 6);

  });


  it("should display product information", () => {

    cy.get(".inventory_item").first()
      .within(() => {
        cy.get(".inventory_item_name").should("be.visible");
        cy.get(".inventory_item_price").should("be.visible");
        cy.get(".inventory_item_img").should("be.visible");

      });

  });


  it("should sort products by price low to high", () => {

    cy.get(".product_sort_container").select("lohi");

    cy.get(".inventory_item_price")
      .then(($prices) => {

        const prices = [...$prices].map((element) =>
          parseFloat(
            element.innerText.replace("$", "")
          )
        );

        const sortedPrices = [...prices].sort(
          (a, b) => a - b
        );

        expect(prices).to.deep.equal(sortedPrices);

      });

  });


  it("should sort products by name A to Z", () => {

    cy.get(".product_sort_container")
      .select("az");

    cy.get(".inventory_item_name")
      .then(($products) => {

        const names = [...$products].map(
          (element) => element.innerText
        );

        const sortedNames = [...names].sort();

        expect(names).to.deep.equal(sortedNames);

      });

  });


  it("should open product detail", () => {

    cy.get(".inventory_item_name").first().click();
    cy.url().should("include", "/inventory-item.html");
    cy.get(".inventory_details_name").should("be.visible");

  });

});