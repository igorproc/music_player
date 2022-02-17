<?php
if($_GET['api'] === 'test'){
  ini_set('error_reporting', E_ALL); 
  ini_set('display_errors', 1);
  ini_set('display_startup_errors', 1);
}

$get = parse_url($_SERVER['REQUEST_URI'], PHP_URL_QUERY);
parse_str($get, $get);
$_GET = array_merge($_GET, $get);

function FatalError($code, Exception $error){
  $data = ['code' => $code, 'error' => $error->getMessage()];
  header('Content-type: application/json');
  http_response_code(200);
  echo json_encode($data, JSON_UNESCAPED_UNICODE);
}

try {
  require_once(DIR . 'core/config.php');
} catch(Exception $e) {
  FatalError('config', $e);
}
try {
  require_once(DIR . 'core/db.php');
} catch(Exception $e) {
  FatalError('db', $e);
}
try {
  require_once(DIR . 'core/router.php');
} catch(Exception $e) {
  FatalError('router', $e);
}
try {
  require_once(DIR . 'core/response.php');
} catch(Exception $e) {
  FatalError('response', $e);
}
try {
  require_once(DIR . 'core/props.php');
} catch(Exception $e) {
  FatalError('props', $e);
}

Router();