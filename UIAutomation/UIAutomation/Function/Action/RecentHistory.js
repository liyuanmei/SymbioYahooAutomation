Action.goRecentBrowse = function () {
    $.delay(sleep);
    var tableView = app.mainWindow().tableViews()[0];
    var goRecentBrowse = tableView.cells()[1];
    goRecentBrowse.tap();
};

Action.addToRecentBrowse = function () {
	for (var i = 0; i <22; i++) {
	Action.goApparelCategoryWhenShoppingCart();
    Action.goCommodityTab();
    $.delay(sleep);
    obj.scrollDowns(i);

    //Tap item on list to navigate to item page.
    Action.tapItemOnProductListScreen();
    $.delay(sleep);

    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
    }
};

Action.tapCleanSearchOnSidebr = function (i) {
    $.delay(sleep);
    var menuButton = app.navigationBar().buttons()[1];
    menuButton.tap();
    $.delay(sleep);
    
    var tableViews = app.windows()[0].tableViews()[0];
    var tableCells = tableViews.cells()["Settings"];
    tableCells.tap();
    $.delay(sleep);
    
    app.windows()[0].collectionViews()[0].cells()[0].switches()[0].setValue(i);
    
    var closeButton = app.windows()[0].navigationBar().buttons()[1];
    closeButton.tap();
    menuButton.tap();
};