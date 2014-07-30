Assert.checkSalesPromotionActivity = function () {
    $.delay(sleep);
    var checkSalesPromotionActivity = app.mainWindow().collectionViews()[0].cells()[0].staticTexts()[2];
    method.verifyEquals(varTestsContent,checkSalesPromotionActivity.name());
};

Assert.checkPaymentAndDelivery = function () {
    $.delay(sleep);
    var version = target.systemVersion();
    version = version.substring(0, version.lastIndexOf("."));
    if(version == "6.1") {
        var delivery= app.mainWindow().collectionViews()[0].staticTexts()[1].name();
        var payment = app.mainWindow().collectionViews()[0].staticTexts()[0].name();
        method.verifyEquals(varTestsDeliveryWays, delivery);
        method.verifyEquals(varTestsPaymentWays, payment);
    }
    else{
        var delivery= app.mainWindow().collectionViews()[0].staticTexts()[0].name();
        var payment = app.mainWindow().collectionViews()[0].staticTexts()[1].name();
        method.verifyEquals(varTestsDeliveryWays, delivery);
        method.verifyEquals(varTestsPaymentWays, payment);
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
    assertNotEquals(varTestsNoInputTheSearchBoxgWhengoCategoryWhenStore,checkButtonsNotExistOnStoreSearchPage)
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
    method.verifyEquals(1, mail.isEnabled());
    $.delay(sleep);
    method.verifyEquals(1, fackBook.isEnabled()); 
};

Assert.checkTheGrayOptionsIsNotTaped = function () {
    $.delay(sleep);
    var version = target.systemVersion();
    version = version.substring(0, version.lastIndexOf("."));
    if(version == "6.1") {
        var tapConfirmOnShoppingCart = app.navigationBar().buttons()[1];
        assertNotEquals(varTestConfirmbuttonExistOnNavigationBarInAdvancedBar,tapConfirmOnShoppingCart);
    }
    else{
        var tapConfirmOnShoppingCart = app.navigationBar().buttons()[2];
        assertNotEquals(varTestConfirmbuttonExistOnNavigationBarInAdvancedBar,tapConfirmOnShoppingCart);
    }
};
        
Assert.checkSalesPromotionActivityOnStore = function (j,i) {
    $.delay(sleep);
    var checkSalesPromotionActivity = app.mainWindow().collectionViews()[0].cells()[j].staticTexts()[i];
    method.verifyEquals(varTestsContent,checkSalesPromotionActivity.name());
};

Assert.checkLinkCellsDisplay = function () {
    $.delay(sleep);
    method.verifyTrue(app.mainWindow().collectionViews()[0].cells().length>1);
};