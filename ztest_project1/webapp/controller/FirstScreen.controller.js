sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("ztestproject1.controller.FirstScreen", {
        onInit() {
        },
        onPrintButtonPress() {
            this.getView().byId("idNavContainer").to(this.getView().byId("idSecondPage"), "flip");
        },
    });
});