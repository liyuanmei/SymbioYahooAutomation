test("[1938036] Check Header", function () {
    Action.goApparelCategory();
    Action.goCommodityTab();
    $.delay(sleep);

    Assert.commodityHeader();
    Action.goBack(); //Go back to category page.
    Action.goDiscoveryStream(); //Go to discover stream screen.
});

test("[1938037] verify screen can go back to L1 list", function () {
    Action.goApparelCategory();
    Action.goBack();
    Assert.categoryScreen();
    Action.goDiscoveryStream();
});

test("[1938041] verify tab value", function () {
    Action.goApparelCategory();
    Assert.checkTab();
    Action.goBack();
    Action.goDiscoveryStream();
});

test("[1938042] verify category list in Apparel", function() {
    Action.goApparelCategory();
    $.delay(sleep);

    //Check category tab button is enabled, if button enabled then verify all items in list show correct.
    var categoryButtonEnabled = app.mainWindow().collectionViews()[0].cells()[0].buttons()[0].isEnabled();
    if (categoryButtonEnabled === 1){
        Assert.verifyApparelCategory();
    }
    else {
        UIALogger.logError("分類 tab not enabled.");
    }

    Action.goBack();
    Action.goDiscoveryStream();
});

test("[1938043] verify screen can switch back to category list", function () {
    Action.goApparelCategory();
    $.delay(sleep);

    //Check category tab button is enabled. If button enabled then switch to Commdity tab.
    var categoryButtonEnabled = app.mainWindow().collectionViews()[0].cells()[0].buttons()[0].isEnabled();
    if (categoryButtonEnabled === 1){
        Action.goCommodityTab();
        $.delay(sleep);
        Assert.commodityButtonStatus();
     }
    else {
        UIALogger.logError("分類 tab not enabled.");
    }

    //Verify screen already switch to Commdity tab.
    Assert.commodityButtonStatus();
    Assert.commodityItemsShowCount(21);

    //Tap back icon and verify page successful go back to category list.
    Action.goBack();
    Assert.categoriesList();

    Action.goDiscoveryStream();
});

//04-18-2014
test("[1938047] Check item list default setting is show 20 items", function () {
    Action.goApparelCategory();
    $.delay(sleep);

    //Go to Commodity tab and wait 2 seconds let items refreshed.
    Action.goCommodityTab();
    $.delay(sleep);

    //The first cell is tab button bar so the total cells should 20 items + 1 tab button bar.
    Assert.commodityItemsShowCount(21);

    Action.goBack();
    Action.goDiscoveryStream();
});

test("[1938048] Scroll screen more items should successful loaded", function () {
    Action.goApparelCategory();
    $.delay(sleep);

    //Go to Commodity tab and wait 2 seconds let items refreshed.
    Action.goCommodityTab();
    $.delay(sleep);

    //Tap Advanced button.
    Action.tapAdvancedButton();

    //Tap browse mode button on advanced bar. And verify this button would enabled after tapped.
    Action.tapButtonsInAdvancedBar(1);
    Assert.buttonOnAdvancedIsEnabled(1);

    Action.chooseCategoryBrowseMode("大圖");
    $.delay(sleep);

    //Verify currently should have 20 items in screen.
    Assert.commodityItemsShowCount(21);

    //Scroll screen. After screen successful scroll cell items should increase to 40.
    obj.scrollDowns(16);
    Assert.commodityItemsShowCount(41);

    Action.goBack();
    Action.goDiscoveryStream();
});

test("[1938052] check 搜尋服飾 show in search bar", function () {
    //Go to apparel category and tap Search icon
    Action.goApparelCategory();
    $.delay(sleep);

    Action.tapSearchIconOnCategoryList();
    $.delay(sleep);

    //Verify "搜尋服飾" show in sarch bar.
    Assert.textIsEnabled("搜尋服飾");

    Action.tapBackOnSearchBar();
    Action.goBack();
    Action.goDiscoveryStream();
});

test("[1938053] can switch to 排序 tab after click 排序 button", function () {
    Action.goApparelCategory();
    Action.goCommodityTab();
    $.delay(5);

    //Tap Advanced button.
    Action.tapAdvancedButton();
    $.delay(sleep);
     
    //tap 排序 button and verify 排序 button is enabled. the order of 排序 button is 0.
    Action.tapButtonsInAdvancedBar(0);
    Assert.buttonOnAdvancedIsEnabled(0);

    //Tap cancel button exit advanced bar.
    Action.tapCancelButtonInAdvancedBar();

    Action.goBack();
    Action.goDiscoveryStream();
});

test("[1938054] can switch to 篩選 tab after click 篩選 button", function () {
    Action.goApparelCategory();
    Action.goCommodityTab();
    $.delay(5);

    //Tap Advanced button.
    Action.tapAdvancedButton();
    $.delay(sleep);

    //tap 篩選 button and verify 篩選 button is enabled. the order of 排序 button is 2.
    Action.tapButtonsInAdvancedBar(2);
    Assert.buttonOnAdvancedIsEnabled(2);

    //Tap cancel button exit advanced bar.
    Action.tapCancelButtonInAdvancedBar();

    Action.goBack();
    Action.goDiscoveryStream();
});

test("[1938055] verify the elements order in 排序 tab", function () {
    Action.goApparelCategory();
    Action.goCommodityTab();
    $.delay(5);

    //Tap Advanced button.
    Action.tapAdvancedButton();
    $.delay(sleep);

    //tap 排序 button and verify elements order in 排序 tab show correct.
    Action.tapButtonsInAdvancedBar(0);
    Assert.buttonOnAdvancedIsEnabled(0);

    Assert.elementsOrderInSortTab();

    //Tap Cancel button on Navigation Bar.
    Action.tapCancelButtonInAdvancedBar();

    Action.goBack();
    Action.goDiscoveryStream();
});

test("[1938060] check the elements on 篩選 screen", function () {
    Action.goApparelCategory();
    Action.goCommodityTab();
    $.delay(5);

    //Tap Advanced button.
    Action.tapAdvancedButton();
    $.delay(sleep);

    //tap 篩選 button and verify 篩選 button is enabled. the order of 排序 button is 2.
    Action.tapButtonsInAdvancedBar(2);
    Assert.buttonOnAdvancedIsEnabled(2);

    //Verify elements on Attribute screen show correct.
    Assert.elementsOnFilterScreen();

    //Tap Cancel button on Navigation Bar.
    Action.tapCancelButtonInAdvancedBar();

    Action.goBack();
    Action.goDiscoveryStream();
});

test("[1938063] check “確定” button exist on Advanced bar", function () {
    Action.goApparelCategory();
    Action.goCommodityTab();
    $.delay(5);

    //Tap Advanced button.
    Action.tapAdvancedButton();
    $.delay(sleep);

    //Tap 篩選 button
    Action.tapButtonsInAdvancedBar(2);

    //Verify "確定" button exist on Navigation Bar, the index of this button is 2.
    Assert.buttonExistOnNavigationBar(2, "確定");

    //Tap cancel button and navigate back to discovery screen.
    Action.tapCancelButtonInAdvancedBar();

    Action.goBack();
    Action.goDiscoveryStream();
});

test("[1938069] check able to tap '可刷卡' and untap '可刷卡' button", function () {
    Action.goApparelCategory();
    Action.goCommodityTab();
    $.delay(5);

    //Tap Advanced button.
    Action.tapAdvancedButton();
    $.delay(sleep);

    //Tap 篩選 button
    Action.tapButtonsInAdvancedBar(2);

    //Tap "可刷卡" and verify this button enabled after tap.
    Action.tapButtonOnFilterAttributeScreen(0);
    Assert.filterAttributeButtonIsTapped(0);

    //Tap button again and verify button is not enabled.
    Action.tapButtonOnFilterAttributeScreen(0);
    Assert.filterAttributeButtonIsNotTapped(0);

    //Tap cancel button and navigate back to discovery screen.
    Action.tapCancelButtonInAdvancedBar();

    Action.goBack();
    Action.goDiscoveryStream();
});

