Action.addToShoppingCart = function () {
    $.delay(sleep);
    var version = target.systemVersion();
    version = version.substring(0, version.lastIndexOf("."));
    if(version == "6.1") {
        var addToShoppingCart = app.mainWindow().collectionViews()[0].cells()[5].buttons()[1];
        method.checkInstanceExists(app.mainWindow().collectionViews()[0].cells()[5].buttons()[1]);
        addToShoppingCart.tap();
    }
    else{
        var collectionViews = app.mainWindow().collectionViews()[0];
        var addToCartButton = collectionViews.cells()["立即購買"].buttons()[0];
        method.checkInstanceExists(addToCartButton);
        addToCartButton.tap();
    }
};

Action.butButtonShoppingCart = function () {
    $.delay(sleep);
    var butButtonShoppingCart = app.mainWindow().collectionViews()[0].cells()[5].buttons()[0];
    method.checkInstanceExists(app.mainWindow().collectionViews()[0].cells()[5].buttons()[0]);
    butButtonShoppingCart.tap();
};

Action.chooseTheSizeOnShoppingCart = function () {
    $.delay(sleep);
    var version = target.systemVersion();
    version = version.substring(0, version.lastIndexOf("."));
    if(version == "6.1") {
        var chooseTheSizeOnShoppingCart = app.mainWindow().collectionViews()[0].cells()[0];
        method.checkInstanceExists(app.mainWindow().collectionViews()[0].cells()[0]);
        chooseTheSizeOnShoppingCart.tap();
    }
    else{
        var chooseTheSizeOnShoppingCart = app.mainWindow().collectionViews()[1].cells()[0];
        method.checkInstanceExists(app.mainWindow().collectionViews()[1].cells()[0]);
        chooseTheSizeOnShoppingCart.tap();
    }
};

Action.tapConfirmOnShoppingCart = function () {
    $.delay(sleep);
    var version = target.systemVersion();
    version = version.substring(0, version.lastIndexOf("."));
    if(version == "6.1") {
        var tapConfirmOnShoppingCart = app.navigationBar().buttons()[1];
        method.checkInstanceExists(app.navigationBar().buttons()[1]);
        tapConfirmOnShoppingCart.tap();
    }
    else{
        var tapConfirmOnShoppingCart = app.navigationBar().buttons()[2];
        method.checkInstanceExists(app.navigationBar().buttons()[2]);
        tapConfirmOnShoppingCart.tap();
    }
};

Action.tapShoppingCartlist = function (i) {
    $.delay(sleep);
    var tapShoppingCartlist = app.mainWindow().tableViews()[0].cells()[i];
    method.checkInstanceExists(app.mainWindow().tableViews()[0].cells()[i]);
    tapShoppingCartlist.tap();
};

Action.tapDeleteOnShoppingCart = function () {
    $.delay(5);
    var version = target.systemVersion();
    version = version.substring(0, version.lastIndexOf("."));
    if(version == "6.1") {
        app.mainWindow().tableViews()[0].dragInsideWithOptions({startOffset:{x:0.99, y:0.19}, endOffset:{x:0.75, y:0.18}});
        $.delay(5);
        app.mainWindow().tableViews()[0].cells()[0].buttons()[0].tap();
    }
    else{
        app.mainWindow().tableViews()[0].dragInsideWithOptions({startOffset:{x:0.99, y:0.19}, endOffset:{x:0.75, y:0.18}});
        $.delay(5);
        var tapDeleteOnShoppingCart = app.mainWindow().tableViews()[0].cells()[0].buttons()[varTestsKeyboardDelete];
        method.checkInstanceExists(tapDeleteOnShoppingCart);
        tapDeleteOnShoppingCart.tap();
    }
};

Action.tapConfirmOnDeleteShoppingCart = function () {
    $.delay(sleep);
    var tapConfirmOnDeleteShoppingCart = app.mainWindow().scrollViews()[0].webViews()[0].links()[varTestsDetermine];
    method.checkInstanceExists(app.mainWindow().scrollViews()[0].webViews()[0].links()[varTestsDetermine]);
    tapConfirmOnDeleteShoppingCart.tap();
};

Action.goApparelCategoryWhenShoppingCart = function () {
    $.delay(sleep);
    Action.tapButtonOnTabBar(2);
    
    app.mainWindow().tableViews()[0].cells()[0].tap(); 
};

//6.30
Action.tapAddBuyNextTimeOnShopping = function () {
    $.delay(sleep);
    app.mainWindow().scrollViews()[0].webViews()[0].tapWithOptions({tapOffset:{x:0.80, y:0.32}});

    $.delay(sleep);
    var AddBuyNextTimeOnShopping = app.mainWindow().scrollViews()[0].webViews()[0].links()[varTestsDetermine];
    method.checkInstanceExists(app.mainWindow().scrollViews()[0].webViews()[0].links()[varTestsDetermine]);
    AddBuyNextTimeOnShopping.tap();
};

Action.tapSettleAccounts = function () {
    $.delay(sleep);
    var tapSettleAccounts = app.mainWindow().scrollViews()[0].webViews()[0].buttons()[varTestsTheInvoicing];
    method.checkInstanceExists(app.mainWindow().scrollViews()[0].webViews()[0].buttons()[varTestsTheInvoicing]);
    tapSettleAccounts.tap();
};

Action.determineTheLoginWhenShopping = function () {
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

            Action.tapAddAccountOnLogin(varTestsSignInAccountMobilestoresymbio4, varTestsSignInPasswordMobilestoresymbio4);
            $.delay(12);

            Action.tapButtonOnTabBar(0);
        }
        else{
            //Tap exit button exit login window
            Action.exitLoginWindow();
            $.delay(sleep);
            //Verify login window show correct
            Action.doUserLogin(varTestsSignInAccountMobilestoresymbio4, varTestsSignInPasswordMobilestoresymbio4);
            $.delay(12);

            Action.tapButtonOnTabBar(0);
        }
    }
};

//Because webservice, using coordinate click
Action.clickTheBuyButtonsOnPromotionPage = function () {
    $.delay(5);
    var version = target.systemVersion();
    version = version.substring(0, version.lastIndexOf("."));
    if(version == "6.1") {
        app.mainWindow().scrollViews()[0].webViews()[0].tapWithOptions({tapOffset:{x:0.94, y:0.99}});
    }
    else{
        $.delay(sleep);

        //tap shopping cart icon
        app.mainWindow().scrollViews()[0].webViews()[0].tapWithOptions({tapOffset:{x:0.95, y:0.99}});
    }
};

Action.tapChooseOnItemPageWhenPromotion = function (i,j) {
    $.delay(5);
    var version = target.systemVersion();
    version = version.substring(0, version.lastIndexOf("."));
    if(version == "6.1") {
        var sale = app.mainWindow().collectionViews()[0].cells()[i].tableViews()[0].cells()[j].staticTexts()[0];
        method.checkInstanceExists(app.mainWindow().collectionViews()[0].cells()[i].tableViews()[0].cells()[j].staticTexts()[0]);
        sale.tap();
    }
    else{
        var allProductOfThisStoreOnProductPage = app.mainWindow().collectionViews()[0].cells()["Empty list"].tableViews()["Empty list"].cells()[i];
        method.checkInstanceExists(app.mainWindow().collectionViews()[0].cells()["Empty list"].tableViews()["Empty list"].cells()[i]);
        allProductOfThisStoreOnProductPage.tap();
    }
};