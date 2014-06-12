test("[1953649] verify Editing favorite categories is Synchronous with sidebar.", function () {
    Action.cleanSearches();
    Action.tapAddAccountOnLogin("mobileappstore3", "A1234qwer");
    $.delay(5);

    //edit favorite categories
    Action.tapButtonOnMyUser(6);

    Action.selectCategoryOnEditFavorite();

    Action.goBack();
    //slect favorite categories and assert them, then restore
    Action.verifyEditingFavoriteCategories();

    Action.tapButtonOnMyUser(6);
    Action.selectCategoryOnEditFavorite();
    Action.goBack();

    //Log out and remove user login history
    Action.doUserLogout();

    //Action.tapButtonOnTabBar(4);
    //Action.removeLoginHistory("mobileappstore3");
});

test("[1959922] Verify user can access correct store page from recommendation.", function () {
    Action.cleanSearches();
    $.delay(sleep);
    Action.tapAddAccountOnLogin("mobileappstore3", "A1234qwer");

    Action.tapButtonOnTabBar(1);
    $.delay(10);

    //obj.scrollDowns(3);

    //Tap item on list to navigate to item page.
    Action.tapStoreNameOnCategory();
    //Action.tapFirstViewsOnFavoriteStorePage();

    Assert.checkButtonOnStore();
    Action.tapButtonOnTabBar(1);
    
    //Log out and remove user login history.
    Action.tapButtonOnTabBar(4);
    Action.doUserLogout();

    //Action.tapButtonOnTabBar(4);
    //Action.removeLoginHistory("mobileappstore3");
});

test("[1959912] Verify there is an indicator to allow user login in",function (){
    //clean the searches
    Action.cleanSearches();

    //tap favorite button
    Action.tapButtonOnTabBar(1);
    $.delay(4);

    //check "請先登入" button
    Assert.checkLogInFirstOnFavoritePage();
    Action.goDiscoveryStream();
});

test("[1959886] Verify the page display when user is logged in and has no favorite stores.",function () {
    //clean the searches
    Action.cleanSearches();
    $.delay(sleep);

    //user login
    Action.tapAddAccountOnLogin("mobileappstore3", "A1234qwer");

    //tap favorite button
    Action.tapButtonOnTabBar(1);
    $.delay(5);

    //check no collection screen is correct
    Assert.checkCollectionScreenCorrect();
    
    //Log out and remove user login history.
    Action.tapButtonOnTabBar(4);
    Action.doUserLogout();

    //Action.tapButtonOnTabBar(4);
    //Action.removeLoginHistory("mobileappstore3");
});

test("[1959888] Verify Just added favorite store can be displayed on my favorite stores tab.",function () {
    //do user login
    Action.cleanSearches();
    Action.tapAddAccountOnLogin("mobileappstore3", "A1234qwer");
    $.delay(sleep);

    //add favorite store
    Action.tapButtonOnTabBar(1);
    $.delay(10);
    Action.tapFavoriteStoreIcon();
    var firstStoreName = app.windows()[0].collectionViews()[0].cells()[1].staticTexts()[0].name();
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(1);
    $.delay(7);

    //check favorite store can be displayed on my favorite stores tab
    Assert.checkStoreName(firstStoreName);

    //restore settings
    Action.tapFirstViewsOnFavoriteStorePage();
    $.delay(5);
    target.logElementTree();
    Action.tapCancelFavoriteStoreIcon();
    $.delay(sleep);
    Action.tapBackOnFavoriteStorePage();

    //Log out and remove user login history
    Action.tapButtonOnTabBar(4);
    Action.doUserLogout();

    //Action.tapButtonOnTabBar(4);
    //Action.removeLoginHistory("mobileappstore3");   
});

//6.12
test("[1959907] verify the number of store items,collected number with my favorite store.",function () {
    //do user login
    Action.cleanSearches();
    Action.tapAddAccountOnLogin("mobileappstore3", "A1234qwer");
    $.delay(sleep);

    //go to favorite store page
    Action.tapButtonOnTabBar(1);
    $.delay(10);

    var storeItem = app.mainWindow().collectionViews()[0].cells()[1].staticTexts()[4];
    var collection = app.mainWindow().collectionViews()[0].cells()[1].staticTexts()[6];
    //check store items and collect
    Assert.elementsShouldContainText(storeItem, "件商品");
    Assert.elementsShouldContainText(collection, "人收藏");

    //Log out and remove user login history
    Action.tapButtonOnTabBar(4);
    Action.doUserLogout();
});

test("[1954565] Verify pull down to refresh when favorite store is empty.",function () {
    //do user login
    Action.cleanSearches();
    Action.tapAddAccountOnLogin("mobileappstore3", "A1234qwer");
    $.delay(sleep);

    //go to favorite store page
    Action.tapButtonOnTabBar(1);
    $.delay(5);
    
    //do refresh
    Action.doRefreshFavoriteStorePage();
    $.delay(5);

    //check the page is correct
    Assert.checkReturnPageDisplay("最愛商店");

    //check the cells is not empty
    Assert.checkFavoriteStoreCellsShowCorrectly();

    //Log out and remove user login history
    Action.tapButtonOnTabBar(4);
    Action.doUserLogout();
});

test("[1954610] Verify pull down to refresh when favorite store is exist.",function () {
    //do user login
    Action.cleanSearches();
    Action.tapAddAccountOnLogin("mobileappstore3", "A1234qwer");
    $.delay(sleep);

    //add favorite store
    Action.tapButtonOnTabBar(1);
    $.delay(5);

    Action.tapFavoriteStoreIcon();
    $.delay(5);

    //do refresh
    Action.doRefreshFavoriteStorePage();
    $.delay(5);

    //check the page is correct
    Assert.checkReturnPageDisplay("最愛商店");

    //check the cells is not empty
    Assert.checkFavoriteStoreCellsShowCorrectly();

    //restore settings
    Action.tapFirstViewsOnFavoriteStorePage();
    $.delay(5);

    Action.tapCancelFavoriteStoreIcon();
    $.delay(sleep);

    Action.tapBackOnFavoriteStorePage();

    //Log out and remove user login history
    Action.tapButtonOnTabBar(4);
    Action.doUserLogout();
});