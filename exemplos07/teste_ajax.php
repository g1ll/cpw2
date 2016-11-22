<?php
 
$ajax =  "
<br>Nome :	Ajax
<br>Ano de Fundação :	1900teste_ajax
<br>Cidade :	Amsterdam  ver
<br>País :	 Holanda
<br>Estádio	: Amsterdam Arena
<br>Lotação: 52380
<br>Presidente :	Uri Coronel
<br>Web :	http://www.ajax.nl/
<br>Marca Equipamento :	Adidas
<br>Patrocínio :	Aegon
<br>Títulos	: 66 títulos oficiais
<br>Rankings 
<br>UEFA: 35 [2011/12]  |  IFFHS: 80 [Abril]
<br>Tops Equipes	
<br>Europa: Mais gols de reservas (2º)
<br>Europa: Máx. vitórias consecutivas (2º)
<br>Europa: Melhor Ataque (3º)
<br><a href='http://www.ogol.com.br/equipa.php?id=143&epoca_id=141' target='_blank'>Fonte</a> 
";

$real = "
<br>Nome	Real Madrid
<br>Ano de Fundação	1902
<br>Cidade	Madrid  ver
<br>País	 Espanha
<br>Estado	Comunidad de Madrid
<br>Estádio	Santiago Bernabéu
<br>Lotação: 80354
<br>Evolução histórica	Madrid, Madrid FC, Real Madrid, Madrid CF  ver
<br>Presidente	Florentino Pérez
<br>E-mail	mensajes@realmadrid.com
<br>Marca Equipamento	Adidas
<br>Patrocínio	Bwin.com | Audi | Coca-Cola | Mahou
<br>Título 74 títulos oficiais ver
<br>Rankings	UEFA: 5 [2011/12]  |  IFFHS: 2 [Abril]
<br>Tops Equipes	
<br>Europa: Mais Vitórias (1º)
<br>Europa: Melhor Ataque (1º)
<br>Europa: Melhor Média de Gols (1º)
<br><a href='http://www.ogol.com.br/equipa.php?id=50&epoca_id=141' target='_blank'>Fonte</a> 
    ";

$time = (isset($_GET['time'])?$_GET['time']:false);

if(isset($_GET['time'])){
    $time = $_GET['time'];
}else{
    $time = false;
}
    if($time){
    switch ($time){
        case 'ajax':
            echo $ajax;
            break;
        case 'real':
            echo $real;
            break;
        default:
            echo '';
    }
}

?>
