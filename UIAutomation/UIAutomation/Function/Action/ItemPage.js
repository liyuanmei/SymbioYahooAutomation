Action.tapGoodsOnList = function (i) {
    $.delay(sleep);
    var tapGoodsOnList = app.mainWindow().collectionViews()[0].cells()[i];
    method.checkInstanceExists(app.mainWindow().collectionViews()[0].cells()[i].tap);
    tapGoodsOnList.tap();
};

Action.tapSalesPromotionActivity = function () {
    $.delay(sleep);
    var tapSalesPromotionActivity = app.mainWindow().collectionViews()[0].cells()["Empty list"].tableViews()["Empty list"].cells()["促銷活動, 2"];
    method.checkInstanceExists(app.mainWindow().collectionViews()[0].cells()["Empty list"].tableViews()["Empty list"].cells()["促銷活動, 2"].tap);
    tapSalesPromotionActivity.tap();
};

Action.tapSale = function () {
    var sale = app.mainWindow().collectionViews()[0].cells()["Empty list"].tableViews()["Empty list"].cells()[0];
    method.checkInstanceExists(app.mainWindow().collectionViews()[0].cells()["Empty list"].tableViews()["Empty list"].cells()[0].tap);
    sale.tap();
};

Action.tapCancelOnShoppingCart = function () {
    $.delay(sleep);
    var tapConfirmOnShoppingCart = app.navigationBar().buttons()[0];
    method.checkInstanceExists(app.navigationBar().buttons()[0].tap);
    tapConfirmOnShoppingCart.tap();
};

Action.tapItemOnCategoryScreenWhenItemPage = function (itemName) {
    $.delay(sleep);
    var categoryItem = app.mainWindow().tableViews()[0].cells()[itemName];

    method.checkInstanceExists(app.mainWindow().tableViews()[0].cells()[itemName].tap);
    categoryItem.tap();
};

//6.9
Action.addToShoppingCartWhenItemPage = function () {
    $.delay(sleep);
    var addToShoppingCart = app.mainWindow().collectionViews()[0].cells()[2].buttons()[1];
    method.checkInstanceExists(app.mainWindow().collectionViews()[0].cells()[2].buttons()[1].tap);
    addToShoppingCart.tap();
};

Action.tapPaymentOnProductPage = function () {
    //$.delay(sleep);
    //var slideTheScreen = app.mainWindow().collectionViews()[0].dragInsideWithOptions({startOffset:{x:0.51, y:0.86}, endOffset:{x:0.98, y:0.04}, duration:1.7});
    $.delay(10);
    var paymentOnProductPage = app.mainWindow().collectionViews()[0].cells()["Empty list"].tableViews()["Empty list"].cells()["付款及交貨方式"];
    method.checkInstanceExists(app.mainWindow().collectionViews()[0].cells()["Empty list"].tableViews()["Empty list"].cells()["付款及交貨方式"].tap);
    paymentOnProductPage.tap();
};

Action.tapShoppingMethodsOnProductPage = function () {
    //$.delay(sleep);
    //var slideTheScreen = app.mainWindow().collectionViews()[0].dragInsideWithOptions({startOffset:{x:0.51, y:0.86}, endOffset:{x:0.98, y:0.04}, duration:1.7});
    $.delay(10);
    var shoppingMethodsOnProductPage = app.mainWindow().collectionViews()[0].cells()["Empty list"].tableViews()["Empty list"].cells()["購物須知"];
    method.checkInstanceExists(app.mainWindow().collectionViews()[0].cells()["Empty list"].tableViews()["Empty list"].cells()["購物須知"].tap);
    shoppingMethodsOnProductPage.tap();
};

Action.tapAllProductOfThisStoreOnProductPage = function () {
    //$.delay(sleep);
    //var slideTheScreen = app.mainWindow().collectionViews()[0].dragInsideWithOptions({startOffset:{x:0.51, y:0.86}, endOffset:{x:0.98, y:0.04}, duration:1.7});
    $.delay(10);
    var allProductOfThisStoreOnProductPage = app.mainWindow().collectionViews()[0].cells()["Empty list"].tableViews()["Empty list"].cells()["看本店家全部商品"];
    method.checkInstanceExists(app.mainWindow().collectionViews()[0].cells()["Empty list"].tableViews()["Empty list"].cells()["看本店家全部商品"].tap);
    allProductOfThisStoreOnProductPage.tap();
};

Action.tapClassificationButtonWhenItemPage = function () {
    $.delay(sleep);
    var tapGoodsButton = app.mainWindow().collectionViews()[0].cells()[1].buttons()[0];
    method.checkInstanceExists(app.mainWindow().collectionViews()[0].cells()[1].buttons()[0].tap);
    tapGoodsButton.tap();
};

Action.tapSearchResultOfStore = function () {
    $.delay(sleep);
    var searchResultOfStore = app.mainWindow().collectionViews()[0].cells()[1].staticTexts()[0];
    method.checkInstanceExists(app.mainWindow().collectionViews()[0].cells()[1].staticTexts()[0].tap);
    searchResultOfStore.tap();
};