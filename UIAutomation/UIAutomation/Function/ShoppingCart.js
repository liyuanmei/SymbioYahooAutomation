test("[1959883] verify all delete shopping cart of goods" , function () {
    $.delay(5);
    target.logDeviceInfo();
    var version = target.systemVersion();
    version = version.substring(0,1);
    if(version == "6") {
        $.delay(10);
    }
    
    Action.determineTheLoginWhenShopping();
    Action.cleanSearches();
    $.delay(sleep);

    Action.goApparelCategoryWhenShoppingCart();
    $.delay(sleep);

    Action.goCommodityTab();
    Action.pageShow();

    //Tap item on list to navigate to item page
    Action.tapItemOnProductListScreen();
    $.delay(15);

    obj.scrollDowns(1);
    
    $.delay(10);
     
    Action.butButtonShoppingCart();

    Action.chooseTheSizeOnShoppingCart();
    Action.tapConfirmOnShoppingCart();
    
    //go to shopping cart page
    Action.tapButtonOnTabBar(3);
    $.delay(5);

    try{
        Action.tapShoppingCartlist(0);
        $.delay(sleep);
    }
    catch(err){
        Action.doRefreshFavoriteStorePage();
        $.delay(10);

        Action.tapShoppingCartlist(0);
        $.delay(sleep);
    }

    Action.tapButtonOnTabBar(3);
    $.delay(5);

    Action.tapShoppingCartlist(0);
    $.delay(20);

    Assert.checkbutButtonShoppingCart();
    
    Action.goBack();
    $.delay(5);

    try{
        Action.tapDeleteOnShoppingCart();
        $.delay(sleep);
    }
    catch(err){
        Action.tapButtonOnTabBar(3);
        $.delay(5);

        Action.tapDeleteOnShoppingCart();
        $.delay(sleep);
    }
    Action.tapButtonOnTabBar(3);

    Assert.ShoppingCartDisplayCorrectly();
    Action.tapButtonOnTabBar(3);
    Action.tapButtonOnTabBar(3);
    Action.tapButtonOnTabBar(0);
    Action.tapButtonOnTabBar(0);
});

test("[1959876] Verify the number of bottom bubble on shopping cart" ,function () {
    Action.cleanSearches();
    $.delay(5);

    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);

    Action.goApparelCategoryWhenShoppingCart();
    $.delay(sleep);

    Action.goCommodityTab();
    Action.pageShow();

    //Tap item on list to navigate to item page.
    Action.tapItemOnProductListScreen();
    $.delay(15);

    obj.scrollDowns(1);
    $.delay(10);
     
    Action.addToShoppingCart();
    Action.chooseTheSizeOnShoppingCart();
    $.delay(sleep);

    Action.tapConfirmOnShoppingCart();

    Action.tapButtonOnTabBar(3);
    $.delay(10);

    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(2);
    Action.tapSearchIconOnNavBar();
    
    Action.searchBarInputChinese(varTestsSearchBoxInputGoodsName9);
    Action.tapKeyboardSearch();
    Action.pageShow();

    Action.tapItemOnProductListScreen();
    $.delay(15);

    obj.scrollDowns(1);
    $.delay(15);

    Action.addToShoppingCartWhenItemPage();
    Action.chooseTheSizeOnShoppingCart();
    Action.tapConfirmOnShoppingCart();

    //go to shopping cart page
    Action.tapButtonOnTabBar(3);
    $.delay(5);

    try{
        Action.tapDeleteOnShoppingCart();
        $.delay(sleep);
    }
    catch(err){
        Action.tapButtonOnTabBar(3);
        $.delay(5);

        Action.tapDeleteOnShoppingCart();
        $.delay(sleep);
    }

    Action.tapButtonOnTabBar(3);
    $.delay(5);

    //the remaining a product
    Assert.checkShoppingCartListExistGoodsNum(2);

    Action.tapButtonOnTabBar(3);
    Action.tapDeleteOnShoppingCart();

    Assert.ShoppingCartDisplayCorrectly();
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
});

