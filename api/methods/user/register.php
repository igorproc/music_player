<?php
$email = Prop('string', $_GET['email']);
$password = Prop('string', $_GET['password']);
$name = Prop('string', $_GET['name']);
$dateBirth = Prop('int', $_GET['dateBirth']);
$gender = Prop('string', $_GET['gender']);

$resp = UserCreate($email, $password, $name, $dateBirth, $gender);
Response($resp);