test("[1977497] [bug case]search后查看store list然後在返回再查看store info." , function () {
    target.logDeviceInfo();
    Action.cleanSearches();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("S.DIAMOND鑽石糖甜點");
    Action.tapKeyboardSearch();
    Action.pageShow();
    Assert.longtextSearchPageDisplay();

    Action.tapStoreTab();
    $.delay(sleep);

    Action.tapSearchResultOfStore();
    $.delay(3);

    Assert.longtextSearchPageDisplay();

    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
    Action.tapButtonOnTabBar(0);
});

test("[1977503] [bug case]verify escape character shouldn’t show in store list. (#39;)" , function () {
    target.logDeviceInfo();
    Action.cleanSearches();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("s");
    Action.tapKeyboardSearch();
    $.delay(5);

    Action.tapStoreTab();
    $.delay(10);

    Assert.checkStorelistShowCorrect();
    
    var storeName = app.mainWindow().collectionViews()[0].cells()[1].staticTexts()[0];
    Assert.elementsShouldContainTextWhenSearch(storeName,"#39");

    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
    Action.tapButtonOnTabBar(0);
});