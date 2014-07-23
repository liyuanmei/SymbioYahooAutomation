test("[1954571] verify 18 ban show correct.", function () {
    target.logDeviceInfo();
    Action.determineTheLoginWhenShopping();
    Action.cleanSearches();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    
    Action.searchBarInputChinese(varTestsSearchBoxInputGoodsName3);
    Action.tapKeyboardSearch();
    Action.pageShow();

    //switch layout to big image
    Action.tapButtonsInAdvancedBarWhenSRP();
    Action.tapButtonsInAdvancedBar(1);
    Action.chooseCategoryBrowseMode(varTestsLargePictureInBrowse);
    $.delay(10);

    //Go to item detail screen.
    Action.tapItemOnProductListScreen();
    $.delay(15);

    //Verify 18 ban screen show correct.
    Assert.check18BanScreenShowCorrectOnFavStore();

    //Tap back button exit 18 ban screen.
    Action.back18BanScreen();

    //tap discory stream to restore screen to default.
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
    Action.tapButtonOnTabBar(0);
});

test("[1959922] Verify user can access correct store page from recommendation.", function () {
    target.logDeviceInfo();
    Action.determineTheLogin();
    Action.cleanSearches();

    Action.tapButtonOnTabBar(1);
    $.delay(15);

    //Tap item on list to navigate to item page.
    Action.tapStoreNameOnCategory();

    //Action.tapFirstViewsOnFavoriteStorePage();
    $.delay(10);

    Assert.checkButtonOnStore();
    Action.tapButtonOnTabBar(1);
    
    //Log out and remove user login history.
    Action.tapButtonOnTabBar(4);
    Action.tapButtonOnTabBar(0);
});

test("[1959912] Verify there is an indicator to allow user login in",function (){
    target.logDeviceInfo();
    //clean the searches
    Action.cleanSearches();

    //Log out and remove user login history
    Action.tapButtonOnTabBar(4);
    Action.doUserLogout();

    //tap favorite button
    Action.tapButtonOnTabBar(1);
    $.delay(4);

    //check "請先登入" button
    Assert.checkLogInFirstOnFavoritePage();
    Action.goDiscoveryStream();

    Action.tapAddAccountOnLogin(varTestsSignInAccountMobilestoresymbio2 , varTestsSignInPasswordMobilestoresymbio2);
    $.delay(10);

    Action.tapButtonOnTabBar(0);
});

test("[1959886] Verify the page display when user is logged in and has no favorite stores.",function () {
    target.logDeviceInfo();
    //clean the searches
    Action.cleanSearches();
    $.delay(sleep);

    //tap favorite button
    Action.tapButtonOnTabBar(1);
    $.delay(15);

    //check no collection screen is correct
    Assert.checkCollectionScreenCorrect();
    Action.tapButtonOnTabBar(0);
});

test("[1959888] Verify Just added favorite store can be displayed on my favorite stores tab.",function () {
    target.logDeviceInfo();
    //do user login
    Action.cleanSearches();

    //add favorite store
    Action.tapButtonOnTabBar(1);
    Action.tapButtonOnTabBar(1);
    $.delay(15);

    Action.tapFavoriteStoreIcon();
    $.delay(10);
    
    var firstStoreName = app.windows()[0].collectionViews()[0].cells()[1].staticTexts()[0].name();

    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(1);
    $.delay(15);

    //check favorite store can be displayed on my favorite stores tab
    Assert.checkStoreName(firstStoreName);
    $.delay(sleep);

    //restore settings
    Action.tapFirstViewsOnFavoriteStorePage();
    $.delay(5);

    Action.tapCancelFavoriteStoreIcon();
    $.delay(sleep);

    Action.tapButtonOnTabBar(1);
    $.delay(10);

    Action.tapButtonOnTabBar(0);
});

