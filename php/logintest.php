<?php

include "conn.php";

if(isset($_POST['username']) && isset($_POST['password'])){
    $username = $_POST['username'];
    $password = $_POST['password'];
    $result=$conn->query("select * from suningregisterTable  where username=$username and password=$password");
    if($result->fetch_assoc()){
        echo true;
    }else{
        echo false;
    }
}

// $result = $conn->query("select * from suningregisterTable");

// $arrdata=array();
// for($i=0;$i<$result->num_rows;$i++){
//     $arrdata[$i]=$result->fetch_assoc();
// }
// echo json_encode($arrdata);