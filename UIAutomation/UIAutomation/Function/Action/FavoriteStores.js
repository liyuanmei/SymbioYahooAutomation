Action.tapStoreNameLinkOnFavoriteStores = function (){
    $.delay(sleep);
    var tapStoreName = app.navigationBar().buttons()[0];
    method.checkInstanceExists(app.navigationBar().buttons()[0]);
    tapStoreName.tap();
    $.delay(5);

    var tapLink = app.mainWindow().tableViews()[0].cells()[1].staticTexts()[0];
    method.checkInstanceExists(app.mainWindow().tableViews()[0].cells()[1].staticTexts()[0]);
    tapLink.tap();
};