test("[1937852] click on the search", function () {
    target.logDeviceInfo();
    var version = target.systemVersion();
    version = version.substring(0,1);
    if(version == "6") {
        $.delay(10);
    }
    
    Action.cleanSearches();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();

    Assert.keyboardIsEnabled();
    Action.tapReturnOnSearchBar();
    Action.goDiscoveryStream();
});

test("[1937854] look at the search bar tooltip text display", function () {
    target.logDeviceInfo();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Assert.textIsEnabled(varTestsNoInputTheSearchBoxgWhengoCategoryWhenSearchSettingOpen);
    Action.tapReturnOnSearchBar();
    Action.goDiscoveryStream();
});

test("[1937855] Check return icon display", function () {
    target.logDeviceInfo();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    $.delay(sleep);
     
    //Check return icon display
    Assert.backButtonOnSearchBar();
    Action.tapReturnOnSearchBar();
    Action.goDiscoveryStream();
});

test("[1937856] Click to return to the icon", function () {
    target.logDeviceInfo();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.tapReturnOnSearchBar();
    $.delay(sleep);
     
    //Check return page display
    Assert.checkReturnPageDisplay(varTestCategoryName);
    $.delay(sleep);
    Action.goDiscoveryStream();
});

test("[1937857] Auto complete function", function () {
    target.logDeviceInfo();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();

    Action.englishInputMethod();
    $.delay(sleep);

    Action.searchBarInputChinese(varTestsSearchBoxInputDatah);
    $.delay(5);
     
    //check autoComplete page display
    Assert.autoCompletePageDisplay();
    $.delay(sleep);
    Action.tapReturnOnSearchBar();
    Action.goDiscoveryStream();
});

test("[1937858] Auto complete layout view", function () {
    target.logDeviceInfo();
    Action.cleanSearches();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();

    Action.searchBarInput(varTestsSearchBoxInputDatah);
    $.delay(10);
    var plus = app.mainWindow().tableViews()[0].cells()[0].buttons()[0];
    if(plus.isEnabled() == 1){
        Assert.checkIconPlusDisplay();
    }
    else{
        Action.tapReturnOnSearchBar();
        $.delay(sleep);

        Action.tapSearchIconOnNavBar();

        Action.searchBarInput(varTestsSearchBoxInputDatah);
        $.delay(10);
        Assert.checkIconPlusDisplay();
    }
    
    Action.tapReturnOnSearchBar();
    Action.goDiscoveryStream();
});

test("[1937859] Click the auto - complete list right side '+' Icon", function () {
    target.logDeviceInfo();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();

    Action.englishInputMethod();
    $.delay(sleep);

    Action.searchBarInput(varTestsSearchBoxInputDatah);
    $.delay(10);

    var plus = app.mainWindow().tableViews()[0].cells()[0].buttons()[0];
    if(plus.isEnabled() == 1){
        //To obtain name
        var plusValue = app.mainWindow().tableViews()[0].cells()[1].staticTexts()[0].name();

        //tap plus
        Action.tapIconPlusOnTableView();
        $.delay(sleep);
     
        //check the auto - complete list right side '+' Icon
        Assert.tapIconPlusOnTableViewCheckTextIsEnabled(plusValue);
    }
    else{
        Action.tapReturnOnSearchBar();
        $.delay(5);

        Action.tapSearchIconOnNavBar();
        Action.searchBarInput(varTestsSearchBoxInputDatah);
        $.delay(10);

        //To obtain name
        var plusValue = app.mainWindow().tableViews()[0].cells()[1].staticTexts()[0].name();

        //tap plus
        Action.tapIconPlusOnTableView();
        $.delay(sleep);
     
        //check the auto - complete list right side '+' Icon
        Assert.tapIconPlusOnTableViewCheckTextIsEnabled(plusValue);
    }
    $.delay(sleep);
    Action.tapReturnOnSearchBar();
    Action.goDiscoveryStream();
});

test("[1937860] Click on the search for 2 times suggest different keyword '+' icon on the right", function () {
    target.logDeviceInfo();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();

    Action.englishInputMethod();
    $.delay(sleep);

    Action.searchBarInput(varTestsSearchBoxInputDatah);
    $.delay(10);

    var plus = app.mainWindow().tableViews()[0].cells()[0].buttons()[0];
    if(plus.isEnabled() == 1){
        //Click on the different icon plus
        Action.tapIconPlusOnTableView();
        $.delay(10);
     
        var plusValue = app.mainWindow().tableViews()[0].cells()[0].staticTexts()[0].name();
    
        Action.clickOnTheDifferentIconPlus();
        $.delay(sleep);
     
        // check different keyword '+' icon on the right
        Assert.clickOnTheDifferentIconPlusCheckTextIsEnabled(plusValue);
    }
    else{
        Action.tapReturnOnSearchBar();
        $.delay(sleep);

        Action.tapSearchIconOnNavBar();
        Action.searchBarInput(varTestsSearchBoxInputDatah);
        $.delay(10);

        //Click on the different icon plus
        Action.tapIconPlusOnTableView();
        $.delay(10);
     
        var plusValue = app.mainWindow().tableViews()[0].cells()[0].staticTexts()[0].name();
    
        Action.clickOnTheDifferentIconPlus();
        $.delay(sleep);
     
        // check different keyword '+' icon on the right
        Assert.clickOnTheDifferentIconPlusCheckTextIsEnabled(plusValue);
    }
    $.delay(sleep);
    Action.tapReturnOnSearchBar();
    Action.goDiscoveryStream();
});

