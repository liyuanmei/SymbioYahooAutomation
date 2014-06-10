Action.tapSearchIconOnNavBar = function () {
    $.delay(sleep);
        if(target.systemVersion() == "6.1.3"){
        $.delay(sleep);
        var tapSearchIconOnNavBar = app.navigationBar().buttons()[1];

        method.checkInstanceExists(tapSearchIconOnNavBar.tap);
        tapSearchIconOnNavBar.tap();
    }
    else{
        var tapSearchIconOnNavBar = app.navigationBar().buttons()[2];
        method.checkInstanceExists(app.navigationBar().buttons()[2].tap);
        tapSearchIconOnNavBar.tap();
    }
};

Action.tapBackOnSearchBar = function () {
    $.delay(sleep);
    if(target.systemVersion() == "6.1.3"){
    var tapBackOnSearchBar = app.mainWindow().buttons()[0];

    method.checkInstanceExists(tapBackOnSearchBar.tap);
    tapBackOnSearchBar.tap();
    }
    else{
    var tapBackOnSearchBar = app.mainWindow().buttons()[1];
    method.checkInstanceExists(app.mainWindow().buttons()[1].tap);
    tapBackOnSearchBar.tap();
    }
};

Action.searchBarInput = function (skey) {
    $.delay(sleep);
    var keyboard = app.keyboard();

    method.checkInstanceExists(keyboard.typeString);
    keyboard.typeString(skey);
};

Action.tapIconPlusOnTableView = function () {
    $.delay(sleep);
    var tapIconPlusOnTableView = app.mainWindow().tableViews()[1].cells()[1].buttons()[0];
    method.checkInstanceExists(app.mainWindow().tableViews()[1].cells()[1].buttons()[0].tap);
    tapIconPlusOnTableView.tap();
};

//Click the icon plue different twice.
Action.clickOnTheDifferentIconPlus = function () {
    $.delay(sleep);
    var clickOnTheDifferentIconPlus = app.mainWindow().tableViews()[1].cells()[0].buttons()[0];
    method.checkInstanceExists(app.mainWindow().tableViews()[1].cells()[0].buttons()[0].tap);
    clickOnTheDifferentIconPlus.tap();
};

Action.tapKeyboardSearch = function () {
    $.delay(sleep);
    var tapKeyboardSearch = app.keyboard().buttons()["Search"];
    method.checkInstanceExists(app.keyboard().buttons()["Search"].tap);
    tapKeyboardSearch.tap();
};

Action.tapClean = function () {
    $.delay(sleep);
    var tapClean = app.mainWindow().textFields()[0].buttons()[0];
    method.checkInstanceExists(app.mainWindow().textFields()[0].buttons()[0].tap);
    tapClean.tap();
};

Action.tapKeyboardDelete = function () {
    $.delay(sleep);
    var app = target.frontMostApp();
    var tapKeyboardDelete = app.keyboard().keys()["Delete"];
    tapKeyboardDelete.tap();
};

//clean Searches
Action.cleanSearches = function () {
    $.delay(sleep);
    var menuButton = app.navigationBar().buttons()[1];
    menuButton.tap();
    $.delay(sleep);
    
    var tableViews = app.windows()[0].tableViews()[0];
    var tableCells = tableViews.cells()["Settings"];
    tableCells.tap();
    $.delay(sleep);
    
    UIATarget.onAlert = function onAlert() {
        return true;
    }
    var collectionViews = app.windows()[0].collectionViews()[0];
    var cleanSearchHistory = collectionViews.cells()[1].staticTexts()[0];
    cleanSearchHistory.tap();
    $.delay(sleep);
    
    var determineButton = app.alert().buttons()[1];
    determineButton.tap();
    
    var closeButton = app.windows()[0].navigationBar().buttons()[1];
    closeButton.tap();
    menuButton.tap();
};

Action.searchBarInputChinese = function (sValue) {
    $.delay(sleep);
    var searchField = app.mainWindow().textFields()[0];

    method.checkInstanceExists(searchField.setValue);
    searchField.setValue(sValue);
};

Action.tapReturnOnSearchBar = function () {
    $.delay(sleep);
    var tapReturnOnSearchBar = app.mainWindow().buttons()[0];
    method.checkInstanceExists(app.mainWindow().buttons()[0].tap);
    
    tapReturnOnSearchBar.tap();
};

Action.tapIconPlusOnFirstFloorTableView = function () {
    $.delay(sleep);
    var tapIconPlusOnFirstFloorTableView = app.mainWindow().tableViews()[0].cells()[1].buttons()[0];
    method.checkInstanceExists(app.mainWindow().tableViews()[0].cells()[1].buttons()[0].tap);
    tapIconPlusOnFirstFloorTableView.tap();
 };

//Click the icon plue different twice
Action.clickOnTheDifferentIconPlusOnFirstFloorTableView = function () {
    $.delay(sleep);
    var  clickOnTheDifferentIconPlusOnFirstFloorTableView = app.mainWindow().tableViews()[0].cells()[0].buttons()[0];
    method.checkInstanceExists(app.mainWindow().tableViews()[0].cells()[0].buttons()[0].tap);
    clickOnTheDifferentIconPlusOnFirstFloorTableView.tap();
};