test("[1977500] verify all delete shopping cart of goods" ,function () {
    //login the app
    Action.cleanSearches();

    //add goods to shopping cart
    $.delay(sleep);
    Action.tapButtonOnTabBar(2);
    $.delay(sleep);

    Action.tapItemOnCategoryScreenWhenItemPage(0);
    $.delay(sleep);

    Action.goCommodityTab();
    $.delay(10);

    Action.tapItemOnProductListScreen();
    $.delay(20);

    obj.scrollDowns(1);
    $.delay(10);

    Action.addToShoppingCart();
    Action.chooseTheSizeOnShoppingCart();
    Action.tapConfirmOnShoppingCart();

    //switch between store and shopping cart
    //go to shopping cart page
    Action.tapButtonOnTabBar(3);
    $.delay(5);

    try{
        Action.tapShoppingCartlist(0);
        $.delay(sleep);
    }
    catch(err){
        Action.doRefreshFavoriteStorePage();
        $.delay(10);

        Action.tapShoppingCartlist(0);
        $.delay(sleep);
    }

    Action.tapButtonOnTabBar(3);
    $.delay(5);

    Action.tapShoppingCartlist(0);
    $.delay(20);

    Action.tapStoreOnShoppingCartPage();
    $.delay(5);

    Action.goBack();
    $.delay(5);

    Assert.checkbutButtonShoppingCart();

    //delete shopping cart
    Action.tapButtonOnTabBar(3);
    $.delay(5);

    try{
        Action.tapDeleteOnShoppingCart();
        $.delay(sleep);
    }
    catch(err){
        Action.tapButtonOnTabBar(3);
        $.delay(5);

        Action.tapDeleteOnShoppingCart();
        $.delay(sleep);
    }

    //restore settings
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(2);

    //Log out and remove user login history
    Action.tapButtonOnTabBar(0);
});

//6.12
test("[1959885] verify the shopping cart detail" ,function () {
    //login the app
    Action.cleanSearches();

    //add item to shopping cart
    Action.tapButtonOnTabBar(2);
    $.delay(sleep);

    Action.tapItemOnCategoryScreenWhenItemPage(0);
    Action.goCommodityTab();
    Action.pageShow();

    Action.tapItemOnProductListScreen();
    $.delay(15);
    
    obj.scrollDowns(1);
    $.delay(10);

    Action.addToShoppingCart();
    Action.chooseTheSizeOnShoppingCart();
    Action.tapConfirmOnShoppingCart();

    //go to shopping cart page
    Action.tapButtonOnTabBar(3);
    $.delay(5);

    try{
        Action.tapShoppingCartlist(0);
        $.delay(sleep);
    }
    catch(err){
        Action.doRefreshFavoriteStorePage();
        $.delay(10);

        Action.tapShoppingCartlist(0);
        $.delay(sleep);
    }

    Action.tapButtonOnTabBar(3);
    $.delay(5);

    Action.tapShoppingCartlist(0);
    $.delay(20);

    //check item number is correct
    Assert.checkItemNumberOnShoppingCartIsEnabled();

    //restore
    Action.tapButtonOnTabBar(3);
    $.delay(5);

    try{
        Action.tapDeleteOnShoppingCart();
        $.delay(sleep);
    }
    catch(err){
        Action.tapButtonOnTabBar(3);
        $.delay(5);

        Action.tapDeleteOnShoppingCart();
        $.delay(sleep);
    }

    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(2);

    //Log out and remove user login history
    Action.tapButtonOnTabBar(0);
});

test("[1959903] Verify user can view next buy items then view shopping cart items" ,function () {
    //login the app
    Action.cleanSearches();

    //add item to shopping cart
    Action.tapButtonOnTabBar(2);
    Action.tapItemOnCategoryScreenWhenItemPage(0);
    Action.goCommodityTab();
    Action.pageShow();

    Action.tapItemOnProductListScreen();
    $.delay(15);
    
    obj.scrollDowns(1);
    $.delay(10);

    Action.addToShoppingCart();
    Action.chooseTheSizeOnShoppingCart();
    Action.tapConfirmOnShoppingCart();

    //go to shopping cart page
    Action.tapButtonOnTabBar(3);
    $.delay(5);

    try{
        Action.tapShoppingCartlist(0);
        $.delay(sleep);
    }
    catch(err){
        Action.doRefreshFavoriteStorePage();
        $.delay(10);

        Action.tapShoppingCartlist(0);
        $.delay(sleep);
    }

    Action.tapButtonOnTabBar(3);
    $.delay(sleep);

    Action.tapShoppingCartlist(0);
    $.delay(25);

    //tap buy next time tab and back
    Action.tapBuyNextTime();
    $.delay(5);

    Action.goBack();

    Action.tapShoppingCartlist(0);
    $.delay(20);

    //check shopping cart list can bi tapped and no issue
    Assert.checkSearchPage(varTestsTheOrderPageElements1);

    //restore
    Action.tapButtonOnTabBar(3);
    $.delay(5);

    try{
        Action.tapDeleteOnShoppingCart();
        $.delay(sleep);
    }
    catch(err){
        Action.tapButtonOnTabBar(3);
        $.delay(5);

        Action.tapDeleteOnShoppingCart();
        $.delay(sleep);
    }

    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(2);

    //Log out and remove user login history
    Action.tapButtonOnTabBar(0);
});

