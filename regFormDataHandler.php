<?php

$name = $email = $phone = $country = $password =$passRepeat = '';
$clientType = $clientTitle = $birthYear = $birthMonth = $birthDay = 0;
$nameErr = $emailErr = $phoneErr = $countryErr = $passwordErr = $passRepeatErr = $clientTypeErr = $clientTitleErr = $birthYearErr = $birthMonthErr = $birthDayErr = '';
$message = '';

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {

  if ((empty($_POST["POST-clientType"])) || ($_POST["POST-clientType"] == 0)) {
    $clientTypeErr = "Client type is required";
    echo $clientTypeErr . "\r\n";
  } else {
    $clientType = test_input($_POST["POST-clientType"]);
  }

  if ((empty($_POST["POST-title"])) || ($_POST["POST-title"] == 0)) {
    $clientTitleErr = "Title is required";
    echo $clientTitleErr . "\r\n";
  } else {
    $clientTitle = test_input($_POST["POST-title"]);
  }

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

  if ((empty($_POST["POST-birth-y"])) || ($_POST["POST-birth-y"] == 0)) {
    $birthYearErr = "Birth year is required";
    echo $birthYearErr . "\r\n";
  } else {
    $birthYear = test_input($_POST["POST-birth-y"]);
  }

  if ((empty($_POST["POST-birth-m"])) || ($_POST["POST-birth-m"] == 0)) {
    $birthYearErr = "Birth month is required";
    echo $birthMonthErr . "\r\n";
  } else {
    $birthMonth = test_input($_POST["POST-birth-m"]);
  }

  if ((empty($_POST["POST-birth-d"])) || ($_POST["POST-birth-d"] == 0)) {
    $birthDayErr = "Birth day is required";
    echo $birthDayErr . "\r\n";
  } else {
    $birthDay = test_input($_POST["POST-birth-d"]);
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

  if (empty($_POST["country"])) {
    $countryErr = "Country is required";
    echo $countryErr . "\r\n";
  } else {
    $country = test_input($_POST["country"]);
    // check if country only contains letters and whitespace
    if (!preg_match("/^[a-zA-Z\s]*$/", $country)) {
      $countryErr = "Only letters and white space allowed";
      echo $countryErr . "\r\n";
    }
  }

  if (empty($_POST["password"])) {
    $passwordErr = "Set password is required";
    echo $passwordErr . "\r\n";
  } else {
    $password = test_input($_POST["password"]);
    // check if password contain at least 8 characters with at least one digit, at least one lower case letter, at least one upper case letter
    if (!preg_match("/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/", $password)) {
      $passwordErr = "Your password should contain at least 8 characters with at least one digit, at least one lower case letter, at least one upper case letter";
      echo $passwordErr . "\r\n";
    }
  }

  if (empty($_POST["password-repeat"])) {
    $passRepeatErr = "Set password is required";
    echo $passRepeatErr . "\r\n";
  } else {
    $passRepeat = test_input($_POST["password-repeat"]);
    // check if password contain at least 8 characters with at least one digit, at least one lower case letter, at least one upper case letter
    if (!empty($password) && (strcmp($password, $passRepeat) != 0) {
      $passRepeatErr = "Your repeated password does not match choosen password";
      echo $passwordErr . "\r\n";
    }
  }
}

$message = "Client Type: " . $clientType . "\r\Title: " . $clientTitle . "\r\nName: " . $name . "\r\nBirth date: " . $birthDay . " " . $birthMonth . ", " . $birthYear . "\r\nEmail: " . $email . "\r\nPhone: " . $phone . "\r\nCountry of residence: " . $country . "\r\nPassword: " . $password . "\r\nRepeat password: " . $passRepeat . "\r\n";

// Sending form data on email
// mail('info@email', 'New message from The Prop Firm website Registration Form', $message);

echo 'Thank you! Message have been sent successfully. We will contact you as soon as possible';

?>