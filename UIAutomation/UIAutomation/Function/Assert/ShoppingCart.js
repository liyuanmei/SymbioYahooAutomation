Assert.ShoppingCartDisplayCorrectly = function  () {
    $.delay(5);
    method.verifyTrue(app.mainWindow().tableViews()[0].cells().length<1);
};

Assert.checkbutButtonShoppingCart = function () {
    $.delay(5);
    method.verifyEquals("本店購物車",app.mainWindow().scrollViews()[0].webViews()[0].staticTexts()[0].name());
    method.verifyEquals("填寫資料",app.mainWindow().scrollViews()[0].webViews()[0].staticTexts()[1].name());
    method.verifyEquals("完成訂購",app.mainWindow().scrollViews()[0].webViews()[0].staticTexts()[2].name());
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