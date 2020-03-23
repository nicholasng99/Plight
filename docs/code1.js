gdjs.GameCode = {};
gdjs.GameCode.GDPlaneObjects1= [];
gdjs.GameCode.GDPlaneObjects2= [];
gdjs.GameCode.GDBackgroundObjects1= [];
gdjs.GameCode.GDBackgroundObjects2= [];
gdjs.GameCode.GDPlayerObjects1= [];
gdjs.GameCode.GDPlayerObjects2= [];
gdjs.GameCode.GDHoopTopObjects1= [];
gdjs.GameCode.GDHoopTopObjects2= [];
gdjs.GameCode.GDHoopBotObjects1= [];
gdjs.GameCode.GDHoopBotObjects2= [];
gdjs.GameCode.GDGustObjects1= [];
gdjs.GameCode.GDGustObjects2= [];

gdjs.GameCode.conditionTrue_0 = {val:false};
gdjs.GameCode.condition0IsTrue_0 = {val:false};
gdjs.GameCode.condition1IsTrue_0 = {val:false};
gdjs.GameCode.condition2IsTrue_0 = {val:false};
gdjs.GameCode.condition3IsTrue_0 = {val:false};
gdjs.GameCode.conditionTrue_1 = {val:false};
gdjs.GameCode.condition0IsTrue_1 = {val:false};
gdjs.GameCode.condition1IsTrue_1 = {val:false};
gdjs.GameCode.condition2IsTrue_1 = {val:false};
gdjs.GameCode.condition3IsTrue_1 = {val:false};


