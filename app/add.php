
<?php
//@session_start();


$headers = "Content-type: text/plain; charset=windows-1251 \r\n";


$to = "vokayleb1@gmail.com";
$subject = "��������� � ����� ���� �����";


$suname = $_POST['suname'];
$name = $_POST['name'];
$otchestvo = $_POST['otchestvo'];
$date_r = $_POST['date_r'];
$grajdanstvo = $_POST['grajdanstvo'];
$region = $_POST['region'];
$registraciya = $_POST['registraciya'];
$phone = $_POST['user_phone'];
$mail = $_POST['user_email'];
$gotov = $_POST['gotov'];

$begunok1 = $_POST['begunok1'];
$begunok2 = $_POST['begunok2'];

//$mass = $_POST['MESSAGE'];

//�������� � ������ ��������� �� �������, � �������
$s000 = "�������: ".iconv("utf-8", "cp1251", $suname);
$s111 = "���: ".iconv("utf-8", "cp1251", $name);
$s112 = "��������: ".iconv("utf-8", "cp1251", $otchestvo);
$s113 = "���� ��������: ".iconv("utf-8", "cp1251", $date_r);
$s114 = "�����������: ".iconv("utf-8", "cp1251", $grajdanstvo);
$s115 = "������: ".iconv("utf-8", "cp1251", $region);
$s116 = "�����������: ".iconv("utf-8", "cp1251", $registraciya);
$s222 = "�������: ".iconv("utf-8", "cp1251", $phone);
$s333 = "e-mail: ".iconv("utf-8", "cp1251", $mail);
//$s444 = iconv("utf-8", "cp1251", $gotov);
//$s444 = "���������: ".iconv("utf-8", "cp1251", $mass);

$sbeg1 = "�����: ".iconv("utf-8", "cp1251", $begunok1).' �.';
$sbeg2 = "����: ".iconv("utf-8", "cp1251", $begunok2).' ������';



//$massege = "���: ".$name."\n".$phone."\n".$mail."\n".$mass."";
$massege = $sbeg1."\n".$sbeg2."\n".$s000."\n".$s111."\n".$s112."\n".$s113."\n".$s114."\n".$s115."\n".$s116."\n".$s222."\n".$s333;

$s666 = "<p style='color:green'>���� ������ ����������</p>";
$s666 = mb_convert_encoding($s666, "UTF-8", "CP1251"); // ������ ���������

$s777 = "<p style='color:red'>��������� ���� ���������� *<br>
            � ����������� �� �������� ������������ ������
         </p>";
$s777 = mb_convert_encoding($s777, "UTF-8", "CP1251"); // ������ ���������


if (!empty($gotov) && !empty($suname) && !empty($name) && !empty($sbeg1) && !empty($sbeg2) && !empty($otchestvo) && !empty($date_r) && !empty($phone) && !empty($mail)) //���� ��� ���������� ����� �������� ��������� ������ � ����
{
    $res = mail($to,$subject,$massege,$headers);
    //echo "<script> $('.inp1').val(''); </script>"; //������� ����� �����
    echo $s666;
}else{
    echo $s777;
}

//echo $begunok1.$begunok2;



//else{
//   echo "<p style=\"color:red; font-size:20px\">".$s666."</p>";
//}



//$s555 = "���� ��������� ����������!";
//$s555 = mb_convert_encoding($s555, "UTF-8", "CP1251"); // ������ ���������


//if($res == true){
//    echo "<p style=\"color:green; font-size:20px\">".$s555."</p>";
//}
