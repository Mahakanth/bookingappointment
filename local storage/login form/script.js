var formel=document.querySelector("form");

var display=document.querySelector(".display")


formel.addEventListener("submit", (event) => {
    let nameel=event.target.name.value;
    let mail=event.target.email.value;
    let phoneel =event.target.phone.value;

    var userdata= JSON.parse(localStorage.getItem("userdetails"))?? [];
    userdata.push({
        'name':nameel,
        'email':mail,
        'phone':phoneel
    })
    localStorage.setItem("userdetails",JSON.stringify(userdata));


    displaydata();

    
    event.preventDefault();
})

let displaydata =() =>{
    let user =JSON.parse(localStorage.getItem("userdetails")) ?? [];

    let finaldata ='';

    user.forEach((element,i) => {
        console.log(element);
        
        finaldata +=`<div class="display">
        <span>&times;</span>
        <h5>Name</h5>
        <div>${element.name}</div>

        <h5>Email</h5>
        <div>${element.email}</div>

        <h5>Phone Number</h5>
        <div>${element.phone}</div>
    </div>`
    });


    display.innerHTML=finaldata;

}
