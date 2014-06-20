//category sidebar
test("[1953657] verify edit favorite category if correct on sidebar.", function () {
    Action.tapButtonOnTabBar(4);
    //edit favorite categories
    Action.tapButtonOnMyUser(6);

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

test("[1937918] Check the Tab display" , function () {
    Action.cleanSearches();
    $.delay(sleep);
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();

    Action.englishInputMethod();
    
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    $.delay(sleep);

    //Tap Advanced button
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

test("[1937952] check able to tap '有影音' and untap '有影音' button", function () {
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    $.delay(sleep);

    //Tap Advanced button.
    Action.tapButtonsInAdvancedBarWhenSRP();

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

    Action.goBackOnSearchPage();
    Action.tapReturnOnSearchBar();
    Action.goDiscoveryStream();
    Action.cleanSearches();
});

test("[1937955] check able to tap '0利率' and untap '0利率' button", function () {
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    $.delay(sleep);

    //Tap Advanced button.
    Action.tapButtonsInAdvancedBarWhenSRP();

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

    Action.goBackOnSearchPage();
    Action.tapReturnOnSearchBar();
    Action.goDiscoveryStream();
    Action.cleanSearches();
});

test("[1937958] check able to tap '可分期' and untap '可分期' button", function () {
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    $.delay(sleep);

    //Tap Advanced button.
    Action.tapButtonsInAdvancedBarWhenSRP();

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

    Action.goBackOnSearchPage();
    Action.tapReturnOnSearchBar();
    Action.goDiscoveryStream();
    Action.cleanSearches();
});

test("[1937961] check able to tap '超商付款' and untap '超商付款' button", function () {
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    $.delay(sleep);

    //Tap Advanced button.
    Action.tapButtonsInAdvancedBarWhenSRP();

    //Tap 篩選 button
    Action.tapButtonsInAdvancedBar(2);

    //Tap "超商付款" and verify this button enabled after tap.
    Action.tapButtonOnFilterAttributeScreen(3);
    Assert.filterAttributeButtonIsTapped(3);

    //Tap button again and verify button is not enabled.
    Action.tapButtonOnFilterAttributeScreen(3);
    Assert.filterAttributeButtonIsNotTapped(3);

    //Tap cancel button and navigate back to discovery screen
    Action.tapCancelButtonInAdvancedBar();

    Action.goBackOnSearchPage();
    Action.tapReturnOnSearchBar();
    Action.goDiscoveryStream();
    Action.cleanSearches();
});

test("[1937967] check able to tap '有現貨' and untap '有現貨' button", function () {
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    $.delay(sleep);

    //Tap Advanced button.
    Action.tapButtonsInAdvancedBarWhenSRP();

    //Tap 篩選 button
    Action.tapButtonsInAdvancedBar(2);

    //Tap "有現貨" and verify this button enabled after tap
    Action.tapButtonOnFilterAttributeScreen(5);
    Assert.filterAttributeButtonIsTapped(5);

    //Tap button again and verify button is not enabled.
    Action.tapButtonOnFilterAttributeScreen(5);
    Assert.filterAttributeButtonIsNotTapped(5);

    //Tap cancel button and navigate back to discovery screen.
    Action.tapCancelButtonInAdvancedBar();

    Action.goBackOnSearchPage();
    Action.tapReturnOnSearchBar();
    Action.goDiscoveryStream();
    Action.cleanSearches();
});

test("[1937973] check able to tap '優良商店' and untap '優良商店' button", function () {
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    $.delay(sleep);

    //Tap Advanced button.
    Action.tapButtonsInAdvancedBarWhenSRP();

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

    Action.goBackOnSearchPage();
    Action.tapReturnOnSearchBar();
    Action.goDiscoveryStream();
    Action.cleanSearches();;
});

test("[1977511] verify shouldn't duplicate keyword in search box" , function () {
    Action.cleanSearches();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("一一二");
    Action.tapKeyboardSearch();
    $.delay(sleep);

    Action.goBackOnSearchPage();
    Action.tapReturnOnSearchBar();
    
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("一一一二");
    Action.tapKeyboardSearch();
    $.delay(sleep);

    Assert.searchResultsPage("一一一二");

    Action.goBackOnSearchPage();
    Action.tapReturnOnSearchBar();
    Action.cleanSearches();
});

test("[1937976] check click on the picture of commodity",function () {
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    $.delay(sleep);

    //Tap Advanced button.
    Action.tapButtonsInAdvancedBarWhenSRP();

    //Tap browse mode button on advanced bar. And verify this button would enabled after tapped.
    Action.tapButtonsInAdvancedBar(1);
    Assert.buttonOnAdvancedIsEnabled(1);

    Action.chooseCategoryBrowseMode("列表");
    
    //tap commodity picture
    Action.tapCommodityPictureOnSearchResultsPage();
    $.delay(sleep);

    obj.scrollDowns(1);
    $.delay(sleep);

    target.logElementTree();
    var tapCommodityPictureShowPage = app.mainWindow().collectionViews()[0].cells()[1].name();

    //Verify screen successful navigated to item page.
    Assert.itemPageShowCorrectOnCoatSearchPage(tapCommodityPictureShowPage);

    Action.goBack();
    Action.goBackOnSearchPage();
    Action.tapReturnOnSearchBar();
    Action.goDiscoveryStream();
    Action.cleanSearches();
});

test("[1937979] check click on the name of commodity" , function () {
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    $.delay(sleep);

    //Tap Advanced button.
    Action.tapButtonsInAdvancedBarWhenSRP();

    //Tap browse mode button on advanced bar. And verify this button would enabled after tapped.
    Action.tapButtonsInAdvancedBar(1);
    Assert.buttonOnAdvancedIsEnabled(1);

    Action.chooseCategoryBrowseMode("列表");
    $.delay(sleep);

    //tap commodity Name
    Action.tapCommodityNameOnSearchResultsPage();
    $.delay(sleep);

    obj.scrollDowns(1);
    $.delay(sleep);

    target.logElementTree();
    var tapCommodityNameShowPage = app.mainWindow().collectionViews()[0].cells()[1].name();

    //Verify screen successful navigated to item page.
    Assert.itemPageShowCorrectOnCoatSearchPage(tapCommodityNameShowPage);

    Action.goBack();
    Action.goBackOnSearchPage();
    Action.tapReturnOnSearchBar();
    Action.goDiscoveryStream();
    Action.cleanSearches();
});

test("[1937980] check the commodity prices", function () {
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    $.delay(sleep);

    //Tap Advanced button.
    Action.tapButtonsInAdvancedBarWhenSRP();

    //Tap browse mode button on advanced bar. And verify this button would enabled after tapped.
    Action.tapButtonsInAdvancedBar(1);
    Assert.buttonOnAdvancedIsEnabled(1);

    Action.chooseCategoryBrowseMode("列表");

    //first parameter is second product, second parameter is the  location of price in product cell.
    Assert.productPriceShowCorrect(2,3);

    Action.goBackOnSearchPage();
    Action.tapReturnOnSearchBar();
    Action.goDiscoveryStream();
    Action.cleanSearches();
});

test("[1937981] check the rating show correct." ,function () {
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    $.delay(sleep);
    target.logElementTree();

    //Tap Advanced button.
    Action.tapButtonsInAdvancedBarWhenSRP();

    //Tap browse mode button on advanced bar. And verify this button would enabled after tapped.
    Action.tapButtonsInAdvancedBar(1);
    Assert.buttonOnAdvancedIsEnabled(1);

    Action.chooseCategoryBrowseMode("列表");

    //Verify the value of rating is less than 10, if not fail.
    Assert.storeRatingShowCorrect(1, 1);

    Action.goBackOnSearchPage();
    Action.tapReturnOnSearchBar();
    Action.goDiscoveryStream();
    Action.cleanSearches();
});

test("[1937982] check favorites icon show correct." , function () {
    Action.cleanSearches();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    $.delay(sleep);

    //Tap Advanced button.
    Action.tapButtonsInAdvancedBarWhenSRP();

    //Tap browse mode button on advanced bar. And verify this button would enabled after tapped.
    Action.tapButtonsInAdvancedBar(1);
    Assert.buttonOnAdvancedIsEnabled(1);

    Action.chooseCategoryBrowseMode("列表");

    //Verify favorites icon show correct, this function need passing product index parameters.
    Assert.favoritesIconShowCorrect(1);

    //get product price X .
    var productPrice = app.mainWindow().collectionViews()[0].cells()[1].staticTexts()[3];
    var productPriceX = Action.getElementsOriginXString(productPrice);

    //get favorites icon X .
    var favoritesIcon = app.mainWindow().collectionViews()[0].cells()[1].buttons()[0];
    var favoritesIconX = Action.getElementsOriginXString(favoritesIcon);

    //Verify favorites icon place at product price right side.
    method.verifyTrue(favoritesIconX < productPriceX < 20, "favorites icon not at product price right side.");

    Action.goBackOnSearchPage();
    Action.tapReturnOnSearchBar();
    Action.goDiscoveryStream();
    Action.cleanSearches();
});

test("[1937983] check log in window show after unregister user tap favorites icon." , function () {
    //Log out and remove user login history
    Action.tapButtonOnTabBar(4);
    Action.doUserLogout();
    $.delay(sleep);

    Action.cleanSearches();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    $.delay(sleep);

    //Tap Advanced button.
    Action.tapButtonsInAdvancedBarWhenSRP();

    //Tap browse mode button on advanced bar. And verify this button would enabled after tapped.
    Action.tapButtonsInAdvancedBar(1);
    Assert.buttonOnAdvancedIsEnabled(1);

    Action.chooseCategoryBrowseMode("列表");

    $.delay(sleep);
     
    //tap favorites icon, after tapped log in window show up.
    Action.tapFavoritesIcon(1);
    $.delay(sleep);

    target.logElementTree();
    
    //Verify login window show correct.
    Assert.logInWindowShowCorrectOnAddAccount();

    //Tap exit button exit login window.
    Action.exitLoginWindow();

    Action.goBackOnSearchPage();
    Action.tapReturnOnSearchBar();
    Action.goDiscoveryStream();
    Action.cleanSearches();
});

test("[1937996] on photo grid view unregister user tap favorites icon login window should open." , function () {
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    $.delay(sleep);

    //Tap Advanced button.
    Action.tapButtonsInAdvancedBarWhenSRP();
    $.delay(sleep);
    //Tap browse mode button on advanced bar. And verify this button would enabled after tapped.
    Action.tapButtonsInAdvancedBar(1);
    Assert.buttonOnAdvancedIsEnabled(1);

    Action.chooseCategoryBrowseMode("小圖");
    $.delay(sleep);

    //Verify successful switch to photo grid view.
    Assert.successfulSwitchToPhotoGridView();
    $.delay(sleep);
    
    //tap favorites icon, after tapped log in window show up.
    Action.tapFavoritesIcon(1);

    //Verify login window show correct.
    Assert.logInWindowShowCorrectOnAddAccount();

    //Tap exit button exit login window.
    Action.exitLoginWindow();
    $.delay(sleep);

    //Go back to advanced bar switch browse mode to list view.
    Action.tapButtonsInAdvancedBarWhenSRP();
    Action.tapButtonsInAdvancedBar(1);
    $.delay(sleep);

    Action.chooseCategoryBrowseMode("列表");

    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
    Action.cleanSearches();
});

test("[1938008] check log in window show after unregister user tap favorites icon on item listing-Large photo view." , function () {
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    $.delay(sleep);

    //Tap Advanced button.
    Action.tapButtonsInAdvancedBarWhenSRP();
    $.delay(sleep);

    //Tap browse mode button on advanced bar. And verify this button would enabled after tapped
    Action.tapButtonsInAdvancedBar(1);
    Assert.buttonOnAdvancedIsEnabled(1);

    Action.chooseCategoryBrowseMode("大圖");

    Action.slidingCommodityPage();

    $.delay(sleep);
    target.logElementTree();
     
    //tap favorites icon, after tapped log in window show up.
    Action.tapFavoritesIcon(1);
    $.delay(sleep);

    //Verify login window show correct.
    Assert.logInWindowShowCorrectOnAddAccount();

    //Tap exit button exit login window.
    Action.exitLoginWindow();
    $.delay(sleep);

    Action.tapButtonsInAdvancedBarWhenSRP();
    Action.tapButtonsInAdvancedBar(1);

    Action.chooseCategoryBrowseMode("列表");

    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
    Action.cleanSearches();
});

test("[1938030] check heart icon jump to login screen" , function () {
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();

    Action.tapStoreTab();
    $.delay(sleep);

    Action.tapheartIconOnStoreWhenSRP();
    //Verify login window show correct.
    Assert.logInWindowShowCorrectOnAddAccount();

    //Tap exit button exit login window.
    Action.exitLoginWindow();

    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
    Action.cleanSearches();
});

test("[1937984] login user able to add product to favorites." , function () {
    Action.tapAddAccountOnLogin("mobileappstore3", "A1234qwer");
    $.delay(sleep);

    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    $.delay(sleep);

    //Tap Advanced button.
    Action.tapButtonsInAdvancedBarWhenSRP();

    //Tap browse mode button on advanced bar. And verify this button would enabled after tapped.
    Action.tapButtonsInAdvancedBar(1);
    Assert.buttonOnAdvancedIsEnabled(1);

    Action.chooseCategoryBrowseMode("列表");

    $.delay(3);
    target.logElementTree();

    //Tap favorites icon add a production to favorites.
    Action.tapFavoritesIcon(1);
    var productName = app.mainWindow().collectionViews()[0].cells()[1].name();

    //got my favorites screen.
    Action.tapButtonOnTabBar(4);
    Action.goMayFavoritesScreenWhenSRP();

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
    Action.goBackOnSearchPage();
    Action.tapReturnOnSearchBar();
    Action.goDiscoveryStream();
    Action.cleanSearches();

    //Log out and remove user login history
    //Action.tapButtonOnTabBar(4);
    //Action.doUserLogout();

    //Action.tapButtonOnTabBar(4);
    //Action.removeLoginHistory("mobileappstore3");
});

test("[1937977] on item listing-list view check store name show correct." , function () {
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    $.delay(sleep);

    //Tap Advanced button.
    Action.tapButtonsInAdvancedBarWhenSRP();
    //Tap browse mode button on advanced bar. And verify this button would enabled after tapped.
    Action.tapButtonsInAdvancedBar(1);
    Assert.buttonOnAdvancedIsEnabled(1);

    Action.chooseCategoryBrowseMode("列表");

    //Verify successful switch to listing view.
    Assert.successfulSwitchToListingView();

    //get store name X and Y.
    var storeName = app.mainWindow().collectionViews()[0].cells()[1].staticTexts()[0];
    var storeNameX = Action.getElementsOriginXString(storeName);
    var storeNameY = Action.getElementsOriginYString(storeName);

    //get item cell X and Y
    var itemCell = app.mainWindow().collectionViews()[0].cells()[1];
    var itemCellX = Action.getElementsOriginXString(itemCell);
    var itemCellY = Action.getElementsOriginYString(itemCell);

    //The image on list view width should be 140 && (storeNameY - itemCellY) < 20
    method.verifyTrue(storeNameX == 140 && (storeNameY - itemCellY) < 20, "Store name not place at item image right side.");

    Action.goBackOnSearchPage();
    Action.tapReturnOnSearchBar();
    Action.goDiscoveryStream();
    Action.cleanSearches();
});

test("[1937995] check favorites icon show correct with photo grid view" ,function() {
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();

    //Tap Advanced button.
    Action.tapButtonsInAdvancedBarWhenSRP();
    //Tap browse mode button on advanced bar. And verify this button would enabled after tapped.
    Action.tapButtonsInAdvancedBar(1);
    Assert.buttonOnAdvancedIsEnabled(1);

    Action.chooseCategoryBrowseMode("小圖");

    $.delay(sleep);
    target.logElementTree();

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
    method.verifyTrue(favoritesIconX < productPriceX && (productPriceY - favoritesIconY) < 20, "favorites icon not at product price right side.");

    //Go back to advanced bar switch browse mode to list view.
    Action.tapButtonsInAdvancedBarWhenSRP();
    Action.tapButtonsInAdvancedBar(1);

    Action.chooseCategoryBrowseMode("列表");

    Action.goBackOnSearchPage();
    Action.tapReturnOnSearchBar();
    Action.goDiscoveryStream();
    Action.cleanSearches();
});



test("[1937997] On photo grid view register user able to add product to his favorites list" , function () {
    //Action.tapAddAccountOnLogin("mobileappstore3", "A1234qwer");
    //$.delay(sleep);
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();

    //Tap Advanced button.
    Action.tapButtonsInAdvancedBarWhenSRP();
    $.delay(sleep);

    //Tap browse mode button on advanced bar. And verify this button would enabled after tapped.
    Action.tapButtonsInAdvancedBar(1);
    Assert.buttonOnAdvancedIsEnabled(1);

    Action.chooseCategoryBrowseMode("小圖");

    //Tap favorites icon add a production to favorites.
    Action.tapFavoritesIcon(1);
    var productName = app.mainWindow().collectionViews()[0].cells()[1].name();

    //got my favorites screen.
    Action.tapButtonOnTabBar(4);
    Action.goMayFavoritesScreenWhenSRP();

    $.delay(sleep);
    target.logElementTree();

    //Assert product show in My favorites screen.
    Assert.productAddedToMyFavoritesScreenWhenSRP(productName);

    //Remove favorites item.
    Action.tapButtonOnTabBar(2);
    Action.tapFavoritesIcon(1);

    //Verify favorites item successful removed.
    Action.tapButtonOnTabBar(4);
    $.delay(3);
    Assert.productRemovedFromMyFavoritesScreenWhenSRP(productName);

    //Restore app to default screen.
    Action.goBack();
    Action.tapButtonOnTabBar(2);

    //Go back to advanced bar switch browse mode to list view.
    Action.tapButtonsInAdvancedBarWhenSRP();
    $.delay(sleep);
    Action.tapButtonsInAdvancedBar(1);

    Action.chooseCategoryBrowseMode("列表");

    Action.goBackOnSearchPage();
    Action.tapReturnOnSearchBar();
    Action.goDiscoveryStream();
    Action.cleanSearches();

    //Log out and remove user login history.
    //Action.tapButtonOnTabBar(4);
    //Action.doUserLogout();

    //Action.tapButtonOnTabBar(4);
    //Action.removeLoginHistory("mobileappstore3");
});

test("[1938001] on item listing-Large photo view tap commodity picture  should navigate to item details page." , function () {
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();

    //Tap Advanced button.
    Action.tapButtonsInAdvancedBarWhenSRP();

    //Tap browse mode button on advanced bar. And verify this button would enabled after tapped.
    Action.tapButtonsInAdvancedBar(1);
    Assert.buttonOnAdvancedIsEnabled(1);

    Action.chooseCategoryBrowseMode("大圖");

    Action.tapCommodityPictureOnLargePhotoView();
    $.delay(sleep);
    obj.scrollDowns(1);

    var itemPageShowCorrect = app.mainWindow().collectionViews()[0].cells()[1].staticTexts()[0].name();

    //Verify screen successful navigated to item page.
    Assert.itemPageShowCorrectOnCoatSearchPage(itemPageShowCorrect);

    Action.goBack();
    Action.tapButtonsInAdvancedBarWhenSRP();
    Action.tapButtonsInAdvancedBar(1);

    Action.chooseCategoryBrowseMode("列表");

    Action.goBackOnSearchPage();
    Action.tapReturnOnSearchBar();
    Action.goDiscoveryStream();
    Action.cleanSearches();
});

test("[1938005] check the commodity prices on item listing-Large photo view" , function () {
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();

    //Tap Advanced button.
    Action.tapButtonsInAdvancedBarWhenSRP();

    //Tap browse mode button on advanced bar. And verify this button would enabled after tapped.
    Action.tapButtonsInAdvancedBar(1);
    Assert.buttonOnAdvancedIsEnabled(1);

    Action.chooseCategoryBrowseMode("大圖");

    Action.slidingCommodityPage();

    //first parameter is second product, second parameter is the  location of price in product cell.
    Assert.productPriceShowCorrect(2,3);

    Action.tapButtonsInAdvancedBarWhenSRP();
    Action.tapButtonsInAdvancedBar(1);

    Action.chooseCategoryBrowseMode("列表");

    Action.goBackOnSearchPage();
    Action.tapReturnOnSearchBar();
    Action.goDiscoveryStream();
    Action.cleanSearches();
});

test("[1938006] check the rating show correct on item listing-Large photo view" , function () {
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();

    //Tap Advanced button.
    Action.tapButtonsInAdvancedBarWhenSRP();

    //Tap browse mode button on advanced bar. And verify this button would enabled after tapped.
    Action.tapButtonsInAdvancedBar(1);
    Assert.buttonOnAdvancedIsEnabled(1);

    Action.chooseCategoryBrowseMode("大圖");

    Action.slidingCommodityPage();

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

    Action.tapButtonsInAdvancedBarWhenSRP();
    Action.tapButtonsInAdvancedBar(1);

    Action.chooseCategoryBrowseMode("列表");

    Action.goBackOnSearchPage();
    Action.tapReturnOnSearchBar();
    Action.goDiscoveryStream();
    Action.cleanSearches();
});

test("[1938007] check favorites icon show correct on item listing-Large photo view" , function () {
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();

    //Tap Advanced button.
    Action.tapButtonsInAdvancedBarWhenSRP();

    //Tap browse mode button on advanced bar. And verify this button would enabled after tapped.
    Action.tapButtonsInAdvancedBar(1);
    Assert.buttonOnAdvancedIsEnabled(1);

    Action.chooseCategoryBrowseMode("大圖");
    Action.slidingCommodityPage();

    $.delay(sleep);
    target.logElementTree();

    //verify favorites icon show on product cell.
    Assert.favoritesIconShowCorrect(1);

    //get product price X and Y.
    var productPrice = app.mainWindow().collectionViews()[0].cells()[1].staticTexts()[3];
    var productPriceX = Action.getElementsOriginXString(productPrice);
    var productPriceY = Action.getElementsOriginYString(productPrice);

    //get favorites icon X and Y
    var favoritesIcon = app.mainWindow().collectionViews()[0].cells()[1].buttons()[0];
    var favoritesIconX = Action.getElementsOriginXString(favoritesIcon);
    var favoritesIconY = Action.getElementsOriginYString(favoritesIcon);

    //Verify favorites icon place at product price right side.
    method.verifyTrue(favoritesIconX < productPriceX < 20, "favorites icon not at product price right side.");

    Action.tapButtonsInAdvancedBarWhenSRP();
    Action.tapButtonsInAdvancedBar(1);

    Action.chooseCategoryBrowseMode("列表");

    Action.goBackOnSearchPage();
    Action.tapReturnOnSearchBar();
    Action.goDiscoveryStream();
    Action.cleanSearches();
});

test("[1938013] check 共xxxx筆結果." , function () {
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    $.delay(sleep);

    Action.tapStoreTab();
    $.delay(3);

    //verify 共xxxx筆結果 show correct.
    target.logElementTree();
    var numberOfItems = app.mainWindow().collectionViews()[0].staticTexts()[0];

    Assert.numberOfItemsShowCorrect(numberOfItems);

    Action.goBackOnSearchPage();
    Action.tapReturnOnSearchBar();
    Action.goDiscoveryStream();
    Action.cleanSearches();
});

test("[1938024] store Logo below store name" , function () {
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    $.delay(sleep);

    Action.tapStoreTab();

    Action.tapStorePicture();
    $.delay(4);

    //verify 共xxxx筆結果 show correct.
    target.logElementTree();
    var numberOfItems = app.mainWindow().collectionViews()[0].staticTexts()[0];

    Assert.numberOfItemsShowCorrect(numberOfItems);

    //verify there are two key authentication page
    Assert.checkButtonOnStore();

    //Back to the top shop page
    Action.goBackOnSearchPage();

    Action.goBackOnSearchPage();
    Action.tapReturnOnSearchBar();
    Action.goDiscoveryStream();
    Action.cleanSearches();
});

test("[1938025] check  commodity quantity" , function () {
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();

    Action.tapStoreTab();
    $.delay(4);

    //verify xxx件商品 show correct.
    target.logElementTree();
    var numberOfItems = app.mainWindow().collectionViews()[0].cells()[1].staticTexts()[2];

    Assert.numberOfItemsShowCorrect(numberOfItems);

    Action.goBackOnSearchPage();
    Action.tapReturnOnSearchBar();
    Action.goDiscoveryStream();
    Action.cleanSearches();
 });

 test("[1938026] click the shop commodity" , function () {
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();

    Action.tapStoreTab();
    $.delay(sleep);

    Action.tapCommodityNumber();
    $.delay(4);

    Assert.checkStorelistShowCorrect();

    //Back to the top shop page
    Action.goBackOnSearchPage();

    Action.goBackOnSearchPage();
    Action.tapReturnOnSearchBar();
    Action.goDiscoveryStream();
    Action.cleanSearches();
 });

test("[1938027] check store evaluation shows" , function () {
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();

    Action.tapStoreTab();
    $.delay(sleep);
    target.logElementTree(); 

    //Verify the value of rating is less than 10, if not fail.
    Assert.storeRatingShowCorrect(1, 1);

    Action.goBackOnSearchPage();
    Action.tapReturnOnSearchBar();
    Action.goDiscoveryStream();
    Action.cleanSearches();
});

test("[1938029] view to join wish list icon display." , function () {
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();

    Action.tapStoreTab();
    $.delay(3);

    Assert.heartIconShowCorrect(1);

    //get evaluate X and Y.
    var evaluate = app.mainWindow().collectionViews()[0].cells()[1].staticTexts()[1];
    var evaluateX = Action.getElementsOriginXString(evaluate);
    var evaluateY = Action.getElementsOriginYString(evaluate);

    //get favorites icon X and Y
    var heartIcon = app.mainWindow().collectionViews()[0].cells()[1].buttons()[0];
    var heartIconX = Action.getElementsOriginXString(heartIcon);
    var heartIconY = Action.getElementsOriginYString(heartIcon);

    //Verify heart icon place at product price right side.
    method.verifyTrue( evaluateX < heartIconX && (evaluateY - heartIconY) < 20, "heart icon at product price right side.");

    Action.goBackOnSearchPage();
    Action.tapReturnOnSearchBar();
    Action.goDiscoveryStream();
    Action.cleanSearches();
 });

//6.9
test("[1937929] Click 'all categories' button" , function () {
    Action.cleanSearches();
    Action.goApparelCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();

    $.delay(5);
    
    //verify all coatgory show correct
    Assert.checkAllCoatgoryShowCorrectOnSRP();

    Action.tapAllCoatgoryWhenSRP();

    Assert.searchResultsPage("上衣");

    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
    Action.tapButtonOnTabBar(0);
 });

test("[1937930] Browse by specific classification search results" , function () {
    Action.cleanSearches();
    Action.goApparelCategoryWhenSearchSettingOpen();
    $.delay(sleep);
    
    //go to ”漢神百貨品牌服飾“
    Action.goCoatCategory();
    $.delay(sleep);

    Action.tapSearchIconOnNavBar();
    Assert.textIsEnabled("搜尋漢神百貨品牌服飾");
    $.delay(sleep);

    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();

    $.delay(5);
    
    //verify ”漢神百貨品牌服飾“
    Assert.searchResultsPage("上衣");

    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
    Action.tapButtonOnTabBar(0);
 });

test("[1937941] Check the 'remove' button shows ", function () {
    Action.cleanSearches();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();

    $.delay(5);
    
    //tap Advance button
    Action.tapButtonsInAdvancedBarWhenSRP();

    //Tap 篩選 button.
    Action.tapButtonsInAdvancedBar(2);

    //Tap "可刷卡" and verify 清除 button show up.
    Action.tapButtonOnFilterAttributeScreen(0);

    var attributeCollectView = app.mainWindow().collectionViews()[1];
    var attributeCollectViewOriginY = Action.getElementsOriginYString(attributeCollectView);
    var attributeCollectViewOriginX = Action.getElementsOriginXString(attributeCollectView);

    var clearButton = app.mainWindow().buttons()["清除"];
    var clearButtonOriginY = Action.getElementsOriginYString(clearButton);
    var clearButtonOriginX = Action.getElementsOriginXString(clearButton);

    method.verifyTrue(clearButtonOriginY > attributeCollectViewOriginY && clearButtonOriginX === attributeCollectViewOriginX, "Clear button location not correct.");

    //Tap cancel button on Advance bar.
    Action.tapCancelButtonInAdvancedBar();

    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
    Action.tapButtonOnTabBar(0);
});

test("[1937964] check able to tap 超商取貨 and untap 超商取貨", function () {
    Action.cleanSearches();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();

    $.delay(5);

    //tap Advance button
    Action.tapButtonsInAdvancedBarWhenSRP();

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

//6.10
test("[1938011] check ‘Store’ TAB list shows", function () {
    Action.cleanSearches();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    $.delay(sleep);

    Action.tapStoreTab();
    $.delay(5);

    //verify the default view
    Assert.tapTabCheckSListDisplay();

    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
    Action.tapButtonOnTabBar(0);
});

test("[1938012] check ‘Store’ TAB on '漢神百貨品牌服飾'' list shows", function () {
    Action.cleanSearches();
    Action.goApparelCategoryWhenSearchSettingOpen();
    $.delay(sleep);
    
    //go to ”漢神百貨品牌服飾“
    Action.goCoatCategory();
    $.delay(sleep);

    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    $.delay(sleep);

    Action.tapStoreTab();
    $.delay(5);

    //verify the default view
    Assert.tapTabCheckSListDisplay();

    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
    Action.tapButtonOnTabBar(0);
});

test("[1938014] check header" , function () {
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    $.delay(5);

    //get backIcon X and Y.
    var backIcon = app.mainWindow().collectionViews()[0].cells()[1].staticTexts()[1];
    var backIconX = Action.getElementsOriginXString(backIcon);
    var backIconY = Action.getElementsOriginYString(backIcon);

    //get navName X and Y
    var navName = app.mainWindow().collectionViews()[0].cells()[1].buttons()[0];
    var navNameX = Action.getElementsOriginXString(navName);
    var navNameY = Action.getElementsOriginYString(navName);

    //Verify heart icon place at product price right side.
    assertTrue( backIconX < navNameX && (backIconY - navNameY) < 20, "navName at backIcon right side.");

    Action.goBackOnSearchPage();
    Action.tapReturnOnSearchBar();
    Action.goDiscoveryStream();
    Action.cleanSearches();
});

test("[1938015] Check the 'return' icon", function () {
    Action.cleanSearches();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    $.delay(sleep);

    Action.tapStoreTab();
    Action.goBackOnSearchPage();
    $.delay(5);

    Assert.textIsEnabled("上衣");
    Action.tapReturnOnSearchBar();

    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
    Action.tapButtonOnTabBar(0);
});

test("[1938016] Click on the search icon", function () {
    Action.cleanSearches();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    $.delay(sleep);

    Action.tapStoreTab();
    $.delay(5);

    Action.tapSearchResultOfStore();
    Action.tapSearchIconOnNavBarWhenSRP();
    $.delay(5);

    Assert.autoCompletePageDisplay();
    Action.tapReturnOnSearchBarWhenSRP();

    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
    Action.tapButtonOnTabBar(0);
});

test("[1938018] check a search bar, and then close the search bar", function () {
    Action.cleanSearches();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    $.delay(sleep);

    Action.tapStoreTab();
    $.delay(5);

    Action.tapSearchResultOfStore();
    Action.tapSearchIconOnNavBarWhenSRP();
    Action.tapReturnOnSearchBarWhenSRP();
    $.delay(sleep);

    Assert.checkReturnPageDisplay("Line-up線上衣飾");

    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
    Action.tapButtonOnTabBar(0);
});

test("[1938019] Check the default show 20 stores", function () {
    Action.cleanSearches();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("s");
    Action.tapKeyboardSearch();
    $.delay(sleep);

    Action.tapStoreTab();
    $.delay(5);

    //Check the default show 20 stores
    Assert.commodityItemsShowCount(21);

    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
    Action.tapButtonOnTabBar(0);
});

test("[1938032] Click ‘advanced’ button", function () {
    Action.cleanSearches();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    $.delay(sleep);

    Action.tapStoreTab();
    $.delay(5);

    Action.tapSearchResultOfStore();

    //Tap Advanced button.
    Action.tapButtonsInAdvancedBarWhenSRPStore();

    //Tap 篩選 button
    Action.tapButtonsInAdvancedBar(0);

    Assert.advancedButtonsOrder();

    //Tap cancel button on Advance bar.
    Action.tapCancelButtonInAdvancedBar();

    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
    Action.tapButtonOnTabBar(0);
});

test("[1938017] Enter a keyword search", function () {
    Action.cleanSearches();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    $.delay(sleep);

    Action.tapStoreTab();
    $.delay(5);

    Action.tapSearchResultOfStore();

    Action.tapSearchIconOnNavBarWhenSRP();
    Action.searchBarInputChinese("iphone");
    Action.tapKeyboardSearch();
    $.delay(sleep);

    Assert.searchResultsPage("iphone");

    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
    Action.tapButtonOnTabBar(0);
});

//6.11
test("[1937914] Check the 'return' icon" , function () {
    Action.cleanSearches();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();

    Action.searchBarInput("keyword");
    Action.tapKeyboardSearch();
    Action.goBackOnSearchPage();

    Action.tapReturnOnSearchBar();
    Assert.checkSearchPage("全部分類");
    $.delay(sleep);
    Action.goDiscoveryStream();
});

test("[1937989] Click the commodity pictures", function () {
    Action.cleanSearches();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();

    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    $.delay(sleep);

    Action.tapItemOnProductListScreen();
    //obj.scrollDowns(1);

    Action.slidingCommodityPage();

    Assert.itemPageShowCorrect();

    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
    Action.tapButtonOnTabBar(0);
});

test("[1938009] Login - click join collection after listing of stars." , function () {
    //Action.tapAddAccountOnLogin("mobileappstore3", "A1234qwer");
    //$.delay(sleep);
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();

    //Tap Advanced button.
    Action.tapButtonsInAdvancedBarWhenSRP();
    $.delay(sleep);

    //Tap browse mode button on advanced bar. And verify this button would enabled after tapped.
    Action.tapButtonsInAdvancedBar(1);
    Assert.buttonOnAdvancedIsEnabled(1);

    Action.chooseCategoryBrowseMode("小圖");
    $.delay(5);

    //Tap favorites icon add a production to favorites.
    Action.tapFavoritesIcon(1);
    var productName = app.mainWindow().collectionViews()[0].cells()[1].name();

    //got my favorites screen.
    Action.tapButtonOnTabBar(4);
    Action.goMayFavoritesScreenWhenSRP();

    $.delay(sleep);
    target.logElementTree();

    //Assert product show in My favorites screen.
    Assert.productAddedToMyFavoritesScreenWhenSRP(productName);

    //Remove favorites item.
    Action.tapButtonOnTabBar(2);
    Action.tapFavoritesIcon(1);

    //Verify favorites item successful removed.
    Action.tapButtonOnTabBar(4);
    $.delay(3);
    Assert.productRemovedFromMyFavoritesScreenWhenSRP(productName);

    //Restore app to default screen.
    Action.goBack();
    Action.tapButtonOnTabBar(2);

    //Go back to advanced bar switch browse mode to list view.
    Action.tapButtonsInAdvancedBarWhenSRP();
    $.delay(sleep);
    Action.tapButtonsInAdvancedBar(1);

    Action.chooseCategoryBrowseMode("列表");

    Action.goBackOnSearchPage();
    Action.tapReturnOnSearchBar();
    Action.goDiscoveryStream();
    Action.cleanSearches();
    //Log out and remove user login history.
    //Action.tapButtonOnTabBar(4);
    //Action.doUserLogout();
});

test("[1938031] After login, click on add collection list icon ", function () {
    Action.cleanSearches();
    //Action.tapAddAccountOnLogin("mobileappstore3", "A1234qwer");
    //$.delay(sleep);
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    $.delay(sleep);

    Action.tapStoreTab();
    $.delay(6);

    //verify the heart icon display
    Assert.heartIconShowCorrect(1);
    Action.tapFavoriteStoreIcon();
    Assert.filterAttributeButtonIsTappedOnSRP(0,1);

    Action.tapFavoriteStoreIcon();
    $.delay(sleep);
    //Log out and remove user login history.
    //Action.tapButtonOnTabBar(4);
    //Action.doUserLogout();
   
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
    Action.tapButtonOnTabBar(0);
});

test("[1938033] check according to the 'low price to dealer' sort" , function () {
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

test("[1938034] product items should sorting by price high to low after user select this option.", function () {
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

test("[1937970] check able to tap 有圖片 and untap 有圖片", function () {
    Action.cleanSearches();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();

    $.delay(5);

    //Tap Advanced button.
    Action.tapButtonsInAdvancedBarWhenSRP();

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