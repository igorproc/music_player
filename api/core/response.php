<?php
function Response($data) {
  header('Content-type: application/json');
  http_response_code(200);
  echo json_encode($data, JSON_UNESCAPED_UNICODE);
}