<?php
include_once('main.php');
include_once('../../service/mysqlcon.php');
if($_POST['submit']){
    $id = $_POST['id'];
    $sql = "DELETE FROM parents WHERE id = '$id';";
    $success = mysql_query( $sql,$link );
    $sql = "DELETE FROM users WHERE userid = '$id';";
    $success = mysql_query( $sql,$link );
    if(!$success) {
        die('Could not Delete data: '.mysql_error());
    }
    echo "Delete data successfully\n";
    header("Location:../admin/deleteParent.php");
}
?>