test("[1938072] check able to tap '有影音' and untap '有影音' button", function () {
    Action.goApparelCategory();
    Action.goCommodityTab();
    $.delay(5);

    //Tap Advanced button.
    Action.tapAdvancedButton();
    $.delay(sleep);

    //Tap 篩選 button
    Action.tapButtonsInAdvancedBar(2);

    //Tap "有影音" and verify this button enabled after tap.
    Action.tapButtonOnFilterAttributeScreen(6);
    Assert.filterAttributeButtonIsTapped(6);

    //Tap button again and verify button is not enabled.
    Action.tapButtonOnFilterAttributeScreen(6);
    Assert.filterAttributeButtonIsNotTapped(6);

    //Tap cancel button and navigate back to discovery screen.
    Action.tapCancelButtonInAdvancedBar();

    Action.goBack();
    Action.goDiscoveryStream();
});

test("[1938075] check able to tap '0利率' and untap '0利率' button", function () {
    Action.goApparelCategory();
    Action.goCommodityTab();
    $.delay(5);

    //Tap Advanced button.
    Action.tapAdvancedButton();
    $.delay(sleep);

    //Tap 篩選 button
    Action.tapButtonsInAdvancedBar(2);

    //Tap "0利率" and verify this button enabled after tap.
    Action.tapButtonOnFilterAttributeScreen(1);
    Assert.filterAttributeButtonIsTapped(1);

    //Tap button again and verify button is not enabled.
    Action.tapButtonOnFilterAttributeScreen(1);
    Assert.filterAttributeButtonIsNotTapped(1);

    //Tap cancel button and navigate back to discovery screen.
    Action.tapCancelButtonInAdvancedBar();

    Action.goBack();
    Action.goDiscoveryStream();
});

test("[1938078] check able to tap '可分期' and untap '可分期' button", function () {
    Action.goApparelCategory();
    Action.goCommodityTab();
    $.delay(5);

    //Tap Advanced button.
    Action.tapAdvancedButton();
    $.delay(sleep);

    //Tap 篩選 button
    Action.tapButtonsInAdvancedBar(2);

    //Tap "可分期" and verify this button enabled after tap.
    Action.tapButtonOnFilterAttributeScreen(2);
    Assert.filterAttributeButtonIsTapped(2);

    //Tap button again and verify button is not enabled.
    Action.tapButtonOnFilterAttributeScreen(2);
    Assert.filterAttributeButtonIsNotTapped(2);

    //Tap cancel button and navigate back to discovery screen.
    Action.tapCancelButtonInAdvancedBar();

    Action.goBack();
    Action.goDiscoveryStream();
});

test("[1938081] check able to tap '超商付款' and untap '超商付款' button", function () {
    Action.goApparelCategory();
    Action.goCommodityTab();
    $.delay(5);

    //Tap Advanced button.
    Action.tapAdvancedButton();
    $.delay(sleep);

    //Tap 篩選 button
    Action.tapButtonsInAdvancedBar(2);

    //Tap "超商付款" and verify this button enabled after tap.
    Action.tapButtonOnFilterAttributeScreen(3);
    Assert.filterAttributeButtonIsTapped(3);

    //Tap button again and verify button is not enabled.
    Action.tapButtonOnFilterAttributeScreen(3);
    Assert.filterAttributeButtonIsNotTapped(3);

    //Tap cancel button and navigate back to discovery screen.
    Action.tapCancelButtonInAdvancedBar();

    Action.goBack();
    Action.goDiscoveryStream();
});

test("[1938087] check able to tap '有現貨' and untap '有現貨' button", function () {
    Action.goApparelCategory();
    Action.goCommodityTab();
    $.delay(5);

    //Tap Advanced button.
    Action.tapAdvancedButton();
    $.delay(sleep);

    //Tap 篩選 button
    Action.tapButtonsInAdvancedBar(2);

    //Tap "有現貨" and verify this button enabled after tap.
    Action.tapButtonOnFilterAttributeScreen(5);
    Assert.filterAttributeButtonIsTapped(5);

    //Tap button again and verify button is not enabled.
    Action.tapButtonOnFilterAttributeScreen(5);
    Assert.filterAttributeButtonIsNotTapped(5);

    //Tap cancel button and navigate back to discovery screen.
    Action.tapCancelButtonInAdvancedBar();

    Action.goBack();
    Action.goDiscoveryStream();
});

//The second stage
test("[1938093] check able to tap '優良商店' and untap '優良商店' button", function () {
    Action.goApparelCategory();
    Action.goCommodityTab();
    $.delay(5);

    //Tap Advanced button.
    Action.tapAdvancedButton();
    $.delay(sleep);

    //Tap 篩選 button
    Action.tapButtonsInAdvancedBar(2);

    //Tap "優良商店" and verify this button enabled after tap.
    Action.tapButtonOnFilterAttributeScreen(8);
    Assert.filterAttributeButtonIsTapped(8);

    //Tap button again and verify button is not enabled.
    Action.tapButtonOnFilterAttributeScreen(8);
    Assert.filterAttributeButtonIsNotTapped(8);

    //Tap cancel button and navigate back to discovery screen.
    Action.tapCancelButtonInAdvancedBar();

    Action.goBack();
    Action.goDiscoveryStream();
});

test("[1938099] check able to navigate to itempage.", function() {
    Action.goApparelCategory();
    Action.goCommodityTab();
    $.delay(sleep);

    //Tap item on list to navigate to item page.
    Action.tapItemOnProductListScreen();
    $.delay(sleep);

    obj.scrollDowns(1);
    $.delay(sleep);
     
    //Verify screen successful navigated to item page.
    Assert.itemPageShowCorrect();

    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
    Action.tapButtonOnTabBar(0);
});

test("[1938100] check product price show correct.", function () {
    Action.goApparelCategory();
    Action.goCommodityTab();
    $.delay(5);

    //first parameter is second product, second parameter is the  location of price in product cell.
    Assert.productPriceShowCorrect(2, 2);

    //Tap back button and go back to discovery screen.
    Action.goBack();
    Action.goDiscoveryStream();
});

test("[1938101] check the rating show correct.", function () {
    Action.goApparelCategory();
    Action.goCommodityTab();
    $.delay(sleep);

    //Verify the value of rating is less than 10, if not fail.
    Assert.storeRatingShowCorrect(1, 1);

    //Tap back button and go back to discovery screen.
    Action.goBack();
    Action.goDiscoveryStream();
});

test("[1938039] search name on header should changed after search another keyword.", function () {
    //go 服飾 screen.
    Action.goApparelCategory();

    //do search
    Action.doSearch("上衣");

    var collectionViews = app.mainWindow().collectionViews()[0];
    var itemCell = collectionViews.cells()[1];
    var itemSummary = itemCell.staticTexts()[2];
    $.delay(sleep);

    //verify search result page contain expect search keyword.
    Assert.elementsShouldContainText(itemSummary, "上衣");
    
    //Do search again.
    Action.tapSearchButtonOnSRP();
    Action.searchBarInputChinese("iphone");
    Action.tapKeyboardSearch();
    $.delay(sleep);

    //Verify search result page contain expect search keyword.
    var productItem = app.mainWindow().collectionViews()[0].cells()[1];
    var productSummary = productItem.staticTexts()[2];
    $.delay(sleep);

    Assert.elementsShouldContainText(productSummary, "hone");

    //Back to discovery screen.
    Action.tapButtonOnTabBar(2);
    Action.goDiscoveryStream();
});

