<?php
header('Content-Type: text/html; charset=utf-8');

$mysqli = mysqli_connect("localhost", "pgaubbsg_0975", "123456", "pgaubbsg_0975");
if ($mysqli == false) {
  print("error");
} else {

  $email = $_POST["email"];
  $pass = $_POST["pass"];

  $result = $mysqli->query("SELECT * FROM `users` WHERE `email` = '$email' AND `pass` = '$pass'");

  if ($result->num_rows != 0) {
    print("ok");
  } else {
    print("no");
  }
}
