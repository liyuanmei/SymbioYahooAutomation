Assert.wheelsWhenCheckOut = function  () {
    $.delay(sleep);
    var wheelsWhenCheckOut = app.windows()[1].pickers()[0].wheels()[0].value(); 
    method.verifyEquals("貨運 / 宅配（免運費）".wheelsWhenCheckOut);
}

