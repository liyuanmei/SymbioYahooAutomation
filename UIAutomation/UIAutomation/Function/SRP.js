test("[1937918] Check the Tab display" , function () {
    Action.cleanSearches();
    $.delay(sleep);
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();

    Action.englishInputMethod();
    
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    $.delay(sleep);

    //Tap Advanced button.
    Action.tapButtonsInAdvancedBarWhenSRP();

    //Tap browse mode button on advanced bar. And verify this button would enabled after tapped.
    Action.tapButtonsInAdvancedBar(1);
    Assert.buttonOnAdvancedIsEnabled(1);

    Action.chooseCategoryBrowseMode("列表");

    //Check the Tab display
    Assert.checkGoodsAndStoreTabDisplay();

    Action.goBackOnSearchPage();
    Action.tapReturnOnSearchBar();
    Action.goDiscoveryStream();
    Action.cleanSearches();
});

test("[1937920] Click store Tab" , function () {
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    $.delay(sleep);

    Action.tapStoreTab();
    $.delay(sleep);

    //Check into a store page，verify icon heart on store list
    Assert.checkButtonOnList("icon heart empty");

    //Check store List Display
    Assert.tapTabCheckSListDisplay();

    Action.goBackOnSearchPage();
    Action.tapReturnOnSearchBar();
    Action.goDiscoveryStream();
    Action.cleanSearches();
});

test("[1937921] Check the switch back to the Item list" , function () {
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    $.delay(sleep);

    Action.tapStoreTab();
    Action.tapGoodsTab();
    $.delay(sleep);

    //Check into a store page，verify icon heart on store list.
    Assert.checkButtonOnList("icon star");

    //Check store List Display
    Assert.commodityItemsShowCount(21);

    Action.goBackOnSearchPage();
    Action.tapReturnOnSearchBar();
    Action.goDiscoveryStream();
    Action.cleanSearches();
});

test("[1937927] Check the default show 20 items",function () {
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    $.delay(sleep);

    //Check the default show 20 items
    Assert.commodityItemsShowCount(21);

    Action.goBackOnSearchPage();
    Action.tapReturnOnSearchBar();
    Action.goDiscoveryStream();
    Action.cleanSearches();
});

test("[1937928] Scroll screen more items should successful loaded", function () {
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    $.delay(sleep);

    //Verify currently should have 20 items in screen.
    Assert.commodityItemsShowCount(21);

    //Scroll screen. After screen successful scroll cell items should increase to 20.
    obj.scrollDowns(16);
    $.delay(3);
    Assert.commodityItemsShowCount(81);

    Action.goBackOnSearchPage();
    Action.tapReturnOnSearchBar();
    Action.goDiscoveryStream();
    Action.cleanSearches();
});

test("[1937933] can switch to 排序 tab after click 排序 button", function () {
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    $.delay(sleep);

    //Tap Advanced button.
    Action.tapButtonsInAdvancedBarWhenSRP();
     
    //tap 排序 button and verify 排序 button is enabled. the order of 排序 button is 0.
    Action.tapButtonsInAdvancedBar(0);
    Assert.buttonOnAdvancedIsEnabled(0);

    //Tap cancel button exit advanced bar.
    Action.tapCancelButtonInAdvancedBar();

    Action.goBackOnSearchPage();
    Action.tapReturnOnSearchBar();
    Action.goDiscoveryStream();
    Action.cleanSearches();
});

test("[1937934] can switch to 篩選 tab after click 篩選 button", function () {
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    $.delay(sleep);

    //Tap Advanced button.
    Action.tapButtonsInAdvancedBarWhenSRP();

    //tap 篩選 button and verify 篩選 button is enabled. the order of 排序 button is 2.
    Action.tapButtonsInAdvancedBar(2);
    Assert.buttonOnAdvancedIsEnabled(2);

    //Tap cancel button exit advanced bar.
    Action.tapCancelButtonInAdvancedBar();

    Action.goBackOnSearchPage();
    Action.tapReturnOnSearchBar();
    Action.goDiscoveryStream();
    Action.cleanSearches();
});

