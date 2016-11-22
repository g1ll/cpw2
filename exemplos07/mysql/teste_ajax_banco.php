<?php
 
$time = (isset($_POST['time'])?$_POST['time']:false);

echo infoTime($time);



function infoTime($time){
  
    if($time){
        //Alterar dados do user e password
        $conn = mysqli_connect('localhost','root','r00t','time');
        mysqli_set_charset($conn, 'utf8');
        
        $sql = "select * from info where nome like '$time'";
        
        $result = mysqli_query($conn, $sql);
        
        
        if(mysqli_num_rows($result)>0){
            $result = mysqli_fetch_assoc($result);            
            return $result['info'];            
        }
    }else{
        return '';
        
    }
    
}

?>
