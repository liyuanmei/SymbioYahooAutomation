test("[1900004] verify can browse recent items in「商品」tab ", function () {
    Action.cleanSearches();
    $.delay(sleep);

    Action.addToRecentBrowse();

    //go to my account
    Action.tapButtonOnTabBar(4);

    Action.goRecentBrowse();
    $.delay(20);

    //Verify currently should have 20 items in screen
    Assert.commodityItemsShowCount(21);
    $.delay(sleep);

    target.logElementTree();
    $.delay(sleep);

    Assert.productPriceShowCorrect(1, 3);
    $.delay(sleep);

    Action.tapFavoritesIcon(1);
    $.delay(3);

    //Assert.favoritesIconShowCorrect(1);
    Action.tapFavoritesIcon(1);
    $.delay(sleep);

    //Verify the value of rating is less than 10, if not fail.
    Assert.storeRatingShowCorrect(1, 1);
    $.delay(sleep);

    Action.tapButtonOnTabBar(4);
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(2);

    Action.tapButtonOnTabBar(0);
    Action.tapButtonOnTabBar(0);
});

test("[1900011]  verify settings screen." , function () {
    Action.cleanSearches();
    Action.cleanBrowsingHistory();
    $.delay(sleep);

    Action.tapCleanSearchOnSidebr(0);
    $.delay(sleep);

    Action.tapButtonOnTabBar(0);

    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    $.delay(10);

    Action.goBackOnSearchPage();
    Action.tapReturnOnSearchBar();

    //go to my account
    Action.tapButtonOnTabBar(4);

    Action.goRecentBrowse();
    $.delay(10);

    Assert.searchSuggestionsPageDisplayOnRecentHisory();

    Action.tapButtonOnTabBar(4);
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);

    Action.tapCleanSearchOnSidebr(1);

    Action.tapButtonOnTabBar(0);
});