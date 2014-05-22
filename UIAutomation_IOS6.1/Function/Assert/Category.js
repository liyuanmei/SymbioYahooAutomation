Assert.commodityHeader = function (){
    $.delay(sleep);
    assertEquals("服飾", app.navigationBar().name());
    assertEquals(1, app.navigationBar().buttons()[1].isEnabled());
};

Assert.categoryScreen = function () {
    $.delay(sleep);
    assertEquals("全部分類", app.navigationBar().name());
};

Assert.checkTab = function () {
    $.delay(sleep);
    assertEquals("商品",app.mainWindow().collectionViews()[0].cells()[0].segmentedControls()[0].buttons()[1].name());
    assertEquals("分類",app.mainWindow().collectionViews()[0].cells()[0].segmentedControls()[0].buttons()[0].name());
};

Assert.verifyApparelCategory = function () {
    this.CategoryItem = ["分類", "漢神百貨品牌服飾", "漢神百貨內睡衣", "流行女裝", "中大尺碼女裝(M-7L)", "女性內睡衣", "品牌/潮流男裝"];

    $.delay(sleep);

    assertEquals(7, app.mainWindow().collectionViews()[0].cells().length);
	
    assertEquals("漢神百貨品牌服飾", app.mainWindow().collectionViews()[0].cells()[1].staticTexts()[0].name());
    assertEquals("漢神百貨內睡衣", app.mainWindow().collectionViews()[0].cells()[2].staticTexts()[0].name());
    assertEquals("流行女裝", app.mainWindow().collectionViews()[0].cells()[3].staticTexts()[0].name());
    assertEquals("中大尺碼女裝(M-7L)", app.mainWindow().collectionViews()[0].cells()[4].staticTexts()[0].name());
    assertEquals("女性內睡衣", app.mainWindow().collectionViews()[0].cells()[5].staticTexts()[0].name());
    assertEquals("品牌/潮流男裝", app.mainWindow().collectionViews()[0].cells()[6].staticTexts()[0].name());
};

Assert.commodityButtonStatus = function () {
    $.delay(sleep);
    var commodityButtonStatus = app.mainWindow().collectionViews()[0].cells()[0].segmentedControls()[0].buttons()[1].isEnabled();
    assertEquals(1, commodityButtonStatus);
};

Assert.categoryButtonStatus  = function () {
    $.delay(sleep);
    var categoryButtonStatus = app.mainWindow().collectionViews()[0].cells()[0].buttons()[0].isEnabled();
    assertEquals(1, categoryButtonStatus);
};

Assert.commodityItemsShowCount = function (iCount) {
    $.delay(sleep);
    var commodityItemListCount = app.mainWindow().collectionViews()[0].value();

    //Due to the first cell is commodity and category tab, so the array list should plus one.
    assertEquals(iCount, commodityItemListCount);
};

Assert.categoriesList = function () {
    this.CategoriesName = [
     "服飾",
     "美妝",
     "鞋包配飾",
     "媽咪寶貝",
     "電腦/週邊",
     "家電/視聽",
     "相機/\n手機/玩具",
     "美食/\n保健/飲料",
     "醫療/\n日用品/寵物",
     "居家/\n寢具/傢俱",
     "運動/\n戶外/休閒",
     "圖書/\n文具/影音"
    ];

    $.delay(sleep);
    for (var i = 0; i < 12; i++) {
        assertEquals(this.CategoriesName[i], app.mainWindow().tableViews()[0].cells()[i].name());
    }
};

Assert.buttonOnAdvancedIsEnabled = function (i) {
    $.delay(sleep);
    var buttonOnAdvanced = app.mainWindow().segmentedControls()[0].buttons()[i];
    assertEquals(1, buttonOnAdvanced.isEnabled());
};

Assert.elementsOrderInSortTab = function () {
    $.delay(sleep);

    var sortTabTableView = app.mainWindow().tableViews()[0];
    var relevanceValue = sortTabTableView.cells()[0].name();
    var latestItems = sortTabTableView.cells()[1].name();
    var priceLowToHigh = sortTabTableView.cells()[2].name();
    var priceHighToLow = sortTabTableView.cells()[3].name();
	
    assertEquals("相關度", relevanceValue);
    assertEquals("最新上架", latestItems);
    assertEquals("價錢低到高", priceLowToHigh);
    assertEquals("價錢高到低", priceHighToLow);
};

