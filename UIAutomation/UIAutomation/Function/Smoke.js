test("[1952835] [Personalization] verify user can use personalization.", function () {
    target.logDeviceInfo();
    Action.determineTheLoginWhenShopping();
    Action.cleanSearches();
    Action.tapButtonOnTabBar(4);
    $.delay(5);

    //edit favorite categories
    Action.tapButtonOnMyUser(6);
    $.delay(5);

    Action.selectCategoryOnEditFavorite();
    $.delay(10);

    Action.tapGoToEditFavoriteButton();
    $.delay(10);

    Assert.checkReturnPageDisplay("最新動態");

    Action.tapButtonOnTabBar(4);
    $.delay(5);

    Action.selectCategoryOnEditFavorite();
    $.delay(10);

    Action.goBack();
    $.delay(10);

    Action.tapButtonOnTabBar(0);
});

test("[1952836] [Web Views]verify user can use web views" , function () {
    target.logDeviceInfo();
    Action.cleanSearches();
    $.delay(sleep);

    Action.goApparelCategoryWhenShoppingCart();
    $.delay(sleep);

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
    
    //go to shopping cart page
    Action.tapButtonOnTabBar(3);
    $.delay(10);

    Action.tapShoppingCartlist(0);
    $.delay(sleep);

    Action.tapButtonOnTabBar(3);
    $.delay(5);

    Action.tapShoppingCartlist(0);
    $.delay(20);

    //check go to shopping cart. And using the webview, users will be able to complete checkout.
    Assert.checkbutButtonShoppingCart();
    
    Action.goBack();
    $.delay(5);

    Action.tapDeleteOnShoppingCart();
    $.delay(sleep);

    Action.tapButtonOnTabBar(3);
    Action.tapButtonOnTabBar(4);
    $.delay(sleep);

    Action.tapButtonOnMyUser(2);
    $.delay(sleep);

    Assert.checkReturnPageDisplay("訂單查詢");
    $.delay(10);

    //Refresh the order page
    Assert.checkElectronicCouponsDisplay("訂單查詢");
    Action.tapButtonOnTabBar(4);

    Action.tapButtonOnMyUser(4);
    $.delay(sleep);

    Assert.checkReturnPageDisplay("實體商店優惠");
    $.delay(3);

    Action.tapButtonOnTabBar(4);

    Action.tapButtonOnMyUser(5);
    $.delay(sleep);

    Assert.checkReturnPageDisplay("電子折價券");
    $.delay(10);

    try{
        var electronic = app.mainWindow().scrollViews()[0].webViews()[0].elements()["待生效+已生效"];
        Assert.elementsValueShouldContainText(electronic,"待生效+已生效");
    }
    catch (err) {
        //Refresh the Electronic page
        Assert.checkElectronicCouponsDisplay("電子折價券");
    }

    Action.tapButtonOnTabBar(4);
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
});

test("[1959535] [Items listings]Verify Cancel button function in options layers.", function () {
    target.logDeviceInfo();
    Action.cleanSearches();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("c");
    Action.tapKeyboardSearch();
    Action.pageShow();

    //Tap Advanced button.
    Action.tapButtonsInAdvancedBarWhenSRP();

    //tap 篩選 button and verify 篩選 button is enabled. the order of 排序 button is 2.
    Action.tapButtonsInAdvancedBar(2);
    Assert.buttonOnAdvancedIsEnabled(2);

    //Tap cancel button exit advanced bar.
    Action.tapCancelButtonInAdvancedBar();
    Action.pageShow();

    Assert.checkStorelistShowCorrect();

    Action.goBackOnSearchPage();
    Action.tapReturnOnSearchBar();
    Action.goDiscoveryStream();
});

test("[1959541] [Item page]Verify user can click '立即購買' button twice" , function () {
    target.logDeviceInfo();
    Action.cleanSearches();
    $.delay(sleep);

    Action.goApparelCategoryWhenShoppingCart();
    $.delay(sleep);

    Action.goCommodityTab();
    Action.pageShow();

    //Tap item on list to navigate to item page.
    Action.tapItemOnProductListScreen();
    $.delay(15);

    obj.scrollDowns(1);
    $.delay(10);
     
    Action.butButtonShoppingCart();
    $.delay(5);

    Action.tapCancelOnShoppingCart();
    $.delay(sleep);

    Action.butButtonShoppingCart();

    Action.chooseTheSizeOnShoppingCart();
    Action.tapConfirmOnShoppingCart();
    $.delay(20);

    Assert.checkbutButtonShoppingCart();
    
    Action.goBack();
    $.delay(5);

    Assert.checkReturnPageDisplay("商品");
    Action.tapButtonOnTabBar(2);
    
    Action.tapButtonOnTabBar(3);
    Action.tapButtonOnTabBar(3);
    $.delay(5);

    Action.tapDeleteOnShoppingCart();
    $.delay(sleep);

    Action.tapButtonOnTabBar(0);
});

