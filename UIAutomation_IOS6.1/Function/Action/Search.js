Action.tapSearchIconOnNavBar = function () {
    $.delay(sleep);
    var tapSearchIconOnNavBar = app.navigationBar().buttons()[1];

    method.checkInstanceExists(tapSearchIconOnNavBar.tap);
    tapSearchIconOnNavBar.tap();
};

Action.tapBackOnSearchBar = function () {
    $.delay(sleep);

    var tapBackOnSearchBar = app.mainWindow().buttons()[0];

    method.checkInstanceExists(tapBackOnSearchBar.tap);
    tapBackOnSearchBar.tap();
};

Action.searchBarInput = function (skey) {
    $.delay(sleep);
    var keyboard = app.keyboard();

    method.checkInstanceExists(keyboard.typeString);
    keyboard.typeString(skey);
};

Action.tapIconPlusOnTableView = function () {
    $.delay(sleep);
    var tapIconPlusOnTableView = app.mainWindow().tableViews()[0].cells()[1].buttons()[0];

    method.checkInstanceExists(tapIconPlusOnTableView.tap);
    tapIconPlusOnTableView.tap();
};

//Click the icon plue different twice
Action.clickOnTheDifferentIconPlus = function () {
    $.delay(sleep);
    var clickOnTheDifferentIconPlus = app.mainWindow().tableViews()[0].cells()[1].buttons()[0];

    method.checkInstanceExists(clickOnTheDifferentIconPlus.tap);
    clickOnTheDifferentIconPlus.tap();
};

Action.tapKeyboardSearch = function () {
    var tapKeyboardSearch = app.keyboard().buttons()["Search"];

    method.checkInstanceExists(tapKeyboardSearch.tap);
    tapKeyboardSearch.tap();
};

Action.tapClean = function () {
    $.delay(sleep);
    var tapClean = app.mainWindow().textFields()[0].buttons()[0];
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
    var menuButton = app.navigationBar().buttons()[0];

    method.checkInstanceExists(menuButton.tap);
    menuButton.tap();
    $.delay(1);
    
    var tableViews = app.windows()[0].tableViews()[0];
    var tableCells = tableViews.cells()["Settings"];

    method.checkInstanceExists(tableCells.tap);
    tableCells.tap();
    $.delay(1);
    
    UIATarget.onAlert = function onAlert() {
        return true;
    }
    var collectionViews = app.windows()[0].collectionViews()[0];
    var cleanSearchHistory = collectionViews.cells()[1].staticTexts()[0];

    method.checkInstanceExists(cleanSearchHistory.tap);
    cleanSearchHistory.tap();
    $.delay(sleep);
    
    var determineButton = app.alert().buttons()[1];
    determineButton.tap();
    
    var closeButton = app.windows()[0].navigationBar().buttons()[0];

    method.checkInstanceExists(closeButton.tap);
    closeButton.tap();
    menuButton.tap();
};

Action.searchBarInputChinese = function (sValue) {
    var searchField = app.mainWindow().textFields()[0];

    method.checkInstanceExists(searchField.setValue);
    searchField.setValue(sValue);
};

Action.tapReturnOnSearchBar = function () {
    $.delay(sleep);

    var backButton = app.mainWindow().buttons()[0];

    method.checkInstanceExists(backButton.tap);
    backButton.tap();
};

Action.tapIconPlusOnFirstFloorTableView = function () {
    $.delay(sleep);
    var tapIconPlusOnFirstFloorTableView = app.mainWindow().tableViews()[0].cells()[1].buttons()[0];
    tapIconPlusOnFirstFloorTableView.tap();
 };

//Click the icon plue different twice
Action.clickOnTheDifferentIconPlusOnFirstFloorTableView = function () {
    $.delay(sleep);
    var  clickOnTheDifferentIconPlusOnFirstFloorTableView = app.mainWindow().tableViews()[0].cells()[0].buttons()[0];
    clickOnTheDifferentIconPlusOnFirstFloorTableView.tap();
};

Action.goBackOnSearchPage = function () {
    $.delay(sleep);
    var goBack = app.navigationBar().buttons()[1];

    method.checkInstanceExists(goBack.tap);
    goBack.tap();
};

//04-23-2014
Action.goApparelCategoryWhenSearchSettingOpen = function (){
    $.delay(sleep);
    app.tabBar().buttons()[2].tap();
    
    $.delay(sleep);
    app.mainWindow().tableViews()[0].cells()[0].tap();
};

Action.backToAllCategory = function () {
    $.delay(sleep);
    var backToAllCategory = app.navigationBar().buttons()[0];

    method.checkInstanceExists(backToAllCategory.tap);
    backToAllCategory.tap();
};

Action.tapSearchIconOnApparelCategory = function () {
    var tapSearchIconOnApparelCategory = app.navigationBar().buttons()[1];

    method.checkInstanceExists(tapSearchIconOnApparelCategory.tap);
    tapSearchIconOnApparelCategory.tap();
};

//04-25-2014
Action.goFashionWomenClothingCategory = function () {
    $.delay(sleep);
    var goFashionWomenClothingCategory = app.mainWindow().collectionViews()[0].cells()[3];
    goFashionWomenClothingCategory.tap();
};

Action.tapBackSubclassification = function () {
    $.delay(sleep);
    var tapBackSubclassification = app.navigationBar().buttons()[0];

    method.checkInstanceExists(tapBackSubclassification.tap);
    tapBackSubclassification.tap();
};

Action.goCoatCategory = function () {
    $.delay(sleep);
    var goCoatCategory = app.mainWindow().collectionViews()[0].cells()[1];
    goCoatCategory.tap();
};

//04-28-2014
Action.tapGoodsButton = function () {
    $.delay(sleep);
    var tapGoodsButton = app.mainWindow().collectionViews()[0].cells()[0].segmentedControls()[0].buttons()[1];

    method.checkInstanceExists(tapGoodsButton.tap);
    tapGoodsButton.tap();
};

//05-06-2014
Action.englishInputMethod = function () {
    $.delay(sleep);
    var keyboard = app.keyboard();
    keyboard.keys()["a"].tap();

    while (keyboard.keys()["選定"].isEnabled() == 1 || keyboard.keys()["a"].isEnabled() != 1) {
        keyboard.buttons()["Next keyboard"].tap();
        $.delay(1);
    }

    //remove test keyword.
    keyboard.keys()["Delete"].tap();
};

Action.goCategoryWhenSearchSettingOpen = function () {
    $.delay(sleep);

    var searchButton = app.tabBar().buttons()[2];
    method.checkInstanceExists(searchButton.tap);
    searchButton.tap();
};

//05-16-2014
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
    tapStoreTab.tap();
};

Action.clickTokyoStore = function () {
    $.delay(sleep);
    app.mainWindow().collectionViews()[0].tapWithOptions({tapOffset:{x:0.51, y:0.55}});    
};

Action.tapShoppingInformationPage = function () {
    $.delay(sleep);
    var tokyoStore = app.navigationBar().buttons()[0];
    tokyoStore.tap();
    target.logElementTree();
    $.delay(3);

    var tapShoppingInformationPage = app.mainWindow().tableViews()[0].cells()["購物須知"];
    tapShoppingInformationPage.tap();
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