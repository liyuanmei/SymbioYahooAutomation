test("[1937852] click on the search", function () {
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Assert.keyboardIsEnabled();
    Action.tapBackOnSearchBar();
    Action.goDiscoveryStream();
});

test("[1937854] look at the search bar tooltip text display", function () {
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Assert.textIsEnabled("搜尋全部商品");
    Action.tapBackOnSearchBar();
    Action.goDiscoveryStream();
});

test("[1937855] check return icon display", function () {
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
     
    //Check return icon display.
    Assert.backButtonOnSearchBar();
    Action.tapBackOnSearchBar();
    Action.goDiscoveryStream();
});

test("[1937856] click to return to the icon", function () {
    Action.goCategoryWhenSearchSettingOpen();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.tapBackOnSearchBar();

    //Check return page display
    Assert.checkReturnPageDisplay("全部分類");
    Action.goDiscoveryStream();
});

test("[1937857] auto complete function", function () {
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();

    Action.searchBarInput("h");
     
    //check autoComplete page display
    Assert.autoCompletePageDisplay();
    Action.tapBackOnSearchBar();
    Action.goDiscoveryStream();
});

test("[1937858] auto complete layout view", function () {
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();

    Action.searchBarInput("h");
     
    Assert.checkIconPlusDisplay();
    Action.tapBackOnSearchBar();
    Action.goDiscoveryStream();
});

test("[1937859] click the auto - complete list right side '+' Icon", function () {
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();

    Action.searchBarInput("h");
    $.delay(sleep);

    //To obtain name
    var plusValue = app.mainWindow().tableViews()[0].cells()[1].staticTexts()[0].name();
     
    //tap plus
    Action.tapIconPlusOnTableView();
     
    //check the auto - complete list right side '+' Icon
    Assert.tapIconPlusOnTableViewCheckTextIsEnabled(plusValue);
    Action.tapBackOnSearchBar();
    Action.goDiscoveryStream();
});

test("[1937860] click on the search for 2 times suggest different keyword '+' icon on the right", function () {
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();

    Action.searchBarInput("h");
    $.delay(sleep);
     
    //Click on the different icon plus
    Action.tapIconPlusOnTableView();
    $.delay(sleep);

    var plusValue = app.mainWindow().tableViews()[0].cells()[1].staticTexts()[0].name();
    $.delay(4);

    Action.clickOnTheDifferentIconPlus();
     
    // check different keyword '+' icon on the right
    Assert.clickOnTheDifferentIconPlusCheckTextIsEnabled(plusValue);
    Action.tapBackOnSearchBar();
    Action.goDiscoveryStream();
});

test("[1937861] according to the search Suggestions", function () {
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();

    Action.searchBarInput("h");
    $.delay(sleep);
     
    //Check the search results page display properly
    var plusValue = app.mainWindow().tableViews()[0].cells()[1].staticTexts()[0].name();
    Action.tapIconPlusOnTableView();
    $.delay(sleep);
     
    Action.tapKeyboardSearch();
     
    Assert.searchResultsPage(plusValue);
    $.delay(sleep);
     
    //go back
    Action.goBackOnSearchPage();
    Action.tapBackOnSearchBar();
    Action.goDiscoveryStream();

    //clean Searches
    Action.cleanSearches();
});

test("[1937862] no keyword, see clear input icon", function () {
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
     
    //check clean icon display
    Assert.checkCleanIconDisplay();
    Action.tapReturnOnSearchBar();
    Action.goDiscoveryStream();
});

test("[1937863] Have a keyword, see clear input icon display", function () {
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();

    Action.searchBarInput("h");
     
    //Verify whether the clean button
    Assert.checkCleanIcon();
    Action.tapReturnOnSearchBar();
    Action.goDiscoveryStream();
});

test("[1937864] click remove input icon", function () {
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();

    Action.searchBarInput("h");
    Action.tapClean();
     
    //Verify whether to remove the search box
    Assert.textIsEnabled("搜尋全部商品");
    Action.tapReturnOnSearchBar();
    Action.goDiscoveryStream();
});

test("[1937865] check the keyboard to remove function", function () {
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();

    Action.searchBarInput("1234");
    Action.tapKeyboardDelete();
     
    //Verify whether the clear one character at a time
    Assert.checkEveryDelete();
    Action.tapReturnOnSearchBar();
    Action.goDiscoveryStream();
});

test("[1937866] enter a keyword search", function () {
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();

    Action.searchBarInput("h");
    Action.tapKeyboardSearch();
    $.delay(sleep);
     
    Assert.checkSearchPage("\"h\"");
     
    Action.goBackOnSearchPage();
    Action.tapReturnOnSearchBar();
    Action.goDiscoveryStream();

    //clean searches
    Action.cleanSearches();
});

test("[1937867] type in Chinese to check auto complete", function () {
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
     
    //In the search bar type in Chinese
    Action.searchBarInputChinese("東");
     
    //Check the search Suggestions have been displayed in the list
    Assert.autoCompletePageDisplay();
    Action.tapReturnOnSearchBar();
    Action.goDiscoveryStream();
});

