Action.tapSearchIconOnNavBar = function () {
    $.delay(sleep);
    var version = target.systemVersion();
    version = version.substring(0,1);
    if(version == "6") {
        var tapSearchIconOnNavBar = app.navigationBar().buttons()[1];

        method.checkInstanceExists(tapSearchIconOnNavBar);
        tapSearchIconOnNavBar.tap();
    }
    else{
        var tapSearchIconOnNavBar = app.navigationBar().buttons()[2];
        method.checkInstanceExists(app.navigationBar().buttons()[2]);
        tapSearchIconOnNavBar.tap();
    }
};

Action.tapBackOnSearchBar = function () {
    $.delay(sleep);
    var version = target.systemVersion();
    version = version.substring(0,1);
    if(version == "6") {
        var tapBackOnSearchBar = app.mainWindow().buttons()[0];

        method.checkInstanceExists(tapBackOnSearchBar);
        tapBackOnSearchBar.tap();
    }
    else{
        var tapBackOnSearchBar = app.mainWindow().buttons()[1];
        method.checkInstanceExists(app.mainWindow().buttons()[1]);
        tapBackOnSearchBar.tap();
    }
};

Action.searchBarInput = function (skey) {
    $.delay(sleep);
    var keyboard = app.keyboard();
    keyboard.typeString(skey);
};

Action.tapIconPlusOnTableView = function () {
    $.delay(sleep);
    var tapIconPlusOnTableView = app.mainWindow().tableViews()[0].cells()[1].buttons()[0];

    method.checkInstanceExists(app.mainWindow().tableViews()[0].cells()[1].buttons()[0]);
    tapIconPlusOnTableView.tap();
};

//Click the icon plue different twice
Action.clickOnTheDifferentIconPlus = function () {
    $.delay(sleep);
    var clickOnTheDifferentIconPlus = app.mainWindow().tableViews()[0].cells()[0].buttons()[0];

    method.checkInstanceExists(clickOnTheDifferentIconPlus);
    clickOnTheDifferentIconPlus.tap();
};

Action.tapKeyboardSearch = function () {
    $.delay(sleep);
    var tapKeyboardSearch = app.keyboard().buttons()[varTestsKeyboardSearch];
    method.checkInstanceExists(app.keyboard().buttons()[varTestsKeyboardSearch]);
    tapKeyboardSearch.tap();
};

Action.tapClean = function () {
    $.delay(sleep);
    var tapClean = app.mainWindow().textFields()[0].buttons()[0];
    method.checkInstanceExists(app.mainWindow().textFields()[0].buttons()[0]);
    tapClean.tap();
};

Action.tapKeyboardDelete = function () {
    $.delay(sleep);
    var app = target.frontMostApp();
    var tapKeyboardDelete = app.keyboard().keys()[varTestsKeyboardDelete];
    tapKeyboardDelete.tap();
};

//clean Searches
Action.cleanSearches = function () {
    $.delay(3);
    var version = target.systemVersion();
    version = version.substring(0,1);
    if(version == "6") {
        var menuButton = app.navigationBar().buttons()[0];

        method.checkInstanceExists(menuButton);
        menuButton.tap();
        $.delay(2);
    
        var tableViews = app.windows()[0].tableViews()[0];
        var tableCells = tableViews.cells()[varTestsSettings];

        method.checkInstanceExists(tableCells);
        tableCells.tap();
        $.delay(2);
    
        UIATarget.onAlert = function onAlert() {
            return true;
        }

        var collectionViews = app.windows()[0].collectionViews()[0];
        var cleanSearchHistory = collectionViews.cells()[1].staticTexts()[0];

        method.checkInstanceExists(cleanSearchHistory);
        cleanSearchHistory.tap();
        $.delay(sleep);
    
        var determineButton = app.alert().buttons()[1];
        method.checkInstanceExists(determineButton);
        determineButton.tap();
        $.delay(2);
    
        var closeButton = app.windows()[0].navigationBar().buttons()[0];

        method.checkInstanceExists(closeButton);
        closeButton.tap();
        $.delay(sleep);

        menuButton.tap();
    }
    else{
        var menuButton = app.navigationBar().buttons()[1];
        method.checkInstanceExists(menuButton);
        menuButton.tap();
        $.delay(sleep);
    
        var tableViews = app.windows()[0].tableViews()[0];
        var tableCells = tableViews.cells()[varTestsSettings];
        method.checkInstanceExists(tableCells);
        tableCells.tap();
        $.delay(sleep);
    
        UIATarget.onAlert = function onAlert() {
            return true;
        }
        var collectionViews = app.windows()[0].collectionViews()[0];
        var cleanSearchHistory = collectionViews.cells()[1].staticTexts()[0];
        method.checkInstanceExists(cleanSearchHistory);
        cleanSearchHistory.tap();
        $.delay(sleep);
    
        var determineButton = app.alert().buttons()[1];
        method.checkInstanceExists(determineButton);
        determineButton.tap();
        $.delay(sleep);
    
        var closeButton = app.windows()[0].navigationBar().buttons()[1];
        closeButton.tap();
        $.delay(sleep);
        
        menuButton.tap();
    }
};

