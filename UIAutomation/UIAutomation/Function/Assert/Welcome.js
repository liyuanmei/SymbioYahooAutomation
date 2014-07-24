Assert.verifyWelcomeScreen = function () {
    $.delay(4);

    //Verify "歡迎" show correct.
    var sWelcomeName = app.mainWindow().staticTexts()[0].name();
    method.verifyEquals(varTestlogPageWelcome, sWelcomeName);

    //Verify Log in button show correct.
    var logInButtonName = app.mainWindow().buttons()[0].name();
    var logInButtonStatus = app.mainWindow().buttons()[0].isEnabled();
    method.verifyEquals(1, logInButtonStatus);
    method.verifyEquals(varTestlogPage, logInButtonName);

    //Verify "略過，前往下一步" button show correct.
    var nextButtonName = app.mainWindow().buttons()[1].name();
    var nextButtonStatus = app.mainWindow().buttons()[1].isEnabled();
    method.verifyEquals(1, nextButtonStatus);
    method.verifyEquals(varTestlogPageIgnore, nextButtonName);
};

Assert.personalCategoryScreen = function () {
    $.delay(sleep);
    var version = target.systemVersion();
    version = version.substring(0, version.lastIndexOf("."));
    if(version == "6.1") {
        this.CategoriesName = [
        varTestApparel,
        varTestCategoryBeautyMakeup,
        varTestCategoryShoeAndBag,
        varTestCategoryMom,
        varTestCategoryComputer,
        varTestCategoryHomeAppliance,
        varTestCategoryCameraCompatible,
        varTestCategoryFoodCompatible,
        varTestCategoryMedicalCompatible
      ];
      $.delay(sleep);
      for (var i = 0; i < 12; i++) {
          method.verifyEquals(this.CategoriesName[i], app.mainWindow().collectionViews()[0].cells()[i].staticTexts()[0].name());
      }
      method.verifyEquals(varTestlogPagePersonalizedSettings, app.mainWindow().buttons()[0].name());
    }
    else{
        this.CategoriesName = [
        varTestApparel,
        varTestCategoryBeautyMakeup,
        varTestCategoryShoeAndBag,
        varTestCategoryMom,
        varTestCategoryComputer,
        varTestCategoryHomeAppliance,
        varTestCategoryCamera,
        varTestCategoryFood,
        varTestCategoryMedical,
        varTestCategoryHouseholdLife,
        varTestCategoryAction,
        varTestCategoryBooks
        ];
      $.delay(sleep);
      for (var i = 0; i < 12; i++) {
          method.verifyEquals(this.CategoriesName[i], app.mainWindow().collectionViews()[0].cells()[i].name());
      }
      method.verifyEquals(varTestlogPagePersonalizedSettings, app.mainWindow().buttons()[0].name());
    }
};

Assert.discoveryScreenShowCorrect = function () {
    $.delay(sleep);

    var navName = app.navigationBar().name();
    method.verifyEquals(varTestDiscoveryStreamName, navName);

    var discoveryButton = app.tabBar().buttons()[0];
    method.verifyEquals(varTestDiscoveryStreamName, discoveryButton.name());
    method.verifyEquals(1, discoveryButton.isEnabled());
};

Assert.checkStartUsing = function () {
    $.delay(4);

    //Verify "歡迎" show correct.
    var sWelcomeName = app.mainWindow().staticTexts()[0].name();
    method.verifyEquals(varTestlogPageWelcome, sWelcomeName);

    var startUsing = app.mainWindow().buttons()[0].name();
    method.verifyEquals(varTestlogPageUsing, startUsing);
};