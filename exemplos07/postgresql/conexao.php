<?php

//Cria a string de conexão com os parâmetros da conexão
	$str_conecta = "host=localhost 
					port=5432
					dbname=musicas
					user=root
				   	password=root";
	
	//Executa a função pg_connect() a qual conecta o banco usando a string de conexão e
	//retorna uma conexão aberta para a variável $conn
	$conexao = pg_connect($str_conecta);
	
	if($conexao == null){
	 echo "Erro ao criar conexão!!!";
	 die;//Finaliza o processo
	}

?>
