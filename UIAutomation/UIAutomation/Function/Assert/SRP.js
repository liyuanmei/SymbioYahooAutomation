Assert.checkGoodsAndStoreTabDisplay = function  () {
    $.delay(sleep);
    if(target.systemVersion() == "6.1.3"){
        method.verifyEquals("商品",app.mainWindow().collectionViews()[0].cells()[0].segmentedControls()[0].buttons()[0].name());
        method.verifyEquals("商店",app.mainWindow().collectionViews()[0].cells()[0].segmentedControls()[0].buttons()[1].name());
    }
    else{
        method.verifyEquals("商品",app.mainWindow().collectionViews()[0].cells()[0].buttons()[0].name());
        method.verifyEquals("商店",app.mainWindow().collectionViews()[0].cells()[0].buttons()[1].name());
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
    
    method.verifyEquals("相關度", relevanceValue);
    method.verifyEquals("最高人氣", popularity);
    method.verifyEquals("最新上架", latestItems);
    method.verifyEquals("價錢低到高", priceLowToHigh);
    method.verifyEquals("價錢高到低", priceHighToLow);
};

Assert.elementsOnFilterScreenWhenSRP = function () {
    $.delay(sleep);

    //Verify "100000 + 元" show correct
    var priceNumber100000 = app.mainWindow().staticTexts()[0].name();
    method.verifyEquals("100000+ 元", priceNumber100000);

    //Verify "0 元" show correct.
    var priceNumber0 = app.mainWindow().staticTexts()[1].name();
    method.verifyEquals("0 元", priceNumber0);

    //verify circle image and bar image show correct.
    var circleImage1 = app.mainWindow().images()[0].name();
    var circleImage2 = app.mainWindow().images()[1].name();
    $.delay(sleep);
    if(target.systemVersion() == "6.1.3"){
        var barImage1 = app.mainWindow().images()[3].name();
        var barImage2 = app.mainWindow().images()[2].name();
    }
    else{
        var barImage1 = app.mainWindow().images()[2].name();
        var barImage2 = app.mainWindow().images()[3].name();
    }
    
    method.verifyEquals("circle.png", circleImage1);
    method.verifyEquals("circle.png", circleImage2);
    method.verifyEquals("bar-grey.png", barImage1);
    method.verifyEquals("bar-blu.png", barImage2);

    //Verify all attribute elements show correct
    this.AttributeElements = ["可刷卡", "0利率", "可分期", "超商付款", "超商取貨", "有現貨", "有影音", "有圖片", "優良商店"];

    for (var i = 0; i < 9; i++){
        $.delay(sleep);
        if(target.systemVersion() == "6.1.3"){
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
    if(target.systemVersion() == "6.1.3"){
        //Assert buy and add to cart button show correct.
        var addToCartButton = collectionViews.cells()[4].buttons()[0];
        var butButton = collectionViews.cells()[4].buttons()[1];
    }
    else{
        //Assert buy and add to cart button show correct.
        var addToCartButton = collectionViews.cells()["立即購買"].buttons()[0];
        var butButton = collectionViews.cells()["立即購買"].buttons()[1];
    }
    
    method.verifyEquals("立即購買", addToCartButton.name());
    method.verifyEquals("加入購物車", butButton.name());
};

Assert.productAddedToMyFavoritesScreenWhenSRP = function (productName) {
    $.delay(4);
    if(target.systemVersion() == "6.1.3"){
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
    if(target.systemVersion() == "6.1.3"){
        var storeClassify = app.mainWindow().collectionViews()[0].cells()[1].segmentedControls()[0].buttons()[0];
        var storeCommodity = app.mainWindow().collectionViews()[0].cells()[1].segmentedControls()[0].buttons()[1];

        method.verifyEquals("本店分類", storeClassify.name());
        method.verifyEquals("本店商品", storeCommodity.name());
    }
    else{
        var storeClassify = app.mainWindow().collectionViews()[0].cells()[1].buttons()[0];
        var storeCommodity = app.mainWindow().collectionViews()[0].cells()[1].buttons()[1];

        method.verifyEquals("本店分類", storeClassify.name());
        method.verifyEquals("本店商品", storeCommodity.name());
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

    method.verifyEquals("icon heart empty", heartIconName);
};

Assert.checkPriceBarShowCorrectWhenSRP = function (price) {
    $.delay(sleep);
    if(target.systemVersion() == "6.1.3"){
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
    method.verifyEquals("100000+ 元", priceNumber100000);

    //Verify "0 元" show correct.
    var priceNumber0 = app.mainWindow().staticTexts()[1].name();
    method.verifyEquals("0 元", priceNumber0);

    //Verify all attribute elements show correct
    this.AttributeElements = ["可刷卡", "0利率", "可分期", "超商付款", "超商取貨", "有現貨", "有影音", "有圖片", "優良商店"];

    for (var i = 0; i < 9; i++){
        $.delay(sleep);
        if(target.systemVersion() == "6.1.3"){
            method.verifyEquals(this.AttributeElements[i], app.mainWindow().collectionViews()[0].cells()[i].staticTexts()[0].name());
        }
        else{
            method.verifyEquals(this.AttributeElements[i], app.mainWindow().collectionViews()[1].cells()[i].name());
        }
    }
};