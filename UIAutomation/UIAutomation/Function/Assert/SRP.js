Assert.checkGoodsAndStoreTabDisplay = function  () {
    $.delay(sleep);
    var version = target.systemVersion();
    version = version.substring(0, version.lastIndexOf("."));
    if(version == "6.1") {
        method.verifyEquals(varTestCategoryCommodityTab,app.mainWindow().collectionViews()[0].cells()[0].segmentedControls()[0].buttons()[0].name());
        method.verifyEquals(varTestCategoryStoreTab,app.mainWindow().collectionViews()[0].cells()[0].segmentedControls()[0].buttons()[1].name());
    }
    else{
        method.verifyEquals(varTestCategoryCommodityTab,app.mainWindow().collectionViews()[0].cells()[0].buttons()[0].name());
        method.verifyEquals(varTestCategoryStoreTab,app.mainWindow().collectionViews()[0].cells()[0].buttons()[1].name());
    }
};

Assert.checkButtonOnList = function (sKey) {
    $.delay(sleep);
    method.verifyEquals(sKey,app.mainWindow().collectionViews()[0].cells()[1].buttons()[0].name());
};

Assert.tapTabCheckSListDisplay = function () {
    $.delay(sleep);
    method.verifyTrue(app.mainWindow().collectionViews()[0].cells().length<21);
};

Assert.elementsOrderInSortTabWhenSRP = function () {
    $.delay(sleep);

    var relevanceValue = app.mainWindow().tableViews()[0].cells()[0].staticTexts()[0].name();
    var popularity = app.mainWindow().tableViews()[0].cells()[1].staticTexts()[0].name();
    var latestItems = app.mainWindow().tableViews()[0].cells()[2].staticTexts()[0].name();
    var priceLowToHigh = app.mainWindow().tableViews()[0].cells()[3].staticTexts()[0].name();
    var priceHighToLow = app.mainWindow().tableViews()[0].cells()[4].staticTexts()[0].name();
    
    method.verifyEquals(varTestsRelevanceValueInSorting, relevanceValue);
    method.verifyEquals(varTestsPopularityInSorting, popularity);
    method.verifyEquals(varTestsLatestItemsInSorting, latestItems);
    method.verifyEquals(varTestsPriceLowToHighInSorting, priceLowToHigh);
    method.verifyEquals(varTestsPriceHighToLowInSorting, priceHighToLow);
};

Assert.elementsOnFilterScreenWhenSRP = function () {
    $.delay(sleep);

    //Verify "100000 + 元" show correct
    var priceNumber100000 = app.mainWindow().staticTexts()[0].name();
    method.verifyEquals(varTestsPriceNumber100000, priceNumber100000);

    //Verify "0 元" show correct.
    var priceNumber0 = app.mainWindow().staticTexts()[1].name();
    method.verifyEquals(varTestsPriceNumber0, priceNumber0);

    //verify circle image and bar image show correct.
    var circleImage1 = app.mainWindow().images()[0].name();
    var circleImage2 = app.mainWindow().images()[1].name();
    $.delay(sleep);
    var version = target.systemVersion();
    version = version.substring(0, version.lastIndexOf("."));
    if(version == "6.1") {
        var barImage1 = app.mainWindow().images()[3].name();
        var barImage2 = app.mainWindow().images()[2].name();
    }
    else{
        var barImage1 = app.mainWindow().images()[2].name();
        var barImage2 = app.mainWindow().images()[3].name();
    }
    
    method.verifyEquals(varTestscircleImage1, circleImage1);
    method.verifyEquals(varTestscircleImage2, circleImage2);
    method.verifyEquals(varTestsbarImage2, barImage1);
    method.verifyEquals(varTestsbarImage1, barImage2);

    //Verify all attribute elements show correct
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
        $.delay(sleep);
        var version = target.systemVersion();
    version = version.substring(0, version.lastIndexOf("."));
    if(version == "6.1") {
        method.verifyEquals(this.AttributeElements[i], app.mainWindow().collectionViews()[0].cells()[i].staticTexts()[0].name());
    }
        else{
        method.verifyEquals(this.AttributeElements[i], app.mainWindow().collectionViews()[1].cells()[i].name());
    }
    }
};

