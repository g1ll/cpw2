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
//alert(document.getElementById('conteudo'));
/**
 * Função init() é executada depois que o evento onload for
 * disparado, ou seja, após o carregamento completo da página
 */
function init(){

    alert(document.getElementById('prof').innerHTML);
    //Variável message com dado do tipo String
    var message = "<img src='../img/ifsulcasl.jpg'></img>" 
    
    //Método alert(), cria uma caixa de diálogo com a mensagem passada por parametro
    window.alert(message);
    
    /**
     * Objeto Document do DOM representa o documento HTML
     * O método getElementById(id) retorna um Objeto Element encontrado pelo seu
     * id. A váriavel div armazena um objeto do tipo Element do DOM
     * Objetos DOM Element representam um elemento do documento
     * HTML, como uma <div> ou qualquer tag.
     *      * 
     */
    var elemento = document.getElementById("conteudo");
    
    alert(elemento.innerHTML);
    
    //Propriedade innerHTML usada para atribuir um conteúdo ao elemento div
    elemento.innerHTML = message;
    
}



