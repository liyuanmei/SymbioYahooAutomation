test("[1953619] Verify the for piece goods discount", function () {
    Action.cleanSearches();
    $.delay(sleep);

    Action.tapButtonOnTabBar(2);
    $.delay(sleep);

    Action.tapItemOnCategoryScreenWhenItemPage(0);
    $.delay(sleep);

    Action.goCommodityTab();
    $.delay(10);

    Action.tapItemOnProductListScreen();
    $.delay(sleep);

    obj.scrollDowns(1);
    Action.addToShoppingCart();
    $.delay(sleep);

    Action.tapCancelOnShoppingCart(); 
    Action.tapSale();
    $.delay(10);

    Assert.checkSearchPage("促銷活動");
    $.delay(sleep);

    Assert.checkSalesPromotionActivity();

    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
    Action.tapButtonOnTabBar(0);
});

test("[1953617] Verify the for full discount activity list", function () {
    Action.cleanSearches();

    Action.tapButtonOnTabBar(2);
    $.delay(sleep);

    Action.tapItemOnCategoryScreenWhenItemPage(0);
    $.delay(sleep);

    Action.goCommodityTab();
    $.delay(10);

    Action.tapItemOnProductListScreen();
    $.delay(sleep);

    obj.scrollDowns(1);
    Action.addToShoppingCart();
    $.delay(sleep);

    Action.tapCancelOnShoppingCart(); 
    Action.tapSale();
    $.delay(10);

    var salesPromotionActivity = app.mainWindow().collectionViews()[0].cells()[1].staticTexts()[0];
    Assert.elementsShouldContainText(salesPromotionActivity,"滿千");

    Assert.checkSearchPage("促銷活動");

    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
    Action.tapButtonOnTabBar(0);
});

test("[1953614] Verify the for full discount activity list", function () {
    Action.cleanSearches();
    $.delay(sleep);

    Action.tapButtonOnTabBar(2);
    $.delay(sleep);

    Action.tapItemOnCategoryScreenWhenItemPage(0);
    $.delay(sleep);

    Action.goCommodityTab();
    $.delay(10);

    Action.tapItemOnProductListScreen();
    $.delay(sleep);

    obj.scrollDowns(1);

    Action.addToShoppingCart();
    $.delay(sleep);

    Action.tapCancelOnShoppingCart(); 
    Action.tapSale();
    $.delay(10);

    var salesPromotionActivity = app.mainWindow().collectionViews()[0].cells()[1].staticTexts()[0];
    Assert.elementsShouldContainText(salesPromotionActivity,"滿千");
    $.delay(sleep);

    Assert.checkSearchPage("促銷活動");
    $.delay(sleep);

    Assert.checkSalesPromotionActivity();

    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
    Action.tapButtonOnTabBar(0);
});

test("[1959927] Verify user can add an item to shopping cart.", function () {
    //login the app
    Action.cleanSearches();

    //add item to shopping cart
    $.delay(sleep);
    Action.tapButtonOnTabBar(2);
    $.delay(sleep);

    Action.tapItemOnCategoryScreenWhenItemPage(0);
    $.delay(sleep);

    Action.goCommodityTab();
    $.delay(10);

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
    $.delay(5);

    Action.tapButtonOnTabBar(3);
    $.delay(5);

    Action.tapShoppingCartlist(0);
    $.delay(20);

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
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
});

test("[1959893] Verify Sharing method can be shown.", function () {
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
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
});

//6.16
test("[1953620] verify the gifts are displayed in the shopping cart.", function () {
    //login the app
    Action.cleanSearches();
    $.delay(sleep);

    //search item page with gifts
    Action.tapButtonOnTabBar(2);
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("送贈品220130");
    Action.tapKeyboardSearch();
    $.delay(10);

    //go to item page and add item to shoppingcart
    Action.tapCommodityPictureOnSearchResultsPage();
    obj.scrollDowns(1);
    $.delay(5);

    Action.addToShoppingCartWhenItemPage();
    $.delay(sleep);

    //go to shopping cart page
    Action.tapButtonOnTabBar(3);
    $.delay(5);

    Action.tapShoppingCartlist(0);
    $.delay(sleep);

    Action.tapButtonOnTabBar(3);
    $.delay(sleep);

    Action.tapShoppingCartlist(0);
    $.delay(20);

    target.logElementTree();
    $.delay(sleep);

    //check the gifts are displayed correctly
    var gift = app.mainWindow().scrollViews()[0].webViews()[0].links()[4].staticTexts()[0];
    $.delay(5);

    target.logElementTree();
    $.delay(5);

    Assert.elementsShouldContainText(gift, "送贈品");
    $.delay(sleep);

    //restore
    Action.tapButtonOnTabBar(3);
    Action.tapDeleteOnShoppingCart();
    $.delay(sleep);

    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
});

test("[1953626] verify Payment.", function () {
    //login the app
    Action.cleanSearches();
    $.delay(sleep);

    //go to itme page
    Action.tapButtonOnTabBar(2);
    $.delay(sleep);

    Action.tapItemOnCategoryScreenWhenItemPage(0);;
    Action.goCommodityTab();
    $.delay(10);

    Action.tapItemOnProductListScreen();
    $.delay(3);

    obj.scrollDowns(2);
    $.delay(sleep);

    Action.tapPaymentOnProductPage();
    $.delay(5);

    //check the payment displayed correctly
    Assert.checkPaymentAndDelivery();

    //restore
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
    Action.tapButtonOnTabBar(0);
});