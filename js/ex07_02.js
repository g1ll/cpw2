$(document).ready(init);

function init() {
    $('#ajax').mouseover(requestAjax);
    $('#real').mouseover(requestReal);
}

function requestAjax() {
   $('#ajax').css('background-color',$('#conteudo').css('background-color'));
   $('#real').css('background-color','white'); 
    
    $.ajax(
    {
        type: 'POST',
        data:{time:'ajax'},
        url: 'mysql/teste_ajax_banco.php',
        dataType: 'html',
            
        success: function(html, textStatus) {
            $('#conteudo').html(html);
            
        },
        error: function(xhr, textStatus, errorThrown) {
           $('#conteudo').html('An error occurred! ' + ( errorThrown ? errorThrown:xhr.status ));
        }
    });
}

function requestReal() {
    
    $('#real').css('background-color',$('#conteudo').css('background-color'));
    $('#ajax').css('background-color','white');
    
    $.ajax(
    {
        type: 'POST',
        data:{time:'real'},
        url: 'mysql/teste_ajax_banco.php',
        dataType: 'html',
            
        success: function(html, textStatus) {
            $('#conteudo').html(html);
            
        },
        error: function(xhr, textStatus, errorThrown) {
            $('#conteudo').html('An error occurred! ' + ( errorThrown ? errorThrown:xhr.status ));
        }
    });
}