Action.tapConvenienceStorePayment = function () {
    $.delay(sleep);
    var convenienceStorePayment = app.mainWindow().scrollViews()[0].webViews()[0].staticTexts()[varTestsConvenienceStorePayment];
    method.checkInstanceExists(app.mainWindow().scrollViews()[0].webViews()[0].staticTexts()[varTestsConvenienceStorePayment]);
    convenienceStorePayment.tap();
};

Action.tapWheelsWhenCheckOut = function (){
    $.delay(sleep);
    app.mainWindow().scrollViews()[0].webViews()[0].elements()[31].tapWithOptions({tapOffset:{x:0.65, y:0.17}});
};

Action.tapFamilyPaymentNotPickup = function() {
    $.delay(sleep);
    app.mainWindow().scrollViews()[0].webViews()[0].elements()[64].tapWithOptions({tapOffset:{x:0.03, y:0.31}});
};