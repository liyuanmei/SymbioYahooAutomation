test("[1900004] verify can browse recent items in「商品」tab ", function () {
    target.logDeviceInfo();
    var version = target.systemVersion();
    version = version.substring(0, version.lastIndexOf("."));
    if(version == "6.1") {
        $.delay(10);
    }
    Action.determineTheLoginWhenShopping();
    Action.cleanSearches();
    $.delay(5);

    Action.addToRecentBrowse();

    Action.goBack();
    Action.goBackOnSearchPage();
    Action.tapReturnOnSearchBar();
    Action.goDiscoveryStream();
    $.delay(5);

    //go to my account
    Action.tapButtonOnTabBar(4);

    Action.goRecentBrowse();
    $.delay(15);

    //store name text
    Assert.checkGoodsTextExistOnRecentBrowse(1,0);

    //item name text
    Assert.checkGoodsTextExistOnRecentBrowse(1,2);
    //Verify the first favorites item successful removed.
    var version = target.systemVersion();
    version = version.substring(0, version.lastIndexOf("."));
    if(version == "6.1") {
        Assert.commodityItemsShowCount(4);
    }
    else{
        var commodityItemListCount = app.mainWindow().collectionViews()[0].cells().length;
        if(commodityItemListCount == "21"){
            Assert.commodityItemsShowCount(21);
        }
        else{
            Assert.commodityItemsShowCount(20);
        }
    }
        
    //Verify the value of rating is less than 10, if not fail.
    Assert.storeRatingShowCorrect(1, 1);

    Assert.productPriceShowCorrect(1, 3);
    $.delay(sleep);

    var version = target.systemVersion();
    version = version.substring(0, version.lastIndexOf("."));
    if(version == "6.1") {
    //check using FavoritesIcon
        Action.tapFavoritesIcon(1);
        $.delay(5);
    }
    else{
        Action.tapFavoritesIcon(1);
        $.delay(5);

        Action.tapFavoritesIcon(1);
    }

    Action.tapButtonOnTabBar(4);

    //go to goods collection
    Action.goMayFavoritesScreenWhenSRP();
    $.delay(10);

    //Verify the first favorites item successful removed.
    var version = target.systemVersion();
    version = version.substring(0, version.lastIndexOf("."));
    if(version == "6.1") {
        $.delay(5);
        var goodsNum = app.mainWindow().collectionViews()[0].staticTexts()[1];
    }
    else{
        var goodsNum = app.mainWindow().collectionViews()[0].staticTexts()[0];
    }
    
    Assert.elementsShouldContainText(goodsNum,varTestsCheckTheKeyword2);

    //sliding delete goods collection
    Action.slidingDeleteGoodsCollection();
    $.delay(5);

    Action.goBack();

    Action.tapButtonOnTabBar(4);
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
    Action.tapButtonOnTabBar(0);
});

test("[1900011]  verify settings screen." , function () {
    target.logDeviceInfo();
    Action.cleanSearches();
    Action.cleanBrowsingHistory();
    $.delay(5);

    Action.tapCleanSearchOnSidebr(0);
    $.delay(5);

    Action.tapButtonOnTabBar(0);

    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese(varTestsSearchBoxInputDataCoat);
    Action.tapKeyboardSearch();
    $.delay(sleep);

    Action.goBackOnSearchPage();
    Action.tapReturnOnSearchBar();
    $.delay(5);

    //go to my account
    Action.tapButtonOnTabBar(4);
    $.delay(5);

    Action.goRecentBrowse();
    $.delay(5);

    Assert.searchSuggestionsPageDisplayOnRecentHisory();

    Action.tapButtonOnTabBar(4);
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);

    Action.tapCleanSearchOnSidebr(1);

    Action.tapButtonOnTabBar(0);
});