Assert.itemPageShowCorrectOnCoatSearchPage = function (sTitle) {

    var collectionViews = app.mainWindow().collectionViews()[0];

    $.delay(sleep);
    var version = target.systemVersion();
    version = version.substring(0, version.lastIndexOf("."));
    if(version == "6.1") {
        $.delay(sleep);
        var butButton = app.mainWindow().collectionViews()[0].cells()[4].buttons()[1].name();
        if(butButton == varTestsAddButtons){
            //Assert buy and add to cart button show correct.
            var addToCartButton = collectionViews.cells()[4].buttons()[0];
            var butButton = collectionViews.cells()[4].buttons()[1];
        }
        else{
            var addToCartButton = collectionViews.cells()[5].buttons()[0];
            var butButton = collectionViews.cells()[5].buttons()[1];
        }
    }
    else{
        //Assert buy and add to cart button show correct.
        var addToCartButton = collectionViews.cells()[varTestsBuyButtons].buttons()[0];
        var butButton = collectionViews.cells()[varTestsBuyButtons].buttons()[1];
    }
    
    method.verifyEquals(varTestsBuyButtons, addToCartButton.name());
    method.verifyEquals(varTestsAddButtons, butButton.name());
};

Assert.productAddedToMyFavoritesScreenWhenSRP = function (productName) {
    $.delay(4);
    var version = target.systemVersion();
    version = version.substring(0, version.lastIndexOf("."));
    if(version == "6.1") {
        var collectionView = app.mainWindow().collectionViews()[0];
        var productCell = collectionView.cells()[0].staticTexts()[0];

        method.verifyEquals(productName, productCell.name());
    }
    else{
        var collectionView = app.mainWindow().collectionViews()[0];
        var productCell = collectionView.cells()[0].staticTexts()[3];

        method.verifyEquals(productName, productCell.name());
    }
    
};

Assert.productRemovedFromMyFavoritesScreenWhenSRP = function (productName) {
    $.delay(4);
    var collectionView = app.mainWindow().collectionViews()[0];
    var productCell = collectionView.cells()[0].staticTexts()[3];

    assertNotEquals(productName, productCell.name());
};

Assert.checkButtonOnStore = function () {
    $.delay(sleep);
    var version = target.systemVersion();
    version = version.substring(0, version.lastIndexOf("."));
    if(version == "6.1") {
        var storeClassify = app.mainWindow().collectionViews()[0].cells()[1].segmentedControls()[0].buttons()[0];
        var storeCommodity = app.mainWindow().collectionViews()[0].cells()[1].segmentedControls()[0].buttons()[1];

        method.verifyEquals(varTestCategoryOurShopClassificationTab, storeClassify.name());
        method.verifyEquals(varTestCategoryOurShopCommodityTab, storeCommodity.name());
    }
    else{
        var storeClassify = app.mainWindow().collectionViews()[0].cells()[1].buttons()[0];
        var storeCommodity = app.mainWindow().collectionViews()[0].cells()[1].buttons()[1];

        method.verifyEquals(varTestCategoryOurShopClassificationTab, storeClassify.name());
        method.verifyEquals(varTestCategoryOurShopCommodityTab, storeCommodity.name());
    } 
    
};

Assert.checkStorelistShowCorrect = function () {
    $.delay(3);
    method.verifyTrue(app.mainWindow().collectionViews()[0].cells().length<41);
};

Assert.heartIconShowCorrect = function (productIndex) {
    $.delay(sleep);
    var collectionViews = app.mainWindow().collectionViews()[0];

    var itemCell = collectionViews.cells()[productIndex];
    var heartIcon = itemCell.buttons()[0];
    var heartIconName = heartIcon.name();

    method.verifyEquals(varTestsHeartIconDisplay, heartIconName);
};

