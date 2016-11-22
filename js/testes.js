/* 11/03/2013 
 * IFSUL - Campus Santana do Livramento
 * Curso Técnico em Informática para Internet
 * Disciplina: Construção de Páginas para Web II
 * Prof Gill Velleda Gonzales
 * 
 * Testes de código
 * Uso de Eventos e Manipulação de estilos
 * 
 */


window.onload = init;
var message = "Olá, Mundo!!"
function init(){
    
    window.alert(message)
    var div = createDiv()
    div.innerHTML = message
    div.addEventListener('click', moveDiv, false)
  
}

function createDiv(){
    var newdiv=document.createElement("div");
    newdiv.setAttribute("id", "conteudo");
    document.body.appendChild(newdiv);
    return newdiv;
}

function moveDiv(){  
    var div = document.getElementById("conteudo");              
    div.innerHTML= message + "<font size=1 color='blue'><br>Ops !! Grudou...!!</font>"
    document.addEventListener('mousemove', getMouseXY, false)
    
}

function getMouseXY(event){
    var div = document.getElementById("conteudo"); 
    var divTop = document.getElementById("topo"); 
    div.style.position = 'absolute';
    div.style.left=(event.clientX-50)+"px";
    div.style.top=(event.clientY-10)+"px";
    div.style.backgroundColor = "#83f77b";
    divTop.style.color = "#83f77b";
    div.style.width= "100px";
    document.addEventListener('click',stopDrag,false);
    
}

function stopDrag(){
    var div = document.getElementById("conteudo"); 
    var divTop = document.getElementById("topo"); 
    div.style.backgroundColor = "";
    divTop.style.color = "blue";
    div.innerHTML = message +"<font size=3 color='green'><br>"+div.style.left+" "+div.style.top+"</font>";
    document.removeEventListener('mousemove', getMouseXY, false)
    document.removeEventListener('click', stopDrag, false)
}