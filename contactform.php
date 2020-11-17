<?php
    ini_set( 'display_errors', 1 );
    error_reporting( E_ALL );

    $from = $_POST['name'];
    $to = "admin@avcardetailing.com";
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    $headers = "From:" . $from;
    mail($to,$subject,$message, $headers);

    header("Location: index.html");
?>
