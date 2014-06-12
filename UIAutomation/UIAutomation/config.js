var Action = {};
var Assert = {};

//Action
#import "smoke/Action/FavoriteStores.js"
#import "smoke/Action/FavoriteItems.js"
#import "smoke/Action/Category.js"
#import "smoke/Action/Search.js"
#import "smoke/Action/Discovery.js"
#import "smoke/Action/MyAccount.js"
#import "smoke/Action/SideBar.js"
#import "smoke/Action/Welcome.js"
#import "smoke/Action/Shopping.js"
#import "smoke/Action/Checkout.js"
#import "smoke/Action/ItemPage.js"
#import "smoke/Action/ShoppingCartlist.js"
#import "smoke/Action/StoreListings.js"
#import "Function/Action/Category.js"
#import "Function/Action/Search.js"
#import "Function/Action/Welcome.js"
#import "Function/Action/SRP.js"
#import "Function/Action/ShoppingCart.js"
#import "Function/Action/RecentHistory.js"
#import "Function/Action/StorePage.js"
#import "Function/Action/MyAccount.js"
#import "Function/Action/ItemPage.js"
#import "Function/Action/Options.js"
#import "Function/Action/Functional.js"

//Assert
#import "smoke/Assert/FavoriteStores.js"
#import "smoke/Assert/FavoriteItems.js"
#import "smoke/Assert/Category.js"
#import "smoke/Assert/StorePage.js"
#import "smoke/Assert/Discovery.js"
#import "smoke/Assert/MyAccount.js"
#import "smoke/Assert/SideBar.js"
#import "smoke/Assert/TabBar.js"
#import "smoke/Assert/Welcome.js"
#import "smoke/Assert/Shopping.js"
#import "smoke/Assert/Checkout.js"
#import "smoke/Assert/ItemPage.js"
#import "smoke/Assert/ShoppingCartlist.js"
#import "smoke/Assert/StoreListings.js"
#import "smoke/Assert/Search.js"
#import "Function/Assert/Category.js"
#import "Function/Assert/Search.js"
#import "Function/Assert/Welcome.js"
#import "Function/Assert/SRP.js"
#import "Function/Assert/ShoppingCart.js"
#import "Function/Assert/RecentHistory.js"
#import "Function/Assert/MyAccount.js"
#import "Function/Assert/ItemPage.js"
#import "Function/Assert/Functional.js"

var target = UIATarget.localTarget();
var app = target.frontMostApp();
var tabBar = app.tabBar();
var mainWindow = app.mainWindow();
var navBar = app.navigationBar();
var statusBar = app.statusBar();

var obj = {};
var sleep = 2;
var method = {};

var tabBarDiscoveryStream = tabBar.buttons()[0];
var tabBarFavoriteStores = tabBar.buttons()[1];
var tabBarCategoriesNavigation = tabBar.buttons()[2];
var tabBarShoppingCart = tabBar.buttons()[3];
var tabBarMyAccount = tabBar.buttons()[4];

obj.scrollDowns = function (total) {
    for (var j = 0; j < total; j++) {
        $.delay(sleep);
        app.mainWindow().collectionViews()[0].scrollDown();
    }
};

method.checkInstanceExists = function (instance) {
    var errorTimes = 0;
    if (instance) {
        $.message(instance + " exists");
        return;
    }
    while (!instance && errorTimes < 50) {
        errorTimes++;
        $.delay(1);
        $.message("instance not exist try: " + errorTimes + " times");
    }
};

method.verifyTrue = function (expression, message, endCase) {

    if (!expression) {

        if (!message){

            var assertMessage = "Assertion failed";

            UIALogger.logError(assertMessage);
        }
        else {

            UIALogger.logError(message);
        }
    }

    if (endCase) {

        throw new AssertionException(message);
    }
};

method.verifyEquals = function (expected, received, message) {

    var defMessage = "Expected <" + expected + "> but received <" + received + ">";

    method.verifyTrue(expected == received, message ? message + ": " + defMessage : defMessage);
};