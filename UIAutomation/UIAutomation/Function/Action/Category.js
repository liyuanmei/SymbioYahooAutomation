Action.goApparelCategory = function () {
    $.delay(sleep);
    Action.tapButtonOnTabBar(2);
    
    Action.tapItemOnCategoryScreen(0); 
};

Action.goCommodityTab = function () {
    $.delay(sleep);
    var version = target.systemVersion();
    version = version.substring(0, version.lastIndexOf("."));
    if(version == "6.1") {
        var commodityButton = app.mainWindow().collectionViews()[0].cells()[0].segmentedControls()[0].buttons()[1];

        method.checkInstanceExists(app.mainWindow().collectionViews()[0].cells()[0].segmentedControls()[0].buttons()[1]);
        commodityButton.tap(); 
    }
    else{
        var commodityButton = app.mainWindow().collectionViews()[0].cells()[0].buttons()[1];
        method.checkInstanceExists(app.mainWindow().collectionViews()[0].cells()[0].buttons()[1]);
        commodityButton.tap(); 
    }
};

Action.goBack = function () {
    $.delay(sleep);
    var version = target.systemVersion();
    version = version.substring(0, version.lastIndexOf("."));
    if(version == "6.1") {  
        var goBack = app.navigationBar().buttons()[0];

        method.checkInstanceExists(app.navigationBar().buttons()[0]); 
        goBack.tap();
    }
    else{
        var goBack = app.navigationBar().buttons()[1]; 
        method.checkInstanceExists(app.navigationBar().buttons()[1]);
        goBack.tap();
    }
};

Action.goDiscoveryStream = function () {
    $.delay(sleep);

    var buttonToGoDiscoryStream = app.tabBar().buttons()[0];

    method.checkInstanceExists(app.tabBar().buttons()[0]);
    buttonToGoDiscoryStream.tap();
};

Action.tapCategory = function () {
    $.delay(sleep);
    var categoryButton = app.mainWindow().collectionViews()[0].cells()[0].buttons()[0];
    method.checkInstanceExists(app.mainWindow().collectionViews()[0].cells()[0].buttons()[0]);
    categoryButton.tap();
};

Action.goCategoryTab = function () {
    $.delay(sleep);
    var categoryButton = app.mainWindow().collectionViews()[0].cells()[0].buttons()[0];
    method.checkInstanceExists(app.mainWindow().collectionViews()[0].cells()[0].buttons()[0]);
    categoryButton.tap();
};

Action.scrollCollectionViewElementWithName = function (sName) {
    $.delay(sleep);
    app.mainWindow().collectionViews()[0].scrollToElementWithName(sName);
};

Action.tapSearchIconOnCategoryList = function () {
    $.delay(sleep);
    var version = target.systemVersion();
    version = version.substring(0, version.lastIndexOf("."));
    if(version == "6.1") {
        var searchIcon = app.mainWindow().navigationBar().buttons()[1];

        method.checkInstanceExists(searchIcon);
        searchIcon.tap();
    }
    else{
        var tapSearchIconOnCategoryList = app.mainWindow().navigationBar().buttons()[2];
        method.checkInstanceExists(app.mainWindow().navigationBar().buttons()[2]);
        tapSearchIconOnCategoryList.tap();
    }
};

Action.tapAdvancedButton = function () {
    $.delay(sleep);
    var advancedButton = app.mainWindow().collectionViews()[0].buttons()["進階"];

    method.checkInstanceExists(app.mainWindow().collectionViews()[0].buttons()["進階"]);
    advancedButton.tap();
};

Action.tapButtonsInAdvancedBar = function (i) {
    $.delay(sleep);
    var buttonOnAdvanced = app.mainWindow().segmentedControls()[0].buttons()[i];

    method.checkInstanceExists(app.mainWindow().segmentedControls()[0].buttons()[i]);
    buttonOnAdvanced.tap();
};

