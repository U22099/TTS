import Time from "./time.js";
import Speech from "./speech.js";
import showToast from "./showToast.js";

export default class Model{
  runTime(){
    return Time();
  }
  runSpeech(text, options = {
    gender: "female", 
    lang: "en-US",
    volume: 80, 
    rate: "medium",
  }){
    if(!text){
      showToast("error", "Empty Input", "Please input something");
    }
    const speech =  window.speechSynthesis || speechSynthesis;
    speech.cancel();
    const utterance = Speech(text, options);
    if(utterance === false && text){
      showToast("error", "Error", "An error occured, please try again");
      return null;
    }
    return utterance;
  }
}