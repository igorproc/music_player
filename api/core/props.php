<?php
function Prop($type, $prop){
  $prop = urldecode($prop);
  settype($prop, $type);
  return $prop;
}