Assert.elementsOnFilterScreen = function () {
    $.delay(sleep);

    //Verify "100000 + 元" show correct.
    var priceNumber100000 = app.mainWindow().staticTexts()[0].name();
    assertEquals("100000+ 元", priceNumber100000);

    //Verify "0 元" show correct.
    var priceNumber0 = app.mainWindow().staticTexts()[1].name();
    assertEquals("0 元", priceNumber0);

    //verify circle image and bar image show correct.
    var circleImage1 = app.mainWindow().images()[0].name();
    var circleImage2 = app.mainWindow().images()[1].name();
    var barImage1 = app.mainWindow().images()[2].name();
    var barImage2 = app.mainWindow().images()[3].name();

    assertEquals("circle.png", circleImage1);
    assertEquals("circle.png", circleImage2);
    assertEquals("bar-blu.png", barImage1);
    assertEquals("bar-grey.png", barImage2);

    //Verify all attribute elements show correct.
    this.AttributeElements = ["可刷卡", "0利率", "可分期", "超商付款", "超商取貨", "有現貨", "有影音", "有圖片", "優良商店"];

    for (var i = 0; i < 9; i++){
	   assertEquals(this.AttributeElements[i], app.mainWindow().collectionViews()[0].cells()[i].staticTexts()[0].name());
    }
 };

Assert.buttonExistOnNavigationBar = function (i, sName) {
    $.delay(sleep);

    var navBar = app.navigationBar().buttons()[i];
    assertEquals(sName, navBar.name());
};

Assert.filterAttributeButtonIsTapped = function (i) {
    var attributeButton = app.mainWindow().collectionViews()[0].cells()[i];
    var buttonStatus = attributeButton.value();

    assertEquals(1, buttonStatus);
};

Assert.filterAttributeButtonIsNotTapped = function (i) {
    var attributeButton = app.mainWindow().collectionViews()[0].cells()[i];
    var buttonStatus = attributeButton.value();

    assertEquals(0, buttonStatus);
};

Assert.navigationBarName = function (sName) {
    $.delay(sleep);
    assertEquals(sName, app.navigationBar().name());
};

Assert.itemPageShowCorrect = function (sTitle) {
    $.delay(sleep);

    var collectionViews = app.mainWindow().collectionViews()[0];

    //Assert item title show correct.
    var titleName = collectionViews.cells()[1];
    assertEquals(sTitle, titleName.name());

    //Assert size selection bar show correct.
    var sizeSelectionBar = collectionViews.cells()[4];
    assertEquals("請選擇尺寸與規格", sizeSelectionBar.name());

    //Assert buy and add to cart button show correct.
    var addToCartButton = collectionViews.cells()[5].buttons()[0];
    var butButton = collectionViews.cells()[5].buttons()[1];
 	
    assertEquals("加入購物車", addToCartButton.name());
    assertEquals("立即購買", butButton.name());
};

/**
  * Verify the price of product show correct.
  * This function need pas two parameters.
  * productIndex, is which product you want verify, 
  * priceIndex, is the price index, sometimes different product priceIndex is different.
**/
Assert.productPriceShowCorrect = function (productIndex, priceIndex) {
    $.delay(sleep);
    var collectionViews = app.mainWindow().collectionViews()[0];

    var itemCell = collectionViews.cells()[productIndex];
    var priceLocate = itemCell.staticTexts()[priceIndex];
    var priceValue = priceLocate.value();

    //Use the regex to match the first characters is $
    var stringRe = /^\$/g.test(priceValue);
    assertTrue(stringRe, "The first characters not $");
};

/**
  * Verify the rating of product show correct.
  * This function need pas three parameters.
  * productIndex, is which product you want verify, 
  * ratingIndex, is the rating index, sometimes different product rating index is different.
**/
Assert.storeRatingShowCorrect = function (productIndex, ratingIndex) {
    $.delay(sleep);
    var collectionViews = app.mainWindow().collectionViews()[0];

    var itemCell = collectionViews.cells()[productIndex];
    var ratingIndexValue = itemCell.staticTexts()[ratingIndex];
    var ratingValue = ratingIndexValue.value();
 	
    //Get the value of rating, if this value is less than 10 then return True.
    assertTrue(ratingValue <= 10, "Rating value isnot correct, the value is greater than 10");
};