//6.24
test("[1959911] Verify Shopping cart information, purchase information display correctly next time" ,function () {
    target.logDeviceInfo();
    //login the app
    Action.cleanSearches();

    //add item to shopping cart
    Action.tapButtonOnTabBar(2);
    Action.tapItemOnCategoryScreenWhenItemPage(0);
    Action.goCommodityTab();
    $.delay(sleep);

    Action.tapItemOnProductListScreen();
    $.delay(10);
    
    obj.scrollDowns(1);
    $.delay(sleep);

    Action.addToShoppingCart();
    Action.chooseTheSizeOnShoppingCart();
    Action.tapConfirmOnShoppingCart();

    //go to shopping cart page
    Action.tapButtonOnTabBar(3);
    $.delay(5);

    try{
        Action.tapShoppingCartlist(0);
        $.delay(sleep);
    }
    catch(err){
        Action.doRefreshFavoriteStorePage();
        $.delay(10);

        Action.tapShoppingCartlist(0);
        $.delay(sleep);
    }
    Action.tapButtonOnTabBar(3);
    $.delay(sleep);

    Action.tapShoppingCartlist(0);
    $.delay(20);

    var version = target.systemVersion();
    version = version.substring(0,1);
    if(version == "6") {
        Assert.checkShoppingCartInformationAndPurchaseInformationDisplay(6,varTestsElementsShouldContainTextOnShoppingCartPage1);
    }
    else{
        Assert.checkShoppingCartInformationAndPurchaseInformationDisplay(6,varTestsElementsShouldContainTextOnShoppingCartPage1);
        Assert.checkShoppingCartInformationAndPurchaseInformationDisplay(8,varTestsElementsShouldContainTextOnShoppingCartPage2);
    }

    //tap buy next time tab and back
    Action.tapBuyNextTime();
    $.delay(10);

    Assert.checkShoppingCartInformationAndPurchaseInformationDisplay(6,varTestsElementsShouldContainTextOnShoppingCartPage3);

    //restore
    Action.tapButtonOnTabBar(3);
    $.delay(5);

    try{
        Action.tapDeleteOnShoppingCart();
        $.delay(sleep);
    }
    catch(err){
        Action.tapButtonOnTabBar(3);
        $.delay(5);

        Action.tapDeleteOnShoppingCart();
        $.delay(sleep);
    }

    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(2);

    //Log out and remove user login history
    Action.tapButtonOnTabBar(0);
    Action.tapButtonOnTabBar(0);
});

test("[1959908] Verify numbers under shopping$next buy" ,function () {
    target.logDeviceInfo();
    Action.cleanSearches();

    //add item to shopping cart
    Action.tapButtonOnTabBar(2);
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();

    Action.englishInputMethod();
    
    Action.searchBarInputChinese(varTestsSearchBoxInputGoodsName9);
    Action.tapKeyboardSearch();
    $.delay(10);

    Action.tapSearchResultOfStore();
    $.delay(10);
    
    obj.scrollDowns(1);
    $.delay(sleep);

    Action.addToShoppingCart();
    Action.chooseTheSizeOnShoppingCart();
    Action.tapConfirmOnShoppingCart();

    //go to shopping cart page
    Action.tapButtonOnTabBar(3);
    $.delay(5);

    try{
        Action.tapShoppingCartlist(0);
        $.delay(sleep);
    }
    catch(err){
        Action.doRefreshFavoriteStorePage();
        $.delay(10);

        Action.tapShoppingCartlist(0);
        $.delay(sleep);
    }
    Action.tapButtonOnTabBar(3);
    $.delay(sleep);

    Action.tapShoppingCartlist(0);
    $.delay(20);

    var version = target.systemVersion();
    version = version.substring(0,1);
    if(version == "6") {
        Assert.checkShoppingCartInformationAndPurchaseInformationDisplay(6,varTestsElementsShouldContainTextOnShoppingCartPage1);
    }
    else{
        Assert.checkShoppingCartInformationAndPurchaseInformationDisplay(6,varTestsElementsShouldContainTextOnShoppingCartPage1);
        Assert.checkShoppingCartInformationAndPurchaseInformationDisplay(8,varTestsElementsShouldContainTextOnShoppingCartPage2);
    }

    try{
        Action.tapAddBuyNextTimeOnShopping();
        $.delay(5);

        //tap buy next time tab and back
        Action.tapBuyNextTime();
        $.delay(20);

        Assert.checkShoppingCartInformationAndPurchaseInformationDisplay(6,varTestsElementsShouldContainTextOnShoppingCartPage1);
        Assert.checkShoppingCartInformationAndPurchaseInformationDisplay(8,varTestsElementsShouldContainTextOnShoppingCartPage4);
    }
    catch(err){
        Assert.checkSearchPage(varTestsTheOrderPageElements1);
    }

    //restore
    Action.tapButtonOnTabBar(3);
    $.delay(5);

    try{
        Action.tapDeleteOnShoppingCart();
        $.delay(sleep);
    }
    catch(err){
        Action.tapButtonOnTabBar(3);
        $.delay(5);

        Action.tapDeleteOnShoppingCart();
        $.delay(sleep);
    }

    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(2);

    //Log out and remove user login history
    Action.tapButtonOnTabBar(0);
    Action.tapButtonOnTabBar(0);
});

