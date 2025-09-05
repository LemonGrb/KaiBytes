gdjs.MainCode = {};
gdjs.MainCode.localVariables = [];
gdjs.MainCode.GDDialogueBoxObjects1= [];
gdjs.MainCode.GDDialogueBoxObjects2= [];
gdjs.MainCode.GDDialogueBoxObjects3= [];
gdjs.MainCode.GDDialogueBoxObjects4= [];
gdjs.MainCode.GDGroundObjects1= [];
gdjs.MainCode.GDGroundObjects2= [];
gdjs.MainCode.GDGroundObjects3= [];
gdjs.MainCode.GDGroundObjects4= [];
gdjs.MainCode.GDWaterObjects1= [];
gdjs.MainCode.GDWaterObjects2= [];
gdjs.MainCode.GDWaterObjects3= [];
gdjs.MainCode.GDWaterObjects4= [];
gdjs.MainCode.GDdialogueObjects1= [];
gdjs.MainCode.GDdialogueObjects2= [];
gdjs.MainCode.GDdialogueObjects3= [];
gdjs.MainCode.GDdialogueObjects4= [];
gdjs.MainCode.GDoptionsObjects1= [];
gdjs.MainCode.GDoptionsObjects2= [];
gdjs.MainCode.GDoptionsObjects3= [];
gdjs.MainCode.GDoptionsObjects4= [];
gdjs.MainCode.GDchat1Objects1= [];
gdjs.MainCode.GDchat1Objects2= [];
gdjs.MainCode.GDchat1Objects3= [];
gdjs.MainCode.GDchat1Objects4= [];
gdjs.MainCode.GDLandObjects1= [];
gdjs.MainCode.GDLandObjects2= [];
gdjs.MainCode.GDLandObjects3= [];
gdjs.MainCode.GDLandObjects4= [];
gdjs.MainCode.GDInfraObjects1= [];
gdjs.MainCode.GDInfraObjects2= [];
gdjs.MainCode.GDInfraObjects3= [];
gdjs.MainCode.GDInfraObjects4= [];
gdjs.MainCode.GDShadowObjects1= [];
gdjs.MainCode.GDShadowObjects2= [];
gdjs.MainCode.GDShadowObjects3= [];
gdjs.MainCode.GDShadowObjects4= [];
gdjs.MainCode.GDTree1Objects1= [];
gdjs.MainCode.GDTree1Objects2= [];
gdjs.MainCode.GDTree1Objects3= [];
gdjs.MainCode.GDTree1Objects4= [];
gdjs.MainCode.GDDetailsObjects1= [];
gdjs.MainCode.GDDetailsObjects2= [];
gdjs.MainCode.GDDetailsObjects3= [];
gdjs.MainCode.GDDetailsObjects4= [];
gdjs.MainCode.GDPlayButtonObjects1= [];
gdjs.MainCode.GDPlayButtonObjects2= [];
gdjs.MainCode.GDPlayButtonObjects3= [];
gdjs.MainCode.GDPlayButtonObjects4= [];
gdjs.MainCode.GDchat2Objects1= [];
gdjs.MainCode.GDchat2Objects2= [];
gdjs.MainCode.GDchat2Objects3= [];
gdjs.MainCode.GDchat2Objects4= [];
gdjs.MainCode.GDKaiObjects1= [];
gdjs.MainCode.GDKaiObjects2= [];
gdjs.MainCode.GDKaiObjects3= [];
gdjs.MainCode.GDKaiObjects4= [];
gdjs.MainCode.GDNPC1Objects1= [];
gdjs.MainCode.GDNPC1Objects2= [];
gdjs.MainCode.GDNPC1Objects3= [];
gdjs.MainCode.GDNPC1Objects4= [];
gdjs.MainCode.GDNPC2Objects1= [];
gdjs.MainCode.GDNPC2Objects2= [];
gdjs.MainCode.GDNPC2Objects3= [];
gdjs.MainCode.GDNPC2Objects4= [];
gdjs.MainCode.GDCustomCursorObjects1= [];
gdjs.MainCode.GDCustomCursorObjects2= [];
gdjs.MainCode.GDCustomCursorObjects3= [];
gdjs.MainCode.GDCustomCursorObjects4= [];


