Action.tapGoodsOnList = function (i) {
    $.delay(sleep);
    var tapGoodsOnList = app.mainWindow().collectionViews()[0].cells()[i];
    method.checkInstanceExists(app.mainWindow().collectionViews()[0].cells()[i]);
    tapGoodsOnList.tap();
};

Action.tapSalesPromotionActivity = function () {
    $.delay(sleep);
    var tapSalesPromotionActivity = app.mainWindow().collectionViews()[0].cells()["Empty list"].tableViews()["Empty list"].cells()["促銷活動, 2"];
    method.checkInstanceExists(app.mainWindow().collectionViews()[0].cells()["Empty list"].tableViews()["Empty list"].cells()["促銷活動, 2"]);
    tapSalesPromotionActivity.tap();
};

Action.tapCancelOnShoppingCart = function () {
    $.delay(sleep);
    var tapConfirmOnShoppingCart = app.navigationBar().buttons()[0];
    method.checkInstanceExists(app.navigationBar().buttons()[0]);
    tapConfirmOnShoppingCart.tap();
};

Action.tapItemOnCategoryScreenWhenItemPage = function (itemName) {
    $.delay(sleep);
    var categoryItem = app.mainWindow().tableViews()[0].cells()[itemName];

    method.checkInstanceExists(app.mainWindow().tableViews()[0].cells()[itemName]);
    categoryItem.tap();
};

//6.9
Action.addToShoppingCartWhenItemPage = function () {
    $.delay(sleep);
    var version = target.systemVersion();
    version = version.substring(0, version.lastIndexOf("."));
    if(version == "6.1") {
        var butButtonShoppingCart = app.mainWindow().collectionViews()[0].cells()[3].buttons()[1];
        method.checkInstanceExists(app.mainWindow().collectionViews()[0].cells()[3].buttons()[1]);
        butButtonShoppingCart.tap();
    }
    else{
        var collectionViews = app.mainWindow().collectionViews()[0];
        var addToCartButton = collectionViews.cells()["立即購買"].buttons()[0];
        method.checkInstanceExists(addToCartButton);
        addToCartButton.tap();
    }
    
};

Action.tapPaymentOnProductPage = function () {
    //$.delay(sleep);
    //var slideTheScreen = app.mainWindow().collectionViews()[0].dragInsideWithOptions({startOffset:{x:0.51, y:0.86}, endOffset:{x:0.98, y:0.04}, duration:1.7});
    $.delay(10);
    var version = target.systemVersion();
    version = version.substring(0, version.lastIndexOf("."));
    if(version == "6.1") {
        var paymentOnProductPage = app.mainWindow().collectionViews()[0].cells()[6].tableViews()[0].cells()[2];
        method.checkInstanceExists(app.mainWindow().collectionViews()[0].cells()[6].tableViews()[0].cells()[2]);
        paymentOnProductPage.tap();
    }
    else{
        var paymentOnProductPage = app.mainWindow().collectionViews()[0].cells()["Empty list"].tableViews()["Empty list"].cells()["付款及交貨方式"];
        method.checkInstanceExists(app.mainWindow().collectionViews()[0].cells()["Empty list"].tableViews()["Empty list"].cells()["付款及交貨方式"]);
        paymentOnProductPage.tap();
    }
};

Action.tapShoppingMethodsOnProductPage = function () {
    //$.delay(sleep);
    //var slideTheScreen = app.mainWindow().collectionViews()[0].dragInsideWithOptions({startOffset:{x:0.51, y:0.86}, endOffset:{x:0.98, y:0.04}, duration:1.7});
    $.delay(10);
    var shoppingMethodsOnProductPage = app.mainWindow().collectionViews()[0].cells()["Empty list"].tableViews()["Empty list"].cells()["購物須知"];
    method.checkInstanceExists(app.mainWindow().collectionViews()[0].cells()["Empty list"].tableViews()["Empty list"].cells()["購物須知"]);
    shoppingMethodsOnProductPage.tap();
};

Action.tapAllProductOfThisStoreOnProductPage = function () {
    //$.delay(sleep);
    //var slideTheScreen = app.mainWindow().collectionViews()[0].dragInsideWithOptions({startOffset:{x:0.51, y:0.86}, endOffset:{x:0.98, y:0.04}, duration:1.7});
    $.delay(10);
    var allProductOfThisStoreOnProductPage = app.mainWindow().collectionViews()[0].cells()["Empty list"].tableViews()["Empty list"].cells()["看本店家全部商品"];
    method.checkInstanceExists(app.mainWindow().collectionViews()[0].cells()["Empty list"].tableViews()["Empty list"].cells()["看本店家全部商品"]);
    allProductOfThisStoreOnProductPage.tap();
};

Action.tapClassificationButtonWhenItemPage = function () {
    $.delay(sleep);
    var version = target.systemVersion();
    version = version.substring(0, version.lastIndexOf("."));
    if(version == "6.1") {
        var tapGoodsButton = app.mainWindow().collectionViews()[0].cells()[1].segmentedControls()[0].buttons()[0];
        method.checkInstanceExists(app.mainWindow().collectionViews()[0].cells()[1].segmentedControls()[0].buttons()[0]);
        tapGoodsButton.tap();
    }
    else{
        var tapGoodsButton = app.mainWindow().collectionViews()[0].cells()[1].buttons()[0];
        method.checkInstanceExists(app.mainWindow().collectionViews()[0].cells()[1].buttons()[0]);
        tapGoodsButton.tap();
    }
};

