Action.goApparelCategory = function () {
    $.delay(sleep);
    Action.tapButtonOnTabBar(2);
    
    Action.tapItemOnCategoryScreen(0); 
};

Action.goCommodityTab = function () {
    $.delay(sleep);
    var commodityButton = app.mainWindow().collectionViews()[0].cells()[0].buttons()[1];
    method.checkInstanceExists(app.mainWindow().collectionViews()[0].cells()[0].buttons()[1].tap);
    commodityButton.tap(); 
};

Action.goBack = function () {
    $.delay(sleep);
    var goBack = app.navigationBar().buttons()[1]; 
    method.checkInstanceExists(app.navigationBar().buttons()[1].tap);
    goBack.tap();
};

Action.goDiscoveryStream = function () {
    $.delay(sleep);

    var buttonToGoDiscoryStream = app.tabBar().buttons()[0];

    method.checkInstanceExists(app.tabBar().buttons()[0].tap);
    buttonToGoDiscoryStream.tap();
};

Action.tapCategory = function () {
    $.delay(sleep);
    var categoryButton = app.mainWindow().collectionViews()[0].cells()[0].buttons()[0];
    method.checkInstanceExists(app.mainWindow().collectionViews()[0].cells()[0].buttons()[0].tap);
    categoryButton.tap();
};

Action.goCategoryTab = function () {
    $.delay(sleep);
    var categoryButton = app.mainWindow().collectionViews()[0].cells()[0].buttons()[0];
    method.checkInstanceExists(app.mainWindow().collectionViews()[0].cells()[0].buttons()[0].tap);
    categoryButton.tap();
};

Action.scrollCollectionViewElementWithName = function (sName) {
    $.delay(sleep);
    app.mainWindow().collectionViews()[0].scrollToElementWithName(sName);
};

Action.tapSearchIconOnCategoryList = function () {
    $.delay(sleep);
    var tapSearchIconOnCategoryList = app.mainWindow().navigationBar().buttons()[2];
    method.checkInstanceExists(app.mainWindow().navigationBar().buttons()[2].tap);
    tapSearchIconOnCategoryList.tap();
};

Action.tapAdvancedButton = function () {
    $.delay(sleep);
    var advancedButton = app.mainWindow().collectionViews()[0].buttons()[0];

    method.checkInstanceExists(app.mainWindow().collectionViews()[0].buttons()[0].tap);
    advancedButton.tap();
};

Action.tapButtonsInAdvancedBar = function (i) {
    $.delay(sleep);
    var buttonOnAdvanced = app.mainWindow().segmentedControls()[0].buttons()[i];

    method.checkInstanceExists(app.mainWindow().segmentedControls()[0].buttons()[i].tap);
    buttonOnAdvanced.tap();
};

Action.tapCancelButtonInAdvancedBar = function () {
    $.delay(sleep);
    var cancelButton = app.mainWindow().navigationBar().buttons()[0];
    method.checkInstanceExists(app.mainWindow().navigationBar().buttons()[0].tap);
    cancelButton.tap();
};
/**
Action.slidePriceBar = function () {
    $.delay(sleep);

    app.mainWindow().collectionViews()[0].tap();
    $.delay(sleep);

    app.mainWindow().collectionViews()[0].dragInsideWithOptions({startOffset:{x:0.91, y:0.30}, endOffset:{x:0.20, y:0.30}, duration:8});;
};
**/

Action.tapButtonOnFilterAttributeScreen = function (i) {
    $.delay(sleep);
    var buttonOnAttribute = app.mainWindow().collectionViews()[1].cells()[i];
    buttonOnAttribute.tap();
};

Action.tapItemOnProductListScreen = function () {
    $.delay(sleep);
    var collectionViews = app.mainWindow().collectionViews()[0];
    
    method.checkInstanceExists(app.mainWindow().collectionViews()[0].tapWithOptions);
    //This action is tapped item big image.
    collectionViews.tapWithOptions({
        tapOffset: {
            x: 0.39,
            y: 0.56
        }
    });
};

