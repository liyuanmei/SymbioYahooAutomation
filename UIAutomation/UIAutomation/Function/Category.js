test("[1938036] Check Header", function () {
    target.logDeviceInfo();
    Action.goApparelCategory();
    Action.goCommodityTab();
    target.logElementTree();
    Action.pageShow();

    Assert.commodityHeader();
    Action.goBack(); 
    Action.goDiscoveryStream();
});

test("[1938037] verify screen can go back to L1 list", function () {
    target.logDeviceInfo();
    Action.goApparelCategory();
    Action.goBack();
    Assert.categoryScreen();
    Action.goDiscoveryStream();
});

test("[1938041] verify tab value", function () {
    target.logDeviceInfo();
    Action.goApparelCategory();
    Assert.checkTab();
    Action.goBack();
    Action.goDiscoveryStream();
});

test("[1938042] verify category list in Apparel", function() {
    target.logDeviceInfo();
    Action.goApparelCategory();

    $.delay(sleep);
    var version = target.systemVersion();
    version = version.substring(0, version.lastIndexOf("."));
    if(version == "6.1") {
        //Check category tab button is enabled, if button enabled then verify all items in list show correct.
        var categoryButtonEnabled = app.mainWindow().collectionViews()[0].cells()[0].segmentedControls()[0].buttons()[0].isEnabled();
    }
    else{
        //Check category tab button is enabled, if button enabled then verify all items in list show correct.
        var categoryButtonEnabled = app.mainWindow().collectionViews()[0].cells()[0].buttons()[0].isEnabled();
    }

    $.delay(sleep);

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
    target.logDeviceInfo();
    Action.goApparelCategory();

    $.delay(sleep);
    var version = target.systemVersion();
    version = version.substring(0, version.lastIndexOf("."));
    if(version == "6.1") {
        //Check category tab button is enabled. If button enabled then switch to Commdity tab.
        var categoryButtonEnabled = app.mainWindow().collectionViews()[0].cells()[0].segmentedControls()[0].buttons()[0].isEnabled();
    }
    else{
        //Check category tab button is enabled. If button enabled then switch to Commdity tab.
        var categoryButtonEnabled = app.mainWindow().collectionViews()[0].cells()[0].buttons()[0].isEnabled();
    }

    $.delay(5);

    if (categoryButtonEnabled === 1){
        Action.goCommodityTab();
        $.delay(sleep);
        Assert.commodityButtonStatus();
    }
    else {
        UIALogger.logError("分類 tab not enabled.");
    }

    $.delay(5);

    //Verify screen already switch to Commdity tab.
    Assert.commodityButtonStatus();
    
    $.delay(5);
    var version = target.systemVersion();
    version = version.substring(0, version.lastIndexOf("."));
    if(version == "6.1") {
        Action.tapAdvancedButton();
        Action.tapButtonsInAdvancedBar(1);
        Action.chooseCategoryBrowseMode("列表");
        $.delay(5);

        Assert.commodityItemsShowCount(10);
        $.delay(5);

        Action.tapAdvancedButton();
        Action.tapButtonsInAdvancedBar(1);
        Action.chooseCategoryBrowseMode("大圖");
    }
    else{
        Assert.commodityItemsShowCount(21);
    }
    
    //Tap back icon and verify page successful go back to category list.
    Action.goBack();
    Assert.categoriesList();

    Action.goDiscoveryStream();
});

//04-18-2014
test("[1938047] Check item list default setting is show 20 items", function () {
    target.logDeviceInfo();
    Action.goApparelCategory();
    $.delay(sleep);

    //Go to Commodity tab and wait 2 seconds let items refreshed.
    Action.goCommodityTab();
    Action.pageShow();

    //The first cell is tab button bar so the total cells should 20 items + 1 tab button bar.
    var version = target.systemVersion();
    version = version.substring(0, version.lastIndexOf("."));
    if(version == "6.1") {
        Action.tapAdvancedButton();
        Action.tapButtonsInAdvancedBar(1);
        Action.chooseCategoryBrowseMode("列表");
        $.delay(5);

        Assert.commodityItemsShowCount(11);
        $.delay(5);

        Action.tapAdvancedButton();
        Action.tapButtonsInAdvancedBar(1);
        Action.chooseCategoryBrowseMode("大圖");
    }
    else{
        Assert.commodityItemsShowCount(21);
    }

    Action.goBack();
    Action.goDiscoveryStream();
});

test("[1938048] Scroll screen more items should successful loaded", function () {
    target.logDeviceInfo();
    Action.goApparelCategory();
    $.delay(sleep);

    //Go to Commodity tab and wait 2 seconds let items refreshed.
    Action.goCommodityTab();
    Action.pageShow();

    //Tap Advanced button.
    Action.tapAdvancedButton();
    $.delay(sleep);

    //Tap browse mode button on advanced bar. And verify this button would enabled after tapped.
    Action.tapButtonsInAdvancedBar(1);
    $.delay(sleep);

    Assert.buttonOnAdvancedIsEnabled(1);

    Action.chooseCategoryBrowseMode("大圖");
    Action.pageShow();

    //Verify currently should have 20 items in screen.
    var version = target.systemVersion();
    version = version.substring(0, version.lastIndexOf("."));
    if(version == "6.1") {
        Assert.commodityItemsShowCount(8);
    }
    else{
        Assert.commodityItemsShowCount(21);
    }
    $.delay(15);

    //Scroll screen. After screen successful scroll cell items should increase to 40.
    obj.scrollDowns(16);
    $.delay(10);

    var version = target.systemVersion();
    version = version.substring(0, version.lastIndexOf("."));
    if(version == "6.1") {
        Assert.commodityItemsShowCount(8);
    }
    else{
        Assert.commodityItemsShowCount(41);
    }

    Action.goBack();
    Action.goDiscoveryStream();
});

test("[1938052] check 搜尋服飾 show in search bar", function () {
    target.logDeviceInfo();
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
    target.logDeviceInfo();
    Action.goApparelCategory();
    Action.goCommodityTab();
    Action.pageShow();

    //Tap Advanced button.
    Action.tapAdvancedButton();
    $.delay(sleep);
     
    //tap 排序 button and verify 排序 button is enabled. the order of 排序 button is 0.
    Action.tapButtonsInAdvancedBar(0);
    $.delay(5);

    Assert.buttonOnAdvancedIsEnabled(0);

    //Tap cancel button exit advanced bar.
    Action.tapCancelButtonInAdvancedBar();

    Action.goBack();
    Action.goDiscoveryStream();
});

test("[1938054] can switch to 篩選 tab after click 篩選 button", function () {
    target.logDeviceInfo();
    Action.goApparelCategory();
    Action.goCommodityTab();
    Action.pageShow();

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
    target.logDeviceInfo();
    Action.goApparelCategory();
    Action.goCommodityTab();
    Action.pageShow();

    //Tap Advanced button.
    Action.tapAdvancedButton();
    $.delay(sleep);

    //tap 排序 button and verify elements order in 排序 tab show correct.
    Action.tapButtonsInAdvancedBar(0);
    Assert.buttonOnAdvancedIsEnabled(0);
    $.delay(5);
    target.logElementTree();

    Assert.elementsOrderInSortTab();

    //Tap Cancel button on Navigation Bar.
    Action.tapCancelButtonInAdvancedBar();

    Action.goBack();
    Action.goDiscoveryStream();
});

