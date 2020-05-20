gdjs.GameoverCode = {};
gdjs.GameoverCode.GDDistanceTravelledObjects1= [];
gdjs.GameoverCode.GDDistanceTravelledObjects2= [];
gdjs.GameoverCode.GDMessageObjects1= [];
gdjs.GameoverCode.GDMessageObjects2= [];
gdjs.GameoverCode.GDBgObjects1= [];
gdjs.GameoverCode.GDBgObjects2= [];
gdjs.GameoverCode.GDPickupArmObjects1= [];
gdjs.GameoverCode.GDPickupArmObjects2= [];
gdjs.GameoverCode.GDRestartObjects1= [];
gdjs.GameoverCode.GDRestartObjects2= [];
gdjs.GameoverCode.GDPointsObjects1= [];
gdjs.GameoverCode.GDPointsObjects2= [];

gdjs.GameoverCode.conditionTrue_0 = {val:false};
gdjs.GameoverCode.condition0IsTrue_0 = {val:false};
gdjs.GameoverCode.condition1IsTrue_0 = {val:false};
gdjs.GameoverCode.condition2IsTrue_0 = {val:false};
gdjs.GameoverCode.condition3IsTrue_0 = {val:false};
gdjs.GameoverCode.conditionTrue_1 = {val:false};
gdjs.GameoverCode.condition0IsTrue_1 = {val:false};
gdjs.GameoverCode.condition1IsTrue_1 = {val:false};
gdjs.GameoverCode.condition2IsTrue_1 = {val:false};
gdjs.GameoverCode.condition3IsTrue_1 = {val:false};


gdjs.GameoverCode.mapOfGDgdjs_46GameoverCode_46GDBgObjects1Objects = Hashtable.newFrom({"Bg": gdjs.GameoverCode.GDBgObjects1});gdjs.GameoverCode.mapOfGDgdjs_46GameoverCode_46GDPickupArmObjects1Objects = Hashtable.newFrom({"PickupArm": gdjs.GameoverCode.GDPickupArmObjects1});gdjs.GameoverCode.mapOfGDgdjs_46GameoverCode_46GDRestartObjects1Objects = Hashtable.newFrom({"Restart": gdjs.GameoverCode.GDRestartObjects1});gdjs.GameoverCode.mapOfGDgdjs_46GameoverCode_46GDMessageObjects1Objects = Hashtable.newFrom({"Message": gdjs.GameoverCode.GDMessageObjects1});gdjs.GameoverCode.mapOfGDgdjs_46GameoverCode_46GDDistanceTravelledObjects1Objects = Hashtable.newFrom({"DistanceTravelled": gdjs.GameoverCode.GDDistanceTravelledObjects1});gdjs.GameoverCode.mapOfGDgdjs_46GameoverCode_46GDPointsObjects1Objects = Hashtable.newFrom({"Points": gdjs.GameoverCode.GDPointsObjects1});gdjs.GameoverCode.mapOfGDgdjs_46GameoverCode_46GDBgObjects1Objects = Hashtable.newFrom({"Bg": gdjs.GameoverCode.GDBgObjects1});gdjs.GameoverCode.eventsList0x5b7028 = function(runtimeScene) {

{


{
gdjs.GameoverCode.GDBgObjects1.createFrom(runtimeScene.getObjects("Bg"));
{for(var i = 0, len = gdjs.GameoverCode.GDBgObjects1.length ;i < len;++i) {
    gdjs.GameoverCode.GDBgObjects1[i].setHeight(gdjs.evtTools.window.getGameResolutionHeight(runtimeScene));
}
}{for(var i = 0, len = gdjs.GameoverCode.GDBgObjects1.length ;i < len;++i) {
    gdjs.GameoverCode.GDBgObjects1[i].setWidth(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) + 200);
}
}}

}


