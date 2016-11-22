window.onload = init

function init(){ 
    
    var elemento = document.getElementById("conteudo");
    
    // Ask the user for a number and try to convert the
    // input into a number
    var num = Number( prompt( "Enter a number between 1 and 10", "" ) );
    // If the value of userNumber is NaN, ask the user
    // to try again
    if ( isNaN( num ) ) {
        elemento.innerHTML =  "Please ensure a valid number is entered" ;
    // If the value is a number but over 10, ask the
    //user to try again
    } else if ( num > 10 || num < 1 ) {
        elemento.innerHTML =  "The number you entered is not between 1 and 10" ;
    // Otherwise the number is between 1 and 10 so
    // write to the page
    }else{
       elemento.innerHTML =  "The number you entered was " + num +"<br>";
       
       var div = document.getElementById('tabuada');
       
       for(var c=1;c<=10;c++){
           
         var resultado = num * c;
         div.innerHTML += num+"x"+c+"="+resultado+"<br>";
          
           
       }
      
    }
    












}