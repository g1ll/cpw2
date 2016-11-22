

$(document).ready(init); //Método para esperar o carregamento da página
    
function init(){	        
    
    var html = "<p><a href='http://google.com'>google</a></p>";
    $(html).appendTo('#conteudo');//Adiciona os novos elementos ao documento HTML
    
    //Exibe o valor do atributo href do elemento
    alert( $('a').attr('href') );
    
    var link = prompt('digite o endereço:');

    //Método attr altera o atributo do elemento
    $('a').attr('href',link);
    
    var nome = prompt('Digite o nome para o link');
    
    $('a').text(nome);
    
    //Seleciona o elemento e depois cria o HTML para a substituição
    $('a').replaceWith('<p>'+nome+'</p>');
    
    //Cria o conteúdo HTML e depois seleciona o elemento onde será substituido
    $('<a href="'+link+'">'+nome+'</a>').replaceAll('p');
}


