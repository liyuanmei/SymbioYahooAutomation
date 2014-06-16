Action.addToShoppingCart = function () {
    $.delay(sleep);
    var addToShoppingCart = app.mainWindow().collectionViews()[0].cells()[5].buttons()[1];
    method.checkInstanceExists(app.mainWindow().collectionViews()[0].cells()[5].buttons()[1].tap);
    addToShoppingCart.tap();
};

Action.butButtonShoppingCart = function () {
    $.delay(sleep);
    var butButtonShoppingCart = app.mainWindow().collectionViews()[0].cells()[5].buttons()[0];
    method.checkInstanceExists(app.mainWindow().collectionViews()[0].cells()[5].buttons()[0].tap);
    butButtonShoppingCart.tap();
};

Action.chooseTheSizeOnShoppingCart = function () {
    $.delay(sleep);
    var chooseTheSizeOnShoppingCart = app.mainWindow().collectionViews()[1].cells()[0];
    method.checkInstanceExists(app.mainWindow().collectionViews()[1].cells()[0].tap);
    chooseTheSizeOnShoppingCart.tap();
};

Action.tapConfirmOnShoppingCart = function () {
    $.delay(sleep);
    var tapConfirmOnShoppingCart = app.navigationBar().buttons()[2];
    method.checkInstanceExists(app.navigationBar().buttons()[2].tap);
    tapConfirmOnShoppingCart.tap();
};

Action.tapShoppingCartlist = function (i) {
    $.delay(sleep);
    var tapShoppingCartlist = app.mainWindow().tableViews()[0].cells()[i];
    method.checkInstanceExists(app.mainWindow().tableViews()[0].cells()[i]);
    tapShoppingCartlist.tap();
};

Action.tapDeleteOnShoppingCart = function () {
    $.delay(sleep);
    app.mainWindow().tableViews()[0].dragInsideWithOptions({startOffset:{x:0.99, y:0.19}, endOffset:{x:0.75, y:0.18}});
    $.delay(5);
    app.mainWindow().tableViews()[0].cells()[0].buttons()["Delete"].tap();
};

Action.tapConfirmOnDeleteShoppingCart = function () {
    $.delay(sleep);
    var tapConfirmOnDeleteShoppingCart = app.mainWindow().scrollViews()[0].webViews()[0].links()["確定"];
    method.checkInstanceExists(app.mainWindow().scrollViews()[0].webViews()[0].links()["確定"].tap);
    tapConfirmOnDeleteShoppingCart.tap();
};

Action.goApparelCategoryWhenShoppingCart = function () {
    $.delay(sleep);
    Action.tapButtonOnTabBar(2);
    
    app.mainWindow().tableViews()[0].cells()[0].tap(); 
};