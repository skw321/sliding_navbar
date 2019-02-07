function calcTime(city, offset) {
    let d = new Date();
  
    let utc = d.getTime() + d.getTimezoneOffset() * 60000;
  
    let nd = new Date(utc + 3600000 * offset);
  
    return "The local time in " + city + " is " + nd.toLocaleString();
  }
  
  export default calcTime;
  