test("[1938060] check the elements on 篩選 screen", function () {
    target.logDeviceInfo();
    Action.goApparelCategory();
    Action.goCommodityTab();
    Action.pageShow();

    //Tap Advanced button.
    Action.tapAdvancedButton();
    $.delay(sleep);

    //tap 篩選 button and verify 篩選 button is enabled. the order of 排序 button is 2.
    Action.tapButtonsInAdvancedBar(2);
    $.delay(sleep);

    Assert.buttonOnAdvancedIsEnabled(2);
    $.delay(sleep);

    //Verify elements on Attribute screen show correct.
    Assert.elementsOnFilterScreen();

    //Tap Cancel button on Navigation Bar.
    Action.tapCancelButtonInAdvancedBar();

    Action.goBack();
    Action.goDiscoveryStream();
});

test("[1938063] check “確定” button exist on Advanced bar", function () {
    target.logDeviceInfo();
    Action.goApparelCategory();
    Action.goCommodityTab();
    Action.pageShow();

    //Tap Advanced button.
    Action.tapAdvancedButton();
    $.delay(sleep);

    //Tap 篩選 button
    Action.tapButtonsInAdvancedBar(2);

    //Verify "確定" button exist on Navigation Bar, the index of this button is 2.
    var version = target.systemVersion();
    version = version.substring(0, version.lastIndexOf("."));
    if(version == "6.1") {
        Assert.buttonExistOnNavigationBar(1, "確定");
    }
    else{
        Assert.buttonExistOnNavigationBar(2, "確定");
    }

    //Tap cancel button and navigate back to discovery screen.
    Action.tapCancelButtonInAdvancedBar();

    Action.goBack();
    Action.goDiscoveryStream();
});

test("[1938069] check able to tap '可刷卡' and untap '可刷卡' button", function () {
    target.logDeviceInfo();
    Action.goApparelCategory();
    Action.goCommodityTab();
    Action.pageShow();

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
    target.logDeviceInfo();
    Action.goApparelCategory();
    Action.goCommodityTab();
    Action.pageShow();

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
    target.logDeviceInfo();
    Action.goApparelCategory();
    Action.goCommodityTab();
    Action.pageShow();

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
    target.logDeviceInfo();
    Action.goApparelCategory();
    Action.goCommodityTab();
    Action.pageShow();

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
    target.logDeviceInfo();
    Action.goApparelCategory();
    Action.goCommodityTab();
    Action.pageShow();

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
    target.logDeviceInfo();
    Action.goApparelCategory();
    Action.goCommodityTab();
    Action.pageShow();

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
    target.logDeviceInfo();
    Action.goApparelCategory();
    Action.goCommodityTab();
    Action.pageShow();

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
    target.logDeviceInfo();
    Action.goApparelCategory();
    Action.goCommodityTab();
    Action.pageShow();

    //Tap item on list to navigate to item page.
    Action.tapItemOnProductListScreen();
    $.delay(15);

    obj.scrollDowns(1);
    $.delay(10);
     
    //Verify screen successful navigated to item page.
    Assert.itemPageShowCorrect();

    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
    Action.tapButtonOnTabBar(0);
});

test("[1938100] check product price show correct.", function () {
    target.logDeviceInfo();
    Action.goApparelCategory();
    Action.goCommodityTab();
    Action.pageShow();

    //first parameter is second product, second parameter is the  location of price in product cell.
    var version = target.systemVersion();
    version = version.substring(0, version.lastIndexOf("."));
    if(version == "6.1") {
        obj.scrollDowns(1);
    }

    $.delay(10);
    var version = target.systemVersion();
    version = version.substring(0, version.lastIndexOf("."));
    if(version == "6.1") {
        //first parameter is second product, second parameter is the  location of price in product cell.
        Assert.productPriceShowCorrect(1, 3);
    }
    else{
        //first parameter is second product, second parameter is the  location of price in product cell.
        Assert.productPriceShowCorrect(2, 2);
    }

    //Tap back button and go back to discovery screen.
    Action.goBack();
    Action.goDiscoveryStream();
});

test("[1938101] check the rating show correct.", function () {
    Action.goApparelCategory();
    Action.goCommodityTab();
    Action.pageShow();

    //Verify the value of rating is less than 10, if not fail.
    Assert.storeRatingShowCorrect(1, 1);

    //Tap back button and go back to discovery screen.
    Action.goBack();
    Action.goDiscoveryStream();
});

test("[1938039] search name on header should changed after search another keyword.", function () {
    target.logDeviceInfo();

    //go 服飾 screen.
    Action.goApparelCategory();

    //do search
    Action.doSearch("上衣");
    $.delay(15);

    var version = target.systemVersion();
    version = version.substring(0, version.lastIndexOf("."));
    if(version == "6.1") {
        obj.scrollDowns(1);
        $.delay(10);

        var collectionViews = app.mainWindow().collectionViews()[0];
        var itemCell = collectionViews.cells()[0];
        var itemSummary = itemCell.staticTexts()[2];
    }
    else{
        var collectionViews = app.mainWindow().collectionViews()[0];
        var itemCell = collectionViews.cells()[1];
        var itemSummary = itemCell.staticTexts()[2];
    }

    //verify search result page contain expect search keyword.
    Assert.elementsShouldContainText(itemSummary, "上衣");
    $.delay(5);
    
    //Do search again.
    Action.tapSearchButtonOnSRP();
    Action.searchBarInputChinese("iphone");
    Action.tapKeyboardSearch();
    Action.pageShow();

    var version = target.systemVersion();
    version = version.substring(0, version.lastIndexOf("."));
    if(version == "6.1") {
        obj.scrollDowns(1);
        $.delay(10);
        //Verify search result page contain expect search keyword.
        var productItem = app.mainWindow().collectionViews()[0].cells()[0];
        var productSummary = productItem.staticTexts()[2];
    }
    else{
        //Verify search result page contain expect search keyword.
        var productItem = app.mainWindow().collectionViews()[0].cells()[1];
        var productSummary = productItem.staticTexts()[2];
    }
    $.delay(5);

    Assert.elementsShouldContainText(productSummary, "hone");

    //Back to discovery screen.
    Action.tapButtonOnTabBar(2);
    Action.goDiscoveryStream();
});

test("[1938044] check 進階 button exist.", function () {
    target.logDeviceInfo();

    //go 商品 screen.
    Action.goApparelCategory();
    Action.goCommodityTab();
    Action.pageShow();

    //Verify 進階 button exist on screen.
    var advancedButton = app.mainWindow().collectionViews()[0].buttons()[0];

    Assert.checkButtonExist(advancedButton);

    //Back to discovery screen.
    Action.tapButtonOnTabBar(2);
    Action.goDiscoveryStream();
});