gdjs.MainCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 2, "", 0);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Kai"), gdjs.MainCode.GDKaiObjects2);
{for(var i = 0, len = gdjs.MainCode.GDKaiObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDKaiObjects2[i].getBehavior("Animation").setAnimationName(gdjs.MainCode.GDKaiObjects2[i].getVariables().getFromIndex(1).getAsString() + gdjs.MainCode.GDKaiObjects2[i].getVariables().getFromIndex(0).getAsString());
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Kai"), gdjs.MainCode.GDKaiObjects2);
{for(var i = 0, len = gdjs.MainCode.GDKaiObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDKaiObjects2[i].returnVariable(gdjs.MainCode.GDKaiObjects2[i].getVariables().getFromIndex(0)).setString("Left");
}
}{for(var i = 0, len = gdjs.MainCode.GDKaiObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDKaiObjects2[i].returnVariable(gdjs.MainCode.GDKaiObjects2[i].getVariables().getFromIndex(1)).setString("Walk");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Kai"), gdjs.MainCode.GDKaiObjects2);
{for(var i = 0, len = gdjs.MainCode.GDKaiObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDKaiObjects2[i].returnVariable(gdjs.MainCode.GDKaiObjects2[i].getVariables().getFromIndex(0)).setString("Up");
}
}{for(var i = 0, len = gdjs.MainCode.GDKaiObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDKaiObjects2[i].returnVariable(gdjs.MainCode.GDKaiObjects2[i].getVariables().getFromIndex(1)).setString("Walk");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Kai"), gdjs.MainCode.GDKaiObjects2);
{for(var i = 0, len = gdjs.MainCode.GDKaiObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDKaiObjects2[i].returnVariable(gdjs.MainCode.GDKaiObjects2[i].getVariables().getFromIndex(0)).setString("Right");
}
}{for(var i = 0, len = gdjs.MainCode.GDKaiObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDKaiObjects2[i].returnVariable(gdjs.MainCode.GDKaiObjects2[i].getVariables().getFromIndex(1)).setString("Walk");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Kai"), gdjs.MainCode.GDKaiObjects2);
{for(var i = 0, len = gdjs.MainCode.GDKaiObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDKaiObjects2[i].returnVariable(gdjs.MainCode.GDKaiObjects2[i].getVariables().getFromIndex(0)).setString("Down");
}
}{for(var i = 0, len = gdjs.MainCode.GDKaiObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDKaiObjects2[i].returnVariable(gdjs.MainCode.GDKaiObjects2[i].getVariables().getFromIndex(1)).setString("Walk");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Left");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Up");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Right");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Down");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Kai"), gdjs.MainCode.GDKaiObjects1);
{for(var i = 0, len = gdjs.MainCode.GDKaiObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDKaiObjects1[i].returnVariable(gdjs.MainCode.GDKaiObjects1[i].getVariables().getFromIndex(1)).setString("Idle");
}
}}

}


};gdjs.MainCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Kai"), gdjs.MainCode.GDKaiObjects1);
{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.common.lerp(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0), (( gdjs.MainCode.GDKaiObjects1.length === 0 ) ? 0 :gdjs.MainCode.GDKaiObjects1[0].getPointX("")), 0.05), "", 0);
}{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.common.lerp(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0), (( gdjs.MainCode.GDKaiObjects1.length === 0 ) ? 0 :gdjs.MainCode.GDKaiObjects1[0].getPointY("")), 0.05), "", 0);
}{gdjs.evtTools.camera.clampCamera(runtimeScene, 0, 0, 1024, 704, "", 0);
}}

}


};gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDKaiObjects2Objects = Hashtable.newFrom({"Kai": gdjs.MainCode.GDKaiObjects2});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDNPC1Objects2Objects = Hashtable.newFrom({"NPC1": gdjs.MainCode.GDNPC1Objects2});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDKaiObjects2Objects = Hashtable.newFrom({"Kai": gdjs.MainCode.GDKaiObjects2});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDNPC1Objects2Objects = Hashtable.newFrom({"NPC1": gdjs.MainCode.GDNPC1Objects2});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDKaiObjects2Objects = Hashtable.newFrom({"Kai": gdjs.MainCode.GDKaiObjects2});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDNPC1Objects2Objects = Hashtable.newFrom({"NPC1": gdjs.MainCode.GDNPC1Objects2});
gdjs.MainCode.asyncCallback10619964 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MainCode.localVariables);
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(1);
}gdjs.MainCode.localVariables.length = 0;
}
gdjs.MainCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.MainCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.MainCode.asyncCallback10619964(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDKaiObjects2Objects = Hashtable.newFrom({"Kai": gdjs.MainCode.GDKaiObjects2});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDNPC1Objects2Objects = Hashtable.newFrom({"NPC1": gdjs.MainCode.GDNPC1Objects2});
gdjs.MainCode.asyncCallback10622292 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MainCode.localVariables);
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(3);
}gdjs.MainCode.localVariables.length = 0;
}
gdjs.MainCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.MainCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.MainCode.asyncCallback10622292(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDKaiObjects2Objects = Hashtable.newFrom({"Kai": gdjs.MainCode.GDKaiObjects2});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDNPC1Objects2Objects = Hashtable.newFrom({"NPC1": gdjs.MainCode.GDNPC1Objects2});
gdjs.MainCode.asyncCallback10624868 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MainCode.localVariables);
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(2);
}gdjs.MainCode.localVariables.length = 0;
}
gdjs.MainCode.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.MainCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.MainCode.asyncCallback10624868(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.MainCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "scrollText") >= gdjs.evtTools.variable.getFirstVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0));
if (isConditionTrue_0) {
{gdjs.dialogueTree.scrollClippedText();
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "scrollText");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.hasClippedScrollingCompleted();
if (isConditionTrue_0) {
{gdjs.dialogueTree.goToNextDialogueLine();
}}

}


};gdjs.MainCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if (isConditionTrue_0) {
{gdjs.dialogueTree.selectOption(0);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
if (isConditionTrue_0) {
{gdjs.dialogueTree.selectOption(1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Return");
if (isConditionTrue_0) {
{gdjs.dialogueTree.confirmSelectOption();
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.hasSelectedOptionChanged();
if (isConditionTrue_0) {
/* Reuse gdjs.MainCode.GDoptionsObjects2 */
{for(var i = 0, len = gdjs.MainCode.GDoptionsObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDoptionsObjects2[i].getBehavior("Text").setText(gdjs.dialogueTree.getLineOptionsTextVertical("->"));
}
}}

}


};gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDKaiObjects2Objects = Hashtable.newFrom({"Kai": gdjs.MainCode.GDKaiObjects2});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDNPC2Objects2Objects = Hashtable.newFrom({"NPC2": gdjs.MainCode.GDNPC2Objects2});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDKaiObjects2Objects = Hashtable.newFrom({"Kai": gdjs.MainCode.GDKaiObjects2});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDNPC2Objects2Objects = Hashtable.newFrom({"NPC2": gdjs.MainCode.GDNPC2Objects2});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDKaiObjects2Objects = Hashtable.newFrom({"Kai": gdjs.MainCode.GDKaiObjects2});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDNPC2Objects2Objects = Hashtable.newFrom({"NPC2": gdjs.MainCode.GDNPC2Objects2});
gdjs.MainCode.asyncCallback128268628 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MainCode.localVariables);
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(4);
}gdjs.MainCode.localVariables.length = 0;
}
gdjs.MainCode.eventsList7 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.MainCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.MainCode.asyncCallback128268628(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.MainCode.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://youtu.be/fTTGALaRZoc?si=nVScHmsNvIPMMwUf", runtimeScene);
}}

}


};gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDKaiObjects2Objects = Hashtable.newFrom({"Kai": gdjs.MainCode.GDKaiObjects2});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDNPC2Objects2Objects = Hashtable.newFrom({"NPC2": gdjs.MainCode.GDNPC2Objects2});
gdjs.MainCode.asyncCallback127261972 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MainCode.localVariables);
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(6);
}gdjs.MainCode.localVariables.length = 0;
}
gdjs.MainCode.eventsList9 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.MainCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.MainCode.asyncCallback127261972(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDKaiObjects2Objects = Hashtable.newFrom({"Kai": gdjs.MainCode.GDKaiObjects2});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDNPC2Objects2Objects = Hashtable.newFrom({"NPC2": gdjs.MainCode.GDNPC2Objects2});
gdjs.MainCode.asyncCallback126199140 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MainCode.localVariables);
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(5);
}gdjs.MainCode.localVariables.length = 0;
}
gdjs.MainCode.eventsList10 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.MainCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.MainCode.asyncCallback126199140(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.MainCode.eventsList11 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "scrollText") >= gdjs.evtTools.variable.getFirstVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0));
if (isConditionTrue_0) {
{gdjs.dialogueTree.scrollClippedText();
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "scrollText");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.hasClippedScrollingCompleted();
if (isConditionTrue_0) {
{gdjs.dialogueTree.goToNextDialogueLine();
}}

}


};gdjs.MainCode.eventsList12 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if (isConditionTrue_0) {
{gdjs.dialogueTree.selectOption(0);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
if (isConditionTrue_0) {
{gdjs.dialogueTree.selectOption(1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Return");
if (isConditionTrue_0) {
{gdjs.dialogueTree.confirmSelectOption();
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.hasSelectedOptionChanged();
if (isConditionTrue_0) {
/* Reuse gdjs.MainCode.GDoptionsObjects2 */
{for(var i = 0, len = gdjs.MainCode.GDoptionsObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDoptionsObjects2[i].getBehavior("Text").setText(gdjs.dialogueTree.getLineOptionsTextVertical("->"));
}
}}

}


};gdjs.MainCode.eventsList13 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DialogueBox"), gdjs.MainCode.GDDialogueBoxObjects2);
gdjs.copyArray(runtimeScene.getObjects("chat1"), gdjs.MainCode.GDchat1Objects2);
gdjs.copyArray(runtimeScene.getObjects("dialogue"), gdjs.MainCode.GDdialogueObjects2);
gdjs.copyArray(runtimeScene.getObjects("options"), gdjs.MainCode.GDoptionsObjects2);
{gdjs.dialogueTree.loadFromJsonFile(runtimeScene, "New dialogue tree");
}{for(var i = 0, len = gdjs.MainCode.GDoptionsObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDoptionsObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.MainCode.GDchat1Objects2.length ;i < len;++i) {
    gdjs.MainCode.GDchat1Objects2[i].hide();
}
}{for(var i = 0, len = gdjs.MainCode.GDdialogueObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDdialogueObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.MainCode.GDDialogueBoxObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueBoxObjects2[i].hide();
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Kai"), gdjs.MainCode.GDKaiObjects2);
gdjs.copyArray(runtimeScene.getObjects("NPC1"), gdjs.MainCode.GDNPC1Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDKaiObjects2Objects, gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDNPC1Objects2Objects, 60, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.dialogueTree.isRunning());
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("chat1"), gdjs.MainCode.GDchat1Objects2);
{for(var i = 0, len = gdjs.MainCode.GDchat1Objects2.length ;i < len;++i) {
    gdjs.MainCode.GDchat1Objects2[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Kai"), gdjs.MainCode.GDKaiObjects2);
gdjs.copyArray(runtimeScene.getObjects("NPC1"), gdjs.MainCode.GDNPC1Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDKaiObjects2Objects, gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDNPC1Objects2Objects, 60, true);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("chat1"), gdjs.MainCode.GDchat1Objects2);
{for(var i = 0, len = gdjs.MainCode.GDchat1Objects2.length ;i < len;++i) {
    gdjs.MainCode.GDchat1Objects2[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Kai"), gdjs.MainCode.GDKaiObjects2);
gdjs.copyArray(runtimeScene.getObjects("NPC1"), gdjs.MainCode.GDNPC1Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDKaiObjects2Objects, gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDNPC1Objects2Objects, 60, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "f");
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DialogueBox"), gdjs.MainCode.GDDialogueBoxObjects2);
/* Reuse gdjs.MainCode.GDKaiObjects2 */
gdjs.copyArray(runtimeScene.getObjects("chat1"), gdjs.MainCode.GDchat1Objects2);
gdjs.copyArray(runtimeScene.getObjects("dialogue"), gdjs.MainCode.GDdialogueObjects2);
{for(var i = 0, len = gdjs.MainCode.GDchat1Objects2.length ;i < len;++i) {
    gdjs.MainCode.GDchat1Objects2[i].hide();
}
}{for(var i = 0, len = gdjs.MainCode.GDDialogueBoxObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueBoxObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.MainCode.GDdialogueObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDdialogueObjects2[i].hide(false);
}
}{gdjs.dialogueTree.startFrom("First");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "scrollText");
}{for(var i = 0, len = gdjs.MainCode.GDKaiObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDKaiObjects2[i].activateBehavior("TopDownMovement", false);
}
}
{ //Subevents
gdjs.MainCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Kai"), gdjs.MainCode.GDKaiObjects2);
gdjs.copyArray(runtimeScene.getObjects("NPC1"), gdjs.MainCode.GDNPC1Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDKaiObjects2Objects, gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDNPC1Objects2Objects, 125, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() == 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "f");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.dialogueTree.isRunning());
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DialogueBox"), gdjs.MainCode.GDDialogueBoxObjects2);
/* Reuse gdjs.MainCode.GDKaiObjects2 */
gdjs.copyArray(runtimeScene.getObjects("chat1"), gdjs.MainCode.GDchat1Objects2);
gdjs.copyArray(runtimeScene.getObjects("dialogue"), gdjs.MainCode.GDdialogueObjects2);
{for(var i = 0, len = gdjs.MainCode.GDchat1Objects2.length ;i < len;++i) {
    gdjs.MainCode.GDchat1Objects2[i].hide();
}
}{for(var i = 0, len = gdjs.MainCode.GDDialogueBoxObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueBoxObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.MainCode.GDdialogueObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDdialogueObjects2[i].hide(false);
}
}{gdjs.dialogueTree.startFrom("Second");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "scrollText");
}{for(var i = 0, len = gdjs.MainCode.GDKaiObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDKaiObjects2[i].activateBehavior("TopDownMovement", false);
}
}
{ //Subevents
gdjs.MainCode.eventsList3(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Kai"), gdjs.MainCode.GDKaiObjects2);
gdjs.copyArray(runtimeScene.getObjects("NPC1"), gdjs.MainCode.GDNPC1Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDKaiObjects2Objects, gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDNPC1Objects2Objects, 60, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "f");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{isConditionTrue_1 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() == 1);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() == 3);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DialogueBox"), gdjs.MainCode.GDDialogueBoxObjects2);
/* Reuse gdjs.MainCode.GDKaiObjects2 */
gdjs.copyArray(runtimeScene.getObjects("dialogue"), gdjs.MainCode.GDdialogueObjects2);
gdjs.copyArray(runtimeScene.getObjects("options"), gdjs.MainCode.GDoptionsObjects2);
{for(var i = 0, len = gdjs.MainCode.GDDialogueBoxObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueBoxObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.MainCode.GDdialogueObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDdialogueObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.MainCode.GDoptionsObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDoptionsObjects2[i].hide();
}
}{gdjs.dialogueTree.stopRunningDialogue();
}{for(var i = 0, len = gdjs.MainCode.GDKaiObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDKaiObjects2[i].activateBehavior("TopDownMovement", true);
}
}
{ //Subevents
gdjs.MainCode.eventsList4(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.isDialogueLineType("text");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("dialogue"), gdjs.MainCode.GDdialogueObjects2);
{for(var i = 0, len = gdjs.MainCode.GDdialogueObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDdialogueObjects2[i].getBehavior("Text").setText(gdjs.dialogueTree.getClippedLineText());
}
}
{ //Subevents
gdjs.MainCode.eventsList5(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.isDialogueLineType("options");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("options"), gdjs.MainCode.GDoptionsObjects2);
{for(var i = 0, len = gdjs.MainCode.GDoptionsObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDoptionsObjects2[i].hide(false);
}
}
{ //Subevents
gdjs.MainCode.eventsList6(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.dialogueTree.isDialogueLineType("options"));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("options"), gdjs.MainCode.GDoptionsObjects2);
{for(var i = 0, len = gdjs.MainCode.GDoptionsObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDoptionsObjects2[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PlayButton"), gdjs.MainCode.GDPlayButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("chat2"), gdjs.MainCode.GDchat2Objects2);
{gdjs.dialogueTree.loadFromJsonFile(runtimeScene, "New dialogue tree");
}{for(var i = 0, len = gdjs.MainCode.GDchat2Objects2.length ;i < len;++i) {
    gdjs.MainCode.GDchat2Objects2[i].hide();
}
}{for(var i = 0, len = gdjs.MainCode.GDPlayButtonObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDPlayButtonObjects2[i].hide();
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Kai"), gdjs.MainCode.GDKaiObjects2);
gdjs.copyArray(runtimeScene.getObjects("NPC2"), gdjs.MainCode.GDNPC2Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDKaiObjects2Objects, gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDNPC2Objects2Objects, 60, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.dialogueTree.isRunning());
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("chat2"), gdjs.MainCode.GDchat2Objects2);
{for(var i = 0, len = gdjs.MainCode.GDchat2Objects2.length ;i < len;++i) {
    gdjs.MainCode.GDchat2Objects2[i].hide(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.hasSelectedOptionChanged();
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("options"), gdjs.MainCode.GDoptionsObjects2);
{for(var i = 0, len = gdjs.MainCode.GDoptionsObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDoptionsObjects2[i].getBehavior("Text").setText(gdjs.dialogueTree.getLineOptionsTextVertical("->"));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Kai"), gdjs.MainCode.GDKaiObjects2);
gdjs.copyArray(runtimeScene.getObjects("NPC2"), gdjs.MainCode.GDNPC2Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDKaiObjects2Objects, gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDNPC2Objects2Objects, 60, true);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("chat2"), gdjs.MainCode.GDchat2Objects2);
{for(var i = 0, len = gdjs.MainCode.GDchat2Objects2.length ;i < len;++i) {
    gdjs.MainCode.GDchat2Objects2[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Kai"), gdjs.MainCode.GDKaiObjects2);
gdjs.copyArray(runtimeScene.getObjects("NPC2"), gdjs.MainCode.GDNPC2Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDKaiObjects2Objects, gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDNPC2Objects2Objects, 60, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() == 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "f");
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DialogueBox"), gdjs.MainCode.GDDialogueBoxObjects2);
/* Reuse gdjs.MainCode.GDKaiObjects2 */
gdjs.copyArray(runtimeScene.getObjects("chat2"), gdjs.MainCode.GDchat2Objects2);
gdjs.copyArray(runtimeScene.getObjects("dialogue"), gdjs.MainCode.GDdialogueObjects2);
{for(var i = 0, len = gdjs.MainCode.GDchat2Objects2.length ;i < len;++i) {
    gdjs.MainCode.GDchat2Objects2[i].hide();
}
}{for(var i = 0, len = gdjs.MainCode.GDDialogueBoxObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueBoxObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.MainCode.GDdialogueObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDdialogueObjects2[i].hide(false);
}
}{gdjs.dialogueTree.startFrom("NPC2First");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "scrollText");
}{for(var i = 0, len = gdjs.MainCode.GDKaiObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDKaiObjects2[i].activateBehavior("TopDownMovement", false);
}
}
{ //Subevents
gdjs.MainCode.eventsList7(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() == 4);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PlayButton"), gdjs.MainCode.GDPlayButtonObjects2);
{for(var i = 0, len = gdjs.MainCode.GDPlayButtonObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDPlayButtonObjects2[i].hide(false);
}
}
{ //Subevents
gdjs.MainCode.eventsList8(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Kai"), gdjs.MainCode.GDKaiObjects2);
gdjs.copyArray(runtimeScene.getObjects("NPC2"), gdjs.MainCode.GDNPC2Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDKaiObjects2Objects, gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDNPC2Objects2Objects, 125, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() == 5);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "f");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.dialogueTree.isRunning());
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DialogueBox"), gdjs.MainCode.GDDialogueBoxObjects2);
/* Reuse gdjs.MainCode.GDKaiObjects2 */
gdjs.copyArray(runtimeScene.getObjects("chat2"), gdjs.MainCode.GDchat2Objects2);
gdjs.copyArray(runtimeScene.getObjects("dialogue"), gdjs.MainCode.GDdialogueObjects2);
{for(var i = 0, len = gdjs.MainCode.GDchat2Objects2.length ;i < len;++i) {
    gdjs.MainCode.GDchat2Objects2[i].hide();
}
}{for(var i = 0, len = gdjs.MainCode.GDDialogueBoxObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueBoxObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.MainCode.GDdialogueObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDdialogueObjects2[i].hide(false);
}
}{gdjs.dialogueTree.startFrom("Second");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "scrollText");
}{for(var i = 0, len = gdjs.MainCode.GDKaiObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDKaiObjects2[i].activateBehavior("TopDownMovement", false);
}
}
{ //Subevents
gdjs.MainCode.eventsList9(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Kai"), gdjs.MainCode.GDKaiObjects2);
gdjs.copyArray(runtimeScene.getObjects("NPC2"), gdjs.MainCode.GDNPC2Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDKaiObjects2Objects, gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDNPC2Objects2Objects, 60, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "f");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{isConditionTrue_1 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() == 4);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() == 6);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DialogueBox"), gdjs.MainCode.GDDialogueBoxObjects2);
/* Reuse gdjs.MainCode.GDKaiObjects2 */
gdjs.copyArray(runtimeScene.getObjects("dialogue"), gdjs.MainCode.GDdialogueObjects2);
gdjs.copyArray(runtimeScene.getObjects("options"), gdjs.MainCode.GDoptionsObjects2);
{for(var i = 0, len = gdjs.MainCode.GDDialogueBoxObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDDialogueBoxObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.MainCode.GDdialogueObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDdialogueObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.MainCode.GDoptionsObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDoptionsObjects2[i].hide();
}
}{gdjs.dialogueTree.stopRunningDialogue();
}{for(var i = 0, len = gdjs.MainCode.GDKaiObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDKaiObjects2[i].activateBehavior("TopDownMovement", true);
}
}
{ //Subevents
gdjs.MainCode.eventsList10(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.isDialogueLineType("text");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("dialogue"), gdjs.MainCode.GDdialogueObjects2);
{for(var i = 0, len = gdjs.MainCode.GDdialogueObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDdialogueObjects2[i].getBehavior("Text").setText(gdjs.dialogueTree.getClippedLineText());
}
}
{ //Subevents
gdjs.MainCode.eventsList11(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.isDialogueLineType("options");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("options"), gdjs.MainCode.GDoptionsObjects2);
{for(var i = 0, len = gdjs.MainCode.GDoptionsObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDoptionsObjects2[i].hide(false);
}
}
{ //Subevents
gdjs.MainCode.eventsList12(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.dialogueTree.isDialogueLineType("options"));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("options"), gdjs.MainCode.GDoptionsObjects2);
{for(var i = 0, len = gdjs.MainCode.GDoptionsObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDoptionsObjects2[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if (isConditionTrue_0) {
{gdjs.dialogueTree.selectOption(0);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
if (isConditionTrue_0) {
{gdjs.dialogueTree.selectOption(1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Return");
if (isConditionTrue_0) {
{gdjs.dialogueTree.confirmSelectOption();
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "scrollText") >= gdjs.evtTools.variable.getFirstVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0));
if (isConditionTrue_0) {
{gdjs.dialogueTree.scrollClippedText();
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "scrollText");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.hasClippedScrollingCompleted();
if (isConditionTrue_0) {
{gdjs.dialogueTree.goToNextDialogueLine();
}}

}


};gdjs.MainCode.eventsList14 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.input.hideCursor(runtimeScene);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("CustomCursor"), gdjs.MainCode.GDCustomCursorObjects1);
{for(var i = 0, len = gdjs.MainCode.GDCustomCursorObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDCustomCursorObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}}

}


{


gdjs.MainCode.eventsList0(runtimeScene);
}


{


gdjs.MainCode.eventsList1(runtimeScene);
}


{


gdjs.MainCode.eventsList13(runtimeScene);
}


};

gdjs.MainCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainCode.GDDialogueBoxObjects1.length = 0;
gdjs.MainCode.GDDialogueBoxObjects2.length = 0;
gdjs.MainCode.GDDialogueBoxObjects3.length = 0;
gdjs.MainCode.GDDialogueBoxObjects4.length = 0;
gdjs.MainCode.GDGroundObjects1.length = 0;
gdjs.MainCode.GDGroundObjects2.length = 0;
gdjs.MainCode.GDGroundObjects3.length = 0;
gdjs.MainCode.GDGroundObjects4.length = 0;
gdjs.MainCode.GDWaterObjects1.length = 0;
gdjs.MainCode.GDWaterObjects2.length = 0;
gdjs.MainCode.GDWaterObjects3.length = 0;
gdjs.MainCode.GDWaterObjects4.length = 0;
gdjs.MainCode.GDdialogueObjects1.length = 0;
gdjs.MainCode.GDdialogueObjects2.length = 0;
gdjs.MainCode.GDdialogueObjects3.length = 0;
gdjs.MainCode.GDdialogueObjects4.length = 0;
gdjs.MainCode.GDoptionsObjects1.length = 0;
gdjs.MainCode.GDoptionsObjects2.length = 0;
gdjs.MainCode.GDoptionsObjects3.length = 0;
gdjs.MainCode.GDoptionsObjects4.length = 0;
gdjs.MainCode.GDchat1Objects1.length = 0;
gdjs.MainCode.GDchat1Objects2.length = 0;
gdjs.MainCode.GDchat1Objects3.length = 0;
gdjs.MainCode.GDchat1Objects4.length = 0;
gdjs.MainCode.GDLandObjects1.length = 0;
gdjs.MainCode.GDLandObjects2.length = 0;
gdjs.MainCode.GDLandObjects3.length = 0;
gdjs.MainCode.GDLandObjects4.length = 0;
gdjs.MainCode.GDInfraObjects1.length = 0;
gdjs.MainCode.GDInfraObjects2.length = 0;
gdjs.MainCode.GDInfraObjects3.length = 0;
gdjs.MainCode.GDInfraObjects4.length = 0;
gdjs.MainCode.GDShadowObjects1.length = 0;
gdjs.MainCode.GDShadowObjects2.length = 0;
gdjs.MainCode.GDShadowObjects3.length = 0;
gdjs.MainCode.GDShadowObjects4.length = 0;
gdjs.MainCode.GDTree1Objects1.length = 0;
gdjs.MainCode.GDTree1Objects2.length = 0;
gdjs.MainCode.GDTree1Objects3.length = 0;
gdjs.MainCode.GDTree1Objects4.length = 0;
gdjs.MainCode.GDDetailsObjects1.length = 0;
gdjs.MainCode.GDDetailsObjects2.length = 0;
gdjs.MainCode.GDDetailsObjects3.length = 0;
gdjs.MainCode.GDDetailsObjects4.length = 0;
gdjs.MainCode.GDPlayButtonObjects1.length = 0;
gdjs.MainCode.GDPlayButtonObjects2.length = 0;
gdjs.MainCode.GDPlayButtonObjects3.length = 0;
gdjs.MainCode.GDPlayButtonObjects4.length = 0;
gdjs.MainCode.GDchat2Objects1.length = 0;
gdjs.MainCode.GDchat2Objects2.length = 0;
gdjs.MainCode.GDchat2Objects3.length = 0;
gdjs.MainCode.GDchat2Objects4.length = 0;
gdjs.MainCode.GDKaiObjects1.length = 0;
gdjs.MainCode.GDKaiObjects2.length = 0;
gdjs.MainCode.GDKaiObjects3.length = 0;
gdjs.MainCode.GDKaiObjects4.length = 0;
gdjs.MainCode.GDNPC1Objects1.length = 0;
gdjs.MainCode.GDNPC1Objects2.length = 0;
gdjs.MainCode.GDNPC1Objects3.length = 0;
gdjs.MainCode.GDNPC1Objects4.length = 0;
gdjs.MainCode.GDNPC2Objects1.length = 0;
gdjs.MainCode.GDNPC2Objects2.length = 0;
gdjs.MainCode.GDNPC2Objects3.length = 0;
gdjs.MainCode.GDNPC2Objects4.length = 0;
gdjs.MainCode.GDCustomCursorObjects1.length = 0;
gdjs.MainCode.GDCustomCursorObjects2.length = 0;
gdjs.MainCode.GDCustomCursorObjects3.length = 0;
gdjs.MainCode.GDCustomCursorObjects4.length = 0;

gdjs.MainCode.eventsList14(runtimeScene);
gdjs.MainCode.GDDialogueBoxObjects1.length = 0;
gdjs.MainCode.GDDialogueBoxObjects2.length = 0;
gdjs.MainCode.GDDialogueBoxObjects3.length = 0;
gdjs.MainCode.GDDialogueBoxObjects4.length = 0;
gdjs.MainCode.GDGroundObjects1.length = 0;
gdjs.MainCode.GDGroundObjects2.length = 0;
gdjs.MainCode.GDGroundObjects3.length = 0;
gdjs.MainCode.GDGroundObjects4.length = 0;
gdjs.MainCode.GDWaterObjects1.length = 0;
gdjs.MainCode.GDWaterObjects2.length = 0;
gdjs.MainCode.GDWaterObjects3.length = 0;
gdjs.MainCode.GDWaterObjects4.length = 0;
gdjs.MainCode.GDdialogueObjects1.length = 0;
gdjs.MainCode.GDdialogueObjects2.length = 0;
gdjs.MainCode.GDdialogueObjects3.length = 0;
gdjs.MainCode.GDdialogueObjects4.length = 0;
gdjs.MainCode.GDoptionsObjects1.length = 0;
gdjs.MainCode.GDoptionsObjects2.length = 0;
gdjs.MainCode.GDoptionsObjects3.length = 0;
gdjs.MainCode.GDoptionsObjects4.length = 0;
gdjs.MainCode.GDchat1Objects1.length = 0;
gdjs.MainCode.GDchat1Objects2.length = 0;
gdjs.MainCode.GDchat1Objects3.length = 0;
gdjs.MainCode.GDchat1Objects4.length = 0;
gdjs.MainCode.GDLandObjects1.length = 0;
gdjs.MainCode.GDLandObjects2.length = 0;
gdjs.MainCode.GDLandObjects3.length = 0;
gdjs.MainCode.GDLandObjects4.length = 0;
gdjs.MainCode.GDInfraObjects1.length = 0;
gdjs.MainCode.GDInfraObjects2.length = 0;
gdjs.MainCode.GDInfraObjects3.length = 0;
gdjs.MainCode.GDInfraObjects4.length = 0;
gdjs.MainCode.GDShadowObjects1.length = 0;
gdjs.MainCode.GDShadowObjects2.length = 0;
gdjs.MainCode.GDShadowObjects3.length = 0;
gdjs.MainCode.GDShadowObjects4.length = 0;
gdjs.MainCode.GDTree1Objects1.length = 0;
gdjs.MainCode.GDTree1Objects2.length = 0;
gdjs.MainCode.GDTree1Objects3.length = 0;
gdjs.MainCode.GDTree1Objects4.length = 0;
gdjs.MainCode.GDDetailsObjects1.length = 0;
gdjs.MainCode.GDDetailsObjects2.length = 0;
gdjs.MainCode.GDDetailsObjects3.length = 0;
gdjs.MainCode.GDDetailsObjects4.length = 0;
gdjs.MainCode.GDPlayButtonObjects1.length = 0;
gdjs.MainCode.GDPlayButtonObjects2.length = 0;
gdjs.MainCode.GDPlayButtonObjects3.length = 0;
gdjs.MainCode.GDPlayButtonObjects4.length = 0;
gdjs.MainCode.GDchat2Objects1.length = 0;
gdjs.MainCode.GDchat2Objects2.length = 0;
gdjs.MainCode.GDchat2Objects3.length = 0;
gdjs.MainCode.GDchat2Objects4.length = 0;
gdjs.MainCode.GDKaiObjects1.length = 0;
gdjs.MainCode.GDKaiObjects2.length = 0;
gdjs.MainCode.GDKaiObjects3.length = 0;
gdjs.MainCode.GDKaiObjects4.length = 0;
gdjs.MainCode.GDNPC1Objects1.length = 0;
gdjs.MainCode.GDNPC1Objects2.length = 0;
gdjs.MainCode.GDNPC1Objects3.length = 0;
gdjs.MainCode.GDNPC1Objects4.length = 0;
gdjs.MainCode.GDNPC2Objects1.length = 0;
gdjs.MainCode.GDNPC2Objects2.length = 0;
gdjs.MainCode.GDNPC2Objects3.length = 0;
gdjs.MainCode.GDNPC2Objects4.length = 0;
gdjs.MainCode.GDCustomCursorObjects1.length = 0;
gdjs.MainCode.GDCustomCursorObjects2.length = 0;
gdjs.MainCode.GDCustomCursorObjects3.length = 0;
gdjs.MainCode.GDCustomCursorObjects4.length = 0;


return;

}

gdjs['MainCode'] = gdjs.MainCode;
