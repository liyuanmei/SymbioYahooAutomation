//7.1
//three
test("[1959928] Verify user view promotion item link." , function () {
    target.logDeviceInfo();
    Action.cleanSearches();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("Messa 米莎");
    Action.tapKeyboardSearch();
    $.delay(sleep);

    Action.tapStoreTab();
    $.delay(10);

    Action.tapSearchResultOfStore();
    $.delay(sleep);

    Action.tapStoreNameLinkOnFavoriteStores();
    $.delay(15);

    Assert.checkSalesPromotionActivityOnStore(1,2);

    //check exist links
    Assert.checkLinkCellsDisplay();

    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
    Action.tapButtonOnTabBar(0);
});