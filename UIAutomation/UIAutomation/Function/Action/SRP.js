Action.searchBarInputChinese = function (sValue) {
    $.delay(sleep);
    var app = target.frontMostApp();
    var searchField = app.mainWindow().textFields()[0];
    searchField.setValue(sValue);
};

Action.tapGoodsTab = function () {
    $.delay(sleep);
    var version = target.systemVersion();
    version = version.substring(0, version.lastIndexOf("."));
    if(version == "6.1") {
        var tapGoodsTab = app.mainWindow().collectionViews()[0].cells()[0].segmentedControls()[0].buttons()[0];
        method.checkInstanceExists(app.mainWindow().collectionViews()[0].cells()[0].segmentedControls()[0].buttons()[0]);
        tapGoodsTab.tap();
    }
    else{
        var tapGoodsTab = app.mainWindow().collectionViews()[0].cells()[0].buttons()[0];
        method.checkInstanceExists(app.mainWindow().collectionViews()[0].cells()[0].buttons()[0]);
        tapGoodsTab.tap();
    }
};

Action.tapButtonsInAdvancedBarWhenSRP = function () {
    $.delay(sleep);
    var tapButtonsInAdvancedBarWhenSRP = app.mainWindow().collectionViews()[0].buttons()[varTestAdvancedBar];

    method.checkInstanceExists(app.mainWindow().collectionViews()[0].buttons()[varTestAdvancedBar]);
    tapButtonsInAdvancedBarWhenSRP.tap();
};

Action.tapbuttonExistOnNavigationBar = function (i) {
    $.delay(sleep);
    var tapbuttonExistOnNavigationBar = app.navigationBar().buttons()[i];
    method.checkInstanceExists(app.navigationBar().buttons()[i]);
    tapbuttonExistOnNavigationBar.tap();
};

Action.tapCommodityNameOnSearchResultsPage = function () {
    $.delay(sleep);
    var tapCommodityNameOnSearchResultsPage = app.mainWindow().collectionViews()[0].cells()[1].staticTexts()[0];
    method.checkInstanceExists(app.mainWindow().collectionViews()[0].cells()[1].staticTexts()[0]);
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
    method.checkInstanceExists(app.mainWindow().collectionViews()[0].cells()[1].staticTexts()[2]);
    tapCommodityNumber.tap();
}; 

Action.tapheartIconOnStoreWhenSRP = function () {
    $.delay(sleep);
    var version = target.systemVersion();
    version = version.substring(0, version.lastIndexOf("."));
    if(version == "6.1") { 
        var tapheartIconOnStoreWhenSRP = app.mainWindow().collectionViews()[0].cells()[1].buttons()[0];
        method.checkInstanceExists(app.mainWindow().collectionViews()[0].cells()[1].buttons()[0]);
        tapheartIconOnStoreWhenSRP.tap();
    }
    else{
        var tapheartIconOnStoreWhenSRP = app.mainWindow().collectionViews()[0].cells()[1].buttons()[0];
        method.checkInstanceExists(app.mainWindow().collectionViews()[0].cells()[1].buttons()[0]);
        tapheartIconOnStoreWhenSRP.tap();
    }
};

Action.selectOptionOnSortingTabWhenSRP = function (option) {
    $.delay(sleep);
    var sortTabTableView = app.mainWindow().tableViews()[0];
    var option = sortTabTableView.cells()[option];
    
    if (Assert.buttonExist(option) == true) {

        method.checkInstanceExists(app.mainWindow().tableViews()[0].cells()[option]);
        option.tap();
    }
    else {
        $.error (option + " button cannot found.");
    }
};

Action.tapClearButtonOnFilterScreenWhenSRP = function() {
    $.delay(sleep);
    var clearButton = app.mainWindow().buttons()[varTestsCleanButtons];
    method.checkInstanceExists(app.mainWindow().buttons()[varTestsCleanButtons]);

    //tap clear button.
    clearButton.tap();
};

