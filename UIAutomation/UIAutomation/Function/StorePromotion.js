//7.1
//three
test("[1959928] Verify user view promotion item link." , function () {
    target.logDeviceInfo();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("預購");
    Action.tapKeyboardSearch();
    Action.pageShow();

    //Tap item on list to navigate to item page.
    Action.tapItemOnProductListScreen();
    $.delay(sleep);
    target.logElementTree();

    var purchase = app.mainWindow().collectionViews()[0].cells()[1].staticTexts()[2];

    Assert.elementsValueShouldContainText(purchase,"預購");

    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
    Action.tapButtonOnTabBar(0);
});