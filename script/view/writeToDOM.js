export default function writeToDOM(id, text){
  if(!id) return false;
  const element = document.getElementById(id)
  if(element){
    element.innerHTML = text;
    return true;
  } else {
    return false;
  }

}