<?php
function isValidRefresh($refresh){
  $tim = time();
  $offset = 7*24*60*60;
  $salt = 'Юмор в тяжёлом весе';
  $refresh = explode('.', $refresh);
  if(count($refresh) !== 3) return false;
  
  $header = json_decode(base64_decode($refresh[0]), true);
  $payload = json_decode(base64_decode($refresh[1]), true);
  $secret_refresh = $refresh[2];
  
  if($payload['created_at'] + $offset < $tim) return false;
  
  $secret = hash_hmac('sha256', json_encode($header, JSON_UNESCAPED_UNICODE) . json_encode($payload, JSON_UNESCAPED_UNICODE), $salt);
  
  if($secret_refresh !== $secret) return false;
  return $payload['uid'];
}