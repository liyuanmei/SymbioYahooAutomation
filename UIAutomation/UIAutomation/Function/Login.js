test("[1977501] verify login and Logout of interaction", function () {
    target.logDeviceInfo();
    Action.determineTheLogin();
    //Log out and remove user login history
    Action.tapButtonOnTabBar(4);
    Action.doUserLogout();

	Action.cleanSearches();
    $.delay(sleep);

    Action.tapButtonOnTabBar(4);
    $.delay(5);

    Assert.logInWindowShowCorrectOnAddAccount();

    //Tap exit button exit login window.
    Action.exitLoginWindow();
    $.delay(sleep);

    Action.tapAddAccountOnLogin("mobileappstore1", "ecmobiletest");
    $.delay(10);

    Assert.checkReturnPageDisplay("我的帳戶");

    //Log out and remove user login history
    Action.tapButtonOnTabBar(4);
    Action.doUserLogout();
    $.delay(10);

    Action.tapButtonOnTabBar(0);
    $.delay(5);
    
    Action.tapAddAccountOnLogin("mobileappstore3", "A1234qwer");

    try{
        $.delay(5);
        Action.tapButtonOnTabBar(0);
    }
    catch (err) {
        $.delay(15);
        Action.tapButtonOnTabBar(0);
    }
});