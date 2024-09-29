import Model from "/script/model/init.js";
import View from "/script/view/init.js";
import Controller from "/script/controller/init.js";


//Intialising
const model = new Model();
const view = new View();
const controller = new Controller(model, view);

controller.init();