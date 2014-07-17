Action.notificationSettings = function (i) {
    //UIAtarget.logDeviceInfo();
    $.delay(sleep);
    //if(target.systemVersion == 6.0){
    
    $.delay(sleep);
    if(target.systemVersion() == "6.1.3" || target.systemVersion() == "6.1.4"){
        var menuButton = app.navigationBar().buttons()[0];
        menuButton.tap();
        $.delay(sleep);

        var tableViews = app.windows()[0].tableViews()[0];
        var tableCells = tableViews.cells()["Settings"];
        tableCells.tap();
        $.delay(sleep);
    
        app.windows()[0].collectionViews()[0].cells()[4].switches()[0].setValue(i);
    
        var closeButton = app.windows()[0].navigationBar().buttons()[0];
        closeButton.tap();
        menuButton.tap();
    }
    else{
        var menuButton = app.navigationBar().buttons()[1];
        menuButton.tap();
        $.delay(sleep);

        var tableViews = app.windows()[0].tableViews()[0];
        var tableCells = tableViews.cells()["Settings"];
        tableCells.tap();
        $.delay(sleep);
    
        app.windows()[0].collectionViews()[0].cells()[4].switches()[0].setValue(i);
    
        var closeButton = app.windows()[0].navigationBar().buttons()[1];
        closeButton.tap();
        menuButton.tap();
    }
};

Action.tapBarcodeSearch = function () {
    $.delay(sleep);
    var tapBarcodeSearch = app.mainWindow().buttons()[1];
    method.checkInstanceExists(app.mainWindow().buttons()[1]);
    tapBarcodeSearch.tap();
};