test("[1937861] According to the search Suggestions", function () {
    target.logDeviceInfo();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();

    Action.englishInputMethod();
    $.delay(sleep);

    Action.searchBarInput(varTestsSearchBoxInputDatah);
    $.delay(10);
    var plus = app.mainWindow().tableViews()[0].cells()[0].buttons()[0];
    if(plus.isEnabled() == 1){
        //Check the search results page display properly
        var plusValue = app.mainWindow().tableViews()[0].cells()[1].staticTexts()[0].name();
    
        Action.tapIconPlusOnTableView();
        $.delay(5);
     
        Action.tapKeyboardSearch();
     
        Assert.searchResultsPage(plusValue);
        $.delay(sleep);
    }
    else{
        Action.tapButtonOnTabBar(2);
        $.delay(sleep);
        Action.tapSearchIconOnNavBar();
        Action.searchBarInput(varTestsSearchBoxInputDatah);
        $.delay(10);

        //Check the search results page display properly
        var plusValue = app.mainWindow().tableViews()[0].cells()[1].staticTexts()[0].name();
        Action.tapIconPlusOnTableView();
        $.delay(5);
     
        Action.tapKeyboardSearch();
        Assert.searchResultsPage(plusValue);
        $.delay(sleep);
    }
     
    //go back
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
    Action.tapButtonOnTabBar(0);
     
    //clean Searches
    Action.cleanSearches();
});

test("[1937862] No keyword, see clear input icon", function () {
    target.logDeviceInfo();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    $.delay(sleep);
     
    //check clean icon display
    Assert.checkCleanIconDisplay();
    $.delay(5);

    Action.tapReturnOnSearchBar();
    Action.goDiscoveryStream();
});

test("[1937863] Have a keyword, see clear input icon display", function () {
    target.logDeviceInfo();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();

    Action.englishInputMethod();
    $.delay(sleep);

    Action.searchBarInput(varTestsSearchBoxInputDatah);
    $.delay(sleep);
     
    //Verify whether the clean button
    Assert.checkCleanIcon();
    $.delay(sleep);
    Action.tapReturnOnSearchBar();
    Action.goDiscoveryStream();
});

test("[1937864] Click remove input icon", function () {
    target.logDeviceInfo();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();

    Action.englishInputMethod();
    $.delay(sleep);

    Action.searchBarInput(varTestsSearchBoxInputDatah);
    Action.tapClean();
    $.delay(sleep);
     
    //Verify whether to remove the search box
    Assert.textIsEnabled(varTestsNoInputTheSearchBoxgWhengoCategoryWhenSearchSettingOpen);
    $.delay(sleep);
    Action.tapReturnOnSearchBar();
    Action.goDiscoveryStream();
});

test("[1937865] Check the keyboard to remove function", function () {
    target.logDeviceInfo();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();

    Action.englishInputMethod();
    $.delay(sleep);

    Action.searchBarInput(varTestsSearchBoxInputDataForCheckEveryDeleteData);
    Action.tapKeyboardDelete();
    $.delay(5);
     
    //Verify whether the clear one character at a time
    Assert.checkEveryDelete();
    Action.tapReturnOnSearchBar();
    Action.goDiscoveryStream();
});

test("[1937866] Enter a keyword search", function () {
    target.logDeviceInfo();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();

    Action.englishInputMethod();
    $.delay(sleep);

    Action.searchBarInput(varTestsSearchBoxInputDatah);
    Action.tapKeyboardSearch();
    $.delay(sleep);
     
    Assert.checkSearchPage(varTestsSearchPageWhenInputH);
    $.delay(sleep);
     
    Action.goBackOnSearchPage();
    Action.tapReturnOnSearchBar();
    Action.goDiscoveryStream();
     
    //clean searches
    Action.cleanSearches();
});

test("[1937867] Type in Chinese to check auto complete", function () {
    target.logDeviceInfo();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
     
    //In the search bar type in Chinese
    Action.searchBarInputChinese(varTestsSearchBoxInputDataEast);
     
    //Check the search Suggestions have been displayed in the list
    Assert.autoCompletePageDisplay();
    Action.tapReturnOnSearchBar();
    Action.goDiscoveryStream();
});

test("[1937873] Check list recent search for '+' icon on the right side", function () {
    target.logDeviceInfo();
    Action.goCategoryWhenSearchSettingOpen();
    //Click on search and input “h” and hp for search record
    Action.tapSearchIconOnNavBar();

    Action.englishInputMethod();
    $.delay(sleep);

    Action.searchBarInput(varTestsSearchBoxInputDatah);
    Action.tapKeyboardSearch();
    $.delay(sleep);
     
    Action.goBackOnSearchPage();
     
    Action.searchBarInput(varTestsSearchBoxInputDatahp);
    Action.tapKeyboardSearch();
    $.delay(sleep);
     
    Action.goBackOnSearchPage();
    Action.tapReturnOnSearchBar();
     
    //Click on the plus to validate recent search record is added to the right
    Action.tapSearchIconOnNavBar();
    Action.tapIconPlusOnFirstFloorTableView();
    Assert.textIsEnabled(varTestsSearchBoxInputDatah)
    Action.tapReturnOnSearchBar();
    Action.goDiscoveryStream();
     
    //Clean searches
    Action.cleanSearches();
});

