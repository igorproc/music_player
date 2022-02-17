<?php
require_once(DIR . 'middlewares/isValidRefresh.php');
$refresh = Prop('string', $_GET['refresh']);
if(!$refresh) die('props refresh not definded');

$uid = isValidRefresh($refresh);

if($uid){
  $user = UserGetByUid($uid);
  if(!$user['uid']) die(Response(UserError(108)));
  $response = UserAuthorize($user);
  Response($response);
} else {
  ResponseWithHttpCode(UserError(109), 403);
}