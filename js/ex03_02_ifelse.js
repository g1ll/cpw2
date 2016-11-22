window.onload = init

function init(){
    var conteudo = document.getElementById("conteudo");
    var euroToDollarRate = 1.72;
    // Try to convert the input into a number
    var eurosToConvert = Number(prompt( "How many Euros do you wish to convert", "" ) );
    // If the user hasn't entered a number, then NaN
    // will be returned
    if ( isNaN( eurosToConvert ) ) {
        // Ask the user to enter a value in numerals
        conteudo.innerHTML =  "Please enter the number in numerals" ;
    // If NaN is not returned, then we can use the input
    } else {
        // and do the conversion as before
        var dollars = eurosToConvert * euroToDollarRate;
        conteudo.innerHTML = eurosToConvert + " euros is " + dollars + " dollars" ;
    }
}