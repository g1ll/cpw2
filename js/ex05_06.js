
$(document).ready(init); //Método para esperar o carregamento da página
    
function init(){
    
    var mensagem = "<i>Olá Mundo!!!</i>" ; 
    
    alert(mensagem);
    
    $('#conteudo').html(mensagem);
    
    alert($('#conteudo').html());

}


