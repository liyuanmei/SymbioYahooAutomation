test("[1977546] Verify verify tab bar can switch.", function () {
    target.logDeviceInfo();
    Action.cleanSearches();
    $.delay(sleep);

    Action.tapButtonOnTabBar(2);

    //tap FavoriteStore bar
    Action.tapButtonOnTabBar(1);
    $.delay(sleep);
    
    Assert.checkFavoriteStoreTabIsEnabled();
    
    //Log out and remove user login history
    Action.tapButtonOnTabBar(0);
});