test("[1938044] check 進階 button exist.", function () {
    //go 商品 screen.
    Action.goApparelCategory();
    Action.goCommodityTab();

    //Verify 進階 button exist on screen.
    $.delay(3);
    var advancedButton = app.mainWindow().collectionViews()[0].buttons()[0]

    Assert.checkButtonExist(advancedButton);

    //Back to discovery screen.
    Action.tapButtonOnTabBar(2);
    Action.goDiscoveryStream();
});

test("[1938045] check 共xxxx筆結果.", function () {
    //go 商品 screen.
    Action.goApparelCategory();
    Action.goCommodityTab();
    $.delay(3);

    //verify 共xxxx筆結果 show correct.
    var numberOfItems = app.mainWindow().collectionViews()[0].staticTexts()[0];

    Assert.numberOfItemsShowCorrect(numberOfItems);

    //Back to discovery screen.
    Action.tapButtonOnTabBar(2);
    Action.goDiscoveryStream();
});

test("[1938061] check 清除 button show correct on advanced bar.", function (){
    //Go 商品 screen.
    Action.goApparelCategory();
    Action.goCommodityTab();
    $.delay(5);

    //tap Advance button
    Action.tapAdvancedButton();
    $.delay(sleep);

    //Tap 篩選 button.
    Action.tapButtonsInAdvancedBar(2);

    //Tap "優良商店" and verify 清除 button show up.
    Action.tapButtonOnFilterAttributeScreen(8);

    var attributeCollectView = app.mainWindow().collectionViews()[1];
    var attributeCollectViewOriginY = Action.getElementsOriginYString(attributeCollectView);
    var attributeCollectViewOriginX = Action.getElementsOriginXString(attributeCollectView);

    var clearButton = app.mainWindow().buttons()["清除"];
    var clearButtonOriginY = Action.getElementsOriginYString(clearButton);
    var clearButtonOriginX = Action.getElementsOriginXString(clearButton);

    assertTrue(clearButtonOriginY > attributeCollectViewOriginY && clearButtonOriginX === attributeCollectViewOriginX, "Clear button location not correct.");

    //Tap cancel button on Advance bar.
    Action.tapCancelButtonInAdvancedBar();

    //Back to discovery screen.
    Action.tapButtonOnTabBar(2);
    Action.goDiscoveryStream();
});

test("[1938062] tap clear button can clear to user input.", function () {
    //Go to product list.
    Action.goApparelCategory();
    Action.goCommodityTab();
    $.delay(5);

    //tap advanced button.
    Action.tapAdvancedButton();
    $.delay(sleep);

    //go to 篩選 tab.
    Action.tapButtonsInAdvancedBar(2);

    //verify the default price is 100000 +
    Assert.checkPriceBarShowCorrect("100000+ 元");

    //drag price bar to 1020 price.    
    app.mainWindow().dragInsideWithOptions({startOffset: {x: 0.92, y: 0.29}, endOffset:{x: 0.234, y: 0.29}});
    $.delay(sleep);
    
    //Verify price show correct after dragging.
    Assert.checkPriceBarShowCorrect("1020 元");

    //Tap clear button
    Action.tapClearButtonOnFilterScreen();
    $.delay(sleep);

    //Verify price bar restore to default value.
    Assert.checkPriceBarShowCorrect("100000+ 元");

    //Tap submit button and restore application to default location.
    Action.tapSubmitButtonOnAdvanceScreen();
    Action.tapButtonOnTabBar(2);
    Action.goDiscoveryStream();
});

test("[1938065] product items in list should show correct after user adjust price bar.", function () {
    //Go to product list.
    Action.goApparelCategory();
    Action.goCommodityTab();
    $.delay(5);

    //tap advanced button.
    Action.tapAdvancedButton();
    $.delay(sleep);

    //go to soring tab.
    Action.tapButtonsInAdvancedBar(0);

    //select price from high to low.
    Action.selectOptionOnSortingTab("價錢高到低");
    $.delay(sleep);

    //verify price value show correct.
    //the first parameter is product index and the second parameter is price index in product cell.
    Assert.checkPriceValueShowLessThan(1, 3, "100000000");

    //go to advanced screen and drag price bar to 1020.
    //tap advanced button.
    Action.tapAdvancedButton();

    //go to 篩選 tab.
    Action.tapButtonsInAdvancedBar(2);
    $.delay(sleep);

    //verify the default price is 100000 +
    Assert.checkPriceBarShowCorrect("100000+ 元");

    //drag price bar to 1020 price.    
    app.mainWindow().dragInsideWithOptions({startOffset: {x: 0.92, y: 0.29}, endOffset:{x: 0.234, y: 0.29}});
    $.delay(sleep);
    
    //Verify price show correct after dragging.
    Assert.checkPriceBarShowCorrect("1020 元");

    //Tap submit button.
    Action.tapSubmitButtonOnAdvanceScreen();
    $.delay(sleep);

    //verify price value show correct.
    Assert.checkPriceValueShowLessThan(1, 3, "100000000");

    //Restore application to default loaction.
    Action.tapButtonOnTabBar(2);
    Action.goDiscoveryStream();
});

test("[1938084] check able to tap 超商取貨 and untap 超商取貨", function () {
    Action.goApparelCategory();
    Action.goCommodityTab();
    $.delay(5);

    //Tap Advanced button.
    Action.tapAdvancedButton();
    $.delay(sleep);

    //Tap 篩選 button
    Action.tapButtonsInAdvancedBar(2);

    //Tap "超商取貨" and verify this button enabled after tap.
    Action.tapButtonOnFilterAttributeScreen(4);
    Assert.filterAttributeButtonIsTapped(4);

    //Tap button again and verify button is not enabled.
    Action.tapButtonOnFilterAttributeScreen(4);
    Assert.filterAttributeButtonIsNotTapped(4);

    //Tap cancel button on Advance bar.
    Action.tapCancelButtonInAdvancedBar();

    //Back to discovery screen.
    Action.tapButtonOnTabBar(2);
    Action.goDiscoveryStream();
});

test("[1938090] check able to tap 有圖片 and untap 有圖片", function () {
    Action.goApparelCategory();
    Action.goCommodityTab();
    $.delay(5);

    //Tap Advanced button.
    Action.tapAdvancedButton();

    //Tap 篩選 button
    Action.tapButtonsInAdvancedBar(2);

    //Tap "有圖片" and verify this button enabled after tap.
    Action.tapButtonOnFilterAttributeScreen(7);
    Assert.filterAttributeButtonIsTapped(7);

    //Tap button again and verify button is not enabled.
    Action.tapButtonOnFilterAttributeScreen(7);
    Assert.filterAttributeButtonIsNotTapped(7);

    //Tap cancel button on Advance bar.
    Action.tapCancelButtonInAdvancedBar();

    //Back to discovery screen.
    Action.tapButtonOnTabBar(2);
    Action.goDiscoveryStream();
});

test("[1938102] check favorites icon show correct.", function () {
    Action.goApparelCategory();
    Action.goCommodityTab();
    $.delay(sleep);

    //Verify favorites icon show correct, this function need passing product index parameters.
    Assert.favoritesIconShowCorrect(3);

    //Tap back button and go back to discovery screen.
    Action.goBack();
    Action.goDiscoveryStream();
});

test("[1938103] check log in window show after unregister user tap favorites icon.", function () {
    Action.tapButtonOnTabBar(4);
    $.delay(sleep);
    
    var logined = app.mainWindow().images()[2].name();
    if(logined == "img-default-profile.png"){
        $.delay(sleep);
        //Log out and remove user login history
        Action.tapButtonOnTabBar(4);
        Action.doUserLogout();
    }
    else{
        $.delay(sleep);
        //Tap exit button exit login window.
        Action.exitLoginWindow();
    }

    $.delay(sleep);
    Action.goApparelCategory();
    Action.goCommodityTab();
    $.delay(3);
     
    //tap favorites icon, after tapped log in window show up
    Action.tapFavoritesIcon(1);
    $.delay(3);

    var login = app.mainWindow().tableViews()[0].cells()["Add Account"].staticTexts()[0].name();

    if(login == "Add Account"){
        $.delay(sleep);
        Assert.logInWindowShowCorrectOnAddAccount();
    }
    else{
        //Verify login window show correct.
        Assert.logInWindowShowCorrect("Sign In", "Forgot password or ID?", "Create Account");
    }

    //Tap exit button exit login window.
    Action.exitLoginWindow();

    //Tap back button and go back to discovery screen.
    Action.goBack();
    Action.goDiscoveryStream();
});


