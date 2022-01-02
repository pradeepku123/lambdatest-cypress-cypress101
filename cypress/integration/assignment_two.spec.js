describe("Cypress 101 Assignment One", () => {
  it("Cypress Samsung note 9 Axe Test", () => {
    cy.log("Visit to the Application");
    cy.visit("/");
    cy.log("Set the View Port");
    cy.viewport("samsung-note9");
    cy.contains("Input Forms").click();
    cy.contains("Input Form Submit").click();
    cy.get("[name='name']").type("test_name");
    cy.get("[name='email']").type("test_email@gmail.com");
    cy.get("[name='password']").type("password@123");
    cy.get("[name='company']").type("test_company");

    cy.get("[name='website']").type("www.test_Website_com");
    cy.get("[name='city']").type("test_city");
    cy.get("[name='address_line1']").type("test_address_line1");
    cy.get("[name='address_line2']").type("test_address_line2");
    cy.get("[id='inputState']").type("test_state");
    cy.get("[name='zip']").type("213234");
    cy.get("button[type='submit']").click();
    cy.get("p.success-msg").should(
      "have.text",
      "Thanks for contacting us, we will get back to you shortly."
    );
  });
});
