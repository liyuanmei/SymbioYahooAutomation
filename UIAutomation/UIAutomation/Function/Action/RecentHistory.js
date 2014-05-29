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