test("[1937935] verify the elements order in 排序 tab", function () {
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    $.delay(sleep);

    //Tap Advanced button.
    Action.tapButtonsInAdvancedBarWhenSRP();

    //tap 排序 button and verify elements order in 排序 tab show correct.
    Action.tapButtonsInAdvancedBar(0);
    Assert.buttonOnAdvancedIsEnabled(0);

    Assert.elementsOrderInSortTabWhenSRP();

    //Tap Cancel button on Navigation Bar.
    Action.tapCancelButtonInAdvancedBar();

    Action.goBackOnSearchPage();
    Action.tapReturnOnSearchBar();
    Action.goDiscoveryStream();
    Action.cleanSearches();
});

test("[1937938] check according to the 'low price to dealer' sort" , function () {
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    Action.tapGoodsTab();

    //tap advanced button.
    Action.tapButtonsInAdvancedBarWhenSRP();

    //go to 排序 tab.
    Action.tapButtonsInAdvancedBar(0);

    //select price from high to low.
    Action.selectOptionOnSortingTabWhenSRP(2);
    $.delay(sleep);

    //verify 價錢低到高 price value show correct.
    //the first parameter is product index and the second parameter is price index in product cell.
    Assert.checkPriceValueShowLessThan(1, 3, "1");

    //Restore application to default loaction.
    Action.tapButtonOnTabBar(2);

    Action.goBackOnSearchPage();
    Action.tapReturnOnSearchBar();
    Action.goDiscoveryStream();
    Action.cleanSearches();
});

test("[1937939] product items should sorting by price high to low after user select this option.", function () {
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    Action.tapGoodsTab();

    //tap advanced button.
    Action.tapButtonsInAdvancedBarWhenSRP();

    //go to 排序 tab.
    Action.tapButtonsInAdvancedBar(0);

    //select price from high to low.
    Action.selectOptionOnSortingTabWhenSRP(3);
    $.delay(sleep);

    //verify 價錢高到低 price value show correct.
    //the first parameter is product index and the second parameter is price index in product cell.
    Assert.checkPriceValueShowLessThan(1, 3, "100000000");

    //Restore application to default loaction.
    Action.tapButtonOnTabBar(2);

    Action.goBackOnSearchPage();
    Action.tapReturnOnSearchBar();
    Action.goDiscoveryStream();
    Action.cleanSearches();
});

test("[1937942] tap clear button can clear to user input.", function () {
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    
    target.logElementTree();
    $.delay(3);

    //tap advanced button.
    Action.tapButtonsInAdvancedBarWhenSRP();
    $.delay(sleep);

    //go to 篩選 tab.
    Action.tapButtonsInAdvancedBar(2);

    //verify the default price is 100000 +
    Assert.checkPriceBarShowCorrectWhenSRP("100000+ 元");

    //drag price bar to 1020 price.    
    app.mainWindow().dragInsideWithOptions({startOffset: {x: 0.92, y: 0.29}, endOffset:{x: 0.234, y: 0.29}});
    
    //Verify price show correct after dragging.
    Assert.checkPriceBarShowCorrectWhenSRP("1020 元");

    //Tap clear button
    Action.tapClearButtonOnFilterScreenWhenSRP();

    //Verify price bar restore to default value.
    Assert.checkPriceBarShowCorrectWhenSRP("100000+ 元");

    //Tap submit button and restore application to default location.
    Action.tapSubmitButtonOnAdvanceScreen();
    $.delay(sleep);

    Action.tapButtonOnTabBar(2);
   
    Action.goBackOnSearchPage();
    Action.tapReturnOnSearchBar();
    Action.goDiscoveryStream();
    Action.cleanSearches();
});

