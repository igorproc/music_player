<?php
if($_GET['api'] === 'test'){
  ini_set('error_reporting', E_ALL); 
  ini_set('display_errors', 1);
  ini_set('display_startup_errors', 1);
}

$get = parse_url($_SERVER['REQUEST_URI'], PHP_URL_QUERY);
parse_str($get, $get);
$_GET = array_merge($_GET, $get);

require_once(DIR . 'core/config.php');
require_once(DIR . 'core/db.php');
require_once(DIR . 'core/router.php');
require_once(DIR . 'core/response.php');
require_once(DIR . 'core/props.php');

Router();