test("[1938045] check 共xxxx筆結果.", function () {
    //go 商品 screen.
    Action.goApparelCategory();
    Action.goCommodityTab();
    $.delay(10);

    //verify 共xxxx筆結果 show correct.
    var version = target.systemVersion();
    version = version.substring(0, version.lastIndexOf("."));
    if(version == "6.1") {
        var numberOfItems = app.mainWindow().collectionViews()[0].staticTexts()[1];
    }
    else{
        var numberOfItems = app.mainWindow().collectionViews()[0].staticTexts()[0];
    }
    $.delay(10);

    Assert.numberOfItemsShowCorrect(numberOfItems);

    //Back to discovery screen.
    Action.tapButtonOnTabBar(2);
    Action.goDiscoveryStream();
});

test("[1938061] check 清除 button show correct on advanced bar.", function (){
    target.logDeviceInfo();

    //Go 商品 screen.
    Action.goApparelCategory();
    Action.goCommodityTab();
    Action.pageShow();

    //tap Advance button
    Action.tapAdvancedButton();
    $.delay(sleep);

    //Tap 篩選 button.
    Action.tapButtonsInAdvancedBar(2);

    //Tap "優良商店" and verify 清除 button show up.
    Action.tapButtonOnFilterAttributeScreen(8);

    var version = target.systemVersion();
    version = version.substring(0, version.lastIndexOf("."));
    if(version == "6.1") {
        var attributeCollectView = app.mainWindow().collectionViews()[0];
        var attributeCollectViewOriginY = Action.getElementsOriginYString(attributeCollectView);
        var attributeCollectViewOriginX = Action.getElementsOriginXString(attributeCollectView);
    }
    else{
        var attributeCollectView = app.mainWindow().collectionViews()[1];
        var attributeCollectViewOriginY = Action.getElementsOriginYString(attributeCollectView);
        var attributeCollectViewOriginX = Action.getElementsOriginXString(attributeCollectView);
    }

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
    target.logDeviceInfo();

    //Go to product list.
    Action.goApparelCategory();
    Action.goCommodityTab();
    Action.pageShow();

    //tap advanced button.
    Action.tapAdvancedButton();
    $.delay(sleep);

    //go to 篩選 tab.
    Action.tapButtonsInAdvancedBar(2);

    //verify the default price is 100000 +
    Assert.checkPriceBarShowCorrect("100000+ 元");
    
    $.delay(sleep);
    var version = target.systemVersion();
    version = version.substring(0, version.lastIndexOf("."));
    if(version == "6.1") {
        //drag price bar to 1020 price.
        app.mainWindow().dragInsideWithOptions({startOffset: {x:0.92, y:0.34}, endOffset:{x: 0.234, y:0.37}, duration:12.2});
        $.delay(sleep);

        target.logElementTree();
        //Verify price show correct after dragging.
        Assert.checkPriceBarShowCorrect("1020 元");

        //Tap clear button
        Action.tapClearButtonOnFilterScreen();
        $.delay(sleep);

        //Verify price bar restore to default value.
        Assert.checkPriceBarShowCorrect("100000+ 元");
    }
    else{
        //drag price bar to 1020 price.    
        app.mainWindow().dragInsideWithOptions({startOffset: {x: 0.92, y: 0.29}, endOffset:{x: 0.234, y: 0.29}});
        $.delay(sleep);
        target.logElementTree();

        //Verify price show correct after dragging.
        Assert.checkPriceBarShowCorrect("1020 元");

        //Tap clear button
        Action.tapClearButtonOnFilterScreen();
        $.delay(sleep);

        //Verify price bar restore to default value.
        Assert.checkPriceBarShowCorrect("100000+ 元");
    }
    
    //Tap submit button and restore application to default location.
    Action.tapSubmitButtonOnAdvanceScreen();
    Action.tapButtonOnTabBar(2);
    Action.goDiscoveryStream();
});

test("[1938084] check able to tap 超商取貨 and untap 超商取貨", function () {
    target.logDeviceInfo();

    Action.goApparelCategory();
    Action.goCommodityTab();
    Action.pageShow();

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
    target.logDeviceInfo();
    Action.goApparelCategory();
    Action.goCommodityTab();
    Action.pageShow();

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
    target.logDeviceInfo();
    Action.goApparelCategory();
    Action.goCommodityTab();
    Action.pageShow();

    var version = target.systemVersion();
    version = version.substring(0, version.lastIndexOf("."));
    if(version == "6.1") {
        $.delay(15);

        obj.scrollDowns(1);
        $.delay(sleep);

        //Verify favorites icon show correct, this function need passing product index parameters.
        Assert.favoritesIconShowCorrect(1);
    }
    else{
        //Verify favorites icon show correct, this function need passing product index parameters.
        Assert.favoritesIconShowCorrect(3);
    }

    //Tap back button and go back to discovery screen.
    Action.goBack();
    Action.goDiscoveryStream();
});

