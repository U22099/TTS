import getFromDOM from "./getFromDOM.js";
import writeToDOM from "./writeToDOM.js";
import getElement from "./getElement.js";

export default class View{
  runGetFromDOM(input, boolean = false){
    return getFromDOM(input, boolean);
  }
  runWriteToDOM(id, text){
    return writeToDOM(id, text);
  }
  runGetElement(id){
    return getElement(id);
  }
}