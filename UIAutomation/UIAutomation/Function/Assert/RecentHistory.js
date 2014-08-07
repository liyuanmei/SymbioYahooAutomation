Assert.checkSearchRecordPageOnRecentHisory = function () {
    $.delay(3);
    method.verifyEquals(varTestsSearchRecordPageOnRecentHisory,app.mainWindow().collectionViews()[1].staticTexts()[1].name());
};

Assert.searchSuggestionsPageDisplayOnRecentHisory = function () {
    var mainWindow = app.mainWindow();
    $.delay(5);
    var version = target.systemVersion();
    version = version.substring(0,1);
    if(version == "6") {
        method.verifyTrue(app.mainWindow().collectionViews()[0].cells().length<=2);
    }
    else{
        method.verifyTrue(app.mainWindow().collectionViews()[0].cells().length<=1);
    }
};

//6.30
Assert.autoCompletePageDisplayWhenRecentHisory = function () {
    $.delay(5);
    method.verifyTrue(app.mainWindow().tableViews()[0].cells().length<1);
};

Assert.checkGoodsTextExistOnRecentBrowse =function (i,j) {
    $.delay(sleep);
    method.verifyTrue(app.mainWindow().collectionViews()[0].cells()[i].staticTexts()[j].isEnabled());
};
