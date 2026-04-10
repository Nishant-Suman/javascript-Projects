const result = document.getElementById('result');
setInterval(()=>{
    const currentTime = Date.now();
const olyampicTime = new Date(2026,4,9).getTime();


let timer = (olyampicTime- currentTime);

const day = Math.floor((timer)/(1000*60*60*24));
timer%=1000*60*60*24;

const hrs = Math.floor((timer)/(1000*60*60));
timer%=1000*60*60;

const min = Math.floor((timer)/(1000*60));
timer%=1000*60;

const sec = Math.floor((timer)/(1000));
timer%=1000;

result.textContent = `Result : ${day}:days ${hrs}:hrs ${min}:min ${sec}:sec`;
result.style.fontSize = "25px";
},1000);
