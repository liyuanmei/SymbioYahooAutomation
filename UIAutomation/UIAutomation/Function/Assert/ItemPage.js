Assert.checkSalesPromotionActivity = function () {
    $.delay(sleep);
    var checkSalesPromotionActivity = app.mainWindow().collectionViews()[0].cells()[0].staticTexts()[2];
    method.verifyEquals("內容",checkSalesPromotionActivity.name());
};