Assert.favoritesIconShowCorrect = function (productIndex) {
    $.delay(sleep);
    var collectionViews = app.mainWindow().collectionViews()[0];

    var itemCell = collectionViews.cells()[productIndex];
    var favoritesIcon = itemCell.buttons()[0];
    var favoritesIconName = favoritesIcon.name();

    assertEquals("icon star", favoritesIconName);
};

Assert.logInWindowShowCorrect = function (sLogin, sForgotPassword, sCreateAccount) {
    $.delay(sleep);

    var yahooLogoName = app.mainWindow().images()[0].name();
    assertEquals("yaccounts_logo_purple", yahooLogoName);

    var loginButtonName = app.mainWindow().buttons()[0].name();
    assertEquals(sLogin, loginButtonName);

    var forgotPasswordButtonName = app.mainWindow().buttons()[1].name();
    assertEquals(sForgotPassword, forgotPasswordButtonName);

    var createAccountButtonName = app.mainWindow().buttons()[2].name();
    assertEquals(sCreateAccount, createAccountButtonName);
};

Assert.userLoginHistoryScreen = function (sNavBarName, sUserName) {
    $.delay(sleep);

    //Verify navigation bar name show correct.
    var navBarName = app.navigationBar().name();
    assertEquals(sNavBarName, navBarName);

    //Verify user name show correct.
    var tableview = app.mainWindow().staticTexts()[1];
    var username = tableview.name();
    assertEquals(sUserName, username);
};

Assert.productAddedToMyFavoritesScreen = function (productName) {
    $.delay(4);
    var collectionView = app.mainWindow().collectionViews()[0];
    var productCell = collectionView.cells()[0];

    assertEquals(productName, productCell.name());
};

Assert.productRemovedFromMyFavoritesScreen = function (productName) {
    $.delay(4);
    var collectionView = app.mainWindow().collectionViews()[0];
    var productCell = collectionView.cells()[0];

    assertNotEquals(productName, productCell.name());
};

 Assert.buttonOnTabBarShowCorrect = function (buttonName) {
    $.delay(sleep);
    var tabBar = app.mainWindow().tabBar();
    var button = tabBar.buttons()[buttonName];

    assertTrue(button.isVisible(), buttonName + " not exist");
 };

Assert.buttonExist = function (elements) {
    if (elements.isVisible() == true) {
 	  UIALogger.logMessage(elements.name() + " button exists on screen.");
    }
    else {
 	  UIALogger.logError(elements.name() + " Cannot found button.");
    }
    return true;
};

Assert.checkButtonExist = function (elements) {
    $.delay(sleep);
    assertTrue(Assert.buttonExist(elements), elements.name() + " button not exists");
};

Assert.itemCellShowCorrectOnCategoryScreen = function (itemName) {
    $.delay(sleep);
    var itemCell = app.mainWindow().tableViews()[0].cells()[itemName];
    var itemCellName = itemCell.name();

    assertEquals(itemName, itemCellName);
};

Assert.allCategoryItemShowCorrect = function (i, itemName) {
    $.delay(sleep);
    var itemCell = app.mainWindow().tableViews()[1].cells()[i];
    var tabItemName = itemCell.name();

    assertEquals(itemName, tabItemName);
};

Assert.elementsShouldContainText = function (elements, keyword) {
    $.delay(sleep);
    var elementsName = elements.name();
    
    assertTrue(elementsName.indexOf(keyword) >= 0, elementsName + " not contain text: " + keyword);
};

Assert.numberOfItemsShowCorrect = function (elements) {
    $.delay(sleep);
    var numberOfItems = elements.name();
    UIALogger.logMessage(numberOfItems);

    var stringRe = /\d/g.test(numberOfItems);

    assertTrue(stringRe, "elements: " + numberOfItems + " not contains numbers");
};

Assert.advancedButtonsOrder = function () {
    $.delay(sleep);
    var segmentedControl = app.mainWindow().segmentedControls()[0];
    var button1 = segmentedControl.buttons()[0];
    var button2 = segmentedControl.buttons()[1];
    var button3 = segmentedControl.buttons()[2];

    var button1Name = button1.name();
    var button2Name = button2.name();
    var button3Name = button3.name();

    assertEquals(button1Name, "排序");
    assertEquals(button2Name, "瀏覽模式");
    assertEquals(button3Name, "篩選");
};

