window.onload = init

function init(){
    
    var conteudo = document.getElementById("conteudo");
    
    // Store user entered number between 1 and 4 in userNumber
    var userNumber = Number( prompt( "Enter a number between 1 and 4", "" ) );
    
    switch( userNumber ) {
        // If userNumber is 1, write out and carry on
        // executing after case statement
        case 1:
            conteudo.innerHTML= "Number 1" ;
            break;
        case 2:
            conteudo.innerHTML=( "Number 2" );
            break;
        case 3:
            conteudo.innerHTML=( "Number 3" );
            break;
        case 4:
           conteudo.innerHTML=( "Number 4" );
            break;
       case 5:
           conteudo.innerHTML=( "Number 5" );
            break;
        default:
            conteudo.innerHTML=( "Please enter a numeric value between 1 and 4." );
    }
    // Code continues executing here

}