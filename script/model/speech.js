export default function Speech(text, options){
  console.log("Start");
  if(!text || !options){
    return false;
  }
  //Uses object destructuring to destructure ths options properties
  const {
    gender,
    lang,
    volume,
    rate,
    prevSpeech
  } = options;
  
  //Initialise a speech synthesiser
  const speech =  window.speechSynthesis || speechSynthesis;
  
  //Initalise an utterance
  const utterance = new SpeechSynthesisUtterance()
  //declaring a varible to hold filtered vouces
  const voice = getVoices(gender, lang, speech);
  
  //Checks if voice is present elss leave defailt
  if(voice) utterance.voice = voice;
  //Sets volume
  utterance.volume = volume/100;
  //Sets speech rate
  utterance.rate = getRate(rate);
  //Sets text
  utterance.text = text;
  
  try{
    //Cancels any previous speech object
    if(prevSpeech) prevSpeech.cancel();
    //Speaks the content
    speech.speak(utterance);
    //returns current speech and utternce
    return {speech, utterance};
  } catch (err){
    //Error handling
    console.log("Speech Synthesis failed with error: ", err);
    return false;
  }
}

function getVoices(gender, lang, speech){
  if(!speech.getVoices()) return false;
  //Gets voices and filter according to gender and lang input returning the result
  return speech.getVoices().filter(x => ((x.gender === gender&&x.lang === lang) || x.gender === gender || x.lang === lang || x.name.includes(gender.toUpperCase())))[0];
}

function getRate(rate){
  //A switch statement to assign speech rate according to rate value
  switch(rate){
    case "slow":
      return 0.5;
    case "mslow":
      return 0.8;
    case "medium":
      return 1;
    case "mfast":
      return 1.3;
    case "fast":
      return 1.5;
    case "vfast":
      return 2;
    default:
      return 1;
  }
}