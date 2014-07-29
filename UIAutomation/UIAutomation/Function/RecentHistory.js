test("[1900004] verify can browse recent items in「商品」tab ", function () {
    target.logDeviceInfo();
    Action.determineTheLoginWhenShopping();
    Action.cleanSearches();
    $.delay(sleep);

    Action.addToRecentBrowse();

    Action.goBack();
    Action.goBackOnSearchPage();
    Action.tapReturnOnSearchBar();
    Action.goDiscoveryStream();

    //go to my account
    Action.tapButtonOnTabBar(4);

    Action.goRecentBrowse();
    $.delay(15);

    //store name text
    Assert.checkGoodsTextExistOnRecentBrowse(1,0);

    //item name text
    Assert.checkGoodsTextExistOnRecentBrowse(1,2);

    Assert.commodityItemsShowCount(21);

    //Verify the value of rating is less than 10, if not fail.
    Assert.storeRatingShowCorrect(1, 1);

    Assert.productPriceShowCorrect(1, 3);
    $.delay(sleep);

    //check using FavoritesIcon
    Action.tapFavoritesIcon(1);
    $.delay(sleep);

    Action.tapFavoritesIcon(1);   
    $.delay(sleep);

    Action.tapButtonOnTabBar(4);

    //go to goods collection
    Action.goMayFavoritesScreenWhenSRP();
    $.delay(5);

    //Verify the first favorites item successful removed.
    var version = target.systemVersion();
    version = version.substring(0, version.lastIndexOf("."));
    if(version == "6.1") {
        var goodsNum = app.mainWindow().collectionViews()[0].staticTexts()[1];
    }
    else{
        var goodsNum = app.mainWindow().collectionViews()[0].staticTexts()[0];
    }
    
    Assert.elementsShouldContainText(goodsNum,varTestsCheckTheKeyword2);

    //goods collection
    Assert.checkGoodsExist();

    //sliding delete goods collection
    Action.slidingDeleteGoodsCollection();
    $.delay(sleep);

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
    $.delay(sleep);

    Action.tapCleanSearchOnSidebr(0);
    $.delay(sleep);

    Action.tapButtonOnTabBar(0);

    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese(varTestsSearchBoxInputDataCoat);
    Action.tapKeyboardSearch();
    $.delay(sleep);

    Action.goBackOnSearchPage();
    Action.tapReturnOnSearchBar();

    //go to my account
    Action.tapButtonOnTabBar(4);

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