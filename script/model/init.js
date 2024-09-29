import Time from "./time.js";
import Speech from "./speech.js";
import showToast from "./showToast.js";

export default class Model{
  constructor(){
    this.prevSpeech = null;
  }
  runTime(){
    return Time();
  }
  runSpeech(text, options = {
    gender: "female", 
    lang: "en-US",
    volume: 80, 
    rate: "medium",
    prevSpeech: this.prevSpeech
  }){
    const object = Speech(text, options) || {prevSpeech: false, utterance: false};
    this.prevSpeech = object.prevSpeech;
    if(!this.prevSpeech){
      showToast("error", "Error", "An error occured, please try again");
    }
    return object.utterance;
  }
}