Action.goBackOnSearchPage = function () {
    $.delay(sleep);
    var goBack = app.navigationBar().buttons()[2];
    method.checkInstanceExists(app.navigationBar().buttons()[2].tap);
    goBack.tap();
};

Action.goApparelCategoryWhenSearchSettingOpen = function (){
    $.delay(sleep);
    app.tabBar().buttons()[2].tap();
    
    $.delay(sleep);
    app.mainWindow().tableViews()[0].cells()[0].tap();
};

Action.backToAllCategory = function () {
    $.delay(sleep);
    //var backToAllCategory = app.mainWindows()[0].navigationBar().buttons()[1];
    //backToAllCategory.tap();
    app.navigationBar().tapWithOptions({tapOffset:{x:0.04, y:0.03}});
};

Action.tapSearchIconOnApparelCategory = function () {
    var tapSearchIconOnApparelCategory = app.navigationBar().buttons()[2];
    method.checkInstanceExists(app.navigationBar().buttons()[2].tap);
    tapSearchIconOnApparelCategory.tap();
};

//04-25-2014
Action.goFashionWomenClothingCategory = function () {
    $.delay(sleep);
    var goFashionWomenClothingCategory = app.mainWindow().collectionViews()[0].cells()[3];
    method.checkInstanceExists(app.mainWindow().collectionViews()[0].cells()[3].tap);
    goFashionWomenClothingCategory.tap();
};

Action.tapBackSubclassification = function () {
    $.delay(sleep);
    var tapBackSubclassification = app.navigationBar().buttons()[1];
    method.checkInstanceExists(app.navigationBar().buttons()[1].tap);
    tapBackSubclassification.tap();
};

Action.goCoatCategory = function () {
    $.delay(sleep);
    var goCoatCategory = app.mainWindow().collectionViews()[0].cells()[1];
    method.checkInstanceExists(app.mainWindow().collectionViews()[0].cells()[1].tap);
    goCoatCategory.tap();
};

Action.tapGoodsButton = function () {
    $.delay(sleep);
    var tapGoodsButton = app.mainWindow().collectionViews()[0].cells()[0].buttons()[1];
    method.checkInstanceExists(app.mainWindow().collectionViews()[0].cells()[0].buttons()[1].tap);
    tapGoodsButton.tap();
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
    if(target.systemVersion == 6.0){
    var goCategoryWhenSearchSettingOpen = app.tabBar().buttons()[2];
    method.checkInstanceExists(app.tabBar().buttons()[2].tap);
    goCategoryWhenSearchSettingOpen.tap();
    }
    else{
    $.delay(sleep);

    var searchButton = app.tabBar().buttons()[2];
    method.checkInstanceExists(searchButton.tap);
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
    for (var i = 0; i < 10 ; i++) {
        app.mainWindow().tableViews()[0].cells()[i].staticTexts()[0].tap();
        Action.goBackOnSearchPage();
    };
};

Action.tapStoreTab = function () {
    $.delay(sleep);
    var tapStoreTab = app.mainWindow().collectionViews()[0].cells()[0].buttons()[1];
    method.checkInstanceExists(app.mainWindow().collectionViews()[0].cells()[0].buttons()[1].tap);
    tapStoreTab.tap();
};

Action.clickTokyoStore = function () {
    $.delay(sleep);
    app.mainWindow().collectionViews()[0].tapWithOptions({tapOffset:{x:0.51, y:0.55}});    
};

Action.tapShoppingInformationPage = function () {
    $.delay(sleep);
    var tokyoStore = app.navigationBar().buttons()[0];
    method.checkInstanceExists(app.navigationBar().buttons()[0].tap);
    tokyoStore.tap();
    target.logElementTree();
    $.delay(3);

    var tapShoppingInformationPage = app.mainWindow().tableViews()[0].cells()["購物須知"];
    method.checkInstanceExists(app.mainWindow().tableViews()[0].cells()["購物須知"].tap);
    tapShoppingInformationPage.tap();
};

Action.tapGoodsInTokyoStore = function () {
    $.delay(sleep);
    var tapGoodsInTokyoStore = app.mainWindow().collectionViews()[0].cells()[2];
    method.checkInstanceExists(app.mainWindow().collectionViews()[0].cells()[2].tap);
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
    var tapGoodsButton = app.mainWindow().collectionViews()[0].cells()[0].buttons()[0];
    method.checkInstanceExists(app.mainWindow().collectionViews()[0].cells()[0].buttons()[0].tap);
    tapGoodsButton.tap();
};

//6.9
Action.tapDetermineInAdvancedBarWhenSRP = function () {
    var tapDetermineInAdvancedBarWhenSRP = app.navigationBar().buttons()["確定"];
    method.checkInstanceExists(app.navigationBar().buttons()["確定"].tap);
    tapDetermineInAdvancedBarWhenSRP.tap();
};

Action.tapClearButtonOnFilterScreenInAdvancedBarWhenSRP = function() {
    $.delay(sleep);

    var clearButton = app.mainWindow().buttons()[0];

    //wait clear button become visible.
    clearButton.waitUntilVisible(20);

    //tap clear button.
    clearButton.tap();
};