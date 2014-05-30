test("[1959876] Verify the number of bottom bubble on shopping cart" , function () {
    Action.cleanSearches();
    $.delay(sleep);
    Action.doUserLogin("mobileappstore3", "A1234qwer");

    Action.goApparelCategoryWhenShoppingCart();
    Action.goCommodityTab();
    $.delay(sleep);

    //Tap item on list to navigate to item page.
    Action.tapItemOnProductListScreen();
    $.delay(sleep);

    obj.scrollDowns(1);
    $.delay(sleep);

    //target.logElementTree();
    //$.delay(sleep);
     
    Action.butButtonShoppingCart();

    Action.chooseTheSizeOnShoppingCart();
    Action.tapConfirmOnShoppingCart();
    Action.tapButtonOnTabBar(3);
    
    Action.tapShoppingCartlist(0);
    $.delay(10);

    Assert.checkbutButtonShoppingCart();

    app.mainWindow().logElementTree();
    $.delay(3);
    
    Action.goBack();

    Action.tapDeleteOnShoppingCart();
    $.delay(sleep);

    Action.tapButtonOnTabBar(3);

    Assert.ShoppingCartDisplayCorrectly();

    Action.tapButtonOnTabBar(3);

    //Log out and remove user login history
    Action.tapButtonOnTabBar(4);
    Action.doUserLogout();

    Action.tapButtonOnTabBar(4);
    Action.removeLoginHistory("mobileappstore3");
});

test("[1959883] verify all delete shopping cart of goods" ,function () {
    Action.cleanSearches();
    Action.doUserLogin("mobileappstore3", "A1234qwer");
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

    //target.logElementTree();
    //$.delay(sleep);
     
    Action.addToShoppingCart();
    Action.chooseTheSizeOnShoppingCart();
    $.delay(sleep);

    target.logElementTree();
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

    //Log out and remove user login history
    Action.tapButtonOnTabBar(4);
    Action.doUserLogout();

    Action.tapButtonOnTabBar(4);
    Action.removeLoginHistory("mobileappstore3");
});
