$(document).ready(inicia);

function inicia(){
    $('#form').submit(submeter);
    listar();
}

function submeter(){
    cadastra();
    return false;
}

function cadastra() {
   
    var nome = $('#nome').val();
    var artista = $('#artista').val();
        
    $.ajax(
    {
        type:'POST',
        data:{
            album:nome,
            artista:artista
        },
        url: 'inserir.php',
        dataType: 'html',
            
        success: function(rphp, textStatus) {
            $('#resposta').html(rphp);
            listar();
        },
        error: function(xhr, textStatus, errorThrown) {
            $('#resposta').html('An error occurred! ' + ( errorThrown ? errorThrown:xhr.status ));
        }
    });
    
}

function listar() {
    $.ajax(
    {
        type: 'POST',
        url: 'lista.php',
        dataType: 'html',
            
        success: function(resposta_php, textStatus) {
            $('#lista').html(resposta_php);
        },
        error: function(xhr, textStatus, errorThrown) {
            $('#resposta').html('An error occurred! ' + ( errorThrown ? errorThrown:xhr.status ));
        }
    });
}