Action.tapCancelButtonInAdvancedBar = function () {
    $.delay(sleep);
    var cancelButton = app.mainWindow().navigationBar().buttons()["取消"];
    method.checkInstanceExists(app.mainWindow().navigationBar().buttons()["取消"]);
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
    var version = target.systemVersion();
    version = version.substring(0, version.lastIndexOf("."));
    if(version == "6.1") {
        var buttonOnAttribute = app.mainWindow().collectionViews()[0].cells()[i];

        method.checkInstanceExists(buttonOnAttribute);
        buttonOnAttribute.tap();
    }
    else{
        var buttonOnAttribute = app.mainWindow().collectionViews()[1].cells()[i];
        method.checkInstanceExists(app.mainWindow().collectionViews()[1].cells()[i]);
        buttonOnAttribute.tap();
    }
};

Action.tapItemOnProductListScreen = function () {
    $.delay(sleep);
    var collectionViews = app.mainWindow().collectionViews()[0];
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
    method.checkInstanceExists(app.navigationBar().buttons()[0]);
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
        Assert.logInWindowShowCorrect(varTestsSignButtonsOnlogInWindow, varTestsTextOnlogInWindow, varTestsCreateButtonsOnlogInWindow);
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
        //var userNameOnAccount = app.mainWindow().staticTexts()[1];
        //assertEquals(userNameOnAccount.name(), sUserName);
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
        $.delay(sleep);
        var version = target.systemVersion();
    version = version.substring(0, version.lastIndexOf("."));
    if(version == "6.1") {
            var actionSheet = app.actionSheet();
            var logoutButton = app.navigationBar().buttons()[1];
            logoutButton.tap();
            $.delay(sleep);

            method.verifyEquals(false, actionSheet.isVisible());
        }
        else{
            var actionSheet = app.actionSheet();
            var logoutButton = app.navigationBar().rightButton();
            logoutButton.tap();
            $.delay(sleep);

            method.verifyEquals(false, actionSheet.isVisible());
        }
    }
    catch (err){
        UIALogger.logError("Action sheet could not open due to: " + err);  
    }

    //Tap log out button on action sheet.
    try{
        $.delay(sleep);
        var logoutButton = app.actionSheet().buttons()[0];
        logoutButton.tap();
        
        $.delay(6);
        //Verify user log out successful and screen reidrect to discovery scree.
        //Assert.navigationBarName("最新動態");
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

    method.checkInstanceExists(app.mainWindow().tabBar().buttons()[sButton]);
    button.tap();
};

Action.goMayFavoritesScreen = function () {
    $.delay(sleep);
    var version = target.systemVersion();
    version = version.substring(0, version.lastIndexOf("."));
    if(version == "6.1") {
        var tableView = app.mainWindow().tableViews()[0];
    }
    else{
        var tableView = app.mainWindow().tableViews()[1];
    }
    
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
    var version = target.systemVersion();
    version = version.substring(0, version.lastIndexOf("."));
    if(version == "6.1") {
        var categoryItem = app.mainWindow().tableViews()[0].cells()[itemName];

        method.checkInstanceExists(app.mainWindow().tableViews()[0].cells()[itemName]);
        categoryItem.tap();
    }
    else{
        var categoryItem = app.mainWindow().tableViews()[1].cells()[itemName];

        method.checkInstanceExists(app.mainWindow().tableViews()[1].cells()[itemName]);
        categoryItem.tap();
    }
};

