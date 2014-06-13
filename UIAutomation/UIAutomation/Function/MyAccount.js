test("[1959920] Verify the number of e-coupon can count correctly", function () {
    Action.cleanSearches();
    $.delay(sleep);

    Action.tapAddAccountOnLogin("mobileappstore1", "A1234qwer");

    Action.tapButtonOnTabBar(4);
    $.delay(sleep);

    //go to electronic coupons.
    Action.goElectronicCoupons();
    $.delay(10);

    Assert.checkElectronicCouponsDisplay("電子折價券");

    //Log out and remove user login history
    Action.tapButtonOnTabBar(4);
    Action.doUserLogout();

    //Action.tapButtonOnTabBar(4);
    //Action.removeLoginHistory("mobileappstore1");
    $.delay(sleep);

    Action.tapButtonOnTabBar(0);
});

//6.13
test("[1977495] Verify Super gift points", function () {
    Action.cleanSearches();
    $.delay(sleep);

    Action.tapAddAccountOnLogin("mobileappstore1", "A1234qwer");

    Action.tapButtonOnTabBar(4);
    $.delay(sleep);

    target.logElementTree();

    Assert.checkSuperGiftPoints("超贈點 · 可用 0 、待生效 0",2);

    //Log out and remove user login history
    Action.tapButtonOnTabBar(4);
    Action.doUserLogout();   
    Action.tapButtonOnTabBar(0);
});

test("[1959899] Verify the numbers of collected items can be increasing/decreasing in my account page", function () {
    //login the app
    Action.cleanSearches();
    Action.tapAddAccountOnLogin("mobileappstore3", "A1234qwer");

    //add favorite item
    $.delay(sleep);
    Action.tapButtonOnTabBar(2);
    Action.tapItemOnCategoryScreenWhenItemPage(0);
    Action.goCommodityTab();
    $.delay(sleep);
    Action.tapItemOnProductListScreen();
    $.delay(5);

    //target.logElementTree();
    Action.tapFavoritesIcon(1);
    var firstStoreName = app.mainWindow().collectionViews()[0].cells()[1].staticTexts()[0].name();
    
    //go user collection page
    Action.tapButtonOnTabBar(4);
    $.delay(sleep);

    Action.tapButtonOnMyUser(3);
    
    Assert.checkStoreName(firstStoreName);
    $.delay(sleep);
    
    Action.tapCollectionList();
    $.delay(sleep);

    Action.tapFavoritesIcon(1);
    Action.tapButtonOnTabBar(4);
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(2);

    //Log out and remove user login history
    Action.tapButtonOnTabBar(4);
    Action.doUserLogout();

    //Action.tapButtonOnTabBar(4);
    //Action.removeLoginHistory("mobileappstore3");
});

test("[1977522] verify recent history from My Account", function () {
    Action.cleanSearches();
    $.delay(sleep);

    Action.tapAddAccountOnLogin("mobileappstore1", "A1234qwer");

    Action.tapButtonOnTabBar(4);
    $.delay(sleep);

    //go to order query called browse recently
    Action.tapButtonOnMyUser(2);
    $.delay(5);

    Assert.checkReturnPageDisplay("訂單查詢");

    Action.tapButtonOnTabBar(4);
    Action.tapButtonOnMyUser(1);
    $.delay(5);

    Assert.tapTabCheckSListDisplay();
    Action.tapButtonOnTabBar(4);

    //Log out and remove user login history
    Action.tapButtonOnTabBar(4);
    Action.doUserLogout();

    $.delay(sleep);

    Action.tapButtonOnTabBar(0);
});

test("[1977523] verify recent history from My Account", function () {
    Action.cleanSearches();
    Action.cleanBrowsingHistory();
    $.delay(sleep);

    Action.tapAddAccountOnLogin("mobileappstore1", "A1234qwer");

    Action.tapButtonOnTabBar(4);
    $.delay(sleep);

    //go to order query called browse recently
    Action.tapButtonOnMyUser(1);
    $.delay(5);

    Assert.searchSuggestionsPageDisplayOnRecentHisory();

    Action.tapStoreTab();
    $.delay(5);

    Assert.searchSuggestionsPageDisplayOnRecentHisory();

    //Log out and remove user login history
    Action.tapButtonOnTabBar(4);
    Action.doUserLogout();

    //Action.tapButtonOnTabBar(4);
    //Action.removeLoginHistory("mobileappstore1");
    $.delay(sleep);

    Action.tapButtonOnTabBar(0);
});

test("[1977527] verify remove an item from recently browsed", function () {
    Action.cleanSearches();
    Action.cleanBrowsingHistory();
    $.delay(sleep);

    Action.tapAddAccountOnLogin("mobileappstore1", "A1234qwer");
    Action.addToRecentBrowseOnce();

    Action.tapButtonOnTabBar(4);
    $.delay(sleep);

    //go to order query called browse recently
    Action.tapButtonOnMyUser(1);
    $.delay(5);

    Action.deleteRecordsRecently();
    $.delay(sleep);
    
    Assert.searchSuggestionsPageDisplayOnRecentHisory();
    
    //Log out and remove user login history
    Action.tapButtonOnTabBar(4);
    Action.doUserLogout();

    //Action.tapButtonOnTabBar(4);
    //Action.removeLoginHistory("mobileappstore1");
    $.delay(sleep);

    Action.tapButtonOnTabBar(0);
});

test("[1977531] verify remove a store from recently browsed", function () {
    Action.cleanSearches();
    Action.cleanBrowsingHistory();
    $.delay(sleep);

    Action.tapAddAccountOnLogin("mobileappstore1", "A1234qwer");

    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    $.delay(sleep);

    Action.tapStoreTab();
    $.delay(5);

    Action.tapSearchResultOfStore();
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);

    Action.tapButtonOnTabBar(4);
    $.delay(sleep);

    //go to order query called browse recently
    Action.tapButtonOnMyUser(1);

    Action.tapStoreTab();
    $.delay(5);

    Action.deleteRecordsRecently();
    $.delay(sleep);
    
    Assert.searchSuggestionsPageDisplayOnRecentHisory();
    
    //Log out and remove user login history
    Action.tapButtonOnTabBar(4);
    Action.doUserLogout();

    //Action.tapButtonOnTabBar(4);
    //Action.removeLoginHistory("mobileappstore1");
    $.delay(sleep);

    Action.tapButtonOnTabBar(0);
});  