{


gdjs.GameoverCode.condition0IsTrue_0.val = false;
{
{gdjs.GameoverCode.conditionTrue_1 = gdjs.GameoverCode.condition0IsTrue_0;
gdjs.GameoverCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8334180);
}
}if (gdjs.GameoverCode.condition0IsTrue_0.val) {
gdjs.GameoverCode.GDBgObjects1.length = 0;

gdjs.GameoverCode.GDDistanceTravelledObjects1.length = 0;

gdjs.GameoverCode.GDMessageObjects1.length = 0;

gdjs.GameoverCode.GDPickupArmObjects1.length = 0;

gdjs.GameoverCode.GDPointsObjects1.length = 0;

gdjs.GameoverCode.GDRestartObjects1.length = 0;

{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "restart");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameoverCode.mapOfGDgdjs_46GameoverCode_46GDBgObjects1Objects, 0, 0, "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameoverCode.mapOfGDgdjs_46GameoverCode_46GDPickupArmObjects1Objects, -(310), -(210), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameoverCode.mapOfGDgdjs_46GameoverCode_46GDRestartObjects1Objects, 400, 265, "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameoverCode.mapOfGDgdjs_46GameoverCode_46GDMessageObjects1Objects, gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2, gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2 - 175, "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameoverCode.mapOfGDgdjs_46GameoverCode_46GDDistanceTravelledObjects1Objects, (( gdjs.GameoverCode.GDMessageObjects1.length === 0 ) ? 0 :gdjs.GameoverCode.GDMessageObjects1[0].getX()), (( gdjs.GameoverCode.GDMessageObjects1.length === 0 ) ? 0 :gdjs.GameoverCode.GDMessageObjects1[0].getY()) + 50, "");
}{for(var i = 0, len = gdjs.GameoverCode.GDDistanceTravelledObjects1.length ;i < len;++i) {
    gdjs.GameoverCode.GDDistanceTravelledObjects1[i].setString("Distance travelled: " + gdjs.evtTools.common.toString(Math.round(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) * 100) / 100) + " m");
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameoverCode.mapOfGDgdjs_46GameoverCode_46GDPointsObjects1Objects, (( gdjs.GameoverCode.GDMessageObjects1.length === 0 ) ? 0 :gdjs.GameoverCode.GDMessageObjects1[0].getX()), (( gdjs.GameoverCode.GDDistanceTravelledObjects1.length === 0 ) ? 0 :gdjs.GameoverCode.GDDistanceTravelledObjects1[0].getY()) + 50, "");
}{for(var i = 0, len = gdjs.GameoverCode.GDPointsObjects1.length ;i < len;++i) {
    gdjs.GameoverCode.GDPointsObjects1[i].setString("You scored " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1))) + " points!");
}
}{for(var i = 0, len = gdjs.GameoverCode.GDBgObjects1.length ;i < len;++i) {
    gdjs.GameoverCode.GDBgObjects1[i].setWidth(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) + 200);
}
}{for(var i = 0, len = gdjs.GameoverCode.GDBgObjects1.length ;i < len;++i) {
    gdjs.GameoverCode.GDBgObjects1[i].setHeight(gdjs.evtTools.window.getGameResolutionHeight(runtimeScene));
}
}{for(var i = 0, len = gdjs.GameoverCode.GDBgObjects1.length ;i < len;++i) {
    gdjs.GameoverCode.GDBgObjects1[i].setZOrder(-(1));
}
}{for(var i = 0, len = gdjs.GameoverCode.GDPickupArmObjects1.length ;i < len;++i) {
    gdjs.GameoverCode.GDPickupArmObjects1[i].setScale(0.8);
}
}}

}


{


gdjs.GameoverCode.condition0IsTrue_0.val = false;
{
gdjs.GameoverCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 0;
}if (gdjs.GameoverCode.condition0IsTrue_0.val) {
gdjs.GameoverCode.GDMessageObjects1.createFrom(runtimeScene.getObjects("Message"));
{for(var i = 0, len = gdjs.GameoverCode.GDMessageObjects1.length ;i < len;++i) {
    gdjs.GameoverCode.GDMessageObjects1[i].setString("Your plane has crashed!");
}
}}

}


