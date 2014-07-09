Action.goElectronicCoupons = function () {
    $.delay(sleep);
    var goElectronicCoupons = app.mainWindow().tableViews()[0].cells()[5];
    method.checkInstanceExists(app.mainWindow().tableViews()[0].cells()[5]);
    goElectronicCoupons.tap();
};

Action.tapChooseOnElectronicCoupons = function () {
    $.delay(sleep);
    var tapChooseOnElectronicCoupons = app.mainWindow().scrollViews()[0].webViews()[0].elements().value();
    method.checkInstanceExists(app.mainWindow().scrollViews()[0].webViews()[0].elements().value());
    tapChooseOnElectronicCoupons.tap();
};

//6.12
Action.addToRecentBrowseOnce = function () {
    Action.goApparelCategoryWhenShoppingCart();
    Action.goCommodityTab();
    $.delay(10);
    obj.scrollDowns(1);

    //Tap item on list to navigate to item page.
    Action.tapItemOnProductListScreen();
    $.delay(sleep);

    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
};

Action.deleteRecordsRecently = function () {
    $.delay(sleep);
    app.mainWindow().collectionViews()[0].dragInsideWithOptions({startOffset:{x:0.98, y:0.28}, endOffset:{x:0.39, y:0.26}, duration:1.8});

    $.delay(sleep);
    var deleteRecordsRecently = app.mainWindow().collectionViews()[0].cells()[1].buttons()["刪除"];
    method.checkInstanceExists(app.mainWindow().collectionViews()[0].cells()[1].buttons()["刪除"]);
    deleteRecordsRecently.tap();
};