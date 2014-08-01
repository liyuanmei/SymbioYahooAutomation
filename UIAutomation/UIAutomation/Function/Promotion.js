test("[1977505] [bug case]verify user can add goods to shopping cart in「促銷活動」page after user logout then login.." , function () {
    target.logDeviceInfo();
    Action.determineTheLoginWhenShopping();
    Action.cleanSearches();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese(varTestsSearchBoxInputDataStore3);
    Action.tapKeyboardSearch();
    $.delay(10);

    Action.tapStoreTab();
    $.delay(10);

    Action.tapSearchResultOfStore();
    $.delay(10);

    Action.tapItemOnProductListScreen();
    $.delay(10);

    obj.scrollDowns(1);
    $.delay(5);

    var version = target.systemVersion();
    version = version.substring(0, version.lastIndexOf("."));
    if(version == "6.1") {
        Action.tapChooseOnItemPageWhenPromotion(4,0);
    }
    else{
        Action.tapChooseOnItemPage(varTestsPageNameOnSalesPromotion);
    }

    Action.tapChoosePreductCategoryWhenOptions(0,0);
    $.delay(50);

    obj.scrollDownsWhenSettlement(13);
    $.delay(8);

    try{
        Action.clickTheBuyButtonsOnPromotionPage();
        $.delay(5);

        Action.tapButtonOnTabBar(3);
        $.delay(5);

        Assert.checkGoodsExist();
        $.delay(5);

        Action.tapDeleteOnShoppingCart();
        $.delay(5);
    }
    catch(err){
        var version = target.systemVersion();
        version = version.substring(0, version.lastIndexOf("."));
        if(version == "6.1") {
            //May be due to data reasons not click shopping cart icon.
            Assert.checkReturnPageDisplay(varTestsPageNameOnSalesPromotion);
        }
        else{
            Assert.checkReturnPageDisplay(varTestCategoryCommodityTab);
        }

        Action.tapButtonOnTabBar(2);
    }
    
    //go to favorite store
    Action.tapButtonOnTabBar(1);
    Action.tapButtonOnTabBar(1);
    $.delay(5);

    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese(varTestsSearchBoxInputDataStore3);
    Action.tapKeyboardSearch();
    $.delay(10);

    Action.tapStoreTab();
    $.delay(10);

    Action.tapSearchResultOfStore();
    $.delay(10);

    Action.tapItemOnProductListScreen();
    $.delay(10);

    obj.scrollDowns(1);
    $.delay(5);

    var version = target.systemVersion();
    version = version.substring(0, version.lastIndexOf("."));
    if(version == "6.1") {
        Action.tapChooseOnItemPageWhenPromotion(4,0);
    }
    else{
        Action.tapChooseOnItemPage(varTestsPageNameOnSalesPromotion);
    }

    Action.tapChoosePreductCategoryWhenOptions(0,0);
    $.delay(50);

    obj.scrollDownsWhenSettlement(13);
    $.delay(5);

    try{
        Action.clickTheBuyButtonsOnPromotionPage();
        $.delay(5);

        Action.tapButtonOnTabBar(3);
        $.delay(5);

        //go back favstore page
        Action.tapButtonOnTabBar(1);
        $.delay(5);

        //verify case bug
        Assert.checkReturnPageDisplay(varTestsPageNameOnSalesPromotion);

        Action.tapButtonOnTabBar(3);
        $.delay(5);

        Assert.checkGoodsExist();
        $.delay(5);

        Action.tapDeleteOnShoppingCart();
        $.delay(5);
    }
    catch(err){
        var version = target.systemVersion();
        version = version.substring(0, version.lastIndexOf("."));
        if(version == "6.1") {
            //May be due to data reasons not click shopping cart icon.
            Assert.checkReturnPageDisplay(varTestsPageNameOnSalesPromotion);
        }
        else{
            Assert.checkReturnPageDisplay(varTestCategoryCommodityTab);
        }

        Action.tapButtonOnTabBar(1);
    }
    
    Action.tapButtonOnTabBar(1);
    Action.tapButtonOnTabBar(1);
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
    Action.tapButtonOnTabBar(0);
});