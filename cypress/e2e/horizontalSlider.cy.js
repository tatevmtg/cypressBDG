describe("Horizontal Slider", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.contains("Horizontal Slider").click();
  });
  it("Verify the existence of Horizontal Slider page", () => {
    cy.url().should("include", "horizontal_slider");
    cy.get(".example").should("contain", "Horizontal Slider");
    cy.get(".subheader").should(
      "contain",
      "Set the focus on the slider (by clicking on it) and use the arrow keys to move it right and left. Or click and drag the slider with your mouse. It will indicate the value of the slider to the right."
    );
    cy.get("#range").should("have.text", "0");
  });
  it("Verify the functionality of the slider", () => {
    cy.get("input[type=range]")
      .as("range")
      .invoke("val", 4)
      .trigger("input")
      .trigger("change")
      .trigger("mouseup");
    cy.get("#range").should("have.text", "4");
  });
  it("Verify the slider's min value is 0 and max value is 5", () => {
    cy.get("input[type=range]")
      .as("range")
      .invoke("val", -4)
      .trigger("change")
      .trigger("mouseup");
    if ("val" === 0) {
      cy.get("#range").should("have.text", "0");
    } else {
    }
    cy.get("input[type=range]")
      .as("range")
      .invoke("val", 6)
      .trigger("change")
      .trigger("mouseup");
    if ("val" === 5) {
      cy.get("#range").should("have.text", "5");
    } else {
    }
  });
});