test("[1937874] At the most recent search keyword search", function () {
    target.logDeviceInfo();
    Action.goCategoryWhenSearchSettingOpen();
    //Click on search and input “h” and hp for search record
    Action.tapSearchIconOnNavBar();

    Action.englishInputMethod();
    $.delay(sleep);

    Action.searchBarInput(varTestsSearchBoxInputDatah);
    Action.tapKeyboardSearch();
    $.delay(sleep);
     
    Action.goBackOnSearchPage();
     
    Action.searchBarInput(varTestsSearchBoxInputDatahp);
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
    Assert.checkSearchPage(varTestsSearchPageWhenInputH);
     
    //Clean searches
    Action.goBackOnSearchPage();
    Action.tapReturnOnSearchBar();
    Action.goDiscoveryStream();
    Action.cleanSearches();
});

test("[1937875] No search Suggestions according to look at it", function () {
    target.logDeviceInfo();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();

    Action.englishInputMethod();
    $.delay(sleep);

    Action.searchBarInput(varTestsSearchBoxInputLongData1);
     
    //Validate the input “yeruieujeueu” , no search Suggestions
    Assert.searchSuggestionsPageDisplay();
    Action.tapReturnOnSearchBar();
    Action.goDiscoveryStream();
});

test("[1937876] No recent search shows that view", function () {
    target.logDeviceInfo();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
     
    //check no recent search shows that view
    Assert.searchSuggestionsPageDisplay();
    Action.tapReturnOnSearchBar();
    Action.goDiscoveryStream();
});

test("[1937877] Click on the recent twice different keyword search for the right '+'", function () {
    target.logDeviceInfo();
    Action.goCategoryWhenSearchSettingOpen();
    //Click on search and input “h” and varTestsSearchBoxInputDatahp for search record
    Action.tapSearchIconOnNavBar();

    Action.englishInputMethod();
    $.delay(sleep);

    Action.searchBarInput(varTestsSearchBoxInputDatah);
    Action.tapKeyboardSearch();
    $.delay(sleep);
     
    Action.goBackOnSearchPage();
     
    Action.searchBarInput(varTestsSearchBoxInputDatahp);
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
    target.logDeviceInfo();
    Action.goCategoryWhenSearchSettingOpen();
    //Click on search and input “h” and varTestsSearchBoxInputDatahp for search record
    Action.tapSearchIconOnNavBar();

    Action.englishInputMethod();
    $.delay(sleep);

    Action.searchBarInput(varTestsSearchBoxInputDatah);
    Action.tapKeyboardSearch();
    $.delay(sleep);
     
    Action.goBackOnSearchPage();
     
    Action.searchBarInput(varTestsSearchBoxInputDatahp);
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
    Assert.textIsEnabled(varTestsNoInputTheSearchBoxgWhengoCategoryWhenSearchSettingOpen);
    Action.tapReturnOnSearchBar();
    Action.goDiscoveryStream();
    Action.cleanSearches();
});

test("[1937879] Clean up into the keyword search proposal", function () {
    target.logDeviceInfo();
    Action.goCategoryWhenSearchSettingOpen();
    //Click on search and input “h”
    Action.tapSearchIconOnNavBar();

    Action.englishInputMethod();
    $.delay(sleep);

    Action.searchBarInput(varTestsSearchBoxInputDatah);
    $.delay(sleep);
    Action.tapIconPlusOnFirstFloorTableView();
     
    //Click clean button
    Action.tapClean();
    $.delay(sleep);
     
    //Verify the success of a cleanup
    Assert.textIsEnabled(varTestsNoInputTheSearchBoxgWhengoCategoryWhenSearchSettingOpen);
    Action.tapReturnOnSearchBar();
    Action.goDiscoveryStream();
});

test("[1937887] To view the search icon display", function () {
    target.logDeviceInfo();
    Action.goApparelCategoryWhenSearchSettingOpen();
    $.delay(sleep);
     
    //verify search Button an apparel category is enabled
    Assert.searchButtonOnApparelCategoryIsEnabled();
    Action.backToAllCategory();
    Action.goDiscoveryStream();
});

test("[1937888] click search icon", function () {
    target.logDeviceInfo();
    Action.goApparelCategoryWhenSearchSettingOpen();
    $.delay(sleep);
     
    //tap search icon on apparel category
    Action.tapSearchIconOnApparelCategory();
     
    //Check into the search page
    Assert.textIsEnabled(varTestsNoInputTheSearchBoxgWhenGoApparelCategory);
    Action.tapReturnOnSearchBar();
    Action.backToAllCategory();
    Action.goDiscoveryStream();
});

test("[1937890] Click to return to the icon L2 layer classification", function () {
    target.logDeviceInfo();
    Action.goApparelCategoryWhenSearchSettingOpen();
    $.delay(sleep);
     
    //tap search icon on apparel category
    Action.tapSearchIconOnApparelCategory();
    Action.tapReturnOnSearchBar();
     
    //check Return "服飾" Page Display
    Assert.checkReturnPageDisplay(varTestApparel);
    Action.backToAllCategory();
    Action.goDiscoveryStream();
});

test("[1937886] Enter any long keyword search", function () {
    target.logDeviceInfo();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();

    Action.englishInputMethod();
    $.delay(sleep);

    Action.searchBarInput(varTestsSearchBoxInputLongData2);
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
    target.logDeviceInfo();
    Action.goApparelCategoryWhenSearchSettingOpen();
    $.delay(sleep);
     
    //go fashion women's clothing category
    Action.goFashionWomenClothingCategory();
     
    Action.tapSearchIconOnNavBar();
    Action.tapReturnOnSearchBar();
    
    Assert.checkReturnPageDisplay(varTestsPageNameFashionWomenClothing);
     
    //return fashion women's clothing category
    Action.tapBackSubclassification();
     
    Action.backToAllCategory();
    Action.goDiscoveryStream();
});

