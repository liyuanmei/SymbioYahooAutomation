Assert.ckeckHeartIconOnNavigationBar = function () {
    $.delay(5);
    var ckeckHeartIconOnNavigationBar = app.navigationBar().buttons()[3].isEnabled();
    method.verifyEquals(1,ckeckHeartIconOnNavigationBar);
};

Assert.storeRatingShowCorrectOnNavigationBar = function (ratingIndex) {
    $.delay(sleep);
    var storeRatingShowCorrectOnNavigationBar = app.mainWindow().staticTexts()[ratingIndex];
    var ratingValue = storeRatingShowCorrectOnNavigationBar.value();
    //Get the value of rating, if this value is less than 10 then return True.
    method.verifyTrue(ratingValue <= 10, "Rating value isnot correct, the value is greater than 10");
};    

Assert.checkButtonsWhenSmoke = function (i,j) {
   $.delay(sleep);
   var checkButtonsWhenSmoke = app.mainWindow().collectionViews()[0].buttons()[i];
   method.verifyEquals(j,checkButtonsWhenSmoke.name());
};

Assert.pageDisplaysBlank = function () {
    $.delay(sleep);
    var version = target.systemVersion();
    version = version.substring(0, version.lastIndexOf("."));
    if(version == "6.1") {
        method.verifyTrue(app.mainWindow().collectionViews()[0].cells().length<2);
    }
    else{
        method.verifyTrue(app.mainWindow().collectionViews()[0].cells().length<1);
    } 
};

Assert.pageExistText = function (i,j) {
    $.delay(sleep);
    var checkSalesPromotionActivity = app.mainWindow().collectionViews()[0].staticTexts()[i];
    method.verifyEquals(j,checkSalesPromotionActivity.name());
};
