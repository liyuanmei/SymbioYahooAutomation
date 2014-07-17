//6.12 
test("[1977448] [notification]turn on/off marketing notifications ", function () {
    target.logDeviceInfo();
    Action.determineTheLogin();
    Action.cleanSearches();
    Action.tapButtonOnTabBar(0);
    $.delay(sleep);
    
	Action.notificationSettings(0);
    Action.notificationSettings(1);
    $.delay(5);

    Assert.checkReturnPageDisplay("最新動態");
});

test("[1977449] [notification]list of notifications " , function () {
    target.logDeviceInfo();
    Action.cleanSearches();
    Action.notificationSettings(0);

    $.delay(5);

    Action.tapButtonOnTabBar(4);
    Action.tapButtonOnMyUser(0);
    $.delay(5);

    Assert.checkReturnPageDisplay("通知");
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

    Assert.checkReturnPageDisplay("請掃條碼/QR Code");
    $.delay(sleep);

    Action.tapCancelButtonInAdvancedBar();
    $.delay(sleep);

    if (target.systemVersion() == "6.1.3" || target.systemVersion() == "6.1.4") {
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

    Assert.checkReturnPageDisplay("請掃條碼/QR Code");
    $.delay(sleep);

    Action.tapCancelButtonInAdvancedBar();

    if (target.systemVersion() == "6.1.3" || target.systemVersion() == "6.1.4") {
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

    Assert.checkReturnPageDisplay("請掃條碼/QR Code");
    $.delay(sleep);

    Action.tapCancelButtonInAdvancedBar();

    if (target.systemVersion() == "6.1.3" || target.systemVersion() == "6.1.4") {
        $.delay(sleep);
        Action.tapBackOnSearchBar();
    };

    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0); 
});