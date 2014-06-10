test("[1937852] click on the search", function () {
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    target.logElementTree();
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

test("[1937855] Check return icon display", function () {
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    $.delay(sleep);
     
    //Check return icon display
    Assert.backButtonOnSearchBar();
    Action.tapBackOnSearchBar();
    Action.goDiscoveryStream();
});

test("[1937856] Click to return to the icon", function () {
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.tapBackOnSearchBar();
    $.delay(sleep);
     
    //Check return page display
    Assert.checkReturnPageDisplay("全部分類");
    $.delay(sleep);
    Action.goDiscoveryStream();
});

test("[1937857] Auto complete function", function () {
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();

    Action.englishInputMethod();
    $.delay(sleep);

    Action.searchBarInput("h");
    $.delay(5);
     
    //check autoComplete page display
    Assert.autoCompletePageDisplay();
    $.delay(sleep);
    Action.tapBackOnSearchBar();
    Action.goDiscoveryStream();
});

test("[1937858] Auto complete layout view", function () {
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();

    Action.englishInputMethod();
    $.delay(sleep);

    Action.searchBarInput("h");
    $.delay(5);
     
    Assert.checkIconPlusDisplay();
    Action.tapBackOnSearchBar();
    Action.goDiscoveryStream();
});

test("[1937859] Click the auto - complete list right side '+' Icon", function () {
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();

    Action.englishInputMethod();
    $.delay(sleep);

    Action.searchBarInput("h");
    $.delay(5);
     
    //To obtain name
    var plusValue = app.mainWindow().tableViews()[1].cells()[1].staticTexts()[0].name();
     
    //tap plus
    Action.tapIconPlusOnTableView();
    $.delay(sleep);
     
    //check the auto - complete list right side '+' Icon
    Assert.tapIconPlusOnTableViewCheckTextIsEnabled(plusValue);
    $.delay(sleep);
    Action.tapBackOnSearchBar();
    Action.goDiscoveryStream();
});

test("[1937860] Click on the search for 2 times suggest different keyword '+' icon on the right", function () {
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();

    Action.englishInputMethod();
    $.delay(sleep);

    Action.searchBarInput("h");
    $.delay(5);
     
    //Click on the different icon plus
    Action.tapIconPlusOnTableView();
    $.delay(5);
     
    var plusValue = app.mainWindow().tableViews()[1].cells()[0].staticTexts()[0].name();
     
    Action.clickOnTheDifferentIconPlus();
    $.delay(sleep);
     
    // check different keyword '+' icon on the right
    Assert.clickOnTheDifferentIconPlusCheckTextIsEnabled(plusValue);
    $.delay(sleep);
    Action.tapBackOnSearchBar();
    Action.goDiscoveryStream();
});

test("[1937861] According to the search Suggestions", function () {
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();

    Action.englishInputMethod();
    $.delay(sleep);

    Action.searchBarInput("h");
    $.delay(5);
     
    //Check the search results page display properly
    var plusValue = app.mainWindow().tableViews()[1].cells()[1].staticTexts()[0].name();
    Action.tapIconPlusOnTableView();
    $.delay(5);
     
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

test("[1937862] No keyword, see clear input icon", function () {
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    $.delay(sleep);
     
    //check clean icon display
    Assert.checkCleanIconDisplay();
    $.delay(5);
    //app.mainWindow().logElementTree();
    Action.tapReturnOnSearchBar();
    Action.goDiscoveryStream();
});

test("[1937863] Have a keyword, see clear input icon display", function () {
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();

    Action.englishInputMethod();
    $.delay(sleep);

    Action.searchBarInput("h");
    $.delay(sleep);
     
    //Verify whether the clean button
    Assert.checkCleanIcon();
    $.delay(sleep);
    Action.tapReturnOnSearchBar();
    Action.goDiscoveryStream();
});

test("[1937864] Click remove input icon", function () {
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();

    Action.englishInputMethod();
    $.delay(sleep);

    Action.searchBarInput("h");
    Action.tapClean();
    $.delay(sleep);
     
    //Verify whether to remove the search box
    Assert.textIsEnabled("搜尋全部商品");
    $.delay(sleep);
    Action.tapReturnOnSearchBar();
    Action.goDiscoveryStream();
});

test("[1937865] Check the keyboard to remove function", function () {
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();

    Action.englishInputMethod();
    $.delay(sleep);

    Action.searchBarInput("1234");
    Action.tapKeyboardDelete();
    $.delay(sleep);
     
    //Verify whether the clear one character at a time
    Assert.checkEveryDelete();
    Action.tapReturnOnSearchBar();
    Action.goDiscoveryStream();
});

test("[1937866] Enter a keyword search", function () {
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();

    Action.englishInputMethod();
    $.delay(sleep);

    Action.searchBarInput("h");
    Action.tapKeyboardSearch();
    $.delay(sleep);
     
    Assert.checkSearchPage("\"h\"");
    $.delay(sleep);
     
    Action.goBackOnSearchPage();
    Action.tapReturnOnSearchBar();
    Action.goDiscoveryStream();
     
    //clean searches
    Action.cleanSearches();
});

test("[1937867] Type in Chinese to check auto complete", function () {
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

    Action.englishInputMethod();
    $.delay(sleep);

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

    Action.englishInputMethod();
    $.delay(sleep);

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

    Action.englishInputMethod();
    $.delay(sleep);

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

    Action.englishInputMethod();
    $.delay(sleep);

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

    Action.englishInputMethod();
    $.delay(sleep);

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

    Action.englishInputMethod();
    $.delay(sleep);

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

    Action.englishInputMethod();
    $.delay(sleep);

    Action.searchBarInput("JJHGHKJHHHHHJJJJJJHG");
    Action.tapKeyboardSearch();
    $.delay(5);
    target.logElementTree();
     
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

    Action.englishInputMethod();
    $.delay(sleep);

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

    Action.englishInputMethod();
    $.delay(sleep);
     
    Action.searchBarInput("JJHHJHUIUUH");
    $.delay(sleep);
     
    Assert.searchSuggestionsPageDisplay();
     
    Action.tapReturnOnSearchBar();
    Action.backToAllCategory();
    Action.goDiscoveryStream();
});

//The second stage
test("[1937868] check not enter search directly" , function () {
    Action.cleanSearches();
    Action.goCategoryWhenSearchSettingOpen();
    $.delay(sleep);
    Action.tapSearchIconOnNavBar();
    $.delay(3);

    Action.tapKeyboardSearch();
    $.delay(3);
    Assert.checkSearchPage("全部分類");
    Action.goDiscoveryStream();
});

test("[1937869] check in recent memory search function" , function () {
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();

    Action.searchBarInput("h");
    $.delay(4);
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
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInput("keyword");

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
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();
    Action.tapReturnOnSearchBar();
    Assert.checkSearchPage("全部分類");
    $.delay(sleep);
    Action.goDiscoveryStream();
});

//6.9
test("[1937893] Click to return to the icon L5 layer classification", function () {
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
     
    Action.tapSearchIconOnNavBar();
    Action.tapReturnOnSearchBar();
    
    Assert.checkReturnPageDisplay("T恤");
     
    //return fashion women's clothing category
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
});

test("[1937894] Click to return to the icon L6 layer classification", function () {
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
   
    Action.tapSearchIconOnNavBar();
    Action.tapReturnOnSearchBar();
    
    Assert.checkReturnPageDisplay("無袖T恤");
     
    //return fashion women's clothing category
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
});

test("[1937898] Click on the search icon", function () {
    Action.cleanSearches();
    $.delay(sleep);

    Action.goApparelCategoryWhenSearchSettingOpen();
    $.delay(sleep);
   
    Action.tapSearchIconOnNavBar();    
    Assert.textIsEnabled("搜尋服飾");
    Action.tapReturnOnSearchBar();
     
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
});

test("[1937909] Click to return to the icon L4 layer classification", function () {
    Action.cleanSearches();
    $.delay(sleep);

    Action.goApparelCategoryWhenSearchSettingOpen();
    $.delay(sleep);
     
    //go fashion women's clothing category
    Action.goFashionWomenClothingCategory();

    //go to coat 
    Action.goCoatCategory();
     
    Action.tapSearchIconOnNavBar();
    Action.searchBarInput("keyword");
    Action.tapKeyboardSearch();
    $.delay(sleep);
    
    Assert.searchResultsPage("keyword");
     
    //return fashion women's clothing category
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
});

test("[1937899] L2 Itemlist click on the 'back' icon", function () {
    Action.cleanSearches();
    $.delay(sleep);

    Action.goApparelCategoryWhenSearchSettingOpen();
    $.delay(sleep);
    Action.tapGoodsButton();

    Action.goBack();
    $.delay(sleep);

    Assert.checkReturnPageDisplay("全部分類");
     
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
});

test("[1937900] L3 Itemlist click on the 'back' icon", function () {
    Action.cleanSearches();
    $.delay(sleep);

    Action.goApparelCategoryWhenSearchSettingOpen();
    $.delay(sleep);

    //go fashion women's clothing category
    Action.goFashionWomenClothingCategory();
    $.delay(sleep);

    Action.tapGoodsButton();

    Action.goBack();
    Assert.checkReturnPageDisplay("服飾");
     
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
});

test("[1937901] L4 Itemlist click on the 'back' icon", function () {
    Action.cleanSearches();
    $.delay(sleep);

    Action.goApparelCategoryWhenSearchSettingOpen();
    $.delay(sleep);
    
    //go fashion women's clothing category
    Action.goFashionWomenClothingCategory();

    //go to coat 
    Action.goCoatCategory();
    $.delay(sleep);

    Action.tapGoodsButton();

    Action.goBack();
    Assert.checkReturnPageDisplay("流行女裝");
     
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
});

test("[1937902] L5 Itemlist click on the 'back' icon", function () {
    Action.cleanSearches();
    $.delay(sleep);

    Action.goApparelCategoryWhenSearchSettingOpen();
    $.delay(sleep);
    
    //go fashion women's clothing category
    Action.goFashionWomenClothingCategory();
    $.delay(sleep);

    //go to coat 
    Action.goCoatCategory();

    //go to T-Shirt
    Action.tapClassificationButtonWhenS();
    $.delay(sleep);

    Action.goCoatCategory();

    Action.tapGoodsButton();

    Action.goBack();
    Assert.checkReturnPageDisplay("上衣");
     
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
});

test("[1937903] L6 Itemlist click on the 'back' icon", function () {
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
    Assert.checkReturnPageDisplay("T恤");
     
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
});

test("[1937904] Enter a keyword search", function () {
    Action.cleanSearches();
    $.delay(sleep);

    Action.goApparelCategoryWhenSearchSettingOpen();
    $.delay(sleep);

    Action.tapGoodsButton();
    Action.tapSearchIconOnNavBar();
    Action.searchBarInput("keyword");
    Action.tapKeyboardSearch();
    $.delay(sleep);
    
    Assert.searchResultsPage("keyword");
     
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
});

test("[1937906] Classification of L1 in search", function () {
    Action.cleanSearches();
    $.delay(sleep);

    Action.goCategoryWhenSearchSettingOpen();
    $.delay(sleep);

    Action.tapSearchIconOnNavBar();

    Assert.textIsEnabled("搜尋全部商品");
    $.delay(sleep);

    Action.searchBarInput("keyword");
    Action.tapKeyboardSearch();
    $.delay(sleep);
    
    Assert.searchResultsPage("keyword");
     
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
});

//6.10
test("[1937907] Classification of L2 in search", function () {
    Action.cleanSearches();
    $.delay(sleep);

    Action.goApparelCategoryWhenSearchSettingOpen();
    $.delay(sleep);

    Action.tapGoodsButton();
    Action.tapSearchIconOnNavBar();

    Assert.textIsEnabled("搜尋服飾");
    $.delay(sleep);
    
    Action.searchBarInput("keyword");
    Action.tapKeyboardSearch();
    $.delay(sleep);
    
    Assert.searchResultsPage("keyword");
     
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
});

test("[1937908] Classification of L3 in search", function () {
    Action.cleanSearches();
    $.delay(sleep);

    Action.goApparelCategoryWhenSearchSettingOpen();
    $.delay(sleep);
    
    //go fashion women's clothing category
    Action.goFashionWomenClothingCategory();

    Action.tapGoodsButton();
    Action.tapSearchIconOnNavBar();

    Assert.textIsEnabled("搜尋流行女裝");
    $.delay(sleep);
    
    Action.searchBarInput("keyword");
    Action.tapKeyboardSearch();
    $.delay(sleep);
    
    Assert.searchResultsPage("keyword");
     
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
});

test("[1937910] Classification of L5 in search", function () {
    Action.cleanSearches();
    $.delay(sleep);

    Action.goApparelCategoryWhenSearchSettingOpen();
    $.delay(sleep);
    
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

    Assert.textIsEnabled("搜尋T恤");
    $.delay(sleep);
    
    Action.searchBarInput("keyword");
    Action.tapKeyboardSearch();
    $.delay(sleep);
    
    Assert.searchResultsPage("keyword");
     
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
});

test("[1937911] Classification of L6 in search", function () {
    Action.cleanSearches();
    $.delay(sleep);

    Action.goApparelCategoryWhenSearchSettingOpen();
    $.delay(sleep);
    
    //go fashion women's clothing category
    Action.goFashionWomenClothingCategory();

    //go to coat 
    Action.goCoatCategory();

    //go to T-Shirt
    Action.tapClassificationButtonWhenS();
    $.delay(sleep);

    Action.goCoatCategory();

    //go to  sleeveless T-Shirt
    Action.tapClassificationButtonWhenS();
    $.delay(sleep);

    Action.goCoatCategory();
    $.delay(sleep);

    Action.tapSearchIconOnNavBar();

    Assert.textIsEnabled("搜尋無袖T恤");
    $.delay(sleep);
    
    Action.searchBarInput("keyword");
    Action.tapKeyboardSearch();
    $.delay(sleep);
    
    Assert.searchResultsPage("keyword");
     
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
});

test("[1937912] check the search results", function () {
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();

    Action.englishInputMethod();
    $.delay(sleep);
    
    Action.searchBarInput("iPhone");
    Action.tapKeyboardSearch();
    $.delay(5);

    //verify type "iphone" show the correct
    target.logElementTree();
    $.delay(sleep);
    var productName = app.mainWindow().collectionViews()[0].cells()[1].staticTexts()[2];

    UIALogger.logMessage(productName.name());
    Assert.elementsShouldContainText(productName, "hone");
     
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
    Action.tapButtonOnTabBar(0);
});

test("[1959905] Verify '搜索全部商店'function" , function () {
    Action.cleanSearches();
    $.delay(sleep);

    Action.goCategoryWhenSearchSettingOpen();
    $.delay(sleep);

    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese("東京著衣");
    Action.tapKeyboardSearch();
    $.delay(sleep);

    Action.tapStoreTab();
    $.delay(5);

    Action.tapSearchResultOfStore();
    Action.tapSearchIconOnNavBarWhenSRP();
    Action.searchBarInputChinese("造型");
    Action.tapKeyboardSearch();
    $.delay(sleep);

    Action.tapAllCoatgoryWhenSRP();

    Assert.checkButtonsNotExistOnStoreSearchPage(0);
     
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
});

test("[1977507] [bug case]verify search result when enter special characters in search box." , function () {
    Action.cleanSearches();
    $.delay(sleep);

    Action.goCategoryWhenSearchSettingOpen();
    $.delay(sleep);

    Action.tapSearchIconOnNavBar();
    Action.searchBarInput(",");
    Action.tapKeyboardSearch();
    $.delay(sleep);
  
    //verify exist to goods
    Assert.checkFavoriteStoreCellsShowCorrectly();
     
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
});

test("[1977509] [bug case]verify It cann't show blank when the price is 0 in 「篩選」layer.", function () {
    Action.cleanSearches();
    $.delay(sleep);
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();

    Action.englishInputMethod();
    
    Action.searchBarInputChinese("上衣");
    Action.tapKeyboardSearch();
    $.delay(sleep);

    //Tap Advanced button.
    Action.tapButtonsInAdvancedBarWhenSRP();

    //go to 篩選 tab.
    Action.tapButtonsInAdvancedBar(2);

    //drag price bar to 253 price.    
    app.mainWindow().dragInsideWithOptions({startOffset:{x:0.92, y:0.28}, endOffset:{x:0.00, y:0.31}, duration:1.4});
    //app.mainWindow().dragInsideWithOptions({startOffset: {x: 0.92, y: 0.29}, endOffset:{x: 0.234, y: 0.29}});

    Action.tapDetermineInAdvancedBarWhenSRP();
    $.delay(sleep);

    //Tap Advanced button.
    Action.tapButtonsInAdvancedBarWhenSRP();

    //go to 篩選 tab.
    Action.tapButtonsInAdvancedBar(2);
    
    //Tap clear button
    Action.tapClearButtonOnFilterScreenInAdvancedBarWhenSRP();

    //Verify price bar restore to default value.
    Assert.checkPriceBarShowCorrect("0 元");

    Action.tapDetermineInAdvancedBarWhenSRP();

    //Tap submit button and restore application to default location.
    //Action.tapSubmitButtonOnAdvanceScreen();
    Action.tapButtonOnTabBar(2);
    Action.goDiscoveryStream();
});