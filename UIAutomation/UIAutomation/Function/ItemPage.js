test("[1953619] Verify the for piece goods discount", function () {
    target.logDeviceInfo();
    Action.determineTheLoginWhenShopping();
    Action.cleanSearches();
    $.delay(sleep);

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
    Action.tapChooseOnItemPage(varTestsPageNameOnSalesPromotion);

    $.delay(10);

    //check go to 促銷活動 page
    Assert.checkSearchPage(varTestsPageNameOnSalesPromotion);

    //check 促銷活動  content exist
    Assert.checkSalesPromotionActivity();

    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
    Action.tapButtonOnTabBar(0);
});

test("[1953617] Verify list of activities the for full discount activity list", function () {
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
    $.delay(sleep);

    Action.tapCancelOnShoppingCart(); 
    Action.tapChooseOnItemPage(varTestsPageNameOnSalesPromotion);
    $.delay(5);

    try{
        //check full discount
        var salesPromotionActivity = app.mainWindow().collectionViews()[0].cells()[1].staticTexts()[0];
        Assert.elementsShouldContainText(salesPromotionActivity,varTestsSalesPromotionActivity);
    }
    catch (err) {
        //Without access to relevant data, so the check go to varTestsPageNameOnSalesPromotion page
        Assert.checkSearchPage(varTestsPageNameOnSalesPromotion);
    }

    Action.tapChoosePreductCategoryWhenOptions(0,1);
    $.delay(30);

    try{
        //tap link ,check link page
        Assert.checkTextShowCorrectly(2,varTestsCheckTextShowCorrectlyOnSalesPromotion);
    }
    catch (err) {
        //30 seconds without display, so the check go to varTestsPageNameOnSalesPromotion page
        Assert.checkSearchPage(varTestsPageNameOnSalesPromotion);
    }

    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
    Action.tapButtonOnTabBar(0);
});

test("[1953614] Verify the for full discount activity list", function () {
    target.logDeviceInfo();
    Action.cleanSearches();
    $.delay(sleep);

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
    $.delay(sleep);

    Action.tapCancelOnShoppingCart(); 
    Action.tapChooseOnItemPage(varTestsPageNameOnSalesPromotion);
    $.delay(5);

    try{
        //check full discount
        var salesPromotionActivity = app.mainWindow().collectionViews()[0].cells()[1].staticTexts()[0];
        Assert.elementsShouldContainText(salesPromotionActivity,varTestsSalesPromotionActivity);
    }
    catch (err) {
        Assert.checkSearchPage(varTestsPageNameOnSalesPromotion);
    }

    Assert.checkSalesPromotionActivity();

    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
    Action.tapButtonOnTabBar(0);
});

test("[1959927] Verify user can add an item to shopping cart.", function () {
    target.logDeviceInfo();
    //login the app
    Action.cleanSearches();
    $.delay(sleep);

    //add item to shopping cart
    Action.tapButtonOnTabBar(2);
    $.delay(sleep);

    Action.tapItemOnCategoryScreenWhenItemPage(0);
    $.delay(sleep);

    Action.goCommodityTab();
    $.delay(10);

    Action.tapItemOnProductListScreen();
    $.delay(15);
    
    var firstName = app.mainWindow().collectionViews()[0].cells()[1].staticTexts()[0].name();

    obj.scrollDowns(1);
    $.delay(10);

    Action.addToShoppingCart();
    Action.chooseTheSizeOnShoppingCart();
    Action.tapConfirmOnShoppingCart();

    //go to shopping cart page
    Action.tapButtonOnTabBar(3);
    $.delay(5);

    Action.tapShoppingCartlist(0);
    $.delay(5);

    Action.tapButtonOnTabBar(3);
    $.delay(5);

    Action.tapShoppingCartlist(0);
    $.delay(20);

    Action.tapStoreOnShoppingCartPage();
    $.delay(15);

    //check the item is added to shopping cart
    Assert.checkStoreNameWhenItemPage(firstName);
    $.delay(sleep);

    //restore
    Action.tapButtonOnTabBar(3);
    $.delay(sleep);

    Action.tapDeleteOnShoppingCart();
    $.delay(sleep);

    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
});

