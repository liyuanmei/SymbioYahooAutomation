test("[1959919] Verify 0 result function on leaf-category", function () {
    Action.cleanSearches();
    Action.tapButtonOnTabBar(2);

    Action.tapItemOnCategoryScreenWhenOptions(9);
    $.delay(sleep);
    target.logElementTree();

    Action.tapChoosePreductCategoryWhenOptions(0,1);
    $.delay(sleep);
    target.logElementTree();

    Action.tapClassificationButtonWhenS();
    $.delay(5);

    if(target.systemVersion() == "6.1.3"){
        obj.scrollDowns(1);
        $.delay(sleep);
        
        Action.tapChoosePreductCategoryWhenOptions(0,7);
        $.delay(sleep);

        Action.tapClassificationButtonWhenS();
        $.delay(5);
        
        Action.tapChoosePreductCategoryWhenOptions(0,3);
        $.delay(5);
        target.logElementTree();

        Action.tapButtonsInAdvancedBarWhenOp();
        $.delay(5);

        Assert.elementsOrderInSortTabWhenSRP();

        //Tap Cancel button on Navigation Bar.
        Action.tapCancelButtonInAdvancedBar();
    }
    else{
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
    }
    
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
});