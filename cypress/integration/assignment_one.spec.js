describe("Cypress 101 Test Assignment One,LambdaTest ", () => {
  it("Drag & Drop Slider", () => {
    cy.visit("/drag-drop-range-sliders-demo");
    cy.log("User Drag the Slider to 95");
    cy.get("input.sp__range[value='15']").invoke("val", "95").trigger("change");
    cy.log('Assert the Current State befor change:"15"');
    cy.get("#rangeSuccess").should("have.text", "15");
    cy.get("#rangeSuccess").invoke("val", "95").trigger("change");
    cy.log('Assert the Current State after change:"95"');
    cy.get("#rangeSuccess").should("have.text", "95");
  });
});
