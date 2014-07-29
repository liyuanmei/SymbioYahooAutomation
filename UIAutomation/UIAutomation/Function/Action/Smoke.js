Action.tapGoToEditFavoriteButton = function  () {
    $.delay(sleep);
    var goToEditFavoriteButton = app.mainWindow().buttons()[varTestsGoToDiscoveryStreamName];
    method.checkInstanceExists(goToEditFavoriteButton);
    goToEditFavoriteButton.tap();
};

Action.tapStoreNameOnShoppingCart = function (i) {
    $.delay(sleep);
    var storeNameOnShoppingCart = app.mainWindow().scrollViews()[0].webViews()[0].links()[i].staticTexts()[0];
    method.checkInstanceExists(storeNameOnShoppingCart);
    storeNameOnShoppingCart.tap();
};

Action.pageShowShoppingCart = function () {
    $.delay(sleep);
    var pageShowShoppingCart = app.mainWindow().scrollViews()[0].webViews()[0].staticTexts()[0];
    method.checkInstanceExists(pageShowShoppingCart);
};

Action.tapStoreNameOnNavigationBar = function (){
    $.delay(sleep);
    var tapStoreName = app.navigationBar().buttons()[0];
    method.checkInstanceExists(app.navigationBar().buttons()[0]);
    tapStoreName.tap();
};

Action.slidingDeleteGoodsCollection = function () {
    $.delay(sleep);
    app.mainWindow().collectionViews()[0].dragInsideWithOptions({startOffset:{x:0.99, y:0.23}, endOffset:{x:0.59, y:0.23}, duration:2.2});

    $.delay(sleep);
    var tapDeleteGoodsCollection = app.mainWindow().collectionViews()[0].cells()[0].buttons()[varTestsShoppingCartDelete];
    method.checkInstanceExists(tapDeleteGoodsCollection);
    tapDeleteGoodsCollection.tap();
};