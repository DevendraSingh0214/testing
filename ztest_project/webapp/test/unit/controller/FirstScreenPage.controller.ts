/*global QUnit*/
import Controller from "ztestproject/controller/FirstScreen.controller";

QUnit.module("FirstScreen Controller");

QUnit.test("I should test the FirstScreen controller", function (assert: Assert) {
	const oAppController = new Controller("FirstScreen");
	oAppController.onInit();
	assert.ok(oAppController);
});