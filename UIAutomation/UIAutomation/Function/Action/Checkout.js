Action.tapConvenienceStorePayment = function () {
    $.delay(sleep);
    var convenienceStorePayment = app.mainWindow().scrollViews()[0].webViews()[0].staticTexts()["全家繳費不取貨"];
    method.checkInstanceExists(app.mainWindow().scrollViews()[0].webViews()[0].staticTexts()["全家繳費不取貨"]);
    convenienceStorePayment.tap();
};

Action.tapWheelsWhenCheckOut = function (){
    $.delay(sleep);
    app.mainWindow().scrollViews()[0].webViews()[0].elements()[31].tapWithOptions({tapOffset:{x:0.65, y:0.17}});
};