test("[1959893] Verify Sharing method can be shown.", function () {
    target.logDeviceInfo();
    //login the app
    Action.cleanSearches();

    //tap share itme
    $.delay(sleep);
    Action.tapButtonOnTabBar(2);
    $.delay(sleep);

    Action.tapItemOnCategoryScreenWhenItemPage(0);
    $.delay(sleep);

    Action.goCommodityTab();
    $.delay(10);

    Action.tapItemOnProductListScreen();
    $.delay(15);

    obj.scrollDowns(2);
    $.delay(10);

    Action.tapShareOnProductPage();
    $.delay(5);

    //check share is enable
    Assert.checkShareButtonIsEnabled();

    //restore
    $.delay(sleep);
    Action.tapCancelButtonOnShareViews();
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
});

//6.16
test("[1953620] verify the gifts are displayed in the shopping cart.", function () {
    target.logDeviceInfo();
    //login the app
    Action.cleanSearches();
    $.delay(sleep);

    //search item page with gifts
    Action.tapButtonOnTabBar(2);
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese(varTestsSearchBoxInputDataGift);
    Action.tapKeyboardSearch();
    $.delay(5);

    //go to item page and add item to shoppingcart
    Action.tapCommodityPictureOnSearchResultsPage();
    $.delay(15);

    obj.scrollDowns(1);
    $.delay(10);

    Action.addToShoppingCartWhenItemPage();
    $.delay(5);

    //go to shopping cart page
    Action.tapButtonOnTabBar(3);
    $.delay(5);

    Action.tapShoppingCartlist(0);
    $.delay(5);

    Action.tapButtonOnTabBar(3);
    $.delay(5);

    Action.tapShoppingCartlist(0);
    $.delay(20);

    //check the gifts are displayed correctly
    var gift = app.mainWindow().scrollViews()[0].webViews()[0].links()[4].staticTexts()[0];
    $.delay(5);

    Assert.elementsShouldContainText(gift, varTestsSearchBoxInputDataGift);
    $.delay(sleep);

    //restore
    Action.tapButtonOnTabBar(3);
    $.delay(sleep);

    Action.tapDeleteOnShoppingCart();
    $.delay(sleep);

    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
});

test("[1953626] verify Payment.", function () {
    target.logDeviceInfo();

    //login the app
    Action.cleanSearches();
    $.delay(sleep);

    //go to itme page
    Action.tapButtonOnTabBar(2);
    $.delay(sleep);

    Action.tapItemOnCategoryScreenWhenItemPage(0);;
    Action.goCommodityTab();
    $.delay(5);

    Action.tapItemOnProductListScreen();
    $.delay(15);

    obj.scrollDowns(2);
    $.delay(10);

    Action.tapPaymentOnProductPage();
    $.delay(10);

    target.logElementTree();

    //check the payment displayed correctly
    Assert.checkPaymentAndDelivery();

    //restore
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
    Action.tapButtonOnTabBar(0);
});

//6.30
test("[1953629] Verify the store page, our classification.", function () {
    target.logDeviceInfo();
    Action.cleanSearches();
    $.delay(sleep);

    //go to itme page
    Action.tapButtonOnTabBar(2);
    $.delay(sleep);

    Action.tapItemOnCategoryScreenWhenItemPage(0);;
    Action.goCommodityTab();
    $.delay(10);

    Action.tapItemOnProductListScreen();
    $.delay(15);

    obj.scrollDowns(2);
    $.delay(sleep);

    var version = target.systemVersion();
    version = version.substring(0, version.lastIndexOf("."));
    if(version == "6.1") {
        Action.tapChooseOnItemPage(3);
    }
    else{
        Action.tapChooseOnItemPage(varTestsItemPageLinksLookGoods);
    }
    
    $.delay(10);

    //tap  store classification
    Action.tapheartIconOnStoreWhenSRP();
    $.delay(sleep);

    Assert.checkClassificationButtonIsEnabled(1);
    Assert.checkClassificationShowListOnItemPage();

    //restore
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
    Action.tapButtonOnTabBar(0);
});

