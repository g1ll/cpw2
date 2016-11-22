window.onload = init

function init(){
    
    var conteudo = document.getElementById("conteudo");
    var message="";
    var total=0;
    var userNumbers = new Array( );
    var userNum;
    var arrayIndex = 0;
    do {
        userNum = Number( prompt( "Enter a number, or 99 to exit", "99" ) );
        // Check that user input is a valid number,
        // and if not, break with error msg
        if ( isNaN( userNum )||(userNum<0 || userNum>99)) {
            conteudo.innerHTML=( "Invalid data entered: please enter a number between 0 and 99 in numerals" );
            continue;
            //break;
        }
        // If break has been activated, code will continue from here
        if(userNum!=99){
            userNumbers[arrayIndex] = userNum;
            arrayIndex++;
        }
    } while ( userNum != 99 )
    // Next statement after loop
        
    
    
    if(userNumbers.length==0)
        message = 0;
    message='<hr>You entered the following:<br>';   
    
    for ( var i = 0; i < arrayIndex; i++ ) {
        
        message += userNumbers[i];
        
        if(i < userNumbers.length-1)
            message+=" + ";
        
        total += userNumbers[i];
    }
    message += ' = ' + total;
    conteudo.innerHTML += message;
}