import { jQueryUI } from "../Pages/jQuery";

jQueryUI;
describe ("JQueryUI - Menu", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.contains(jQueryUI.NAMES.contentTest).click();
  });
  it ("Verify CSV download functionality", () => {
    const downloadFolder = jQueryUI.LOCATORS.CSVFileFolder;
    const fileName = jQueryUI.NAMES.CSVFileName;
    const fileUrl = jQueryUI.LOCATORS.CSVFileUrl;

    cy.get(jQueryUI.LOCATORS.enabled).trigger("mouseover").focus();
    cy.get(jQueryUI.LOCATORS.download)
      .should("contain", jQueryUI.NAMES.downloads)
      .trigger("mouseover")
      .focus();
    cy.get(jQueryUI.LOCATORS.CSV).should("contain", jQueryUI.NAMES.CSV).focus();
    cy.downloadFile(fileUrl, downloadFolder, fileName);
    cy.readFile(`${downloadFolder}/${fileName}`).then((content) => {
      expect(content).to.contain(
        "number of items,subtotal,tax,total\r\n4,4.00,0.13,4.52"
      );
    });
  });
});