test("[1977534] verify delete function" ,function () {
    target.logDeviceInfo();
    //login the app
    Action.cleanSearches();

    //add item to shopping cart
    Action.tapButtonOnTabBar(2);
    Action.goCategoryWhenSearchSettingOpen();
    Action.tapSearchIconOnNavBar();

    Action.englishInputMethod();
    
    Action.searchBarInputChinese(varTestsSearchBoxInputGoodsName9);
    Action.tapKeyboardSearch();
    $.delay(10);

    Action.tapSearchResultOfStore();
    $.delay(15);
    
    obj.scrollDowns(1);
    $.delay(5);

    Action.addToShoppingCart();
    Action.chooseTheSizeOnShoppingCart();
    Action.tapConfirmOnShoppingCart();

    //go to shopping cart page
    Action.tapButtonOnTabBar(3);
    $.delay(5);

    try{
        Action.tapShoppingCartlist(0);
        $.delay(sleep);
    }
    catch(err){
        Action.doRefreshFavoriteStorePage();
        $.delay(10);

        Action.tapShoppingCartlist(0);
        $.delay(sleep);
    }
    Action.tapButtonOnTabBar(3);
    $.delay(sleep);

    Action.tapShoppingCartlist(0);
    $.delay(20);
    try{
        Action.tapAddBuyNextTimeOnShopping();
        $.delay(sleep);

        //tap buy next time tab and back
        Action.tapBuyNextTime();
        $.delay(20);

        Assert.checkShoppingCartInformationAndPurchaseInformationDisplay(6,varTestsElementsShouldContainTextOnShoppingCartPage1);
        Assert.checkShoppingCartInformationAndPurchaseInformationDisplay(8,varTestsElementsShouldContainTextOnShoppingCartPage4);
    }
    catch(err){
        $.delay(10);
        Action.tapButtonOnTabBar(3);
    }

    //restore
    Action.tapButtonOnTabBar(3);
    $.delay(5);

    try{
        Action.tapDeleteOnShoppingCart();
        $.delay(sleep);
    }
    catch(err){
        Action.tapButtonOnTabBar(3);
        $.delay(5);

        Action.tapDeleteOnShoppingCart();
        $.delay(sleep);
    }

    Assert.ShoppingCartDisplayCorrectly();

    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
    Action.tapButtonOnTabBar(0);
});

test("[1977496] Verify [bug case]「我要結賬」" ,function () {
    target.logDeviceInfo();
    //login the app
    Action.cleanSearches();

    //add item to shopping cart
    Action.tapButtonOnTabBar(2);
    Action.tapItemOnCategoryScreenWhenItemPage(0);
    Action.goCommodityTab();
    $.delay(sleep);

    Action.tapItemOnProductListScreen();
    $.delay(15);
    
    obj.scrollDowns(1);
    $.delay(5);

    Action.addToShoppingCart();
    Action.chooseTheSizeOnShoppingCart();
    Action.tapConfirmOnShoppingCart();

    //go to shopping cart page
    Action.tapButtonOnTabBar(3);
    $.delay(5);

    try{
        Action.tapShoppingCartlist(0);
        $.delay(sleep);
    }
    catch(err){
        Action.doRefreshFavoriteStorePage();
        $.delay(10);

        Action.tapShoppingCartlist(0);
        $.delay(sleep);
    }
    $.delay(20);
    
    Action.tapSettleAccounts();
    $.delay(20);
    target.logElementTree();

    Assert.tapSettleAccountsOnShopping(6,varTestsSettleAccountsOnShopping);

    //restore
    Action.tapButtonOnTabBar(3);
    $.delay(5);

    try{
        Action.tapDeleteOnShoppingCart();
        $.delay(sleep);
    }
    catch(err){
        Action.tapButtonOnTabBar(3);
        $.delay(5);

        Action.tapDeleteOnShoppingCart();
        $.delay(sleep);
    }

    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0);
});