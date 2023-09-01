let form =document.getElementById("form");
window.addEventListener('load',() =>{
    updateDisplay();
})
form.addEventListener('click',()=>{
    let amount=document.getElementById('amount').value;
    let details=document.getElementById('details').value;

    localStorage.setItem('amount',amount);
    localStorage.setItem('details',details);
    updateDisplay();
})

function updateDisplay(){
    let display=document.getElementById("display");
    let details=localStorage.getItem("details");
    let amount=localStorage.getItem('amount');

    display.innerText=details +" "+amount;
    
}