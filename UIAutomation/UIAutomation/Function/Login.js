test("[1977501] verify login and Logout of interaction", function () {
    target.logDeviceInfo();
    Action.determineTheLoginWhenShopping();
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

    Action.tapAddAccountOnLogin(varTestsSignInAccountMobileappstore1 , varTestsSignInPasswordMobileappstore1);
    $.delay(10);

    Assert.checkReturnPageDisplay(varTestMyAccountName);

    //Log out and remove user login history
    Action.tapButtonOnTabBar(4);
    Action.doUserLogout();
    $.delay(10);

    Action.tapButtonOnTabBar(0);
    $.delay(5);
    
    Action.tapAddAccountOnLogin(varTestsSignInAccountMobilestoresymbio2 , varTestsSignInPasswordMobilestoresymbio2);

    try{
        $.delay(5);
        Action.tapButtonOnTabBar(0);
    }
    catch (err) {
        $.delay(15);
        Action.tapButtonOnTabBar(0);
    }
});