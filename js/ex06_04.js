
$(document).ready(init); //Método para esperar o carregamento da página
    
function init(){
  $.mask.definitions['^'] = '[+-]';
  $("#phone").mask("^(99) 9999-9999",{placeholder:"#"});
}

