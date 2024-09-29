import getFromDOM from "./getFromDOM.js";
import writeToDOM from "./writeToDOM.js";

export default class View{
  runGetFromDOM(input, boolean = false){
    return getFromDOM(input, boolean);
  }
  runWriteToDOM(id, text){
    return writeToDOM(id, text);
  }
}