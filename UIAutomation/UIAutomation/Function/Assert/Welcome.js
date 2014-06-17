Assert.verifyWelcomeScreen = function () {
    $.delay(4);

    //Verify "歡迎" show correct.
    var sWelcomeName = app.mainWindow().staticTexts()[0].name();
    method.verifyEquals("歡迎", sWelcomeName);

    //Verify Log in button show correct.
    var logInButtonName = app.mainWindow().buttons()[0].name();
    var logInButtonStatus = app.mainWindow().buttons()[0].isEnabled();
    method.verifyEquals(1, logInButtonStatus);
    method.verifyEquals("登入", logInButtonName);

    //Verify "略過，前往下一步" button show correct.
    var nextButtonName = app.mainWindow().buttons()[1].name();
    var nextButtonStatus = app.mainWindow().buttons()[1].isEnabled();
    method.verifyEquals(1, nextButtonStatus);
    method.verifyEquals("略過，前往下一步", nextButtonName);
};

Assert.personalCategoryScreen = function () {
    $.delay(sleep);
    if(target.systemVersion() == "6.1.3"){
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
          method.verifyEquals(this.CategoriesName[i], app.mainWindow().collectionViews()[0].cells()[i].staticTexts()[0].name());
      }
      method.verifyEquals("建立個人化的購物體驗", app.mainWindow().buttons()[0].name());
    }
      else{
        this.CategoriesName = [
        "服飾",
        "美妝",
        "鞋包配飾",
        "媽咪寶貝",
        "電腦/週邊",
        "家電/視聽",
        "相機/ 手機/玩具",
        "美食/ 保健/飲料",
        "醫療/ 日用品/寵物",
        "居家/ 寢具/傢俱",
        "運動/ 戶外/休閒",
        "圖書/ 文具/影音"
      ];
      $.delay(sleep);
      for (var i = 0; i < 12; i++) {
          method.verifyEquals(this.CategoriesName[i], app.mainWindow().collectionViews()[0].cells()[i].name());
      }
      method.verifyEquals("建立個人化的購物體驗", app.mainWindow().buttons()[0].name());
    }
};

Assert.discoveryScreenShowCorrect = function () {
    $.delay(sleep);

    var navName = app.navigationBar().name();
    method.verifyEquals("最新動態", navName);

    var discoveryButton = app.tabBar().buttons()[0];
    method.verifyEquals("最新動態", discoveryButton.name());
    method.verifyEquals(1, discoveryButton.isEnabled());
};

Assert.checkStartUsing = function () {
  $.delay(4);

    //Verify "歡迎" show correct.
    var sWelcomeName = app.mainWindow().staticTexts()[0].name();
    method.verifyEquals("歡迎", sWelcomeName);

    var startUsing = app.mainWindow().buttons()[0].name();
    method.verifyEquals("開始使用", startUsing);
};