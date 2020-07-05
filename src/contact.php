<?php

$post = (!empty($_POST)) ? true : false;

if($post) {
				$name = htmlspecialchars($_POST["name"]);
				$tel = htmlspecialchars($_POST["phone"]);
				$mess = htmlspecialchars($_POST["mess"]);
				$error = '';

				if(!$name) {
								$error .= 'Пожалуйста введите ваше имя<br />';
				}

				if(!$tel) {
								$error .= "Пожалуйста введите ваш телефон<br />";
				}

				if(!$mess) {
								$error .= "Пожалуйста введите сообщение<br />";
				}

				if(!$error) {

								$charset = 'utf-8'; // Кодировка письма
								$subject = "Новая заявка с сайта Ambirel"; // Тема письма
								$subject1 = "=?utf-8?b?" . base64_encode($subject) . "?=";
								$message = "\r\nИмя: " . $name . "\r\nТелефон: " . $tel . "\r\nСообщение: " . $mess;


								$headers  = "Content-type: text/html; charset=$charset \r\n";
								$headers .= "From: От кого письмо <vetal.morenko@mail.ru>\r\n";
								$headers .= "Reply-To: reply-to@example.com\r\n";

								$mail = mail("vetal.morenko@mail.ru", $subject1, $message, $headers);

								if ($mail) {
												echo 'OK';
								}
				}	else {
								echo '<div class="notification_error">' . $error . '</div>';
				}
}
?>