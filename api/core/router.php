<?php
function Router() {
  /*
    *METHODS
    *MIDDLEWARE
    *OBJECTS
    *RESPONSE_JSON
  */
  $extractUri = $_SERVER['REQUEST_URI'];
  $extractUri = parse_url($extractUri, PHP_URL_PATH);
  $objectDotMethods = str_replace('/api/', '', $extractUri);
  if($objectDotMethods === '') die('unknouw method'); 
  $objectDotMethods = explode('.', $objectDotMethods);
  $object = mb_strtolower($objectDotMethods[0]);
  $method = mb_strtolower($objectDotMethods[1]);
  if(!$object or !$method) die('unknouw method#2');
  // /methods/$object/$method.'.php'
  $objectPath = DIR . 'objects/' . $object . '.php';
  $methodPath = DIR . 'methods/' . $object . '/' . $method . '.php';
  if(!file_exists($objectPath) or !file_exists($methodPath)) die('unknouw method#27');
  try {
    include_once($objectPath);
  } catch(Exception $e) {
    FatalError('object', $e);
  }
  try {
    include_once($methodPath);
  } catch(Exception $e) {
    FatalError('method', $e);
  }
}