Action.tapFavoritesIcon = function (productIndex) {
    $.delay(sleep);
    var collectionViews = app.mainWindow().collectionViews()[0];

    var itemCell = collectionViews.cells()[productIndex];
    var favoritesIcon = itemCell.buttons()[0];

    favoritesIcon.tap();
};

Action.exitLoginWindow = function () {
    $.delay(sleep);

    var exitLoginWindowButton = app.navigationBar().buttons()[0];
    method.checkInstanceExists(app.navigationBar().buttons()[0].tap);
    exitLoginWindowButton.tap();
};

Action.doUserLogin = function (sUserName, sPassword) {
    $.delay(sleep);
    var tabBar = app.mainWindow().tabBar();

    //Tap login button on tabBar and login window should show.
    try{
        tabBar.buttons()[4].tap();
        $.delay(sleep);

        //Verify login window show.
        Assert.logInWindowShowCorrect("Sign In", "Forgot password or ID?", "Create Account");
    }
    catch (err) {
        UIALogger.logError("Login window could not open due to: " + err);
    }

    //Enter username and password and click submit button.
    var loginWindow = app.mainWindow();
    var usernameField =loginWindow.textFields()[0];
    var passwordField = loginWindow.secureTextFields()[0];

    try{
        usernameField.setValue(sUserName);
        passwordField.setValue(sPassword);
        
        var loginButton = loginWindow.buttons()[0];
        loginButton.tap();

        $.delay(10);
        
        //Verify user log in successful
        var userNameOnAccount = app.mainWindow().staticTexts()[1];
        assertEquals(userNameOnAccount.name(), sUserName);
    }
    catch (err) {
        UIALogger.logError("User unable to login due to: " + err);
    }
};

//sNavBarName is used for verify page should redirect to screen after log out.
Action.doUserLogout = function () {
    $.delay(sleep);

    //Tap log out button on navigation bar.
    try{
        var actionSheet = app.actionSheet();
        var logoutButton = app.navigationBar().rightButton();
        logoutButton.tap();
        $.delay(1);
        assertEquals(false, actionSheet.isVisible());
    }
    catch (err){
        UIALogger.logError("Action sheet could not open due to: " + err);  
    }

    //Tap log out button on action sheet.
    try{
        var logoutButton = app.actionSheet().buttons()[0];
        logoutButton.tap();

        $.delay(4);
        //Verify user log out successful and screen reidrect to discovery scree.
        Assert.navigationBarName("最新動態");
    }
    catch (err){
        UIALogger.logError("Tap log out button meet error: " + err);  
    }
};

//remove user history sName is which user you want remove.
Action.removeLoginHistory = function (sName) {
    $.delay(sleep);

    //tap Edit button on navigation bar
    try{
        var editButton = app.navigationBar().buttons()[1];
        editButton.tap();
        $.delay(1);

        //tap remove icon
        var removeIcon = app.mainWindow().tableViews()[0].cells()[sName];

        if(removeIcon.isVisible() == true){
            var removeButton = removeIcon.buttons()[0];
            removeButton.tap();
        }
        else{
            UIALogger.logError("remove icon not show after tap edit button");
        }
    }
    catch (err){
        UIALogger.logError("Tap edit button and X icon meet error: " + err);
    }
    $.delay(sleep);
    //After edit button tapped the remove popup window show.
    var accountName = app.mainWindow().staticTexts()[0].name();
    if (accountName == sName) {
        var removeButton = app.mainWindow().buttons()[1];
        removeButton.tap();
        $.delay(1);
    }
    else {
        UIALogger.logError("remove popup window not show after tap X button");
    }

    //Verify Login window show correct, after successful removed account.
    Assert.logInWindowShowCorrect("Sign In", "Forgot password or ID?", "Create Account");

    //Tap close button to exit login screen.
    Action.exitLoginWindow();      

    //verify screen back to discovery screen.
    Assert.navigationBarName("最新動態");
};

