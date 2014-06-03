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

    Action.tapSearchIconOnCategoryList();

    //Verify "搜尋服飾" show in sarch bar.
    Assert.textIsEnabled("搜尋服飾");

    Action.tapBackOnSearchBar();
    Action.goBack();
    Action.goDiscoveryStream();
});

test("[1938053] can switch to 排序 tab after click 排序 button", function () {
    Action.goApparelCategory();
    Action.goCommodityTab();

    //Tap Advanced button.
    Action.tapAdvancedButton();
     
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

    //Tap Advanced button.
    Action.tapAdvancedButton();

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

    //Tap Advanced button.
    Action.tapAdvancedButton();

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

    //Tap Advanced button.
    Action.tapAdvancedButton();

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

    //Tap Advanced button.
    Action.tapAdvancedButton();

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

    //Tap Advanced button.
    Action.tapAdvancedButton();

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

    //Tap Advanced button.
    Action.tapAdvancedButton();

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

    //Tap Advanced button.
    Action.tapAdvancedButton();

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

    //Tap Advanced button.
    Action.tapAdvancedButton();

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

    //Tap Advanced button.
    Action.tapAdvancedButton();

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

    //Tap Advanced button.
    Action.tapAdvancedButton();

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

    //Tap Advanced button.
    Action.tapAdvancedButton();

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

    //target.logElementTree();
    //var ItemOnProductListScreen = app.mainWindow().collectionViews()[0].cells()[1].name();
     
    //Verify screen successful navigated to item page.
    Assert.itemPageShowCorrect();

    //Tap back button go back to list screen.
    Action.goBack();

    //go back to discovery screen.
    Action.goBack();
    Action.goDiscoveryStream();
});

test("[1938100] check product price show correct.", function () {
    Action.goApparelCategory();
    Action.goCommodityTab();

    //first parameter is second product, second parameter is the  location of price in product cell.
    Assert.productPriceShowCorrect(2, 2);

    //Tap back button and go back to discovery screen.
    Action.goBack();
    Action.goDiscoveryStream();
});

test("[1938101] check the rating show correct.", function () {
    Action.goApparelCategory();
    Action.goCommodityTab();

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
    $.delay(sleep);
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
    $.delay(sleep);

    //verify 共xxxx筆結果 show correct.
    var numberOfItems = app.mainWindow().collectionViews()[0].staticTexts()[0];

    Assert.numberOfItemsShowCorrect(numberOfItems);

    //Back to discovery screen.
    Action.tapButtonOnTabBar(2);
    Action.goDiscoveryStream();
});