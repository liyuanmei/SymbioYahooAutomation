Assert.commodityHeader = function (){
    $.delay(sleep);
    var version = target.systemVersion();
    version = version.substring(0,1);
    if(version == "6") {
        $.delay(sleep);
        method.verifyEquals(varTestApparel, app.navigationBar().name());
        method.verifyEquals(1, app.navigationBar().buttons()[1].isEnabled());
        }
        else{
        method.verifyEquals(varTestApparel, app.navigationBar().name());
        method.verifyEquals(varTestApparelPicture, app.navigationBar().buttons()[0].name());
        method.verifyEquals(1, app.navigationBar().buttons()[2].isEnabled());
    }
};

Assert.categoryScreen = function () {
    $.delay(sleep);
    method.verifyEquals(varTestCategoryName, app.navigationBar().name());
};

Assert.checkTab = function () {
    $.delay(sleep);
    var version = target.systemVersion();
    version = version.substring(0,1);
    if(version == "6") {
        $.delay(sleep);
        method.verifyEquals(varTestCategoryCommodityTab,app.mainWindow().collectionViews()[0].cells()[0].segmentedControls()[0].buttons()[1].name());
        method.verifyEquals(varTestCategoryClassificationTab,app.mainWindow().collectionViews()[0].cells()[0].segmentedControls()[0].buttons()[0].name());
        }
        else{
        method.verifyEquals(varTestCategoryCommodityTab,app.mainWindow().collectionViews()[0].cells()[0].buttons()[1].name());
        method.verifyEquals(varTestCategoryClassificationTab,app.mainWindow().collectionViews()[0].cells()[0].buttons()[0].name());
    }
};

Assert.verifyApparelCategory = function () {
    this.CategoryItem = [varTestCategoryClassificationTab, varTestCategoryItemName1, varTestCategoryItemName2, varTestCategoryItemName3, varTestCategoryItemName4, varTestCategoryItemName5, varTestCategoryItemName6];

    $.delay(sleep);

    method.verifyEquals(7, app.mainWindow().collectionViews()[0].cells().length);
    
    var version = target.systemVersion();
    version = version.substring(0,1);
    if(version == "6") {
        $.delay(sleep);
        method.verifyEquals(varTestCategoryItemName1, app.mainWindow().collectionViews()[0].cells()[1].staticTexts()[0].name());
        method.verifyEquals(varTestCategoryItemName2, app.mainWindow().collectionViews()[0].cells()[2].staticTexts()[0].name());
        method.verifyEquals(varTestCategoryItemName3, app.mainWindow().collectionViews()[0].cells()[3].staticTexts()[0].name());
        method.verifyEquals(varTestCategoryItemName4, app.mainWindow().collectionViews()[0].cells()[4].staticTexts()[0].name());
        method.verifyEquals(varTestCategoryItemName5, app.mainWindow().collectionViews()[0].cells()[5].staticTexts()[0].name());
        method.verifyEquals(varTestCategoryItemName6, app.mainWindow().collectionViews()[0].cells()[6].staticTexts()[0].name());
        }
        else{
        method.verifyEquals(varTestCategoryItemName1, app.mainWindow().collectionViews()[0].cells()[1].name());
        method.verifyEquals(varTestCategoryItemName2, app.mainWindow().collectionViews()[0].cells()[2].name());
        method.verifyEquals(varTestCategoryItemName3, app.mainWindow().collectionViews()[0].cells()[3].name());
        method.verifyEquals(varTestCategoryItemName4, app.mainWindow().collectionViews()[0].cells()[4].name());
        method.verifyEquals(varTestCategoryItemName5, app.mainWindow().collectionViews()[0].cells()[5].name());
        method.verifyEquals(varTestCategoryItemName6, app.mainWindow().collectionViews()[0].cells()[6].name());
    }
};

Assert.commodityButtonStatus = function () {
    $.delay(sleep);
    var version = target.systemVersion();
    version = version.substring(0,1);
    if(version == "6") {
        var commodityButtonStatus = app.mainWindow().collectionViews()[0].cells()[0].segmentedControls()[0].buttons()[1].isEnabled();
        method.verifyEquals(1, commodityButtonStatus);
        }
        else{
        var commodityButtonStatus = app.mainWindow().collectionViews()[0].cells()[0].buttons()[1].isEnabled();
        method.verifyEquals(1, commodityButtonStatus);
    }
};

Assert.categoryButtonStatus  = function () {
    $.delay(sleep);
    var categoryButtonStatus = app.mainWindow().collectionViews()[0].cells()[0].buttons()[0].isEnabled();
    method.verifyEquals(1, categoryButtonStatus);
};

