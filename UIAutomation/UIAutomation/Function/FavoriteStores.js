test("[1953649] verify Editing favorite categories is Synchronous with sidebar.", function () {
    Action.cleanSearches();
    Action.doUserLogin("mobileappstore3", "A1234qwer");
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

    Action.tapButtonOnTabBar(4);
    Action.removeLoginHistory("mobileappstore3");
});

test("[1959922] Verify user can access correct store page from recommendation.", function () {
    Action.cleanSearches();
    $.delay(sleep);
    Action.doUserLogin("mobileappstore3", "A1234qwer");

    Action.tapButtonOnTabBar(1);
    $.delay(5);

    obj.scrollDowns(3);

    //Tap item on list to navigate to item page.
    Action.tapItemOnProductListScreen();

    Assert.checkButtonOnStore();
    Action.tapButtonOnTabBar(1);
    
    //Log out and remove user login history.
    Action.tapButtonOnTabBar(4);
    Action.doUserLogout();

    Action.tapButtonOnTabBar(4);
    Action.removeLoginHistory("mobileappstore3");
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
    Action.doUserLogin("mobileappstore3", "A1234qwer");

    //tap favorite button
    Action.tapButtonOnTabBar(1);
    $.delay(5);

    //check no collection screen is correct
    Assert.checkCollectionScreenCorrect();
    
    //Log out and remove user login history.
    Action.tapButtonOnTabBar(4);
    Action.doUserLogout();

    Action.tapButtonOnTabBar(4);
    Action.removeLoginHistory("mobileappstore3");
});

test("[1959888] Verify Just added favorite store can be displayed on my favorite stores tab.",function () {
    //do user login
    Action.cleanSearches();
    Action.doUserLogin("mobileappstore3", "A1234qwer");
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

    Action.tapButtonOnTabBar(4);
    Action.removeLoginHistory("mobileappstore3");   
});