//6.12
test("[1977448] [notification]turn on/off marketing notifications ", function () {
    Action.cleanSearches();
	Action.notificationSettings(0);
    Action.notificationSettings(1);
    $.delay(5);

    Assert.checkReturnPageDisplay("最新動態");
});

test("[1977449] [notification]list of notifications " , function () {
    Action.cleanSearches();
    Action.notificationSettings(0);

    $.delay(5);

    Action.tapButtonOnTabBar(4);
    Action.tapButtonOnMyUser(0);
    $.delay(5);

    Assert.checkReturnPageDisplay("通知");
    $.delay(sleep);

    Action.tapButtonOnTabBar(0);
    Action.notificationSettings(1);
});

test("[1977478] [barcode]Discovery Stream root view " , function () {
    Action.cleanSearches();
    Action.tapButtonOnTabBar(0);
    $.delay(5);

    Action.tapSearchIconOnNavBar();
    Action.tapBarcodeSearch();
    $.delay(5);

    target.logElementTree();
    $.delay(sleep);

    Assert.checkReturnPageDisplay("請掃條碼/QR Code");
    $.delay(sleep);

    Action.tapCancelButtonInAdvancedBar();
    Action.tapButtonOnTabBar(0);
    Action.tapButtonOnTabBar(0);
});

test("[1977479] [barcode]Favorite Stores root view " , function () {
    Action.cleanSearches();
    Action.tapButtonOnTabBar(1);
    $.delay(5);

    Action.tapSearchIconOnNavBar();
    Action.tapBarcodeSearch();
    $.delay(5);

    Assert.checkReturnPageDisplay("請掃條碼/QR Code");
    $.delay(sleep);

    Action.tapCancelButtonInAdvancedBar();
    Action.tapButtonOnTabBar(1);
    Action.tapButtonOnTabBar(1);
    Action.tapButtonOnTabBar(0);
});

test("[1977480] [barcode]Categories root view " , function () {
    Action.cleanSearches();
    Action.tapButtonOnTabBar(2);
    $.delay(5);

    Action.tapSearchIconOnNavBar();
    Action.tapBarcodeSearch();
    $.delay(5);

    Assert.checkReturnPageDisplay("請掃條碼/QR Code");
    $.delay(sleep);

    Action.tapCancelButtonInAdvancedBar();
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(2);
    Action.tapButtonOnTabBar(0); 
});