let Parent = document.getElementById("parent");
Parent.addEventListener('click',(e)=>{
    
    let child = e.target;
    console.log(child.id);
    let body = document.querySelector('body');
    body.style.backgroundColor = child.id;
})