gdjs.GameCode.eventsList0x70785c = function(runtimeScene) {

}; //End of gdjs.GameCode.eventsList0x70785c
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlaneObjects1Objects = Hashtable.newFrom({"Plane": gdjs.GameCode.GDPlaneObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDGustObjects1Objects = Hashtable.newFrom({"Gust": gdjs.GameCode.GDGustObjects1});gdjs.GameCode.eventsList0x73644c = function(runtimeScene) {

}; //End of gdjs.GameCode.eventsList0x73644c
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDGustObjects1Objects = Hashtable.newFrom({"Gust": gdjs.GameCode.GDGustObjects1});gdjs.GameCode.eventsList0x728fc4 = function(runtimeScene) {

}; //End of gdjs.GameCode.eventsList0x728fc4
gdjs.GameCode.eventsList0x73111c = function(runtimeScene) {

}; //End of gdjs.GameCode.eventsList0x73111c
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDHoopTopObjects1Objects = Hashtable.newFrom({"HoopTop": gdjs.GameCode.GDHoopTopObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDHoopBotObjects1Objects = Hashtable.newFrom({"HoopBot": gdjs.GameCode.GDHoopBotObjects1});gdjs.GameCode.eventsList0x71eddc = function(runtimeScene) {

}; //End of gdjs.GameCode.eventsList0x71eddc
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlaneObjects1Objects = Hashtable.newFrom({"Plane": gdjs.GameCode.GDPlaneObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDHoopTopObjects1ObjectsGDgdjs_46GameCode_46GDHoopBotObjects1Objects = Hashtable.newFrom({"HoopTop": gdjs.GameCode.GDHoopTopObjects1, "HoopBot": gdjs.GameCode.GDHoopBotObjects1});gdjs.GameCode.eventsList0x5b6e18 = function(runtimeScene) {

{


gdjs.GameCode.eventsList0x70785c(runtimeScene);
}


{


{
gdjs.GameCode.GDPlaneObjects1.createFrom(runtimeScene.getObjects("Plane"));
{for(var i = 0, len = gdjs.GameCode.GDPlaneObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlaneObjects1[i].setX(Math.min((gdjs.RuntimeObject.getVariableNumber(gdjs.GameCode.GDPlaneObjects1[i].getVariables().getFromIndex(0))), (gdjs.GameCode.GDPlaneObjects1[i].getPointX(""))));
}
}{for(var i = 0, len = gdjs.GameCode.GDPlaneObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlaneObjects1[i].returnVariable(gdjs.GameCode.GDPlaneObjects1[i].getVariables().getFromIndex(0)).sub(0.1);
}
}}

}


{

gdjs.GameCode.GDPlaneObjects1.createFrom(runtimeScene.getObjects("Plane"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDPlaneObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlaneObjects1[i].getVariableNumber(gdjs.GameCode.GDPlaneObjects1[i].getVariables().getFromIndex(1)) == 0 ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDPlaneObjects1[k] = gdjs.GameCode.GDPlaneObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDPlaneObjects1.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDPlaneObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDPlaneObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlaneObjects1[i].addPolarForce((gdjs.GameCode.GDPlaneObjects1[i].getDirectionOrAngle()), 300, 0);
}
}}

}


{

gdjs.GameCode.GDPlaneObjects1.createFrom(runtimeScene.getObjects("Plane"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDPlaneObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlaneObjects1[i].getVariableNumber(gdjs.GameCode.GDPlaneObjects1[i].getVariables().getFromIndex(2)) == 0 ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDPlaneObjects1[k] = gdjs.GameCode.GDPlaneObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDPlaneObjects1.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDPlaneObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDPlaneObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlaneObjects1[i].rotateTowardAngle(90, 15, runtimeScene);
}
}}

}


{

gdjs.GameCode.GDGustObjects1.createFrom(runtimeScene.getObjects("Gust"));
gdjs.GameCode.GDPlaneObjects1.createFrom(runtimeScene.getObjects("Plane"));

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlaneObjects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDGustObjects1Objects, false, runtimeScene, false);
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDPlaneObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlaneObjects1[i].getVariableNumber(gdjs.GameCode.GDPlaneObjects1[i].getVariables().getFromIndex(1)) == 0 ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDPlaneObjects1[k] = gdjs.GameCode.GDPlaneObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDPlaneObjects1.length = k;}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDGustObjects1 */
/* Reuse gdjs.GameCode.GDPlaneObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDPlaneObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlaneObjects1[i].returnVariable(gdjs.GameCode.GDPlaneObjects1[i].getVariables().getFromIndex(2)).setNumber(1);
}
}{for(var i = 0, len = gdjs.GameCode.GDPlaneObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlaneObjects1[i].rotateTowardAngle((( gdjs.GameCode.GDGustObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDGustObjects1[0].getAngle()) * 1.5, 120, runtimeScene);
}
}{for(var i = 0, len = gdjs.GameCode.GDPlaneObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlaneObjects1[i].addPolarForce((( gdjs.GameCode.GDGustObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDGustObjects1[0].getAngle()), 500, 0);
}
}{for(var i = 0, len = gdjs.GameCode.GDPlaneObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlaneObjects1[i].returnVariable(gdjs.GameCode.GDPlaneObjects1[i].getVariables().getFromIndex(0)).add(0.5);
}
}{for(var i = 0, len = gdjs.GameCode.GDPlaneObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlaneObjects1[i].resetTimer("fallTimer");
}
}}

}


{

gdjs.GameCode.GDPlaneObjects1.createFrom(runtimeScene.getObjects("Plane"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDPlaneObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlaneObjects1[i].timerElapsedTime("fallTimer", 0.5) ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDPlaneObjects1[k] = gdjs.GameCode.GDPlaneObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDPlaneObjects1.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDPlaneObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDPlaneObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlaneObjects1[i].returnVariable(gdjs.GameCode.GDPlaneObjects1[i].getVariables().getFromIndex(2)).setNumber(0);
}
}}

}


{

gdjs.GameCode.GDPlaneObjects1.createFrom(runtimeScene.getObjects("Plane"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDPlaneObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlaneObjects1[i].getVariableNumber(gdjs.GameCode.GDPlaneObjects1[i].getVariables().getFromIndex(1)) == 1 ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDPlaneObjects1[k] = gdjs.GameCode.GDPlaneObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDPlaneObjects1.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDPlaneObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDPlaneObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlaneObjects1[i].addForce(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)), 0, 0);
}
}{for(var i = 0, len = gdjs.GameCode.GDPlaneObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlaneObjects1[i].rotateTowardAngle(90, Math.abs((gdjs.GameCode.GDPlaneObjects1[i].getAngle())) * 2, runtimeScene);
}
}{for(var i = 0, len = gdjs.GameCode.GDPlaneObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlaneObjects1[i].addPolarForce((gdjs.GameCode.GDPlaneObjects1[i].getDirectionOrAngle()), 9.81, 1);
}
}}

}


{


gdjs.GameCode.eventsList0x73644c(runtimeScene);
}


{


{
gdjs.GameCode.GDGustObjects1.createFrom(runtimeScene.getObjects("Gust"));
{for(var i = 0, len = gdjs.GameCode.GDGustObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDGustObjects1[i].addPolarForce((gdjs.GameCode.GDGustObjects1[i].getDirectionOrAngle()), 700, 0);
}
}{for(var i = 0, len = gdjs.GameCode.GDGustObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDGustObjects1[i].setDirectionOrAngle(gdjs.GameCode.GDGustObjects1[i].getDirectionOrAngle() * (1.1));
}
}}

}


{

gdjs.GameCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
gdjs.GameCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects1[i].timerElapsedTime("", 0.5) ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDPlayerObjects1[k] = gdjs.GameCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects1.length = k;}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.GameCode.condition1IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition2IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7443060);
}
}}
}
if (gdjs.GameCode.condition2IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDPlayerObjects1 */
gdjs.GameCode.GDGustObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDGustObjects1Objects, (( gdjs.GameCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects1[0].getPointX("")) + 100, (( gdjs.GameCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects1[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.GameCode.GDGustObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDGustObjects1[i].setDirectionOrAngle((( gdjs.GameCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects1[0].getDirectionOrAngle()));
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].resetTimer("");
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.GameCode.GDGustObjects1.createFrom(runtimeScene.getObjects("Gust"));
{for(var i = 0, len = gdjs.GameCode.GDGustObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDGustObjects1[i].setOpacity(gdjs.GameCode.GDGustObjects1[i].getOpacity() - (10));
}
}}

}


{

gdjs.GameCode.GDGustObjects1.createFrom(runtimeScene.getObjects("Gust"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDGustObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDGustObjects1[i].getOpacity() <= 0 ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDGustObjects1[k] = gdjs.GameCode.GDGustObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDGustObjects1.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDGustObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDGustObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDGustObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


gdjs.GameCode.eventsList0x728fc4(runtimeScene);
}


{


{
gdjs.GameCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].rotateTowardPosition(Math.max(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), 160), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0), 360, runtimeScene);
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].setX(-(20));
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].addForceTowardPosition(0, gdjs.evtTools.input.getMouseY(runtimeScene, "", 0), 1500, 0);
}
}}

}


{


gdjs.GameCode.eventsList0x73111c(runtimeScene);
}


{


{
gdjs.GameCode.GDHoopBotObjects1.createFrom(runtimeScene.getObjects("HoopBot"));
gdjs.GameCode.GDHoopTopObjects1.createFrom(runtimeScene.getObjects("HoopTop"));
{for(var i = 0, len = gdjs.GameCode.GDHoopTopObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDHoopTopObjects1[i].addForce(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)), 0, 0);
}
for(var i = 0, len = gdjs.GameCode.GDHoopBotObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDHoopBotObjects1[i].addForce(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)), 0, 0);
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 5, "");
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition1IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7571780);
}
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
gdjs.GameCode.GDHoopBotObjects1.length = 0;

