


window.onload=init;

function init()
{
     
    var link;

    link = createLink('http://www.ifsul.edu.br/',' IFSUL');
    link.onmouseover = init;
    //registra o evento onmouseover, guando o ponteiro do mouse passar 
    //pelo elemento será executada a função init
    appendLink(link,'conteudo');
}

//Função para criar um link
//LinkTarger - Recebe o destino do link
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
    //tempLink.setAttribute('id','link');
    tempLink.setAttribute('target','_blank');
    tempLink.appendChild(document.createTextNode(linkName));
    tempLink.appendChild(document.createElement('br'));
    return tempLink;
}

 
//Função para adicionar um link na página
//SourceLink - elemento link criado com o createLink()
//elementId - elemento onde será criado o link

function appendLink(sourceLink,elementId)
{
    var element=false;
    if (elementId==null || !document.getElementById(elementId))
    {
        element=document.body;
    }
    if(!element) {
        element=document.getElementById(elementId);
    }
    element.appendChild(sourceLink);
}

function clearText(elementId){
    var element=document.getElementById(elementId);
    element.innerHTML="";
    
}