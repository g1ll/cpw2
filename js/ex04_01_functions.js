 
window.onload=start;

function start()
{
     
    var link;
    
    for(i=0;i<5;i++){
        
        link = createLink('http://www.ifsul.edu.br/' , i+' IFSUL');
        appendLink(link,'conteudo');
    
   }
   
   //Criar link google
   alert(link);
   var lnkgoogle = createLink('http://google.com', 'Google');
   appendLink(lnkgoogle,'conteudo');
   
   //Criar link facebook
   appendLink(createLink('http://facebook.com', 'Facebbok'),'conteudo');
   
       
}


//Função para criar um link
//LinkTarget - Recebe o destino do link
//LinkName - Nome do link
function createLink(linkTarget,linkName)
{
    if (linkTarget == null) {//Se for null o padrão é #
        linkTarget = '#';
    }
    if (linkName == null) {// Se for null o padrão é 'dummy'
        linkName = 'dummy';
    }
    
    var tempLink=document.createElement('a');
    tempLink.setAttribute('href',linkTarget);
    tempLink.appendChild(document.createTextNode(linkName));
    tempLink.appendChild(document.createElement('br'));
    return tempLink;
}


//Função para adicionar um link na página
//SourceLink - elemento link criado com o createLink()
//elementId - elemento onde será criado o link

function appendLink(sourceLink,elementId)
{
    var element=document.getElementById(elementId);
    element.appendChild(sourceLink);
}