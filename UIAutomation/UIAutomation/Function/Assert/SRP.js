Assert.checkGoodsAndStoreTabDisplay = function  () {
    $.delay(sleep);
    method.verifyEquals("商品",app.mainWindow().collectionViews()[0].cells()[0].buttons()[0].name());
    method.verifyEquals("商店",app.mainWindow().collectionViews()[0].cells()[0].buttons()[1].name());
};

Assert.checkButtonOnList = function (sKey) {
    $.delay(sleep);
    method.verifyEquals(sKey,app.mainWindow().collectionViews()[0].cells()[1].buttons()[0].name());
};

Assert.tapTabCheckSListDisplay = function () {
    $.delay(sleep);
    method.verifyTrue(app.mainWindow().collectionViews()[0].cells().length<20);
};

Assert.elementsOrderInSortTabWhenSRP = function () {
    $.delay(sleep);

    var relevanceValue = app.mainWindow().tableViews()[0].cells()[0].staticTexts()[0].name();
    var latestItems = app.mainWindow().tableViews()[0].cells()[1].staticTexts()[0].name();
    var priceLowToHigh = app.mainWindow().tableViews()[0].cells()[2].staticTexts()[0].name();
    var priceHighToLow = app.mainWindow().tableViews()[0].cells()[3].staticTexts()[0].name();
    
    method.verifyEquals("相關度", relevanceValue);
    method.verifyEquals("最新上架", latestItems);
    method.verifyEquals("價錢低到高", priceLowToHigh);
    method.verifyEquals("價錢高到低", priceHighToLow);
};