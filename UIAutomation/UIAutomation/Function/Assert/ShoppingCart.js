Assert.ShoppingCartDisplayCorrectly = function  () {
    $.delay(5);
    method.verifyTrue(app.mainWindow().tableViews()[0].cells().length<1);
};

Assert.checkbutButtonShoppingCart = function () {
    $.delay(5);
    method.verifyEquals(varTestsTheOrderPageElements1,app.mainWindow().scrollViews()[0].webViews()[0].staticTexts()[0].name());
    method.verifyEquals(varTestsFillTheInformationOnShoppingCartPage,app.mainWindow().scrollViews()[0].webViews()[0].staticTexts()[1].name());
    method.verifyEquals(varTestsToCompLeteTheOrderOnShoppingCartPage,app.mainWindow().scrollViews()[0].webViews()[0].staticTexts()[2].name());
};

Assert.textExistOnShoppingCart = function (elements) {
    $.delay(sleep);
    if (elements.isVisible() == true) {
    UIALogger.logMessage(elements.name() + " test exists on screen.");
    }
    else {
    UIALogger.logMessage(elements.name() + " Cannot found test.");
    }
    return true;
};

Assert.checkCollectionScreenCorrect = function(){
    $.delay(5);
    var version = target.systemVersion();
    version = version.substring(0,1);
    if(version == "6") {
        method.verifyEquals(varTestsCollectionScreenCorrectLike,app.mainWindow().collectionViews()[0].staticTexts()[1].name());
        method.verifyEquals(varTestsCollectionScreenCorrectAbleLike,app.mainWindow().collectionViews()[0].staticTexts()[2].name());
    }
    else{
        method.verifyEquals(varTestsCollectionScreenCorrectLike,app.mainWindow().collectionViews()[0].staticTexts()[0].name());
        method.verifyEquals(varTestsCollectionScreenCorrectAbleLike,app.mainWindow().collectionViews()[0].staticTexts()[1].name());
    }
};

Assert.checkLogInFirstOnFavoritePage = function(){
    $.delay(sleep);
    var clogInFirstOnFavoritePage = app.windows()[0].collectionViews()[0].cells()[0].buttons()[0].name();
    method.verifyEquals(varTestsLogInFirstOnFavoritePage, clogInFirstOnFavoritePage);
};

//6.30
Assert.tapSettleAccountsOnShopping = function (i,j) {
    $.delay(sleep);
    var tapSettleAccountsOnShopping = app.mainWindow().scrollViews()[0].webViews()[0].staticTexts()[i].name();
    method.verifyEquals(j,tapSettleAccountsOnShopping);
};

Assert.checkShoppingCartInformationAndPurchaseInformationDisplay = function (i,j) {
    $.delay(sleep);
    var checkShoppingCartInformationAndPurchaseInformationDisplay = app.mainWindow().scrollViews()[0].webViews()[0].staticTexts()[i].name();
    method.verifyEquals(j,checkShoppingCartInformationAndPurchaseInformationDisplay);
};

Assert.checkGoodsExist = function () {
    $.delay(sleep);
    method.verifyTrue(app.mainWindow().collectionViews()[0].cells().length<=2);
};

Assert.checkShoppingCartListExistGoodsNum = function (i) {
    $.delay(sleep);
    method.verifyTrue(app.mainWindow().collectionViews()[0].cells().length<i);
};