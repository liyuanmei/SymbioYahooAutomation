test("[1959922] Verify user can access correct store page from recommendation.", function () {
    Action.cleanSearches();
    $.delay(sleep);
    Action.doUserLogin("mobileappstore3", "A1234qwer");

    Action.tapButtonOnTabBar(1);
    $.delay(5);

    obj.scrollDowns(3);

    //Tap item on list to navigate to item page.
    Action.tapItemOnProductListScreen();

    Assert.checkButtonOnStore();
    Action.tapButtonOnTabBar(1);
    
    //Log out and remove user login history.
    Action.tapButtonOnTabBar(4);
    Action.doUserLogout();

    Action.tapButtonOnTabBar(4);
    Action.removeLoginHistory("mobileappstore3");
});