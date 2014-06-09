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

Action.slidingCommodityPage = function () {
    $.delay(3);
    app.mainWindow().collectionViews()[0].dragInsideWithOptions({startOffset:{x:0.51, y:0.84}, endOffset:{x:0.50, y:0.47}, duration:1.8});
};

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

Action.tapClearButtonOnFilterScreenWhenSRP = function() {
    $.delay(sleep);
    var clearButton = app.mainWindow().buttons()["清除"];
    method.checkInstanceExists(app.mainWindow().buttons()["清除"].tap);

    //tap clear button.
    clearButton.tap();
};

//6.6.
Action.tapAllCoatgoryWhenSRP = function () {
   $.delay(sleep);
   var tapAllCoatgoryWhenSRP = app.mainWindow().collectionViews()[0].buttons()[0];
   method.checkInstanceExists(app.mainWindow().collectionViews()[0].buttons()[0].tap);
   tapAllCoatgoryWhenSRP.tap();
};

Action.tapSearchResultOfStore = function () {
    $.delay(sleep);
    var searchResultOfStore = app.mainWindow().collectionViews()[0].cells()[1].staticTexts()[0];
    method.checkInstanceExists(app.mainWindow().collectionViews()[0].cells()[1].staticTexts()[0].tap);
    searchResultOfStore.tap();
};

Action.tapSearchIconOnNavBarWhenSRP = function() {
    $.delay(sleep);
    var tapSearchIconOnNavBar = app.navigationBar().buttons()[4];
    method.checkInstanceExists(app.navigationBar().buttons()[4].tap);
    tapSearchIconOnNavBar.tap();
};

Action.tapReturnOnSearchBarWhenSRP = function () {
    $.delay(sleep);
    var returnOnSearchBarWhenSRP = app.windows()[0].buttons()[0];
    method.checkInstanceExists(app.windows()[0].buttons()[0].tap);
    returnOnSearchBarWhenSRP.tap();
};

Action.tapButtonsInAdvancedBarWhenSRPStore = function () {
    $.delay(sleep);
    var tapButtonsInAdvancedBarWhenSRPStore = app.mainWindow().collectionViews()[0].buttons()[0];

    method.checkInstanceExists(app.mainWindow().collectionViews()[0].buttons()[0].tap);
    tapButtonsInAdvancedBarWhenSRPStore.tap();
};

//6.9
Action.tapStoreGoodsNum = function () {
    $.delay(sleep);
    var tapStoreGoodsNum = app.mainWindow().collectionViews()[0].cells()[1].staticTexts()[2];
    method.checkInstanceExists(app.mainWindow().collectionViews()[0].cells()[1].staticTexts()[2].tap);
    tapStoreGoodsNum.tap();
};