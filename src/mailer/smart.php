<?php 

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$mess = $_POST['user_mess'];

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

//$mail->SMTPDebug = 3;                               // Enable verbose debug output
$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'vetal.morenko@mail.ru';                 // Наш логин
$mail->Password = 'a1ed4186';                           // Наш пароль от ящика
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to
 
$mail->setFrom('vetal.morenko@mail.ru', 'John Doe');   // От кого письмо 
$mail->addAddress('vetal.morenko@mail.ru'); // Add a recipient
//$mail->addAttachment('/var/tmp/file.tar.gz');     // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');  // Optional name
$mail->isHTML(true);   // Set email format to HTML

$mail->Subject = 'Это тема сообщения';
$mail->Body    = '
	Пользователь оставил свои данные! <br> 
	Имя: ' . $name . ' <br>
	Телефон: ' . $phone . '<br>
	Сообщение: ' . $mess;
$mail->AltBody = 'Это альтернативный текст';

if(!$mail->send()) {
    return false;
} else {
    return true;
}

?>