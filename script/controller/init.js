export default class Controller{
  
  constructor(model, view){
    this.model = model;
    this.view = view;
    setInterval(() => {
        this.showTime();
    }, 1000);
    this.btn = document.getElementById("btn");
    this.btn.addEventListener("click", () => this.run());
  }
  
  showTime(){
    const { hour, min, sec, meridian } = this.model.runTime();
    this.view.runWriteToDOM("hr", hour);
    this.view.runWriteToDOM("m", min);
    this.view.runWriteToDOM("s", sec);
    this.view.runWriteToDOM("md", meridian);
  }
  
  run(){
    const { text, options } = this.getElements();
    const utterance = this.model.runSpeech(text, options);
    this.streamText(utterance);
  }
  
  getElements(){
    const text = this.view.runGetFromDOM("input");
    const gender = this.view.runGetFromDOM("gender", true);
    const lang = this.view.runGetFromDOM("lang", true);
    const volume = this.view.runGetFromDOM("volume");
    const rate = this.view.runGetFromDOM("rate");
    console.log(text, gender, lang, volume, rate)
    return { text, options: {
      gender, lang, volume, rate
    } }
  }
  
  streamText(utterance){
    let textStream = '';
    utterance.onboundary = (event) => {
      textStream = utterance.text.substring(event.charIndex, event.charIndex + event.charLength);
      this.stream(textStream);
    }; 
    utterance.onend = (event) => {
      textStream = utterance.text
      this.stream(textStream);
    };
  }
  
  stream(text){
    this.view.runWriteToDOM("output", text);
  }
}