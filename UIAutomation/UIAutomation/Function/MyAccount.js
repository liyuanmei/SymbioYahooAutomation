test("[1959920] Verify the number of e-coupon can count correctly", function () {
    target.logDeviceInfo();
    var version = target.systemVersion();
    version = version.substring(0,1);
    if(version == "6") {
        $.delay(10);
    }
    
    Action.determineTheLoginWhenShopping();
    Action.cleanSearches();
    $.delay(sleep);

    Action.tapButtonOnTabBar(4);
    $.delay(5);

    //go to electronic coupons
    Action.goElectronicCoupons();
    $.delay(10);

    try{
        var electronic = app.mainWindow().scrollViews()[0].webViews()[0].elements()[varTestsToBeEffectiveOnElectronicCoupons];
        Assert.elementsValueShouldContainText(electronic,varTestsToBeEffectiveOnElectronicCoupons);
    }
    catch (err) {
        Assert.checkElectronicCouponsDisplay(varTestsElectronicCouponsOnMyAccount);
    }
    $.delay(5);
    Action.tapButtonOnTabBar(4);

    Action.tapButtonOnTabBar(0);
});

//6.13
test("[1977495] Verify Super gift points", function () {
    target.logDeviceInfo();
    Action.cleanSearches();
    $.delay(sleep);

    Action.tapButtonOnTabBar(4);
    $.delay(sleep);

    Assert.checkSuperGiftPoints(varTestsCheckSuperGiftPoints,2);
 
    Action.tapButtonOnTabBar(0);
});

test("[1959899] Verify the numbers of collected items can be increasing/decreasing in my account page", function () {
    target.logDeviceInfo();
    //login the app
    Action.cleanSearches();

    //add favorite item
    $.delay(sleep);
    Action.tapButtonOnTabBar(2);
    Action.tapItemOnCategoryScreenWhenItemPage(0);
    Action.goCommodityTab();
    $.delay(10);

    Action.tapItemOnProductListScreen();
    $.delay(5);
    Action.tapFavoritesIcon(1);
    $.delay(5)

    var version = target.systemVersion();
    version = version.substring(0,1);
    if(version == "6") {
        var firstStoreName = app.mainWindow().collectionViews()[0].cells()[1].staticTexts()[0].value();

    }
    else{
        var firstStoreName = app.mainWindow().collectionViews()[0].cells()[1].staticTexts()[0].value();
    }  
    
    //go user collection page
    Action.tapButtonOnTabBar(4);
    $.delay(sleep);

    Action.tapButtonOnMyUser(3);
    $.delay(6);
    
    Assert.checkStoreName(firstStoreName);
    $.delay(sleep);
    
    Action.tapCollectionList();
    $.delay(5);

    Action.tapFavoritesIcon(1);
    $.delay(5);

    Action.tapButtonOnTabBar(4);
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
});

test("[1977522] verify order query from My Account", function () {
    target.logDeviceInfo();
    Action.cleanSearches();
    $.delay(sleep);

    Action.tapButtonOnTabBar(4);
    $.delay(sleep);

    //go to order query called browse recently
    Action.tapButtonOnMyUser(2);
    $.delay(15);

    Assert.checkReturnPageDisplay(varTestsOrderQueryOnMyAccount);
    $.delay(10);

    //Refresh the order page
    Assert.checkElectronicCouponsDisplay(varTestsOrderQueryOnMyAccount);

    Action.tapButtonOnTabBar(4);
    Action.tapButtonOnMyUser(1);
    $.delay(5);

    Assert.tapTabCheckSListDisplay();
    Action.tapButtonOnTabBar(4);
    Action.tapButtonOnTabBar(0);
});

test("[1977523] verify recent history from My Account", function () {
    target.logDeviceInfo();
    Action.cleanSearches();
    Action.cleanBrowsingHistory();
    $.delay(sleep);

    Action.tapButtonOnTabBar(4);
    $.delay(sleep);

    //go to order query called browse recently
    Action.tapButtonOnMyUser(1);
    $.delay(5);

    Assert.searchSuggestionsPageDisplayOnRecentHisory();

    Action.tapStoreTab();
    $.delay(5);

    Assert.searchSuggestionsPageDisplayOnRecentHisory();
    $.delay(sleep);

    Action.tapGoodsTab();

    Action.tapButtonOnTabBar(4);
    Action.tapButtonOnTabBar(0);
});

test("[1977527] verify remove an item from recently browsed", function () {
    target.logDeviceInfo();
    Action.cleanSearches();
    Action.cleanBrowsingHistory();
    $.delay(5);

    var version = target.systemVersion();
    version = version.substring(0,1);
    if(version == "6") {
        Action.tapButtonOnTabBar(2);
        $.delay(sleep);

        Action.tapItemOnCategoryScreenWhenItemPage(0);
        $.delay(sleep);

        Action.goCommodityTab();
        Action.pageShow();
        $.delay(3);

        Action.tapItemOnProductListScreen();
        $.delay(10);

        Action.tapButtonOnTabBar(2);
    }
    else{
        Action.addToRecentBrowseOnce();
    }

    Action.tapButtonOnTabBar(4);
    $.delay(sleep);

    //go to order query called browse recently
    Action.tapButtonOnMyUser(1);
    $.delay(5);

    Action.deleteRecordsRecently();
    $.delay(sleep);
    
    Assert.searchSuggestionsPageDisplayOnRecentHisory();

    Action.tapButtonOnTabBar(4);
    Action.tapButtonOnTabBar(0);
});

