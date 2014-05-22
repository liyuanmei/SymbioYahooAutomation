Action.goApparelCategory = function (){
    $.delay(sleep);
    Action.tapButtonOnTabBar(2);
    
    Action.tapItemOnCategoryScreen(0); 
};

Action.goCommodityTab = function (){
    $.delay(sleep);

    var commodityButton = app.mainWindow().collectionViews()[0].cells()[0].segmentedControls()[0].buttons()[1];

    method.checkInstanceExists(app.mainWindow().collectionViews()[0].cells()[0].segmentedControls()[0].buttons()[1].tap);
    commodityButton.tap(); 
};

Action.goBack = function () {
    $.delay(sleep);
    var goBack = app.navigationBar().buttons()[0];

    method.checkInstanceExists(app.navigationBar().buttons()[0].tap); 
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
    categoryButton.tap();
};

Action.goCategoryTab = function () {
    $.delay(sleep);
    var categoryButton = app.mainWindow().collectionViews()[0].cells()[0].buttons()[0];
    categoryButton.tap();
};

Action.scrollCollectionViewElementWithName = function (sName) {
    $.delay(sleep);
    app.mainWindow().collectionViews()[0].scrollToElementWithName(sName);
};

Action.tapSearchIconOnCategoryList = function () {
    $.delay(sleep);
    
    var searchIcon = app.mainWindow().navigationBar().buttons()[1];

    method.checkInstanceExists(searchIcon.tap);
    searchIcon.tap();
};

Action.tapAdvancedButton = function () {
    $.delay(sleep);
    var advancedButton = app.mainWindow().collectionViews()[0].buttons()[0];

    method.checkInstanceExists(app.mainWindow().collectionViews()[0].buttons()[0].tap);
    advancedButton.tap();
};

Action.tapButtonsInAdvancedBar = function (i) {
    var buttonOnAdvanced = app.mainWindow().segmentedControls()[0].buttons()[i];

    method.checkInstanceExists(app.mainWindow().segmentedControls()[0].buttons()[i].tap);
    buttonOnAdvanced.tap();
};

Action.tapCancelButtonInAdvancedBar = function () {
    var cancelButton = app.mainWindow().navigationBar().buttons()[0];

    method.checkInstanceExists(cancelButton.tap);
    cancelButton.tap();
};

Action.tapButtonOnFilterAttributeScreen = function (i) {
    $.delay(sleep);
    var buttonOnAttribute = app.mainWindow().collectionViews()[0].cells()[i];

    method.checkInstanceExists(buttonOnAttribute.tap);
    buttonOnAttribute.tap();
};

Action.tapItemOnProductListScreen = function () {
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
        Assert.logInWindowShowCorrect("登入", "忘記密碼或帳號了？", "新建帳號");
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
    Assert.logInWindowShowCorrect("登入", "忘記密碼或帳號了？", "新建帳號");

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
    var myCollectionCell = tableView.cells()[2];
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
    var categoryItem = app.mainWindow().tableViews()[0].cells()[itemName];

    method.checkInstanceExists(app.mainWindow().tableViews()[0].cells()[itemName].tap);
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
    searchButton.tap();
};

Action.getElementsOriginXString = function (elements) {
    var elementsOrigin = elements.rect();
    return elementsOrigin.origin.x.toString();
};

Action.getElementsOriginYString = function (elements) {
    var elementsOrigin = elements.rect();
    return elementsOrigin.origin.y.toString();
};

Action.getElementsWidthString = function (elements) {
    var elementsOrigin = elements.rect();
    return elementsOrigin.size.width.toString();
};

Action.getElementsHeightString = function (elements) {
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
    $.delay(1);
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
    clearButton.waitUntilVisible(20);

    //tap clear button.
    clearButton.tap();
};

Action.tapSubmitButtonOnAdvanceScreen = function () {
    var submitButton = app.navigationBar().buttons()[2];

    if (Assert.buttonExist(submitButton) == true) {
        submitButton.tap();
    }
    else {
        $.error ("Could not found submit button on navigation bar.");
    }
}

Action.selectOptionOnSortingTab = function (option) {
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
    var backButtonOn18Ban = app.mainWindow().buttons()[1];

    method.checkInstanceExists(app.mainWindow().buttons()[1].tap);
    backButtonOn18Ban.tap();
};