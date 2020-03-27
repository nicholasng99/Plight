gdjs.GameoverCode = {};
gdjs.GameoverCode.GDRestartObjects1= [];
gdjs.GameoverCode.GDRestartObjects2= [];
gdjs.GameoverCode.GDDistanceTravelledObjects1= [];
gdjs.GameoverCode.GDDistanceTravelledObjects2= [];
gdjs.GameoverCode.GDMessageObjects1= [];
gdjs.GameoverCode.GDMessageObjects2= [];

gdjs.GameoverCode.conditionTrue_0 = {val:false};
gdjs.GameoverCode.condition0IsTrue_0 = {val:false};
gdjs.GameoverCode.condition1IsTrue_0 = {val:false};
gdjs.GameoverCode.condition2IsTrue_0 = {val:false};
gdjs.GameoverCode.conditionTrue_1 = {val:false};
gdjs.GameoverCode.condition0IsTrue_1 = {val:false};
gdjs.GameoverCode.condition1IsTrue_1 = {val:false};
gdjs.GameoverCode.condition2IsTrue_1 = {val:false};


gdjs.GameoverCode.mapOfGDgdjs_46GameoverCode_46GDRestartObjects1Objects = Hashtable.newFrom({"Restart": gdjs.GameoverCode.GDRestartObjects1});gdjs.GameoverCode.mapOfGDgdjs_46GameoverCode_46GDDistanceTravelledObjects1Objects = Hashtable.newFrom({"DistanceTravelled": gdjs.GameoverCode.GDDistanceTravelledObjects1});gdjs.GameoverCode.mapOfGDgdjs_46GameoverCode_46GDMessageObjects1Objects = Hashtable.newFrom({"Message": gdjs.GameoverCode.GDMessageObjects1});gdjs.GameoverCode.mapOfGDgdjs_46GameoverCode_46GDRestartObjects1Objects = Hashtable.newFrom({"Restart": gdjs.GameoverCode.GDRestartObjects1});gdjs.GameoverCode.eventsList0x5b6e18 = function(runtimeScene) {

{


gdjs.GameoverCode.condition0IsTrue_0.val = false;
{
{gdjs.GameoverCode.conditionTrue_1 = gdjs.GameoverCode.condition0IsTrue_0;
gdjs.GameoverCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7118860);
}
}if (gdjs.GameoverCode.condition0IsTrue_0.val) {
gdjs.GameoverCode.GDDistanceTravelledObjects1.length = 0;

gdjs.GameoverCode.GDMessageObjects1.length = 0;

gdjs.GameoverCode.GDRestartObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameoverCode.mapOfGDgdjs_46GameoverCode_46GDRestartObjects1Objects, gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2, gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2 + 50, "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameoverCode.mapOfGDgdjs_46GameoverCode_46GDDistanceTravelledObjects1Objects, gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2, gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2, "");
}{for(var i = 0, len = gdjs.GameoverCode.GDDistanceTravelledObjects1.length ;i < len;++i) {
    gdjs.GameoverCode.GDDistanceTravelledObjects1[i].setString(gdjs.evtTools.common.toString(Math.round(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) * 100) / 100) + " m");
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameoverCode.mapOfGDgdjs_46GameoverCode_46GDMessageObjects1Objects, gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2, gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2 - 50, "");
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

gdjs.GameoverCode.GDRestartObjects1.createFrom(runtimeScene.getObjects("Restart"));

gdjs.GameoverCode.condition0IsTrue_0.val = false;
gdjs.GameoverCode.condition1IsTrue_0.val = false;
{
gdjs.GameoverCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.GameoverCode.condition0IsTrue_0.val ) {
{
gdjs.GameoverCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameoverCode.mapOfGDgdjs_46GameoverCode_46GDRestartObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.GameoverCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", true);
}}

}


}; //End of gdjs.GameoverCode.eventsList0x5b6e18


gdjs.GameoverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameoverCode.GDRestartObjects1.length = 0;
gdjs.GameoverCode.GDRestartObjects2.length = 0;
gdjs.GameoverCode.GDDistanceTravelledObjects1.length = 0;
gdjs.GameoverCode.GDDistanceTravelledObjects2.length = 0;
gdjs.GameoverCode.GDMessageObjects1.length = 0;
gdjs.GameoverCode.GDMessageObjects2.length = 0;

gdjs.GameoverCode.eventsList0x5b6e18(runtimeScene);
return;

}

gdjs['GameoverCode'] = gdjs.GameoverCode;