test("[1937873] Check list recent search for '+' icon on the right side", function () {
    Action.goCategoryWhenSearchSettingOpen();
    //Click on search and input “h” and "hp" for search record
    Action.tapSearchIconOnNavBar();

    Action.searchBarInput("h");
    Action.tapKeyboardSearch();
    $.delay(sleep);
     
    Action.goBackOnSearchPage();
     
    Action.searchBarInput("hp");
    Action.tapKeyboardSearch();
    $.delay(sleep);
     
    Action.goBackOnSearchPage();
    Action.tapReturnOnSearchBar();
     
    //Click on the plus to validate recent search record is added to the right
    Action.tapSearchIconOnNavBar();
    Action.tapIconPlusOnFirstFloorTableView();
    Assert.textIsEnabled("h")
    Action.tapReturnOnSearchBar();
    Action.goDiscoveryStream();
     
    //Clean searches
    Action.cleanSearches();
});

test("[1937874] At the most recent search keyword search", function () {
    Action.goCategoryWhenSearchSettingOpen();
    //Click on search and input “h” and "hp" for search record
    Action.tapSearchIconOnNavBar();

    Action.searchBarInput("h");
    Action.tapKeyboardSearch();
    $.delay(sleep);
     
    Action.goBackOnSearchPage();
     
    Action.searchBarInput("hp");
    Action.tapKeyboardSearch();
    $.delay(sleep);
     
    Action.goBackOnSearchPage();
    Action.tapReturnOnSearchBar();
     
    //Enter the search page
    Action.tapSearchIconOnNavBar();
    $.delay(sleep);
    Action.tapIconPlusOnFirstFloorTableView();
    Action.tapKeyboardSearch();
    $.delay(sleep);
    Assert.checkSearchPage("\"h\"");
     
    //Clean searches
    Action.goBackOnSearchPage();
    Action.tapReturnOnSearchBar();
    Action.goDiscoveryStream();
    Action.cleanSearches();
});

test("[1937875] No search Suggestions according to look at it", function () {
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();

    Action.searchBarInput("yeruieujeueu");
     
    //Validate the input “yeruieujeueu” , no search Suggestions
    Assert.searchSuggestionsPageDisplay();
    Action.tapReturnOnSearchBar();
    Action.goDiscoveryStream();
});

test("[1937876] No recent search shows that view", function () {
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
     
    //check no recent search shows that view
    Assert.searchSuggestionsPageDisplay();
    Action.tapReturnOnSearchBar();
    Action.goDiscoveryStream();
});

test("[1937877] Click on the recent twice different keyword search for the right '+'", function () {
    Action.goCategoryWhenSearchSettingOpen();
    //Click on search and input “h” and "hp" for search record
    Action.tapSearchIconOnNavBar();

    Action.searchBarInput("h");
    Action.tapKeyboardSearch();
    $.delay(sleep);
     
    Action.goBackOnSearchPage();
     
    Action.searchBarInput("hp");
    Action.tapKeyboardSearch();
    $.delay(sleep);
     
    Action.goBackOnSearchPage();
    Action.tapReturnOnSearchBar();
     
     
    //double tap plus
    Action.tapSearchIconOnNavBar();
    Action.tapIconPlusOnFirstFloorTableView();
    $.delay(5);
     
    var plusValue = app.mainWindow().tableViews()[0].cells()[0].staticTexts()[0].name();
     
    //click on the different icon plus
    Action.clickOnTheDifferentIconPlusOnFirstFloorTableView();
     
    //verify click on the different icon plus on first floor tableView show the correct
    Assert.clickOnTheDifferentIconPlusOnFirstFloorTableView(plusValue);
    $.delay(sleep);
     
    //Clean searches
    Action.tapReturnOnSearchBar();
    Action.goDiscoveryStream();
    Action.cleanSearches();
});

test("[1937878] Clean up into recent search keyword", function () {
    Action.goCategoryWhenSearchSettingOpen();
    //Click on search and input “h” and "hp" for search record
    Action.tapSearchIconOnNavBar();

    Action.searchBarInput("h");
    Action.tapKeyboardSearch();
    $.delay(sleep);
     
    Action.goBackOnSearchPage();
     
    Action.searchBarInput("hp");
    Action.tapKeyboardSearch();
    $.delay(sleep);
     
    Action.goBackOnSearchPage();
    Action.tapReturnOnSearchBar();
     
    Action.tapSearchIconOnNavBar();
    $.delay(sleep);
    Action.tapIconPlusOnFirstFloorTableView();
    $.delay(sleep);
    Action.tapClean();
    $.delay(sleep);
     
    //Verify the success of a cleanup
    Assert.textIsEnabled("搜尋全部商品");
    Action.tapReturnOnSearchBar();
    Action.goDiscoveryStream();
    Action.cleanSearches();
});