test("[1938103] check log in window show after unregister user tap favorites icon.", function () {
    target.logDeviceInfo();
    Action.tapButtonOnTabBar(4);
    $.delay(sleep);
    
    var version = target.systemVersion();
    version = version.substring(0, version.lastIndexOf("."));
    if(version == "6.1") {
        var logined = app.mainWindow().images()[1].name();
    }
    else{
        var logined = app.mainWindow().images()[2].name();
    }
    
    if(logined == "img-default-profile.png"){
        $.delay(5);

        //Log out and remove user login history
        Action.doUserLogout();
    }
    else{
        $.delay(5);
        //Tap exit button exit login window.
        Action.exitLoginWindow();
    }
    $.delay(10);

    Action.goApparelCategory();
    Action.goCommodityTab();
    $.delay(15);

    var version = target.systemVersion();
    version = version.substring(0, version.lastIndexOf("."));
    if(version == "6.1") {
        obj.scrollDowns(1);
        $.delay(10);
    }
     
    //tap favorites icon, after tapped log in window show up
    Action.tapFavoritesIcon(1);
    $.delay(10);

    var login = app.mainWindow().tableViews()[0].cells()["Add Account"].staticTexts()[0].name();
    $.delay(5);

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
    target.logDeviceInfo();
    //Go to product list.
    Action.goApparelCategory();
    Action.goCommodityTab();
    Action.pageShow();

    //Tap Advanced button.
    Action.tapAdvancedButton();

    //Tap browse mode button on advanced bar. And verify this button would enabled after tapped.
    Action.tapButtonsInAdvancedBar(1);

    Action.chooseCategoryBrowseMode("小圖");
    $.delay(10);
    
    var version = target.systemVersion();
    version = version.substring(0, version.lastIndexOf("."));
    if(version == "6.1") {
        //tap favorites icon, after tapped log in window show up.
        Action.tapFavoritesIcon(4);
        $.delay(10);
    }
    else{
        //tap favorites icon, after tapped log in window show up.
        Action.tapFavoritesIcon(1);
        $.delay(10);
    }
    
    //Verify login window show correct.
    var login = app.mainWindow().tableViews()[0].cells()["Add Account"].staticTexts()[0].name();
    $.delay(5);

    if(login == "Add Account"){
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
    target.logDeviceInfo();
    //Go to product list.
    Action.goApparelCategory();
    Action.goCommodityTab();
    Action.pageShow();

    //Tap Advanced button.
    Action.tapAdvancedButton();

    //Tap browse mode button on advanced bar. And verify this button would enabled after tapped.
    Action.tapButtonsInAdvancedBar(1);
    Assert.buttonOnAdvancedIsEnabled(1);

    Action.chooseCategoryBrowseMode("列表");
    $.delay(10);

    var version = target.systemVersion();
    version = version.substring(0, version.lastIndexOf("."));
    if(version == "6.1") {
        //Verify favorites icon show correct, this function need passing product index parameters.
        Assert.favoritesIconShowCorrect(2);
        $.delay(5);

        //tap favorites icon, after tapped log in window show up.
        Action.tapFavoritesIcon(2);
        $.delay(10);
    }
    else{
        //Verify favorites icon show correct, this function need passing product index parameters.
        Assert.favoritesIconShowCorrect(1);
        $.delay(5);

        //tap favorites icon, after tapped log in window show up.
        Action.tapFavoritesIcon(1);
        $.delay(10);
    }
    
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

    //Back to discovery screen.
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(2);
    Action.goDiscoveryStream();
});

test("[1938104] login user able to add product to favorites", function () {
    target.logDeviceInfo();
    $.delay(3);

    Action.tapButtonOnTabBar(4);
    $.delay(sleep);

    var login = app.mainWindow().tableViews()[0].cells()["Add Account"].staticTexts()[0].name();
    $.delay(sleep);

    //Tap exit button exit login window.
    Action.exitLoginWindow();
    $.delay(3);

    if(login == "Add Account"){
        Action.tapAddAccountOnLogin("mobileappstore3", "A1234qwer");
    }
    else{
        //Verify login window show correct.
        Action.doUserLogin("mobileappstore3", "A1234qwer");
    }
    $.delay(10);
    
    //go to production item list.
    Action.goApparelCategory();
    Action.goCommodityTab();
    $.delay(10);

    //Tap favorites icon add a production to favorites.
    var version = target.systemVersion();
    version = version.substring(0, version.lastIndexOf("."));
    if(version == "6.1") {
        $.delay(15);

        obj.scrollDowns(1);
        $.delay(10);
    }

    //Tap favorites icon add a production to favorites.
    Action.tapFavoritesIcon(1);
    $.delay(sleep);
    var version = target.systemVersion();
    version = version.substring(0, version.lastIndexOf("."));
    if(version == "6.1") {
        var productName = app.mainWindow().collectionViews()[0].cells()[0].name();
    }
    else{
        var productName = app.mainWindow().collectionViews()[0].cells()[1].name();
    }
    
    //got my favorites screen.
    Action.tapButtonOnTabBar(4);
    Action.goMayFavoritesScreen();
    $.delay(5);

    //Assert product show in My favorites screen.
    Assert.productAddedToMyFavoritesScreen(productName);

    //Remove favorites item.
    Action.tapButtonOnTabBar(2);
    $.delay(sleep);

    var product = app.mainWindow().collectionViews()[0].cells()[1].staticTexts()[0].name();
    $.delay(sleep);

    Action.tapFavoritesIcon(1);

    //Verify favorites item successful removed.
    Action.tapButtonOnTabBar(4);
    $.delay(5);

    Assert.productRemovedFromMyFavoritesScreen(product);
    
    //Restore app to default screen.
    Action.goBack();
    Action.tapButtonOnTabBar(2);

    Action.goBack();
    Action.goDiscoveryStream();
});

//6.5
test("[1938049] check advanced buttons order.", function () {
    target.logDeviceInfo();

    //Go 商品 screen.
    Action.goApparelCategory();
    Action.goCommodityTab();
    Action.pageShow();

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

test("[1938113] check item price show correct.", function () {
    target.logDeviceInfo();

    //Go to product list.
    Action.goApparelCategory();
    Action.goCommodityTab();
    Action.pageShow();

    var version = target.systemVersion();
    version = version.substring(0, version.lastIndexOf("."));
    if(version == "6.1") {
        Action.tapAdvancedButton();
        $.delay(sleep);

        Action.tapButtonsInAdvancedBar(1);
        $.delay(sleep);

        Action.chooseCategoryBrowseMode("列表");
        $.delay(5);

        //verify product price show correct.
        Assert.productPriceShowCorrect(2, 3);
    }
    else{
        $.delay(sleep);
        //Tap Advanced button.
        Action.tapAdvancedButton();
        $.delay(sleep);

        //Tap browse mode button on advanced bar. And verify this button would enabled after tapped.
        Action.tapButtonsInAdvancedBar(1);

        Action.chooseCategoryBrowseMode("列表");
        Action.pageShow();
        //verify product price show correct.
        Assert.productPriceShowCorrect("Miu-Star", 3);
    }
    
    //Back to discovery screen.
    Action.tapButtonOnTabBar(2);
    Action.goDiscoveryStream();
});


test("[1938115] check favorites icon show correct with photo grid view.", function () {
    target.logDeviceInfo();

    //Go to product list.
    Action.goApparelCategory();
    Action.goCommodityTab();
    Action.pageShow();

    //Tap Advanced button.
    Action.tapAdvancedButton();

    //Tap browse mode button on advanced bar. And verify this button would enabled after tapped.
    Action.tapButtonsInAdvancedBar(1);
    Assert.buttonOnAdvancedIsEnabled(1);

    Action.chooseCategoryBrowseMode("小圖");
    $.delay(5);
    
    //Verify successful switch to photo grid view.
    Assert.successfulSwitchToPhotoGridView();

    $.delay(sleep);
    var version = target.systemVersion();
    version = version.substring(0, version.lastIndexOf("."));
    if(version == "6.1") {
        //verify favorites icon show on product cell.
        Assert.favoritesIconShowCorrect(4);

        //get product price X and Y.
        var productPrice = app.mainWindow().collectionViews()[0].cells()[4].staticTexts()[0];
        var productPriceX = Action.getElementsOriginXString(productPrice);
        var productPriceY = Action.getElementsOriginYString(productPrice);

        //get favorites icon X and Y
        var favoritesIcon = app.mainWindow().collectionViews()[0].cells()[4].buttons()[0];
        var favoritesIconX = Action.getElementsOriginXString(favoritesIcon);
        var favoritesIconY = Action.getElementsOriginYString(favoritesIcon);
    }
    else{
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
    }
    
    //Verify favorites icon place at product price right side.
    method.verifyTrue(favoritesIconX < productPriceX && (productPriceY - favoritesIconY) < 20, "favorites icon not at product price right side.");

    //Go back to advanced bar switch browse mode to large image.
    Action.tapAdvancedButton();
    Action.tapButtonsInAdvancedBar(1);

    Action.chooseCategoryBrowseMode("大圖");

    //Back to discovery screen.
    Action.tapButtonOnTabBar(2);
    Action.goDiscoveryStream();
});

test("[1938117] On photo grid view register user able to add product to his favorites list.", function() {
    target.logDeviceInfo();

    //go to production item list.
    Action.goApparelCategory();
    Action.goCommodityTab();
    Action.pageShow();

    //Store product name.
    var version = target.systemVersion();
    version = version.substring(0, version.lastIndexOf("."));
    if(version == "6.1") {
        var productName = app.mainWindow().collectionViews()[0].cells()[2].staticTexts()[0].name();
    }
    else{
        var productName = app.mainWindow().collectionViews()[0].cells()[1].staticTexts()[0].name();
    }
    
    //Tap Advanced button.
    Action.tapAdvancedButton();

    //Tap browse mode button on advanced bar. And verify this button would enabled after tapped.
    Action.tapButtonsInAdvancedBar(1);

    Action.chooseCategoryBrowseMode("小圖");

    $.delay(5);
    var version = target.systemVersion();
    version = version.substring(0, version.lastIndexOf("."));
    if(version == "6.1") {
        //Tap favorites icon add a production to favorites.
        Action.tapFavoritesIcon(4);
    }
    else{
        //Verify successful switch to photo grid view.
        Assert.successfulSwitchToPhotoGridView();

        //Tap favorites icon add a production to favorites.
        Action.tapFavoritesIcon(1);
    }
    
    //got my favorites screen.
    Action.tapButtonOnTabBar(4);
    Action.goMayFavoritesScreen();
    $.delay(5);

    //Assert product show in My favorites screen.
    Assert.productAddedToMyFavoritesScreen(productName);

    //Remove favorites item.
    Action.tapButtonOnTabBar(2);

    $.delay(sleep);
    var version = target.systemVersion();
    version = version.substring(0, version.lastIndexOf("."));
    if(version == "6.1") {
        //Tap favorites icon add a production to favorites.
        Action.tapFavoritesIcon(4);
    }
    else{
        //Tap favorites icon add a production to favorites.
        Action.tapFavoritesIcon(1);
    }

    //Verify favorites item successful removed.
    Action.tapButtonOnTabBar(4);
    $.delay(5);

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
    target.logDeviceInfo();

    //Go to product list.
    Action.goApparelCategory();
    Action.goCommodityTab();
    Action.pageShow();

    //Tap Advanced button.
    Action.tapAdvancedButton();

    //Tap browse mode button on advanced bar. And verify this button would enabled after tapped.
    Action.tapButtonsInAdvancedBar(1);
    $.delay(5);

    Assert.buttonOnAdvancedIsEnabled(1);
    Action.chooseCategoryBrowseMode("列表");

    $.delay(5);
    var version = target.systemVersion();
    version = version.substring(0, version.lastIndexOf("."));
    if(version == "6.1") {
        //Tap store name to navigate to item details page.
        var storeNameElement = app.mainWindow().collectionViews()[0].cells()[2].staticTexts()[0];
        var storeName = storeNameElement.name()
        $.delay(4);
    }
    else{
        //Verify successful switch to listing view.
        Assert.successfulSwitchToListingView();
        $.delay(sleep);

        //Tap store name to navigate to item details page.
        var storeNameElement = app.mainWindow().collectionViews()[0].cells()[1].staticTexts()[0];
        var storeName = storeNameElement.name()
        $.delay(4);
    }
    
    Action.tapElementsOnScreen(storeNameElement);
    $.delay(15);

    obj.scrollDowns(1);
    $.delay(10);

    //Verify screen successful navigate to item details.
    Assert.itemPageShowCorrect();

    //Verify screen successful navigate to item details.
    Assert.itemPageShowCorrect(storeName);

    //Back to list screen.
    Action.goBack();

    //Switch browse mode to large image.
    Action.tapAdvancedButton();
    Action.tapButtonsInAdvancedBar(1);

    Action.chooseCategoryBrowseMode("大圖");
    $.delay(sleep);

    var version = target.systemVersion();
    version = version.substring(0, version.lastIndexOf("."));
    if(version == "6.1") {
        //Back to discovery screen.
        Action.tapButtonOnTabBar(2);
        Action.goDiscoveryStream();
    }
    else{
        //Verify current view is large image.
        Assert.successfulSwitchToLargeImageView();

        //Back to discovery screen.
        Action.tapButtonOnTabBar(2);
        Action.goDiscoveryStream();
    }
});

test("[1938125] on item listing-list view check product price show correct.", function () {
    target.logDeviceInfo();

    //Go to product list.
    Action.goApparelCategory();
    Action.goCommodityTab();
    Action.pageShow();

    //Tap Advanced button.
    Action.tapAdvancedButton();

    //Tap browse mode button on advanced bar. And verify this button would enabled after tapped.
    Action.tapButtonsInAdvancedBar(1);
    Assert.buttonOnAdvancedIsEnabled(1);

    Action.chooseCategoryBrowseMode("列表");

    $.delay(5);
    var version = target.systemVersion();
    version = version.substring(0, version.lastIndexOf("."));
    if(version == "6.1") {
        //Get product name X and Y
        var productNameElement = app.mainWindow().collectionViews()[0].cells()[2].staticTexts()[2];
        var productNameElementX = Action.getElementsOriginXString(productNameElement);
        var productNameElementY = Action.getElementsOriginYString(productNameElement);

        //Get product name height
        var productNameElementHeight = Action.getElementsHeightString(productNameElement);

        //Get product price X and Y
        var productPriceElement = app.mainWindow().collectionViews()[0].cells()[2].staticTexts()[3];
        var productPriceElementX = Action.getElementsOriginXString(productPriceElement);
        var productPriceElementY = Action.getElementsOriginYString(productPriceElement);

        //verify product price should underneath the product name.
        var productNameElementYPlusProductNameElementHeight = productNameElementY + productNameElementY;
        method.verifyTrue(productNameElementX == productPriceElementX && productPriceElementY > productNameElementYPlusProductNameElementHeight, "product price is not underneath the product name");
    }
    else{
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
        method.verifyTrue(productNameElementX == productPriceElementX && productPriceElementY > productNameElementYPlusProductNameElementHeight, "product price is not underneath the product name");
    }

    //Switch browse mode to large image.
    Action.tapAdvancedButton();
    Action.tapButtonsInAdvancedBar(1);

    Action.chooseCategoryBrowseMode("大圖");

    //Back to discovery screen.
    Action.tapButtonOnTabBar(2);
    Action.goDiscoveryStream();
});

test("[1938126] on item listing-list view check product rating show correct.", function () {
    target.logDeviceInfo();

    //Go to product list.
    Action.goApparelCategory();
    Action.goCommodityTab();
    Action.pageShow();

    //Tap Advanced button.
    Action.tapAdvancedButton();

    //Tap browse mode button on advanced bar. And verify this button would enabled after tapped.
    Action.tapButtonsInAdvancedBar(1);
    Assert.buttonOnAdvancedIsEnabled(1);

    Action.chooseCategoryBrowseMode("列表");
    $.delay(5);
    
    var version = target.systemVersion();
    version = version.substring(0, version.lastIndexOf("."));
    if(version == "6.1") {
        //Verify the value of rating is less than 10, if not fail.
        Assert.storeRatingShowCorrect(1, 1);

        //get store name X and Y.
        var storeNameElement = app.mainWindow().collectionViews()[0].cells()[2].staticTexts()[0];
        var storeNameElementX = Action.getElementsOriginXString(storeNameElement);
        var storeNameElementY = Action.getElementsOriginYString(storeNameElement);

        //get store name width.
        var storeNameElementWidth = Action.getElementsWidthString(storeNameElement);

        //get store rating X and Y.
        var storeRatingElement = app.mainWindow().collectionViews()[0].cells()[2].staticTexts()[1];
        var storeRatingElementX = Action.getElementsOriginXString(storeRatingElement);
        var storeRatingElementY = Action.getElementsOriginYString(storeRatingElement);

        //Verify store rating should at store name right side.
        var storeNmeXPlusStoreNameWidth = parseInt(storeNameElementX) + parseInt(storeNameElementWidth);
        var restus = parseInt(storeRatingElementY) - parseInt(storeNameElementY);

        method.verifyTrue(storeRatingElementX > storeNmeXPlusStoreNameWidth && restus == 1, "Store rating not at sotre name right side.");
    }
    else{
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

        method.verifyTrue(storeRatingElementX > storeNmeXPlusStoreNameWidth && restus == 1, "Store rating not at sotre name right side.");
    }
    
    //Switch browse mode to large image.
    Action.tapAdvancedButton();
    Action.tapButtonsInAdvancedBar(1);

    Action.chooseCategoryBrowseMode("大圖");
    $.delay(5);

    //Back to discovery screen.
    Action.tapButtonOnTabBar(2);
    Action.goDiscoveryStream();
});

test("[1938127] on item listing-list view check favorites icon show correct.", function () {
    target.logDeviceInfo();

    //Go to product list.
    Action.goApparelCategory();
    Action.goCommodityTab();
    Action.pageShow();

    //Tap Advanced button.
    Action.tapAdvancedButton();
    $.delay(sleep);

    //Tap browse mode button on advanced bar. And verify this button would enabled after tapped.
    Action.tapButtonsInAdvancedBar(1);
    Assert.buttonOnAdvancedIsEnabled(1);

    Action.chooseCategoryBrowseMode("列表");

    $.delay(5);
    var version = target.systemVersion();
    version = version.substring(0, version.lastIndexOf("."));
    if(version == "6.1") {
        //Verify favorites icon show correct, this function need passing product index parameters.
        Assert.favoritesIconShowCorrect(2);

        //Get product price X and Y
        var productPriceElement = app.mainWindow().collectionViews()[0].cells()[2].staticTexts()[3];
        var productPriceElementX = Action.getElementsOriginXString(productPriceElement);
        var productPriceElementY = Action.getElementsOriginYString(productPriceElement);

        //Get product price width.
        var productPriceElementWidth = Action.getElementsWidthString(productPriceElement);

        //Get favorites icon X and Y
        var favoritesElement = app.mainWindow().collectionViews()[0].cells()[2].buttons()[0];
        var favoritesElementX = Action.getElementsOriginXString(favoritesElement);
        var favoritesElementY = Action.getElementsOriginYString(favoritesElement);

        //verify favorites icon should at product price right side.
        var productPriceXPlusProductPriceWidth = parseInt(productPriceElementX) + parseInt(productPriceElementWidth);

        method.verifyTrue(favoritesElementX > productPriceXPlusProductPriceWidth, "favorites icon not at product price right side.");
    }
    else{
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
    }
    $.delay(3);

    //Switch browse mode to large image.
    Action.tapAdvancedButton();
    Action.tapButtonsInAdvancedBar(1);

    Action.chooseCategoryBrowseMode("大圖");

    $.delay(5);
    //Back to discovery screen.
    Action.tapButtonOnTabBar(2);
    Action.goDiscoveryStream();
});

//6.6
test("[1938129] on item listing-list view register should able to add item to his favorites list through tap favorites icon.", function () {
    target.logDeviceInfo();

    //go to production item list.
    Action.goApparelCategory();
    Action.goCommodityTab();
    Action.pageShow();

    //Store product name.
    var version = target.systemVersion();
    version = version.substring(0, version.lastIndexOf("."));
    if(version == "6.1") {
        var productName = app.mainWindow().collectionViews()[0].cells()[2].staticTexts()[0].name();
    }
    else{
        var productName = app.mainWindow().collectionViews()[0].cells()[1].staticTexts()[0].name();
    }
    
    //Tap Advanced button.
    Action.tapAdvancedButton();

    //Tap browse mode button on advanced bar. And verify this button would enabled after tapped.
    Action.tapButtonsInAdvancedBar(1);

    Action.chooseCategoryBrowseMode("列表");

    $.delay(sleep);
    var version = target.systemVersion();
    version = version.substring(0, version.lastIndexOf("."));
    if(version == "6.1") {
        //Tap favorites icon add a production to favorites.
        Action.tapFavoritesIcon(2);
        $.delay(sleep);
    }
    else{
        //Verify successful switch to photo grid view.
        Assert.successfulSwitchToListingView();
        $.delay(sleep);

        //Tap favorites icon add a production to favorites.
        Action.tapFavoritesIcon(1);
        $.delay(sleep);
    }
    
    //got my favorites screen.
    Action.tapButtonOnTabBar(4);
    Action.goMayFavoritesScreen();
    $.delay(sleep);

    //Assert product show in My favorites screen.
    Assert.productAddedToMyFavoritesScreen(productName);

    //Remove favorites item.
    Action.tapButtonOnTabBar(2);

    $.delay(sleep);
    var version = target.systemVersion();
    version = version.substring(0, version.lastIndexOf("."));
    if(version == "6.1") {
        Action.tapFavoritesIcon(2);
    }
    else{
        Action.tapFavoritesIcon(1);
    }
    
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
    Action.tapButtonOnTabBar(2);
    Action.goDiscoveryStream();
});

test("[1938130] check 全部分類 tab button show correct", function () {
    target.logDeviceInfo();
    Action.tapButtonOnTabBar(0);
    $.delay(sleep);

    Assert.buttonOnTabBarShowCorrect("全部分類");
    Action.goDiscoveryStream();
});

test("[1938131] check 全部分類 tab show correct.", function () {
    target.logDeviceInfo();
    Action.tapButtonOnTabBar(2);
    $.delay(sleep);

    Assert.categoriesList();
    Action.goDiscoveryStream();
});

test("[1938133] check 全部分類 show on screen top", function () {
    target.logDeviceInfo();
    Action.tapButtonOnTabBar(2);
    Assert.navigationBarName("全部分類");
    $.delay(sleep);

    Action.goDiscoveryStream();
});

test("[1938150] check 美妝 show correct.", function () {
    target.logDeviceInfo();
    Action.tapButtonOnTabBar(2);
    $.delay(sleep);

    Assert.allCategoryItemShowCorrect(1, "美妝");

    //Go to item list screen.
    Action.tapItemOnCategoryScreen(1);
    $.delay(sleep);

    //verify screen successful navigate to 美妝 screen.
    Assert.navigationBarName("美妝");

    //Tap back button and go back to discovery screen.
    Action.goBack();
    Action.goDiscoveryStream();
});

test("[1938151] check 鞋包配飾 show correct.", function () {
    target.logDeviceInfo();
    Action.tapButtonOnTabBar(2);
    $.delay(sleep);

    Assert.allCategoryItemShowCorrect(2, "鞋包配飾");

    //Go to item list screen.
    Action.tapItemOnCategoryScreen(2);
    $.delay(sleep);

    //verify screen successful navigate to 鞋包配飾 screen.
    Assert.navigationBarName("鞋包配飾");

    //Tap back button and go back to discovery screen.
    Action.goBack();
    Action.goDiscoveryStream();
});

test("[1938152] check 媽咪寶貝 show correct.", function () {
    target.logDeviceInfo();
    Action.tapButtonOnTabBar(2);
    $.delay(sleep);

    Assert.allCategoryItemShowCorrect(3, "媽咪寶貝");

    //Go to item list screen.
    Action.tapItemOnCategoryScreen(3);
    $.delay(sleep);

    //verify screen successful navigate to 媽咪寶貝 screen.
    Assert.navigationBarName("媽咪寶貝");

    //Tap back button and go back to discovery screen.
    Action.goBack();
    Action.goDiscoveryStream();
});

test("[1938153] check 電腦/週邊 show correct.", function () {
    target.logDeviceInfo();
    Action.tapButtonOnTabBar(2);
    $.delay(sleep);

    Assert.allCategoryItemShowCorrect(4, "電腦/週邊");

    //Go to item list screen.
    Action.tapItemOnCategoryScreen(4);
    $.delay(sleep);

    //verify screen successful navigate to 電腦/週邊 screen.
    Assert.navigationBarName("電腦/週邊");

    //Tap back button and go back to discovery screen.
    Action.goBack();
    Action.goDiscoveryStream();
});

test("[1938154] check 家電/視聽 show correct.", function () {
    target.logDeviceInfo();
    Action.tapButtonOnTabBar(2);
    $.delay(sleep);

    Assert.allCategoryItemShowCorrect(5, "家電/視聽");

    //Go to item list screen.
    Action.tapItemOnCategoryScreen(5);
    $.delay(sleep);

    //verify screen successful navigate to 家電/視聽 screen.
    Assert.navigationBarName("家電/視聽");

    //Tap back button and go back to discovery screen.
    Action.goBack();
    Action.goDiscoveryStream();
});

test("[1938155] check 相機/ 手機/玩具 show correct.", function () {
    target.logDeviceInfo();
    Action.tapButtonOnTabBar(2);
    $.delay(5);
    var version = target.systemVersion();
    version = version.substring(0, version.lastIndexOf("."));
    if(version == "6.1") {
        Assert.allCategoryItemShowCorrect(6, "相機/\n手機/玩具");
    }
    else{
        Assert.allCategoryItemShowCorrect(6, "相機/ 手機/玩具");
    }
   
    //Go to item list screen.
    Action.tapItemOnCategoryScreen(6);
    $.delay(sleep);

    //verify screen successful navigate to 相機/ 手機/玩具 screen.
    Assert.navigationBarName("相機/手機/玩具");

    //Tap back button and go back to discovery screen.
    Action.goBack();
    Action.goDiscoveryStream();
});

test("[1938156] check 美食/ 保健/飲料 show correct.", function () {
    target.logDeviceInfo();
    Action.tapButtonOnTabBar(2);
    $.delay(5);
    var version = target.systemVersion();
    version = version.substring(0, version.lastIndexOf("."));
    if(version == "6.1") {
        Assert.allCategoryItemShowCorrect(7, "美食/\n保健/飲料");
    }
    else{
        Assert.allCategoryItemShowCorrect(7, "美食/ 保健/飲料");
    }
    
    //Go to item list screen.
    Action.tapItemOnCategoryScreen(7);
    $.delay(sleep);

    //verify screen successful navigate to 美食/ 保健/飲料 screen.
    Assert.navigationBarName("美食/保健/飲料");

    //Tap back button and go back to discovery screen.
    Action.goBack();
    Action.goDiscoveryStream();
});

test("[1938157] check 日用品/ 清潔/寵物 show correct.", function () {
    target.logDeviceInfo();
    Action.tapButtonOnTabBar(2);
    $.delay(5);
    var version = target.systemVersion();
    version = version.substring(0, version.lastIndexOf("."));
    if(version == "6.1") {
        Assert.allCategoryItemShowCorrect(8, "醫療/\n日用品/寵物");
    }
    else{
        Assert.allCategoryItemShowCorrect(8, "醫療/ 日用品/寵物");
    }
   
    //Go to item list screen.
    Action.tapItemOnCategoryScreen(8);
    $.delay(sleep);

    //verify screen successful navigate to 醫療/ 日用品/寵物 screen.
    Assert.navigationBarName("醫療/日用品/寵物");

    //Tap back button and go back to discovery screen.
    Action.goBack();
    Action.goDiscoveryStream();
});

test("[1938158] check 居家/ 寢具/傢俱 show correct.", function () {
    target.logDeviceInfo();
    Action.tapButtonOnTabBar(2);
    $.delay(5);
    var version = target.systemVersion();
    version = version.substring(0, version.lastIndexOf("."));
    if(version == "6.1") {
        Assert.allCategoryItemShowCorrect(9, "居家/\n寢具/傢俱");
    }
    else{
        Assert.allCategoryItemShowCorrect(9, "居家/ 寢具/傢俱");
    }
    
    //Go to item list screen.
    Action.tapItemOnCategoryScreen(9);
    $.delay(sleep);

    //verify screen successful navigate to 日用品/ 清潔/寵物 screen.
    Assert.navigationBarName("居家/寢具/傢俱");

    //Tap back button and go back to discovery screen.
    Action.goBack();
    Action.goDiscoveryStream();
});

test("[1938159] check 運動/ 戶外/休閒 show correct.", function () {
    target.logDeviceInfo();
    Action.tapButtonOnTabBar(2);
    $.delay(5);
    var version = target.systemVersion();
    version = version.substring(0, version.lastIndexOf("."));
    if(version == "6.1") {
        Assert.allCategoryItemShowCorrect(10, "運動/\n戶外/休閒");
    }
    else{
        Assert.allCategoryItemShowCorrect(10, "運動/ 戶外/休閒");
    }

    //Go to item list screen.
    Action.tapItemOnCategoryScreen(10);
    $.delay(sleep);

    //verify screen successful navigate to 日用品/ 清潔/寵物 screen.
    Assert.navigationBarName("運動/戶外/休閒");

    //Tap back button and go back to discovery screen.
    Action.goBack();
    Action.goDiscoveryStream();
});

//6.11
test("[1938046] check the default browser mode", function () {
    target.logDeviceInfo();
    //go to production item list.
    Action.goApparelCategory();
    Action.goCommodityTab();
    Action.pageShow();

    //tap advanced button
    Action.tapAdvancedButton();
    Action.tapButtonsInAdvancedBar(1);
    $.delay(sleep);
    var version = target.systemVersion();
    version = version.substring(0, version.lastIndexOf("."));
    if(version == "6.1") {
        //check the default browser mode is list
        Assert.checkDefaultBrowserModeIsLargePhoto();
    }
    else{
        //check the default browser mode is list
        Assert.checkDefaultBrowserModeIsList();
    }

    //restore
    Action.tapButtonsInAdvancedBar(0);
    Action.tapCancelButtonInAdvancedBar();
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
});

test("[1938050] Check the default is sort Tab", function () {
    target.logDeviceInfo();
    //go to production item list.
    Action.goApparelCategory();
    Action.goCommodityTab();
    $.delay(10);

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
    target.logDeviceInfo();
    //go to production item list.
    Action.goApparelCategory();
    Action.goCommodityTab();
    $.delay(10);

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
    target.logDeviceInfo();
    //go to production item list.
    Action.goApparelCategory();
    Action.goCommodityTab();
    Action.pageShow();

    //go to item page
    Action.tapItemOnProductListScreen();

    $.delay(15);
    var version = target.systemVersion();
    version = version.substring(0, version.lastIndexOf("."));
    if(version == "6.1") {
        obj.scrollDowns(1);
    }
    else{
        Action.slidingCommodityPage();
    }
    $.delay(10);
    
    //check product page is correct
    Assert.itemPageShowCorrect();

    //restore
    Action.goBack();
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
});

test("[1938109] click product image", function () {
    target.logDeviceInfo();
    //go to production item list.
    Action.goApparelCategory();
    Action.goCommodityTab();
    Action.pageShow();
    
    //tap advanced button
    Action.tapAdvancedButton();
    Action.tapButtonsInAdvancedBar(1);
    Action.chooseCategoryBrowseMode("小圖");
    $.delay(sleep);

    //go to item page
    Action.tapCommodityPictureOnSearchResultsPage();

    $.delay(15);
    var version = target.systemVersion();
    version = version.substring(0, version.lastIndexOf("."));
    if(version == "6.1") {
        obj.scrollDowns(1);
    }
    else{
        Action.slidingCommodityPage();
    }
    $.delay(10);

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
    target.logDeviceInfo();
    //go to production item list.
    Action.goApparelCategory();
    Action.goCommodityTab();
    Action.pageShow();
    
    //tap advanced button
    Action.tapAdvancedButton();
    Action.tapButtonsInAdvancedBar(1);
    Action.chooseCategoryBrowseMode("大圖");
    $.delay(sleep);

    //go to item page
    Action.tapCommodityPictureOnSearchResultsPage();
    
    $.delay(15);
    var version = target.systemVersion();
    version = version.substring(0, version.lastIndexOf("."));
    if(version == "6.1") {
        obj.scrollDowns(1);
    }
    else{
        Action.slidingCommodityPage();
    }
    $.delay(10);

    //check product page is correct
    Assert.itemPageShowCorrect();
    $.delay(5);

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
    target.logDeviceInfo();
    Action.tapButtonOnTabBar(2);
    $.delay(5);

    var version = target.systemVersion();
    version = version.substring(0, version.lastIndexOf("."));
    if(version == "6.1") {
        Assert.allCategoryItemShowCorrect(11, "圖書/\n文具/影音");
    }
    else{
        Assert.allCategoryItemShowCorrect(11, "圖書/ 文具/影音");
    }
    
    //Go to item list screen.
    Action.tapItemOnCategoryScreen(11);
    $.delay(5);

    //verify screen successful navigate to 日用品/ 清潔/寵物 screen.
    Assert.navigationBarName("圖書/文具/影音");

    //Tap back button and go back to discovery screen.
    Action.goBack();
    Action.goDiscoveryStream();
});

test("[1953648] verify edit favorite category if correct", function () {
    target.logDeviceInfo();
    Action.tapButtonOnTabBar(4);
    //edit favorite categories
    Action.tapButtonOnMyUserWhenCategory(6);

    Action.selectCategoryOnEditFavorite();
    $.delay(5);

    //verify edit favorite category if correct
    Assert.checkCategoryOnEditFavoriteIsSelected();

    //restore
    Action.selectCategoryOnEditFavorite();
    Action.goBack();
    Action.tapButtonOnTabBar(0);
});

test("[1959882] Verify18 ban prompt.", function () {
    target.logDeviceInfo();
    //go to 18 ban page
    Action.tapButtonOnTabBar(2);
    Action.tapItemOnCategoryScreen(10);

    $.delay(15);
    var version = target.systemVersion();
    version = version.substring(0, version.lastIndexOf("."));
    if(version == "6.1") {
        Action.slidingCommodityPage();
        $.delay(5);

        Action.tapChoosePreductCategory(0,7);
    }
    else{
        Action.tapChoosePreductCategory(0,7);
    }
    $.delay(5);

    Assert.check18BanScreenShowCorrect();
    $.delay(sleep);

    //tap cancel on 18 ban page
    Action.back18BanScreen();
    $.delay(5);

    //check back to "運動／戶外／休閒" page after user tap cancel on 18 ban page
    Assert.navigationBarName("運動/戶外/休閒");

    //restore
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
});

test("[1959881] product items should shorting by price low to high after user select this option.", function () {
    target.logDeviceInfo();
    //Go to product list.
    Action.goApparelCategory();
    Action.goCommodityTab();
    Action.pageShow();

    //tap advanced button.
    Action.tapAdvancedButton();

    //go to soring tab.
    Action.tapButtonsInAdvancedBar("排序");

    //select price from high to low.
    Action.selectOptionOnSortingTab("價錢低到高");

    $.delay(5);
    var version = target.systemVersion();
    version = version.substring(0, version.lastIndexOf("."));
    if(version == "6.1") {
        //verify price value show correct.
        //the first parameter is product index and the second parameter is price index in product cell.
        Assert.checkPriceValueShowLessThan(2, 3, "1");
    }
    else{
        //verify price value show correct.
        //the first parameter is product index and the second parameter is price index in product cell.
        Assert.checkPriceValueShowLessThan(1, 3, "1");
    }
    
    //Restore application to default loaction.
    Action.tapButtonOnTabBar(2);
    Action.goDiscoveryStream();
});

//6.13
test("[1954573] verify user under the age of 18  never seen 18 ban screen function.", function () {
    target.logDeviceInfo();
    //go to 18 ban page
    Action.tapButtonOnTabBar(2);
    $.delay(sleep);

    Action.tapItemOnCategoryScreen(10);

    $.delay(15);
    var version = target.systemVersion();
    version = version.substring(0, version.lastIndexOf("."));
    if(version == "6.1") {
        Action.slidingCommodityPage();
        $.delay(10);

        Action.tapChoosePreductCategory(0,7);
    }
    else{
        Action.tapChoosePreductCategory(0,7);
    }
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
    target.logDeviceInfo();
    Action.tapButtonOnTabBar(2);
    Assert.buttonOnTabBarShowCorrect("最新動態");
    Action.goDiscoveryStream();
});

test("[1938143] check 最愛商店 button exist.", function () {
    target.logDeviceInfo();
    Action.tapButtonOnTabBar(2);
    Assert.buttonOnTabBarShowCorrect("最愛商店");
    Action.goDiscoveryStream();
});

test("[1938145] check 購物車 button exist.", function () {
    target.logDeviceInfo();
    Action.tapButtonOnTabBar(2);
    Assert.buttonOnTabBarShowCorrect("購物車");
    Action.goDiscoveryStream();
});

test("[1938147] check 我的帳戶 button exist.", function () {
    target.logDeviceInfo();
    Action.tapButtonOnTabBar(2);
    Assert.buttonOnTabBarShowCorrect("我的帳戶");
    Action.goDiscoveryStream();
});

test("[1938149] check 服飾 show correct.", function () {
    target.logDeviceInfo();
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