test("[1953631] verify '分享商品' Layer.", function () {
    target.logDeviceInfo();
    Action.cleanSearches();

    //tap share itme
    $.delay(sleep);
    Action.tapButtonOnTabBar(2);
    $.delay(sleep);

    Action.tapItemOnCategoryScreenWhenItemPage(0);
    $.delay(sleep);

    Action.goCommodityTab();
    $.delay(10);

    Action.tapItemOnProductListScreen();
    $.delay(15);

    obj.scrollDowns(2);
    $.delay(sleep);

    Action.tapShareOnProductPage();
    $.delay(5);
    target.logElementTree();
    $.delay(sleep);

    //check share is enable
    Assert.checkShareButtonIsEnabled();
    Assert.checkShareButtonShowOnItemPage();

    //restore
    $.delay(sleep);
    Action.tapCancelButtonOnShareViews();
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
});

test("[1959917] Verify item link,promotion link,gifi link work well.", function () {
    target.logDeviceInfo();
    Action.cleanSearches();

    //tap share itme
    $.delay(sleep);
    Action.tapButtonOnTabBar(2);
    $.delay(sleep);

    Action.tapItemOnCategoryScreenWhenItemPage(0);
    $.delay(sleep);

    Action.goCommodityTab();
    $.delay(10);

    Action.tapItemOnProductListScreen();
    $.delay(15);

    Action.tapActivityLink();
    $.delay(sleep);

    //check go to varTestsPageNameOnSalesPromotion" page
    Assert.checkSearchPage(varTestsPageNameOnSalesPromotion);
    Action.goBack();
    $.delay(10);

    obj.scrollDowns(1);
    $.delay(sleep);

    Assert.itemPageShowCorrect();

    var version = target.systemVersion();
    version = version.substring(0, version.lastIndexOf("."));
    if(version == "6.1") {
        Action.tapChooseOnItemPage(0);
    }
    else{
        Action.tapChooseOnItemPage(varTestsPageNameOnSalesPromotion);
    }
    
    $.delay(sleep);

    //check go to varTestsPageNameOnSalesPromotion" page
    Assert.checkSearchPage(varTestsPageNameOnSalesPromotion);

    //restore
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
});

test("[1959926] Verify user can not select dimmed item specification" ,function () {
    target.logDeviceInfo();
    Action.cleanSearches();

    //add item to shopping cart
    Action.tapButtonOnTabBar(2);
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();

    Action.englishInputMethod();
    
    Action.searchBarInputChinese(varTestsSearchBoxInputGoodsName6);
    Action.tapKeyboardSearch();
    $.delay(10);

    Action.tapSearchResultOfStore();
    $.delay(15);
    
    obj.scrollDowns(1);
    $.delay(sleep);

    Action.addToShoppingCartWhenItemPage();
    Action.chooseTheSizeOnShoppingCart();
    $.delay(sleep);

    Assert.checkTheGrayOptionsIsNotTaped();
    Action.tapCancelOnShoppingCart();

    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(2);

    Action.tapButtonOnTabBar(0);
    Action.tapButtonOnTabBar(0);
});

test("[1953623] Verify purchased product in the shopping cart display" ,function () {
    target.logDeviceInfo();
    Action.cleanSearches();

    //add item to shopping cart
    Action.tapButtonOnTabBar(2);
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();

    Action.englishInputMethod();
    
    Action.searchBarInputChinese(varTestsSearchBoxInputGoodsName4);
    Action.tapKeyboardSearch();
    $.delay(10);

    Action.tapSearchResultOfStore();
    $.delay(15);
    
    obj.scrollDowns(1);
    $.delay(sleep);

    var version = target.systemVersion();
    version = version.substring(0, version.lastIndexOf("."));
    if(version == "6.1") {
        Action.tapChooseOnItemPageWhenBuy(5,0);
    }
    else{
        Action.tapChooseOnItemPage(varTestsItemPageLinksPurchaseOfGoods);
    }
 
    $.delay(5);

    Action.chooseItemOnCollectionViews(0,0,0);
    $.delay(sleep);

    Action.goBack();
    $.delay(15);
    
    //buy to goods
    Action.addToShoppingCartWhenItemPage();

    Action.chooseTheSizeOnShoppingCart();
    Action.tapConfirmOnShoppingCart();
    
    //go to shopping cart page
    Action.tapButtonOnTabBar(3);
    $.delay(5);

    Action.tapShoppingCartlist(0);
    $.delay(sleep);

    Action.tapButtonOnTabBar(3);
    $.delay(5);

    Action.tapShoppingCartlist(0);
    $.delay(20);

    obj.scrollDownsWhenSettlement(1);
    $.delay(sleep);
    target.logElementTree();

    Assert.tapSettleAccountsOnShopping(12,varTestsItemPageLinksPurchaseOfGoods);
    Action.goBack();
    $.delay(5);

    Action.tapDeleteOnShoppingCart();
    $.delay(sleep);

    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
    Action.tapButtonOnTabBar(0);
});

