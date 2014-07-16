test("[1977505] [bug case]verify user can add goods to shopping cart in「促銷活動」page after user logout then login.." , function () {
    target.logDeviceInfo();
    Action.determineTheLoginWhenShopping();
    Action.cleanSearches();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("Messa 米莎");
    Action.tapKeyboardSearch();
    $.delay(sleep);

    Action.tapStoreTab();
    $.delay(10);

    Action.tapSearchResultOfStore();
    $.delay(sleep);

    Action.tapStoreNameLinkOnFavoriteStores();
    $.delay(15);

    Assert.checkSalesPromotionActivityOnStore(1,2);
    Action.tapChoosePreductCategoryWhenOptions(0,1);
    $.delay(30);

    try{
        if(target.systemVersion() == "6.1.3"){
            $.delay(15);
            obj.scrollDownsWhenSettlement(1);

            target.logElementTree();

            Action.clickTheBuyButtonsOnPromotionPage();
            Action.tapButtonOnTabBar(3);
            $.delay(5);

            Assert.checkGoodsExist();
            $.delay(5);

            Action.tapDeleteOnShoppingCart();

            Action.tapButtonOnTabBar(1);
            $.delay(5);

            Action.tapSearchResultOfStore();
            Action.tapStoreNameLinkOnFavoriteStores();
            $.delay(15);

            Assert.checkSalesPromotionActivityOnStore(1,2);
            Action.tapChoosePreductCategoryWhenOptions(0,1);
            $.delay(30);

            Action.clickTheBuyButtonsOnPromotionPage();
            Action.tapButtonOnTabBar(3);
            $.delay(5);

            Assert.checkGoodsExist();
            $.delay(5);

            Action.tapDeleteOnShoppingCart();
        }
        else{
            Action.clickTheBuyButtonsOnPromotionPage();
            Action.tapButtonOnTabBar(3);
            $.delay(5);

            Assert.checkGoodsExist();
            $.delay(5);

            Action.tapDeleteOnShoppingCart();
            Action.tapButtonOnTabBar(1);
            $.delay(5);

            Action.tapSearchResultOfStore();
            Action.tapStoreNameLinkOnFavoriteStores();
            $.delay(15);

            Assert.checkSalesPromotionActivityOnStore(1,2);
            Action.tapChoosePreductCategoryWhenOptions(0,1);
            $.delay(30);

            Action.clickTheBuyButtonsOnPromotionPage();
            Action.tapButtonOnTabBar(3);
            $.delay(5);

            Assert.checkGoodsExist();
            $.delay(5);

            Action.tapDeleteOnShoppingCart();
        }
    }
    catch (err) {
        if(target.systemVersion() == "6.1.3"){
            $.delay(15);
            Assert.checkSearchPage("促銷活動");
        }
        else{
            $.delay(5);
            Assert.checkSearchPage("促銷活動");
        }
    }

    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
    Action.tapButtonOnTabBar(0);
});