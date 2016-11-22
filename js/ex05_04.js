$(document).ready(function () {
    $("#remove").click(function () {
        $('.um .apaga').remove();
    });    
});

function removeImpares(){
        $('.dois .apaga').remove();
}

function removeAll() {
    $('ul').remove();
}
    