Assert.commodityItemsShowCount = function (iCount) {
    $.delay(sleep);
    var commodityItemListCount = app.mainWindow().collectionViews()[0].cells().length;

    //Due to the first cell is commodity and category tab, so the array list should plus one.
    method.verifyEquals(iCount, commodityItemListCount);
};

Assert.categoriesList = function () {
    $.delay(sleep);
    var version = target.systemVersion();
    version = version.substring(0,1);
    if(version == "6") {
        this.CategoriesName = [
        varTestApparel,
        varTestCategoryBeautyMakeup,
        varTestCategoryShoeAndBag,
        varTestCategoryMom,
        varTestCategoryComputer,
        varTestCategoryHomeAppliance,
        varTestCategoryCameraCompatible,
        varTestCategoryFoodCompatible,
        varTestCategoryMedicalCompatible,
        varTestCategoryHouseholdLifeCompatible,
        varTestCategoryActionCompatible,
        varTestCategoryBooksCompatible 
        ];
        for (var i = 0; i < 9; i++) {
        method.verifyEquals(this.CategoriesName[i], app.mainWindow().tableViews()[0].cells()[i].name());
        }
        }
        else{
        this.CategoriesName = [
        varTestApparel,
        varTestCategoryBeautyMakeup,
        varTestCategoryShoeAndBag,
        varTestCategoryMom,
        varTestCategoryComputer,
        varTestCategoryHomeAppliance,
        varTestCategoryCamera,
        varTestCategoryFood,
        varTestCategoryMedical,
        varTestCategoryHouseholdLife,
        varTestCategoryAction,
        varTestCategoryBooks
        ];
        $.delay(sleep);
        for (var i = 0; i < 12; i++) {
        method.verifyEquals(this.CategoriesName[i], app.mainWindow().tableViews()[1].cells()[i].name());
    }
    }
};

Assert.buttonOnAdvancedIsEnabled = function (i) {
    $.delay(sleep);
    var buttonOnAdvanced = app.mainWindow().segmentedControls()[0].buttons()[i];
    method.verifyEquals(1, buttonOnAdvanced.isEnabled());
};

Assert.elementsOrderInSortTab = function () {
    $.delay(sleep);
    var version = target.systemVersion();
    version = version.substring(0,1);
    if(version == "6") {
        var sortTabTableView = app.mainWindow().tableViews()[0];
        }
        else{
        var sortTabTableView = app.mainWindow().tableViews()[1];
    }

    var relevanceValue = sortTabTableView.cells()[0].name();
    var popularity = sortTabTableView.cells()[1].name();
    var latestItems = sortTabTableView.cells()[2].name();
    var priceLowToHigh = sortTabTableView.cells()[3].name();
    var priceHighToLow = sortTabTableView.cells()[4].name();
    
    method.verifyEquals(varTestsRelevanceValueInSorting, relevanceValue);
    method.verifyEquals(varTestsPopularityInSorting, popularity);
    method.verifyEquals(varTestsLatestItemsInSorting, latestItems);
    method.verifyEquals(varTestsPriceLowToHighInSorting, priceLowToHigh);
    method.verifyEquals(varTestsPriceHighToLowInSorting, priceHighToLow);
};

