Assert.checkSearchRecordPageOnRecentHisory = function () {
    $.delay(3);
    method.verifyEquals("搜尋",app.mainWindow().collectionViews()[1].staticTexts()[1].name());
};

Assert.searchSuggestionsPageDisplayOnRecentHisory = function () {
    var mainWindow = app.mainWindow();
    $.delay(5);
    method.verifyTrue(app.mainWindow().tableViews()[0].cells().length<1);
};

