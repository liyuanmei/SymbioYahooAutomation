test("Welcomen page test script, need run this script before all other scripts" , function  () {
	$.delay(12);

	var logPage = app.mainWindow().buttons()[0].name();
	$.delay(sleep);

	if(logPage == "登入") {
	//Verify elements on Welcome screen show correct
	Assert.verifyWelcomeScreen();
	$.delay(sleep);

	//Tap &quot;略過，前往下一步&quot; button.
	Action.tapNextButtonOnWelcomeScreen();
	}
	else{
		Assert.checkStartUsing();
		$.delay(sleep);

		//tap "開始使用";
		Action.tapCreatePersonalExperience();
	}
	//Verify elements on Personal category show correct.
    Assert.personalCategoryScreen();

    //Tap "建立個人化的購物體驗";
    Action.tapCreatePersonalExperience();
    $.delay(15);

    //Verify screen successful navigate to &quot;最新動態&quot; screen.
    Assert.discoveryScreenShowCorrect();
    $.delay(20);
});