test("[1938116] on photo grid view unregister user tap favorites icon login window should open.", function () {
    //Go to product list.
    Action.goApparelCategory();
    Action.goCommodityTab();
    $.delay(5);

    //Tap Advanced button.
    Action.tapAdvancedButton();

    //Tap browse mode button on advanced bar. And verify this button would enabled after tapped.
    Action.tapButtonsInAdvancedBar(1);

    Action.chooseCategoryBrowseMode("小圖");
    $.delay(sleep);

    //Verify successful switch to photo grid view.
    Assert.successfulSwitchToPhotoGridView();
    $.delay(sleep);
    
    //tap favorites icon, after tapped log in window show up.
    Action.tapFavoritesIcon(1);
    $.delay(3);

    //Verify login window show correct.
    var login = app.mainWindow().tableViews()[0].cells()["Add Account"].staticTexts()[0].name();

    if(login == "Add Account"){
        $.delay(sleep);
        Assert.logInWindowShowCorrectOnAddAccount();
    }
    else{
        //Verify login window show correct.
        Assert.logInWindowShowCorrect("Sign In", "Forgot password or ID?", "Create Account");
    }

    //Tap exit button exit login window.
    Action.exitLoginWindow();

    //Go back to advanced bar switch browse mode to large image.
    Action.tapAdvancedButton();
    Action.tapButtonsInAdvancedBar(1);

    Action.chooseCategoryBrowseMode("大圖");

    //Back to discovery screen.
    Action.tapButtonOnTabBar(2);
    Action.goDiscoveryStream();
});

test("[1938128] on item listing-list view unregister user tap favorites icon should successul open login window.", function () {
    //Go to product list.
    Action.goApparelCategory();
    Action.goCommodityTab();
    $.delay(5);

    //Tap Advanced button.
    Action.tapAdvancedButton();

    //Tap browse mode button on advanced bar. And verify this button would enabled after tapped.
    Action.tapButtonsInAdvancedBar(1);
    Assert.buttonOnAdvancedIsEnabled(1);

    Action.chooseCategoryBrowseMode("列表");

    //Verify successful switch to listing view.
    Assert.successfulSwitchToListingView();
    $.delay(sleep);

    //Verify favorites icon show correct, this function need passing product index parameters.
    Assert.favoritesIconShowCorrect(1);
    $.delay(sleep);

    //tap favorites icon, after tapped log in window show up.
    Action.tapFavoritesIcon(1);
    $.delay(3);

    //Verify login window show correct.
    var login = app.mainWindow().tableViews()[0].cells()["Add Account"].staticTexts()[0].name();

    if(login == "Add Account"){
        $.delay(sleep);
        Assert.logInWindowShowCorrectOnAddAccount();
    }
    else{
        //Verify login window show correct.
        Assert.logInWindowShowCorrect("Sign In", "Forgot password or ID?", "Create Account");
    }

    //Tap exit button exit login window.
    Action.exitLoginWindow();

    //Switch browse mode to large image.
    Action.tapAdvancedButton();
    Action.tapButtonsInAdvancedBar(1);

    Action.chooseCategoryBrowseMode("大圖");

    //Verify current view is large image.
    Assert.successfulSwitchToLargeImageView();

    //Back to discovery screen.
    Action.tapButtonOnTabBar(2);
    Action.goDiscoveryStream();
});

test("[1938104] login user able to add product to favorites", function () {
    Action.tapButtonOnTabBar(4);
    $.delay(sleep);

    var login = app.mainWindow().tableViews()[0].cells()["Add Account"].staticTexts()[0].name();
    $.delay(sleep);

    //Tap exit button exit login window.
    Action.exitLoginWindow();

    if(login == "Add Account"){
        $.delay(sleep);
        Action.tapAddAccountOnLogin("mobileappstore3", "A1234qwer");
    }
    else{
        $.delay(sleep);

        //Verify login window show correct.
        Action.doUserLogin("mobileappstore3", "A1234qwer");
    }
    
    //go to production item list.
    Action.goApparelCategory();
    Action.goCommodityTab();
    $.delay(sleep);

    //Tap favorites icon add a production to favorites.
    Action.tapFavoritesIcon(1);
    $.delay(sleep);

    var productName = app.mainWindow().collectionViews()[0].cells()[1].name();

    //got my favorites screen.
    Action.tapButtonOnTabBar(4);
    Action.goMayFavoritesScreen();
    $.delay(sleep);

    //Assert product show in My favorites screen.
    Assert.productAddedToMyFavoritesScreen(productName);

    //Remove favorites item.
    Action.tapButtonOnTabBar(2);
    $.delay(sleep);

    Action.tapFavoritesIcon(1);

    //Verify favorites item successful removed.
    Action.tapButtonOnTabBar(4);
    $.delay(3);
    Assert.productRemovedFromMyFavoritesScreen(productName);
     
    //Restore app to default screen.
    Action.goBack();
    Action.tapButtonOnTabBar(2);
    $.delay(sleep);

    Action.goBack();
    Action.goDiscoveryStream();
});

//6.5
test("[1938049] check advanced buttons order.", function () {
    //Go 商品 screen.
    Action.goApparelCategory();
    Action.goCommodityTab();
    $.delay(5);

    //tap Advance button
    Action.tapAdvancedButton();
    $.delay(sleep);

    //Verify advance buttons order.
    Assert.advancedButtonsOrder();

    //Tap cancel button on Advance bar.
    Action.tapCancelButtonInAdvancedBar();

    //Back to discovery screen.
    Action.tapButtonOnTabBar(2);
    Action.goDiscoveryStream();
});

test("[1938097] on item listing-list view check store name show correct.", function () {
    //Go to product list.
    Action.goApparelCategory();
    Action.goCommodityTab();
    $.delay(4);

    //Tap Advanced button.
    Action.tapAdvancedButton();

    //Tap browse mode button on advanced bar. And verify this button would enabled after tapped.
    Action.tapButtonsInAdvancedBar(1);
    Assert.buttonOnAdvancedIsEnabled(1);

    Action.chooseCategoryBrowseMode("列表");

    //Verify successful switch to listing view.
    Assert.successfulSwitchToListingView();

    //get store name X and Y.
    var storeName = app.mainWindow().collectionViews()[0].cells()[1].staticTexts()["Miu-Star"];
    var storeNameX = Action.getElementsOriginXString(storeName);
    var storeNameY = Action.getElementsOriginYString(storeName);

    //get item cell X and Y
    var itemCell = app.mainWindow().collectionViews()[0].cells()[1];
    var itemCellX = Action.getElementsOriginXString(itemCell);
    var itemCellY = Action.getElementsOriginYString(itemCell);

    //The image on list view width should be 140 && (storeNameY - itemCellY) < 20
    assertTrue(storeNameX == 140 && (storeNameY - itemCellY) < 20, "Store name not place at item image right side.");

    //Go back to advanced bar switch browse mode to large image.
    Action.tapAdvancedButton();
    Action.tapButtonsInAdvancedBar(1);

    Action.chooseCategoryBrowseMode("大圖");

    //Back to discovery screen.
    Action.tapButtonOnTabBar(2);
    Action.goDiscoveryStream();
});

