gdjs.MenuCode = {};
gdjs.MenuCode.GDBgObjects1= [];
gdjs.MenuCode.GDBgObjects2= [];
gdjs.MenuCode.GDArmObjects1= [];
gdjs.MenuCode.GDArmObjects2= [];

gdjs.MenuCode.conditionTrue_0 = {val:false};
gdjs.MenuCode.condition0IsTrue_0 = {val:false};
gdjs.MenuCode.condition1IsTrue_0 = {val:false};
gdjs.MenuCode.condition2IsTrue_0 = {val:false};
gdjs.MenuCode.condition3IsTrue_0 = {val:false};
gdjs.MenuCode.conditionTrue_1 = {val:false};
gdjs.MenuCode.condition0IsTrue_1 = {val:false};
gdjs.MenuCode.condition1IsTrue_1 = {val:false};
gdjs.MenuCode.condition2IsTrue_1 = {val:false};
gdjs.MenuCode.condition3IsTrue_1 = {val:false};


gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDBgObjects1Objects = Hashtable.newFrom({"Bg": gdjs.MenuCode.GDBgObjects1});gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDArmObjects1Objects = Hashtable.newFrom({"Arm": gdjs.MenuCode.GDArmObjects1});gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDArmObjects1Objects = Hashtable.newFrom({"Arm": gdjs.MenuCode.GDArmObjects1});gdjs.MenuCode.eventsList0x5b6e18 = function(runtimeScene) {

{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition0IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7121556);
}
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
gdjs.MenuCode.GDArmObjects1.length = 0;

gdjs.MenuCode.GDBgObjects1.length = 0;

{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "startTimer");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDBgObjects1Objects, 0, 0, "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDArmObjects1Objects, 0, 0, "");
}{for(var i = 0, len = gdjs.MenuCode.GDArmObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDArmObjects1[i].setZOrder((( gdjs.MenuCode.GDBgObjects1.length === 0 ) ? 0 :gdjs.MenuCode.GDBgObjects1[0].getZOrder()) + 1);
}
}}

}


{

gdjs.MenuCode.GDArmObjects1.createFrom(runtimeScene.getObjects("Arm"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
gdjs.MenuCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDArmObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDArmObjects1[i].getVariableNumber(gdjs.MenuCode.GDArmObjects1[i].getVariables().getFromIndex(0)) == 0 ) {
        gdjs.MenuCode.condition0IsTrue_0.val = true;
        gdjs.MenuCode.GDArmObjects1[k] = gdjs.MenuCode.GDArmObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDArmObjects1.length = k;}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
gdjs.MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.MenuCode.condition1IsTrue_0.val ) {
{
gdjs.MenuCode.condition2IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDArmObjects1Objects, runtimeScene, true, false);
}}
}
if (gdjs.MenuCode.condition2IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDArmObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDArmObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDArmObjects1[i].rotateTowardPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0), 90, runtimeScene);
}
}{for(var i = 0, len = gdjs.MenuCode.GDArmObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDArmObjects1[i].addForceTowardPosition(0, gdjs.evtTools.input.getMouseY(runtimeScene, "", 0) - 100, 90, 0);
}
}}

}


{

gdjs.MenuCode.GDArmObjects1.createFrom(runtimeScene.getObjects("Arm"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDArmObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDArmObjects1[i].getVariableNumber(gdjs.MenuCode.GDArmObjects1[i].getVariables().getFromIndex(0)) == 0 ) {
        gdjs.MenuCode.condition0IsTrue_0.val = true;
        gdjs.MenuCode.GDArmObjects1[k] = gdjs.MenuCode.GDArmObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDArmObjects1.length = k;}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
gdjs.MenuCode.condition1IsTrue_0.val = !(gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left"));
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDArmObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDArmObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDArmObjects1[i].addForceTowardPosition(0, 0, (gdjs.MenuCode.GDArmObjects1[i].getPointY("")) * 3, 0);
}
}{for(var i = 0, len = gdjs.MenuCode.GDArmObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDArmObjects1[i].rotateTowardAngle(0, (gdjs.MenuCode.GDArmObjects1[i].getAngle()) * 3, runtimeScene);
}
}}

}


{

gdjs.MenuCode.GDArmObjects1.createFrom(runtimeScene.getObjects("Arm"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDArmObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDArmObjects1[i].getAngle() >= 30 ) {
        gdjs.MenuCode.condition0IsTrue_0.val = true;
        gdjs.MenuCode.GDArmObjects1[k] = gdjs.MenuCode.GDArmObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDArmObjects1.length = k;}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDArmObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDArmObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDArmObjects1[i].returnVariable(gdjs.MenuCode.GDArmObjects1[i].getVariables().getFromIndex(0)).setNumber(1);
}
}}

}


{

gdjs.MenuCode.GDArmObjects1.createFrom(runtimeScene.getObjects("Arm"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDArmObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDArmObjects1[i].getVariableNumber(gdjs.MenuCode.GDArmObjects1[i].getVariables().getFromIndex(0)) == 1 ) {
        gdjs.MenuCode.condition0IsTrue_0.val = true;
        gdjs.MenuCode.GDArmObjects1[k] = gdjs.MenuCode.GDArmObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDArmObjects1.length = k;}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDArmObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDArmObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDArmObjects1[i].rotateTowardAngle(-(45), gdjs.evtTools.common.angleDifference((gdjs.MenuCode.GDArmObjects1[i].getAngle()), -(45)) * 3, runtimeScene);
}
}{for(var i = 0, len = gdjs.MenuCode.GDArmObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDArmObjects1[i].addForceTowardPosition(-(400), 0, Math.abs(-(400) - (gdjs.MenuCode.GDArmObjects1[i].getPointX(""))) * 3, 0);
}
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "startTimer");
}}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.8, "startTimer");
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


}; //End of gdjs.MenuCode.eventsList0x5b6e18


gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDBgObjects1.length = 0;
gdjs.MenuCode.GDBgObjects2.length = 0;
gdjs.MenuCode.GDArmObjects1.length = 0;
gdjs.MenuCode.GDArmObjects2.length = 0;

gdjs.MenuCode.eventsList0x5b6e18(runtimeScene);
return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
