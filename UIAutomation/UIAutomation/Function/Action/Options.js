Action.tapChoosePreductCategoryWhenOptions = function (i,j) {
    $.delay(sleep);
    var choosePreductCategory = app.mainWindow().collectionViews()[i].cells()[j];
    method.checkInstanceExists(app.mainWindow().collectionViews()[i].cells()[j]);
    choosePreductCategory.tap();
};

Action.tapItemOnCategoryScreenWhenOptions = function (itemName) {
    $.delay(sleep);
    var categoryItem = app.mainWindow().tableViews()[0].cells()[itemName];

    method.checkInstanceExists(app.mainWindow().tableViews()[0].cells()[itemName]);
    categoryItem.tap();
};

Action.tapButtonsInAdvancedBarWhenOptions = function () {
    $.delay(sleep);
    app.mainWindow().collectionViews()[0].tapWithOptions({tapOffset:{x:0.94, y:0.13}});
};
