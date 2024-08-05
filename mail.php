<?php

$email = trim($_POST["email"]);
$dates = trim($_POST["dates"]);
$message = wordwrap($_POST["message"], 70);
$messageText = $email . "\n\n" . $dates . "\n\n" . $message;

if (mail('mikhailv.commerce@gmail.com', 'Booking request', $messageText)) {
    http_response_code(200);
} else {
    http_response_code(400);
};

?>