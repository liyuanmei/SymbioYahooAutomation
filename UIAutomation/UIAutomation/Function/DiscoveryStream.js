//6.12
test("[1954564] Verify pull down to refresh.", function () {
    Action.cleanSearches();

    //do refresh
    Action.doRefreshFavoriteStorePage();
    $.delay(10);

    //check the page is correct
    Assert.checkReturnPageDisplay("最新動態");

    //check the cells is not empty
    Assert.checkFavoriteStoreCellsShowCorrectly();
});
