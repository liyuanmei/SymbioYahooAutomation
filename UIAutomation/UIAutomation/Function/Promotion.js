test("[1977505] [bug case]verify user can add goods to shopping cart in「促銷活動」page after user logout then login.." , function () {
    target.logDeviceInfo();
    Action.determineTheLoginWhenShopping();
    Action.cleanSearches();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("挑戰最殺★英式鮮奶茶(減糖)");
    Action.tapKeyboardSearch();
    $.delay(10);

    Action.tapSearchResultOfStore();
    $.delay(sleep);

    obj.scrollDowns(1);
    $.delay(5);

    if(target.systemVersion() == "6.1.3" || target.systemVersion() == "6.1.4"){
        Action.tapChooseOnItemPageWhenPromotion(4,0);
    }
    else{
        Action.tapChooseOnItemPage("促銷活動");
    }

    Action.tapChoosePreductCategoryWhenOptions(0,0);
    $.delay(50);

    try{
        obj.scrollDownsWhenSettlement(13);
        $.delay(5);

        Action.clickTheBuyButtonsOnPromotionPage();
        $.delay(5);

        Action.tapButtonOnTabBar(3);
        $.delay(5);

        Assert.checkGoodsExist();
        $.delay(5);

        Action.tapDeleteOnShoppingCart();
        $.delay(5);
    }
    //If the promotion page 50 seconds didn't break out
    catch (err) {
        if(target.systemVersion() == "6.1.3" || target.systemVersion() == "6.1.4"){
            $.delay(15);
           Assert.checkSearchPage("促銷活動");
        }
        else{
            $.delay(5);
            Assert.checkSearchPage("促銷活動");
        }
    }   
    try{
        //go to favorite store
        Action.tapButtonOnTabBar(1);
        Action.tapButtonOnTabBar(1);
        $.delay(5);

        Action.tapSearchIconOnNavBar();
        Action.searchBarInputChinese("歐可茶葉");
        Action.tapKeyboardSearch();
        Action.pageShow();

        Action.tapStoreTab();
        $.delay(10);

        Action.tapSearchResultOfStore();
        Action.tapStoreNameLinkOnFavoriteStores();
        $.delay(15);

        Action.tapChoosePreductCategoryWhenOptions(0,1);
        $.delay(50);

        obj.scrollDownsWhenSettlement(13);
        $.delay(5);

        Action.clickTheBuyButtonsOnPromotionPage();
        $.delay(5);

        Action.tapButtonOnTabBar(3);
        $.delay(5);

        Assert.checkGoodsExist();
        $.delay(5);

        Action.tapDeleteOnShoppingCart();
    }

    //If the promotion page 50 seconds didn't break out
    catch (err) {
        if(target.systemVersion() == "6.1.3" || target.systemVersion() == "6.1.4"){
            $.delay(15);
            Assert.checkSearchPage("促銷活動");
        }
        else{
            $.delay(5);
            Assert.checkSearchPage("促銷活動");
        }
    }
    Action.tapButtonOnTabBar(1);
    Action.tapButtonOnTabBar(1);
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
    Action.tapButtonOnTabBar(0);
});