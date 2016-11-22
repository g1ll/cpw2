
$(document).ready(init); //Método para esperar o carregamento da página
    
function init(){
    
    var limite = 10;
    
    $("#commentForm").validate({
        rules:{
            nome:{
                required: true,
                minlength:limite
            },
            email:{
                 required: true,
                 email: true
            },
            url:{
                url:true
            },
            comment:{
              required:true,
              minlength:limite,
              maxlength:limite
            }
        }
    });
    

}