{


gdjs.GameoverCode.condition0IsTrue_0.val = false;
{
gdjs.GameoverCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 1;
}if (gdjs.GameoverCode.condition0IsTrue_0.val) {
gdjs.GameoverCode.GDMessageObjects1.createFrom(runtimeScene.getObjects("Message"));
{for(var i = 0, len = gdjs.GameoverCode.GDMessageObjects1.length ;i < len;++i) {
    gdjs.GameoverCode.GDMessageObjects1[i].setString("Your plane has flown too high!");
}
}}

}


{


gdjs.GameoverCode.condition0IsTrue_0.val = false;
{
gdjs.GameoverCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 2;
}if (gdjs.GameoverCode.condition0IsTrue_0.val) {
gdjs.GameoverCode.GDMessageObjects1.createFrom(runtimeScene.getObjects("Message"));
{for(var i = 0, len = gdjs.GameoverCode.GDMessageObjects1.length ;i < len;++i) {
    gdjs.GameoverCode.GDMessageObjects1[i].setString("Your plane has hit the hoop!");
}
}}

}


{

gdjs.GameoverCode.GDBgObjects1.createFrom(runtimeScene.getObjects("Bg"));

gdjs.GameoverCode.condition0IsTrue_0.val = false;
gdjs.GameoverCode.condition1IsTrue_0.val = false;
gdjs.GameoverCode.condition2IsTrue_0.val = false;
{
gdjs.GameoverCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.GameoverCode.condition0IsTrue_0.val ) {
{
gdjs.GameoverCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameoverCode.mapOfGDgdjs_46GameoverCode_46GDBgObjects1Objects, runtimeScene, true, false);
}if ( gdjs.GameoverCode.condition1IsTrue_0.val ) {
{
{gdjs.GameoverCode.conditionTrue_1 = gdjs.GameoverCode.condition2IsTrue_0;
gdjs.GameoverCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8069316);
}
}}
}
if (gdjs.GameoverCode.condition2IsTrue_0.val) {
gdjs.GameoverCode.GDPickupArmObjects1.createFrom(runtimeScene.getObjects("PickupArm"));
{for(var i = 0, len = gdjs.GameoverCode.GDPickupArmObjects1.length ;i < len;++i) {
    gdjs.GameoverCode.GDPickupArmObjects1[i].getBehavior("Tween").addObjectPositionTween("posTween", -(200), -(100), "easeOutCubic", 500, false);
}
}{for(var i = 0, len = gdjs.GameoverCode.GDPickupArmObjects1.length ;i < len;++i) {
    gdjs.GameoverCode.GDPickupArmObjects1[i].getBehavior("Tween").addObjectScaleTween("scaleTween", 1, 1, "easeOutCubic", 500, false);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "sounds\\sleeve.mp3", false, 100, gdjs.randomFloatInRange(0.8, 1.2));
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "restart");
}}

}


{


gdjs.GameoverCode.condition0IsTrue_0.val = false;
{
gdjs.GameoverCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.6, "restart");
}if (gdjs.GameoverCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


}; //End of gdjs.GameoverCode.eventsList0x5b7028


gdjs.GameoverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameoverCode.GDDistanceTravelledObjects1.length = 0;
gdjs.GameoverCode.GDDistanceTravelledObjects2.length = 0;
gdjs.GameoverCode.GDMessageObjects1.length = 0;
gdjs.GameoverCode.GDMessageObjects2.length = 0;
gdjs.GameoverCode.GDBgObjects1.length = 0;
gdjs.GameoverCode.GDBgObjects2.length = 0;
gdjs.GameoverCode.GDPickupArmObjects1.length = 0;
gdjs.GameoverCode.GDPickupArmObjects2.length = 0;
gdjs.GameoverCode.GDRestartObjects1.length = 0;
gdjs.GameoverCode.GDRestartObjects2.length = 0;
gdjs.GameoverCode.GDPointsObjects1.length = 0;
gdjs.GameoverCode.GDPointsObjects2.length = 0;

gdjs.GameoverCode.eventsList0x5b7028(runtimeScene);
return;

}

gdjs['GameoverCode'] = gdjs.GameoverCode;
