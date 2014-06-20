test("[1959876] Verify the number of bottom bubble on shopping cart" , function () {
    Action.cleanSearches();
    $.delay(sleep);

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
    
    Action.goBack();
    $.delay(5);

    Action.tapDeleteOnShoppingCart();
    $.delay(sleep);

    Action.tapButtonOnTabBar(3);

    Assert.ShoppingCartDisplayCorrectly();
    Action.tapButtonOnTabBar(3);
    Action.tapButtonOnTabBar(3);
    Action.tapButtonOnTabBar(0);
});

test("[1959883] verify all delete shopping cart of goods" ,function () {
    Action.cleanSearches();
    $.delay(5);

    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);

    Action.goApparelCategoryWhenShoppingCart();
    Action.goCommodityTab();
    $.delay(sleep);

    //Tap item on list to navigate to item page.
    Action.tapItemOnProductListScreen();
    $.delay(sleep);

    obj.scrollDowns(1);
    $.delay(sleep);
     
    Action.addToShoppingCart();
    Action.chooseTheSizeOnShoppingCart();
    $.delay(sleep);

    Action.tapConfirmOnShoppingCart();

    Action.tapButtonOnTabBar(3);

    Action.tapDeleteOnShoppingCart();
    //Action.tapConfirmOnDeleteShoppingCart();

    Action.tapButtonOnTabBar(3);

    Assert.ShoppingCartDisplayCorrectly();

    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
});

test("[1977500] verify all delete shopping cart of goods" ,function () {
    //login the app
    Action.cleanSearches();

    //add goods to shopping cart
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
    Action.chooseTheSizeOnShoppingCart();
    Action.tapConfirmOnShoppingCart();

    //switch between store and shopping cart
    Action.tapButtonOnTabBar(3);
    
    Action.tapShoppingCartlist(0);
    $.delay(10);
  
    Action.tapStoreOnShoppingCartPage();

    Action.goBack();

    Assert.checkbutButtonShoppingCart();

    //delete shopping cart
    Action.tapButtonOnTabBar(3);
    Action.tapDeleteOnShoppingCart();

    //restore settings
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(2);

    //Log out and remove user login history
    Action.tapButtonOnTabBar(0);
});

//6.12
test("[1959885] verify the shopping cart detail" ,function () {
    //login the app
    Action.cleanSearches();

    //add item to shopping cart
    Action.tapButtonOnTabBar(2);
    Action.tapItemOnCategoryScreenWhenItemPage(0);
    Action.goCommodityTab();
    $.delay(sleep);

    Action.tapItemOnProductListScreen();
    $.delay(sleep);
    
    obj.scrollDowns(1);
    $.delay(sleep);

    Action.addToShoppingCart();
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

    //check item number is correct
    Assert.checkItemNumberOnShoppingCartIsEnabled();

    //restore
    Action.tapButtonOnTabBar(3);
    $.delay(sleep);

    Action.tapDeleteOnShoppingCart();
    $.delay(sleep);

    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(2);

    //Log out and remove user login history
    Action.tapButtonOnTabBar(0);
});

test("[1959903] Verify user can view next buy items then view shopping cart items" ,function () {
    //login the app
    Action.cleanSearches();

    //add item to shopping cart
    Action.tapButtonOnTabBar(2);
    Action.tapItemOnCategoryScreenWhenItemPage(0);
    Action.goCommodityTab();
    $.delay(sleep);

    Action.tapItemOnProductListScreen();
    $.delay(sleep);
    
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

    //tap buy next time tab and back
    Action.tapBuyNextTime();
    $.delay(5);

    Action.goBack();
    Action.tapShoppingCartlist(0);
    $.delay(10);

    //check shopping cart list can bi tapped and no issue
    Assert.checkSearchPage("本店購物車");

    //restore
    Action.tapButtonOnTabBar(3);
    Action.tapDeleteOnShoppingCart();
    $.delay(sleep);

    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(2);

    //Log out and remove user login history
    Action.tapButtonOnTabBar(0);
});