Assert.elementsOnFilterScreen = function () {
    $.delay(sleep);
    var version = target.systemVersion();
    version = version.substring(0,1);
    if(version == "6") {
        //Verify "100000 + 元" show correct.
        var priceNumber100000 = app.mainWindow().staticTexts()[0].name();
        method.verifyEquals(varTestsPriceNumber100000, priceNumber100000);

        //Verify "0 元" show correct.
        var priceNumber0 = app.mainWindow().staticTexts()[1].name();
        method.verifyEquals(varTestsPriceNumber0, priceNumber0);

        //verify circle image and bar image show correct.
        var circleImage1 = app.mainWindow().images()[0].name();
        var circleImage2 = app.mainWindow().images()[1].name();
        var barImage1 = app.mainWindow().images()[2].name();
        var barImage2 = app.mainWindow().images()[3].name();

        method.verifyEquals(varTestscircleImage1, circleImage1);
        method.verifyEquals(varTestscircleImage2, circleImage2);
        method.verifyEquals(varTestsbarImage1, barImage1);
        method.verifyEquals(varTestsbarImage2, barImage2);

        //Verify all attribute elements show correct.
        this.AttributeElements = [
        varTestsItemInAdvancedBarChoose1,
        varTestsItemInAdvancedBarChoose2,
        varTestsItemInAdvancedBarChoose3,
        varTestsItemInAdvancedBarChoose4,
        varTestsItemInAdvancedBarChoose5,
        varTestsItemInAdvancedBarChoose6,
        varTestsItemInAdvancedBarChoose7,
        varTestsItemInAdvancedBarChoose8,
        varTestsItemInAdvancedBarChoose9];

        for (var i = 0; i < 9; i++){
        method.verifyEquals(this.AttributeElements[i], app.mainWindow().collectionViews()[0].cells()[i].staticTexts()[0].name());
        }
        }
        else{
        //Verify "100000 + 元" show correct
        var priceNumber100000 = app.mainWindow().staticTexts()[1].name();
        method.verifyEquals(varTestsPriceNumber100000, priceNumber100000);

        //Verify "0 元" show correct.
        var priceNumber0 = app.mainWindow().staticTexts()[2].name();
        method.verifyEquals(varTestsPriceNumber0, priceNumber0);

        //verify circle image and bar image show correct.
        var circleImage1 = app.mainWindow().images()[2].name();
        var circleImage2 = app.mainWindow().images()[3].name();
        var barImage1 = app.mainWindow().images()[4].name();
        var barImage2 = app.mainWindow().images()[5].name();

        method.verifyEquals(varTestscircleImage1, circleImage1);
        method.verifyEquals(varTestscircleImage2, circleImage2);
        method.verifyEquals(varTestsbarImage2, barImage1);
        method.verifyEquals(varTestsbarImage1, barImage2);

        //Verify all attribute elements show correct.
        this.AttributeElements = [
        varTestsItemInAdvancedBarChoose1,
        varTestsItemInAdvancedBarChoose2,
        varTestsItemInAdvancedBarChoose3,
        varTestsItemInAdvancedBarChoose4,
        varTestsItemInAdvancedBarChoose5,
        varTestsItemInAdvancedBarChoose6,
        varTestsItemInAdvancedBarChoose7,
        varTestsItemInAdvancedBarChoose8,
        varTestsItemInAdvancedBarChoose9];

        for (var i = 0; i < 9; i++){
        method.verifyEquals(this.AttributeElements[i], app.mainWindow().collectionViews()[1].cells()[i].name());
    }
    }
};

Assert.buttonExistOnNavigationBar = function (i, sName) {
    $.delay(sleep);

    var navBar = app.navigationBar().buttons()[i];
    method.verifyEquals(sName, navBar.name());
};

Assert.filterAttributeButtonIsTapped = function (i) {
    $.delay(sleep);
    var version = target.systemVersion();
    version = version.substring(0,1);
    if(version == "6") {
        var attributeButton = app.mainWindow().collectionViews()[0].cells()[i].staticTexts()[0];
        method.verifyEquals(1, attributeButton.isEnabled());
        }
        else{
        var attributeButton = app.mainWindow().collectionViews()[1].cells()[i];
        method.verifyEquals(1, attributeButton.isEnabled());
    }
};

Assert.filterAttributeButtonIsNotTapped = function (i) {
    $.delay(sleep);
    var version = target.systemVersion();
    version = version.substring(0,1);
    if(version == "6") {
        var attributeButton = app.mainWindow().collectionViews()[0].cells()[i].staticTexts()[0];
        method.verifyEquals(1, attributeButton.isEnabled());
        }
        else{
        var attributeButton = app.mainWindow().collectionViews()[1].cells()[i];
        method.verifyEquals(1, attributeButton.isEnabled());
        }
};

Assert.navigationBarName = function (sName) {
    $.delay(sleep);
    method.verifyEquals(sName, app.navigationBar().name());
};

Assert.itemPageShowCorrect = function () {
    $.delay(sleep);

    var collectionViews = app.mainWindow().collectionViews()[0];

    $.delay(sleep);
    var version = target.systemVersion();
    version = version.substring(0,1);
    if(version == "6") {
        var addToCartButton = collectionViews.cells()[5].buttons()[0];
        var butButton = collectionViews.cells()[5].buttons()[1];
    
        method.verifyEquals(varTestsBuyButtons, addToCartButton.name());
        method.verifyEquals(varTestsAddButtons, butButton.name());
    }
    else{
        //Assert buy and add to cart button show correct.
        var addToCartButton = collectionViews.cells()["立即購買"].buttons()[0];
        var butButton = collectionViews.cells()["立即購買"].buttons()[1];
    
        method.verifyEquals(varTestsBuyButtons, addToCartButton.name());
        method.verifyEquals(varTestsAddButtons, butButton.name());
    }
};

