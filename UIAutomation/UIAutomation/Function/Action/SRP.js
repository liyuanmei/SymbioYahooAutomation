Action.searchBarInputChinese = function (sValue) {
    $.delay(sleep);
    var app = target.frontMostApp();
    var searchField = app.mainWindow().textFields()[0];
    searchField.setValue(sValue);
};

Action.tapGoodsTab = function () {
    $.delay(sleep);
    var tapGoodsTab = app.mainWindow().collectionViews()[0].cells()[0].buttons()[0];
    method.checkInstanceExists(app.mainWindow().collectionViews()[0].cells()[0].buttons()[0].tap);
    tapGoodsTab.tap();
};

Action.tapButtonsInAdvancedBarWhenSRP = function () {
    $.delay(sleep);
    var tapButtonsInAdvancedBarWhenSRP = app.mainWindow().collectionViews()[0].buttons()[1];

    method.checkInstanceExists(app.mainWindow().collectionViews()[0].buttons()[1].tap);
    tapButtonsInAdvancedBarWhenSRP.tap();
};

Action.tapbuttonExistOnNavigationBar = function (i) {
    $.delay(sleep);
    var tapbuttonExistOnNavigationBar = app.navigationBar().buttons()[i];
    method.checkInstanceExists(app.navigationBar().buttons()[i].tap);
    tapbuttonExistOnNavigationBar.tap();
};

Action.tapCommodityNameOnSearchResultsPage = function () {
    $.delay(sleep);
    var tapCommodityNameOnSearchResultsPage = app.mainWindow().collectionViews()[0].cells()[1].staticTexts()[0];
    method.checkInstanceExists(app.mainWindow().collectionViews()[0].cells()[1].staticTexts()[0].tap);
    tapCommodityNameOnSearchResultsPage.tap();
};

Action.tapCommodityPictureOnSearchResultsPage = function () {
    $.delay(sleep);
    app.mainWindow().collectionViews()[0].tapWithOptions({tapOffset:{x:0.20, y:0.37}});
};

Action.goMayFavoritesScreenWhenSRP = function () {
    $.delay(sleep);
    var tableView = app.mainWindow().tableViews()[0];
    var goMayFavoritesScreenWhenSRP = tableView.cells()[3];
    goMayFavoritesScreenWhenSRP.tap();
};

Action.tapCommodityPictureOnLargePhotoView = function () {
    $.delay(sleep);
    app.mainWindow().collectionViews()[0].tapWithOptions({tapOffset:{x:0.53, y:0.56}});
};

//05-08-2014
Action.slidingCommodityPage = function () {
    $.delay(3);
    app.mainWindow().collectionViews()[0].dragInsideWithOptions({startOffset:{x:0.51, y:0.84}, endOffset:{x:0.50, y:0.47}, duration:1.8});
};

//05-12-2014
Action.tapStorePicture = function () {
    $.delay(sleep);
    app.mainWindow().collectionViews()[0].tapWithOptions({tapOffset:{x:0.51, y:0.32}});
};

Action.tapCommodityNumber = function () {
    $.delay(sleep);
    var tapCommodityNumber = app.mainWindow().collectionViews()[0].cells()[1].staticTexts()[2];
    method.checkInstanceExists(app.mainWindow().collectionViews()[0].cells()[1].staticTexts()[2].tap);
    tapCommodityNumber.tap();
}; 

Action.tapheartIconOnStoreWhenSRP = function () {
    $.delay(sleep);
    var tapheartIconOnStoreWhenSRP = app.mainWindow().collectionViews()[0].cells()[1].buttons()[0];
    method.checkInstanceExists(app.mainWindow().collectionViews()[0].cells()[1].buttons()[0].tap);
    tapheartIconOnStoreWhenSRP.tap();
};

//05-19-2014
Action.selectOptionOnSortingTabWhenSRP = function (option) {
    $.delay(sleep);
    var sortTabTableView = app.mainWindow().tableViews()[0];
    var option = sortTabTableView.cells()[option];
    
    if (Assert.buttonExist(option) == true) {

        method.checkInstanceExists(app.mainWindow().tableViews()[0].cells()[option].tap);
        option.tap();
    }
    else {
        $.error (option + " button cannot found.");
    }
};

//05-20-2014
Action.tapClearButtonOnFilterScreenWhenSRP = function() {
    $.delay(sleep);
    var clearButton = app.mainWindow().buttons()["清除"];
    method.checkInstanceExists(app.mainWindow().buttons()["清除"].tap);

    //tap clear button.
    clearButton.tap();
};