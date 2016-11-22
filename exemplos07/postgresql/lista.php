<?php
//Inclui o arquivo de conexão
include 'conexao.php';

//Cria o comando sql para a consulta
$sql = "select * from album order by codigo desc";

//A função pg_query() executa o comando sql da variável $sql usando a
//conexão criada na variável $conexao 
$result = pg_query($conexao,$sql);

//variável $tabela inicializada com uma string vazia para a tabela HTML
$tabela = '';


//Leitura do resultado guardado na variável $result
while($linha = pg_fetch_assoc($result)){

	// A função pg_fetch_assoc() retorna para a variável linha
	// um array representando cada linha gerada na consulta

	//variável $tabela é usada para formatar a tabela HTML
	$tabela .= '<tr>
				<td>'.$linha['codigo']. //retorna o valor da coluna codigo
			   '</td><td>'.$linha['nome'].  //retorna o valor da coluna nome
 			   '</td><td>'.$linha['artista']. //retorna o valor da coluna artista
			   '</td></tr>'; 
}

echo "<table><tr><td>Codigo</td><td>Nome</td><td>Artista</td>$tabela</tr></table>";

?>