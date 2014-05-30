test("[1959923] Verify store rate from items collected", function () {
    Action.cleanSearches();
    $.delay(sleep);
    Action.doUserLogin("mobileappstore3", "A1234qwer");
    $.delay(sleep);

    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    $.delay(sleep);

    //Tap Advanced button.
    Action.tapButtonsInAdvancedBarWhenSRP();

    //Tap browse mode button on advanced bar. And verify this button would enabled after tapped
    Action.tapButtonsInAdvancedBar(1);
    Assert.buttonOnAdvancedIsEnabled(1);

    Action.chooseCategoryBrowseMode("列表");

    $.delay(3);
    target.logElementTree();

    //Tap favorites icon add a production to favorites.
    Action.tapFavoritesIcon(1);
    var productName = app.mainWindow().collectionViews()[0].cells()[1].name();

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
    Assert.productRemovedFromMyFavoritesScreen(productName);

    //Restore app to default screen.
    Action.goBack();
    Action.tapButtonOnTabBar(2);
    Action.goBackOnSearchPage();
    Action.tapReturnOnSearchBar();
    Action.goDiscoveryStream();
    Action.cleanSearches();

    //Log out and remove user login history
    Action.tapButtonOnTabBar(4);
    Action.doUserLogout();

    Action.tapButtonOnTabBar(4);
    Action.removeLoginHistory("mobileappstore3");
});