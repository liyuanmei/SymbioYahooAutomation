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
    $.delay(20);

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
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
});

//6.11
test("[1959890] Verify the store custom categories is show correct", function () {
    Action.cleanSearches();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    $.delay(sleep);

    Action.tapStoreTab();
    $.delay(5);

    Action.tapSearchResultOfStore();

    Assert.checkButtonOnStore();

    Action.tapClassificationButtonWhenItemPage();
    Assert.tapTabCheckSListDisplay();

    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
    Action.tapButtonOnTabBar(0);
});

test("[1959898] Not log in, click on the add collection list icon ", function () {
    Action.cleanSearches();

    //Log out and remove user login history
    Action.tapButtonOnTabBar(4);
    Action.doUserLogout();
    $.delay(sleep);

    Action.tapButtonOnTabBar(1);
    $.delay(10);

    //verify the heart icon display
    Assert.heartIconShowCorrect(1);
    Action.tapFavoriteStoreIcon();
    $.delay(sleep);

    Assert.logInWindowShowCorrectOnAddAccount();

    //Tap exit button exit login window.
    Action.exitLoginWindow();
    Action.tapButtonOnTabBar(0);
    $.delay(sleep);

    Action.tapAddAccountOnLogin("mobileappstore3", "A1234qwer");
    Action.tapButtonOnTabBar(0);
});

test("[1959925] Verify user can search funtion in store page ", function () {
    Action.cleanSearches();
    Action.tapButtonOnTabBar(2);

    Action.tapItemOnCategoryScreenWhenOptions(0);
    Action.tapChoosePreductCategoryWhenOptions(0,1);
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("東京");
    Action.tapKeyboardSearch();
    $.delay(sleep);
 
    Action.tapCommodityNameOnSearchResultsPage();
    $.delay(sleep);

    obj.scrollDowns(1);

    Assert.itemPageShowCorrect();

    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
    Action.tapButtonOnTabBar(0);
});

test("[1959906] Verify store promotion item's display", function () {
    Action.cleanSearches();
    Action.tapButtonOnTabBar(2);
    $.delay(sleep);

    Action.tapItemOnCategoryScreenWhenItemPage(0);
    $.delay(sleep);

    Action.goCommodityTab();
    $.delay(sleep);

    Action.tapItemOnProductListScreen();
    $.delay(sleep);

    obj.scrollDowns(1);
    Action.addToShoppingCart();
    $.delay(sleep);

    Action.tapCancelOnShoppingCart(); 
    Action.tapSale();

    Assert.checkSearchPage("促銷活動");
    Assert.checkSalesPromotionActivity();
    Action.tapChoosePreductCategoryWhenOptions(0,0);
    $.delay(15);

    Assert.checkTextShowCorrectly(2,"活動辦法")

    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
    Action.tapButtonOnTabBar(0);
});

//6.12
test("[1959913] Verify user can access store page by tapping store logo ", function () {
    Action.cleanSearches();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    $.delay(sleep);

    //go to store page
    Action.tapStoreTab();
    $.delay(5);

    Action.tapSearchResultOfStore();
    
    //Display properly store page, will not display the item page
    Assert.checkButtonOnStore();

    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
    Action.tapButtonOnTabBar(0);
});