Action.doSearch = function (keyword) {
    $.delay(sleep);
    var version = target.systemVersion();
    version = version.substring(0, version.lastIndexOf("."));
    if(version == "6.1") {
        //Tap search button
        var searchButton = app.mainWindow().navigationBar().buttons()[1];
        if (Assert.buttonExist(searchButton) == true) {

            method.checkInstanceExists(app.mainWindow().navigationBar().buttons()[1]);
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
    }
    else{
        //Tap search button
        var searchButton = app.mainWindow().navigationBar().buttons()[2];
        if (Assert.buttonExist(searchButton) == true) {

            method.checkInstanceExists(app.mainWindow().navigationBar().buttons()[2]);
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
    }
};

Action.tapSearchButtonOnSRP = function () {
    $.delay(sleep);
    var searchButton = app.navigationBar().buttons()[0];
    method.checkInstanceExists(app.navigationBar().buttons()[0]);
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
        method.checkInstanceExists(app.mainWindow().buttons()[sMode]);
        brosweModeButtons.tap();
        $.delay(sleep);
    }
    else {
        UIALogger.logError("Cannot found browse mode button: " + sMode);
    }
};

Action.tapClearButtonOnFilterScreen = function() {
    $.delay(sleep);
    var version = target.systemVersion();
    version = version.substring(0, version.lastIndexOf("."));
    if(version == "6.1") {
        var clearButton = app.mainWindow().buttons()[0];

        //wait clear button become visible.
        //clearButton.waitUntilVisible(20);

        //tap clear button.
        clearButton.tap();
    }
    else{
        var clearButton = app.mainWindow().buttons()[1];

        //wait clear button become visible.
        //clearButton.waitUntilVisible(20);

        //tap clear button.
        clearButton.tap();
    }
};

Action.tapSubmitButtonOnAdvanceScreen = function () {
    $.delay(sleep);
    var version = target.systemVersion();
    version = version.substring(0, version.lastIndexOf("."));
    if(version == "6.1") {
        var submitButton = app.navigationBar().buttons()[1];

        if (Assert.buttonExist(submitButton) == true) {
            method.checkInstanceExists(app.navigationBar().buttons()[1]);
            submitButton.tap();
        }
        else {
            $.error ("Could not found submit button on navigation bar.");
        }
    }
    else{
        var submitButton = app.navigationBar().buttons()[2];

        if (Assert.buttonExist(submitButton) == true) {
            method.checkInstanceExists(app.navigationBar().buttons()[2]);
            submitButton.tap();
        }
        else {
            $.error ("Could not found submit button on navigation bar.");
        }
    }
}

Action.selectOptionOnSortingTab = function (option) {
    $.delay(sleep);
    var version = target.systemVersion();
    version = version.substring(0, version.lastIndexOf("."));
    if(version == "6.1") {
        var sortTabTableView = app.mainWindow().tableViews()[0];
        var option = sortTabTableView.cells()[option];
    
        if (Assert.buttonExist(option) == true) {

            method.checkInstanceExists(app.mainWindow().tableViews()[1].cells()[option]);
            option.tap();
        }
        else {
            $.error (option + " button cannot found.");
        }
    }
    else{
        var sortTabTableView = app.mainWindow().tableViews()[1];
        var option = sortTabTableView.cells()[option];
    
        if (Assert.buttonExist(option) == true) {

            method.checkInstanceExists(app.mainWindow().tableViews()[1].cells()[option]);
            option.tap();
        }
        else {
            $.error (option + " button cannot found.");
        }
    }
};

Action.back18BanScreen = function () {
    $.delay(sleep);
    var version = target.systemVersion();
    version = version.substring(0, version.lastIndexOf("."));
    if(version == "6.1") {
        var backButtonOn18Ban = app.mainWindow().buttons()[0];

        method.checkInstanceExists(app.mainWindow().buttons()[0]);
        backButtonOn18Ban.tap();
    }
    else{
        var backButtonOn18Ban = app.mainWindow().buttons()[1];

        method.checkInstanceExists(app.mainWindow().buttons()[1]);
        backButtonOn18Ban.tap();
    }
};

Action.tapStoreNameOnCategory =  function () {
    $.delay(sleep);
    var version = target.systemVersion();
    version = version.substring(0, version.lastIndexOf("."));
    if(version == "6.1") {
        var tapStoreNameOnCategory = app.mainWindow().collectionViews()[0].cells()[2].staticTexts()[0];
        method.checkInstanceExists(app.mainWindow().collectionViews()[0].cells()[2].staticTexts()[0]);
        tapStoreNameOnCategory.tap();
    }
    else{
        var tapStoreNameOnCategory = app.mainWindow().collectionViews()[0].cells()[1].staticTexts()[0];
        method.checkInstanceExists(app.mainWindow().collectionViews()[0].cells()[1].staticTexts()[0]);
        tapStoreNameOnCategory.tap();
    }
};  

//pan
Action.tapButtonOnMyUser = function (i) {
    $.delay(sleep);
    var buttonOnMyUser = app.mainWindow().tableViews()[0].cells()[i];
    //method.checkInstanceExists(app.mainWindow().tableViews()[0].cells()[i]);
    buttonOnMyUser.tap();
};

Action.selectCategoryOnEditFavorite = function () {
    $.delay(sleep);
    for (var i = 0; i < 12; i++) {
        $.delay(1);
        var categoryOnEditFavorite = app.mainWindow().collectionViews()[0].cells()[i];
        method.checkInstanceExists(app.mainWindow().collectionViews()[0].cells()[i]);
        categoryOnEditFavorite.tap();
    };    
};

Action.tapMenuButton = function () {
    $.delay(sleep);
    var menuButton = app.navigationBar().buttons()[1];
    method.checkInstanceExists(app.navigationBar().buttons()[1]);
    menuButton.tap();
};

Action.tapButtonOnMenu = function (i) {
    $.delay(sleep);
    var buttonOnMenu = app.windows()[0].tableViews()[0].cells()[i];
    method.checkInstanceExists(app.windows()[0].tableViews()[0].cells()[i]);
    buttonOnMenu.tap();
};

Action.goBackWhenBackMenu = function () {
    $.delay(sleep);
    var version = target.systemVersion();
    version = version.substring(0, version.lastIndexOf("."));
    if(version == "6.1") {
        var backWhenBackMenu = app.windows()[0].navigationBar().buttons()[0]; 
        method.checkInstanceExists(app.windows()[0].navigationBar().buttons()[0]);
        backWhenBackMenu.tap();
    }
    else{
        var backWhenBackMenu = app.windows()[0].navigationBar().buttons()[1]; 
        method.checkInstanceExists(app.windows()[0].navigationBar().buttons()[1]);
        backWhenBackMenu.tap();
    }
};

Action.verifyEditingFavoriteCategories = function () {
    $.delay(sleep);
    var version = target.systemVersion();
    version = version.substring(0, version.lastIndexOf("."));
    if(version == "6.1") {
        var menuButton = app.navigationBar().buttons()[0];
        method.checkInstanceExists(app.navigationBar().buttons()[0]);
        menuButton.tap();
        $.delay(sleep);
    
        Action.tapButtonOnMenu(1);
        target.logElementTree();

        //var navName = app.navigationBar()[0].staticTexts()[0].name();
        //method.verifyEquals("編輯喜愛的分類", navName);

        Action.tapButtonOnSidebarWhenCate();
        Assert.buttonOnSidebarIsEnabled();

        Action.tapButtonOnSidebarWhenCate();

        Action.goBackWhenBackMenu();

        menuButton.tap();
    }
    else{
        var menuButton = app.navigationBar().buttons()[1];
        method.checkInstanceExists(app.navigationBar().buttons()[1]);
        menuButton.tap();
        $.delay(sleep);
    
        Action.tapButtonOnMenu(1);
        target.logElementTree();
        
        //var navName = app.navigationBar()[0].staticTexts()[0].name();
        //method.verifyEquals("編輯喜愛的分類", navName);

        Action.tapButtonOnSidebarWhenCate();
        Assert.buttonOnSidebarIsEnabled();

        Action.tapButtonOnSidebarWhenCate();

        Action.goBackWhenBackMenu();

        menuButton.tap();
    }
};

Action.tapFavoriteStoreIcon = function () {
    $.delay(sleep);
    var version = target.systemVersion();
    version = version.substring(0, version.lastIndexOf("."));
    if(version == "6.1") {
        var FavoriteStoreIcon = app.windows()[0].collectionViews()[0].cells()[2].buttons()[0];
        method.checkInstanceExists(app.windows()[0].collectionViews()[0].cells()[2].buttons()[0]);
        FavoriteStoreIcon.tap();
    }
    else{
        var FavoriteStoreIcon = app.windows()[0].collectionViews()[0].cells()[1].buttons()[0];
        method.checkInstanceExists(app.windows()[0].collectionViews()[0].cells()[1].buttons()[0]);
        FavoriteStoreIcon.tap();
    }
    
};

Action.tapFirstViewsOnFavoriteStorePage = function () {
    $.delay(sleep);
    var firstViewsOnFavoriteStorePage = app.windows()[0].collectionViews()[0].cells()[0];
    method.checkInstanceExists(app.windows()[0].collectionViews()[0].cells()[0]);
    firstViewsOnFavoriteStorePage.tap();
};

Action.tapCancelFavoriteStoreIcon = function () {
    $.delay(sleep);
    var version = target.systemVersion();
    version = version.substring(0, version.lastIndexOf("."));
    if(version == "6.1") {
        $.delay(sleep);
        var cancelFavoriteStoreIcon = app.navigationBar().buttons()[2];
        method.checkInstanceExists(app.navigationBar().buttons()[2]);
        cancelFavoriteStoreIcon.tap();
    }
    else{
        var cancelFavoriteStoreIcon = app.navigationBar().buttons()[3];
        method.checkInstanceExists(app.navigationBar().buttons()[3]);
        cancelFavoriteStoreIcon.tap();
    }
};

Action.tapBackOnFavoriteStorePage = function () {
    var backOnFavoriteStorePage = app.navigationBar().buttons()[2];
    method.checkInstanceExists(app.navigationBar().buttons()[2]);
    backOnFavoriteStorePage.tap();
};

Action.tapFirstViewsOnFavoriteStorePageWithOutLogin = function () {
    var firstViewsOnFavoriteStorePageWithOutLogin = app.windows()[0].collectionViews()[0];
    //This action is tapped store views
    firstViewsOnFavoriteStorePageWithOutLogin.tapWithOptions({
        tapOffset: {
            x: 0.46,
            y: 0.52
        }
    });
};

Action.tapStoreCategoryTab = function () {
    $.delay(sleep);
    var version = target.systemVersion();
    version = version.substring(0, version.lastIndexOf("."));
    if(version == "6.1") {
        var storeCategoryTab = app.mainWindow().collectionViews()[0].cells()[1].segmentedControls()[0].buttons()[0];
        method.checkInstanceExists(app.mainWindow().collectionViews()[0].cells()[1].segmentedControls()[0].buttons()[0]);
        storeCategoryTab.tap();
    }
    else{
        var storeCategoryTab = app.mainWindow().collectionViews()[0].cells()[1].buttons()[0];
        method.checkInstanceExists(app.mainWindow().collectionViews()[0].cells()[1].buttons()[0]);
        storeCategoryTab.tap();
    } 
};

Action.tapStoreCommodityTab = function () {
    $.delay(sleep);
    var version = target.systemVersion();
    version = version.substring(0, version.lastIndexOf("."));
    if(version == "6.1") {
        var storeCategoryTab = app.mainWindow().collectionViews()[0].cells()[1].segmentedControls()[0].buttons()[1];
        method.checkInstanceExists(app.mainWindow().collectionViews()[0].cells()[1].segmentedControls()[0].buttons()[1]);
        storeCategoryTab.tap();
    }
    else{
        var storeCategoryTab = app.mainWindow().collectionViews()[0].cells()[1].buttons()[1];
        method.checkInstanceExists(app.mainWindow().collectionViews()[0].cells()[1].buttons()[1]);
        storeCategoryTab.tap();
    } 
};
//6.4
Action.tapItemOnCategoryScreenWhenItemPage = function (itemName) {
    $.delay(sleep);
    var categoryItem = app.mainWindow().tableViews()[0].cells()[itemName];

    method.checkInstanceExists(app.mainWindow().tableViews()[0].cells()[itemName]);
    categoryItem.tap();
};

Action.tapStoreOnShoppingCartPage = function () {
    $.delay(sleep);
    var storeOnShoppingCartPage = app.mainWindow().scrollViews()[0].webViews()[0].links()[4];
    method.checkInstanceExists(app.mainWindow().scrollViews()[0].webViews()[0].links()[4]);
    storeOnShoppingCartPage.tap();
};

Action.tapShareOnProductPage = function () {
    $.delay(sleep);
    var slideTheScreen = app.mainWindow().collectionViews()[0].dragInsideWithOptions({startOffset:{x:0.51, y:0.86}, endOffset:{x:0.98, y:0.04}, duration:1.7});
    $.delay(10);
    var version = target.systemVersion();
    version = version.substring(0, version.lastIndexOf("."));
    if(version == "6.1") {
        var shareOnProductPage = app.mainWindow().collectionViews()[0].cells()[6].tableViews()[0].cells()[5];
        method.checkInstanceExists(app.mainWindow().collectionViews()[0].cells()[6].tableViews()[0].cells()[5]);
        shareOnProductPage.tap();
    }
    else{
        var shareOnProductPage = app.mainWindow().collectionViews()[0].cells()["Empty list"].tableViews()["Empty list"].cells()["分享商品"];
        method.checkInstanceExists(app.mainWindow().collectionViews()[0].cells()["Empty list"].tableViews()["Empty list"].cells()["分享商品"]);
        shareOnProductPage.tap();
    }
    
};

Action.tapCancelButtonOnShareViews = function () {
    $.delay(sleep);
    var cancelButtonOnShareViews = app.mainWindow().buttons()[0];
    method.checkInstanceExists(app.mainWindow().buttons()[0]);
    cancelButtonOnShareViews.tap();
};

Action.tapCollectionList = function () {
    $.delay(sleep);
    var collectionList = app.windows()[0].collectionViews()[0].cells()[0];
    method.checkInstanceExists(app.windows()[0].collectionViews()[0].cells()[0]);
    collectionList.tap();
};

Action.tapProductCollectionButton = function () {
    $.delay(sleep);
    var productCollectionButton = app.mainWindow().tableViews()[0].cells()[3];
    method.checkInstanceExists(app.mainWindow().tableViews()[0].cells()[3]);
    productCollectionButton.tap();
};

Action.tapSale = function () {
    $.delay(sleep);
    var version = target.systemVersion();
    version = version.substring(0, version.lastIndexOf("."));
    if(version == "6.1") {
        var sale = app.mainWindow().collectionViews()[0].cells()[6].tableViews()[0].cells()[0].staticTexts()[0];
        method.checkInstanceExists(app.mainWindow().collectionViews()[0].cells()[6].tableViews()[0].cells()[0].staticTexts()[0]);
        sale.tap();
    }
    else{
        var sale = app.mainWindow().collectionViews()[0].cells()["Empty list"].tableViews()["Empty list"].cells()["促銷活動, 2"];
        method.checkInstanceExists(app.mainWindow().collectionViews()[0].cells()["Empty list"].tableViews()["Empty list"].cells()["促銷活動, 2"]);
        sale.tap();
    }
};

Action.tapCancelOnShoppingCart = function () {
    $.delay(sleep);
    var version = target.systemVersion();
    version = version.substring(0, version.lastIndexOf("."));
    if(version == "6.1") {
        var tapConfirmOnShoppingCart = app.navigationBar()[1].buttons()[0];
        method.checkInstanceExists(app.navigationBar()[1].buttons()[0]);
        tapConfirmOnShoppingCart.tap();
    }
    else{
        var tapConfirmOnShoppingCart = app.navigationBar().buttons()[0];
        method.checkInstanceExists(app.navigationBar().buttons()[0]);
        tapConfirmOnShoppingCart.tap();
    }
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
        method.checkInstanceExists(app.mainWindow().tableViews()[0].cells()["Add Account"]);
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

        $.delay(15);
        
        //Verify user log in successful
        //var userNameOnAccount = app.mainWindow().staticTexts()[1];
        //assertEquals(userNameOnAccount.name(), sUserName);
    }
    catch (err) {
        UIALogger.logError("User unable to login due to: " + err);
    }
};

