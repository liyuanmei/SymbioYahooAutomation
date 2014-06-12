Assert.checkElectronicCouponsDisplay = function (stext) {
    $.delay(sleep);
    var checkElectronicCouponsNameDisplay = app.mainWindow().scrollViews()[0].webViews()[0].staticTexts()[0];
    method.verifyEquals(stext, checkElectronicCouponsNameDisplay.name());
};
//
Assert.checkSuperGiftPoints = function (i,j) {
    $.delay(sleep);
    var checkSuperGiftPoints = app.mainWindow().staticTexts()[j];
    method.verifyEquals(i, checkSuperGiftPoints.name());
};