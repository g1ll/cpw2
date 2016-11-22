$(document).ready(init);

function init() {
    $('#ajax').mouseover(requestAjax);
    $('#real').mouseover(requestReal);
}

function requestAjax() {
    $.ajax(
    {
        type: 'GET',
        data:{time:'ajax'},
        url: 'teste_ajax.php',
        dataType: 'html',
            
        success: function(content, textStatus) {
            
            $('#conteudo').html(content);
            $('#ajax').css('background-color',$('#conteudo').css('background-color'));
            $('#real').css('background-color','white');
        }, 
        error: function(xhr, textStatus, errorThrown) {
           $('#conteudo').html('An error occurred! ' + ( errorThrown ? errorThrown:xhr.status ));
        }
    });
}


function requestReal() {
    
    $.ajax(
    {
        type: 'GET',
        data:{time:'real'},
        url: 'teste_ajax.php',
        dataType: 'html',
            
        success: function(html, textStatus) {
            $('#conteudo').html(html);
            $('#real').css('background-color',$('#conteudo').css('background-color'));
            $('#ajax').css('background-color','white');
        },
        error: function(xhr, textStatus, errorThrown) {
            $('#conteudo').html('An error occurred! ' + ( errorThrown ? errorThrown:xhr.status ));
        }
    });
}