/**
  * Verify the price of product show correct.
  * This function need pas two parameters.
  * productIndex, is which product you want verify, 
  * priceIndex, is the price index, sometimes different product priceIndex is different.
**/
Assert.productPriceShowCorrect = function (productIndex, priceIndex) {
    $.delay(sleep);
    var collectionViews = app.mainWindow().collectionViews()[0];

    var itemCell = collectionViews.cells()[productIndex];
    var priceLocate = itemCell.staticTexts()[priceIndex];
    var priceValue = priceLocate.value();

    //Use the regex to match the first characters is $
    var stringRe = /^\$/g.test(priceValue);
    method.verifyTrue(stringRe, "The first characters not $");
};

/**
  * Verify the rating of product show correct.
  * This function need pas three parameters.
  * productIndex, is which product you want verify, 
  * ratingIndex, is the rating index, sometimes different product rating index is different.
**/
Assert.storeRatingShowCorrect = function (productIndex, ratingIndex) {
    $.delay(sleep);
    var collectionViews = app.mainWindow().collectionViews()[0];

    var itemCell = collectionViews.cells()[productIndex];
    var ratingIndexValue = itemCell.staticTexts()[ratingIndex];
    var ratingValue = ratingIndexValue.value();
    
    //Get the value of rating, if this value is less than 10 then return True.
    method.verifyTrue(ratingValue <= 10, "Rating value isnot correct, the value is greater than 10");
};

Assert.favoritesIconShowCorrect = function (productIndex) {
    $.delay(sleep);
    var collectionViews = app.mainWindow().collectionViews()[0];

    var itemCell = collectionViews.cells()[productIndex];
    var favoritesIcon = itemCell.buttons()[0];
    var favoritesIconName = favoritesIcon.name();

    method.verifyEquals("icon star", favoritesIconName);
};

Assert.logInWindowShowCorrect = function (sLogin, sForgotPassword, sCreateAccount) {
    $.delay(sleep);

    var yahooLogoName = app.mainWindow().images()[0].name();
    method.verifyEquals("yaccounts_logo_purple", yahooLogoName);

    var loginButtonName = app.mainWindow().buttons()[0].name();
    method.verifyEquals(sLogin, loginButtonName);

    var forgotPasswordButtonName = app.mainWindow().buttons()[1].name();
    method.verifyEquals(sForgotPassword, forgotPasswordButtonName);

    var createAccountButtonName = app.mainWindow().buttons()[2].name();
    method.verifyEquals(sCreateAccount, createAccountButtonName);
};

Assert.userLoginHistoryScreen = function (sNavBarName, sUserName) {
    $.delay(sleep);

    //Verify navigation bar name show correct.
    var navBarName = app.navigationBar().name();
    method.verifyEquals(sNavBarName, navBarName);

    //Verify user name show correct.
    var tableview = app.mainWindow().staticTexts()[1];
    var username = tableview.name();
    method.verifyEquals(sUserName, username);
};

Assert.productAddedToMyFavoritesScreen = function (productName) {
    $.delay(4);
    var version = target.systemVersion();
    version = version.substring(0,1);
    if(version == "6") {
        var collectionView = app.mainWindow().collectionViews()[0];
        var productCell = collectionView.cells()[0].staticTexts()[0];

        method.verifyEquals(productName, productCell.name());
    }
    else{
        var collectionView = app.mainWindow().collectionViews()[0];
        var productCell = collectionView.cells()[0];

        method.verifyEquals(productName, productCell.name());
    }
};

Assert.productRemovedFromMyFavoritesScreen = function (productName) {
    $.delay(4);
    var collectionView = app.mainWindow().collectionViews()[0];
    var productCell = collectionView.cells()[0];

    assertNotEquals(productName, productCell.name());
};

 Assert.buttonOnTabBarShowCorrect = function (buttonName) {
    $.delay(sleep);
    var tabBar = app.mainWindow().tabBar();
    var button = tabBar.buttons()[buttonName];

    method.verifyTrue(button.isVisible(), buttonName + " not exist");
 };

Assert.buttonExist = function (elements) {
    if (elements.isVisible() == true) {
      UIALogger.logMessage(elements.name() + " button exists on screen.");
    }
    else {
      UIALogger.logError(elements.name() + " Cannot found button.");
    }
    return true;
};

Assert.checkButtonExist = function (elements) {
    $.delay(sleep);
    method.verifyTrue(Assert.buttonExist(elements), elements.name() + " button not exists");
};

Assert.itemCellShowCorrectOnCategoryScreen = function (itemName) {
    $.delay(sleep);
    var itemCell = app.mainWindow().tableViews()[0].cells()[itemName];
    var itemCellName = itemCell.name();

    method.verifyEquals(itemName, itemCellName);
};

