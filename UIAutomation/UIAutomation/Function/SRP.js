test("[1953657] verify edit favorite category if correct on sidebar.", function () {
    target.logDeviceInfo();
    Action.determineTheLoginWhenSRP();
    Action.cleanSearches();
    Action.tapButtonOnTabBar(4);
    $.delay(5);

    //edit favorite categories
    Action.tapButtonOnMyUser(6);
    $.delay(5);

    Assert.checkCategoryEditor();
    Action.selectCategoryOnEditFavorite();
    $.delay(10);

    Action.goBack();
    $.delay(10);

    //slect favorite categories and assert them
    Action.verifyEditingFavoriteCategories();
    $.delay(10);

    //restore
    Action.tapButtonOnMyUser(6);
    $.delay(5);

    Assert.checkCategoryEditor();
    Action.selectCategoryOnEditFavorite();
    $.delay(10);

    Action.goBack();
    $.delay(10);

    Action.tapButtonOnTabBar(0);
});

test("[1937918] Check the Tab display" , function () {
    target.logDeviceInfo();
    $.delay(sleep);

    Action.cleanSearches();
    $.delay(sleep);

    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();

    Action.englishInputMethod();
    
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    Action.pageShow();
    target.logElementTree();

    //Tap Advanced button
    Action.tapButtonsInAdvancedBarWhenSRP();

    //Tap browse mode button on advanced bar. And verify this button would enabled after tapped.
    Action.tapButtonsInAdvancedBar(1);
    Assert.buttonOnAdvancedIsEnabled(1);

    Action.chooseCategoryBrowseMode("列表");
    $.delay(10);

    //Check the Tab display
    Assert.checkGoodsAndStoreTabDisplay();

    Action.goBackOnSearchPage();
    Action.tapReturnOnSearchBar();
    Action.goDiscoveryStream();
    Action.cleanSearches();
});

test("[1937920] Click store Tab" , function () {
    target.logDeviceInfo();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    Action.pageShow();

    Action.tapStoreTab();
    $.delay(5);

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
    target.logDeviceInfo();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    Action.pageShow();

    Action.tapStoreTab();
    Action.tapGoodsTab();
    $.delay(5);

    //Check into a store page，verify icon heart on store list.
    Assert.checkButtonOnList("icon star");

    //Check store List Display
    $.delay(5);
    if(target.systemVersion() == "6.1.3"){
        //Check store List Display
        Assert.commodityItemsShowCount(5);
        }
    else{
        //Check store List Display
        Assert.commodityItemsShowCount(21);
    }

    Action.goBackOnSearchPage();
    Action.tapReturnOnSearchBar();
    Action.goDiscoveryStream();
    Action.cleanSearches();
});

test("[1937927] Check the default show 20 items",function () {
    target.logDeviceInfo();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    Action.pageShow();

    if(target.systemVersion() == "6.1.3"){
        //Check the default show 4 items
        Assert.commodityItemsShowCount(4);
    }
    else{
        //Check the default show 20 items
        Assert.commodityItemsShowCount(21);
    }

    Action.goBackOnSearchPage();
    Action.tapReturnOnSearchBar();
    Action.goDiscoveryStream();
    Action.cleanSearches();
});

test("[1937928] Scroll screen more items should successful loaded", function () {
    target.logDeviceInfo();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    Action.pageShow();

    if(target.systemVersion() == "6.1.3"){
        //Check the default show 4 items
        Assert.commodityItemsShowCount(4);
        Action.pageShow();

        //Scroll screen. After screen successful scroll cell items should increase to 20.
        obj.scrollDowns(16);
        $.delay(10);

        Assert.commodityItemsShowCount(4);
    }
    else{
        //Check the default show 20 items
        Assert.commodityItemsShowCount(21);

        //Scroll screen. After screen successful scroll cell items should increase to 20.
        obj.scrollDowns(16);
        $.delay(3);

        Assert.commodityItemsShowCount(81);
    } 

    Action.goBackOnSearchPage();
    Action.tapReturnOnSearchBar();
    Action.goDiscoveryStream();
    Action.cleanSearches();
});

