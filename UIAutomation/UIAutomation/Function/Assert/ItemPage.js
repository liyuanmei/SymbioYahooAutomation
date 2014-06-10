Assert.checkSalesPromotionActivity = function () {
    $.delay(sleep);
    var checkSalesPromotionActivity = app.mainWindow().collectionViews()[0].cells()[0].staticTexts()[2];
    method.verifyEquals("內容",checkSalesPromotionActivity.name());
};

Assert.checkPaymentAndDelivery = function () {
    $.delay(sleep);

    var delivery= app.mainWindow().collectionViews()[0].staticTexts()[0].name();
    var payment = app.mainWindow().collectionViews()[0].staticTexts()[1].name();
    method.verifyEquals("交貨方式", delivery);
    method.verifyEquals("付款方式", payment);
};

Assert.checkClassificationButtonIsEnabled = function (i) {
    $.delay(sleep);
    var classificationButtonIsEnabled = app.mainWindow().collectionViews()[0].cells()[1].buttons()[i];
    method.verifyEquals(1, classificationButtonIsEnabled.isEnabled());
};

//6.9
Assert.checkButtonsNotExistOnStoreSearchPage = function (i) {
    $.delay(sleep);
    var checkButtonsNotExistOnStoreSearchPage = app.mainWindow().collectionViews()[0].buttons()[i].name();
    assertNotEquals("搜尋全部商店",checkButtonsNotExistOnStoreSearchPage)
}
