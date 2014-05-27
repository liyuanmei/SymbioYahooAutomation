Assert.keyboardIsEnabled = function () {
    $.delay(sleep);
    var keyboardValue = app.keyboard().isEnabled();
    method.verifyEquals(1, keyboardValue);
};

Assert.textIsEnabled = function (sText) {
    $.delay(sleep);
    var mainWindow = app.mainWindow();
    method.verifyEquals(sText,app.mainWindow().textFields()[0].value());
};

Assert.backButtonOnSearchBar = function () {
    $.delay(sleep);
    method.verifyEquals("icon back", app.mainWindow().buttons()[1].name());
};

Assert.checkReturnPageDisplay =function (text) {
    $.delay(sleep);
    method.verifyEquals(text, app.mainWindow().navigationBar().name());
};

//Check if search Suggestions
Assert.autoCompletePageDisplay = function () {
    $.delay(sleep);
    var mainWindow = app.mainWindow();
    $.delay(5);
    method.verifyTrue(app.mainWindow().tableViews()[1].cells().length<21);
};

Assert.checkIconPlusDisplay = function () {
    var mainWindow = app.mainWindow();
    $.delay(sleep);
    method.verifyEquals("icon plus", app.mainWindow().tableViews()[1].cells()[0].buttons()[0].name());
};

//check whether there is a key
Assert.checkCleanIconDisplay = function () {
    $.delay(sleep);
    var mainWindow = app.mainWindow();
    var cleanIcon = app.mainWindow().textFields()[0].buttons()[0].isEnabled();
    assertNotEquals(1,cleanIcon,"clean icon still present");
};

Assert.checkCleanIcon = function () {
    $.delay(sleep);
    method.verifyEquals("Clear text",app.mainWindow().textFields()[0].buttons()[0].name());
};

//Verify whether the clear one character at a time
Assert.checkEveryDelete = function () {
    $.delay(sleep);
    method.verifyEquals("123",app.mainWindow().textFields()[0].value());
};

Assert.checkSearchPage = function (skey) {
    $.delay(sleep);
    method.verifyEquals(skey, app.mainWindow().navigationBar().name());
};

Assert.searchSuggestionsPageDisplay = function () {
    var mainWindow = app.mainWindow();
    $.delay(5);
    method.verifyTrue(app.mainWindow().tableViews()[1].cells().length<1);
};

//04-23-2014
Assert.searchButtonOnApparelCategoryIsEnabled = function () {
    $.delay(sleep);
    
    //Search button position
    var searchButtonValue = app.navigationBar().buttons()[2].isEnabled();
    method.verifyEquals(1, searchButtonValue);
};

//04-24-2014
Assert.tapIconPlusOnTableViewCheckTextIsEnabled = function (sKey) {
    $.delay(sleep);
    //To obtain search box text and check search box text show the correct
    var textValue = app.mainWindow().textFields()[0].value();
    method.verifyEquals(sKey,textValue);
};

Assert.clickOnTheDifferentIconPlusCheckTextIsEnabled = function (sKey) {
    $.delay(sleep);
    //To obtain search box text and check search box text show the correct
    var textValue = app.mainWindow().textFields()[0].value();
    method.verifyEquals(sKey,textValue);
};

Assert.clickOnTheDifferentIconPlusOnFirstFloorTableView = function (dKey) {
    $.delay(sleep);
    //To obtain search box text and check search box text show the correct
    var textValue = app.mainWindow().textFields()[0].value();
    method.verifyEquals(dKey,textValue);
};

Assert.searchResultsPage = function (sKey) {
    $.delay(sleep);
    //Verify the search page display properly
    var searchResultsPageName = app.navigationBar().name();
    method.verifyEquals('"'+sKey+'"',searchResultsPageName);
};

//04-25-2014
Assert.longtextSearchPageDisplay = function () {
    $.delay(sleep);
    method.verifyTrue(app.mainWindow().collectionViews()[0].cells().length<=1);
};

//04-28-2014
Assert.coatCategorySearchResultsPageDisplayedInList = function () {
    $.delay(sleep);
    var coatCategorySearchResultsPageDisplayedInList = app.mainWindow().navigationBar().staticTexts()[1].name();
    method.verifyEquals("搜尋上衣",coatCategorySearchResultsPageDisplayedInList);
};


Assert.ShoppingInformationPage = function () {
    $.delay(sleep);
    method.verifyEquals("購物須知",app.mainWindow().collectionViews()[0].staticTexts()[0].name());
};

Assert.repeatInputPageDisplay = function () {
    $.delay(sleep);
    var mainWindow = app.mainWindow();
    var mycars = new Array()
    mycars[0] = "11111111111"
    mycars[1] = "1111111111"
    mycars[2] = "111111111"
    mycars[3] = "11111111"
    mycars[4] = "1111111"
    mycars[5] = "111111"
    mycars[6] = "11111"
    mycars[7] = "1111"
    mycars[8] = "111"
    mycars[9] = "11"
    
    method.verifyTrue(app.mainWindow().tableViews()[0].cells().length<20);
    for (var i = 0; i < 10; i++) {
        method.verifyEquals(mycars[i],app.mainWindow().tableViews()[0].cells()[i].staticTexts()[0].name())
    };
};

Assert.checkInRecentMemorySearch = function (sText) {
    $.delay(sleep);
    var getValue = app.mainWindow().tableViews()[0].cells()[0].staticTexts()[0].name();
    method.verifyEquals(sText,getValue);
};


Assert.repeatChoosePageDisplay = function () {
    $.delay(sleep);
    var mainWindow = app.mainWindow();
    var mycars = new Array()
    mycars[0] = "11"
    mycars[1] = "111"
    mycars[2] = "1111"
    mycars[3] = "11111"
    mycars[4] = "111111"
    mycars[5] = "1111111"
    mycars[6] = "11111111"
    mycars[7] = "111111111"
    mycars[8] = "1111111111"
    mycars[9] = "11111111111"
    
    method.verifyTrue(app.mainWindow().tableViews()[0].cells().length<20);
    for (var i = 0; i < 10; i++) {
        method.verifyEquals(mycars[i],app.mainWindow().tableViews()[0].cells()[i].staticTexts()[0].name())
    };
};

Assert.elementsShouldContainTextWhenSearch = function (elements, keyword) {
    $.delay(sleep);
    var elementsName = elements.name();
    
    assertNotEquals(elementsName.indexOf(keyword) >= 0, elementsName + " not contain text: " + keyword);
};