test("[1977546] Verify verify tab bar can switch.", function () {
    Action.cleanSearches();
    Action.tapAddAccountOnLogin("mobileappstore3", "A1234qwer");
    $.delay(sleep);

    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(1);
    $.delay(sleep);
    
    Assert.checkFavoriteStoreTabIsEnabled();
    
    //Log out and remove user login history
    Action.tapButtonOnTabBar(4);
    Action.doUserLogout();

    //Action.tapButtonOnTabBar(4);
    //Action.removeLoginHistory("mobileappstore3");
});