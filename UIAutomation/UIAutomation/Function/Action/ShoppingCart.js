Action.addToShoppingCart = function () {
    $.delay(sleep);
    var addToShoppingCart = app.mainWindow().collectionViews()[0].cells()[5].buttons()[1];
    method.checkInstanceExists(app.mainWindow().collectionViews()[0].cells()[5].buttons()[1]);
    addToShoppingCart.tap();
};

Action.butButtonShoppingCart = function () {
    $.delay(sleep);
    var butButtonShoppingCart = app.mainWindow().collectionViews()[0].cells()[5].buttons()[0];
    method.checkInstanceExists(app.mainWindow().collectionViews()[0].cells()[5].buttons()[0]);
    butButtonShoppingCart.tap();
};

Action.chooseTheSizeOnShoppingCart = function () {
    $.delay(sleep);
    if(target.systemVersion() == "6.1.3"){
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
    if(target.systemVersion() == "6.1.3"){
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
    if(target.systemVersion() == "6.1.3"){
        app.mainWindow().tableViews()[0].dragInsideWithOptions({startOffset:{x:0.99, y:0.19}, endOffset:{x:0.75, y:0.18}});
        $.delay(5);
        app.mainWindow().tableViews()[0].cells()[0].buttons()[0].tap();
    }
    else{
        app.mainWindow().tableViews()[0].dragInsideWithOptions({startOffset:{x:0.99, y:0.19}, endOffset:{x:0.75, y:0.18}});
        $.delay(5);
        var tapDeleteOnShoppingCart = app.mainWindow().tableViews()[0].cells()[0].buttons()["Delete"];
        method.checkInstanceExists(tapDeleteOnShoppingCart);
        tapDeleteOnShoppingCart.tap();
    }
};

Action.tapConfirmOnDeleteShoppingCart = function () {
    $.delay(sleep);
    var tapConfirmOnDeleteShoppingCart = app.mainWindow().scrollViews()[0].webViews()[0].links()["確定"];
    method.checkInstanceExists(app.mainWindow().scrollViews()[0].webViews()[0].links()["確定"]);
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
    var AddBuyNextTimeOnShopping = app.mainWindow().scrollViews()[0].webViews()[0].links()["確定"];
    method.checkInstanceExists(app.mainWindow().scrollViews()[0].webViews()[0].links()["確定"]);
    AddBuyNextTimeOnShopping.tap();
};

Action.tapSettleAccounts = function () {
    $.delay(sleep);
    var tapSettleAccounts = app.mainWindow().scrollViews()[0].webViews()[0].buttons()["我要結帳"];
    method.checkInstanceExists(app.mainWindow().scrollViews()[0].webViews()[0].buttons()["我要結帳"]);
    tapSettleAccounts.tap();
};