Assert.allCategoryItemShowCorrect = function (i, itemName) {
    $.delay(sleep);
    var version = target.systemVersion();
    version = version.substring(0,1);
    if(version == "6") {
        var itemCell = app.mainWindow().tableViews()[0].cells()[i];
        var tabItemName = itemCell.name();

        method.verifyEquals(itemName, tabItemName);
    }
    else{
        var itemCell = app.mainWindow().tableViews()[1].cells()[i];
        var tabItemName = itemCell.name();

        method.verifyEquals(itemName, tabItemName);
    }
};

Assert.elementsShouldContainText = function (elements, keyword) {
    $.delay(sleep);
    var elementsName = elements.name();
    $.delay(sleep);
    method.verifyTrue(elementsName.indexOf(keyword) >= 0, elementsName + " not contain text: " + keyword);
};

Assert.numberOfItemsShowCorrect = function (elements) {
    $.delay(sleep);
    var numberOfItems = elements.name();
    UIALogger.logMessage(numberOfItems);

    var stringRe = /\d/g.test(numberOfItems);

    method.verifyTrue(stringRe, "elements: " + numberOfItems + " not contains numbers");
};

Assert.advancedButtonsOrder = function () {
    $.delay(sleep);
    var segmentedControl = app.mainWindow().segmentedControls()[0];
    var button1 = segmentedControl.buttons()[0];
    var button2 = segmentedControl.buttons()[1];
    var button3 = segmentedControl.buttons()[2];

    var button1Name = button1.name();
    var button2Name = button2.name();
    var button3Name = button3.name();

    method.verifyEquals(button1Name, varTestsSortingInAdvancedBar);
    method.verifyEquals(button2Name, varTestsBrowseInAdvancedBar);
    method.verifyEquals(button3Name, varTestsChooseInAdvancedBar);
};

Assert.successfulSwitchToPhotoGridView = function () {
    $.delay(sleep);
    var version = target.systemVersion();
    version = version.substring(0,1);
    if(version == "6") {
        //Get first cell and second cell X and Y
        var firstCell = app.mainWindow().collectionViews()[0].cells()[4];
        var firstCellX = Action.getElementsOriginXString(firstCell);
        var firstCellY = Action.getElementsOriginYString(firstCell);

        var secondCell = app.mainWindow().collectionViews()[0].cells()[2];
        var secondCellX = Action.getElementsOriginXString(secondCell);
        var secondCellY = Action.getElementsOriginYString(secondCell);

        //if first cellY == secondCellY then these two cell place at same line.
        //So collectionview successful switch to photo grid view.
        method.verifyEquals(firstCellY, secondCellY);
    }
    else{
        //Get first cell and second cell X and Y
        var firstCell = app.mainWindow().collectionViews()[0].cells()[1];
        var firstCellX = Action.getElementsOriginXString(firstCell);
        var firstCellY = Action.getElementsOriginYString(firstCell);

        var secondCell = app.mainWindow().collectionViews()[0].cells()[2];
        var secondCellX = Action.getElementsOriginXString(secondCell);
        var secondCellY = Action.getElementsOriginYString(secondCell);

        //if first cellY == secondCellY then these two cell place at same line.
        //So collectionview successful switch to photo grid view.
        method.verifyEquals(firstCellY, secondCellY);
    }
};

Assert.successfulSwitchToListingView = function () {
    $.delay(sleep);
    var version = target.systemVersion();
    version = version.substring(0,1);
    if(version == "6") {
        //Get first cell and second cell X and height
        var firstCell = app.mainWindow().collectionViews()[0].cells()[1];
        var firstCellX = Action.getElementsOriginXString(firstCell);
        var firstCellHeight = Action.getElementsHeightString(firstCell);

        var secondCell = app.mainWindow().collectionViews()[0].cells()[2];
        var secondCellX = Action.getElementsOriginXString(secondCell);
        var secondCellHeight = Action.getElementsHeightString(secondCell);

        //verify success switch to listing veiw.
        method.verifyEquals(firstCellX, secondCellX);
        method.verifyTrue(firstCellHeight == secondCellHeight && firstCellHeight < 130 && secondCellHeight < 130, "Switch to listing mode failed.");
    }
    else{
        //Get first cell and second cell X and height
        var firstCell = app.mainWindow().collectionViews()[0].cells()[1];
        var firstCellX = Action.getElementsOriginXString(firstCell);
        var firstCellHeight = Action.getElementsHeightString(firstCell);

        var secondCell = app.mainWindow().collectionViews()[0].cells()[2];
        var secondCellX = Action.getElementsOriginXString(secondCell);
        var secondCellHeight = Action.getElementsHeightString(secondCell);

        //verify success switch to listing veiw.
        method.verifyEquals(firstCellX, secondCellX);
        method.verifyTrue(firstCellHeight == secondCellHeight && firstCellHeight < 130 && secondCellHeight < 130, "Switch to listing mode failed.");
    }
};

