Action.tapGoToEditFavoriteButton = function  () {
    $.delay(sleep);
    var goToEditFavoriteButton = app.mainWindow().buttons()["前往最新動態"];
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