test("[1937940] check the elements on 篩選 screen", function () {
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    $.delay(sleep);

    //Tap Advanced button.
    Action.tapButtonsInAdvancedBarWhenSRP();

    //tap 篩選 button and verify 篩選 button is enabled. the order of 排序 button is 2.
    Action.tapButtonsInAdvancedBar(2);
    Assert.buttonOnAdvancedIsEnabled(2);

    //Verify elements on Attribute screen show correct.
    Assert.elementsOnFilterScreenWhenSRP();

    //Tap Cancel button on Navigation Bar.
    Action.tapCancelButtonInAdvancedBar();

    Action.goBackOnSearchPage();
    Action.tapReturnOnSearchBar();
    Action.goDiscoveryStream();
    Action.cleanSearches();
});

test("[1937943] check “確定” button exist on Advanced bar", function () {
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    $.delay(sleep);

    //Tap Advanced button.
    Action.tapButtonsInAdvancedBarWhenSRP();

    //Tap 篩選 button
    Action.tapButtonsInAdvancedBar(2);

    //Verify "確定" button exist on Navigation Bar, the index of this button is 2.
    Assert.buttonExistOnNavigationBar(2, "確定");

    //Tap cancel button and navigate back to discovery screen.
    Action.tapCancelButtonInAdvancedBar();

    Action.goBackOnSearchPage();
    Action.tapReturnOnSearchBar();
    Action.goDiscoveryStream();
    Action.cleanSearches();
});

test("[1937944] Check the '確定' button" , function (){
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    $.delay(sleep);

    //Tap Advanced button.
    Action.tapButtonsInAdvancedBarWhenSRP();

    //Tap 篩選 button
    Action.tapButtonsInAdvancedBar(2);
    Action.tapbuttonExistOnNavigationBar(2);


    //Verify tap "確定" button ,search results page show the correct 
    Assert.searchResultsPage("上衣");

    Action.goBackOnSearchPage();
    Action.tapReturnOnSearchBar();
    Action.goDiscoveryStream();
    Action.cleanSearches();
});

test("[1937945] product items in list should show correct after user adjust price bar.", function () {
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();

    //tap advanced button.
    Action.tapButtonsInAdvancedBarWhenSRP();
    $.delay(sleep);

    //go to 排序 tab.
    Action.tapButtonsInAdvancedBar(0);

    //select price from high to low.
    Action.selectOptionOnSortingTabWhenSRP("價錢高到低");
    $.delay(sleep);

    //verify price value show correct.
    //the first parameter is product index and the second parameter is price index in product cell.
    Assert.checkPriceValueShowLessThan(1, 3, "100000000");

    //go to advanced screen and drag price bar to 1020.
    //tap advanced button.
    Action.tapButtonsInAdvancedBarWhenSRP();
    $.delay(sleep);

    //go to 篩選 tab.
    Action.tapButtonsInAdvancedBar(2);

    //verify the default price is 100000 +
    Assert.checkPriceBarShowCorrectWhenSRP("100000+ 元");

    //drag price bar to 1020 price.    
    app.mainWindow().dragInsideWithOptions({startOffset: {x: 0.92, y: 0.29}, endOffset:{x: 0.234, y: 0.29}});
    
    //Verify price show correct after dragging.
    Assert.checkPriceBarShowCorrectWhenSRP("1020 元");

    //Tap submit button.
    Action.tapSubmitButtonOnAdvanceScreen();
    $.delay(sleep);

    //verify price value show correct.
    Assert.checkPriceValueShowLessThan(1, 3, "100000000");

    //Restore application to default loaction.
    Action.tapButtonOnTabBar(2);
    
    Action.goBackOnSearchPage();
    Action.tapReturnOnSearchBar();
    Action.goDiscoveryStream();
    Action.cleanSearches();
});

test("[1937949] check able to tap '可刷卡' and untap '可刷卡' button", function () {
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    $.delay(sleep);

    //Tap Advanced button.
    Action.tapButtonsInAdvancedBarWhenSRP();

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

    Action.goBackOnSearchPage();
    Action.tapReturnOnSearchBar();
    Action.goDiscoveryStream();
    Action.cleanSearches();
});