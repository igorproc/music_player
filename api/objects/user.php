<?php
/*

*/
function UserCreate($email, $password, $name, $dateBirth, $gender){
  if(!UserValidateEmail($email)) return UserError(100);
  if(!UserValidatePassword($password)) return UserError(101);
  if(!UserValidateName($name)) return UserError(102);
  if(!UserValidateDateBirth($dateBirth)) return UserError(103);
  if(!UserValidateGender($gender)) return UserError(104);
  $user = UserGetByEmail($email);
  if ($user and $user['uid']) return UserError(105);

  $query = "INSERT INTO users(uid, email, password, name, dateBirth, gender, updated_at, created_at)
            VALUES (NULL, :email, :password, :name, :dateBirth, :gender, :updated_at, :created_at)";
  $var = [
    ':email' => $email,
    ':password' => UserGeneratorPassword($password),
    ':name' => $name,
    ':dateBirth' => $dateBirth,
    ':gender' => $gender,
    ':updated_at' => time(),
    ':created_at' => time()
  ];
  dbAddOne($query, $var);
  sleep(0.25);
  return UserLogin($email, $password);
}
function UserLogin($email, $password){
  $user = UserGetByEmail($email);
  if(!$user['uid']) return UserError(107);
  if($user['password'] !== UserGeneratorPassword($password)) return UserError(106);
  return UserAuthorize($user);
}
function UserAuthorize($data){
  return [
    'code' => 200,
    'jwt' => UserGetJWT($data),
    'refresh' => UserGetRefresh($data)
  ];
}
function UserGetByUid(int $uid){
  $query = "SELECT * FROM users WHERE uid = :uid";
  $var = [
    ':uid' => $uid 
  ];
  $user = dbGetOne($query, $var);
  return $user;
}
function UserGetByEmail(string $email){
  $query = "SELECT * FROM users WHERE email = :email";
  $var = [
    ':email' => $email 
  ];
  $user = dbGetOne($query, $var);
  return $user;
}

function UserValidateEmail($email){
  if(!filter_var($email, FILTER_VALIDATE_EMAIL)) return false;
  return true;
}
function UserValidatePassword($password){
  if(strlen($password) < 6) return false;
  return true;
}
function UserValidateName($name){
  preg_match('/^[А-ЯЁ][а-яё]* [А-ЯЁ][а-яё]*$/', $name, $match);
  if(strlen($name) < 3 and count($match) === 0) return false;
  return true;
}
function UserValidateDateBirth($dateBirth){
  if(strlen($dateBirth) > 8) return false;
  return true;
}
function UserValidateGender($gender){
  if($gender === 'male' or $gender === 'female') return true;
  return false;
}

function UserError(int $code){
  switch($code){
    case 100: 
      return ['code' => $code, 'error' => 'Invalid email'];
    case 101:
      return ['code' => $code, 'error' => 'Invalid password'];
    case 102:
      return ['code' => $code, 'error' => 'Invalid name'];
    case 103:
      return ['code' => $code, 'error' => 'Invalid date'];
    case 104:
      return ['code' => $code, 'error' => 'Invalid gender'];
    case 105:
      return ['code' => $code, 'error' => 'User with this email is already registered'];
    case 106:
      return ['code' => $code, 'error' => 'Incorrect password'];
    case 107:
      return ['code' => $code, 'error' => 'User wasn\'t created'];
    case 108:
      return ['code' => $code, 'error' => 'User not found'];
    case 109:
      return ['code' => $code, 'error' => 'Invalid refresh token'];
  }   
}

function UserGetJWT($data) {
  $salt = 'Пришло время открыть тайну';
  $header = [
    'alg' => 'sha256',
    'typ' => 'JWT',
    'tim' => time()
  ];
  $secret = hash_hmac('sha256', json_encode($header, JSON_UNESCAPED_UNICODE) . json_encode($data, JSON_UNESCAPED_UNICODE), $salt);
  $jwt = base64_encode(json_encode($header)) . '.' . base64_encode(json_encode($data)) . '.' . $secret;
  return $jwt;
}

function UserGetRefresh($data) {
  $salt = 'Юмор в тяжёлом весе';
  $header = [
    'alg' => 'sha256',
    'typ' => 'JWT'
  ];
  $body = [
    'uid' => $data['uid'],
    'created_at' => time()
  ];
  $secret = hash_hmac('sha256', json_encode($header, JSON_UNESCAPED_UNICODE) . json_encode($body, JSON_UNESCAPED_UNICODE), $salt);
  $refresh = base64_encode(json_encode($header)) . '.' . base64_encode(json_encode($body)) . '.' . $secret;
  return $refresh;
}

function UserGeneratorPassword($password) {
  return md5($password . 'Герой будет сражен');
}

function isLeap($dateBirth) {
  $year = (int)$dateBirth % 10000;
  if(($year % 4) !== 0) return false;
  return true;
}

/* 
  *TO-DO
  *валидатор
  *Зарезервировать ошибку для logout
  *чекер по времени
*/