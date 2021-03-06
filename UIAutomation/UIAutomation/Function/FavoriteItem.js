test("[1959923] Verify store rate from items collected", function () {
    target.logDeviceInfo();
    var version = target.systemVersion();
    version = version.substring(0,1);
    if(version == "6") {
        $.delay(10);
    }
    
    Action.determineTheLoginWhenShopping();
    Action.cleanSearches();

    Action.goCategoryWhenSearchSettingOpen();
    $.delay(sleep);

    Action.tapSearchIconOnNavBar();
    $.delay(sleep);

    Action.searchBarInputChinese(varTestsSearchBoxInputDataCoat);
    Action.tapKeyboardSearch();
    Action.pageShow();

    //Tap Advanced button.
    Action.tapButtonsInAdvancedBarWhenSRP();

    //Tap browse mode button on advanced bar. And verify this button would enabled after tapped
    Action.tapButtonsInAdvancedBar(1);
    Assert.buttonOnAdvancedIsEnabled(1);

    Action.chooseCategoryBrowseMode(varTestsListInBrowse);
    $.delay(5);

    //Tap favorites icon add a production to favorites.
    Action.tapFavoritesIcon(1);
    var version = target.systemVersion();
    version = version.substring(0,1);
    if(version == "6") {
        var productName = app.mainWindow().collectionViews()[0].cells()[1].staticTexts()[0].name();
    }
    else{
        var productName = app.mainWindow().collectionViews()[0].cells()[1].name();
    }

    //got my favorites screen.
    Action.tapButtonOnTabBar(4);
    Action.goMayFavoritesScreenWhenSRP();
    $.delay(3);

    //Verify the value of rating is less than 10, if not fail.
    Assert.storeRatingShowCorrect(1, 1);

    //Assert product show in My favorites screen.
    Assert.productAddedToMyFavoritesScreen(productName);

    //Remove favorites item.
    Action.tapButtonOnTabBar(2);
    Action.tapFavoritesIcon(1);

    //Verify favorites item successful removed.
    Action.tapButtonOnTabBar(4);
    $.delay(3);
    //Assert.productRemovedFromMyFavoritesScreen(product);

    //Restore app to default screen.
    Action.goBack();
    Action.tapButtonOnTabBar(2);
    Action.goBackOnSearchPage();
    Action.tapReturnOnSearchBar();
    Action.goDiscoveryStream();
    Action.cleanSearches();
});

//6.12
test("[1959929] verify user can add favorite item.", function () {
    target.logDeviceInfo();
    Action.cleanSearches();

    //add favorite item
    Action.tapButtonOnTabBar(2);
    Action.tapItemOnCategoryScreenWhenItemPage(0);
    Action.goCommodityTab();
    Action.pageShow();

    var version = target.systemVersion();
    version = version.substring(0,1);
    if(version == "6") {
        var storeNameElement = app.mainWindow().collectionViews()[0].cells()[2].staticTexts()[0];
        $.delay(4);

        Action.tapElementsOnScreen(storeNameElement);
        $.delay(5);

        var faviocn = app.mainWindow().collectionViews()[0].cells()[1].buttons()[0];
        Action.tapElementsOnScreen(faviocn);
    }
    else{
        var storeNameElement = app.mainWindow().collectionViews()[0].cells()[1].staticTexts()[0];
        $.delay(4);

        Action.tapElementsOnScreen(storeNameElement);
        $.delay(5);

        Action.tapFavoritesIcon(1);
    } 
    Action.goBack();
    $.delay(sleep);

    //check favorite icon is tapped
    //Assert.checkFavoriteItemButtonIsTapped();

    //restore
    var version = target.systemVersion();
    version = version.substring(0,1);
    if(version == "6") {
        Action.tapFavoritesIcon(2);
    }
    else{
        Action.tapFavoritesIcon(1);
    }
    Action.tapButtonOnTabBar(2);

    //favstore
    Action.tapButtonOnTabBar(1);
    $.delay(20);
    var version = target.systemVersion();
    version = version.substring(0,1);
    if(version == "6") {
        var firstStoreName = app.windows()[0].collectionViews()[0].cells()[0].staticTexts()[0];

        Action.tapFavoriteStoreIcon();
        $.delay(10);

        //do refresh
        Action.doRefreshFavoriteStorePage();
        $.delay(20);

        Action.tapButtonOnTabBar(2);
        Action.tapButtonOnTabBar(1);
        $.delay(15);

        //check favorite store can be displayed on my favorite stores tab
        Assert.elementsShouldContainTextWhenSearch(firstStoreName,varTestsFavstoreNameOnItem);
    }
    else{
        var firstStoreName = app.windows()[0].collectionViews()[0].cells()[1].staticTexts()[0].name();

        Action.tapFavoriteStoreIcon();
        $.delay(10);

        //do refresh
        Action.doRefreshFavoriteStorePage();
        $.delay(20);

        Action.tapButtonOnTabBar(2);
        Action.tapButtonOnTabBar(1);
        $.delay(15);

        //check favorite store can be displayed on my favorite stores tab
        Assert.checkStoreName(firstStoreName);
    }
    
    $.delay(sleep);
    var version = target.systemVersion();
    version = version.substring(0,1);
    if(version == "6") {
        //restore settings
        Action.tapFirstViewsOnFavoriteStorePage();
        $.delay(5);
    }
    else{
        Action.tapFirstViewsOnFavoriteStorePage();
        $.delay(5);

        Assert.ckeckHeartIconOnNavigationBarIsTapped();
    }

    Action.tapCancelFavoriteStoreIcon();
    $.delay(sleep);

    Action.tapButtonOnTabBar(1);
    $.delay(15);

    Action.tapButtonOnTabBar(0);
});