Action.tapButtonOnTabBar = function (sButton) {
    $.delay(sleep);
    var tabBar = app.mainWindow().tabBar();
    var button = tabBar.buttons()[sButton];

    method.checkInstanceExists(app.mainWindow().tabBar().buttons()[sButton].tap);
    button.tap();
};

Action.goMayFavoritesScreen = function () {
    $.delay(sleep);
    var tableView = app.mainWindow().tableViews()[1];
    var myCollectionCell = tableView.cells()[3];
    myCollectionCell.tap();
};

Action.selectCategoryItem = function (itemName) {
    $.delay(sleep);
    var tableView = app.mainWindow().tableViews()[0];
    var itemCell = tableView.cells()[itemName];
    itemCell.tap();
};

Action.tapItemOnCategoryScreen = function (itemName) {
    $.delay(sleep);
    var categoryItem = app.mainWindow().tableViews()[1].cells()[itemName];

    method.checkInstanceExists(app.mainWindow().tableViews()[1].cells()[itemName].tap);
    categoryItem.tap();
};

Action.doSearch = function (keyword) {
    $.delay(sleep);
    
    //Tap search button
    var searchButton = app.mainWindow().navigationBar().buttons()[2];
    if (Assert.buttonExist(searchButton) == true) {

        method.checkInstanceExists(app.mainWindow().navigationBar().buttons()[2].tap);
        searchButton.tap();
        $.delay(sleep);
    }
    else {
        UIALogger.logError("Search button not found.");
    }

    //Enter search keyword and do search.
    Action.searchBarInputChinese(keyword);
    Action.tapKeyboardSearch();

    //Verify seach result page show correct.
    Assert.searchResultsPage(keyword)
};

Action.tapSearchButtonOnSRP = function () {
    $.delay(sleep);
    var searchButton = app.navigationBar().buttons()[0];
    method.checkInstanceExists(app.navigationBar().buttons()[0].tap);
    searchButton.tap();
};

Action.getElementsOriginXString = function (elements) {
    $.delay(sleep);
    var elementsOrigin = elements.rect();
    return elementsOrigin.origin.x.toString();
};

Action.getElementsOriginYString = function (elements) {
    $.delay(sleep);
    var elementsOrigin = elements.rect();
    return elementsOrigin.origin.y.toString();
};

Action.getElementsWidthString = function (elements) {
    $.delay(sleep);
    var elementsOrigin = elements.rect();
    return elementsOrigin.size.width.toString();
};

Action.getElementsHeightString = function (elements) {
    $.delay(sleep);
    var elementsOrigin = elements.rect();
    return elementsOrigin.size.height.toString();
};

Action.tapElementsOnScreen = function (elements) {
    $.delay(sleep);
    try {
        if (elements.isVisible() == true){
            elements.tap();
        }
        else{
            UIALogger.logError(elements + " not exist on Screen.");
        }
    }
    catch (err) {
        UIALogger.logError("tap elements on screen meet error: " + err);
    }
};

Action.chooseCategoryBrowseMode = function (sMode) {
    $.delay(sleep);
    var brosweModeButtons = app.mainWindow().buttons()[sMode];

    if (Assert.buttonExist(brosweModeButtons) == true){
        method.checkInstanceExists(app.mainWindow().buttons()[sMode].tap);
        brosweModeButtons.tap();
        $.delay(sleep);
    }
    else {
        UIALogger.logError("Cannot found browse mode button: " + sMode);
    }
};

Action.tapClearButtonOnFilterScreen = function() {
    $.delay(sleep);

    var clearButton = app.mainWindow().buttons()[1];

    //wait clear button become visible.
    //clearButton.waitUntilVisible(20);

    //tap clear button.
    clearButton.tap();
};

