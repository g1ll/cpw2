window.onload = init

function init(){
    
    var conteudo = document.getElementById("conteudo");
    
    var theBeatles = new Array( "John", "Paul", "George","Ringo" );
   // alert(theBeatles);
    
  
    for ( var loopCounter = 0; loopCounter < theBeatles.length; loopCounter++ ) {
        conteudo.innerHTML+= theBeatles[loopCounter] + "<br>" ;
    }
    
    conteudo.innerHTML+="<hr><b>Index Key:</b><br><br>"
    // Initialize theBeatles array and store in a variable
    var Beatles = new Array();
    //alert(Beatles.length);
    // Set the values using keys rather than numbers
    Beatles["Drummer"] = "Ringo"; 
    Beatles["SingerRhythmGuitar"] = "John";
    Beatles["SingerBassGuitar"] = "Paul";
    Beatles["SingerLeadGuitar"] = "George"; 
    //alert(Beatles.length);
    
    var key;
    // Write out each indexKey and the value for that
    // indexKey from the array
    for ( key in Beatles ) {
        conteudo.innerHTML+=( "key is " + key + "<br>" );
        conteudo.innerHTML+=( "item value is " + Beatles[key] + "<br><br>" );
    }

    
}