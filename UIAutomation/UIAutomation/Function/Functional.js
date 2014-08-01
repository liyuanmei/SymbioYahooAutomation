//6.12 
test("[1977448] [notification]turn on/off marketing notifications ", function () {
    target.logDeviceInfo();
    var version = target.systemVersion();
    version = version.substring(0, version.lastIndexOf("."));
    if(version == "6.1") {
        $.delay(10);
    }
    
    Action.determineTheLoginWhenShopping();
    Action.cleanSearches();
    Action.tapButtonOnTabBar(0);
    $.delay(sleep);
    
	Action.notificationSettings(0);
    Action.notificationSettings(1);
    $.delay(5);

    Assert.checkReturnPageDisplay(varTestDiscoveryStreamName);
});

test("[1977449] [notification]list of notifications " , function () {
    target.logDeviceInfo();
    Action.cleanSearches();
    Action.notificationSettings(0);

    $.delay(5);

    Action.tapButtonOnTabBar(4);
    Action.tapButtonOnMyUser(0);
    $.delay(5);

    Assert.checkReturnPageDisplay(varTestsPageNameNotice);
    Action.tapButtonOnTabBar(4);
    Action.tapButtonOnTabBar(0);
    Action.notificationSettings(1);
});

test("[1977478] [barcode]Discovery Stream root view " , function () {
    target.logDeviceInfo();
    Action.cleanSearches();
    Action.tapButtonOnTabBar(0);
    $.delay(5);

    Action.tapSearchIconOnNavBar();
    Action.tapBarcodeSearch();
    $.delay(5);

    Assert.checkReturnPageDisplay(varTestsPageNameQrcode);
    $.delay(sleep);

    Action.tapCancelButtonInAdvancedBar();
    $.delay(sleep);

    var version = target.systemVersion();
    version = version.substring(0, version.lastIndexOf("."));
    if(version == "6.1") {
        Action.tapBackOnSearchBar();
    };

    Action.tapButtonOnTabBar(0);
    Action.tapButtonOnTabBar(0);
});

test("[1977479] [barcode]Favorite Stores root view " , function () {
    target.logDeviceInfo();
    Action.cleanSearches();
    Action.tapButtonOnTabBar(1);
    $.delay(5);

    Action.tapSearchIconOnNavBar();
    Action.tapBarcodeSearch();
    $.delay(10);

    Assert.checkReturnPageDisplay(varTestsPageNameQrcode);
    $.delay(sleep);

    Action.tapCancelButtonInAdvancedBar();

    var version = target.systemVersion();
    version = version.substring(0, version.lastIndexOf("."));
    if(version == "6.1") {
        $.delay(sleep);
        Action.tapBackOnSearchBar();
    };

    Action.tapButtonOnTabBar(1);
    Action.tapButtonOnTabBar(1);
    Action.tapButtonOnTabBar(0);
});

test("[1977480] [barcode]Categories root view " , function () {
    target.logDeviceInfo();
    Action.cleanSearches();
    Action.tapButtonOnTabBar(2);
    $.delay(5);

    Action.tapSearchIconOnNavBar();
    Action.tapBarcodeSearch();
    $.delay(10);

    Assert.checkReturnPageDisplay(varTestsPageNameQrcode);
    $.delay(sleep);

    Action.tapCancelButtonInAdvancedBar();

    var version = target.systemVersion();
    version = version.substring(0, version.lastIndexOf("."));
    if(version == "6.1") {
        $.delay(sleep);
        Action.tapBackOnSearchBar();
    };

    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0); 
});