//6.6.
Action.tapAllCoatgoryWhenSRP = function () {
   $.delay(sleep);
   var tapAllCoatgoryWhenSRP = app.mainWindow().collectionViews()[0].buttons()[0];
   method.checkInstanceExists(app.mainWindow().collectionViews()[0].buttons()[0]);
   tapAllCoatgoryWhenSRP.tap();
};

Action.tapSearchResultOfStore = function () {
    $.delay(sleep);
    var searchResultOfStore = app.mainWindow().collectionViews()[0].cells()[1].staticTexts()[0];
    method.checkInstanceExists(app.mainWindow().collectionViews()[0].cells()[1].staticTexts()[0]);
    searchResultOfStore.tap();
};

Action.tapSearchIconOnNavBarWhenSRP = function() {
    $.delay(sleep);
    var version = target.systemVersion();
    version = version.substring(0, version.lastIndexOf("."));
    if(version == "6.1") { 
        var tapSearchIconOnNavBar = app.navigationBar().buttons()[3];
        method.checkInstanceExists(app.navigationBar().buttons()[3]);
        tapSearchIconOnNavBar.tap();
    }
    else{
        var tapSearchIconOnNavBar = app.navigationBar().buttons()[4];
        method.checkInstanceExists(app.navigationBar().buttons()[4]);
        tapSearchIconOnNavBar.tap();
    }
};

Action.tapReturnOnSearchBarWhenSRP = function () {
    $.delay(sleep);
    var returnOnSearchBarWhenSRP = app.windows()[0].buttons()[0];
    method.checkInstanceExists(app.windows()[0].buttons()[0]);
    returnOnSearchBarWhenSRP.tap();
};

Action.tapButtonsInAdvancedBarWhenSRPStore = function () {
    $.delay(sleep);
    var tapButtonsInAdvancedBarWhenSRPStore = app.mainWindow().collectionViews()[0].buttons()[0];

    method.checkInstanceExists(app.mainWindow().collectionViews()[0].buttons()[0]);
    tapButtonsInAdvancedBarWhenSRPStore.tap();
};

//6.9
Action.tapStoreGoodsNum = function () {
    $.delay(sleep);
    var tapStoreGoodsNum = app.mainWindow().collectionViews()[0].cells()[1].staticTexts()[2];
    method.checkInstanceExists(app.mainWindow().collectionViews()[0].cells()[1].staticTexts()[2]);
    tapStoreGoodsNum.tap();
};

//6.10
Action.tapButtonsInAdvancedBarWhenOptions = function () {
    $.delay(sleep);
    var tapButtonsInAdvancedBarWhenSRP = app.mainWindow().collectionViews()[0].buttons()[0];

    method.checkInstanceExists(app.mainWindow().collectionViews()[0].buttons()[1]);
    tapButtonsInAdvancedBarWhenSRP.tap();
};

Action.determineTheLoginWhenSRP = function () {
    Action.cleanSearches();
    $.delay(10);
    Action.tapButtonOnTabBar(4);
    var logined = app.mainWindow().images()[1].name();
    if(logined == "img-default-profile.png"){
        $.delay(5);
        //go back home page
        Action.tapButtonOnTabBar(0);
    }
    else{
        $.delay(5);
        var login = app.mainWindow().tableViews()[0].cells()["Add Account"].staticTexts()[0].name();

        if(login == "Add Account"){
            //Tap exit button exit login window.
            Action.exitLoginWindow();
            $.delay(sleep);

            Action.tapAddAccountOnLogin("mobilestoresymbio4", "Aa123456");
            $.delay(12);

            Action.tapButtonOnTabBar(0);
        }
        else{
            //Tap exit button exit login window.
            Action.exitLoginWindow();
            $.delay(sleep);
            //Verify login window show correct.
            Action.doUserLogin("mobilestoresymbio4", "Aa123456");
            $.delay(12);

            Action.tapButtonOnTabBar(0);
        }
    }
};