gdjs.GameCode.GDHoopTopObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDHoopTopObjects1Objects, gdjs.evtTools.window.getGameResolutionWidth(runtimeScene), gdjs.randomInRange(50, gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) - 230 - 50), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDHoopBotObjects1Objects, gdjs.evtTools.window.getGameResolutionWidth(runtimeScene), (( gdjs.GameCode.GDHoopTopObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDHoopTopObjects1[0].getPointY("")) + 180, "");
}{for(var i = 0, len = gdjs.GameCode.GDHoopTopObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDHoopTopObjects1[i].setHeight(25);
}
for(var i = 0, len = gdjs.GameCode.GDHoopBotObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDHoopBotObjects1[i].setHeight(25);
}
}{for(var i = 0, len = gdjs.GameCode.GDHoopTopObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDHoopTopObjects1[i].setWidth(25);
}
for(var i = 0, len = gdjs.GameCode.GDHoopBotObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDHoopBotObjects1[i].setWidth(25);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "");
}}

}


{


gdjs.GameCode.eventsList0x71eddc(runtimeScene);
}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition0IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7574380);
}
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.GameCode.GDBackgroundObjects1.createFrom(runtimeScene.getObjects("Background"));
{for(var i = 0, len = gdjs.GameCode.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBackgroundObjects1[i].setWidth(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene));
}
}{for(var i = 0, len = gdjs.GameCode.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBackgroundObjects1[i].setHeight(gdjs.evtTools.window.getGameResolutionHeight(runtimeScene));
}
}}

}


{

gdjs.GameCode.GDHoopBotObjects1.createFrom(runtimeScene.getObjects("HoopBot"));
gdjs.GameCode.GDHoopTopObjects1.createFrom(runtimeScene.getObjects("HoopTop"));
gdjs.GameCode.GDPlaneObjects1.createFrom(runtimeScene.getObjects("Plane"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlaneObjects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDHoopTopObjects1ObjectsGDgdjs_46GameCode_46GDHoopBotObjects1Objects, false, runtimeScene, false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDPlaneObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDPlaneObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlaneObjects1[i].addPolarForce(180 - (gdjs.GameCode.GDPlaneObjects1[i].getDirectionOrAngle()), 90, 0);
}
}{for(var i = 0, len = gdjs.GameCode.GDPlaneObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlaneObjects1[i].returnVariable(gdjs.GameCode.GDPlaneObjects1[i].getVariables().getFromIndex(1)).setNumber(1);
}
}}

}


}; //End of gdjs.GameCode.eventsList0x5b6e18


gdjs.GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameCode.GDPlaneObjects1.length = 0;
gdjs.GameCode.GDPlaneObjects2.length = 0;
gdjs.GameCode.GDBackgroundObjects1.length = 0;
gdjs.GameCode.GDBackgroundObjects2.length = 0;
gdjs.GameCode.GDPlayerObjects1.length = 0;
gdjs.GameCode.GDPlayerObjects2.length = 0;
gdjs.GameCode.GDHoopTopObjects1.length = 0;
gdjs.GameCode.GDHoopTopObjects2.length = 0;
gdjs.GameCode.GDHoopBotObjects1.length = 0;
gdjs.GameCode.GDHoopBotObjects2.length = 0;
gdjs.GameCode.GDGustObjects1.length = 0;
gdjs.GameCode.GDGustObjects2.length = 0;

gdjs.GameCode.eventsList0x5b6e18(runtimeScene);
return;

}

gdjs['GameCode'] = gdjs.GameCode;