Action.searchBarInputChinese = function (sValue) {
    $.delay(sleep);
    var searchField = app.mainWindow().textFields()[0];
    searchField.setValue(sValue);
};

Action.tapReturnOnSearchBar = function () {
    $.delay(sleep);
    var tapReturnOnSearchBar = app.mainWindow().buttons()[0];
    method.checkInstanceExists(app.mainWindow().buttons()[0]);
    
    tapReturnOnSearchBar.tap();
};

Action.tapIconPlusOnFirstFloorTableView = function () {
    $.delay(sleep);
    var tapIconPlusOnFirstFloorTableView = app.mainWindow().tableViews()[0].cells()[1].buttons()[0];
    method.checkInstanceExists(app.mainWindow().tableViews()[0].cells()[1].buttons()[0]);
    tapIconPlusOnFirstFloorTableView.tap();
 };

//Click the icon plue different twice
Action.clickOnTheDifferentIconPlusOnFirstFloorTableView = function () {
    $.delay(sleep);
    var  clickOnTheDifferentIconPlusOnFirstFloorTableView = app.mainWindow().tableViews()[0].cells()[0].buttons()[0];
    method.checkInstanceExists(app.mainWindow().tableViews()[0].cells()[0].buttons()[0]);
    clickOnTheDifferentIconPlusOnFirstFloorTableView.tap();
};

Action.goBackOnSearchPage = function () {
    $.delay(sleep);
    var version = target.systemVersion();
    version = version.substring(0,1);
    if(version == "6") {
        var goBack = app.navigationBar().buttons()[1];

        method.checkInstanceExists(goBack);
        goBack.tap();
    }
    else{
        var goBack = app.navigationBar().buttons()[2];
        method.checkInstanceExists(app.navigationBar().buttons()[2]);
        goBack.tap();
    }
};

Action.goApparelCategoryWhenSearchSettingOpen = function (){
    $.delay(sleep);
    app.tabBar().buttons()[2].tap();
    
    $.delay(sleep);
    app.mainWindow().tableViews()[0].cells()[0].tap();
};

Action.backToAllCategory = function () {
    $.delay(sleep);
    var version = target.systemVersion();
    version = version.substring(0,1);
    if(version == "6") {
         var backToAllCategory = app.navigationBar().buttons()[0];

        method.checkInstanceExists(backToAllCategory);
        backToAllCategory.tap();
    }
    else{
        app.navigationBar().tapWithOptions({tapOffset:{x:0.04, y:0.03}});
    }
};

Action.tapSearchIconOnApparelCategory = function () {
    $.delay(sleep);
    var version = target.systemVersion();
    version = version.substring(0,1);
    if(version == "6") {
        var tapSearchIconOnApparelCategory = app.navigationBar().buttons()[1];

        method.checkInstanceExists(tapSearchIconOnApparelCategory);
        tapSearchIconOnApparelCategory.tap();
    }
    else{
        var tapSearchIconOnApparelCategory = app.navigationBar().buttons()[2];
        method.checkInstanceExists(app.navigationBar().buttons()[2]);
        tapSearchIconOnApparelCategory.tap();
    }
};

