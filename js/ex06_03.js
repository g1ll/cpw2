
$(document).ready(init); //Método para esperar o carregamento da página
    

function init(){
var min = 10;
$("#commentForm").validate({
        rules: {
            name: {
                required: true,
                minlength: min
            },
            email: {
                required: true,
                email: true
            },
            url:{
                required: true,   
                url: true
            },
            comment:{
                required:true
            }
        },
        messages:{
            name:{
                required: "Campo Obrigatório",
                minlength: "Pelo menos "+min+" caracteres!!"
            },
            email: {
                required: "Campo Obrigatório",
                email: "Não é um email válido!!"
            },
            url: {
                required: "Campo Obrigatório!!",
                url: "Não é uma URL válida!!"
            },
            comment:{
                required: "Campo Obrigatório!!"
            }
        }     
    });
    

}


