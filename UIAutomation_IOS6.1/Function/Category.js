test("[1938036] Check Header", function () {
    Action.goApparelCategory();
    Action.goCommodityTab();
    $.delay(sleep);
    Assert.commodityHeader();
    Action.goBack(); //Go back to category page.
    Action.goDiscoveryStream(); //Go to discover stream screen.
});

test("[1938037] verify screen can go back to L1 list", function () {
    //go to apparel category list.
    Action.goApparelCategory();

    //Tap back button to navigate to all category list.
    $.delay(sleep);
    Action.goBack();

    //Verify screen success switch back to all category list.
    Assert.categoryScreen();
    Action.goDiscoveryStream();
});

test("[1938041] verify tab value", function () {
    //Go to apparel category.
    Action.goApparelCategory();

    //verify 商品 and 分類 tab button show correct.
    Assert.checkTab();

    //Back to default location.
    Action.goBack();
    Action.goDiscoveryStream();
});

test("[1938042] verify category list in Apparel", function() {
    Action.goApparelCategory();
    $.delay(sleep);

    //Check category tab button is enabled, if button enabled then verify all items in list show correct.
    var categoryButtonEnabled = app.mainWindow().collectionViews()[0].cells()[0].segmentedControls()[0].buttons()[0].isEnabled();
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
    var categoryButtonEnabled = app.mainWindow().collectionViews()[0].cells()[0].segmentedControls()[0].buttons()[0].isEnabled();
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

    //Tap back icon and verify page successful go back to category list.
    Action.goBack();
    Assert.categoriesList();

    Action.goDiscoveryStream();
});

test("[1938047] Check item list default setting is show 20 items", function () {
    Action.goApparelCategory();
    $.delay(sleep);

    //Go to Commodity tab and wait 2 seconds let items refreshed.
    Action.goCommodityTab();
    $.delay(sleep);

    //The first cell is tab button bar so the total cells should 20 items + 1 tab button bar.
    Assert.commodityItemsShowCount("page 1 of 25");

    Action.goBack();
    Action.goDiscoveryStream();
});

test("[1938048] Scroll screen more items should successful loaded", function () {
    Action.goApparelCategory();
    $.delay(sleep);

    //Go to Commodity tab and wait 2 seconds let items refreshed.
    Action.goCommodityTab();
    $.delay(sleep);

    //Verify currently should have 20 items in screen.
    Assert.commodityItemsShowCount("page 1 of 25");

    //Scroll screen. After screen successful scroll cell items should increase to 49.
    obj.scrollDowns(20);
    Assert.commodityItemsShowCount("page 21 of 49");

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
    Assert.buttonExistOnNavigationBar(1, "確定");

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

    //Verify clear button show.
    Assert.clearButtonShowCorrectAfterTappedButtonOnFilterScreen();
   

    //Tap button again
    Action.tapButtonOnFilterAttributeScreen(0);

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
    
    //Verify clear button show.
    Assert.clearButtonShowCorrectAfterTappedButtonOnFilterScreen();

    //Tap button again and verify button is not enabled.
    Action.tapButtonOnFilterAttributeScreen(6);

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

    //Verify clear button show.
    Assert.clearButtonShowCorrectAfterTappedButtonOnFilterScreen();

    //Tap button again and verify button is not enabled.
    Action.tapButtonOnFilterAttributeScreen(1);

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
    
    //Verify clear button show.
    Assert.clearButtonShowCorrectAfterTappedButtonOnFilterScreen();

    //Tap button again and verify button is not enabled.
    Action.tapButtonOnFilterAttributeScreen(2);

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
    
    //Verify clear button show.
    Assert.clearButtonShowCorrectAfterTappedButtonOnFilterScreen();

    //Tap button again and verify button is not enabled.
    Action.tapButtonOnFilterAttributeScreen(3);

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
    
    //Verify clear button show.
    Assert.clearButtonShowCorrectAfterTappedButtonOnFilterScreen();

    //Tap button again and verify button is not enabled.
    Action.tapButtonOnFilterAttributeScreen(5);

    //Tap cancel button and navigate back to discovery screen.
    Action.tapCancelButtonInAdvancedBar();

    Action.goBack();
    Action.goDiscoveryStream();
});