Assert.successfulSwitchToLargeImageView = function () {
    $.delay(sleep);

    //get first cell width and height.
    var firstCell = app.mainWindow().collectionViews()[0].cells()[1];
    var firstCellWidth = Action.getElementsWidthString(firstCell);
    var firstCellHeight = Action.getElementsHeightString(firstCell);

    method.verifyTrue(firstCellWidth == 320 && firstCellHeight > 320 && firstCellHeight < 450, "Switch to large image view failed.");
};

Assert.checkPriceBarShowCorrect = function (price) {
    $.delay(sleep);
    var version = target.systemVersion();
    version = version.substring(0,1);
    if(version == "6") {
        //Verify price show correct.
        var priceNumber = app.mainWindow().staticTexts()[0].name();
        method.verifyEquals(price, priceNumber);
    }
    else{
        //Verify price show correct.
        var priceNumber = app.mainWindow().staticTexts()[1].name();
        method.verifyEquals(price, priceNumber);
    }
};

Assert.checkPriceValueShowLessThan = function (productIndex, priceIndex, value) {
    var collectionViews = app.mainWindow().collectionViews()[0];

    var itemCell = collectionViews.cells()[productIndex];
    var priceLocate = itemCell.staticTexts()[priceIndex];
    var priceValue = priceLocate.value();

    var priceNumber = priceValue.replace(/[^\d\.-]/g, "");

    $.message(priceNumber);
    //verify the price number should less than "value"
    method.verifyTrue(priceNumber >= value, "price not show correct.");
};

Assert.check18BanScreenShowCorrect = function () {
    $.delay(sleep);
    var version = target.systemVersion();
    version = version.substring(0,1);
    if(version == "6") {
        var imageOn18Ban = app.mainWindow().images()[0];
        var backButtonOn18Ban = app.mainWindow().buttons()[0];
        var submitButtonOn18Ban = app.mainWindow().buttons()[1];
        var staticTextsOn18Ban = app.mainWindow().staticTexts()[0];

        method.verifyEquals(backButtonOn18Ban.name(), varTestBackButtonOn18Ban);
        method.verifyEquals(submitButtonOn18Ban.name(), varTestSubmitButtonOn18Ban);
        method.verifyEquals(staticTextsOn18Ban.name(), varTestStaticTextsOn18Ban);
    }
    else{
        var imageOn18Ban = app.mainWindow().images()[1];
        var backButtonOn18Ban = app.mainWindow().buttons()[1];
        var submitButtonOn18Ban = app.mainWindow().buttons()[2];
        var staticTextsOn18Ban = app.mainWindow().staticTexts()[1];

        method.verifyEquals(backButtonOn18Ban.name(), varTestBackButtonOn18Ban);
        method.verifyEquals(submitButtonOn18Ban.name(), varTestSubmitButtonOn18Ban);
        method.verifyEquals(staticTextsOn18Ban.name(), varTestStaticTextsOn18Ban);
    }
};

//pan
Assert.buttonOnSidebarIsEnabled = function () {
    $.delay(sleep);
    for (var i = 0; i < 12; i++) {
        var buttonOnSidebar = app.windows()[0].tableViews()[0].cells()[i].staticTexts()[0];
        method.verifyEquals(1, buttonOnSidebar.isEnabled());
    };  
};

Assert.checkStoreName = function(i){
    $.delay(sleep);
    var finalStoreName = app.windows()[0].collectionViews()[0].cells()[0].staticTexts()[0].name();
    method.verifyEquals(i, finalStoreName);
};

Assert.checkStoreCategoryCellsShowCorrectly = function () {
    var StoreCategoryCellsShowCorrectly = app.mainWindow().collectionViews()[0].cells().length<41;
    $.delay(5);
    method.verifyTrue(app.mainWindow().collectionViews()[0].cells().length<41);
};

Assert.checkStoreCategoryTabIsEnabled = function () {
    $.delay(sleep);
    var storeCategoryTabIsEnabled = app.mainWindow().collectionViews()[0].cells()[1].buttons()[0];
    method.verifyEquals(1, storeCategoryTabIsEnabled.isEnabled());
};