test("[1937933] can switch to 排序 tab after click 排序 button", function () {
    target.logDeviceInfo();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    Action.pageShow();

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
    target.logDeviceInfo();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    Action.pageShow();

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
    target.logDeviceInfo();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    Action.pageShow();

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
    Action.cleanSearches();
    target.logDeviceInfo();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    Action.pageShow();

    Action.tapGoodsTab();
    $.delay(5);

    //tap advanced button.
    Action.tapButtonsInAdvancedBarWhenSRP();

    //go to 排序 tab.
    Action.tapButtonsInAdvancedBar(0);

    //select price from high to low.
    Action.selectOptionOnSortingTabWhenSRP(3);
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
    target.logDeviceInfo();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    Action.pageShow();

    Action.tapGoodsTab();
    $.delay(5);

    //tap advanced button.
    Action.tapButtonsInAdvancedBarWhenSRP();

    //go to 排序 tab.
    Action.tapButtonsInAdvancedBar(0);

    //select price from high to low.
    Action.selectOptionOnSortingTabWhenSRP(4);
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
    target.logDeviceInfo();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    Action.pageShow();

    //tap advanced button.
    Action.tapButtonsInAdvancedBarWhenSRP();
    $.delay(sleep);

    //go to 篩選 tab.
    Action.tapButtonsInAdvancedBar(2);

    if(target.systemVersion() == "6.1.3"){
        //verify the default price is 100000 +
        Assert.checkPriceBarShowCorrectWhenSRPOnDifferentversions("100000+ 元");

        //drag price bar to 1020 price.
        app.mainWindow().dragInsideWithOptions({startOffset: {x:0.92, y:0.34}, endOffset:{x:0.234, y:0.37}, duration:12.2});
        $.delay(sleep);

        //Verify price show correct after dragging.
        Assert.checkPriceBarShowCorrectWhenSRPOnDifferentversions("1020 元");

        //Tap clear button
        Action.tapClearButtonOnFilterScreenWhenSRP();

        //Verify price bar restore to default value.
        Assert.checkPriceBarShowCorrectWhenSRPOnDifferentversions("100000+ 元");
    }
    else{
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
    }
    
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
    target.logDeviceInfo();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    Action.pageShow();

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
    target.logDeviceInfo();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    Action.pageShow();

    //Tap Advanced button.
    Action.tapButtonsInAdvancedBarWhenSRP();

    //Tap 篩選 button
    Action.tapButtonsInAdvancedBar(2);

    $.delay(sleep);
    if(target.systemVersion() == "6.1.3"){
        //Verify "確定" button exist on Navigation Bar, the index of this button is 1.
        Assert.buttonExistOnNavigationBar(1, "確定");
    }
    else{
        //Verify "確定" button exist on Navigation Bar, the index of this button is 1.
        Assert.buttonExistOnNavigationBar(2, "確定");
    }

    //Tap cancel button and navigate back to discovery screen.
    Action.tapCancelButtonInAdvancedBar();

    Action.goBackOnSearchPage();
    Action.tapReturnOnSearchBar();
    Action.goDiscoveryStream();
    Action.cleanSearches();
});

test("[1937944] Check the '確定' button" , function (){
    target.logDeviceInfo();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    Action.pageShow();

    //Tap Advanced button.
    Action.tapButtonsInAdvancedBarWhenSRP();

    //Tap 篩選 button
    Action.tapButtonsInAdvancedBar(2);

    $.delay(sleep);
    if(target.systemVersion() == "6.1.3"){
        Action.tapbuttonExistOnNavigationBar(1);
    }
    else{
        Action.tapbuttonExistOnNavigationBar(2);
    }

    //Verify tap "確定" button ,search results page show the correct 
    Assert.searchResultsPage("上衣");

    Action.goBackOnSearchPage();
    Action.tapReturnOnSearchBar();
    Action.goDiscoveryStream();
    Action.cleanSearches();
});

test("[1937945] product items in list should show correct after user adjust price bar.", function () {
    target.logDeviceInfo();
    Action.cleanSearches();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    Action.pageShow();

    //tap advanced button.
    Action.tapButtonsInAdvancedBarWhenSRP();
    $.delay(sleep);

    //go to 排序 tab.
    Action.tapButtonsInAdvancedBar(0);

    //select price from high to low.
    Action.selectOptionOnSortingTabWhenSRP("價錢高到低");
    $.delay(15);

    if(target.systemVersion() == "6.1.3"){
        obj.scrollDowns(1);
    }
    $.delay(10);

    //verify price value show correct.
    //the first parameter is product index and the second parameter is price index in product cell.
    Assert.checkPriceValueShowLessThan(1, 3, "100000000");

    //go to advanced screen and drag price bar to 1020.
    //tap advanced button.
    Action.tapButtonsInAdvancedBarWhenSRP();
    $.delay(sleep);

    //go to 篩選 tab.
    Action.tapButtonsInAdvancedBar(2);

    $.delay(sleep);
    if(target.systemVersion() == "6.1.3"){
        //verify the default price is 100000 +
        Assert.checkPriceBarShowCorrectWhenSRPOnDifferentversions("100000+ 元");

        //drag price bar to 1020 price.    
        app.mainWindow().dragInsideWithOptions({startOffset: {x:0.92, y:0.34}, endOffset:{x: 0.234, y:0.37}, duration:12.2});
    
        //Verify price show correct after dragging.
        Assert.checkPriceBarShowCorrectWhenSRPOnDifferentversions("1020 元");
    }
    else{
        //verify the default price is 100000 +
        Assert.checkPriceBarShowCorrectWhenSRP("100000+ 元");

        //drag price bar to 1020 price.    
        app.mainWindow().dragInsideWithOptions({startOffset: {x: 0.92, y: 0.29}, endOffset:{x: 0.234, y: 0.29}});
    
        //Verify price show correct after dragging.
        Assert.checkPriceBarShowCorrectWhenSRP("1020 元");
    }
    
    //Tap submit button.
    Action.tapSubmitButtonOnAdvanceScreen();
    $.delay(15);

    if(target.systemVersion() == "6.1.3"){
        obj.scrollDowns(1);
    }
    $.delay(10);

    //verify price value show correct.
    Assert.checkPriceValueShowLessThan(1, 3, "100000000");

    //Restore application to default loaction.
    Action.tapButtonOnTabBar(2);
    
    Action.goBackOnSearchPage();
    Action.tapReturnOnSearchBar();
    Action.goDiscoveryStream();
});

