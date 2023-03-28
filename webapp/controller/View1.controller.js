sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,MessageBox,) {
        "use strict";

        return Controller.extend("ui5training.controller.View1", {
            onInit: function () {
                
                
            },
            onListItemPress1: function (oEvent) {
                MessageBox.show("Product Name:" + this.getView().byId("list1").getTitle() + "\n" 
                + "Price: " + this.getView().byId("list1").getNumber() + "\n"
                + "Status: " + this.getView().byId("p1").getText() + "\n"
                + "Description: "+ this.getView().byId("desc1").getText(),{
                    title:"Information"
                });
            },

            onListItemPress2: function (oEvent) {
                MessageBox.show("Product Name:" + this.getView().byId("list2").getTitle() + "\n" 
                + "Price: " + this.getView().byId("list2").getNumber() + "\n"
                + "Status: " + this.getView().byId("p2").getText() + "\n"
                + "Description: "+ this.getView().byId("desc2").getText(),{
                    title:"Information"
                });
            },
            
            onListItemPress3: function (oEvent) {
                MessageBox.show("Product Name:" + this.getView().byId("list3").getTitle() + "\n" 
                + "Price: " + this.getView().byId("list3").getNumber() + "\n"
                + "Status: " + this.getView().byId("p3").getText() + "\n"
                + "Description: "+ this.getView().byId("desc3").getText(),{
                    title:"Information"
                });
            },

            onListItemPress4: function (oEvent) {
                MessageBox.show("Product Name:" + this.getView().byId("list4").getTitle() + "\n" 
                + "Price: " + this.getView().byId("list4").getNumber() + "\n"
                + "Status: " + this.getView().byId("p4").getText() + "\n"
                + "Description: "+ this.getView().byId("desc4").getText(),{
                    title:"Information"
                });
            },

            onListItemPress5: function (oEvent) {
                MessageBox.show("Product Name:" + this.getView().byId("list5").getTitle() + "\n" 
                + "Price: " + this.getView().byId("list5").getNumber() + "\n"
                + "Status: " + this.getView().byId("p5").getText() + "\n"
                + "Description: "+ this.getView().byId("desc5").getText(),{
                    title:"Information"
                });
            },
    
        });
    });