test("[1937892] Click to return to the icon L4 layer classification", function () {
    target.logDeviceInfo();
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
     
    Assert.checkReturnPageDisplay(varTestsSearchBoxInputDataCoat);
    $.delay(sleep);
     
    //go back coat category
    Action.tapBackSubclassification();
     
    //go back fashion women's clothing category
    Action.tapBackSubclassification();
     
    Action.backToAllCategory();
    Action.goDiscoveryStream();
});

test("[1937896] View the search results page", function () {
    target.logDeviceInfo();
    Action.goApparelCategoryWhenSearchSettingOpen();
    $.delay(sleep);
     
    //go fashion women's clothing category
    Action.goFashionWomenClothingCategory();
     
    //click search and input "JJHGHKJHHHHHJJJJJJHG"
    Action.tapSearchIconOnNavBar();

    Action.englishInputMethod();
    $.delay(sleep);

    Action.searchBarInput(varTestsSearchBoxInputLongData4);
    $.delay(10);
    
    Action.searchBarInput(varTestsSearchBoxInputLongData5);
    $.delay(10);

    Action.searchBarInput(varTestsSearchBoxInputLongData6);
    $.delay(10);

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

test("[1937905] Enter no search results page，check search results page", function () {
    target.logDeviceInfo();
    Action.goApparelCategoryWhenSearchSettingOpen();
    $.delay(sleep);
     
    //tap goods button on tableviews
    Action.tapGoodsButton();
    Action.tapSearchIconOnNavBar();

    Action.englishInputMethod();
    $.delay(sleep);
     
    Action.searchBarInput(varTestsSearchBoxInputLongData3);
    $.delay(sleep);
     
    Assert.searchSuggestionsPageDisplay();
     
    Action.tapReturnOnSearchBar();
    Action.backToAllCategory();
    Action.goDiscoveryStream();
});

//The second stage
test("[1937868] check not enter search directly" , function () {
    target.logDeviceInfo();
    Action.cleanSearches();
    Action.goCategoryWhenSearchSettingOpen();
    $.delay(sleep);
    Action.tapSearchIconOnNavBar();
    $.delay(3);

    Action.tapKeyboardSearch();
    $.delay(3);
    Assert.checkSearchPage(varTestCategoryName);
    Action.goDiscoveryStream();
});

test("[1937869] check in recent memory search function" , function () {
    target.logDeviceInfo();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();

    Action.searchBarInput(varTestsSearchBoxInputDatah);
    $.delay(5);

    Action.tapIconPlusOnFirstFloorTableView();
    var IconPlusValue = app.mainWindow().textFields()[0].value();

    Action.tapKeyboardSearch();
    Action.goBackOnSearchPage();
    Action.tapReturnOnSearchBar();

    Action.tapSearchIconOnNavBar();

    Assert.checkInRecentMemorySearch(IconPlusValue);

    Action.tapReturnOnSearchBar();
    Action.goDiscoveryStream();
    //clean searches
    Action.cleanSearches();
});

test("[1937870] direct input keyword - check in recent memory search function" , function () {
    target.logDeviceInfo();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInput(varTestsSearchBoxInputDataKeyword);

    var directInput = app.mainWindow().textFields()[0].value();
    Action.tapKeyboardSearch();

    Action.goBackOnSearchPage();
    Action.tapReturnOnSearchBar();

    Action.tapSearchIconOnNavBar();
    Assert.checkInRecentMemorySearch(directInput);

    Action.tapReturnOnSearchBar();
    Action.goDiscoveryStream();
    //clean searches
    Action.cleanSearches();
});

test("[1937871] auto complete inspection in recent memory only 6 times keyword function" , function () {
    Action.cleanSearches();
    target.logDeviceInfo();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.repeatInputWhenSearch();

    Action.tapReturnOnSearchBar();
    Action.tapSearchIconOnNavBar();
    $.delay(sleep);

    Action.repeatChooseWhenSearch();
    $.delay(sleep);
    Action.tapReturnOnSearchBar();
    Action.tapSearchIconOnNavBar();

    Assert.repeatChoosePageDisplay();
    Action.tapReturnOnSearchBar();
    Action.goDiscoveryStream();
    Action.cleanSearches();
});

test("[1937872] direct input keyword check memory only the last 6 times keyword function" , function () {
    target.logDeviceInfo();
    Action.cleanSearches();
    $.delay(sleep);

    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.repeatInputWhenSearch();

    Action.tapReturnOnSearchBar();
    Action.tapSearchIconOnNavBar();

    Assert.repeatInputPageDisplay();
    Action.tapReturnOnSearchBar();
    Action.goDiscoveryStream();
    Action.cleanSearches();
});

test("[1937889] click to return to the icon L1 layer classification" , function () {
    target.logDeviceInfo();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.tapReturnOnSearchBar();
    Assert.checkSearchPage(varTestCategoryName);
    $.delay(sleep);
    Action.goDiscoveryStream();
});

//6.9
test("[1937893] Click to return to the icon L5 layer classification", function () {
    target.logDeviceInfo();
    Action.cleanSearches();
    $.delay(sleep);

    Action.goApparelCategoryWhenSearchSettingOpen();
    $.delay(sleep);
     
    //go fashion women's clothing category
    Action.goFashionWomenClothingCategory();
    $.delay(4);

    //go to coat 
    Action.goCoatCategory();
    $.delay(4);

    //go to T-Shirt
    Action.tapClassificationButtonWhenS();
    $.delay(4);

    Action.goCoatCategory();
    $.delay(4);
     
    Action.tapSearchIconOnNavBar();
    Action.tapReturnOnSearchBar();
    
    Assert.checkReturnPageDisplay(varTestsPageNameTShirt);
     
    //return fashion women's clothing category
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
});

test("[1937894] Click to return to the icon L6 layer classification", function () {
    target.logDeviceInfo();
    Action.cleanSearches();
    $.delay(sleep);

    Action.goApparelCategoryWhenSearchSettingOpen();
    $.delay(sleep);
     
    //go fashion women's clothing category
    Action.goFashionWomenClothingCategory();
    $.delay(sleep);

    //go to coat 
    Action.goCoatCategory();
    $.delay(sleep);

    //go to T-Shirt
    Action.tapClassificationButtonWhenS();
    $.delay(sleep);

    Action.goCoatCategory();
    $.delay(sleep);

    //go to  sleeveless T-Shirt
    Action.tapClassificationButtonWhenS();
    $.delay(sleep);

    Action.goCoatCategory();
   
    Action.tapSearchIconOnNavBar();
    Action.tapReturnOnSearchBar();
    
    Assert.checkReturnPageDisplay(varTestsPageNameSleevelessTShirt);
     
    //return fashion women's clothing category
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
});

test("[1937898] Click on the search icon", function () {
    target.logDeviceInfo();
    Action.cleanSearches();
    $.delay(sleep);

    Action.goApparelCategoryWhenSearchSettingOpen();
    $.delay(sleep);
   
    Action.tapSearchIconOnNavBar();    
    Assert.textIsEnabled(varTestsNoInputTheSearchBoxgWhenGoApparelCategory);
    Action.tapReturnOnSearchBar();
     
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
});

test("[1937909] Click to return to the icon L4 layer classification", function () {
    target.logDeviceInfo();
    Action.cleanSearches();
    $.delay(sleep);

    Action.goApparelCategoryWhenSearchSettingOpen();
    $.delay(sleep);
     
    //go fashion women's clothing category
    Action.goFashionWomenClothingCategory();

    //go to coat 
    Action.goCoatCategory();
     
    Action.tapSearchIconOnNavBar();
    Action.searchBarInput(varTestsSearchBoxInputDataKeyword);
    Action.tapKeyboardSearch();
    $.delay(sleep);

    Assert.searchResultsPage(varTestsSearchBoxInputDataKeyword);
     
    //return fashion women's clothing category
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
});

test("[1937899] L2 Itemlist click on the 'back' icon", function () {
    target.logDeviceInfo();
    Action.cleanSearches();
    $.delay(sleep);

    Action.goApparelCategoryWhenSearchSettingOpen();
    $.delay(sleep);
    Action.tapGoodsButton();

    Action.goBack();
    $.delay(sleep);

    Assert.checkReturnPageDisplay(varTestCategoryName);
     
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
});

test("[1937900] L3 Itemlist click on the 'back' icon", function () {
    target.logDeviceInfo();
    Action.cleanSearches();
    $.delay(sleep);

    Action.goApparelCategoryWhenSearchSettingOpen();
    $.delay(sleep);

    //go fashion women's clothing category
    Action.goFashionWomenClothingCategory();
    $.delay(sleep);

    Action.tapGoodsButton();

    Action.goBack();
    Assert.checkReturnPageDisplay(varTestApparel);
     
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
});

test("[1937901] L4 Itemlist click on the 'back' icon", function () {
    target.logDeviceInfo();
    Action.cleanSearches();
    $.delay(sleep);

    Action.goApparelCategoryWhenSearchSettingOpen();
    $.delay(5);
    
    //go fashion women's clothing category
    Action.goFashionWomenClothingCategory();
    $.delay(sleep);

    //go to coat 
    Action.goCoatCategory();
    $.delay(sleep);

    Action.tapGoodsButton();

    Action.goBack();
    Assert.checkReturnPageDisplay(varTestsPageNameFashionWomenClothing);
     
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
});

test("[1937902] L5 Itemlist click on the 'back' icon", function () {
    target.logDeviceInfo();
    Action.cleanSearches();
    $.delay(sleep);

    Action.goApparelCategoryWhenSearchSettingOpen();
    $.delay(5);
    
    //go fashion women's clothing category
    Action.goFashionWomenClothingCategory();
    $.delay(sleep);

    //go to coat 
    Action.goCoatCategory();
    $.delay(sleep);

    //go to T-Shirt
    Action.tapClassificationButtonWhenS();
    $.delay(sleep);

    Action.goCoatCategory();
    $.delay(sleep);

    Action.tapGoodsButton();

    Action.goBack();
    Assert.checkReturnPageDisplay(varTestsSearchBoxInputDataCoat);
     
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
});

test("[1937903] L6 Itemlist click on the 'back' icon", function () {
    target.logDeviceInfo();
    Action.cleanSearches();
    $.delay(sleep);

    Action.goApparelCategoryWhenSearchSettingOpen();
    $.delay(sleep);
    
    //go fashion women's clothing category
    Action.goFashionWomenClothingCategory();

    //go to coat 
    Action.goCoatCategory();
    $.delay(sleep);

    //go to T-Shirt
    Action.tapClassificationButtonWhenS();
    $.delay(sleep);

    Action.goCoatCategory();
    $.delay(sleep);

    //go to  sleeveless T-Shirt
    Action.tapClassificationButtonWhenS();
    $.delay(sleep);

    Action.goCoatCategory();
    $.delay(sleep);

    Action.goBack();
    Assert.checkReturnPageDisplay(varTestsPageNameTShirt);
     
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
});

test("[1937904] Enter a keyword search", function () {
    target.logDeviceInfo();
    Action.cleanSearches();
    $.delay(sleep);

    Action.goApparelCategoryWhenSearchSettingOpen();
    $.delay(sleep);

    Action.tapGoodsButton();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInput(varTestsSearchBoxInputDataKeyword);
    Action.tapKeyboardSearch();
    $.delay(sleep);
    
    Assert.searchResultsPage(varTestsSearchBoxInputDataKeyword);
     
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
});

test("[1937906] Classification of L1 in search", function () {
    target.logDeviceInfo();
    Action.cleanSearches();
    $.delay(sleep);

    Action.goCategoryWhenSearchSettingOpen();
    $.delay(5);

    Action.tapSearchIconOnNavBar();

    Assert.textIsEnabled(varTestsNoInputTheSearchBoxgWhengoCategoryWhenSearchSettingOpen);
    $.delay(sleep);

    Action.searchBarInput(varTestsSearchBoxInputDataKeyword);
    Action.tapKeyboardSearch();
    $.delay(sleep);
    
    Assert.searchResultsPage(varTestsSearchBoxInputDataKeyword);
     
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
});

//6.10
test("[1937907] Classification of L2 in search", function () {
    target.logDeviceInfo();
    Action.cleanSearches();
    $.delay(sleep);

    Action.goApparelCategoryWhenSearchSettingOpen();
    $.delay(5);

    Action.tapGoodsButton();
    Action.tapSearchIconOnNavBar();

    Assert.textIsEnabled(varTestsNoInputTheSearchBoxgWhenGoApparelCategory);
    $.delay(sleep);
    
    Action.searchBarInput(varTestsSearchBoxInputDataKeyword);
    Action.tapKeyboardSearch();
    $.delay(sleep);
    
    Assert.searchResultsPage(varTestsSearchBoxInputDataKeyword);
     
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
});

test("[1937908] Classification of L3 in search", function () {
    target.logDeviceInfo();
    Action.cleanSearches();
    $.delay(sleep);

    Action.goApparelCategoryWhenSearchSettingOpen();
    $.delay(5);
    
    //go fashion women's clothing category
    Action.goFashionWomenClothingCategory();

    Action.tapGoodsButton();
    Action.tapSearchIconOnNavBar();

    Assert.textIsEnabled(varTestsNoInputTheSearchBoxgWhenGoToFashionWomenClothing);
    $.delay(sleep);
    
    Action.searchBarInput(varTestsSearchBoxInputDataKeyword);
    Action.tapKeyboardSearch();
    $.delay(sleep);
    
    Assert.searchResultsPage(varTestsSearchBoxInputDataKeyword);
     
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
    Action.tapButtonOnTabBar(0);
});

test("[1937910] Classification of L5 in search", function () {
    target.logDeviceInfo();
    Action.cleanSearches();
    $.delay(sleep);

    Action.goApparelCategoryWhenSearchSettingOpen();
    $.delay(5);
    
    //go fashion women's clothing category
    Action.goFashionWomenClothingCategory();

    //go to coat 
    Action.goCoatCategory();

    //go to T-Shirt
    Action.tapClassificationButtonWhenS();
    $.delay(sleep);

    Action.goCoatCategory();

    Action.tapGoodsButton();
    Action.tapSearchIconOnNavBar();

    Assert.textIsEnabled(varTestsNoInputTheSearchBoxgWhenGoToTShirt);
    $.delay(sleep);
    
    Action.searchBarInput(varTestsSearchBoxInputDataKeyword);
    Action.tapKeyboardSearch();
    $.delay(sleep);
    
    Assert.searchResultsPage(varTestsSearchBoxInputDataKeyword);
     
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
});

test("[1937911] Classification of L6 in search", function () {
    target.logDeviceInfo();
    Action.cleanSearches();
    $.delay(sleep);

    Action.goApparelCategoryWhenSearchSettingOpen();
    $.delay(5);
    
    //go fashion women's clothing category
    Action.goFashionWomenClothingCategory();

    //go to coat 
    Action.goCoatCategory();

    //go to T-Shirt
    Action.tapClassificationButtonWhenS();
    $.delay(sleep);

    Action.goCoatCategory();

    //go to sleeveless T-Shirt
    Action.tapClassificationButtonWhenS();
    $.delay(sleep);

    Action.goCoatCategory();
    $.delay(sleep);

    Action.tapSearchIconOnNavBar();
    $.delay(sleep);

    Assert.textIsEnabled(varTestsNoInputTheSearchBoxgWhenGoToSleevelessTShirt);
    $.delay(sleep);
    
    Action.searchBarInput(varTestsSearchBoxInputDataKeyword);
    Action.tapKeyboardSearch();
    $.delay(sleep);
    
    Assert.searchResultsPage(varTestsSearchBoxInputDataKeyword);
     
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
});

//the search result of "iphone" is not correct
test("[1937912] check the search results", function () {
    target.logDeviceInfo();
    Action.cleanSearches();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();

    Action.englishInputMethod();
    $.delay(sleep);
    
    Action.searchBarInput(varTestsSearchBoxInputDataIphone);
    Action.tapKeyboardSearch();
    Action.pageShow();

    //verify type "iphone" show the correct
    $.delay(sleep);
    var productName = app.mainWindow().collectionViews()[0].cells()[1].staticTexts()[2];

    UIALogger.logMessage(productName.name());
    Assert.elementsShouldContainText(productName, varTestsCheckTheKeyword1);
     
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
    Action.tapButtonOnTabBar(0);
});

test("[1959905] Verify '搜索全部商店'function" , function () {
    target.logDeviceInfo();
    Action.cleanSearches();
    $.delay(sleep);

    Action.goCategoryWhenSearchSettingOpen();
    $.delay(sleep);

    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese(varTestsSearchBoxInputDataStore1);
    Action.tapKeyboardSearch();
    $.delay(5);

    Action.tapStoreTab();
    $.delay(10);

    Action.tapSearchResultOfStore();
    Action.tapSearchIconOnNavBarWhenSRP();
    Action.searchBarInputChinese(varTestsSearchBoxInputDataModelling);
    Action.tapKeyboardSearch();
    $.delay(sleep);

    Action.tapAllCoatgoryWhenSRP();

    Assert.checkButtonsNotExistOnStoreSearchPage(0);
     
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
});

test("[1977507] [bug case]verify search result when enter special characters in search box." , function () {
    target.logDeviceInfo();
    Action.cleanSearches();
    $.delay(sleep);

    Action.goCategoryWhenSearchSettingOpen();
    $.delay(sleep);

    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese(varTestsSearchBoxInputDataSpecialCharacters);
    Action.tapKeyboardSearch();
    Action.pageShow();
  
    //verify exist to goods
    Assert.checkFavoriteStoreCellsShowCorrectly();
     
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
});

test("[1977509] [bug case]verify It cann't show blank when the price is 0 in 「篩選」layer.", function () {
    target.logDeviceInfo();
    Action.cleanSearches();
    $.delay(sleep);

    //go to l1
    Action.tapButtonOnTabBar(2);
    Action.tapItemOnCategoryScreenWhenItemPage(0);
    Action.goCommodityTab();
    Action.pageShow();

    //Tap Advanced button
    Action.tapButtonsInAdvancedBarWhenSRP();

    //Tap browse mode button on advanced bar. And verify this button would enabled after tapped.
    Action.tapButtonsInAdvancedBar(1);
    $.delay(sleep);

    Action.chooseCategoryBrowseMode(varTestsListInBrowse);
    $.delay(5);

    //Tap Advanced button.
    Action.tapButtonsInAdvancedBarWhenSRP();

    //go to 篩選 tab.
    Action.tapButtonsInAdvancedBar(2);

    $.delay(sleep);
    var version = target.systemVersion();
    version = version.substring(0,1);
    if(version == "6") {
        //drag price bar to 253 price.
        app.mainWindow().dragInsideWithOptions({startOffset: {x:0.92, y:0.34}, endOffset:{x:0.00, y:0.37}, duration:12.2});
        $.delay(sleep);
    }    
    else{
        //drag price bar to 253 price.    
        app.mainWindow().dragInsideWithOptions({startOffset:{x:0.92, y:0.28}, endOffset:{x:0.00, y:0.31}, duration:1.4});
        //app.mainWindow().dragInsideWithOptions({startOffset: {x: 0.92, y: 0.29}, endOffset:{x: 0.234, y: 0.29}});
    }
    
    Action.tapDetermineInAdvancedBarWhenSRP();
    $.delay(5);

    var version = target.systemVersion();
    version = version.substring(0,1);
    if(version == "6") {
        Action.tapItemOnProductListScreen();
    }
    else{
        Action.tapSearchResultOfStore();
    }
    
    $.delay(15);

    obj.scrollDowns(1);
    $.delay(10);

    //Verify screen successful navigated to item page.
    Assert.itemPageShowCorrect();

    //go to l2
    Action.tapButtonOnTabBar(2);
    $.delay(10);

    Action.tapButtonOnTabBar(2);
    Action.tapItemOnCategoryScreenWhenItemPage(0);
    $.delay(sleep);

    Action.tapClassificationButtonWhenS();
    Action.tapChoosePreductCategoryWhenOptions(0,1);
    Action.goCommodityTab();
    Action.pageShow();
    //Tap Advanced button.
    Action.tapButtonsInAdvancedBarWhenSRP();

    //go to 篩選 tab.
    Action.tapButtonsInAdvancedBar(2);

    $.delay(sleep);
    var version = target.systemVersion();
    version = version.substring(0,1);
    if(version == "6") {
        //drag price bar to 23 price.
        app.mainWindow().dragInsideWithOptions({startOffset: {x:0.92, y:0.34}, endOffset:{x:0.00, y:0.37}, duration:12.2});
        $.delay(sleep);
    }    
    else{
        //drag price bar to 23 price.    
        app.mainWindow().dragInsideWithOptions({startOffset:{x:0.92, y:0.28}, endOffset:{x:0.00, y:0.31}, duration:1.4});
        //app.mainWindow().dragInsideWithOptions({startOffset: {x: 0.92, y: 0.29}, endOffset:{x: 0.234, y: 0.29}});
    }
    Action.tapDetermineInAdvancedBarWhenSRP();
    $.delay(sleep);

    try{
        Action.tapSearchResultOfStore();
        $.delay(15);

        obj.scrollDowns(1);
        $.delay(10);

        //Verify screen successful navigated to item page.
        Assert.itemPageShowCorrect();
    }
    catch (err) {
        //There is no data
        //classification and goods buttons is first cell
        var version = target.systemVersion();
        version = version.substring(0,1);
        if(version == "6") {
            var noData = app.mainWindow().collectionViews()[0].staticTexts()[1];
            Assert.elementsValueShouldContainText(noData,varTestsNoData);
        }
        else{
            Assert.checkGoodsExist();
        }
    }

    //go to l3
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(2);
    Action.tapItemOnCategoryScreenWhenItemPage(0);
    $.delay(sleep);

    Action.tapClassificationButtonWhenS();
    Action.tapChoosePreductCategoryWhenOptions(0,1);
    $.delay(sleep);

    Action.tapClassificationButtonWhenS();
    $.delay(sleep);

    Action.tapChoosePreductCategoryWhenOptions(0,3);
    $.delay(sleep);

    Action.goCommodityTab();
    $.delay(10);

    //Tap Advanced button.
    Action.tapButtonsInAdvancedBarWhenSRP();

    //go to 篩選 tab.
    Action.tapButtonsInAdvancedBar(2);

    $.delay(sleep);
    var version = target.systemVersion();
    version = version.substring(0,1);
    if(version == "6") {
        //drag price bar to 5 price.
        app.mainWindow().dragInsideWithOptions({startOffset: {x:0.92, y:0.34}, endOffset:{x:0.00, y:0.37}, duration:12.2});
        $.delay(sleep);
    }    
    else{
        //drag price bar to 5 price.    
        app.mainWindow().dragInsideWithOptions({startOffset:{x:0.92, y:0.28}, endOffset:{x:0.00, y:0.31}, duration:1.4});
        //app.mainWindow().dragInsideWithOptions({startOffset: {x: 0.92, y: 0.29}, endOffset:{x: 0.234, y: 0.29}});
    }
    Action.tapDetermineInAdvancedBarWhenSRP();
    $.delay(sleep);

    try{
        Action.tapSearchResultOfStore();
        $.delay(15);

        obj.scrollDowns(1);
        $.delay(10);

        //Verify screen successful navigated to item page.
        Assert.itemPageShowCorrect();
    }
    catch (err) {
        //There is no data
        //classification and goods buttons is first cell
        var version = target.systemVersion();
        version = version.substring(0,1);
        if(version == "6") {
            var noData = app.mainWindow().collectionViews()[0].staticTexts()[1];
            Assert.elementsValueShouldContainText(noData,varTestsNoData);
        }
        else{
            Assert.checkGoodsExist();
        }
        
    }
    $.delay(10);

    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
});

test("[1959914] Verify user can access store page by tapping store logo", function () {
    target.logDeviceInfo();
    Action.cleanSearches();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese(varTestsSearchBoxInputDataTokyo);
    Action.tapKeyboardSearch();
    $.delay(sleep);

    Action.tapStoreTab();
    $.delay(10);

    Action.tapSearchResultOfStore();

    $.delay(5);

    Assert.checkButtonOnStore();

    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
    Action.tapButtonOnTabBar(0);
});

//6.30
test("[1977510] [bug case]verify「搜尋全部分類」button can work in category of 「商品」tab.", function () {
    target.logDeviceInfo();
    Action.cleanSearches();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese(varTestsSearchBoxInputDataCoat);
    Action.tapKeyboardSearch();
    $.delay(10);

    //tap advanced button.
    Action.tapButtonsInAdvancedBarWhenSRP();
    $.delay(sleep);

    //go to 篩選 tab.
    Action.tapButtonsInAdvancedBar(2);

    //go to 篩選 tab choose
    Action.tapButtonOnFilterAttributeScreen(0);
    Action.tapButtonOnFilterAttributeScreen(1);
    Action.tapButtonOnFilterAttributeScreen(2);
    Action.tapButtonOnFilterAttributeScreen(3);
    Action.tapButtonOnFilterAttributeScreen(4);
    Action.tapButtonOnFilterAttributeScreen(5);
    Action.tapButtonOnFilterAttributeScreen(6);
    Action.tapButtonOnFilterAttributeScreen(7);
    Action.tapButtonOnFilterAttributeScreen(8);
    $.delay(sleep);

    Action.tapSubmitButtonOnAdvanceScreen();
    $.delay(sleep);

    //There is not exist “搜索全部分類” buttons.
    Assert.checkButtonsNotExistOnStoreSearchPage();

    //tap advanced button.
    Action.tapButtonsInAdvancedBarWhenSRP();
    $.delay(sleep);

    //go to 篩選 tab.
    Action.tapButtonsInAdvancedBar(2);

    Action.tapClearButtonOnFilterScreenWhenSRP();
    Action.tapSubmitButtonOnAdvanceScreen();
    $.delay(sleep);

    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
    Action.tapButtonOnTabBar(0);
});

test("[1959884] Verify ‘購物須知’,when the store has no promotion" , function () {
    target.logDeviceInfo();
    Action.cleanSearches();
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese(varTestsSearchBoxInputDataTokyo);
    Action.tapKeyboardSearch();
    $.delay(5);

    Action.tapStoreTab();
    $.delay(10);

    Action.tapSearchResultOfStore();
   
    Action.tapShoppingInformationPage();
    $.delay(sleep);

    Assert.ShoppingInformationPage();
    
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
});

test("[1937880] Verify search icon display" , function () {
    target.logDeviceInfo();
    Action.cleanSearches();
    Action.tapSearchIconOnNavBar();
    $.delay(sleep);
    
    //verify keyboard is exist
    Assert.keyboardIsEnabled();
    $.delay(sleep);

    //verify the search box display
    Assert.textIsEnabled(varTestsNoInputTheSearchBoxgWhengoCategoryWhenSearchSettingOpen);
    $.delay(sleep);

    //Check return icon display
    Assert.backButtonOnSearchBar();
    $.delay(sleep);

    //Check barcode search
    Assert.tapBarcodeSearch();
    $.delay(sleep);

    Action.tapReturnOnSearchBar();  
});