<?php
$email = Prop('string', $_GET['email']);
$password = Prop('string', $_GET['password']);
$resp = UserLogin($email, $password);
Response($resp);