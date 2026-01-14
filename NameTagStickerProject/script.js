let wrapper = document.getElementsByClassName("wrapper")[0];
let template = document.getElementsByTagName("template")[0];

let names = ["Rishabh","Rudra","Krishna"];

let colors = [
    "#FF5733",
    "#33FF57",
    "#3357FF",
    "#F333FF",
    "#33FFF5",
    "#F5FF33",
    "#FF33A8",
    "#A833FF", "#33FFA8", "#FFA833", "#33A8FF",
    "#A8FF33", "#FF3380", 
    "#80FF33", "#3380FF", "#FF8033", "#8033FF"];

    let sticker = function(name){
        let div = template.content.querySelector("div");
        let nameOfStick = div.querySelector(".name");
        nameOfStick.innerHTML=name;
        

        div.style.background = colors[Math.floor(Math.random() * colors.length)];
        div.style.transform = "rotate("+(Math.random()*40 -20)+"deg)";

        let node = document.importNode(div, true);
        wrapper.appendChild(node); 

    }

    setTimeout(refreshPage,1000);

    function refreshPage(){
        location.reload();
    }

    names.forEach(sticker);