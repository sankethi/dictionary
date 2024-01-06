<?php    
   
   $constants = 0;
/*
   $temp = 'ZÀ';
//   echo "Ascii:". $temp . "," . '<pre>' . '    ' . '</pre>' . mb_detect_encoding($temp) . "   "  .  nl2br("\r\n");
   echo "Ascii:". $temp . "," . '  ' .  mb_detect_encoding($temp) . "   "  .  nl2br("\r\n");
   echo bin2hex($temp) .  nl2br("\n\n");

   $temputf16 = UConverter::transcode($temp,'UTF-16BE', 'ISO-8859-1');
   echo "UTF16:" . $temputf16 . ",   " . mb_detect_encoding($temputf16) . "   "  . nl2br("\n");
   echo bin2hex($temputf16) .  nl2br("\n\n");

   $temputf16_1 = mb_convert_encoding($temp,'UTF-16LE');
   echo "UTF16_1:" . $temputf16_1 . ",   " . mb_detect_encoding($temputf16_1) . "   "  .  nl2br("\n");
   echo bin2hex($temputf16_1) .  nl2br("\n\n");

//   $temputf16_2 = iconv('ASCII', 'UTF-16BE', $temp);
   $temputf16_2 = iconv('ISO-8859-1','UTF-8', $temp);
   echo "UTF16_2:" . $temputf16_2 . ",   " . mb_detect_encoding($temputf16_2) . "   "  .  nl2br("\n");
   echo bin2hex($temputf16_2) .  nl2br("\n\n");

   exit;
*/
   include("ReadDictionary.php");

/*   $tempArr = $output[1];   
   echo 'tempArr:' . $tempArr[5] . "\n\n";
   $encodedArr = json_encode($tempArr);
//   echo 'eng:' . mb_detect_encoding($tempArr[4]), ' ' , 'kan:' . mb_detect_encoding($tempArr[5]), PHP_EOL;
   echo 'Encoded str:' . $encodedArr . "\n\n";
echo 'encoding:'. mb_detect_encoding($encodedArr[4]) . "\n\n";
*/
//print_r(json_encode($output));
   echo $q; // echo this back to the sender. This is needed to check which table the data to be followed belongs to
//   echo($q);
   echo(json_encode($output));

// For string aacha?
// original string in DB - DZÀ ?
// charset utf8          - DZÀ ?
// charset not specified - DZ� ?
// JSON encoding         - DAi\u00c0\u00c4\u00db ?
?>