Action.tapNextButtonOnWelcomeScreen = function () {
    $.delay(sleep);
    var nextButton = app.mainWindow().buttons()[1];

    method.checkInstanceExists(app.mainWindow().buttons()[1].tap);
    nextButton.tap();
};

Action.tapCreatePersonalExperience = function () {
    $.delay(sleep);
    var createPersonalExperienceButton = app.mainWindow().buttons()[0];

    method.checkInstanceExists(app.mainWindow().buttons()[0].tap);
    createPersonalExperienceButton.tap();
};