Action.tapButtonOnMyUserWhenCategory = function (i) {
    $.delay(sleep);
    var version = target.systemVersion();
    version = version.substring(0, version.lastIndexOf("."));
    if(version == "6.1") {
        var buttonOnMyUserWhenCategory = app.mainWindow().tableViews()[0].cells()[i];
        method.checkInstanceExists(app.mainWindow().tableViews()[0].cells()[i]);
        buttonOnMyUserWhenCategory.tap();
    }
    else{
        var buttonOnMyUserWhenCategory = app.mainWindow().tableViews()[1].cells()[i];
        method.checkInstanceExists(app.mainWindow().tableViews()[1].cells()[i]);
        buttonOnMyUserWhenCategory.tap();
    }
};

//6.10
Action.tapChoosePreductCategory = function (i,j) {
    $.delay(sleep);
    var choosePreductCategory = app.mainWindow().collectionViews()[i].cells()[j];
    method.checkInstanceExists(app.mainWindow().collectionViews()[i].cells()[j]);
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
    method.checkInstanceExists(app.mainWindow().collectionViews()[i].cells()[j]);
    choosePreductCategory.tap();
};

//6.10 pan storeOnShoppingCartPage
Action.tapBuyNextTime = function () {
    $.delay(sleep);
    var buyNextTime = app.mainWindow().scrollViews()[0].webViews()[0].links()[2];
    method.checkInstanceExists(app.mainWindow().scrollViews()[0].webViews()[0].links()[2]);
    buyNextTime.tap();
};