test("[1938110] check store name is under the product image.", function () {
    //Go to product list.
    Action.goApparelCategory();
    Action.goCommodityTab();
    $.delay(sleep);
    target.logElementTree();

    //get first cell Y
    var firstCell = app.mainWindow().collectionViews()[0].cells()[1];
    var firstCellY = Action.getElementsOriginYString(firstCell);

    //Get store name Y
    var storeName = app.mainWindow().collectionViews()[0].cells()[1].staticTexts()[0];
    var storeNameY = Action.getElementsOriginYString(storeName);

    //Image height shoudl be 320.
    assertTrue(10 < (storeNameY - firstCellY - 320) < 20, "Store name is not under the product image.");
    $.delay(4);

    //Back to discovery screen.
    Action.tapButtonOnTabBar(2);
    Action.goDiscoveryStream();
});

test("[1938112] able to navigate to item page through tap store name", function () {
    //Go to product list.
    Action.goApparelCategory();
    Action.goCommodityTab();
    $.delay(sleep);

    Action.tapStoreNameOnCategory();
    $.delay(sleep);

    obj.scrollDowns(1);
    $.delay(sleep);
    
    //Verify screen successful navigated to item page.
    Assert.itemPageShowCorrect();

    //Back to discovery screen.
    Action.tapButtonOnTabBar(2);
    Action.goDiscoveryStream();
});

test("[1938114] check store rating place at store name right location.", function () {
    //Go to product list.
    Action.goApparelCategory();
    Action.goCommodityTab();
    $.delay(4);

    //get store name and store rating X and Y
    var storeName = app.mainWindow().collectionViews()[0].cells()[1].staticTexts()[0];
    var storeNameX = Action.getElementsOriginXString(storeName);
    var storeNameY = Action.getElementsOriginYString(storeName);

    var storeRating = app.mainWindow().collectionViews()[0].cells()[1].staticTexts()[1];
    var storeRatingX = Action.getElementsOriginXString(storeRating);
    var storeRatingY = Action.getElementsOriginYString(storeRating);

    //get store name width.
    var storeNameWidth = Action.getElementsWidthString(storeName);

    //verify rating number show correct.
    Assert.storeRatingShowCorrect(1, 1);

    //verify rating should place at store name right location.
    assertTrue(0 < storeRatingX - storeNameX - storeNameWidth && storeRatingX - storeNameX - storeNameWidth < 10 && storeRatingY - 1 == storeNameY, "Store reting not at store name right location.");

    //Back to discovery screen.
    Action.tapButtonOnTabBar(2);
    Action.goDiscoveryStream();
});

test("[1938113] check item price show correct.", function () {
    //Go to product list.
    Action.goApparelCategory();
    Action.goCommodityTab();
    $.delay(4);

    //get product name and product price X and Y.
    var productName = app.mainWindow().collectionViews()[0].cells()[1].staticTexts()[2];
    var productNameX = Action.getElementsOriginXString(productName);
    var productNameY = Action.getElementsOriginYString(productName);

    var productPrice = app.mainWindow().collectionViews()[0].cells()[1].staticTexts()[3];
    var productPriceX = Action.getElementsOriginXString(productPrice);
    var productPriceY = Action.getElementsOriginYString(productPrice);

    //get product name height
    var productNameHeight = Action.getElementsHeightString(productName);
    //verify product price show correct.
    Assert.productPriceShowCorrect("Miu-Star", 3);

    //Verify product price place under product name.
    assertTrue(0 < productPriceY - productNameY - productNameHeight && productPriceY - productNameY - productNameHeight < 5 && productPriceX == productNameX, "Product price not place under product name.");

    //Back to discovery screen.
    Action.tapButtonOnTabBar(2);
    Action.goDiscoveryStream();
});

test("[1938115] check favorites icon show correct with photo grid view.", function () {
    //Go to product list.
    Action.goApparelCategory();
    Action.goCommodityTab();
    $.delay(4);

    //Tap Advanced button.
    Action.tapAdvancedButton();

    //Tap browse mode button on advanced bar. And verify this button would enabled after tapped.
    Action.tapButtonsInAdvancedBar(1);
    Assert.buttonOnAdvancedIsEnabled(1);

    Action.chooseCategoryBrowseMode("小圖");
    
    //Verify successful switch to photo grid view.
    Assert.successfulSwitchToPhotoGridView();

    //verify favorites icon show on product cell.
    Assert.favoritesIconShowCorrect(1);

    //get product price X and Y.
    var productPrice = app.mainWindow().collectionViews()[0].cells()[1].staticTexts()[0];
    var productPriceX = Action.getElementsOriginXString(productPrice);
    var productPriceY = Action.getElementsOriginYString(productPrice);

    //get favorites icon X and Y
    var favoritesIcon = app.mainWindow().collectionViews()[0].cells()[1].buttons()[0];
    var favoritesIconX = Action.getElementsOriginXString(favoritesIcon);
    var favoritesIconY = Action.getElementsOriginYString(favoritesIcon);

    //Verify favorites icon place at product price right side.
    assertTrue(favoritesIconX < productPriceX && (productPriceY - favoritesIconY) < 20, "favorites icon not at product price right side.");

    //Go back to advanced bar switch browse mode to large image.
    Action.tapAdvancedButton();
    Action.tapButtonsInAdvancedBar(1);

    Action.chooseCategoryBrowseMode("大圖");

    //Back to discovery screen.
    Action.tapButtonOnTabBar(2);
    Action.goDiscoveryStream();
});

test("[1938117] On photo grid view register user able to add product to his favorites list.", function() {
    //go to production item list.
    Action.goApparelCategory();
    Action.goCommodityTab();

    //Store product name.
    $.delay(sleep);
    var productName = app.mainWindow().collectionViews()[0].cells()[1].staticTexts()[0].name();

    //Tap Advanced button.
    Action.tapAdvancedButton();

    //Tap browse mode button on advanced bar. And verify this button would enabled after tapped.
    Action.tapButtonsInAdvancedBar(1);

    Action.chooseCategoryBrowseMode("小圖");

    //Verify successful switch to photo grid view.
    Assert.successfulSwitchToPhotoGridView();

    //Tap favorites icon add a production to favorites.
    Action.tapFavoritesIcon(1);

    //got my favorites screen.
    Action.tapButtonOnTabBar(4);
    Action.goMayFavoritesScreen();

    //Assert product show in My favorites screen.
    Assert.productAddedToMyFavoritesScreen(productName);

    //Remove favorites item.
    Action.tapButtonOnTabBar(2);
    Action.tapFavoritesIcon(1);

    //Verify favorites item successful removed.
    Action.tapButtonOnTabBar(4);
    $.delay(3);
    Assert.productRemovedFromMyFavoritesScreen(productName);
     
    //Restore app to default screen.
    Action.goBack();
    Action.tapButtonOnTabBar(2);

    //Go back to advanced bar switch browse mode to large image.
    Action.tapAdvancedButton();
    Action.tapButtonsInAdvancedBar(1);

    Action.chooseCategoryBrowseMode("大圖");

    //Back to discovery screen.
    Action.tapButtonOnTabBar(2);
    Action.goDiscoveryStream();
});

test("[1938124] on item listing-list view tap store name page should navigate to item details page.", function () {
    //Go to product list.
    Action.goApparelCategory();
    Action.goCommodityTab();
    $.delay(4);

    //Tap Advanced button.
    Action.tapAdvancedButton();

    //Tap browse mode button on advanced bar. And verify this button would enabled after tapped.
    Action.tapButtonsInAdvancedBar(1);
    Assert.buttonOnAdvancedIsEnabled(1);

    Action.chooseCategoryBrowseMode("列表");

    //Verify successful switch to listing view.
    Assert.successfulSwitchToListingView();

    //Tap store name to navigate to item details page.
    var storeNameElement = app.mainWindow().collectionViews()[0].cells()[1].staticTexts()[0];
    var storeName = storeNameElement.name()
    $.delay(4);

    Action.tapElementsOnScreen(storeNameElement);

    obj.scrollDowns(1);

    //Verify screen successful navigate to item details.
    Assert.itemPageShowCorrect();

    //Verify screen successful navigate to item details.
    //Assert.itemPageShowCorrect(storeName);

    //Back to list screen.
    Action.goBack();

    //Switch browse mode to large image.
    Action.tapAdvancedButton();
    Action.tapButtonsInAdvancedBar(1);

    Action.chooseCategoryBrowseMode("大圖");

    //Verify current view is large image.
    Assert.successfulSwitchToLargeImageView();

    //Back to discovery screen.
    Action.tapButtonOnTabBar(2);
    Action.goDiscoveryStream();
});

