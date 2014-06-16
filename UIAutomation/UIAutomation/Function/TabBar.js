test("[1977546] Verify verify tab bar can switch.", function () {
    Action.cleanSearches();
    $.delay(sleep);

    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(1);
    $.delay(sleep);
    
    Assert.checkFavoriteStoreTabIsEnabled();
    
    //Log out and remove user login history
    Action.tapButtonOnTabBar(0);
});