Action.tapButtonsInAdvancedBarWhenOp = function () {
    $.delay(sleep);
    var buyNextTime = app.mainWindow().collectionViews()[0].buttons()[0];
    method.checkInstanceExists(app.mainWindow().collectionViews()[0].buttons()[0]);
    buyNextTime.tap();
};

//6.27 pan favoritestores
Action.tapTheFirstCellOnRecommendation = function () {
    $.delay(sleep);
    var theFirstCellOnRecommendation = app.mainWindow().collectionViews()[0].cells()[1];
    method.checkInstanceExists(app.mainWindow().collectionViews()[0].cells()[1]);
    theFirstCellOnRecommendation.tap();
};

//7.1
Action.tapButtonOnSidebarWhenCate = function () {
    $.delay(sleep);
    var version = target.systemVersion();
    version = version.substring(0, version.lastIndexOf("."));
    if(version == "6.1") {
        for (var i = 0; i < 9; i++) {
            var buttonOnSidebar = app.windows()[0].tableViews()[0].cells()[i].staticTexts()[0];
            method.checkInstanceExists(app.windows()[0].tableViews()[0].cells()[i].staticTexts()[0]);
            buttonOnSidebar.tap();
        }
    }
    else{
        for (var i = 0; i < 12; i++) {
            var buttonOnSidebar = app.windows()[0].tableViews()[0].cells()[i].staticTexts()[0];
            method.checkInstanceExists(app.windows()[0].tableViews()[0].cells()[i].staticTexts()[0]);
            buttonOnSidebar.tap();
        }
    }  
};

