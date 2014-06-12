test("[1959919] Verify 0 result function on leaf-category", function () {
    Action.cleanSearches();
	Action.tapButtonOnTabBar(2);

    Action.tapItemOnCategoryScreenWhenOptions(9);
    Action.tapChoosePreductCategoryWhenOptions(0,1);
    Action.tapClassificationButtonWhenS();
    $.delay(5);

    Action.tapChoosePreductCategoryWhenOptions(0,14);
    Action.tapClassificationButtonWhenS();
    $.delay(5);

    Action.tapChoosePreductCategoryWhenOptions(0,2);
    $.delay(5);

    Action.tapButtonsInAdvancedBarWhenOptions();
    $.delay(5);

    Assert.elementsOrderInSortTabWhenSRP();

    //Tap Cancel button on Navigation Bar.
    Action.tapCancelButtonInAdvancedBar();

    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
});