test("[1959553] [Shopping cart]Verify Item link funtion in shoping cart details page." , function () {
    target.logDeviceInfo();
    Action.cleanSearches();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("miu star");
    Action.tapKeyboardSearch();
    $.delay(sleep);

    Action.tapStoreTab();
    $.delay(10);

    Action.tapSearchResultOfStore();
    $.delay(10);
    
    //Tap Advanced button
    Action.tapButtonsInAdvancedBarWhenSRP();

    //Tap browse mode button on advanced bar. And verify this button would enabled after tapped.
    Action.tapButtonsInAdvancedBar(1);
    Assert.buttonOnAdvancedIsEnabled(1);

    Action.chooseCategoryBrowseMode("列表");
    $.delay(10);

    //The first item
    Action.chooseItemOnCollectionViews(0,2,0);
    $.delay(15);

    obj.scrollDowns(1);
    $.delay(10);
     
    Action.butButtonShoppingCart();
    Action.chooseTheSizeOnShoppingCart();
    Action.tapConfirmOnShoppingCart();

    Action.tapButtonOnTabBar(3);
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
    $.delay(5);

    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("miu star");
    Action.tapKeyboardSearch();
    $.delay(sleep);

    Action.tapStoreTab();
    $.delay(10);

    Action.tapSearchResultOfStore();
    $.delay(10);

    //The second item
    Action.chooseItemOnCollectionViews(0,3,0);
    $.delay(15);

    obj.scrollDowns(1);
    $.delay(10);
     
    Action.butButtonShoppingCart();
    Action.chooseTheSizeOnShoppingCart();
    Action.tapConfirmOnShoppingCart();
    $.delay(25);

    Action.tapStoreNameOnShoppingCart(4);
    $.delay(10);

    Assert.checkReturnPageDisplay("商品");
    Action.goBack();
    $.delay(25);

    obj.scrollDownsWhenSettlement(1);
    $.delay(sleep);

    //tap the second item name
    app.mainWindow().scrollViews()[0].webViews()[0].tapWithOptions({tapOffset:{x:0.22, y:0.42}});
    $.delay(sleep);

    Assert.checkReturnPageDisplay("商品");
    Action.tapButtonOnTabBar(3);
    $.delay(5);

    Action.tapDeleteOnShoppingCart();
    $.delay(sleep);

    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
    Action.tapButtonOnTabBar(0);
});

test("[1959554] [Shopping cart]Verify user can access shopping cart details page quickly." ,function () {
    target.logDeviceInfo();
    Action.cleanSearches();

    //add item to shopping cart
    Action.tapButtonOnTabBar(2);
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();

    Action.englishInputMethod();
    
    Action.searchBarInputChinese("精選短袖上衣MIUSTAR 居家舒適感軟棉圓領短袖素T(共18色) 預購");
    Action.tapKeyboardSearch();
    $.delay(10);

    Action.tapSearchResultOfStore();
    $.delay(10);
    
    obj.scrollDowns(1);
    $.delay(sleep);

    Action.addToShoppingCart();
    Action.chooseTheSizeOnShoppingCart();
    Action.tapConfirmOnShoppingCart();

    //go to shopping cart page
    Action.tapButtonOnTabBar(3);
    $.delay(5);

    Action.tapShoppingCartlist(0);
    Action.tapButtonOnTabBar(3);
    $.delay(sleep);

    Action.tapShoppingCartlist(0);
    $.delay(20);

    Action.tapAddBuyNextTimeOnShopping();
    $.delay(5);

    Action.tapButtonOnTabBar(3);
    Action.tapShoppingCartlist(0);
    $.delay(sleep);

    Action.tapButtonOnTabBar(3);
    $.delay(5);

    Action.tapShoppingCartlist(0);
    $.delay(20);

    //tap buy next time tab and back
    Action.tapBuyNextTime();
    $.delay(20);
  
    Assert.checkShoppingCartInformationAndPurchaseInformationDisplay(6,"規格:");
    Assert.checkShoppingCartInformationAndPurchaseInformationDisplay(8,"小計:");
    //restore
    Action.tapButtonOnTabBar(3);
    $.delay(5);

    Action.tapDeleteOnShoppingCart();
    $.delay(sleep);

    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
    Action.tapButtonOnTabBar(0);
});

