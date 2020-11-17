<?php
use PHPMailer\PHPMailer\PHPMailer;

if (isset($_POST['name']) && isset($_POST['email'])) {
  $name = $_POST['name'];
  $phone = $_POST['phone'];
  $email = $_POST['email'];
  $body = $_POST['body'];

  require_once "PHPMailer/PHPMailer.php";
  require_once "PHPMailer/SMTP.php";
  require_once "PHPMailer/Exception.php";

  $mail = new PHPMailer();

  //SMTP is_set_app_settings
  $mail->isSMTP();
  $mail->Host = "smtp.gmail.com";
  $mail->SMTPAuth = true;
  $mail->Username = "rohanwhitt@gmail.com";
  $mail->Password = "siobnmcdmfrffgdt";
  $mail->Port = 587;
  $mail->SMTPSecure = "tls";

  // Email Settings
  $mail->isHTML(true);
  $mail->setFrom($email, $name);
  $mail->addAddress("rohanwhitt@gmail.com");
  $mail->Body = $body;
  $mail->Phone = $phone;

  if ($mail->send()){
    $status = "success";
    $response = "Email is Sent";
  }else {
    $status = "failed";
    $response = "something went wrong: <br></br>" . $mail->ErrorInfo;
  }
    exit(json_encode(array("status" => $status, "response" => $response)));
}


 ?>