//04-25-2014
Action.goFashionWomenClothingCategory = function () {
    $.delay(sleep);
    var goFashionWomenClothingCategory = app.mainWindow().collectionViews()[0].cells()[3];
    method.checkInstanceExists(app.mainWindow().collectionViews()[0].cells()[3]);
    goFashionWomenClothingCategory.tap();
};

Action.tapBackSubclassification = function () {
    $.delay(sleep);
    var version = target.systemVersion();
    version = version.substring(0,1);
    if(version == "6") {
        var tapBackSubclassification = app.navigationBar().buttons()[0];

        method.checkInstanceExists(tapBackSubclassification);
        tapBackSubclassification.tap();
    }
    else{
        var tapBackSubclassification = app.navigationBar().buttons()[1];
        method.checkInstanceExists(app.navigationBar().buttons()[1]);
        tapBackSubclassification.tap();
    }
};

Action.goCoatCategory = function () {
    $.delay(sleep);
    var goCoatCategory = app.mainWindow().collectionViews()[0].cells()[1];
    method.checkInstanceExists(app.mainWindow().collectionViews()[0].cells()[1]);
    goCoatCategory.tap();
};

Action.tapGoodsButton = function () {
    $.delay(sleep);
    var version = target.systemVersion();
    version = version.substring(0,1);
    if(version == "6") {
        var tapGoodsButton = app.mainWindow().collectionViews()[0].cells()[0].segmentedControls()[0].buttons()[1];

        method.checkInstanceExists(tapGoodsButton);
        tapGoodsButton.tap();
    }
    else{
        var tapGoodsButton = app.mainWindow().collectionViews()[0].cells()[0].buttons()[1];
        method.checkInstanceExists(app.mainWindow().collectionViews()[0].cells()[0].buttons()[1]);
        tapGoodsButton.tap();
    }
};

Action.englishInputMethod = function () {
    $.delay(sleep);  
    //veriy keyboard has a "Delete" button
    while(app.keyboard().keys()["space"].isEnabled() != 1)
    {
        var tapSwitchInputMethod = app.keyboard().buttons()["Next keyboard"];
        tapSwitchInputMethod.tap();
        $.delay(sleep);
    }
};

Action.goCategoryWhenSearchSettingOpen = function () {
    $.delay(sleep);
    var version = target.systemVersion();
    version = version.substring(0,1);
    if(version == "6") {
        var goCategoryWhenSearchSettingOpen = app.tabBar().buttons()[2];
        method.checkInstanceExists(app.tabBar().buttons()[2]);
        goCategoryWhenSearchSettingOpen.tap();
    }
    else{
        var searchButton = app.tabBar().buttons()[2];
        method.checkInstanceExists(searchButton);
        searchButton.tap();
    }
};

Action.repeatInputWhenSearch = function () {
    for (var i = 0; i < 11 ; i++) {
        $.delay(sleep);
        Action.searchBarInput("1");
        Action.tapKeyboardSearch();
        Action.goBackOnSearchPage();  
    };
};

Action.repeatChooseWhenSearch = function () {
    $.delay(sleep);
    var version = target.systemVersion();
    version = version.substring(0,1);
    if(version == "6") {
       for (var i = 0; i < 4 ; i++) {
           app.mainWindow().tableViews()[0].cells()[i].staticTexts()[0].tap();
           Action.goBackOnSearchPage();
       };
    }
    else{
        for (var i = 0; i < 10 ; i++) {
           app.mainWindow().tableViews()[0].cells()[i].staticTexts()[0].tap();
           Action.goBackOnSearchPage();
       };
    }
};

