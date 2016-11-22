/**
 * Estes Operadores todos trabalham com dados do tipo string ou numéricos e são 
 * todos case-sensitive
 */
window.onload = start

function start(){
    var conteudo = document.getElementById('conteudo');
    conteudo.innerHTML= "1 - \"Apple\" == \"Apple\" : "+("Apple" == "Apple")+"<br>"; 
    //Apple é igual a Apple
    conteudo.innerHTML+= "2 - \"Apple\" < \"Banana\" : "+("Apple" < "Banana")+"<br>";
    //Apple - A em ascii é 65
    //Banana - B em ascci é 66
    //então Apple é menor que Banana
    conteudo.innerHTML+= "3 \"apple\" < \"Banana\" : "+("apple" < "Banana")+"<br>";
    // Porém:
    // apple - a (minusculo) é 97 em ascci
    // portanto será maior que Banana
   
    //Resolvendo o problema do ASCII
    var string1 = "apple";
    var string2 = "Banana";
    string1 = string1.toLowerCase( );
    string2 = string2.toLowerCase( );
    
    conteudo.innerHTML+= "4 - string1 < string2 : "+(string1 < string2)+"<br>";
    
    //Como funciona com objetos
    string1 = new String( "Apple" );
    string2 = new String( "Apple" );
    
    conteudo.innerHTML+= "5 - string1 == string2 : "+(string1 == string2)+"<br>";
    conteudo.innerHTML+= "6 - string1.valueOf() == string2.valueOf() : "+(string1.valueOf() == string2.valueOf())+"<br>";
    
   
}