Action.tapSubmitButtonOnAdvanceScreen = function () {
    $.delay(sleep);
    var submitButton = app.navigationBar().buttons()[2];

    if (Assert.buttonExist(submitButton) == true) {
        submitButton.tap();
    }
    else {
        $.error ("Could not found submit button on navigation bar.");
    }
}

Action.selectOptionOnSortingTab = function (option) {
    $.delay(sleep);
    var sortTabTableView = app.mainWindow().tableViews()[1];
    var option = sortTabTableView.cells()[option];
    
    if (Assert.buttonExist(option) == true) {

        method.checkInstanceExists(app.mainWindow().tableViews()[1].cells()[option].tap);
        option.tap();
    }
    else {
        $.error (option + " button cannot found.");
    }
};

Action.back18BanScreen = function () {
    $.delay(sleep);
    var backButtonOn18Ban = app.mainWindow().buttons()[1];

    method.checkInstanceExists(app.mainWindow().buttons()[1].tap);
    backButtonOn18Ban.tap();
};

Action.tapStoreNameOnCategory =  function () {
    $.delay(sleep);

    var tapStoreNameOnCategory = app.mainWindow().collectionViews()[0].cells()[1].staticTexts()[0];
    method.checkInstanceExists(app.mainWindow().collectionViews()[0].cells()[1].staticTexts()[0].tap);
    tapStoreNameOnCategory.tap();
};  

//pan
Action.tapButtonOnMyUser = function (i) {
    $.delay(sleep);
    var buttonOnMyUser = app.mainWindow().tableViews()[0].cells()[i];
    method.checkInstanceExists(app.mainWindow().tableViews()[0].cells()[i].tap);
    buttonOnMyUser.tap();
};

Action.selectCategoryOnEditFavorite = function () {
    $.delay(sleep);
    for (var i = 0; i < 12; i++) {
        $.delay(1);
        var categoryOnEditFavorite = app.mainWindow().collectionViews()[0].cells()[i];
        method.checkInstanceExists(app.mainWindow().collectionViews()[0].cells()[i].tap);
        categoryOnEditFavorite.tap();
    };    
};

Action.tapMenuButton = function () {
    $.delay(sleep);
    var menuButton = app.navigationBar().buttons()[1];
    method.checkInstanceExists(app.navigationBar().buttons()[1].tap);
    menuButton.tap();
};

Action.tapButtonOnMenu = function (i) {
    $.delay(sleep);
    var buttonOnMenu = app.windows()[0].tableViews()[0].cells()[i];
    method.checkInstanceExists(app.windows()[0].tableViews()[0].cells()[i].tap);
    buttonOnMenu.tap();
};

Action.goBackWhenBackMenu = function () {
    $.delay(sleep);
    var backWhenBackMenu = app.windows()[0].navigationBar().buttons()[1]; 
    method.checkInstanceExists(app.windows()[0].navigationBar().buttons()[1].tap);
    backWhenBackMenu.tap();
};

Action.verifyEditingFavoriteCategories = function () {
    $.delay(sleep);
    var menuButton = app.navigationBar().buttons()[1];
    menuButton.tap();
    $.delay(sleep);
    
    Action.tapButtonOnMenu(1);
    Assert.buttonOnSidebarIsEnabled();
    Action.goBackWhenBackMenu();

    menuButton.tap();
};

Action.tapFavoriteStoreIcon = function () {
    $.delay(sleep);
    var FavoriteStoreIcon = app.windows()[0].collectionViews()[0].cells()[1].buttons()[0];
    method.checkInstanceExists(app.windows()[0].collectionViews()[0].cells()[1].buttons()[0].tap);
    FavoriteStoreIcon.tap();
};

