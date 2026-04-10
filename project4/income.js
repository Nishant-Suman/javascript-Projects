const form = document.querySelector('form');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const amount = parseInt(document.getElementById("income").value);
    const result = document.querySelector('h2');
    let totalTax = 0;
    if(amount<=1200000){
         totalTax = 0;
    }
    else if(amount<=1600000){
        totalTax = (amount-1600000)*0.05+80000;
    }
    else if(amount<=2000000){
        totalTax = (amount - 2000000)*0.1+80000+200000;
    }
    else{
        totalTax = (amount)*0.15+200000+80000;
    }
        
    result.textContent = `Total Tax : ${totalTax}rs`;
    form.reset();

})