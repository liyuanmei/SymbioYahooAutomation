Action.goStoreListing = function () {
    $.delay(6);
    mainWindow.collectionViews()[0].tap();
    $.delay(sleep);
    app.navigationBar()
        .buttons()[0].tap();
    $.delay(sleep);
    //購物須知
    mainWindow.tableViews()[1].cells()[0].tap();
    $.delay(sleep);
    app.navigationBar()
        .buttons()[1].tap();
    $.delay(sleep);
    app.navigationBar()
        .buttons()[0].tap();
    $.delay(sleep);
    //促銷活動
    mainWindow.tableViews()[1].cells()[1].tap();
    $.delay(sleep);
    app.navigationBar()
        .buttons()[1].tap();
    $.delay(sleep);
    //進階
    mainWindow.collectionViews()[0].buttons()[0].tap();
    $.delay(sleep);
    //瀏覽模式
    mainWindow.segmentedControls()[0].buttons()[1].tap();
    $.delay(sleep);
    //篩選
    mainWindow.segmentedControls()[0].buttons()[2].tap();
    $.delay(sleep);
    //0利率
    mainWindow.collectionViews()[1].cells()[1].tap();
    $.delay(sleep);
    //有影音
    mainWindow.collectionViews()[1].cells()[6].tap();
    $.delay(sleep);
    app.navigationBar()
        .rightButton()
        .tap();
};
