Assert.wheelsWhenCheckOut = function  () {
    $.delay(sleep);
    var wheelsWhenCheckOut = app.mainWindow().scrollViews()[0].webViews()[0].links()[2].staticTexts()[0]; 
    method.verifyEquals(varTestsWheelsWhenCheckOut,wheelsWhenCheckOut.name());
};