Assert.buttonOnSidebarIsEnabled = function () {
    $.delay(sleep);
    for (var i = 0; i < 12; i++) {
        var buttonOnSidebar = app.windows()[0].tableViews()[0].cells()[i].staticTexts()[0];
        method.verifyEquals(1, buttonOnSidebar.isEnabled());
    };  
};
//6.4
Assert.checkStoreNameWhenItemPage = function(i){
    $.delay(sleep);
    var finalStoreName = app.mainWindow().collectionViews()[0].cells()[1].staticTexts()[0].name();
    method.verifyEquals(i, finalStoreName);
};

Assert.checkFavoriteStoreTabIsEnabled = function () {
    $.delay(sleep);
    var favoriteStoreTabIsEnabled = app.mainWindow().tabBar().buttons()[1];
    method.verifyEquals(1, favoriteStoreTabIsEnabled.value());
};

Assert.checkShareButtonIsEnabled = function () {
    $.delay(sleep);
    var mail = app.mainWindow().scrollViews()[0].buttons()[0];
    var fackBook = app.mainWindow().scrollViews()[0].buttons()[1];
    method.verifyEquals(1, mail.isEnabled());
    $.delay(sleep);
    method.verifyEquals(1, fackBook.isEnabled());
};

Assert.checkStoreNameWhenFavoriteItem = function(i){
    $.delay(sleep);
    var finalStoreName = app.mainWindow().collectionViews()[0].cells()[0].staticTexts()[0].name();
    method.verifyEquals(i, finalStoreName);
};

//6.5
Assert.logInWindowShowCorrectOnAddAccount = function () {
    $.delay(sleep);

    var yahooAddAccount = app.mainWindow().tableViews()[0].cells()["Add Account"].staticTexts()[0].name();
    method.verifyEquals("Add Account", yahooAddAccount);
};

//6.6
Assert.checkStoreName = function(i){
    $.delay(sleep);
    var finalStoreName = app.windows()[0].collectionViews()[0].cells()[0].staticTexts()[0].name();
    method.verifyEquals(i, finalStoreName);
};

Assert.checkStoreCategoryTabIsEnabled = function () {
    $.delay(sleep);
    var storeCategoryTabIsEnabled = app.mainWindow().collectionViews()[0].cells()[1].buttons()[0];
    method.verifyEquals(1, storeCategoryTabIsEnabled.isEnabled());
};

Assert.checkDefaultBrowserModeIsList = function () {
    var defaultBrowserModeIsList = app.mainWindow().buttons()[1];
    $.delay(sleep);
    method.verifyEquals(1, defaultBrowserModeIsList.isEnabled());
};

Assert.checkDefaultAdvanceButtonIsSort = function () {
    var DefaultAdvanceButtonIsSort = app.mainWindow().segmentedControls()[0].buttons()[0];
    $.delay(sleep);
    method.verifyEquals(1, DefaultAdvanceButtonIsSort.isEnabled());
};

Assert.checkCategoryOnEditFavoriteIsSelected = function () {
    $.delay(sleep);
    for (var i = 0; i < 12; i++) {
        $.delay(1);
        var categoryOnEditFavoriteIsSelected = app.mainWindow().collectionViews()[0].cells()[i].staticTexts()[0];
        method.verifyEquals(1, categoryOnEditFavoriteIsSelected.isEnabled());
    };    
};

//6.9
Assert.checkFavoriteStoreCellsShowCorrectly = function () {
    var favoriteStoreCellsShowCorrectly = app.mainWindow().collectionViews()[0].cells().length>2;
    $.delay(5);
    method.verifyTrue(app.mainWindow().collectionViews()[0].cells().length>2);
};

Assert.checkFavoriteItemButtonIsTapped = function () {
    $.delay(sleep);
    var version = target.systemVersion();
    version = version.substring(0,1);
    if(version == "6") {
        var favoriteItemButtonIsTapped = app.mainWindow().collectionViews()[0].cells()[2].buttons()[0];
        method.verifyEquals(1, favoriteItemButtonIsTapped.isEnabled());
    }
    else{
        var favoriteItemButtonIsTapped = app.mainWindow().collectionViews()[0].cells()[1].buttons()[0];
        method.verifyEquals(1, favoriteItemButtonIsTapped.value());
    }
};

//6.10
Assert.checkItemNumberOnShoppingCartIsEnabled = function () {
    $.delay(sleep);
    var itemNumberOnShoppingCart = app.mainWindow().scrollViews()[0].webViews()[0].staticTexts()[8];
    method.verifyEquals(1, itemNumberOnShoppingCart.isEnabled());
};

//6.11
Assert.checkTextShowCorrectly = function (i,j) {
    $.delay(sleep);
    var checkTextShowCorrectly = app.mainWindow().scrollViews()[0].webViews()[0].staticTexts()[i];
    method.verifyEquals(j,checkTextShowCorrectly.name());
};

