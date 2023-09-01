const containerel=document.querySelector(".container");
for (let index = 0; index < 30; index++) {
    const colorcontainer =document.createElement("div");

    colorcontainer.classList.add("color");
    containerel.appendChild(colorcontainer); 

}

const colorcontainerel=document.querySelectorAll(".color");

generatecolor();
function generatecolor(){
    colorcontainerel.forEach( (colorcontainer)=>{
        const newColorcode =randomcolor();
        
        colorcontainer.style.backgroundColor = "#" + newColorcode;
        colorcontainer.innerText = "#" +newColorcode
    })

}

randomcolor();

function randomcolor(){
    const chars="0123456789abcdef";


    const colorcodelength=6;


    let colorcode="";

    for (let index = 0; index < colorcodelength; index++) {
        const randomnum = Math.floor(Math.random() * chars.length);
        colorcode +=chars.substring (randomnum,randomnum+1);
  
        
    }
    return colorcode;
}