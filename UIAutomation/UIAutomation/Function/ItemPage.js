test("[1953619] Verify the for piece goods discount", function () {
    Action.cleanSearches();
    Action.tapAddAccountOnLogin("mobileappstore3", "A1234qwer");
    $.delay(sleep);
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

    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
    Action.tapButtonOnTabBar(0);

    //Log out and remove user login history
    Action.tapButtonOnTabBar(4);
    Action.doUserLogout();

    //Action.tapButtonOnTabBar(4);
    //Action.removeLoginHistory("mobileappstore3");
});

test("[1953617] Verify the for full discount activity list", function () {
    Action.cleanSearches();
    Action.tapAddAccountOnLogin("mobileappstore3", "A1234qwer");
    $.delay(sleep);
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
    $.delay(sleep);

    var salesPromotionActivity = app.mainWindow().collectionViews()[0].cells()[1].staticTexts()[0];
    Assert.elementsShouldContainText(salesPromotionActivity,"滿千");

    Assert.checkSearchPage("促銷活動");
    //Assert.checkSalesPromotionActivity();

    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
    Action.tapButtonOnTabBar(0);

    //Log out and remove user login history
    Action.tapButtonOnTabBar(4);
    Action.doUserLogout();

    //Action.tapButtonOnTabBar(4);
    //Action.removeLoginHistory("mobileappstore3");
});

test("[1953614] Verify the for full discount activity list", function () {
    Action.cleanSearches();
    Action.tapAddAccountOnLogin("mobileappstore3", "A1234qwer");
    $.delay(sleep);
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
    $.delay(sleep);

    var salesPromotionActivity = app.mainWindow().collectionViews()[0].cells()[1].staticTexts()[0];
    Assert.elementsShouldContainText(salesPromotionActivity,"滿千");

    Assert.checkSearchPage("促銷活動");
    Assert.checkSalesPromotionActivity();

    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
    Action.tapButtonOnTabBar(0);

    //Log out and remove user login history
    Action.tapButtonOnTabBar(4);
    Action.doUserLogout();

    //Action.tapButtonOnTabBar(4);
    //Action.removeLoginHistory("mobileappstore3");
});

test("[1959927] Verify user can add an item to shopping cart.", function () {
    //login the app
    Action.cleanSearches();
    Action.tapAddAccountOnLogin("mobileappstore3", "A1234qwer");

    //add item to shopping cart
    $.delay(sleep);
    Action.tapButtonOnTabBar(2);
    $.delay(sleep);

    Action.tapItemOnCategoryScreenWhenItemPage(0);
    $.delay(sleep);

    Action.goCommodityTab();
    $.delay(sleep);

    Action.tapItemOnProductListScreen();
    $.delay(sleep);
    
    target.logElementTree();
    var firstName = app.mainWindow().collectionViews()[0].cells()[1].staticTexts()[0].name();
    obj.scrollDowns(1);
    Action.addToShoppingCart();
    Action.chooseTheSizeOnShoppingCart();
    Action.tapConfirmOnShoppingCart();

    //go to shopping cart page
    Action.tapButtonOnTabBar(3);
    $.delay(5);

    Action.tapShoppingCartlist(0);
    $.delay(10);

    Action.tapStoreOnShoppingCartPage();
    $.delay(5);

    //check the item is added to shopping cart
    Assert.checkStoreNameWhenItemPage(firstName);

    //restore
    $.delay(sleep);
    Action.tapButtonOnTabBar(3);
    Action.tapDeleteOnShoppingCart();
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(2);

    //Log out and remove user login history
    Action.tapButtonOnTabBar(4);
    Action.doUserLogout();

    //Action.tapButtonOnTabBar(4);
    //Action.removeLoginHistory("mobileappstore3");
});

test("[1959893] Verify Sharing method can be shown.", function () {
    //login the app
    Action.cleanSearches();
    Action.tapAddAccountOnLogin("mobileappstore3", "A1234qwer");

    //tap share itme
    $.delay(sleep);
    Action.tapButtonOnTabBar(2);
    $.delay(sleep);

    Action.tapItemOnCategoryScreenWhenItemPage(0);
    $.delay(sleep);

    Action.goCommodityTab();
    $.delay(sleep);

    Action.tapItemOnProductListScreen();
    $.delay(sleep);

    obj.scrollDowns(2);
    $.delay(sleep);

    Action.tapShareOnProductPage();
    $.delay(5);

    //check share is enable
    Assert.checkShareButtonIsEnabled();

    //restore
    $.delay(sleep);
    Action.tapCancelButtonOnShareViews();
    Action.tapButtonOnTabBar(2);
    //Log out and remove user login history
    Action.tapButtonOnTabBar(4);
    Action.doUserLogout();

    //Action.tapButtonOnTabBar(4);
    //Action.removeLoginHistory("mobileappstore3");
});