Action.tapButtonOnSidebarWhenCategory = function () {
    $.delay(sleep);
    var version = target.systemVersion();
    version = version.substring(0, version.lastIndexOf("."));
    if(version == "6.1") {
        var menuButton = app.navigationBar().buttons()[0];
        method.checkInstanceExists(app.navigationBar().buttons()[0]);
        menuButton.tap();
        $.delay(sleep);
    
        Action.tapButtonOnMenu(1);
        Action.tapButtonOnSidebarWhenCate();

        Assert.buttonOnSidebarIsEnabled();
        Action.tapButtonOnSidebarWhenCate();

        Action.goBackWhenBackMenu();

        menuButton.tap();
    }
    else{
        var menuButton = app.navigationBar().buttons()[1];
        menuButton.tap();
        $.delay(sleep);
    
        Action.tapButtonOnMenu(1);
        Action.tapButtonOnSidebarWhenCate();

        Assert.buttonOnSidebarIsEnabled();
        Assert.categoriesList
        Action.tapButtonOnSidebarWhenCate();
        
        Action.goBackWhenBackMenu();

        menuButton.tap();
    }
};

Action.pageShow = function () {
    $.delay(sleep);
    var version = target.systemVersion();
    version = version.substring(0, version.lastIndexOf("."));
    if(version == "6.1") {
        var pageShow = app.mainWindow().collectionViews()[0].staticTexts()[1];
        method.checkInstanceExists(pageShow);
    }
    else{
        var pageShow = app.mainWindow().collectionViews()[0].staticTexts()[0];
        method.checkInstanceExists(pageShow);
    }
};

Action.determineTheLogin = function () {
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

            Action.tapAddAccountOnLogin("mobileappstore3", "A1234qwer");
            $.delay(12);

            Action.tapButtonOnTabBar(0);
        }
        else{
            //Tap exit button exit login window.
            Action.exitLoginWindow();
            $.delay(sleep);
            //Verify login window show correct.
            Action.doUserLogin("mobileappstore3", "A1234qwer");
            $.delay(12);

            Action.tapButtonOnTabBar(0);
        }
    }
};