test("[1959897] Verify purchased product in the shopping cart display" ,function () {
    target.logDeviceInfo();
    Action.cleanSearches();

    //add item to shopping cart
    Action.tapButtonOnTabBar(2);
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();

    Action.englishInputMethod();
    
    Action.searchBarInputChinese(varTestsSearchBoxInputGoodsName5);
    Action.tapKeyboardSearch();
    $.delay(10);

    Action.tapSearchResultOfStore();
    $.delay(15);
    
    obj.scrollDowns(1);
    $.delay(5);

    Action.addToShoppingCartWhenItemPage();
    $.delay(5);

    Action.tapSizeOnItem();

    Action.tapCancelOnShoppingCart(); 
    $.delay(sleep);

    Assert.checkTheGrayOptionsIsNotTaped();
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
    Action.tapButtonOnTabBar(0);
});

test("[1977508] [bug case]verify It cann't show collection info when user click 7﹣11 icon or 全家 icon in item page" ,function () {
    target.logDeviceInfo();
    Action.cleanSearches();

    //add item to shopping cart
    Action.tapButtonOnTabBar(2);
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();

    Action.englishInputMethod();
    
    Action.searchBarInputChinese(varTestsSearchBoxInputDataStore1);
    Action.tapKeyboardSearch();
    $.delay(5);

    Action.tapStoreTab();
    $.delay(15);

    //go to 东京著衣 store
    Action.tapSearchResultOfStore();
    $.delay(15);
    
    //go to 东京著衣 goods
    Action.chooseItemOnCollectionViews(0,2,0);
    $.delay(sleep);

    //tap 7-11 icon
    Action.tapDMFirstStoreIcon();

    //tap 全家 icon
    Action.tapDMSecondStoreIcon();

    Action.tapButtonOnTabBar(4);
    Action.tapButtonOnMyUser(3);
    $.delay(10);

    //Verify there is no goods collection
    Assert.searchSuggestionsPageDisplayOnRecentHisory();

    Action.tapButtonOnTabBar(4);
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
    Action.tapButtonOnTabBar(0);
});

test("[1953636] verify favorite items", function () {
    target.logDeviceInfo();
    Action.cleanSearches();

    Action.tapButtonOnTabBar(2);
    $.delay(sleep);

    Action.tapItemOnCategoryScreenWhenItemPage(0);

    Action.goCommodityTab();
    $.delay(10);

    Action.tapItemOnProductListScreen();
    $.delay(5);

    Action.tapFavoritesIcon(1);
    $.delay(sleep);

    var firstStoreName = app.mainWindow().collectionViews()[0].cells()[1].staticTexts()[0].value();

    //go user collection page
    Action.tapButtonOnTabBar(4);
    $.delay(5);

    Action.tapProductCollectionButton();
    $.delay(sleep);

    //check the stores name are correct
    Assert.checkStoreName(firstStoreName);
    $.delay(sleep);
    
    Action.tapCollectionList();
    $.delay(sleep);
    
    Action.tapFavoritesIcon(1);
    Action.tapButtonOnTabBar(4);
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
});

