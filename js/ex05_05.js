 

$(document).ready(init); //Método para esperar o carregamento da página
    
function init(){	
    $('#conteudo')// Seleciona a div com id #contedo
    .text('<strong>Olá Mundo!!!</strong>.'); // adiciona o html

   alert($('#conteudo').text()); //Acessa o HTML da div COnteudo    
}


