/* 11/03/2013 
 * IFSUL - Campus Santana do Livramento
 * Curso Técnico em Informática para Internet
 * Disciplina: Construção de Páginas para Web II
 * Prof Gill Velleda Gonzales
 * 
 * Exemplo 01 - Variáveis
 * 
 * 
 */



window.onload = init

function init(){
   
    var numero = prompt("Digite um número:");
    var myCalc = 1 + Number(numero);
    var conteudo = document.getElementById("conteudo");
    conteudo.innerHTML = "O número calculado é: " + myCalc;

    
    
}

