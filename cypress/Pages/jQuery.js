class JQueryUI {
  NAMES = {
    contentTest: "JQuery UI Menus",
    urlPath: "jqueryui/menu",
    externalLink: "JQuery UI Menus",
    href: "https://api.jqueryui.com/menu/",
    downloads: "Downloads",
    PDF: "PDF",
    CSV: "CSV",
    excel: "Excel",
    CSVFileName: "menu",
  };

  LOCATORS = {
    enabled: "#ui-id-3",
    download: "#ui-id-4",
    PDF: "#ui-id-5",
    CSV: "#ui-id-6",
    excel: "#ui-id-7",
    CSVFileUrl:
      "https://the-internet.herokuapp.com/download/jqueryui/menu/menu.csv",
    CSVFileFolder: "C:UsersTatevDownloads",
  };
}

export const jQueryUI = new JQueryUI();
