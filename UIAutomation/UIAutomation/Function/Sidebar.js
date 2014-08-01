//6.30
//three
test("[1959892] Verify user can edit category preferences", function () {
    target.logDeviceInfo();
    var version = target.systemVersion();
    version = version.substring(0, version.lastIndexOf("."));
    if(version == "6.1") {
        $.delay(10);
    }
    
    Action.determineTheLoginWhenShopping();
	Action.cleanSearches();
    $.delay(sleep);
    
    //Verify user can edit category preferences and the case assert contained in action
    Action.tapButtonOnSidebarWhenCategory();

    Assert.checkReturnPageDisplay(varTestDiscoveryStreamName);
});

test("[1977532] verify settings screen" , function () {
    target.logDeviceInfo();
    Action.cleanSearches();
    Action.cleanBrowsingHistory();
    $.delay(sleep);
    
    //search records
    Action.tapCleanSearchRecordsOnSidebr(0);
    Action.tapSearchIconOnNavBar();
    Action.searchBarInput("h");
    Action.tapKeyboardSearch();
    $.delay(sleep);

    Action.tapButtonOnTabBar(0);
    Action.tapButtonOnTabBar(0);

    Action.tapSearchIconOnNavBar();
    Assert.autoCompletePageDisplayWhenRecentHisory();
    Action.tapReturnOnSearchBar();
    $.delay(5);

    //Browsing history
    Action.tapCleanSearchOnSidebr(0);
    $.delay(sleep);

    Action.tapButtonOnTabBar(0);
    Action.tapButtonOnTabBar(0);

    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese(varTestsSearchBoxInputDataCoat);
    Action.tapKeyboardSearch();
    $.delay(10);

    //Tap item on list to navigate to item page.
    Action.tapItemOnProductListScreen();

    Action.tapButtonOnTabBar(0);
    Action.tapButtonOnTabBar(0);

    //go to my account
    Action.tapButtonOnTabBar(4);

    Action.goRecentBrowse();
    $.delay(10);

    Assert.searchSuggestionsPageDisplayOnRecentHisory();

    Action.tapButtonOnTabBar(4);
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);

    Action.tapCleanSearchOnSidebr(1);
    $.delay(5);
    
    Action.tapCleanSearchRecordsOnSidebr(1);
    Action.tapButtonOnTabBar(0);
});