<?php

include "conn.php";

// $result = $conn->query("select * from suningregisterTable");

// $arrdata=array();
// for($i=0;$i<$result->num_rows;$i++){
//     $arrdata[$i]=$result->fetch_assoc();
// }
// echo json_encode($arrdata);

if(isset($_POST['submit']) ){
    $username = $_POST['user'];
    $password = sha1($_POST['password']);
    $conn->query("insert suningregisterTable values(null,'$username','$password',NOW()) ");
    header('location:http://localhost/project-suning/dist/login.html');
}

