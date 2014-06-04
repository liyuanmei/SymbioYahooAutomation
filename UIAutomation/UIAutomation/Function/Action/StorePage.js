Action.tapStoreLogoWhenStorePage = function () {
    $.delay(sleep);
    var tapStoreLogoWhenStorePage = app.mainWindow().scrollViews()[0].webViews()[0].links()[0];
    method.checkInstanceExists(app.mainWindow().scrollViews()[0].webViews()[0].links()[0].tap);
    tapStoreLogoWhenStorePage.tap();
};