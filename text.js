document.addEventListener("DOMContentLoaded" , ()=>{
    setInterval(showTime,1000);
});
const showTime =()=>{
var data=new Date();
 var hour=data.getHours();
 var min=data.getMinutes();
 var sec=data.getSeconds();
 hour=hour<10 ? `0${hour}`:hour;
 min=min<10 ? `0${min}`:min ;
 sec=sec<10 ? `0${sec}`:sec;
//  check time
 document.getElementById("time").innerHTML=`${hour}:${min}:${sec}`;
//  change Timeformat
 document.getElementById("timeformat").innerHTML= hour > 12 ? "PM":"AM";
}