Action.tapFirstViewsOnFavoriteStorePage = function () {
    $.delay(sleep);
    var firstViewsOnFavoriteStorePage = app.windows()[0].collectionViews()[0].cells()[0];
    method.checkInstanceExists(app.windows()[0].collectionViews()[0].cells()[0].tap);
    firstViewsOnFavoriteStorePage.tap();
};

Action.tapCancelFavoriteStoreIcon = function () {
    $.delay(sleep);
    var cancelFavoriteStoreIcon = app.navigationBar().buttons()[3];
    method.checkInstanceExists(app.navigationBar().buttons()[3].tap);
    cancelFavoriteStoreIcon.tap();
};

Action.tapBackOnFavoriteStorePage = function () {
    var backOnFavoriteStorePage = app.navigationBar().buttons()[2];
    method.checkInstanceExists(app.navigationBar().buttons()[2].tap);
    backOnFavoriteStorePage.tap();
};

Action.tapFirstViewsOnFavoriteStorePageWithOutLogin = function () {
    var firstViewsOnFavoriteStorePageWithOutLogin = app.windows()[0].collectionViews()[0];
    method.checkInstanceExists(app.windows()[0].collectionViews()[0].tapWithOptions);
    //This action is tapped store views
    firstViewsOnFavoriteStorePageWithOutLogin.tapWithOptions({
        tapOffset: {
            x: 0.46,
            y: 0.52
        }
    });
};

Action.tapStoreCategoryTab = function () {
    var storeCategoryTab = app.mainWindow().collectionViews()[0].cells()[1].buttons()[0];
    method.checkInstanceExists(app.mainWindow().collectionViews()[0].cells()[1].buttons()[0].tap);
    storeCategoryTab.tap();
};

Action.tapStoreCommodityTab = function () {
    var storeCommodityTab = app.mainWindow().collectionViews()[0].cells()[1].buttons()[1];
    method.checkInstanceExists(app.mainWindow().collectionViews()[0].cells()[1].buttons()[1].tap);
    storeCommodityTab.tap();
};
//6.4
Action.tapItemOnCategoryScreenWhenItemPage = function (itemName) {
    $.delay(sleep);
    var categoryItem = app.mainWindow().tableViews()[0].cells()[itemName];

    method.checkInstanceExists(app.mainWindow().tableViews()[0].cells()[itemName].tap);
    categoryItem.tap();
};

Action.tapStoreOnShoppingCartPage = function () {
    $.delay(sleep);
    var storeOnShoppingCartPage = app.mainWindow().scrollViews()[0].webViews()[0].links()[4];
    method.checkInstanceExists(app.mainWindow().scrollViews()[0].webViews()[0].links()[4].tap);
    storeOnShoppingCartPage.tap();
};

Action.tapShareOnProductPage = function () {
    $.delay(sleep);
    var slideTheScreen = app.mainWindow().collectionViews()[0].dragInsideWithOptions({startOffset:{x:0.51, y:0.86}, endOffset:{x:0.98, y:0.04}, duration:1.7});
    $.delay(10);
    var shareOnProductPage = app.mainWindow().collectionViews()[0].cells()["Empty list"].tableViews()["Empty list"].cells()["分享商品"];
    method.checkInstanceExists(app.mainWindow().collectionViews()[0].cells()["Empty list"].tableViews()["Empty list"].cells()["分享商品"].tap);
    shareOnProductPage.tap();
};

Action.tapCancelButtonOnShareViews = function () {
    var cancelButtonOnShareViews = app.mainWindow().buttons()[0];
    method.checkInstanceExists(app.mainWindow().buttons()[0].tap);
    cancelButtonOnShareViews.tap();
};

Action.tapCollectionList = function () {
    var collectionList = app.windows()[0].collectionViews()[0].cells()[0];
    method.checkInstanceExists(app.windows()[0].collectionViews()[0].cells()[0].tap);
    collectionList.tap();
};