test("[1937879] Clean up into the keyword search proposal", function () {
    Action.goCategoryWhenSearchSettingOpen();
    //Click on search and input “h”
    Action.tapSearchIconOnNavBar();

    Action.searchBarInput("h");
    $.delay(sleep);
    Action.tapIconPlusOnFirstFloorTableView();
     
    //Click clean button
    Action.tapClean();
    $.delay(sleep);
     
    //Verify the success of a cleanup
    Assert.textIsEnabled("搜尋全部商品");
    Action.tapReturnOnSearchBar();
    Action.goDiscoveryStream();
});

test("[1937887] To view the search icon display", function () {
    Action.goApparelCategoryWhenSearchSettingOpen();
    $.delay(sleep);
     
    //verify search Button an apparel category is enabled
    Assert.searchButtonOnApparelCategoryIsEnabled();
    Action.backToAllCategory();
    Action.goDiscoveryStream();
});

test("[1937888] click search icon", function () {
    Action.goApparelCategoryWhenSearchSettingOpen();
    $.delay(sleep);
     
    //tap search icon on apparel category
    Action.tapSearchIconOnApparelCategory();
     
    //Check into the search page
    Assert.textIsEnabled("搜尋服飾");
    Action.tapReturnOnSearchBar();
    Action.backToAllCategory();
    Action.goDiscoveryStream();
});

test("[1937890] Click to return to the icon L2 layer classification", function () {
    Action.goApparelCategoryWhenSearchSettingOpen();
    $.delay(sleep);
     
    //tap search icon on apparel category
    Action.tapSearchIconOnApparelCategory();
    Action.tapReturnOnSearchBar();
     
    //check Return "服飾" Page Display
    Assert.checkReturnPageDisplay("服飾");
    Action.backToAllCategory();
    Action.goDiscoveryStream();
});

test("[1937886] Enter any long keyword search", function () {
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();

    Action.searchBarInput("JJHGHKJHHHHHJJJJJJHG");
    Action.tapKeyboardSearch();
    $.delay(5);
     
    //Validate the input “JJHGHKJHHHHHJJJJJJHG” , no search Suggestions
    Assert.longtextSearchPageDisplay();
     
    Action.goBackOnSearchPage();
    Action.tapReturnOnSearchBar();
    Action.goDiscoveryStream();
    Action.cleanSearches();
});

test("[1937891] Click to return to the icon L3 layer classification", function () {
    Action.goApparelCategoryWhenSearchSettingOpen();
    $.delay(sleep);
     
    //go fashion women's clothing category
    Action.goFashionWomenClothingCategory();
     
    Action.tapSearchIconOnNavBar();
    Action.tapReturnOnSearchBar();
    
    Assert.checkReturnPageDisplay("流行女裝");
     
    //return fashion women's clothing category
    Action.tapBackSubclassification();
     
    Action.backToAllCategory();
    Action.goDiscoveryStream();
});

test("[1937892] Click to return to the icon L4 layer classification", function () {
    Action.goApparelCategoryWhenSearchSettingOpen();
    $.delay(sleep);
     
    //go fashion women's clothing category
    Action.goFashionWomenClothingCategory();
    $.delay(sleep);
     
    //go coat category
    Action.goCoatCategory();
    $.delay(sleep);
     
    Action.tapSearchIconOnNavBar();
    Action.tapReturnOnSearchBar();
     
    Assert.checkReturnPageDisplay("上衣");
    $.delay(sleep);
     
    //go back coat category
    Action.tapBackSubclassification();
     
    //go back fashion women's clothing category
    Action.tapBackSubclassification();
     
    Action.backToAllCategory();
    Action.goDiscoveryStream();
});

test("[1937896] View the search results page", function () {
    Action.goApparelCategoryWhenSearchSettingOpen();
    $.delay(sleep);
     
    //go fashion women's clothing category
    Action.goFashionWomenClothingCategory();
     
    //click search and input "JJHGHKJHHHHHJJJJJJHG"
    Action.tapSearchIconOnNavBar();

    Action.searchBarInput("JJHGHKJHHHHHJJJJJJHG");
    Action.tapKeyboardSearch();
    $.delay(5);
     
    //Validate the input “JJHGHKJHHHHHJJJJJJHG” , no search Suggestions
    Assert.longtextSearchPageDisplay();
    $.delay(sleep);
    Action.goBackOnSearchPage();
    
    //return fashion women's clothing category
    Action.tapReturnOnSearchBar();
    $.delay(sleep);
     
    //return fashion women's clothing category
    Action.tapBackSubclassification();
     
    Action.backToAllCategory();
    Action.goDiscoveryStream();
});

test("[1937905] View the search results page", function () {
    Action.goApparelCategoryWhenSearchSettingOpen();
    $.delay(sleep);
     
    //tap goods button on tableviews
    Action.tapGoodsButton();
    Action.tapSearchIconOnNavBar();
     
    Action.searchBarInput("JJHHJHUIUUH");
     
    Assert.searchSuggestionsPageDisplay();
     
    Action.tapReturnOnSearchBar();
    Action.backToAllCategory();
    Action.goDiscoveryStream();
});