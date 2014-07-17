test("[1959915] Verfiy check out conmponent on step 3" ,function () {
    target.logDeviceInfo();
    Action.determineTheLoginWhenShopping();
    Action.cleanSearches();

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
    $.delay(5);

    Action.tapShoppingCartlist(0);
    $.delay(sleep);

    Action.tapButtonOnTabBar(3);
    $.delay(5);

    Action.tapShoppingCartlist(0);
    $.delay(20);

    Action.tapSettleAccounts();
    $.delay(20);
    
    Assert.tapSettleAccountsOnShopping(6,"購物車明細 (1)");
    $.delay(10);

    obj.scrollDownsWhenSettlement(3);
    $.delay(sleep);

    try{
        var convenienceStorePayment = app.mainWindow().scrollViews()[0].webViews()[0].staticTexts()["全家繳費不取貨"];
        Assert.elementsShouldContainText(convenienceStorePayment,"全家繳費不取貨");
    }
    catch (err) {
        //No data
        $.delay(sleep);
        target.logElementTree();
    }

    Action.tapSettleAccounts();
    Assert.checkShoppingCartInformationAndPurchaseInformationDisplay(0,"本店購物車");
    Assert.checkShoppingCartInformationAndPurchaseInformationDisplay(2,"完成訂購");

    //restore
    Action.tapButtonOnTabBar(3);
    $.delay(5);

    Action.tapDeleteOnShoppingCart();
    $.delay(sleep);

    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
});

test("[1959916] Verify order inquiry details page can show normally" ,function () {
    target.logDeviceInfo();
    Action.cleanSearches();

    //add item to shopping cart
    Action.tapButtonOnTabBar(2);
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();

    Action.englishInputMethod();
    
    Action.searchBarInputChinese("東京著衣");
    Action.tapKeyboardSearch();
    Action.pageShow();

    Action.tapStoreTab();
    $.delay(15);

    //go to 东京著衣 store
    Action.tapSearchResultOfStore();
    $.delay(15);
    
    //go to 东京著衣 goods
    Action.chooseItemOnCollectionViews(0,2,0);
    $.delay(10);

    obj.scrollDowns(1);
    $.delay(5);

    Action.chooseButtonsOnCollectionViews(0,4,1);
    $.delay(5);
    
    //go to shopping cart page
    Action.tapButtonOnTabBar(3);
    $.delay(5);

    Action.tapShoppingCartlist(0);
    $.delay(sleep);

    Action.tapButtonOnTabBar(3);
    $.delay(5);

    Action.tapShoppingCartlist(0);
    $.delay(20);

    Action.tapSettleAccounts();
    $.delay(20);

    Assert.tapSettleAccountsOnShopping(6,"購物車明細 (1)");
    $.delay(10);

    Action.tapSettleAccounts();
    Assert.checkShoppingCartInformationAndPurchaseInformationDisplay(0,"本店購物車");
    Assert.checkShoppingCartInformationAndPurchaseInformationDisplay(2,"完成訂購");
    //restore
    Action.tapButtonOnTabBar(3);
    $.delay(5);

    Action.tapDeleteOnShoppingCart();
    $.delay(sleep);

    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
});

test("[1959918] Verify user can change other delivery places." ,function () {
    target.logDeviceInfo();
    Action.cleanSearches();
    $.delay(sleep);

    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    
    Action.searchBarInputChinese("SunShine 防水鏤空果凍平底包鞋");
    Action.tapKeyboardSearch();
    Action.pageShow();

    Action.tapSearchResultOfStore();
    $.delay(sleep);

    obj.scrollDowns(1);
    $.delay(15);

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
    $.delay(25);

    obj.scrollDownsWhenSettlement(2);
    $.delay(sleep);

    Action.tapSettleAccounts();
    $.delay(20);

    Assert.tapSettleAccountsOnShopping(6,"購物車明細 (1)");
    $.delay(10);

    obj.scrollDownsWhenSettlement(2);
    $.delay(sleep);

    //check 重選其它門市 display
    Assert.wheelsWhenCheckOut();

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