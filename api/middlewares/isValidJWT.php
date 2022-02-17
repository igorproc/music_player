<?php
function isValidJWT($jwt){
  /*
    *TRUE если JWT подписанный
    *FALSE если подделанный
  */
  $tim = time();
  $offset = 600;
  $salt = 'Пришло время открыть тайну';
  $jwt = explode('.', $jwt);
  if(count($jwt) !== 3) return false;

  $header = json_decode(base64_decode($jwt[0]), true);
  $payload = json_decode(base64_decode($jwt[1]), true);
  $secret_jwt = $jwt[2];

  if($header['tim'] + $offset < $tim) return false;

  $secret = hash_hmac('sha256', json_encode($header, JSON_UNESCAPED_UNICODE) . json_encode($payload, JSON_UNESCAPED_UNICODE), $salt);
  if($secret_jwt !== $secret) return false;
  return true;
}