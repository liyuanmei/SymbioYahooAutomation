test("[1959901] Verify stores category show correctly.", function () {
    target.logDeviceInfo();
    Action.determineTheLoginWhenShopping();
    Action.cleanSearches();

    //go to store page
    Action.tapButtonOnTabBar(1);
    $.delay(5);

    Action.tapFirstViewsOnFavoriteStorePageWithOutLogin();
    $.delay(5);

    //tap store category tab and store commodity tab
    Action.tapStoreCategoryTab();
    Action.tapStoreCommodityTab();
    $.delay(10);

    Action.tapStoreCategoryTab();
    $.delay(5);

    if(target.systemVersion() == "6.1.3"){
        //assert stores category show correctly
        Assert.checkStoreCategoryCellsShowCorrectly();
    }
    else{
        //assert stores category show correctly
        Assert.checkStoreCategoryCellsShowCorrectly();
        Assert.checkStoreCategoryTabIsEnabled();
    }
    $.delay(sleep);

    //restore
    Action.tapStoreCommodityTab();
    Action.tapButtonOnTabBar(1);
    Action.tapButtonOnTabBar(0);
});

test("[1959904] Verify user can check purchasing info from store page" , function () {
    target.logDeviceInfo();
    Action.cleanSearches();

    Action.goApparelCategoryWhenShoppingCart();
    Action.goCommodityTab();
    Action.pageShow();

    //Tap item on list to navigate to item page.
    Action.tapItemOnProductListScreen();
    $.delay(15);

    obj.scrollDowns(1);
    $.delay(10);
     
    Action.butButtonShoppingCart();

    Action.chooseTheSizeOnShoppingCart();
    Action.tapConfirmOnShoppingCart();
    Action.tapButtonOnTabBar(3);
    
    try{
        Action.tapShoppingCartlist(0);
        $.delay(20);
    }
    catch (err) {
        $.delay(20);
    }

    Assert.checkbutButtonShoppingCart();
    $.delay(3);
    
    Action.tapStoreLogoWhenStorePage();
    Action.tapShoppingInformationPage();
    Assert.ShoppingInformationPage();
    
    Action.goBack();
    Action.tapButtonOnTabBar(3);
    $.delay(sleep);

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
    target.logDeviceInfo();
    Action.cleanSearches();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    Action.pageShow();

    Action.tapStoreTab();
    $.delay(5);

    Action.tapSearchResultOfStore();
    $.delay(5);

    Assert.checkButtonOnStore();

    Action.tapClassificationButtonWhenItemPage();
    $.delay(5);

    Assert.tapTabCheckSListDisplay();

    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
    Action.tapButtonOnTabBar(0);
});

test("[1959898] Not log in, click on the add collection list icon ", function () {
    target.logDeviceInfo();
    Action.cleanSearches();

    //Log out and remove user login history
    Action.tapButtonOnTabBar(4);
    Action.doUserLogout();
    $.delay(sleep);

    Action.tapButtonOnTabBar(1);
    $.delay(10);

    //verify the heart icon display
    Assert.heartIconShowCorrect(1);
    $.delay(5);
    
    Action.tapFavoriteStoreIcon();
    $.delay(10);

    Assert.logInWindowShowCorrectOnAddAccount();

    //Tap exit button exit login window.
    Action.exitLoginWindow();
    Action.tapButtonOnTabBar(0);
    $.delay(sleep);

    Action.tapAddAccountOnLogin("mobilestoresymbio2", "Aa123456");
    $.delay(5);

    Action.tapButtonOnTabBar(0);
});

test("[1959925] Verify user can search funtion in store page ", function () {
    target.logDeviceInfo();
    Action.cleanSearches();
    Action.tapButtonOnTabBar(2);

    Action.tapItemOnCategoryScreenWhenOptions(0);
    Action.tapChoosePreductCategoryWhenOptions(0,1);
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("東京");
    Action.tapKeyboardSearch();
    $.delay(10);
 
    Action.tapCommodityNameOnSearchResultsPage();
    $.delay(15);

    obj.scrollDowns(1);
    $.delay(10);

    Assert.itemPageShowCorrect();

    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
    Action.tapButtonOnTabBar(0);
});

test("[1959906] Verify store promotion item's display", function () {
    target.logDeviceInfo();
    Action.cleanSearches();
    Action.tapButtonOnTabBar(2);
    $.delay(sleep);

    Action.tapItemOnCategoryScreenWhenItemPage(0);
    $.delay(sleep);

    Action.goCommodityTab();
    $.delay(10);

    Action.tapItemOnProductListScreen();
    $.delay(15);

    obj.scrollDowns(1);
    $.delay(10);

    Action.addToShoppingCart();
    $.delay(5);

    Action.tapCancelOnShoppingCart(); 
    Action.tapChooseOnItemPage("促銷活動");
    $.delay(5);

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
    target.logDeviceInfo();
    Action.cleanSearches();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    $.delay(10);

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

//7.1
test("[1959924] Verify store promotion item's display", function () {
    target.logDeviceInfo();
    Action.cleanSearches();
    Action.tapButtonOnTabBar(2);
    $.delay(sleep);

    Action.tapItemOnCategoryScreenWhenItemPage(0);
    $.delay(sleep);

    Action.goCommodityTab();
    $.delay(sleep);

    Action.tapItemOnProductListScreen();
    $.delay(15);

    obj.scrollDowns(1);
    Action.addToShoppingCart();
    $.delay(sleep);

    Action.tapCancelOnShoppingCart();
    $.delay(sleep);
     
    Action.tapChooseOnItemPage("促銷活動");
    $.delay(15);

    Assert.checkSearchPage("促銷活動");
    Assert.checkSalesPromotionActivity();

    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
    Action.tapButtonOnTabBar(0);
});

test("[1959887] Verify '購買人次' display", function () {
    target.logDeviceInfo();
    target.logDeviceInfo();
    Action.cleanSearches();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("東京著衣");
    Action.tapKeyboardSearch();
    $.delay(sleep);

    Action.tapStoreTab();
    $.delay(10);

    Action.tapSearchResultOfStore();
    $.delay(5);

    var buyNum = app.mainWindow().collectionViews()[0].cells()[2].staticTexts()[1];
    Assert.elementsShouldContainText(buyNum,"人購買");

    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
    Action.tapButtonOnTabBar(0);
});