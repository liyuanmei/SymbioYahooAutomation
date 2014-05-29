test("[1900004] verify can browse recent items in「商品」tab ", function () {
	Action.cleanSearches();
    $.delay(sleep);
    Action.doUserLogin("mobileappstore1", "A1234qwer");

    Action.addToRecentBrowse();

    //go to my account
    Action.tapButtonOnTabBar(4);

    Action.goRecentBrowse();
    $.delay(5);

    //Verify currently should have 20 items in screen.
    Assert.commodityItemsShowCount(21);
    $.delay(sleep);
    target.logElementTree();

    Assert.productPriceShowCorrect(1, 3);
    $.delay(sleep);

    //Verify the value of rating is less than 10, if not fail.
    Assert.storeRatingShowCorrect(1, 1);
    $.delay(sleep);

    Action.tapButtonOnTabBar(4);
    Action.tapButtonOnTabBar(2);

    //Log out and remove user login history
    Action.tapButtonOnTabBar(4);
    Action.doUserLogout();

    Action.tapButtonOnTabBar(4);
    Action.removeLoginHistory("mobileappstore1");
});