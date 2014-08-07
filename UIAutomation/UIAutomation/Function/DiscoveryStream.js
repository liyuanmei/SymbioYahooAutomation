//6.12
test("[1954564] Verify pull down to refresh.", function () {
    target.logDeviceInfo();
    var version = target.systemVersion();
    version = version.substring(0,1);
    if(version == "6") {
        $.delay(10);
    }
    
    Action.cleanSearches();
    $.delay(5);

    //do refresh
    Action.doRefreshFavoriteStorePage();
    $.delay(20);

    //check the page is correct
    Assert.checkReturnPageDisplay(varTestDiscoveryStreamName);

    //check the cells is not empty
    Assert.checkFavoriteStoreCellsShowCorrectly();
});