test("[1959931] Verify repeatedly into the item page to see the gifts and add the number of goods.", function () {
    target.logDeviceInfo();
    Action.cleanSearches();
    $.delay(sleep);

    //search item page with gifts
    Action.tapButtonOnTabBar(2);
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese(varTestsSearchBoxInputDataGift);
    Action.tapKeyboardSearch();
    $.delay(10);

    //go to item page and add item to shoppingcart
    Action.tapCommodityPictureOnSearchResultsPage();
    $.delay(15);

    obj.scrollDowns(1);
    $.delay(10);

    var version = target.systemVersion();
    version = version.substring(0, version.lastIndexOf("."));
    if(version == "6.1") {
        Action.tapChooseOnItemPageWhenBuy(4,0);
    }
    else{ 
        Action.tapChooseOnItemPage(varTestsItemPageLinksAttachedToTheGift);
    }
    
    Action.goBack();

    var version = target.systemVersion();
    version = version.substring(0, version.lastIndexOf("."));
    if(version == "6.1") {
        Action.tapChooseOnItemPageWhenBuy(4,0);
    }
    else{ 
        Action.tapChooseOnItemPage(varTestsItemPageLinksAttachedToTheGift);
    }
    Action.goBack();

    var version = target.systemVersion();
    version = version.substring(0, version.lastIndexOf("."));
    if(version == "6.1") {
        Action.tapChooseOnItemPageWhenBuy(4,0);
    }
    else{ 
        Action.tapChooseOnItemPage(varTestsItemPageLinksAttachedToTheGift);
    }
    Assert.checkSearchPage("贈品");

    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(2);

    //search item page with purchased.
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese(varTestsSearchBoxInputGoodsName4);
    Action.tapKeyboardSearch();
    $.delay(10);

    Action.tapSearchResultOfStore();
    $.delay(15);
    
    obj.scrollDowns(1);
    $.delay(sleep);

    var version = target.systemVersion();
    version = version.substring(0, version.lastIndexOf("."));
    if(version == "6.1") {
        Action.tapChooseOnItemPageWhenBuy(5,0);
    }
    else{
        Action.tapChooseOnItemPage(varTestsItemPageLinksPurchaseOfGoods);
    }
    Assert.checkSearchPage(varTestsItemPageLinksPurchaseOfGoods);
    Action.goBack();

    $.delay(sleep);
    var version = target.systemVersion();
    version = version.substring(0, version.lastIndexOf("."));
    if(version == "6.1") {
        Action.tapChooseOnItemPageWhenBuy(5,0);
    }
    else{
        Action.tapChooseOnItemPage(varTestsItemPageLinksPurchaseOfGoods);
    }
    Assert.checkSearchPage(varTestsItemPageLinksPurchaseOfGoods);
    Action.goBack();

    $.delay(5);
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
    Action.tapButtonOnTabBar(0);
});

test("[1953627] verify Shopping methods.", function () {
    target.logDeviceInfo();
    Action.cleanSearches();
    $.delay(sleep);

    Action.tapButtonOnTabBar(2);
    $.delay(sleep);

    Action.tapItemOnCategoryScreenWhenItemPage(0);
    $.delay(sleep);

    Action.goCommodityTab();
    $.delay(10);

    Action.tapItemOnProductListScreen();
    $.delay(15);

    obj.scrollDowns(2);
    $.delay(10);

    Action.tapChooseOnItemPage(varTestsShoppingInformationPage);
    $.delay(5);

    Assert.ShoppingInformationPage();

    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
    Action.tapButtonOnTabBar(0);
});

test("[1953629] Verify the store page, our goods.", function () {
    target.logDeviceInfo();
    Action.cleanSearches();
    $.delay(sleep);

    //go to itme page
    Action.tapButtonOnTabBar(2);
    $.delay(sleep);

    Action.tapItemOnCategoryScreenWhenItemPage(0);;
    Action.goCommodityTab();
    $.delay(10);

    Action.tapItemOnProductListScreen();
    $.delay(15);

    obj.scrollDowns(2);
    $.delay(sleep);

    var version = target.systemVersion();
    version = version.substring(0, version.lastIndexOf("."));
    if(version == "6.1") {
        Action.tapChooseOnItemPage(3);
    }
    else{
        Action.tapChooseOnItemPage(varTestsItemPageLinksLookGoods);
    }
    
    $.delay(5);
    Assert.checkStorelistShowCorrect();

    //restore
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
    Action.tapButtonOnTabBar(0);
});