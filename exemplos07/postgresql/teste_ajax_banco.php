<?php
 
$time = (isset($_POST['time'])?$_POST['time']:false);

echo infoTime($time);



function infoTime($time){
  
    if($time){
        //Alterar dados do user e password
        $conn = pg_connect("host=localhost port=5432 dbname=time user=root password=root");
        
        $sql = "select info from info where nome ilike '$time'";
        
        $result = pg_query($conn,$sql);
        
        if(pg_num_rows($result)>0){
            $result = pg_fetch_all($result);
            return $result[0]['info'];            
        }
    }else{
        return '';
        
    }
    
}

?>