test("[1938125] on item listing-list view check product price show correct.", function () {
    //Go to product list.
    Action.goApparelCategory();
    Action.goCommodityTab();
    $.delay(4);

    //Tap Advanced button.
    Action.tapAdvancedButton();

    //Tap browse mode button on advanced bar. And verify this button would enabled after tapped.
    Action.tapButtonsInAdvancedBar(1);
    Assert.buttonOnAdvancedIsEnabled(1);

    Action.chooseCategoryBrowseMode("列表");

    //Verify successful switch to listing view.
    Assert.successfulSwitchToListingView();

    //Get product name X and Y
    var productNameElement = app.mainWindow().collectionViews()[0].cells()[1].staticTexts()[2];
    var productNameElementX = Action.getElementsOriginXString(productNameElement);
    var productNameElementY = Action.getElementsOriginYString(productNameElement);

    //Get product name height
    var productNameElementHeight = Action.getElementsHeightString(productNameElement);

    //Get product price X and Y
    var productPriceElement = app.mainWindow().collectionViews()[0].cells()[1].staticTexts()[3];
    var productPriceElementX = Action.getElementsOriginXString(productPriceElement);
    var productPriceElementY = Action.getElementsOriginYString(productPriceElement);

    //verify product price should underneath the product name.
    var productNameElementYPlusProductNameElementHeight = productNameElementY + productNameElementY;
    assertTrue(productNameElementX == productPriceElementX && productPriceElementY > productNameElementYPlusProductNameElementHeight, "product price is not underneath the product name");

    //Switch browse mode to large image.
    Action.tapAdvancedButton();
    Action.tapButtonsInAdvancedBar(1);

    Action.chooseCategoryBrowseMode("大圖");

    //Verify current view is large image.
    Assert.successfulSwitchToLargeImageView();

    //Back to discovery screen.
    Action.tapButtonOnTabBar(2);
    Action.goDiscoveryStream();
});

test("[1938126] on item listing-list view check product rating show correct.", function () {
    //Go to product list.
    Action.goApparelCategory();
    Action.goCommodityTab();
    $.delay(4);

    //Tap Advanced button.
    Action.tapAdvancedButton();

    //Tap browse mode button on advanced bar. And verify this button would enabled after tapped.
    Action.tapButtonsInAdvancedBar(1);
    Assert.buttonOnAdvancedIsEnabled(1);

    Action.chooseCategoryBrowseMode("列表");

    //Verify successful switch to listing view.
    Assert.successfulSwitchToListingView();

    //Verify the value of rating is less than 10, if not fail.
    Assert.storeRatingShowCorrect(1, 1);

    //get store name X and Y.
    var storeNameElement = app.mainWindow().collectionViews()[0].cells()[1].staticTexts()[0];
    var storeNameElementX = Action.getElementsOriginXString(storeNameElement);
    var storeNameElementY = Action.getElementsOriginYString(storeNameElement);

    //get store name width.
    var storeNameElementWidth = Action.getElementsWidthString(storeNameElement);

    //get store rating X and Y.
    var storeRatingElement = app.mainWindow().collectionViews()[0].cells()[1].staticTexts()[1];
    var storeRatingElementX = Action.getElementsOriginXString(storeRatingElement);
    var storeRatingElementY = Action.getElementsOriginYString(storeRatingElement);

    //Verify store rating should at store name right side.
    var storeNmeXPlusStoreNameWidth = parseInt(storeNameElementX) + parseInt(storeNameElementWidth);
    var restus = parseInt(storeRatingElementY) - parseInt(storeNameElementY);

    assertTrue(storeRatingElementX > storeNmeXPlusStoreNameWidth && restus == 1, "Store rating not at sotre name right side.");

    //Switch browse mode to large image.
    Action.tapAdvancedButton();
    Action.tapButtonsInAdvancedBar(1);

    Action.chooseCategoryBrowseMode("大圖");

    //Verify current view is large image.
    Assert.successfulSwitchToLargeImageView();

    //Back to discovery screen.
    Action.tapButtonOnTabBar(2);
    Action.goDiscoveryStream();
});

test("[1938127] on item listing-list view check favorites icon show correct.", function () {
    //Go to product list.
    Action.goApparelCategory();
    Action.goCommodityTab();
    $.delay(4);

    //Tap Advanced button.
    Action.tapAdvancedButton();
    $.delay(sleep);

    //Tap browse mode button on advanced bar. And verify this button would enabled after tapped.
    Action.tapButtonsInAdvancedBar(1);
    Assert.buttonOnAdvancedIsEnabled(1);

    Action.chooseCategoryBrowseMode("列表");

    //Verify successful switch to listing view.
    Assert.successfulSwitchToListingView();

    //Verify favorites icon show correct, this function need passing product index parameters.
    Assert.favoritesIconShowCorrect(1);

    //Get product price X and Y
    var productPriceElement = app.mainWindow().collectionViews()[0].cells()[1].staticTexts()[3];
    var productPriceElementX = Action.getElementsOriginXString(productPriceElement);
    var productPriceElementY = Action.getElementsOriginYString(productPriceElement);

    //Get product price width.
    var productPriceElementWidth = Action.getElementsWidthString(productPriceElement);

    //Get favorites icon X and Y
    var favoritesElement = app.mainWindow().collectionViews()[0].cells()[1].buttons()[0];
    var favoritesElementX = Action.getElementsOriginXString(favoritesElement);
    var favoritesElementY = Action.getElementsOriginYString(favoritesElement);

    //verify favorites icon should at product price right side.
    var productPriceXPlusProductPriceWidth = parseInt(productPriceElementX) + parseInt(productPriceElementWidth);

    method.verifyTrue(favoritesElementX > productPriceXPlusProductPriceWidth, "favorites icon not at product price right side.");
    $.delay(3);

    //Switch browse mode to large image.
    Action.tapAdvancedButton();
    Action.tapButtonsInAdvancedBar(1);

    Action.chooseCategoryBrowseMode("大圖");

    //Verify current view is large image.
    Assert.successfulSwitchToLargeImageView();

    //Back to discovery screen.
    Action.tapButtonOnTabBar(2);
    Action.goDiscoveryStream();
});

//6.6
test("[1938129] on item listing-list view register should able to add item to his favorites list through tap favorites icon.", function () {
    //go to production item list.
    Action.goApparelCategory();
    Action.goCommodityTab();

    //Store product name.
    $.delay(5);
    var productName = app.mainWindow().collectionViews()[0].cells()[1].staticTexts()[0].name();

    //Tap Advanced button.
    Action.tapAdvancedButton();

    //Tap browse mode button on advanced bar. And verify this button would enabled after tapped.
    Action.tapButtonsInAdvancedBar(1);

    Action.chooseCategoryBrowseMode("列表");

    //Verify successful switch to photo grid view.
    Assert.successfulSwitchToListingView();
    $.delay(sleep);

    //Tap favorites icon add a production to favorites.
    Action.tapFavoritesIcon(1);
    $.delay(sleep);

    //got my favorites screen.
    Action.tapButtonOnTabBar(4);
    Action.goMayFavoritesScreen();

    //Assert product show in My favorites screen.
    Assert.productAddedToMyFavoritesScreen(productName);

    //Remove favorites item.
    Action.tapButtonOnTabBar(2);
    Action.tapFavoritesIcon(1);

    //Verify favorites item successful removed.
    Action.tapButtonOnTabBar(4);
    $.delay(3);
    Assert.productRemovedFromMyFavoritesScreen(productName);
     
    //Restore app to default screen.
    Action.goBack();
    Action.tapButtonOnTabBar(2);
    $.delay(sleep);

    //Go back to advanced bar switch browse mode to large image.
    Action.tapAdvancedButton();
    Action.tapButtonsInAdvancedBar(1);

    Action.chooseCategoryBrowseMode("大圖");

    //Back to discovery screen.
    Action.tapButtonOnTabBar(2);
    Action.goDiscoveryStream();
});

