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
    
    var mensagem = "Digite o texto de alerta!! ";
    
    var padrao = "Alerta!!";
    
    var texto = prompt(mensagem,padrao);
    
    //Método alert(), cria uma caixa de diálogo com a mensagem passada por parametro
    alert(texto)
    
    var conteudo = document.getElementById('conteudo');
    
    conteudo.innerHTML = texto;
     
      
}



