Action.goElectronicCoupons = function () {
    $.delay(sleep);
    var goElectronicCoupons = app.mainWindow().tableViews()[0].cells()[5];
    method.checkInstanceExists(app.mainWindow().tableViews()[0].cells()[5].tap);
    goElectronicCoupons.tap();
};

Action.tapChooseOnElectronicCoupons = function () {
	$.delay(sleep);
	var tapChooseOnElectronicCoupons = app.mainWindow().scrollViews()[0].webViews()[0].elements().value();
	method.checkInstanceExists(app.mainWindow().scrollViews()[0].webViews()[0].elements().value().tap);
	tapChooseOnElectronicCoupons.tap();
};
