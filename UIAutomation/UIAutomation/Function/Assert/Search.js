Assert.keyboardIsEnabled = function () {
    $.delay(sleep);
    var keyboardValue = app.keyboard().isEnabled();
    assertEquals(1, keyboardValue);
};

Assert.textIsEnabled = function (sText) {
    $.delay(sleep);
    var mainWindow = app.mainWindow();
    assertEquals(sText,app.mainWindow().textFields()[0].value());
};

Assert.backButtonOnSearchBar = function () {
    $.delay(sleep);
    assertEquals("icon back", app.mainWindow().buttons()[1].name());
};

Assert.checkReturnPageDisplay =function (text) {
    $.delay(sleep);
    assertEquals(text, app.mainWindow().navigationBar().name());
};

//Check if search Suggestions
Assert.autoCompletePageDisplay = function () {
    $.delay(sleep);
    var mainWindow = app.mainWindow();
    $.delay(5);
    assertTrue(app.mainWindow().tableViews()[1].cells().length<20);
};

Assert.checkIconPlusDisplay = function () {
    var mainWindow = app.mainWindow();
    $.delay(sleep);
    assertEquals("icon plus", app.mainWindow().tableViews()[1].cells()[0].buttons()[0].name());
};

//check whether there is a key
Assert.checkCleanIconDisplay = function () {
    $.delay(sleep);
    var mainWindow = app.mainWindow();
    var cleanIcon = app.mainWindow().textFields()[0].buttons()[0].isEnabled();
    assertNotEquals(1,cleanIcon,"check clean icon");
};

Assert.checkCleanIcon = function () {
    $.delay(sleep);
    assertEquals("Clear text",app.mainWindow().textFields()[0].buttons()[0].name());
};

//Verify whether the clear one character at a time
Assert.checkEveryDelete = function () {
    $.delay(sleep);
    assertEquals("123",app.mainWindow().textFields()[0].value());
};

Assert.checkSearchPage = function (skey) {
    $.delay(sleep);
    assertEquals(skey, app.mainWindow().navigationBar().name());
};

Assert.searchSuggestionsPageDisplay = function () {
    var mainWindow = app.mainWindow();
    $.delay(5);
    assertTrue(app.mainWindow().tableViews()[1].cells().length<1);
};

//04-23-2014
Assert.searchButtonOnApparelCategoryIsEnabled = function () {
    $.delay(sleep);
    
    //Search button position
    var searchButtonValue = app.navigationBar().buttons()[2].isEnabled();
    assertEquals(1, searchButtonValue);
};

//04-24-2014
Assert.tapIconPlusOnTableViewCheckTextIsEnabled = function (sKey) {
    $.delay(sleep);
    //To obtain search box text and check search box text show the correct
    var textValue = app.mainWindow().textFields()[0].value();
    assertEquals(sKey,textValue);
};

Assert.clickOnTheDifferentIconPlusCheckTextIsEnabled = function (sKey) {
    $.delay(sleep);
    //To obtain search box text and check search box text show the correct
    var textValue = app.mainWindow().textFields()[0].value();
    assertEquals(sKey,textValue);
};

Assert.clickOnTheDifferentIconPlusOnFirstFloorTableView = function (dKey) {
    $.delay(sleep);
    //To obtain search box text and check search box text show the correct
    var textValue = app.mainWindow().textFields()[0].value();
    assertEquals(dKey,textValue);
};

Assert.searchResultsPage = function (sKey) {
    $.delay(sleep);
    //Verify the search page display properly
    var searchResultsPageName = app.navigationBar().name();
    assertEquals('"'+sKey+'"',searchResultsPageName);
};

//04-25-2014
Assert.longtextSearchPageDisplay = function () {
   $.delay(sleep);
   assertTrue(app.mainWindow().collectionViews()[0].cells().length<=1);
};

//04-28-2014
Assert.coatCategorySearchResultsPageDisplayedInList = function () {
    $.delay(sleep);
    var coatCategorySearchResultsPageDisplayedInList = app.mainWindow().navigationBar().staticTexts()[1].name();
    assertEquals("搜尋上衣",coatCategorySearchResultsPageDisplayedInList);
};