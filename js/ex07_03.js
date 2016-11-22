$(document).ready(init);

function init() {

    $('#example').dataTable(
    {        
        "sPaginationType": "full_numbers",//mostrar todas páginas na navegação
        "bProcessing": true, //mostrar mensagem de processamento
        "bServerSide": true, //atualização com servidor
        "sAjaxSource": "processa_usuario.php" //requisição ajax
    } );
}