//6.12
test("[1959907] verify the number of store items,collected number with my favorite store.",function () {
    target.logDeviceInfo();
    //do user login
    Action.cleanSearches();

    //go to favorite store page
    Action.tapButtonOnTabBar(1);
    $.delay(15);

    $.delay(sleep);
    var version = target.systemVersion();
    version = version.substring(0, version.lastIndexOf("."));
    if(version == "6.1") {
        var storeItem = app.mainWindow().collectionViews()[0].cells()[2].staticTexts()[4];
        var collection = app.mainWindow().collectionViews()[0].cells()[2].staticTexts()[6];
    }
    else{
        var storeItem = app.mainWindow().collectionViews()[0].cells()[1].staticTexts()[4];
        var collection = app.mainWindow().collectionViews()[0].cells()[1].staticTexts()[6];
    }

    //check store items and collect
    Assert.elementsShouldContainText(storeItem, varTestsElementsShouldContainTextStoreItem);
    Assert.elementsShouldContainText(collection, varTestsElementsShouldContainTextCollection);
    Action.tapButtonOnTabBar(0);
});

test("[1954565] Verify pull down to refresh when favorite store is empty.",function () {
    target.logDeviceInfo();
    //do user login
    Action.cleanSearches();

    //go to favorite store page
    Action.tapButtonOnTabBar(1);
    $.delay(10);
    
    //do refresh
    Action.doRefreshFavoriteStorePage();
    $.delay(15);

    //check the page is correct
    Assert.checkReturnPageDisplay(varTestFavoriteStoreName);

    //check the cells is not empty
    Assert.checkFavoriteStoreCellsShowCorrectly();

    Action.tapButtonOnTabBar(0);
});

test("[1954610] Verify pull down to refresh when favorite store is exist.",function () {
    target.logDeviceInfo();
    //do user login
    Action.cleanSearches();
    $.delay(sleep);

    //add favorite store
    Action.tapButtonOnTabBar(1);
    Action.tapButtonOnTabBar(1);
    $.delay(15);

    Action.tapFavoriteStoreIcon();
    $.delay(5);

    //do refresh
    Action.doRefreshFavoriteStorePage();
    $.delay(10);

    //check the page is correct
    Assert.checkReturnPageDisplay(varTestFavoriteStoreName);

    //check the cells is not empty
    Assert.checkFavoriteStoreCellsShowCorrectly();

    //restore settings
    Action.tapFirstViewsOnFavoriteStorePage();
    $.delay(5);

    Action.tapCancelFavoriteStoreIcon();
    $.delay(sleep);

    Action.tapButtonOnTabBar(1);

    Action.tapButtonOnTabBar(0);
});

//7.1
test("[1959896] Verify user can clicking promotion item link in store promotion page", function () {
    target.logDeviceInfo();
    Action.cleanSearches();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese(varTestsSearchBoxInputDataStore2);
    Action.tapKeyboardSearch();
    $.delay(sleep);

    Action.tapStoreTab();
    $.delay(10);

    Action.tapSearchResultOfStore();
    $.delay(sleep);

    Action.tapStoreNameLinkOnFavoriteStores();
    $.delay(15);

    Assert.checkSalesPromotionActivityOnStore(1,2);
    Action.tapChoosePreductCategoryWhenOptions(0,1);
    $.delay(25);

    try{
        Assert.checkTextShowCorrectly(2,varTestsCheckTextShowCorrectlyOnSalesPromotion);
    }
    catch (err) {
        Assert.checkSearchPage(varTestsPageNameOnSalesPromotion);
    }

    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
    Action.tapButtonOnTabBar(0);
});

test("[1959875] Verify user logout,then login again,the display of the favorite store list", function () {
    target.logDeviceInfo();
    //Log out and remove user login history
    Action.tapButtonOnTabBar(4);
    Action.doUserLogout();

    Action.cleanSearches();
    $.delay(sleep);

    Action.tapButtonOnTabBar(1);
    $.delay(10);

    Assert.checkLogInFirstOnFavoritePage();
    $.delay(sleep);

    Action.tapAddAccountOnLogin(varTestsSignInAccountMobilestoresymbio2 , varTestsSignInPasswordMobilestoresymbio2);

    Action.tapButtonOnTabBar(1);
    $.delay(20);

    Assert.checkCollectionScreenCorrect();
    Action.tapButtonOnTabBar(0);
});