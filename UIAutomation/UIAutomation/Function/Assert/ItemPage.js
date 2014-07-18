Assert.checkSalesPromotionActivity = function () {
    $.delay(sleep);
    var checkSalesPromotionActivity = app.mainWindow().collectionViews()[0].cells()[0].staticTexts()[2];
    method.verifyEquals("內容",checkSalesPromotionActivity.name());
};

Assert.checkPaymentAndDelivery = function () {
    $.delay(sleep);
    var version = target.systemVersion();
    version = version.substring(0, version.lastIndexOf("."));
    if(version == "6.1") {
        var delivery= app.mainWindow().collectionViews()[0].staticTexts()[1].name();
        var payment = app.mainWindow().collectionViews()[0].staticTexts()[0].name();
        method.verifyEquals("交貨方式", delivery);
        method.verifyEquals("付款方式", payment);
    }
    else{
        var delivery= app.mainWindow().collectionViews()[0].staticTexts()[0].name();
        var payment = app.mainWindow().collectionViews()[0].staticTexts()[1].name();
        method.verifyEquals("交貨方式", delivery);
        method.verifyEquals("付款方式", payment);
    }
};

Assert.checkClassificationButtonIsEnabled = function (i) {
    $.delay(sleep);
    var version = target.systemVersion();
    version = version.substring(0, version.lastIndexOf("."));
    if(version == "6.1") {
        var classificationButtonIsEnabled = app.mainWindow().collectionViews()[0].cells()[1].segmentedControls()[0].buttons()[i];
        method.verifyEquals(1, classificationButtonIsEnabled.isEnabled());
    }
    else{
        var classificationButtonIsEnabled = app.mainWindow().collectionViews()[0].cells()[1].buttons()[i];
        method.verifyEquals(1, classificationButtonIsEnabled.isEnabled());
    }
};

//6.9
Assert.checkButtonsNotExistOnStoreSearchPage = function (i) {
    $.delay(sleep);
    var checkButtonsNotExistOnStoreSearchPage = app.mainWindow().collectionViews()[0].buttons()[i].name();
    assertNotEquals("搜尋全部商店",checkButtonsNotExistOnStoreSearchPage)
}

//6.30
Assert.checkClassificationShowListOnItemPage = function () {
    $.delay(5);
    method.verifyTrue(app.mainWindow().collectionViews()[0].cells().length>2);
};

Assert.checkShareButtonShowOnItemPage = function () {
    $.delay(5);
    var mail = app.mainWindow().scrollViews()[0].buttons()[0];
    var fackBook = app.mainWindow().scrollViews()[0].buttons()[1];
    method.verifyEquals("郵件", mail.name());
    $.delay(sleep);
    method.verifyEquals("Facebook", fackBook.name()); 
};

Assert.checkTheGrayOptionsIsNotTaped = function () {
    $.delay(sleep);
    var version = target.systemVersion();
    version = version.substring(0, version.lastIndexOf("."));
    if(version == "6.1") {
        var tapConfirmOnShoppingCart = app.navigationBar().buttons()[1];
        assertNotEquals("確定",tapConfirmOnShoppingCart);
    }
    else{
        var tapConfirmOnShoppingCart = app.navigationBar().buttons()[2];
        assertNotEquals("確定",tapConfirmOnShoppingCart);
    }
};
        
Assert.checkSalesPromotionActivityOnStore = function (j,i) {
    $.delay(sleep);
    var checkSalesPromotionActivity = app.mainWindow().collectionViews()[0].cells()[j].staticTexts()[i];
    method.verifyEquals("內容",checkSalesPromotionActivity.name());
};

Assert.checkLinkCellsDisplay = function () {
    $.delay(sleep);
    method.verifyTrue(app.mainWindow().collectionViews()[0].cells().length>1);
};