Action.tapSearchResultOfStore = function () {
    $.delay(sleep);
    var searchResultOfStore = app.mainWindow().collectionViews()[0].cells()[1].staticTexts()[0];
    method.checkInstanceExists(app.mainWindow().collectionViews()[0].cells()[1].staticTexts()[0]);
    searchResultOfStore.tap();
};

Action.tapChooseOnItemPage = function (i) {
    $.delay(5);
    var version = target.systemVersion();
    version = version.substring(0, version.lastIndexOf("."));
    if(version == "6.1") {
        var sale = app.mainWindow().collectionViews()[0].cells()[6].tableViews()[0].cells()[i].staticTexts()[0];
        method.checkInstanceExists(app.mainWindow().collectionViews()[0].cells()[6].tableViews()[0].cells()[i].staticTexts()[0]);
        sale.tap();
    }
    else{
        var allProductOfThisStoreOnProductPage = app.mainWindow().collectionViews()[0].cells()["Empty list"].tableViews()["Empty list"].cells()[i];
        method.checkInstanceExists(app.mainWindow().collectionViews()[0].cells()["Empty list"].tableViews()["Empty list"].cells()[i]);
        allProductOfThisStoreOnProductPage.tap();
    }
};

//6.30
Action.tapActivityLink = function () {
    $.delay(sleep);
    var version = target.systemVersion();
    version = version.substring(0, version.lastIndexOf("."));
    if(version == "6.1") {
        app.mainWindow().collectionViews()[0].cells()[1].staticTexts()["活動價"].tapWithOptions({tapOffset:{x:0.55, y:0.38}});
    }
    else{
        var tapActivityLink = app.mainWindow().collectionViews()[0].cells()[1].staticTexts()[4];
        method.checkInstanceExists(app.mainWindow().collectionViews()[0].cells()[1].staticTexts()[4]);
        tapActivityLink.tap();
    }
};

Action.addToItemPage = function (j,i) {
    $.delay(sleep);
    var addToShoppingCart = app.mainWindow().collectionViews()[0].cells()[j].buttons()[i];
    method.checkInstanceExists(app.mainWindow().collectionViews()[0].cells()[j].buttons()[i]);
    addToShoppingCart.tap();
};

Action.chooseItemOnCollectionViews = function (i,j,k) {
    $.delay(sleep);
    var addToPurchasedGoods = app.mainWindow().collectionViews()[i].cells()[j].staticTexts()[k];
    method.checkInstanceExists(app.mainWindow().collectionViews()[i].cells()[j].staticTexts()[k]);
    addToPurchasedGoods.tap();
};

Action.chooseButtonsOnCollectionViews = function (i,j,k) {
    $.delay(sleep);
    var chooseButtonsOnCollectionViews = app.mainWindow().collectionViews()[i].cells()[j].buttons()[k];
    method.checkInstanceExists(app.mainWindow().collectionViews()[i].cells()[j].buttons()[k]);
    chooseButtonsOnCollectionViews.tap();
};

Action.tapSizeOnItem = function () {
    $.delay(sleep);
    var version = target.systemVersion();
    version = version.substring(0, version.lastIndexOf("."));
    if(version == "6.1") {
        var tapSizeOnItem = app.mainWindow().collectionViews()[0].cells()[8];
        method.checkInstanceExists(app.mainWindow().collectionViews()[0].cells()[8]);
        tapSizeOnItem.tap();

        $.delay(sleep);
        var sizeColor = app.mainWindow().collectionViews()[0].cells()[3];
        method.checkInstanceExists(app.mainWindow().collectionViews()[0].cells()[3]);
        sizeColor.tap();

    }
    else{
        var tapSizeOnItem = app.mainWindow().collectionViews()[1].cells()[8];
        method.checkInstanceExists(app.mainWindow().collectionViews()[1].cells()[8]);
        tapSizeOnItem.tap();

        $.delay(sleep);
        var sizeColor = app.mainWindow().collectionViews()[1].cells()[3];
        method.checkInstanceExists(app.mainWindow().collectionViews()[1].cells()[3]);
        sizeColor.tap();
    }    
};

Action.tapChooseOnItemPageWhenBuy = function(j,i) {
    $.delay(sleep);
    var whenBuy = app.mainWindow().collectionViews()[0].cells()[j].tableViews()[0].cells()[i].staticTexts()[0];
    method.checkInstanceExists(app.mainWindow().collectionViews()[0].cells()[j].tableViews()[0].cells()[i].staticTexts()[0]);
    whenBuy.tap();
};

Action.tapDMFirstStoreIcon = function () {
    $.delay(sleep);
    app.mainWindow().collectionViews()[0].tapWithOptions({tapOffset:{x:0.87, y:0.85}});
};

Action.tapDMSecondStoreIcon = function () {
    $.delay(sleep);
    app.mainWindow().collectionViews()[0].tapWithOptions({tapOffset:{x:0.98, y:0.87}});
};