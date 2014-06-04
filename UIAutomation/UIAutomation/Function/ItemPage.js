test("[1953619] Verify the for piece goods discount", function () {
    Action.cleanSearches();
    $.delay(sleep);

    Action.tapSearchIconOnNavBar();

    Action.englishInputMethod();
    $.delay(sleep);

    Action.searchBarInputChinese("單件");
    Action.tapKeyboardSearch();
    $.delay(sleep);

    Action.tapGoodsOnList(1);
    obj.scrollDowns(1);
    $.delay(10);

    Action.tapSalesPromotionActivity();
    $.delay(sleep);

    target.logElementTree();
    $.delay(sleep);

    Assert.checkSearchPage("促銷活動");
    Assert.checkSalesPromotionActivity();

    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
    Action.tapButtonOnTabBar(0);
});