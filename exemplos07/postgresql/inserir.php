<?php
$mensagem = '';//Inicializa a variável mensagem
if($_POST){ //Testa se houve requisição do tipo POST

	if($_POST['album']&&$_POST['artista']){//Testa se digitaram todos os campos

//Função strip_tag() filtra tags HTML
//Função pg_escape_string() adiciona cotas em campos do tipo string(filtra o uso das aspas)

	$nome = strip_tags(pg_escape_string($_POST['album'])); //filtra entrada
	$artista = strip_tags(pg_escape_string($_POST['artista']));//filtra entrada
	
	include 'conexao.php';

	//Cria o comando SQL e guarda na variável $sql
	$sql = "insert into album(nome,artista) values('$nome','$artista')";

	//Chama a função pg_query() que executa o comando SQL da variável $sql na conexão
	// representada pela variável $conn. Retorna o resultado na variável $resultado
	$resultado= pg_query($conexao,$sql);

	//Testa a variável $variável, um valor NULL representa erro na execução do SQL
		if($resultado != null)
				$mensagem = "<font color='blue'>Dados inseridos com sucesso!!</font>";
		else
				$mensagem ="<font color='red'>Erro ao inserir dados!!</font>";
	}else{
		$mensagem = "<font color='red'>Informe todos os campos!!</font>";
	}
}
echo $mensagem;
?>