test("[1959555] [Shopping cart]Verify user can access shopping cart details page repeatedly." ,function () {
    target.logDeviceInfo();
    Action.cleanSearches();
    Action.tapButtonOnTabBar(2);
    $.delay(sleep);

    Action.tapItemOnCategoryScreenWhenItemPage(0);
    $.delay(sleep);

    Action.goCommodityTab();
    Action.pageShow();

    Action.tapItemOnProductListScreen();
    $.delay(15);

    obj.scrollDowns(1);
    $.delay(10);

    Action.addToShoppingCart();
    Action.chooseTheSizeOnShoppingCart();
    Action.tapConfirmOnShoppingCart();

    //switch between store and shopping cart
    //go to shopping cart page
    Action.tapButtonOnTabBar(3);
    $.delay(sleep);

    //Verify 購物車清單 list
    Assert.tapTabCheckSListDisplay();
    $.delay(5);

    Action.tapShoppingCartlist(0);
    $.delay(sleep);

    Action.tapButtonOnTabBar(3);
    $.delay(5);

    Action.tapShoppingCartlist(0);
    $.delay(20);

    Assert.checkbutButtonShoppingCart();

    //delete shopping cart
    Action.tapButtonOnTabBar(3);
    $.delay(5);

    Action.tapDeleteOnShoppingCart();

    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
});

test("[1977445] [Store Listings]Verify user can see some basic information about the Store in its store listings page", function () {
    target.logDeviceInfo();
    Action.cleanSearches();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("Messa 米莎");
    Action.tapKeyboardSearch();
    $.delay(sleep);

    Action.tapStoreTab();
    $.delay(10);

    Action.tapSearchResultOfStore();
    $.delay(5);
    target.logElementTree();

    Assert.ckeckHeartIconOnNavigationBar();

    Action.tapStoreNameLinkOnFavoriteStores();
    $.delay(15);

    //Verify sales promotion activity
    Assert.checkSalesPromotionActivityOnStore(1,2);
    $.delay(20);

    Action.goBack();
    $.delay(5);

    Action.tapShoppingInformationPage();
    $.delay(5);

    //Verify shopping information page
    Assert.ShoppingInformationPage();
    Action.goBack();
    $.delay(5);

    Action.tapStoreNameOnNavigationBar();
    $.delay(sleep);

    Assert.storeRatingShowCorrectOnNavigationBar(1);
    Action.tapStoreNameOnNavigationBar();

    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
    Action.tapButtonOnTabBar(0);
});

test("[1952828] [[Store Listings]verfiy user can access the listings page.", function () {
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
    
    Action.tapSearchIconOnNavBarWhenSRP();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    $.delay(10);
    
    //verify 共xxxx筆結果 show correct.
    if(target.systemVersion() == "6.1.3" || target.systemVersion() == "6.1.4"){
        var numberOfItems = app.mainWindow().collectionViews()[0].staticTexts()[1];
    }
    else{
        var numberOfItems = app.mainWindow().collectionViews()[0].staticTexts()[0];
    }

    Assert.numberOfItemsShowCorrect(numberOfItems);

    //verify the search result list
    Assert.tapTabCheckSListDisplay();

    //verify 搜尋全部商店 buttons
    Assert.checkButtonsWhenSmoke(0,"搜尋全部商店");

    //verify 進階 buttons
    Assert.checkButtonsWhenSmoke(1,"進階");
    $.delay(sleep);

    //tap commodity picture
    Action.tapCommodityPictureOnSearchResultsPage();
    $.delay(15);

    obj.scrollDowns(1);
    $.delay(10);

    var tapCommodityPictureShowPage = app.mainWindow().collectionViews()[0].cells()[1].name();

    //Verify screen successful navigated to item page.
    Assert.itemPageShowCorrectOnCoatSearchPage(tapCommodityPictureShowPage);

    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
    Action.tapButtonOnTabBar(0);
});