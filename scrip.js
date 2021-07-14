// step 1 
const ShowWatch = () => {
    let dates = new Date();
    // UTC format 
    // let hr = format(dates.getHours());
    // let min = format(dates.getMinutes());
    // let sec = format(dates.getSeconds());
    // let complete = `${hr},${min},${sec}`
    // no UTC format 
  let times = dates.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second:'numeric', hour12: true })
    // remplace time to complete 
    document.getElementById('time').innerHTML = times    
    // step 3 add days and months
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Agust', 'September', 'October', 'November', 'December'];
    const days = ['sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
    // here start 0 sun 1 mon ...... in array
    let weekdays = days[dates.getDay()]
    let num = dates.getDate()
    let month = months[dates.getMonth()]
    // let year = new Date().getFullYear()
    let date = `${weekdays},${num},${month}`
    document.getElementById('date').innerHTML = date
}
// step 2 add format time 
const format = (time) => {
    if (time < 10)
        // add a 0 if time is menor that 10 
        time = '0' + time;
    return time;
    
}
// step 1 
setInterval(ShowWatch, 1000);















// let time = new Date();
// console.log(
//   time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
// );
