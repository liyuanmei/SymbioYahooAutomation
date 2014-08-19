test("[1977497] [bug case]search后查看store list然後在返回再查看store info." , function () {
    target.logDeviceInfo();
    var version = target.systemVersion();
    version = version.substring(0,1);
    if(version == "6") {
        $.delay(10);
    }
    
    Action.determineTheLoginWhenShopping();
    Action.cleanSearches();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese(varTestsSearchBoxInputDataStore5);
    Action.tapKeyboardSearch();
    Action.pageShow();

    var checkStoreListHaveData = app.mainWindow().collectionViews()[0].cells().length;
    if(checkStoreListHaveData<=2){
        //check list view
        Assert.longtextSearchPageDisplay();
    }
    else{
        //Changes in the data
        Assert.checkFavoriteStoreCellsShowCorrectly 
    }

    Action.tapStoreTab();
    $.delay(5);

    Action.tapSearchResultOfStore();
    $.delay(10);

    //check list view
    var checkStoreListHaveData = app.mainWindow().collectionViews()[0].cells().length;
    if(checkStoreListHaveData<=2){
        //check list view
        Assert.longtextSearchPageDisplay();
    }
    else{
        //Changes in the data
        Assert.checkFavoriteStoreCellsShowCorrectly 
    }

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
    Action.searchBarInputChinese(varTestsSearchBoxInputDatas);
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