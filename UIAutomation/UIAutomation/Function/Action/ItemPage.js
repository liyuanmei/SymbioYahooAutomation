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