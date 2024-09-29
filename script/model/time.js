export default function Time(){
  //Initialises A Date
  const date = new Date();
  //Gets hours
  const hours = date.getHours();
  //Converts to 12-hr format and add padStart for ie 01, 02...
  const hour = hours < 13 ? hours.toString().padStart(2, "0") : (hours - 12).toString().padStart(2, "0");
  //Gets minutes and add padStart for ie 01,02...
  const min = date.getMinutes().toString().padStart(2, "0");
  //Gets seconds and add padStart for ie 01, 02...
  const sec = date.getSeconds().toString().padStart(2, "0");
  //Gets meridian
  const meridian = hours < 13 ? "AM" : "PM";
  //Testing...
  //console.log(`${hour}:${min}:${sec} ${meridian}`)
  //Returns an object with the time values
  return {hour, min, sec, meridian}
}