Assert.successfulSwitchToPhotoGridView = function () {
    $.delay(sleep);

    //Get first cell and second cell X and Y
    var firstCell = app.mainWindow().collectionViews()[0].cells()[1];
    var firstCellX = Action.getElementsOriginXString(firstCell);
    var firstCellY = Action.getElementsOriginYString(firstCell);

    var secondCell = app.mainWindow().collectionViews()[0].cells()[2];
    var secondCellX = Action.getElementsOriginXString(secondCell);
    var secondCellY = Action.getElementsOriginYString(secondCell);

    //if first cellY == secondCellY then these two cell place at same line.
    //So collectionview successful switch to photo grid view.
    assertEquals(firstCellY, secondCellY);
};

Assert.successfulSwitchToListingView = function () {
    $.delay(sleep);

    //Get first cell and second cell X and height
    var firstCell = app.mainWindow().collectionViews()[0].cells()[1];
    var firstCellX = Action.getElementsOriginXString(firstCell);
    var firstCellHeight = Action.getElementsHeightString(firstCell);

    var secondCell = app.mainWindow().collectionViews()[0].cells()[2];
    var secondCellX = Action.getElementsOriginXString(secondCell);
    var secondCellHeight = Action.getElementsHeightString(secondCell);

    //verify success switch to listing veiw.
    assertEquals(firstCellX, secondCellX);
    assertTrue(firstCellHeight == secondCellHeight && firstCellHeight < 130 && secondCellHeight < 130, "Switch to listing mode failed.");
};

Assert.successfulSwitchToLargeImageView = function () {
    $.delay(sleep);

    //get first cell width and height.
    var firstCell = app.mainWindow().collectionViews()[0].cells()[1];
    var firstCellWidth = Action.getElementsWidthString(firstCell);
    var firstCellHeight = Action.getElementsHeightString(firstCell);

    assertTrue(firstCellWidth == 320 && firstCellHeight > 320 && firstCellHeight < 450, "Switch to large image view failed.");
};

Assert.checkPriceBarShowCorrect = function (price) {
    $.delay(sleep);

    //Verify price show correct.
    var priceNumber = app.mainWindow().staticTexts()[1].name();
    assertEquals(price, priceNumber);
};

Assert.checkPriceValueShowLessThan = function (productIndex, priceIndex, value) {
    var collectionViews = app.mainWindow().collectionViews()[0];

    var itemCell = collectionViews.cells()[productIndex];
    var priceLocate = itemCell.staticTexts()[priceIndex];
    var priceValue = priceLocate.value();

    var priceNumber = priceValue.replace(/[^\d\.-]/g, "");

    $.message(priceNumber);
    //verify the price number should less than "value"
    assertTrue(priceNumber >= value, "price not show correct.");
};

Assert.check18BanScreenShowCorrect = function () {
    $.delay(sleep);

    var imageOn18Ban = app.mainWindow().images()[1];
    var backButtonOn18Ban = app.mainWindow().buttons()[1];
    var submitButtonOn18Ban = app.mainWindow().buttons()[2];
    var staticTextsOn18Ban = app.mainWindow().staticTexts()[1];

    method.checkInstanceExists(app.mainWindow().images()[1].name);
    method.checkInstanceExists(app.mainWindow().buttons()[1].name);
    method.checkInstanceExists(app.mainWindow().buttons()[2].name);
    method.checkInstanceExists(app.mainWindow().staticTexts()[1].name);

    assertEquals(imageOn18Ban.name(), "icon-ticrf.png");
    assertEquals(backButtonOn18Ban.name(), "未滿18歲離開");
    assertEquals(submitButtonOn18Ban.name(), "已滿18歲進入");
    assertEquals(staticTextsOn18Ban.name(), "18歲以上會員始可瀏覽及購買，若您未滿18歲請勿進入");
};

Assert.clearButtonShowCorrectAfterTappedButtonOnFilterScreen = function () {
    $.delay(sleep);

    var clearButton = app.mainWindow().buttons()[0];

    assertEquals(1, clearButton.isEnabled());
    assertEquals("清除", clearButton.name());
};