test("[1937949] check able to tap '可刷卡' and untap '可刷卡' button", function () {
    target.logDeviceInfo();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    Action.pageShow();

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
    target.logDeviceInfo();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    Action.pageShow();

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
    target.logDeviceInfo();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    Action.pageShow();

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
    target.logDeviceInfo();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    Action.pageShow();

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
    target.logDeviceInfo();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    Action.pageShow();

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
    target.logDeviceInfo();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    Action.pageShow();

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
    target.logDeviceInfo();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    Action.pageShow();

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
    target.logDeviceInfo();
    Action.cleanSearches();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("一一二");
    Action.tapKeyboardSearch();
    Action.pageShow();

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
    target.logDeviceInfo();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    Action.pageShow();

    //Tap Advanced button.
    Action.tapButtonsInAdvancedBarWhenSRP();

    //Tap browse mode button on advanced bar. And verify this button would enabled after tapped.
    Action.tapButtonsInAdvancedBar(1);
    Assert.buttonOnAdvancedIsEnabled(1);

    Action.chooseCategoryBrowseMode("列表");
    
    //tap commodity picture
    Action.tapCommodityPictureOnSearchResultsPage();
    $.delay(15);

    obj.scrollDowns(1);
    $.delay(10);

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
    target.logDeviceInfo();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    Action.pageShow();

    //Tap Advanced button.
    Action.tapButtonsInAdvancedBarWhenSRP();

    //Tap browse mode button on advanced bar. And verify this button would enabled after tapped.
    Action.tapButtonsInAdvancedBar(1);
    Assert.buttonOnAdvancedIsEnabled(1);

    Action.chooseCategoryBrowseMode("列表");
    $.delay(10);

    //tap commodity Name
    Action.tapCommodityNameOnSearchResultsPage();
    $.delay(15);

    obj.scrollDowns(1);
    $.delay(10);

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
    target.logDeviceInfo();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    Action.pageShow();

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
    target.logDeviceInfo();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    Action.pageShow();

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
    target.logDeviceInfo();
    Action.cleanSearches();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    Action.pageShow();

    //Tap Advanced button.
    Action.tapButtonsInAdvancedBarWhenSRP();

    //Tap browse mode button on advanced bar. And verify this button would enabled after tapped.
    Action.tapButtonsInAdvancedBar(1);
    Assert.buttonOnAdvancedIsEnabled(1);

    Action.chooseCategoryBrowseMode("列表");
    $.delay(10);

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
    target.logDeviceInfo();
    Action.cleanSearches();
    Action.pageShow();

    //Log out and remove user login history
    Action.tapButtonOnTabBar(4);
    Action.doUserLogout();
    $.delay(sleep);

    Action.cleanSearches();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    $.delay(10);

    //Tap Advanced button.
    Action.tapButtonsInAdvancedBarWhenSRP();

    //Tap browse mode button on advanced bar. And verify this button would enabled after tapped.
    Action.tapButtonsInAdvancedBar(1);
    Assert.buttonOnAdvancedIsEnabled(1);

    Action.chooseCategoryBrowseMode("列表");
    $.delay(10);
     
    //tap favorites icon, after tapped log in window show up.
    Action.tapFavoritesIcon(1);
    $.delay(5);
    
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
    target.logDeviceInfo();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    Action.pageShow();

    //Tap Advanced button.
    Action.tapButtonsInAdvancedBarWhenSRP();
    $.delay(sleep);

    //Tap browse mode button on advanced bar. And verify this button would enabled after tapped.
    Action.tapButtonsInAdvancedBar(1);
    Assert.buttonOnAdvancedIsEnabled(1);

    Action.chooseCategoryBrowseMode("小圖");
    $.delay(10);

    if(target.systemVersion() == "6.1.3"){
        //tap favorites icon, after tapped log in window show up.
        Action.tapFavoritesIcon(2);
    }
    else{
        //tap favorites icon, after tapped log in window show up.
        Action.tapFavoritesIcon(1);
    }
    $.delay(10);
    
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
    target.logDeviceInfo();
    Action.cleanSearches();
    Action.pageShow();

    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    $.delay(10);

    //Tap Advanced button.
    Action.tapButtonsInAdvancedBarWhenSRP();
    $.delay(sleep);

    //Tap browse mode button on advanced bar. And verify this button would enabled after tapped
    Action.tapButtonsInAdvancedBar(1);
    Assert.buttonOnAdvancedIsEnabled(1);

    Action.chooseCategoryBrowseMode("大圖");
    $.delay(20);    

    if(target.systemVersion() == "6.1.3"){
        obj.scrollDowns(1);
    }
    else{
        Action.slidingCommodityPage();
    }
    $.delay(15);
    
    target.logElementTree();
     
    //tap favorites icon, after tapped log in window show up.
    Action.tapFavoritesIcon(1);
    $.delay(5);

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
    target.logDeviceInfo();
    Action.cleanSearches();
    Action.pageShow();

    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    $.delay(10);

    Action.tapStoreTab();
    $.delay(10);

    Action.tapheartIconOnStoreWhenSRP();
    $.delay(5);

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
    target.logDeviceInfo();
    Action.cleanSearches();
    Action.tapAddAccountOnLogin("mobilestoresymbio", "Aa123456");
    $.delay(10);

    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    Action.pageShow();

    //Tap Advanced button.
    Action.tapButtonsInAdvancedBarWhenSRP();

    //Tap browse mode button on advanced bar. And verify this button would enabled after tapped.
    Action.tapButtonsInAdvancedBar(1);
    Assert.buttonOnAdvancedIsEnabled(1);

    Action.chooseCategoryBrowseMode("列表");
    $.delay(10);

    //Tap favorites icon add a production to favorites.
    Action.tapFavoritesIcon(1);
    $.delay(10);

    if(target.systemVersion() == "6.1.3"){
        var productName = app.mainWindow().collectionViews()[0].cells()[1].staticTexts()[0].name();
    }
    else{
        var productName = app.mainWindow().collectionViews()[0].cells()[1].name();
    }
    
    //got my favorites screen.
    Action.tapButtonOnTabBar(4);
    Action.goMayFavoritesScreenWhenSRP();
    $.delay(5);

    //Assert product show in My favorites screen.
    Assert.productAddedToMyFavoritesScreen(productName);

    //Remove favorites item.
    Action.tapButtonOnTabBar(2);
    Action.tapFavoritesIcon(1);

    //Verify favorites item successful removed.
    Action.tapButtonOnTabBar(4);
    $.delay(5);

    Assert.productRemovedFromMyFavoritesScreen(productName);

    //Restore app to default screen.
    Action.goBack();
    Action.tapButtonOnTabBar(2);
    Action.goBackOnSearchPage();
    Action.tapReturnOnSearchBar();
    Action.goDiscoveryStream();
    Action.cleanSearches();
});

