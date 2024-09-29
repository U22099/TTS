export default function writeToDOM(id, text){
  if(!id) return false;
  document.getElementById(id)?.value = text;
  return true;
}