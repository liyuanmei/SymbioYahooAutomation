test("[1959901] Verify stores categiry show correctly.", function () {
    Action.cleanSearches();

    //go to store page
    Action.tapButtonOnTabBar(1);
    $.delay(5);
    Action.tapFirstViewsOnFavoriteStorePageWithOutLogin();
    target.logElementTree();
    $.delay(5);

    //tap store category tab and store commodity tab
    Action.tapStoreCategoryTab();
    $.delay(sleep);
    Action.tapStoreCommodityTab();
    $.delay(sleep);
    Action.tapStoreCategoryTab();
    $.delay(sleep);
    target.logElementTree();

    //assert stores category show correctly
    Assert.checkStoreCategoryCellsShowCorrectly();
    $.delay(sleep);
    Assert.checkStoreCategoryTabIsEnabled();
    $.delay(sleep);

    //restore
    Action.tapStoreCommodityTab();
    Action.tapBackOnFavoriteStorePage();
    Action.tapButtonOnTabBar(0);
});

test("[1959904] Verify user can check purchasing info from store page" , function () {
    Action.cleanSearches();
    $.delay(sleep);
    Action.tapAddAccountOnLogin("mobileappstore3", "A1234qwer");

    Action.goApparelCategoryWhenShoppingCart();
    Action.goCommodityTab();
    $.delay(sleep);

    //Tap item on list to navigate to item page.
    Action.tapItemOnProductListScreen();
    $.delay(sleep);

    obj.scrollDowns(1);
    $.delay(sleep);
     
    Action.butButtonShoppingCart();

    Action.chooseTheSizeOnShoppingCart();
    Action.tapConfirmOnShoppingCart();
    Action.tapButtonOnTabBar(3);
    
    Action.tapShoppingCartlist(0);
    $.delay(10);

    Assert.checkbutButtonShoppingCart();

    app.mainWindow().logElementTree();
    $.delay(3);
    
    Action.tapStoreLogoWhenStorePage();
    Action.tapShoppingInformationPage();
    Assert.ShoppingInformationPage();
    
    Action.goBack();
    Action.tapButtonOnTabBar(3);

    Action.tapDeleteOnShoppingCart();
    $.delay(sleep);

    Action.tapButtonOnTabBar(3);
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);

    //Log out and remove user login history
    Action.tapButtonOnTabBar(4);
    Action.doUserLogout();

    //Action.tapButtonOnTabBar(4);
    //Action.removeLoginHistory("mobileappstore3");
});