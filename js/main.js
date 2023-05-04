let calcConteBotones__btn = document.getElementsByClassName('calcConteBotones__btn');
document.getElementById('range').addEventListener('click',(e)=>{
if(e.target.value == "1"){


    document.getElementById('calcTitulo').style.color="hsl(0, 0%, 100%)";
    document.getElementById('posNumerosUno').style.color="hsl(0, 0%, 100%)";
    document.getElementById('posNumerosDos').style.color="hsl(0, 0%, 100%)";
    document.getElementById('posNumerosTres').style.color="hsl(0, 0%, 100%)";
    document.getElementById('ndisplay').style.color="hsl(0, 0%, 100%)";
    document.getElementById('bdy').style.backgroundColor="hsl(222, 26%, 31%)";
    document.getElementById('calcConteBtn').style.backgroundColor="hsl(223, 31%, 20%)";
    document.getElementById('displayCalc').style.backgroundColor="hsl(224, 36%, 15%)";
    for(let i=0;i<calcConteBotones__btn.length;i++){
        calcConteBotones__btn[i].setAttribute('style','background-color:hsl(30, 25%, 89%); color: hsl(221, 14%, 31%); border:0')
    }
    document.getElementById('del').style.backgroundColor="hsl(225, 21%, 49%)";
    document.getElementById('del').style.color="hsl(0, 0%, 100%)";

    document.getElementById('reset').style.backgroundColor="hsl(225, 21%, 49%)";
    document.getElementById('reset').style.color="hsl(0, 0%, 100%)";
    document.getElementById('resultado').style.backgroundColor="hsl(6, 63%, 50%)";
    document.getElementById('resultado').style.color="hsl(0, 0%, 100%)";
    

}else if(e.target.value =="2"){


    document.getElementById('calcTitulo').style.color="hsl(60, 10%, 19%)";
    document.getElementById('posNumerosUno').style.color="hsl(60, 10%, 19%)";
    document.getElementById('posNumerosDos').style.color="hsl(60, 10%, 19%)";
    document.getElementById('posNumerosTres').style.color="hsl(60, 10%, 19%)";
    document.getElementById('ndisplay').style.color="hsl(60, 10%, 19%)";
    document.getElementById('bdy').style.backgroundColor="hsl(0, 0%, 90%)";
    document.getElementById('calcConteBtn').style.backgroundColor="hsl(0, 5%, 81%)";
    document.getElementById('displayCalc').style.backgroundColor="hsl(0, 0%, 93%)";
    for(let i=0;i<calcConteBotones__btn.length;i++){
        calcConteBotones__btn[i].setAttribute('style','background-color:hsl(30, 25%, 89%); color: hsl(60, 10%, 19%); border:0')
    }
    document.getElementById('del').style.backgroundColor="hsl(185, 42%, 37%)";
    document.getElementById('del').style.color="hsl(0, 0%, 100%)";

    document.getElementById('reset').style.backgroundColor="hsl(185, 42%, 37%)";
    document.getElementById('reset').style.color="hsl(0, 0%, 100%)";
    document.getElementById('resultado').style.backgroundColor="hsl(25, 98%, 40%)";
    document.getElementById('resultado').style.color="hsl(0, 0%, 100%)";

    
}
else {
    
    document.getElementById('calcTitulo').style.color="hsl(52, 100%, 62%)";
    document.getElementById('posNumerosUno').style.color="hsl(52, 100%, 62%)";
    document.getElementById('posNumerosDos').style.color="hsl(52, 100%, 62%)";
    document.getElementById('posNumerosTres').style.color="hsl(52, 100%, 62%)";
    document.getElementById('ndisplay').style.color="hsl(52, 100%, 62%)";
    document.getElementById('calcTitulo').style.color="hsl(52, 100%, 62%)";
    document.getElementById('bdy').style.backgroundColor="hsl(268, 75%, 9%)";
    document.getElementById('calcConteBtn').style.backgroundColor="hsl(268, 71%, 12%)";
    document.getElementById('displayCalc').style.backgroundColor="hsl(268, 71%, 12%)";

   


    for(let i=0;i<calcConteBotones__btn.length;i++){
        calcConteBotones__btn[i].setAttribute('style','background-color:hsl(268, 47%, 21%); color: hsl(52, 100%, 62%); border:0')
    }

    document.getElementById('del').style.backgroundColor="hsl(281, 89%, 26%)";
document.getElementById('del').style.color="hsl(0, 0%, 100%)";
document.getElementById('reset').style.backgroundColor="hsl(281, 89%, 26%)";
document.getElementById('reset').style.color="hsl(0, 0%, 100%)";
document.getElementById('resultado').style.backgroundColor="hsl(176, 100%, 44%)";
document.getElementById('resultado').style.color="hsl(198, 20%, 13%)"
}



});


let ndisplay = document.getElementById('ndisplay');
let cadenaDisplay="";
let cadenaDisplayDos="";
let posSuma;
function display(e){
    if(e == "RESET"){
        cadenaDisplay="0";
        ndisplay.textContent=cadenaDisplay;
    }else if(e == "DEL"){

        cadenaDisplay=  cadenaDisplay.toString();
        cadenaDisplay = cadenaDisplay.slice(0,cadenaDisplay.length-1)
        ndisplay.textContent= cadenaDisplay;
    }else if(e=="="){
        if(cadenaDisplay !=""){
            if(cadenaDisplay.includes("+")){
                posSuma = cadenaDisplay.indexOf("+");
                let parteUno = cadenaDisplay.substring(0,posSuma);
                let parteDos = cadenaDisplay.substring(posSuma+1,cadenaDisplay.length)
                cadenaDisplay = parseFloat(parteUno) + parseFloat(parteDos);
                ndisplay.textContent=cadenaDisplay;
            }else if(cadenaDisplay.includes("-")){
                posSuma = cadenaDisplay.indexOf("-");
                let parteUno = cadenaDisplay.substring(0,posSuma);
                let parteDos = cadenaDisplay.substring(posSuma+1,cadenaDisplay.length)
                cadenaDisplay = parseInt(parteUno) - parseInt(parteDos);
                ndisplay.textContent=cadenaDisplay;
            }else if(cadenaDisplay.includes("*")){
                posSuma = cadenaDisplay.indexOf("*");
                let parteUno = cadenaDisplay.substring(0,posSuma);
                let parteDos = cadenaDisplay.substring(posSuma+1,cadenaDisplay.length)
                cadenaDisplay = parseInt(parteUno) * parseInt(parteDos);
                ndisplay.textContent=cadenaDisplay;
            }else if(cadenaDisplay.includes("/")){
                posSuma = cadenaDisplay.indexOf("/");
                let parteUno = cadenaDisplay.substring(0,posSuma);
                let parteDos = cadenaDisplay.substring(posSuma+1,cadenaDisplay.length)
                cadenaDisplay = parseInt(parteUno) / parseInt(parteDos);
                ndisplay.textContent=cadenaDisplay;
            }
           
        }
    }else{
              if(cadenaDisplay == "0"){
            cadenaDisplay="";
            cadenaDisplay += e;
        ndisplay.textContent=cadenaDisplay;
        }else{
      
            cadenaDisplay += e;
            ndisplay.textContent=cadenaDisplay;
        }
    }
}
for(let i=0; i<calcConteBotones__btn.length;i++){
    calcConteBotones__btn[i].addEventListener('click',(e)=>{
        display(e.target.textContent);
    });
}

 