Action.tapProductCollectionButton = function () {
    var productCollectionButton = app.mainWindow().tableViews()[0].cells()[3];
    method.checkInstanceExists(app.mainWindow().tableViews()[0].cells()[3].tap);
    productCollectionButton.tap();
};

Action.tapSale = function () {
    var sale = app.mainWindow().collectionViews()[0].cells()["Empty list"].tableViews()["Empty list"].cells()["促銷活動, 2"];
    method.checkInstanceExists(app.mainWindow().collectionViews()[0].cells()["Empty list"].tableViews()["Empty list"].cells()["促銷活動, 2"].tap);
    sale.tap();
};

Action.tapCancelOnShoppingCart = function () {
    $.delay(sleep);
    var tapConfirmOnShoppingCart = app.navigationBar().buttons()[0];
    method.checkInstanceExists(app.navigationBar().buttons()[0].tap);
    tapConfirmOnShoppingCart.tap();
};

//6.5
Action.tapAddAccountOnLogin = function (sUserName, sPassword) {
    $.delay(sleep);
    var tabBar = app.mainWindow().tabBar();

    //Tap login button on tabBar and login window should show.
    try{
        tabBar.buttons()[4].tap();
        $.delay(sleep);

        $.delay(sleep);
        var tapAddAccountOnLogin = app.mainWindow().tableViews()[0].cells()["Add Account"];
        method.checkInstanceExists(app.mainWindow().tableViews()[0].cells()["Add Account"].tap);
        tapAddAccountOnLogin.tap();
    }
    catch (err) {
        UIALogger.logError("Login window could not open due to: " + err);
    }
    
    $.delay(4);

    //Enter username and password and click submit button.
    var loginWindow = app.mainWindow();
    var usernameField =loginWindow.textFields()[0];
    var passwordField = loginWindow.secureTextFields()[0];

    try{
        usernameField.setValue(sUserName);
        passwordField.setValue(sPassword);
        
        var loginButton = loginWindow.buttons()[0];
        loginButton.tap();

        $.delay(10);
        
        //Verify user log in successful
        var userNameOnAccount = app.mainWindow().staticTexts()[1];
        assertEquals(userNameOnAccount.name(), sUserName);
    }
    catch (err) {
        UIALogger.logError("User unable to login due to: " + err);
    }
};

Action.tapButtonOnMyUserWhenCategory = function (i) {
    $.delay(sleep);
    var buttonOnMyUserWhenCategory = app.mainWindow().tableViews()[1].cells()[i];
    method.checkInstanceExists(app.mainWindow().tableViews()[1].cells()[i].tap);
    buttonOnMyUserWhenCategory.tap();
};

//6.10
Action.tapChoosePreductCategory = function (i,j) {
    $.delay(sleep);
    var choosePreductCategory = app.mainWindow().collectionViews()[i].cells()[j];
    method.checkInstanceExists(app.mainWindow().collectionViews()[i].cells()[j].tap);
    choosePreductCategory.tap();
};

//6.9 pan FavoriteStore
Action.doRefreshFavoriteStorePage = function () {
    $.delay(sleep);
    app.mainWindow().collectionViews()[0].dragInsideWithOptions({startOffset:{x:0.65, y:0.29}, endOffset:{x:0.51, y:0.79}});
};

Action.tapChoosePreductCategory = function (i,j) {
    $.delay(sleep);
    var choosePreductCategory = app.mainWindow().collectionViews()[i].cells()[j];
    method.checkInstanceExists(app.mainWindow().collectionViews()[i].cells()[j].tap);
    choosePreductCategory.tap();
};

//6.10 pan storeOnShoppingCartPage
Action.tapBuyNextTime = function () {
    $.delay(sleep);
    var buyNextTime = app.mainWindow().scrollViews()[0].webViews()[0].links()[2];
    method.checkInstanceExists(app.mainWindow().scrollViews()[0].webViews()[0].links()[2].tap);
    buyNextTime.tap();
};