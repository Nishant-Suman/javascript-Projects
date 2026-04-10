// function handleClick(){
//     const element = document.getElementById("first");
//     element.textContent = "i've to Learn coding";
// }


// BEKAAR  METHOD HAI ADDEVENTLISTNER KO USE KRNA CHAHIYE
const element = document.getElementById("first");
// element.onclick = function handleClick(){
//     element.textContent = "statement changed on clicking it";
// }

// element.onclick = function handleClick(){
//     element.textContent = "nothing Personal";
// }

// element.onclick = function handleClick(){
//     element.style.backgroundColor = "pink";
// }

element.addEventListener ('click', ()=>{
    element.textContent = "nothing Personal";
    element.style.backgroundColor = "brown";
})



const btn = document.getElementById("btn");

btn.addEventListener("dbclick", function body() {
   document.body.style.backgroundColor = "red";
   alert("Button clicked!");
//    if(document.body.style.backgroundColor == "red"){
//     document.body.style.backgroundColor = "green";
//    }else{
//     document.body.style.backgroundColor = "black"
//    }
});