test("[1938130] check 全部分類 tab button show correct", function () {
    Action.tapButtonOnTabBar(0);
    Assert.buttonOnTabBarShowCorrect("全部分類");
    Action.goDiscoveryStream();
});

test("[1938131] check 全部分類 tab show correct.", function () {
    Action.tapButtonOnTabBar(2);
    Assert.categoriesList();
    Action.goDiscoveryStream();
});

test("[1938133] check 全部分類 show on screen top", function () {
    Action.tapButtonOnTabBar(2);
    Assert.navigationBarName("全部分類");
    Action.goDiscoveryStream();
});

test("[1938150] check 美妝 show correct.", function () {
    Action.tapButtonOnTabBar(2);
    Assert.allCategoryItemShowCorrect(1, "美妝");

    //Go to item list screen.
    Action.tapItemOnCategoryScreen(1);

    //verify screen successful navigate to 美妝 screen.
    Assert.navigationBarName("美妝");

    //Tap back button and go back to discovery screen.
    Action.goBack();
    Action.goDiscoveryStream();
});

test("[1938151] check 鞋包配飾 show correct.", function () {
    Action.tapButtonOnTabBar(2);
    Assert.allCategoryItemShowCorrect(2, "鞋包配飾");

    //Go to item list screen.
    Action.tapItemOnCategoryScreen(2);

    //verify screen successful navigate to 鞋包配飾 screen.
    Assert.navigationBarName("鞋包配飾");

    //Tap back button and go back to discovery screen.
    Action.goBack();
    Action.goDiscoveryStream();
});

test("[1938152] check 媽咪寶貝 show correct.", function () {
    Action.tapButtonOnTabBar(2);
    Assert.allCategoryItemShowCorrect(3, "媽咪寶貝");

    //Go to item list screen.
    Action.tapItemOnCategoryScreen(3);

    //verify screen successful navigate to 媽咪寶貝 screen.
    Assert.navigationBarName("媽咪寶貝");

    //Tap back button and go back to discovery screen.
    Action.goBack();
    Action.goDiscoveryStream();
});

test("[1938153] check 電腦/週邊 show correct.", function () {
    Action.tapButtonOnTabBar(2);
    Assert.allCategoryItemShowCorrect(4, "電腦/週邊");

    //Go to item list screen.
    Action.tapItemOnCategoryScreen(4);

    //verify screen successful navigate to 電腦/週邊 screen.
    Assert.navigationBarName("電腦/週邊");

    //Tap back button and go back to discovery screen.
    Action.goBack();
    Action.goDiscoveryStream();
});

test("[1938154] check 家電/視聽 show correct.", function () {
    Action.tapButtonOnTabBar(2);
    Assert.allCategoryItemShowCorrect(5, "家電/視聽");

    //Go to item list screen.
    Action.tapItemOnCategoryScreen(5);

    //verify screen successful navigate to 家電/視聽 screen.
    Assert.navigationBarName("家電/視聽");

    //Tap back button and go back to discovery screen.
    Action.goBack();
    Action.goDiscoveryStream();
});

test("[1938155] check 相機/ 手機/玩具 show correct.", function () {
    Action.tapButtonOnTabBar(2);
    Assert.allCategoryItemShowCorrect(6, "相機/ 手機/玩具");

    //Go to item list screen.
    Action.tapItemOnCategoryScreen(6);

    //verify screen successful navigate to 相機/ 手機/玩具 screen.
    Assert.navigationBarName("相機/手機/玩具");

    //Tap back button and go back to discovery screen.
    Action.goBack();
    Action.goDiscoveryStream();
});

test("[1938156] check 美食/ 保健/飲料 show correct.", function () {
    Action.tapButtonOnTabBar(2);
    Assert.allCategoryItemShowCorrect(7, "美食/ 保健/飲料");

    //Go to item list screen.
    Action.tapItemOnCategoryScreen(7);

    //verify screen successful navigate to 美食/ 保健/飲料 screen.
    Assert.navigationBarName("美食/保健/飲料");

    //Tap back button and go back to discovery screen.
    Action.goBack();
    Action.goDiscoveryStream();
});

test("[1938157] check 日用品/ 清潔/寵物 show correct.", function () {
    Action.tapButtonOnTabBar(2);
    Assert.allCategoryItemShowCorrect(8, "醫療/ 日用品/寵物");

    //Go to item list screen.
    Action.tapItemOnCategoryScreen(8);

    //verify screen successful navigate to 醫療/ 日用品/寵物 screen.
    Assert.navigationBarName("醫療/日用品/寵物");

    //Tap back button and go back to discovery screen.
    Action.goBack();
    Action.goDiscoveryStream();
});

test("[1938158] check 居家/ 寢具/傢俱 show correct.", function () {
    Action.tapButtonOnTabBar(2);
    Assert.allCategoryItemShowCorrect(9, "居家/ 寢具/傢俱");

    //Go to item list screen.
    Action.tapItemOnCategoryScreen(9);

    //verify screen successful navigate to 日用品/ 清潔/寵物 screen.
    Assert.navigationBarName("居家/寢具/傢俱");

    //Tap back button and go back to discovery screen.
    Action.goBack();
    Action.goDiscoveryStream();
});

test("[1938159] check 運動/ 戶外/休閒 show correct.", function () {
    Action.tapButtonOnTabBar(2);
    Assert.allCategoryItemShowCorrect(10, "運動/ 戶外/休閒");

    //Go to item list screen.
    Action.tapItemOnCategoryScreen(10);

    //verify screen successful navigate to 日用品/ 清潔/寵物 screen.
    Assert.navigationBarName("運動/戶外/休閒");

    //Tap back button and go back to discovery screen.
    Action.goBack();
    Action.goDiscoveryStream();
});

//6.11
test("[1938046] check the default browser mode", function () {
    //go to production item list.
    Action.goApparelCategory();
    Action.goCommodityTab();
    $.delay(sleep);

    //tap advanced button
    Action.tapAdvancedButton();
    Action.tapButtonsInAdvancedBar(1);
    $.delay(sleep);
    target.logElementTree();

    //check the default browser mode is list
    Assert.checkDefaultBrowserModeIsList();

    //restore
    Action.tapButtonsInAdvancedBar(0);
    Action.tapCancelButtonInAdvancedBar();
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
});

test("[1938050] Check the default is sort Tab", function () {
    //go to production item list.
    Action.goApparelCategory();
    Action.goCommodityTab();
    $.delay(3);

    //tap advanced button
    Action.tapAdvancedButton();
    $.delay(sleep);
    Assert.checkDefaultAdvanceButtonIsSort();

    //restore
    Action.tapCancelButtonInAdvancedBar();
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
});

test("[1938064] check 確定 button is effective", function () {
    //go to production item list.
    Action.goApparelCategory();
    Action.goCommodityTab();
    $.delay(sleep);

    //tap advanced button
    Action.tapAdvancedButton();
    Action.tapButtonsInAdvancedBar(2);
    Action.tapButtonOnFilterAttributeScreen(0);
    Action.tapSubmitButtonOnAdvanceScreen();
    $.delay(5);

    //check filter is effective
    Assert.checkReturnPageDisplay("服飾");

    //restore
    Action.tapAdvancedButton();
    Action.tapClearButtonOnFilterScreen();
    Action.tapButtonsInAdvancedBar(0);
    Action.tapCancelButtonInAdvancedBar();
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
});