Assert.checkPriceBarShowCorrectWhenSRP = function (price) {
    $.delay(sleep);
    var version = target.systemVersion();
    version = version.substring(0, version.lastIndexOf("."));
    if(version == "6.1") {
        //Verify price show correct.
        var priceNumber = app.mainWindow().staticTexts()[1].name();
        method.verifyEquals(price, priceNumber);
    }
    else{
        //Verify price show correct.
        var priceNumber = app.mainWindow().staticTexts()[0].name();
        method.verifyEquals(price, priceNumber);
    }
};

Assert.checkAdvancedShowCorrectWhenSRP = function () {
    $.delay(sleep);

    var AdvancedShowCorrectWhenSRP = app.mainWindow().collectionViews()[0].buttons()[1];
    method.verifyTrue(1,AdvancedShowCorrectWhenSRP);
};

//6.6
Assert.checkAllCoatgoryShowCorrectOnSRP = function () {
    $.delay(sleep);
    var checkAllCoatgoryShowCorrectOnSRP = app.mainWindow().collectionViews()[0].buttons()[0];
    method.verifyTrue(1,checkAllCoatgoryShowCorrectOnSRP);
};

Assert.checkSearchBarWhenSRP = function () {
    $.delay(sleep);
    var checkSearchBarWhenSRP = app.mainWindow().tableViews()[0].cells(1).staticTexts()[0].name();
    method.verifyEquals("上衣",checkSearchBarWhenSRP);
};

//6.9
Assert.filterAttributeButtonIsTappedOnSRP = function (k,i) {
    $.delay(sleep);
    var attributeButton = app.mainWindow().collectionViews()[k].cells()[i];
    var buttonStatus = attributeButton.value();

    method.verifyEquals(0, buttonStatus);
};

Assert.checkPriceBarShowCorrectWhenSRPOnDifferentversions = function (price) {
    $.delay(sleep);
    //Verify price show correct.
    var priceNumber = app.mainWindow().staticTexts()[0].name();
    method.verifyEquals(price, priceNumber);
};

//6.25
Assert.buttonOnAdvancedIsEnabledShow = function (i,j) {
    $.delay(sleep);
    var buttonOnAdvanced = app.mainWindow().buttons()[i].name();
    method.verifyEquals(j, buttonOnAdvanced);
};

Assert.chooseButtonsOnAdvanced = function (k,i,j) {
    $.delay(sleep);
    var chooseButtonsOnAdvanced = app.mainWindow().collectionViews()[k].cells()[i].staticTexts()[0].name();
    method.verifyEquals(j, chooseButtonsOnAdvanced);
};

Assert.checkItemName = function (j) {
    $.delay(sleep);
    var checkItemName = app.mainWindow().collectionViews()[0].cells()[1].name();
    method.verifyEquals(j, checkItemName);
};

Assert.elementsOnFilterScreenWhenOptions = function () {
    $.delay(sleep);

    //Verify "100000 + 元" show correct
    var priceNumber100000 = app.mainWindow().staticTexts()[0].name();
    method.verifyEquals(varTestsPriceNumber100000, priceNumber100000);

    //Verify "0 元" show correct.
    var priceNumber0 = app.mainWindow().staticTexts()[1].name();
    method.verifyEquals(varTestsPriceNumber0, priceNumber0);

    //Verify all attribute elements show correct
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
        $.delay(sleep);
        var version = target.systemVersion();
        version = version.substring(0, version.lastIndexOf("."));
        if(version == "6.1") {
            method.verifyEquals(this.AttributeElements[i], app.mainWindow().collectionViews()[0].cells()[i].staticTexts()[0].name());
        }
        else{
            method.verifyEquals(this.AttributeElements[i], app.mainWindow().collectionViews()[1].cells()[i].name());
        }
    }
};

Assert.itemPageShowCorrectWhenProductsHaveBeenSoldOut =function (i) {
    $.delay(sleep);

    var itemPageTxt = app.mainWindow().collectionViews()[0].cells()[i].staticTexts()[0];
    method.verifyEquals(varTestsItemPageTextWhenProductsHaveBeenSoldOut,itemPageTxt.name());
};