<?php

$name = $email = $phone = $country = '';
$nameErr = $emailErr = $phoneErr = $countryErr = '';
$message = '';

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {

  if (empty($_POST["name"])) {
    $nameErr = "Name is required";
    echo $nameErr . "\r\n";
  } else {
    $name = test_input($_POST["name"]);
    // check if name only contains letters and whitespace
    if (!preg_match("/^[a-zA-Z\s]*$/", $name)) {
      $nameErr = "Only letters and white space allowed";
      echo $nameErr . "\r\n";
    }
  }

  if (empty($_POST["surname"])) {
    $surNameErr = "Surname is required";
    echo $surNameErr . "\r\n";
  } else {
    $surname = test_input($_POST["surname"]);
    // check if surname only contains letters and whitespace
    if (!preg_match("/^[a-zA-Z\s]*$/", $surname)) {
      $surNameErr = "Only letters and white space allowed";
      echo $surNameErr . "\r\n";
    }
  }

  if (empty($_POST["email"])) {
    $emailErr = "Email is required";
    echo $emailErr . "\r\n";
  } else {
    $email = test_input($_POST["email"]);
    // check if e-mail address is well-formed
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
      $emailErr = "Invalid email format";
      echo $emailErr . "\r\n";
    }
  }

  if (empty($_POST["phone"])) {
    $phoneErr = "Phone is required";
    echo $phoneErr . "\r\n";
  } else {
    $phone = test_input($_POST["phone"]);
  }
}

$message = "Name: " . $name . "\r\nSurname: " . $surname . "\r\nEmail: " . $email . "\r\nPhone: " . $phone . "\r\n";

// Sending form data on email
// mail('dan@atomiqconsulting.com', 'New request for open demo from Apex website', $message);
mail('spbabiak@gmail.com', 'New request for open live from Apex website', $message);

echo 'Thank you! Message have been sent successfully. We will contact you as soon as possible';

?>