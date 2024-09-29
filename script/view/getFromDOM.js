export default function getFromDOM(input, boolean){
  //Returns radio tags value
  if(boolean){
    return document.querySelector(`input[name="${input}"]:checked`)?.value;
  }
  //Returns for other elements
  return document.getElementById(input)?.value
}