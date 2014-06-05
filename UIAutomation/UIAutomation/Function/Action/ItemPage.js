Action.tapGoodsOnList = function (i) {
    $.delay(sleep);
    var tapGoodsOnList = app.mainWindow().collectionViews()[0].cells()[i];
    method.checkInstanceExists(app.mainWindow().collectionViews()[0].cells()[i].tap);
    tapGoodsOnList.tap();
};

Action.tapSalesPromotionActivity = function () {
    $.delay(sleep);
    var tapSalesPromotionActivity = app.mainWindow().collectionViews()[0].cells()["Empty list"].tableViews()["Empty list"].cells()[0];
    method.checkInstanceExists(app.mainWindow().collectionViews()[0].cells()["Empty list"].tableViews()["Empty list"].cells()[0].tap);
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