//6.30
Assert.checkDefaultBrowserModeIsLargePhoto = function () {
    var defaultBrowserModeIsList = app.mainWindow().buttons()[3];
    $.delay(sleep);
    method.verifyEquals(1, defaultBrowserModeIsList.isEnabled());
};

//7.1
Assert.elementsValueShouldContainText = function (elements, keyword) {
    $.delay(sleep);
    var elementsName = elements.value();
    $.delay(sleep);
    method.verifyTrue(elementsName.indexOf(keyword) >= 0, elementsName + " not contain text: " + keyword);
};

Assert.check18BanScreenShowCorrectOnFavStore = function () {
    $.delay(sleep);
    var version = target.systemVersion();
    version = version.substring(0,1);
    if(version == "6") {
        var imageOn18Ban = app.mainWindow().images()[0];
        var backButtonOn18Ban = app.mainWindow().buttons()[0];
        var submitButtonOn18Ban = app.mainWindow().buttons()[1];
        var staticTextsOn18Ban = app.mainWindow().staticTexts()[0];

        method.verifyEquals(backButtonOn18Ban.name(), varTestBackButtonOn18Ban);
        method.verifyEquals(submitButtonOn18Ban.name(), varTestSubmitButtonOn18Ban);
        method.verifyEquals(staticTextsOn18Ban.name(), varTestStaticTextsOn18Ban);
    }
    else{
        var imageOn18Ban = app.mainWindow().images()[0];
        var backButtonOn18Ban = app.mainWindow().buttons()[0];
        var submitButtonOn18Ban = app.mainWindow().buttons()[1];
        var staticTextsOn18Ban = app.mainWindow().staticTexts()[0];

        method.verifyEquals(backButtonOn18Ban.name(), varTestBackButtonOn18Ban);
        method.verifyEquals(submitButtonOn18Ban.name(), varTestSubmitButtonOn18Ban);
        method.verifyEquals(staticTextsOn18Ban.name(), varTestStaticTextsOn18Ban);
    }
};

Assert.checkCategoryEditor = function () {
    $.delay(sleep);
    var version = target.systemVersion();
    version = version.substring(0,1);
    if(version == "6") {
        this.CategoriesName = [
        varTestApparel,
        varTestCategoryBeautyMakeup,
        varTestCategoryShoeAndBag,
        varTestCategoryMom,
        varTestCategoryComputer,
        varTestCategoryHomeAppliance,
        varTestCategoryCameraCompatible,
        varTestCategoryFoodCompatible,
        varTestCategoryMedicalCompatible,
        varTestCategoryHouseholdLifeCompatible
        ];
        for (var i = 0; i < 10; i++) {
        method.verifyEquals(this.CategoriesName[i], app.mainWindow().collectionViews()[0].cells()[i].staticTexts()[0].name());
        }
        }
        else{
        this.CategoriesName = [
        varTestApparel,
        varTestCategoryBeautyMakeup,
        varTestCategoryShoeAndBag,
        varTestCategoryMom,
        varTestCategoryComputer,
        varTestCategoryHomeAppliance,
        varTestCategoryCamera,
        varTestCategoryFood,
        varTestCategoryMedical,
        varTestCategoryHouseholdLife
        ];
        $.delay(sleep);
        for (var i = 0; i < 10; i++) {
        method.verifyEquals(this.CategoriesName[i], app.mainWindow().collectionViews()[0].cells()[i].staticTexts()[0].name());
    }
    }
};

Assert.ckeckHeartIconOnNavigationBarIsTapped = function () {
    $.delay(5);
    var ckeckHeartIconOnNavigationBar = app.navigationBar().buttons()[3].value();
    method.verifyEquals(1,ckeckHeartIconOnNavigationBar);
};

Assert.checkGoodsCollectionSuccessful = function () {
    $.delay(sleep);
    var version = target.systemVersion();
    version = version.substring(0,1);
    if(version == "6") {
        method.verifyTrue(app.mainWindow().collectionViews()[0].cells().length>2);
    }
    else{
        method.verifyTrue(app.mainWindow().collectionViews()[0].cells().length>1);
    }
};

Assert.checkStoreCategoryCellsShowCorrectlyWhenStorePage = function () {
    $.delay(sleep);
    for (var i = 2; i < 4; i++) {
            $.delay(1);
            var checkStoreCategoryCellsShowCorrectly = app.mainWindow().collectionViews()[0].cells()[i].staticTexts()[0];
            method.verifyEquals(1, checkStoreCategoryCellsShowCorrectly.isEnabled());
    }
};