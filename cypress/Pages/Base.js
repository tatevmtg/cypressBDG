class BasePage {
    NAMES = {
        abTesting:"A/B Testing",
        addOrRemoveElements: "Add/Remove Elements",
        basicAuth: "Basic Auth",
        brokenImages: "Broken Images",
        challengingDOM: "Challenging DOM",
        checkboxes: "Checkboxes",
        contextMenu: "Context Menu",
        digestAuthentication: "Digest Authentication",
        disappearingElements: "Disappearing Elements",
        dragAndDrop: "Drag and Drop",
        dropdown: "Dropdown",
        dynamicContent: "Dynamic Content",
        dynamicControls: "Dynamic Controls",
        dynamicLoading: "Dynamic Loading",
        entryAd: "Entry Ad",
        exitIntent: "Exit Intent",
        fileDownload: "File Download",
        fileUpload: "File Upload",
        floatingMenu: "Floating Menu",
        forgotPassword: "Forgot Password",
        formAuthentication: "Form Authentication",
        frames: "Frames",
        geolocation: "Geolocation",
        horizontalSlider: "Horizontal Slider",
        hovers: "Hovers",
        infiniteScroll: "Infinite Scroll",
        inputs: "Inputs",
        jQueryUIMenus: "JQuery UI Menus",
        javaScriptAlerts: "JavaScript Alerts",
        javaScriptOnloadEventError: "JavaScript onload event error",
        keyPresses: "Key Presses",
        largeAndDeepDOM: "Large & Deep DOM",
        multipleWindows: "Multiple Windows",
        nestedFrames: "Nested Frames",
        notificationMessages: "Notification Messages",
        redirectLink: "Redirect Link",
        secureFileDownload: "Secure File Download",
        shadowDOM: "Shadow DOM",
        shiftingContent: "Shifting Content",
        slowResources: "Slow Resources",
        sortableDataTables: "Sortable Data Tables",
        statusCodes: "Status Codes",
        typos: "Typos",
        WYSIWYGEditor: "WYSIWYG Editor"
    }

    LOCATORS={
        content:'#content'
    }
    getTitlesRow(){
        return cy.get(".example")
    }
}

export const basePage=new BasePage;