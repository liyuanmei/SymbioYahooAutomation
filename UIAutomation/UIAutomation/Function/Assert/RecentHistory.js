Assert.checkSearchRecordPageOnRecentHisory = function () {
    $.delay(3);
    method.verifyEquals("搜尋",app.mainWindow().collectionViews()[1].staticTexts()[1].name());
};

Assert.searchSuggestionsPageDisplayOnRecentHisory = function () {
    var mainWindow = app.mainWindow();
    $.delay(5);
    if (target.systemVersion() == "6.1.3" || target.systemVersion() == "6.1.4") {
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