test("[1977531] verify remove a store from recently browsed", function () {
    target.logDeviceInfo();
    Action.cleanSearches();
    Action.cleanBrowsingHistory();
    $.delay(sleep);

    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese(varTestsSearchBoxInputDataCoat);
    Action.tapKeyboardSearch();
    $.delay(sleep);

    Action.tapStoreTab();
    $.delay(5);

    Action.tapSearchResultOfStore();
    $.delay(sleep);

    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);

    Action.tapButtonOnTabBar(4);
    $.delay(sleep);

    //go to order query called browse recently
    Action.tapButtonOnMyUser(1);
    $.delay(sleep);

    Action.tapStoreTab();
    $.delay(5);

    Action.deleteRecordsRecently();
    $.delay(sleep);
    
    Assert.searchSuggestionsPageDisplayOnRecentHisory();
    Action.tapButtonOnTabBar(4);

    Action.tapButtonOnTabBar(0);
});

//7.1
test("[1977524] verify user can access to items", function () {
    target.logDeviceInfo();
    $.delay(5);

    Action.tapButtonOnTabBar(4);
    $.delay(sleep);

    //Log out and remove user login history
    Action.doUserLogout();
    $.delay(5);

    Action.tapAddAccountOnLogin(varTestsSignInAccountMobileappstore1, varTestsSignInPasswordMobileappstore1);
    $.delay(5);

    Action.tapButtonOnTabBar(0);
    Action.cleanSearches();
    Action.cleanBrowsingHistory();
    $.delay(10);
    //add to goods history 
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese(varTestsSearchBoxInputDataCoat);
    Action.tapKeyboardSearch();
    $.delay(10);

    //Tap item on list to navigate to item page.
    Action.tapItemOnProductListScreen();

    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
    Action.tapButtonOnTabBar(0);
    $.delay(5);

    //add to store history
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese(varTestsSearchBoxInputDataTokyo);
    Action.tapKeyboardSearch();
    $.delay(sleep);

    Action.tapStoreTab();
    $.delay(10);

    Action.tapSearchResultOfStore();
    $.delay(sleep);

    Action.tapButtonOnTabBar(0);
    Action.tapButtonOnTabBar(0);
    $.delay(sleep);

    Action.tapButtonOnTabBar(4);
    $.delay(sleep);

    //go to order query called browse recently
    Action.tapButtonOnMyUser(1);
    $.delay(10);

    Assert.tapTabCheckSListDisplay();

    Action.tapStoreTab();
    $.delay(5);

    Assert.tapTabCheckSListDisplay();

    Action.tapButtonOnTabBar(4);
    Action.doUserLogout();
    $.delay(5);

    Action.tapAddAccountOnLogin(varTestsSignInAccountMobilestoresymbio4, varTestsSignInPasswordMobilestoresymbio4);
    $.delay(10);

    Action.tapButtonOnTabBar(0);
    Action.tapButtonOnTabBar(0);
});

test("[1959879] Verify the favorite items number", function () {
    target.logDeviceInfo();
    Action.cleanSearches();
    Action.cleanBrowsingHistory();
    $.delay(10);
    Action.tapButtonOnTabBar(4);
    
    Action.tapButtonOnMyUser(3);
    $.delay(15);

    Assert.searchSuggestionsPageDisplayOnRecentHisory();

    Action.tapButtonOnTabBar(4);
    Action.doUserLogout();
    $.delay(10);

    Action.tapButtonOnTabBar(0);
    Action.tapAddAccountOnLogin(varTestsSignInAccountMobilestoresymbio4, varTestsSignInPasswordMobilestoresymbio4);
    $.delay(10);
    Action.tapButtonOnTabBar(4);

    Action.tapButtonOnMyUser(3);
    $.delay(20);

    Assert.searchSuggestionsPageDisplayOnRecentHisory();

    Action.tapButtonOnTabBar(4);
    Action.doUserLogout();
    $.delay(5);

    Action.tapButtonOnTabBar(0);
    Action.tapAddAccountOnLogin(varTestsSignInAccountMobileappstore1, varTestsSignInPasswordMobileappstore1);
    $.delay(5);

    Action.tapButtonOnTabBar(4);

    Action.tapButtonOnMyUser(3);
    $.delay(20);

    var version = target.systemVersion();
    version = version.substring(0,1);
    if(version == "6") {
        var GoodsCollection = app.mainWindow().collectionViews()[0].staticTexts()[1];
    }
    else{
        var GoodsCollection = app.mainWindow().collectionViews()[0].staticTexts()[0];
    }
    
    Assert.elementsShouldContainText(GoodsCollection,varTestsElementsShouldContainTextGoods);

    Action.tapButtonOnTabBar(4);
    Action.doUserLogout();
    $.delay(5);

    Action.tapAddAccountOnLogin(varTestsSignInAccountMobilestoresymbio4, varTestsSignInPasswordMobilestoresymbio4);
    $.delay(10);

    Action.tapButtonOnTabBar(0);
});

test("[1977535] verify offline coupons from My Account", function () {
    Action.cleanSearches();
    $.delay(5);

    Action.tapButtonOnTabBar(4);
    $.delay(sleep);

    //go to electronic coupons.
    Action.tapButtonOnMyUser(4);
    $.delay(10);

    Assert.checkReturnPageDisplay(varTestsStoreThePreferential);
    Action.tapButtonOnTabBar(4);

    Action.tapButtonOnTabBar(0);
});