Action.tapStoreTab = function () {
    $.delay(sleep);
    var version = target.systemVersion();
    version = version.substring(0,1);
    if(version == "6") {
        var tapStoreTab = app.mainWindow().collectionViews()[0].cells()[0].segmentedControls()[0].buttons()[1];
        method.checkInstanceExists(app.mainWindow().collectionViews()[0].cells()[0].segmentedControls()[0].buttons()[1]);
    }
    else{
        var tapStoreTab = app.mainWindow().collectionViews()[0].cells()[0].buttons()[1];
        method.checkInstanceExists(app.mainWindow().collectionViews()[0].cells()[0].buttons()[1]);
    }
    tapStoreTab.tap();
};

Action.clickTokyoStore = function () {
    $.delay(sleep);
    app.mainWindow().collectionViews()[0].tapWithOptions({tapOffset:{x:0.51, y:0.55}});    
};

Action.tapShoppingInformationPage = function () {
    $.delay(sleep);
    var tokyoStore = app.navigationBar().buttons()[0];
    method.checkInstanceExists(app.navigationBar().buttons()[0]);
    tokyoStore.tap();
    target.logElementTree();
    $.delay(3);

    var tapShoppingInformationPage = app.mainWindow().tableViews()[0].cells()[varTestsShoppingInformationPage];
    method.checkInstanceExists(app.mainWindow().tableViews()[0].cells()[varTestsShoppingInformationPage]);
    tapShoppingInformationPage.tap();
};

Action.tapGoodsInTokyoStore = function () {
    $.delay(sleep);
    var tapGoodsInTokyoStore = app.mainWindow().collectionViews()[0].cells()[2];
    method.checkInstanceExists(app.mainWindow().collectionViews()[0].cells()[2]);
    tapGoodsInTokyoStore.tap();
};
/**
Action.doSearch = function (sKeyWords) {
    //tap search icon on navigation bar.
    Action.tapSearchIconOnNavBar();

    //check keyboard is english keyboard.
    Action.englishInputMethod();

    //inpurt keywords.
    Action.searchBarInputChinese(sKeyWords);

    //tap search button.
    Action.tapKeyboardSearch();
    $.delay(sleep);
};
**/
Action.tapClassificationButtonWhenS = function () {
    $.delay(sleep);
    var version = target.systemVersion();
    version = version.substring(0,1);
    if(version == "6") {
        var tapGoodsButton = app.mainWindow().collectionViews()[0].cells()[0].segmentedControls()[0].buttons()[0];
        method.checkInstanceExists(app.mainWindow().collectionViews()[0].cells()[0].segmentedControls()[0].buttons()[0]);
        tapGoodsButton.tap();
    }
    else{
        var tapGoodsButton = app.mainWindow().collectionViews()[0].cells()[0].buttons()[0];
        method.checkInstanceExists(app.mainWindow().collectionViews()[0].cells()[0].buttons()[0]);
        tapGoodsButton.tap();
    }
};

//6.9
Action.tapDetermineInAdvancedBarWhenSRP = function () {
    $.delay(sleep);
    var version = target.systemVersion();
    version = version.substring(0,1);
    if(version == "6") {
        var tapDetermineInAdvancedBarWhenSRP = app.mainWindow().navigationBar().buttons()[varTestsDetermine];
        method.checkInstanceExists(app.mainWindow().navigationBar().buttons()[varTestsDetermine]);
        tapDetermineInAdvancedBarWhenSRP.tap();
    }
    else{
        var tapDetermineInAdvancedBarWhenSRP = app.navigationBar().buttons()[varTestsDetermine];
        method.checkInstanceExists(app.navigationBar().buttons()[varTestsDetermine]);
        tapDetermineInAdvancedBarWhenSRP.tap();
    }
    
};

Action.tapClearButtonOnFilterScreenInAdvancedBarWhenSRP = function() {
    $.delay(sleep);

    var clearButton = app.mainWindow().buttons()[0];

    //wait clear button become visible.
    clearButton.waitUntilVisible(20);

    //tap clear button.
    clearButton.tap();
};

Action.tapToSearchAllCategories = function () {
    $.delay(sleep);
    var tapToSearchAllCategories = app.mainWindow().collectionViews()[0].buttons()[varTestsNoInputTheSearchBoxgWhengoCategoryWhenClass];
    method.checkInstanceExists(tapToSearchAllCategories);
    tapToSearchAllCategories.tap();
};