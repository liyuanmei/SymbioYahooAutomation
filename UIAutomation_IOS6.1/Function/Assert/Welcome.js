Assert.verifyWelcomeScreen = function () {
    $.delay(4);

    //Verify "歡迎" show correct.
    var sWelcomeName = app.mainWindow().staticTexts()[0].name();
    assertEquals("歡迎", sWelcomeName);

    //Verify Log in button show correct.
    var logInButtonName = app.mainWindow().buttons()[0].name();
    var logInButtonStatus = app.mainWindow().buttons()[0].isEnabled();
    assertEquals(1, logInButtonStatus);
    assertEquals("登入", logInButtonName);

    //Verify "略過，前往下一步" button show correct.
    var nextButtonName = app.mainWindow().buttons()[1].name();
    var nextButtonStatus = app.mainWindow().buttons()[1].isEnabled();
    assertEquals(1, nextButtonStatus);
    assertEquals("略過，前往下一步", nextButtonName);
};

Assert.personalCategoryScreen = function () {
    $.delay(sleep);

    this.CategoriesName = [
      "服飾",
      "美妝",
      "鞋包配飾",
      "媽咪寶貝",
      "電腦/週邊",
      "家電/視聽",
      "相機/\n手機/玩具",
      "美食/\n保健/飲料",
      "醫療/\n日用品/寵物"
    ];
    $.delay(sleep);
    for (var i = 0; i < 12; i++) {
        assertEquals(this.CategoriesName[i], app.mainWindow().collectionViews()[0].cells()[i].staticTexts()[0].name());
    }
    assertEquals("建立個人化的購物體驗", app.mainWindow().buttons()[0].name());
};

Assert.discoveryScreenShowCorrect = function ()	{
    $.delay(sleep);

    var navName = app.navigationBar().name();
    assertEquals("最新動態", navName);

    var discoveryButton = app.tabBar().buttons()[0];
    assertEquals("最新動態", discoveryButton.name());
    assertEquals(1, discoveryButton.isEnabled());
};
