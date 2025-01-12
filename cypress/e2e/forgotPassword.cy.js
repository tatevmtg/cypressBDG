import { forgotPassword } from "../Pages/forgotPassword";
import { uniqueEmails } from "../utils/function";

forgotPassword;
const emailName = uniqueEmails(10);
let valueName = "";

describe("Forgot Password", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.contains("Forgot Password").click();
  });
  it("Verify the existence of Forgot password page", () => {
    cy.url().should("include", "forgot_password");
    cy.get(".example").should("contain", "Forgot Password");
    cy.get(".row").find("label").should("have.text", "E-mail");
    cy.get("#email").should("be.empty");
    cy.get("#form_submit").should(
      "have.css",
      "background-color",
      "rgb(43, 166, 203)",
      "font-style: italic"
    );
  });
  it("Verify unique emails input", () => {
    cy.get("#email").type(emailName);
    cy.get("#email")
      .invoke("val")
      .then((val) => {
        valueName = val;
      });
    cy.then(() => [expect(emailName).to.eq(valueName)]);
  });
  it.only("Verify clicking Retrieve password results internat server error", () => {
    cy.get("#form_submit").click();
    cy.get("h1").should("contain", "Internal Server Error");
  });
});