test("[1938096] click product image", function () {
    //go to production item list.
    Action.goApparelCategory();
    Action.goCommodityTab();
    $.delay(sleep);

    //go to item page
    Action.tapItemOnProductListScreen();
    Action.slidingCommodityPage();

    //check product page is correct
    Assert.itemPageShowCorrect();

    //restore
    Action.goBack();
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
});

test("[1938109] click product image", function () {
    //go to production item list.
    Action.goApparelCategory();
    Action.goCommodityTab();
    $.delay(sleep);
    
    //tap advanced button
    Action.tapAdvancedButton();
    Action.tapButtonsInAdvancedBar(1);
    Action.chooseCategoryBrowseMode("小圖");
    $.delay(sleep);

    //go to item page
    Action.tapCommodityPictureOnSearchResultsPage();
    Action.slidingCommodityPage();

    //check product page is correct
    Assert.itemPageShowCorrect();

    //restore
    Action.tapButtonOnTabBar(2);
    Action.tapItemOnCategoryScreen(0); 
    Action.goCommodityTab();
    Action.tapAdvancedButton();
    Action.tapButtonsInAdvancedBar(1);
    Action.chooseCategoryBrowseMode("列表");
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
});

test("[1938121] click product image", function () {
    //go to production item list.
    Action.goApparelCategory();
    Action.goCommodityTab();
    $.delay(sleep);
    
    //tap advanced button
    Action.tapAdvancedButton();
    Action.tapButtonsInAdvancedBar(1);
    Action.chooseCategoryBrowseMode("大圖");
    $.delay(sleep);

    //go to item page
    Action.tapCommodityPictureOnSearchResultsPage();
    Action.slidingCommodityPage();
    $.delay(sleep);

    //check product page is correct
    Assert.itemPageShowCorrect();

    //restore
    Action.tapButtonOnTabBar(2);
    Action.tapItemOnCategoryScreen(0); 
    Action.goCommodityTab();
    Action.tapAdvancedButton();
    Action.tapButtonsInAdvancedBar(1);
    Action.chooseCategoryBrowseMode("列表");
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
});

test("[1938160] check 圖書/ 文具/影音 show correct.", function () {
    Action.tapButtonOnTabBar(2);
    Assert.allCategoryItemShowCorrect(11, "圖書/ 文具/影音");

    //Go to item list screen.
    Action.tapItemOnCategoryScreen(11);

    //verify screen successful navigate to 日用品/ 清潔/寵物 screen.
    Assert.navigationBarName("圖書/文具/影音");

    //Tap back button and go back to discovery screen.
    Action.goBack();
    Action.goDiscoveryStream();
});

test("[1953648] verify edit favorite category if correct", function () {
    Action.tapButtonOnTabBar(4);
    //edit favorite categories
    Action.tapButtonOnMyUserWhenCategory(6);

    Action.selectCategoryOnEditFavorite();
    $.delay(sleep);

    //verify edit favorite category if correct
    Assert.checkCategoryOnEditFavoriteIsSelected();

    //restore
    Action.selectCategoryOnEditFavorite();
    Action.goBack();
    Action.tapButtonOnTabBar(0);
});

test("[1953657] verify edit favorite category if correct on sidebar.", function () {
    Action.tapButtonOnTabBar(4);
    //edit favorite categories
    Action.tapButtonOnMyUserWhenCategory(6);

    Action.selectCategoryOnEditFavorite();

    Action.goBack();

    //slect favorite categories and assert them
    Action.verifyEditingFavoriteCategories();
    $.delay(5);

    //restore
    Action.tapButtonOnMyUser(6);
    Action.selectCategoryOnEditFavorite();
    Action.goBack();

    Action.tapButtonOnTabBar(0);
});

test("[1959882] Verify18 ban prompt.", function () {
    //go to 18 ban page
    Action.tapButtonOnTabBar(2);
    Action.tapItemOnCategoryScreen(10);
    Action.tapChoosePreductCategory(0,7);

    //Assert.check18BanScreenShowCorrect();

    //tap cancel on 18 ban page
    Action.back18BanScreen();

    //check back to "運動／戶外／休閒" page after user tap cancel on 18 ban page
    Assert.navigationBarName("運動/戶外/休閒");

    //restore
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
});

test("[1959881] product items should shorting by price low to high after user select this option.", function () {
    //Go to product list.
    Action.goApparelCategory();
    Action.goCommodityTab();

    //tap advanced button.
    Action.tapAdvancedButton();

    //go to soring tab.
    Action.tapButtonsInAdvancedBar("排序");

    //select price from high to low.
    Action.selectOptionOnSortingTab("價錢低到高");
    $.delay(sleep);

    //verify price value show correct.
    //the first parameter is product index and the second parameter is price index in product cell.
    Assert.checkPriceValueShowLessThan(1, 3, "1");

    //Restore application to default loaction.
    Action.tapButtonOnTabBar(2);
    Action.goDiscoveryStream();
});


//6.13
test("[1954573] verify user under the age of 18  never seen 18 ban screen function.", function () {
    //go to 18 ban page
    Action.tapButtonOnTabBar(2);
    $.delay(sleep);

    Action.tapItemOnCategoryScreen(10);
    $.delay(sleep);

    Action.tapChoosePreductCategory(0,7);
    $.delay(sleep);

    //tap cancel on 18 ban page
    Action.back18BanScreen();
    $.delay(sleep);

    //check back to "運動／戶外／休閒" page after user tap cancel on 18 ban page
    Assert.navigationBarName("運動/戶外/休閒");

    //restore
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
    Action.tapButtonOnTabBar(0);
});

test("[1938141] check 最新動態 button exist", function () {
    Action.tapButtonOnTabBar(2);
    Assert.buttonOnTabBarShowCorrect("最新動態");
    Action.goDiscoveryStream();
});

test("[1938143] check 最愛商店 button exist.", function () {
    Action.tapButtonOnTabBar(2);
    Assert.buttonOnTabBarShowCorrect("最愛商店");
    Action.goDiscoveryStream();
});

test("[1938145] check 購物車 button exist.", function () {
    Action.tapButtonOnTabBar(2);
    Assert.buttonOnTabBarShowCorrect("購物車");
    Action.goDiscoveryStream();
});

test("[1938147] check 我的帳戶 button exist.", function () {
    Action.tapButtonOnTabBar(2);
    Assert.buttonOnTabBarShowCorrect("我的帳戶");
    Action.goDiscoveryStream();
});

test("[1938149] check 服飾 show correct.", function () {
    Action.tapButtonOnTabBar(2);
    Assert.allCategoryItemShowCorrect(0, "服飾");

    //Go to item list screen.
    Action.tapItemOnCategoryScreen(0);

    //verify screen successful navigate to 服飾 screen.
    Assert.navigationBarName("服飾");

    //Tap back button and go back to discovery screen.
    Action.goBack();
    Action.goDiscoveryStream();
});

test("[1954571] verify 18 ban show correct.", function () {
    //do search.
    Action.doSearch("充氣娃娃");

    //switch layout to big image
    Action.tapButtonsInAdvancedBarWhenSRP();
    Action.tapButtonsInAdvancedBar(1);
    Action.chooseCategoryBrowseMode("大圖");

    //Go to item detail screen.
    Action.tapItemOnProductListScreen();
    $.delay(sleep);
    
    //Verify 18 ban screen show correct.
    Assert.check18BanScreenShowCorrect();

    //Tap back button exit 18 ban screen.
    Action.back18BanScreen();

    //tap discory stream to restore screen to default.
    Action.goDiscoveryStream();
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
    Action.tapButtonOnTabBar(0);
});