gdjs.GameoverCode = {};
gdjs.GameoverCode.GDRestartObjects1= [];
gdjs.GameoverCode.GDRestartObjects2= [];

gdjs.GameoverCode.conditionTrue_0 = {val:false};
gdjs.GameoverCode.condition0IsTrue_0 = {val:false};
gdjs.GameoverCode.condition1IsTrue_0 = {val:false};
gdjs.GameoverCode.condition2IsTrue_0 = {val:false};


gdjs.GameoverCode.mapOfGDgdjs_46GameoverCode_46GDRestartObjects1Objects = Hashtable.newFrom({"Restart": gdjs.GameoverCode.GDRestartObjects1});gdjs.GameoverCode.eventsList0x5b6e18 = function(runtimeScene) {

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

gdjs.GameoverCode.eventsList0x5b6e18(runtimeScene);
return;

}

gdjs['GameoverCode'] = gdjs.GameoverCode;
