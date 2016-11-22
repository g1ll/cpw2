

$(document).ready(init); //Método para esperar o carregamento da página
    
function init(){	        
    alert(
        //Primeira forma e mais utilizada
        "Seletor CSS \n"+
        $('#conteudo').text()
    );
        
    alert(
        //Segunda forma
        "Seletor DOM HMTL \n"+
        $(document.getElementById('conteudo')).text()
    );
}


