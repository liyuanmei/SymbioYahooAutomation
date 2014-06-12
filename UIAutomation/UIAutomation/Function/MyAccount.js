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
    