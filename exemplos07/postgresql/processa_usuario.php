<?php 
        //ATT: COLUNAS QUE SÃO EXIBIDAS NA TELA, SE TIVER JOIN DEVE APARECER
        //NOME DA TABELA.NOMECAMPO
        
	$aColumns = array('idusuario','login', 'senha', 'nome');
        //$aColumns = array('login','nome');
	
        
	/* 
	 * PAGINAÇÃO
	 */
	$sLimit ="";
	if ( isset( $_GET['iDisplayStart'] ) && $_GET['iDisplayLength'] != '-1' )
	{
		$sLimit = "LIMIT ".$_GET['iDisplayLength']." OFFSET ".
			$_GET['iDisplayStart'];
	}
	
	
	/*
	 * ORDENAÇÃO
	 */
	$sOrder = "";
	if ( isset( $_GET['iSortCol_0'] ) )
	{
		$sOrder = "ORDER BY  ";
		for ( $i=0 ; $i<intval( $_GET['iSortingCols'] ) ; $i++ )
		{
			if ( $_GET[ 'bSortable_'.intval($_GET['iSortCol_'.$i]) ] == "true" )
			{
				$sOrder .= $aColumns[ intval( $_GET['iSortCol_'.$i] ) ]."
				 	".$_GET['sSortDir_'.$i].", ";
			}
		}
		
		$sOrder = substr_replace( $sOrder, "", -2 );
		if ( $sOrder == "ORDER BY" )
		{
			$sOrder = "";
		}
	}
	
	
	/* 
	 * FILTRO
	 */
	$sWhere = "";
	if ( isset($_GET['sSearch']) && $_GET['sSearch'] != "" )
	{
		$sWhere = "WHERE (";
		for ( $i=0 ; $i<count($aColumns) ; $i++ )
		{
                        //ATT: como ele busca com LIKE em todos os campos, tratar 
                        //como exceção os campos inteiro
                        if($aColumns[$i]!="idusuario")
                        {
                            $sWhere .= $aColumns[$i]." ILIKE '%".$_GET['sSearch']."%' OR ";
                        }
                        else
                        {
                            $sWhere .= "cast(".$aColumns[$i]." as varchar) ILIKE '%".$_GET['sSearch']."%' OR ";
                        }
		}
		$sWhere = substr_replace( $sWhere, "", -3 );
		$sWhere .= ')';
	}else{
            //Hack, se não existir parametro sSearch, força WHERE FALSE
            $sWhere = "WHERE 1 = 1";    
        }
	
	/* Individual column filtering */
	for ( $i=0 ; $i<count($aColumns) ; $i++ )
	{
		if ( isset($_GET['bSearchable_'.$i]) && $_GET['bSearchable_'.$i] == "true" && $_GET['sSearch_'.$i] != '' )
		{
			if ( $sWhere == "" )
			{
				$sWhere = "WHERE ";
			}
			else
			{
				$sWhere .= " AND ";
			}
			$sWhere .= $aColumns[$i]." LIKE '%".$_GET['sSearch_'.$i]."%' ";
		}
	}
        if(isset($_GET['sEcho']))
        {
            $sEcho = $_GET['sEcho'];
        }
        else
        {
            $sEcho = "";
        }
        
         
        
        
	//Aqui começa a conexao com o banco e a busca de registros, demais códigos acima
        //ficam conforme o padrão
	
        $conexao = pg_connect("host=localhost user=root password=root dbname=dtteste port=5432")
                   or die("Erro ao conectar ao servidor.");
        
        
        //conta os registros com o critério de pesquisa
        $query = "select count(*) as contar from usuario ".$sWhere;
        $query_u = pg_query($conexao,$query);
        
        $result = pg_fetch_array($query_u);
        
        
        if($result["contar"]>0)
        {
            $iFilteredTotal=$result["contar"];
        }
        else
        {
            $iFilteredTotal=0;
        }
        //conta todos registros
        
        $query = "select count(*) as contar from usuario";
        $query_u = pg_query($query);
        
        $result = pg_fetch_array($query_u);
        
//        echo '<pre>';
//        print_r($result);
//        echo '</pre>';
//        echo $result['contar'];
        
        if($result["contar"]>0)
        {
            $iTotal = $result["contar"];
        }
        else
        {
            $iTotal = 0;
        }
	
	/*
	 * monta a saída, busca os registros
	 */
         
             
               
        $query = "select *  from usuario $sWhere $sOrder $sLimit";
        $query_u = pg_query($query);
        
	$output = array(
		"sEcho" => intval($sEcho),
		"iTotalRecords" => $iTotal,
		"iTotalDisplayRecords" => $iFilteredTotal,
		"aaData" => array()
	);
     
        
        
        
        while($result = pg_fetch_array($query_u))
        {
            
                $row = array();
                
                $row[] = $result['idusuario'];
                //$row[] = $result['login'];
                $row[] = "<a href='#' onclick=\"alert('".$result['idusuario']."')\">".$result['login']."</a>";
                $row[] = $result['senha'];
                $row[] = $result['nome'];
                             
                $output['aaData'][]= $row;
          
        }
       
             //retorna os itens no formato Datatable
	echo json_encode($output);
?>