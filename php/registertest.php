<?php

include "conn.php";

if(isset($_POST['user'])){
    $username1 = $_POST['user'];
    $result=$conn->query("select * from suningregisterTable where username='$username1'");
    if($result->fetch_assoc()){
        echo true;
    }else{
        echo false;
    }
}
