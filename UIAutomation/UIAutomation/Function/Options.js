test("[1959919] Verify 0 result function on leaf-category", function () {
    target.logDeviceInfo();
    var version = target.systemVersion();
    version = version.substring(0,1);
    if(version == "6") {
        $.delay(10);
    }

    Action.cleanSearches();
    Action.tapButtonOnTabBar(2);

    Action.tapItemOnCategoryScreenWhenOptions(9);
    $.delay(sleep);

    Action.tapChoosePreductCategoryWhenOptions(0,1);
    $.delay(sleep);

    Action.tapClassificationButtonWhenS();
    $.delay(5);

    var version = target.systemVersion();
    version = version.substring(0,1);
    if(version == "6") {
        obj.scrollDowns(1);
        $.delay(sleep);
        
        Action.tapChoosePreductCategoryWhenOptions(0,7);
        $.delay(sleep);

        Action.tapClassificationButtonWhenS();
        $.delay(5);
        
        Action.tapChoosePreductCategoryWhenOptions(0,3);
        $.delay(5);

        Action.tapButtonsInAdvancedBarWhenOp();
        $.delay(5);

        Assert.elementsOrderInSortTabWhenSRP();

        //tap 篩選 button and verify 篩選 button is enabled. the order of 排序 button is 2.
        Action.tapButtonsInAdvancedBar(2);
        Assert.buttonOnAdvancedIsEnabled(2);

        Assert.elementsOnFilterScreenWhenOptions();

        ////tap 浏览模式 button and verify 浏览模式 button is enabled. the order of 排序 button is 1.
        Action.tapButtonsInAdvancedBar(1);
        Assert.buttonOnAdvancedIsEnabled(1);

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

        //tap 篩選 button and verify 篩選 button is enabled. the order of 排序 button is 2.
        Action.tapButtonsInAdvancedBar(2);
        Assert.buttonOnAdvancedIsEnabled(2);

        Assert.elementsOnFilterScreenWhenOptions();

        ////tap 浏览模式 button and verify 浏览模式 button is enabled. the order of 排序 button is 1.
        Action.tapButtonsInAdvancedBar(1);
        Assert.buttonOnAdvancedIsEnabled(1);

        //Tap Cancel button on Navigation Bar.
        Action.tapCancelButtonInAdvancedBar();
    }
    
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
});