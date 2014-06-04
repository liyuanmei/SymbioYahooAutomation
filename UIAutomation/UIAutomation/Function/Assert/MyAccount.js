Assert.checkElectronicCouponsDisplay = function () {
    $.delay(sleep);
    var checkElectronicCouponsNameDisplay = app.mainWindow().scrollViews()[0].webViews()[0].staticTexts()[0];
    method.verifyEquals("電子折價券", checkElectronicCouponsNameDisplay.name());
};

