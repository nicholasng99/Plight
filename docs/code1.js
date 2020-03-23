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


gdjs.GameCode.eventsList0x6a3214 = function(runtimeScene) {

}; //End of gdjs.GameCode.eventsList0x6a3214
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlaneObjects1Objects = Hashtable.newFrom({"Plane": gdjs.GameCode.GDPlaneObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDGustObjects1Objects = Hashtable.newFrom({"Gust": gdjs.GameCode.GDGustObjects1});gdjs.GameCode.eventsList0x6a390c = function(runtimeScene) {

}; //End of gdjs.GameCode.eventsList0x6a390c
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDGustObjects1Objects = Hashtable.newFrom({"Gust": gdjs.GameCode.GDGustObjects1});gdjs.GameCode.eventsList0x6c5274 = function(runtimeScene) {

}; //End of gdjs.GameCode.eventsList0x6c5274
gdjs.GameCode.eventsList0x6ae93c = function(runtimeScene) {

}; //End of gdjs.GameCode.eventsList0x6ae93c
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDHoopTopObjects1Objects = Hashtable.newFrom({"HoopTop": gdjs.GameCode.GDHoopTopObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDHoopBotObjects1Objects = Hashtable.newFrom({"HoopBot": gdjs.GameCode.GDHoopBotObjects1});gdjs.GameCode.eventsList0x5b6e18 = function(runtimeScene) {

{


gdjs.GameCode.eventsList0x6a3214(runtimeScene);
}


{


{
gdjs.GameCode.GDPlaneObjects1.createFrom(runtimeScene.getObjects("Plane"));
{for(var i = 0, len = gdjs.GameCode.GDPlaneObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlaneObjects1[i].setX(300);
}
}{for(var i = 0, len = gdjs.GameCode.GDPlaneObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlaneObjects1[i].addPolarForce((gdjs.GameCode.GDPlaneObjects1[i].getDirectionOrAngle()), 100, 0);
}
}}

}


{

gdjs.GameCode.GDPlaneObjects1.createFrom(runtimeScene.getObjects("Plane"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDPlaneObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlaneObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDPlaneObjects1[k] = gdjs.GameCode.GDPlaneObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDPlaneObjects1.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDPlaneObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDPlaneObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlaneObjects1[i].rotateTowardAngle(90, 20, runtimeScene);
}
}}

}


{

gdjs.GameCode.GDGustObjects1.createFrom(runtimeScene.getObjects("Gust"));
gdjs.GameCode.GDPlaneObjects1.createFrom(runtimeScene.getObjects("Plane"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlaneObjects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDGustObjects1Objects, false, runtimeScene, false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDGustObjects1 */
/* Reuse gdjs.GameCode.GDPlaneObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDPlaneObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlaneObjects1[i].rotateTowardAngle((( gdjs.GameCode.GDGustObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDGustObjects1[0].getAngle()) * 1.5, 60, runtimeScene);
}
}{for(var i = 0, len = gdjs.GameCode.GDPlaneObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlaneObjects1[i].addPolarForce((( gdjs.GameCode.GDGustObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDGustObjects1[0].getAngle()), 500, 0);
}
}}

}


{


gdjs.GameCode.eventsList0x6a390c(runtimeScene);
}


{


{
gdjs.GameCode.GDGustObjects1.createFrom(runtimeScene.getObjects("Gust"));
{for(var i = 0, len = gdjs.GameCode.GDGustObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDGustObjects1[i].addPolarForce((gdjs.GameCode.GDGustObjects1[i].getDirectionOrAngle()), 700, 0);
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
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7381196);
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


gdjs.GameCode.eventsList0x6c5274(runtimeScene);
}


{


{
gdjs.GameCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].rotateTowardPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0), 100, runtimeScene);
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].setX(-(20));
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].addForceTowardPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0), 1000, 0);
}
}}

}


{


gdjs.GameCode.eventsList0x6ae93c(runtimeScene);
}


{


{
gdjs.GameCode.GDHoopBotObjects1.createFrom(runtimeScene.getObjects("HoopBot"));
gdjs.GameCode.GDHoopTopObjects1.createFrom(runtimeScene.getObjects("HoopTop"));
{for(var i = 0, len = gdjs.GameCode.GDHoopTopObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDHoopTopObjects1[i].addForce(-(100), 0, 0);
}
for(var i = 0, len = gdjs.GameCode.GDHoopBotObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDHoopBotObjects1[i].addForce(-(100), 0, 0);
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3, "");
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition1IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7007156);
}
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
gdjs.GameCode.GDHoopBotObjects1.length = 0;

gdjs.GameCode.GDHoopTopObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDHoopTopObjects1Objects, gdjs.evtTools.window.getGameResolutionWidth(runtimeScene), gdjs.randomInRange(20, gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) - 200 - 20), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDHoopBotObjects1Objects, gdjs.evtTools.window.getGameResolutionWidth(runtimeScene), (( gdjs.GameCode.GDHoopTopObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDHoopTopObjects1[0].getPointY("")) + 150, "");
}{for(var i = 0, len = gdjs.GameCode.GDHoopTopObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDHoopTopObjects1[i].setHeight(50);
}
for(var i = 0, len = gdjs.GameCode.GDHoopBotObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDHoopBotObjects1[i].setHeight(50);
}
}{for(var i = 0, len = gdjs.GameCode.GDHoopTopObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDHoopTopObjects1[i].setWidth(50);
}
for(var i = 0, len = gdjs.GameCode.GDHoopBotObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDHoopBotObjects1[i].setWidth(50);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "");
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
