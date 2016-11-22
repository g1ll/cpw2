/* 11/03/2013 
 * IFSUL - Campus Santana do Livramento
 * Curso Técnico em Informática para Internet
 * Disciplina: Construção de Páginas para Web II
 * Prof Gill Velleda Gonzales
 * 
 * Exemplo 01 - Introdução ao JavaScript
 * 
 * 
 */


/* DOM Windon Object: Este objeto DOM representa a janela
 * do navegador web, possui vários métodos e propriedades
 * para interface com o navegador. 
 */

window.onload = init
/**
 * Usando o evento onload para a executar a função init, 
 * a qual será executada após o carregamento e renderizaçao
 * de todos os objetos da página.
 */

/**
 * Função init() é executada depois que o evento onload for
 * disparado, ou seja, após o carregamento completo da página
 */
function init(){
    //Quardar na variável conteúdo um elemento HTML com id "conteudo"
    var elemento = document.getElementById("conteudo");
    
    //scape para \'  scape para nova linha \n scape para tab \t
    var texto = 'Paul\'s characters \nScape para nova linha \n\tScape para TAB'
    
    
    //Também é possível imprimir caracteres com o seu respectivo 
    //código ASCII de 0 a 254, mas em formato hexdecimal de 00 a FF
    //utilizando o scape \x
    //O que vai ser escrito??
        texto += '\n\x43\x50\x57\x49\x49\n';
   
   
       texto += "\x47\x69\x6C\x6C\x20\x56\x65";
       texto += "\x6C\x6C\x65\x64\x61\x20\x47";
       texto += "\x6F\x6E\x7A\x61\x6C\x65\x73";
    
    //Testando scapes sequences 
    
    elemento.innerHTML = '<pre>'+texto+'</pre>';
    
    window.alert(texto);
         
}