test("[1937995] check favorites icon show correct with photo grid view" ,function() {
    target.logDeviceInfo();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    Action.pageShow();

    //Tap Advanced button.
    Action.tapButtonsInAdvancedBarWhenSRP();
    //Tap browse mode button on advanced bar. And verify this button would enabled after tapped.
    Action.tapButtonsInAdvancedBar(1);
    Assert.buttonOnAdvancedIsEnabled(1);

    Action.chooseCategoryBrowseMode("小圖");
    $.delay(10);

    //verify favorites icon show on product cell.
    Assert.favoritesIconShowCorrect(1);

    $.delay(sleep);
    if(target.systemVersion() == "6.1.3"){
        //get product price X and Y.
        var productPrice = app.mainWindow().collectionViews()[0].cells()[2].staticTexts()[0];
        var productPriceX = Action.getElementsOriginXString(productPrice);
        var productPriceY = Action.getElementsOriginYString(productPrice);

        //get favorites icon X and Y
        var favoritesIcon = app.mainWindow().collectionViews()[0].cells()[2].buttons()[0];
        var favoritesIconX = Action.getElementsOriginXString(favoritesIcon);
        var favoritesIconY = Action.getElementsOriginYString(favoritesIcon);
    }
    else{
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
    target.logDeviceInfo();
    Action.cleanSearches();
    $.delay(5);

    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    $.delay(10);

    //Tap Advanced button.
    Action.tapButtonsInAdvancedBarWhenSRP();
    $.delay(sleep);

    //Tap browse mode button on advanced bar. And verify this button would enabled after tapped.
    Action.tapButtonsInAdvancedBar(1);
    Assert.buttonOnAdvancedIsEnabled(1);

    Action.chooseCategoryBrowseMode("小圖");

    //Tap favorites icon add a production to favorites.
    if(target.systemVersion() == "6.1.3"){
        Action.tapFavoritesIcon(2);
    }
    else{
        Action.tapFavoritesIcon(1);
    }

    $.delay(sleep);

    if(target.systemVersion() == "6.1.3"){
        var productName = app.mainWindow().collectionViews()[0].cells()[1].staticTexts()[0].name();
    }
    else{
        var productName = app.mainWindow().collectionViews()[0].cells()[1].name();
    }

    //got my favorites screen.
    Action.tapButtonOnTabBar(4);
    Action.goMayFavoritesScreenWhenSRP();

    $.delay(sleep);
    target.logElementTree();

    //Assert product show in My favorites screen.
    Assert.productAddedToMyFavoritesScreenWhenSRP(productName);

    //Remove favorites item.
    Action.tapButtonOnTabBar(2);
    $.delay(sleep);

    if(target.systemVersion() == "6.1.3"){
        Action.tapFavoritesIcon(2);
    }
    else{
        Action.tapFavoritesIcon(1);
    }

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
});

test("[1938001] on item listing-Large photo view tap commodity picture  should navigate to item details page." , function () {
    target.logDeviceInfo();
    Action.cleanSearches();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    $.delay(10);

    //Tap Advanced button.
    Action.tapButtonsInAdvancedBarWhenSRP();

    //Tap browse mode button on advanced bar. And verify this button would enabled after tapped.
    Action.tapButtonsInAdvancedBar(1);
    Assert.buttonOnAdvancedIsEnabled(1);

    Action.chooseCategoryBrowseMode("大圖");

    Action.tapCommodityPictureOnLargePhotoView();
    $.delay(15);

    obj.scrollDowns(1);
    $.delay(10);

    //Verify screen successful navigated to item page.
    Assert.itemPageShowCorrectOnCoatSearchPage();

    Action.goBack();
    Action.tapButtonsInAdvancedBarWhenSRP();
    Action.tapButtonsInAdvancedBar(1);

    Action.chooseCategoryBrowseMode("列表");

    Action.goBackOnSearchPage();
    Action.tapReturnOnSearchBar();
    Action.goDiscoveryStream();
});

test("[1938005] check the commodity prices on item listing-Large photo view" , function () {
    target.logDeviceInfo();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    $.delay(10);

    //Tap Advanced button.
    Action.tapButtonsInAdvancedBarWhenSRP();

    //Tap browse mode button on advanced bar. And verify this button would enabled after tapped.
    Action.tapButtonsInAdvancedBar(1);
    Assert.buttonOnAdvancedIsEnabled(1);

    Action.chooseCategoryBrowseMode("大圖");
    $.delay(10);

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

    target.logDeviceInfo();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    $.delay(10);

    //Tap Advanced button.
    Action.tapButtonsInAdvancedBarWhenSRP();

    //Tap browse mode button on advanced bar. And verify this button would enabled after tapped.
    Action.tapButtonsInAdvancedBar(1);
    Assert.buttonOnAdvancedIsEnabled(1);

    Action.chooseCategoryBrowseMode("大圖");
    $.delay(15);

    Action.slidingCommodityPage();
    $.delay(10);

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
    target.logDeviceInfo();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    $.delay(10);

    //Tap Advanced button.
    Action.tapButtonsInAdvancedBarWhenSRP();

    //Tap browse mode button on advanced bar. And verify this button would enabled after tapped.
    Action.tapButtonsInAdvancedBar(1);
    Assert.buttonOnAdvancedIsEnabled(1);

    Action.chooseCategoryBrowseMode("大圖");
    $.delay(15);

    Action.slidingCommodityPage();
    $.delay(10);

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
    target.logDeviceInfo();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    $.delay(10);

    Action.tapStoreTab();
    $.delay(5);

    //verify 共xxxx筆結果 show correct.
    if(target.systemVersion() == "6.1.3"){
        var numberOfItems = app.mainWindow().collectionViews()[0].staticTexts()[1];
    }
    else{
        var numberOfItems = app.mainWindow().collectionViews()[0].staticTexts()[0];
    }

    Assert.numberOfItemsShowCorrect(numberOfItems);

    Action.goBackOnSearchPage();
    Action.tapReturnOnSearchBar();
    Action.goDiscoveryStream();
    Action.cleanSearches();
});

test("[1938024] store Logo below store name" , function () {
    target.logDeviceInfo();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    $.delay(10);

    Action.tapStoreTab();
    $.delay(5);

    Action.tapStorePicture();
    $.delay(5);

    //verify 共xxxx筆結果 show correct.
    if(target.systemVersion() == "6.1.3"){
        var numberOfItems = app.mainWindow().collectionViews()[0].staticTexts()[1];
    }
    else{
        var numberOfItems = app.mainWindow().collectionViews()[0].staticTexts()[0];
    }
    
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
    target.logDeviceInfo();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    $.delay(10);

    Action.tapStoreTab();
    $.delay(5);

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
    target.logDeviceInfo();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    $.delay(10);

    Action.tapStoreTab();
    $.delay(5);

    Action.tapCommodityNumber();
    $.delay(5);

    Assert.checkStorelistShowCorrect();

    //Back to the top shop page
    Action.goBackOnSearchPage();

    Action.goBackOnSearchPage();
    Action.tapReturnOnSearchBar();
    Action.goDiscoveryStream();
    Action.cleanSearches();
});

test("[1938027] check store evaluation shows" , function () {
    target.logDeviceInfo();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    $.delay(10);

    Action.tapStoreTab();
    $.delay(sleep);

    //Verify the value of rating is less than 10, if not fail.
    Assert.storeRatingShowCorrect(1, 1);

    Action.goBackOnSearchPage();
    Action.tapReturnOnSearchBar();
    Action.goDiscoveryStream();
    Action.cleanSearches();
});

test("[1938029] view to join wish list icon display." , function () {
    target.logDeviceInfo();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    $.delay(10);

    Action.tapStoreTab();
    $.delay(5);

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
    target.logDeviceInfo();
    Action.cleanSearches();
    Action.goApparelCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    $.delay(10);
    
    //verify all coatgory show correct
    Assert.checkAllCoatgoryShowCorrectOnSRP();

    Action.tapAllCoatgoryWhenSRP();

    Assert.searchResultsPage("上衣");

    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
    Action.tapButtonOnTabBar(0);
 });

test("[1937930] Browse by specific classification search results" , function () {
    target.logDeviceInfo();
    Action.cleanSearches();
    Action.goApparelCategoryWhenSearchSettingOpen();
    $.delay(5);
    
    //go to ”漢神百貨品牌服飾“
    Action.goCoatCategory();
    $.delay(5);

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
    target.logDeviceInfo();
    Action.cleanSearches();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    Action.pageShow();
    
    //tap Advance button
    Action.tapButtonsInAdvancedBarWhenSRP();

    //Tap 篩選 button.
    Action.tapButtonsInAdvancedBar(2);

    //Tap "可刷卡" and verify 清除 button show up.
    Action.tapButtonOnFilterAttributeScreen(0);

    if(target.systemVersion() == "6.1.3"){
        var attributeCollectView = app.mainWindow().collectionViews()[0];
    }
    else{
        var attributeCollectView = app.mainWindow().collectionViews()[1];
    }
    
    var attributeCollectViewOriginY = Action.getElementsOriginYString(attributeCollectView);

    target.logElementTree();
    $.delay(sleep);

    var clearButton = app.mainWindow().buttons()["清除"];
    var clearButtonOriginY = Action.getElementsOriginYString(clearButton);

    method.verifyTrue(clearButtonOriginY > attributeCollectViewOriginY , "Clear button location not correct.");

    //Tap cancel button on Advance bar.
    Action.tapCancelButtonInAdvancedBar();

    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
    Action.tapButtonOnTabBar(0);
});

test("[1937964] check able to tap 超商取貨 and untap 超商取貨", function () {
    target.logDeviceInfo();
    Action.cleanSearches();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    Action.pageShow();

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
    target.logDeviceInfo();
    Action.cleanSearches();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    Action.pageShow();

    Action.tapStoreTab();
    $.delay(5);

    //verify the default view
    Assert.tapTabCheckSListDisplay();

    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
    Action.tapButtonOnTabBar(0);
});

test("[1938012] check ‘Store’ TAB on '漢神百貨品牌服飾'' list shows", function () {
    target.logDeviceInfo();
    Action.cleanSearches();
    Action.goApparelCategoryWhenSearchSettingOpen();
    $.delay(5);
    
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
    target.logDeviceInfo();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    Action.pageShow();

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
    target.logDeviceInfo();
    Action.cleanSearches();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    Action.pageShow();

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
    target.logDeviceInfo();
    Action.cleanSearches();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    Action.pageShow();

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
    target.logDeviceInfo();
    Action.cleanSearches();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    Action.pageShow();

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
    target.logDeviceInfo();
    Action.cleanSearches();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("s");
    Action.tapKeyboardSearch();
    Action.pageShow();

    Action.tapStoreTab();
    $.delay(10);

    if(target.systemVersion() == "6.1.3"){
        Assert.commodityItemsShowCount(8);
    }
    else{
        Assert.commodityItemsShowCount(21);
    }

    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
    Action.tapButtonOnTabBar(0);
});

test("[1938032] Click ‘advanced’ button", function () {
    target.logDeviceInfo();
    Action.cleanSearches();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    Action.pageShow();

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
    target.logDeviceInfo();
    Action.cleanSearches();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    Action.pageShow();

    Action.tapStoreTab();
    $.delay(5);

    Action.tapSearchResultOfStore();

    Action.tapSearchIconOnNavBarWhenSRP();
    Action.searchBarInputChinese("iphone");
    Action.tapKeyboardSearch();
    $.delay(10);

    Assert.searchResultsPage("iphone");

    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
    Action.tapButtonOnTabBar(0);
});

//6.11
test("[1937914] Check the 'return' icon" , function () {
    target.logDeviceInfo();
    Action.cleanSearches();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();

    Action.searchBarInput("keyword");
    Action.tapKeyboardSearch();
    Action.pageShow();

    Action.goBackOnSearchPage();

    Action.tapReturnOnSearchBar();
    Assert.checkSearchPage("全部分類");
    $.delay(sleep);
    Action.goDiscoveryStream();
});

test("[1937989] Click the commodity pictures", function () {
    target.logDeviceInfo();
    Action.cleanSearches();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();

    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    Action.pageShow();

    Action.tapItemOnProductListScreen();
    $.delay(15);
    target.logElementTree();
    if(target.systemVersion() == "6.1.3"){   
        obj.scrollDowns(1);
        $.delay(sleep);

        Assert.itemPageShowCorrectOnCoatSearchPage();
    }
    else{   
        Action.slidingCommodityPage();
        $.delay(sleep);

        Assert.itemPageShowCorrect();
    }
    $.delay(sleep);

    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
    Action.tapButtonOnTabBar(0);
});

test("[1938009] Login - click join collection after listing of stars." , function () {
    Action.cleanSearches();
    target.logDeviceInfo();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    Action.pageShow();

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

    //got my favorites screen.
    Action.tapButtonOnTabBar(4);
    Action.goMayFavoritesScreenWhenSRP();

    $.delay(5);

    //Assert product show in My favorites screen.
    Assert.longtextSearchPageDisplay();

    //Remove favorites item.
    Action.tapButtonOnTabBar(2);
    Action.tapFavoritesIcon(1);
    $.delay(5);

    //Go back to advanced bar switch browse mode to list view.
    Action.tapButtonsInAdvancedBarWhenSRP();
    $.delay(sleep);
    Action.tapButtonsInAdvancedBar(1);

    Action.chooseCategoryBrowseMode("列表");

    Action.goBackOnSearchPage();
    Action.tapReturnOnSearchBar();
    Action.goDiscoveryStream();
    Action.cleanSearches();
});

test("[1938031] After login, click on add collection list icon ", function () {
    target.logDeviceInfo();
    Action.cleanSearches();
    //Action.tapAddAccountOnLogin("mobileappstore3", "A1234qwer");
    //$.delay(sleep);
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    Action.pageShow();

    Action.tapStoreTab();
    $.delay(6);

    //verify the heart icon display
    Assert.heartIconShowCorrect(1);
    Action.tapheartIconOnStoreWhenSRP();

    Action.tapFavoriteStoreIcon();
    $.delay(sleep);
   
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
    Action.tapButtonOnTabBar(0);
});

test("[1938033] check according to the 'low price to dealer' sort" , function () {
    target.logDeviceInfo();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    Action.pageShow();

    Action.tapGoodsTab();

    //tap advanced button.
    Action.tapButtonsInAdvancedBarWhenSRP();

    //go to 排序 tab.
    Action.tapButtonsInAdvancedBar(0);

    //select price from high to low.
    Action.selectOptionOnSortingTabWhenSRP(3);
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
    target.logDeviceInfo();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    Action.pageShow();

    Action.tapGoodsTab();

    //tap advanced button.
    Action.tapButtonsInAdvancedBarWhenSRP();

    //go to 排序 tab.
    Action.tapButtonsInAdvancedBar(0);

    //select price from high to low.
    Action.selectOptionOnSortingTabWhenSRP(4);
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
    target.logDeviceInfo();
    Action.cleanSearches();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    Action.pageShow();

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

//6.25
test("[1937925] Switch to a shop List, check 'total XXX pen results' ", function () {
    target.logDeviceInfo();
    Action.cleanSearches();

    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    Action.pageShow();

    Action.tapStoreTab();
    $.delay(15);

    //verify 共xxxx筆結果 show correct.
    target.logElementTree();
    if(target.systemVersion() == "6.1.3"){
        var numberOfItems = app.mainWindow().collectionViews()[0].staticTexts()[1];

    }
    else{
        var numberOfItems = app.mainWindow().collectionViews()[0].staticTexts()[0];
    }
    Assert.numberOfItemsShowCorrect(numberOfItems);

    Assert.tapTabCheckSListDisplay();

    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
    Action.tapButtonOnTabBar(0);
});

test("[1937931] Check the advanced page", function () {
    target.logDeviceInfo();
    Action.cleanSearches();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    Action.pageShow();

    //Tap Advanced button.
    Action.tapButtonsInAdvancedBarWhenSRP();
     
    //tap 排序 button and verify 排序 button is enabled. the order of 排序 button is 0.
    Action.tapButtonsInAdvancedBar(0);
    Assert.buttonOnAdvancedIsEnabled(0);
    $.delay(sleep);

    Assert.elementsOrderInSortTabWhenSRP();

    //Tap cancel button exit advanced bar.
    Action.tapCancelButtonInAdvancedBar();

    Action.goBackOnSearchPage();
    Action.tapReturnOnSearchBar();
    Action.goDiscoveryStream();
});

test("[1937932] Check the default to 'browse mode' Tab", function () {
    target.logDeviceInfo();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    Action.pageShow();

    //Tap Advanced button.
    Action.tapButtonsInAdvancedBarWhenSRP();
     
    //tap 瀏覽模式 button and verify 瀏覽模式 button is enabled. the order of 瀏覽模式 button is 1.
    Action.tapButtonsInAdvancedBar(1);
    Assert.buttonOnAdvancedIsEnabled(1);
    $.delay(sleep);
    target.logElementTree();
    $.delay(sleep);

    Assert.buttonOnAdvancedIsEnabledShow(0,"列表");
    Assert.buttonOnAdvancedIsEnabledShow(1,"小圖");
    Assert.buttonOnAdvancedIsEnabledShow(2,"大圖");

    //Tap cancel button exit advanced bar.
    Action.tapCancelButtonInAdvancedBar();

    Action.goBackOnSearchPage();
    Action.tapReturnOnSearchBar();
    Action.goDiscoveryStream();
    Action.cleanSearches();
});

test("[1937950] check have a video display options", function () {
    target.logDeviceInfo();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    Action.pageShow();

    //Tap Advanced button.
    Action.tapButtonsInAdvancedBarWhenSRP();
    $.delay(sleep);

    //Tap 篩選 button
    Action.tapButtonsInAdvancedBar(2);
    $.delay(sleep);
    target.logElementTree();

    if(target.systemVersion() == "6.1.3"){
        Assert.chooseButtonsOnAdvanced(0,6,"有影音");

    }
    else{
        Assert.chooseButtonsOnAdvanced(1,6,"有影音");
    }
    
    //Tap cancel button and navigate back to discovery screen.
    Action.tapCancelButtonInAdvancedBar();

    Action.goBackOnSearchPage();
    Action.tapReturnOnSearchBar();
    Action.goDiscoveryStream();
    Action.cleanSearches();
});

test("[1937985] Check the browse mode icon display", function () {
    target.logDeviceInfo();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    Action.pageShow();

    //Tap Advanced button
    Action.tapButtonsInAdvancedBarWhenSRP();

    //Tap browse mode button on advanced bar. And verify this button would enabled after tapped.
    Action.tapButtonsInAdvancedBar(1);

    Action.chooseCategoryBrowseMode("列表");
    $.delay(5);

    //Tap Advanced button.
    Action.tapButtonsInAdvancedBarWhenSRP();
     
    //tap 瀏覽模式 button and verify 瀏覽模式 button is enabled. the order of 瀏覽模式 button is 1.
    Action.tapButtonsInAdvancedBar(1);
    Assert.buttonOnAdvancedIsEnabled(1);
    $.delay(sleep);

    //Tap cancel button exit advanced bar.
    Action.tapCancelButtonInAdvancedBar();

    Action.goBackOnSearchPage();
    Action.tapReturnOnSearchBar();
    Action.goDiscoveryStream();
    Action.cleanSearches();
});

test("[1937986] view－check the browse mode icon display-'小圖'", function () {
    target.logDeviceInfo();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    Action.pageShow();

    //Tap Advanced button.
    Action.tapButtonsInAdvancedBarWhenSRP();
     
    //tap 瀏覽模式 button and verify 瀏覽模式 button is enabled. the order of 瀏覽模式 button is 1.
    Action.tapButtonsInAdvancedBar(1);
    Assert.buttonOnAdvancedIsEnabled(1);
    $.delay(sleep);

    Assert.buttonOnAdvancedIsEnabledShow(1,"小圖");
    Action.chooseCategoryBrowseMode("小圖");
    $.delay(sleep);

    //Go back to advanced bar switch browse mode to list view.
    Action.tapButtonsInAdvancedBarWhenSRP();
    Action.tapButtonsInAdvancedBar(1);
    $.delay(sleep);

    Action.chooseCategoryBrowseMode("列表");

    Action.goBackOnSearchPage();
    Action.tapReturnOnSearchBar();
    Action.goDiscoveryStream();
    Action.cleanSearches();
});

test("[1938004] view-check click on the name of commodity",function () {
    target.logDeviceInfo();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    Action.pageShow();

    //Tap Advanced button.
    Action.tapButtonsInAdvancedBarWhenSRP();

    //Tap browse mode button on advanced bar. And verify this button would enabled after tapped.
    Action.tapButtonsInAdvancedBar(1);
    Assert.buttonOnAdvancedIsEnabled(1);

    Action.chooseCategoryBrowseMode("列表");
    
    //tap commodity name
    Action.tapCommodityNameOnSearchResultsPage();
    $.delay(sleep);

    obj.scrollDowns(1);
    $.delay(sleep);

    var tapCommodityPictureShowPage = app.mainWindow().collectionViews()[0].cells()[1].name();

    //Verify screen successful navigated to item page.
    Assert.itemPageShowCorrectOnCoatSearchPage(tapCommodityPictureShowPage);

    Action.goBack();
    Action.goBackOnSearchPage();
    Action.tapReturnOnSearchBar();
    Action.goDiscoveryStream();
    Action.cleanSearches();
});

test("[1937993] view-Check the goods price display",function () {
    target.logDeviceInfo();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    Action.pageShow();

    //Tap Advanced button.
    Action.tapButtonsInAdvancedBarWhenSRP();

    //Tap browse mode button on advanced bar. And verify this button would enabled after tapped.
    Action.tapButtonsInAdvancedBar(1);
    Assert.buttonOnAdvancedIsEnabled(1);

    Action.chooseCategoryBrowseMode("小圖");
    $.delay(10);
    target.logElementTree();

    //first parameter is second product, second parameter is the  location of price in product cell.
    if(target.systemVersion() == "6.1.3"){
        Assert.productPriceShowCorrect(2,0);

    }
    else{
        Assert.productPriceShowCorrect(1,0);
    }
    
    //Tap Advanced button.
    Action.tapButtonsInAdvancedBarWhenSRP();

    //Tap browse mode button on advanced bar. And verify this button would enabled after tapped.
    Action.tapButtonsInAdvancedBar(1);
    Assert.buttonOnAdvancedIsEnabled(1);

    Action.chooseCategoryBrowseMode("小圖");

    Action.goBackOnSearchPage();
    Action.tapReturnOnSearchBar();
    Action.goDiscoveryStream();
    Action.cleanSearches();
});

test("[1937998] view－check the browse mode icon display－'大圖'", function () {
    target.logDeviceInfo();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    Action.pageShow();

    //Tap Advanced button.
    Action.tapButtonsInAdvancedBarWhenSRP();
     
    //tap 瀏覽模式 button and verify 瀏覽模式 button is enabled. the order of 瀏覽模式 button is 1.
    Action.tapButtonsInAdvancedBar(1);
    Assert.buttonOnAdvancedIsEnabled(1);
    $.delay(sleep);

    Assert.buttonOnAdvancedIsEnabledShow(2,"大圖");
    Action.chooseCategoryBrowseMode("大圖");
    $.delay(sleep);

    //Go back to advanced bar switch browse mode to list view.
    Action.tapButtonsInAdvancedBarWhenSRP();
    Action.tapButtonsInAdvancedBar(1);
    $.delay(sleep);

    Action.chooseCategoryBrowseMode("列表");

    Action.goBackOnSearchPage();
    Action.tapReturnOnSearchBar();
    Action.goDiscoveryStream();
    Action.cleanSearches();
});

test("[1938010] To view the tab display ", function () {
    target.logDeviceInfo();
    Action.cleanSearches();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    $.delay(sleep);

    Action.tapStoreTab();
    $.delay(10);

    Assert.checkGoodsAndStoreTabDisplay();
   
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
    Action.tapButtonOnTabBar(0);
});

test("[1937926] item list－Check the default browser mode" , function () {
    target.logDeviceInfo();
    Action.cleanSearches();
    $.delay(sleep);
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();   
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    Action.pageShow();

    //Tap Advanced button
    Action.tapButtonsInAdvancedBarWhenSRP();

    //Tap browse mode button on advanced bar. And verify this button would enabled after tapped.
    Action.tapButtonsInAdvancedBar(1);
    Assert.buttonOnAdvancedIsEnabled(1);

    Action.chooseCategoryBrowseMode("列表");

    //Check the item-list display
    Assert.checkStorelistShowCorrect();

    Action.goBackOnSearchPage();
    Action.tapReturnOnSearchBar();
    Action.goDiscoveryStream();
    Action.cleanSearches();
});

test("[1937924] item－list check 共xxxx筆結果." , function () {
    target.logDeviceInfo();
    Action.cleanSearches();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    Action.pageShow();

    //verify 共xxxx筆結果 show correct.
    if(target.systemVersion() == "6.1.3"){
        var numberOfItems = app.mainWindow().collectionViews()[0].staticTexts()[1];

    }
    else{
        var numberOfItems = app.mainWindow().collectionViews()[0].staticTexts()[0];
    }

    Assert.numberOfItemsShowCorrect(numberOfItems);

    Action.goBackOnSearchPage();
    Action.tapReturnOnSearchBar();
    Action.goDiscoveryStream();
    Action.cleanSearches();
});

test("[1937974] Check the goods pictures showed." , function () {
    target.logDeviceInfo();
    Action.cleanSearches();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    Action.pageShow();

    //check item Information display correctly
    var cellItems = app.mainWindow().collectionViews()[0].cells()[1].name();

    Assert.checkItemName(cellItems);

    if(target.systemVersion() == "6.1.3"){
        var numberOfItems = app.mainWindow().collectionViews()[0].staticTexts()[1];

    }
    else{
        var numberOfItems = app.mainWindow().collectionViews()[0].staticTexts()[0];
    }

    Assert.numberOfItemsShowCorrect(numberOfItems);

    Action.goBackOnSearchPage();
    Action.tapReturnOnSearchBar();
    Action.goDiscoveryStream();
});