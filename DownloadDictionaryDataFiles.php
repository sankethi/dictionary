<?php

include_once("./xlsxwriter.class.php");
$constants = 0;
include("Constants.php"); 

$command = $_POST['q'];  

if($command == 'create')
//if($q == 'create')
{
//exit;
$conn=mysqli_connect('localhost','root','','sanketi dictionary');

mysqli_query($conn,"SET NAMES 'utf8'");


$alphabet = range('a', 'z');



$writer = new XLSXWriter();

 
/*
$headerDict = array("ID"=>'integer',"English"=>'string',"Kannada_in_english"=>'string',"Kannada_in_kannada"=>'string',"BS_in_english"=>'string',"BS_in_kannada"=>'string',"BS_Audio"=>'string',"KS_in_english"=>'string',"KS_in_kannada"=>'string',"KS_Audio"=>'string',"LS_in_english"=>'string',"LS_in_kannada"=>'string',"LS_Audio"=>'string',"MS_in_english"=>'string',"MS_in_kannada"=>'string',"MS_Audio"=>'string',"Part_of_Speech"=>'string',"Category"=>'string',"Example_in_english"=>'string',"Example_in_kannada_english_font"=>'string',"Example_in_kannada_kannada_font"=>'string',"Example_in_BS_english_font"=>'string',"Example_in_BS_kannada_font"=>'string',"Audio_of_example_in_BS"=>'string',"Example_in_KS_english_font"=>'string',"Example_in_KS_kannada_font"=>'string',"Audio_of_example_in_KS"=>'string',"Example_in_LS_english_font"=>'string',"Example_in_LS_kannada_font"=>'string',"Audio_of_example_in_LS"=>'string',"Example_in_MS_english_font"=>'string',"Example_in_MS_kannada_font"=>'string',"Audio_of_example_in_MS"=>'string');
$headerSample = array("ID"=>'integer',"English"=>'string',"Kannada_in_english"=>'string',"Kannada_in_kannada"=>'string',"BS_in_english"=>'string',"BS_in_kannada"=>'string',"BS_Audio"=>'string',"KS_in_english"=>'string',"KS_in_kannada"=>'string',"KS_Audio"=>'string',"LS_in_english"=>'string',"LS_in_kannada"=>'string',"LS_Audio"=>'string',"MS_in_english"=>'string',"MS_in_kannada"=>'string',"MS_Audio"=>'string');
*/
$headerDict = array("ID (ಸಂಖ್ಯೆ)"=>'integer',"English (ಆಂಗ್ಲ)"=>'string',"Kannada_in_english (ಕನ್ನಡ_ಆಂಗ್ಲಾದಲ್ಲಿ)"=>'string',"Kannada_in_kannada (ಕನ್ನಡ_ಕನ್ನಡದಲ್ಲಿ)"=>'string',"BS_in_english (ಬೆಸಂ_ಆಂಗ್ಲಾದಲ್ಲಿ)"=>'string',"BS_in_kannada (ಬೆಸಂ_ಕನ್ನಡದಲ್ಲಿ)"=>'string',"BS_Audio (ಬೆಸಂ_ಆಡಿಯೊ)"=>'string',"KS_in_english (ಕೌಸಂ_ಆಂಗ್ಲಾದಲ್ಲಿ)"=>'string',"KS_in_kannada (ಕೌಸಂ_ಕನ್ನಡದಲ್ಲಿ)"=>'string',"KS_Audio (ಕೌಸಂ_ಆಡಿಯೊ)"=>'string',"LS_in_english (ಲಿಸಂ_ಆಂಗ್ಲಾದಲ್ಲಿ)"=>'string',"LS_in_kannada (ಲಿಸಂ_ಕನ್ನಡದಲ್ಲಿ)"=>'string',"LS_Audio (ಲಿಸಂ_ಆಡಿಯೊ)"=>'string',"MS_in_english (ಮಸಂ_ಆಂಗ್ಲಾದಲ್ಲಿ)"=>'string',"MS_in_kannada (ಮಸಂ_ಕನ್ನಡದಲ್ಲಿ)"=>'string',"MS_Audio (ಮಸಂ_ಆಡಿಯೊ)"=>'string',"Part_of_Speech (ಪದ ವಿಭಾಗ)"=>'string',"Category (ವರ್ಗ)"=>'string',"Example_in_english (ಉದಾಹರಣೆ_ಆಂಗ್ಲಾದಲ್ಲಿ)"=>'string',"Example_in_kannada_english_font (ಉದಾಹರಣೆ_ಕನ್ನಡ_ಆಂಗ್ಲ ಲಿಪಿ)"=>'string',"Example_in_kannada_kannada_font (ಉದಾಹರಣೆ_ಕನ್ನಡ_ಕನ್ನಡ ಲಿಪಿ)"=>'string',"Example_in_BS_english_font (ಉದಾಹರಣೆ_ಬೆಸಂ_ಆಂಗ್ಲ ಲಿಪಿ)"=>'string',"Example_in_BS_kannada_font (ಉದಾಹರಣೆ_ಬೆಸಂ_ಕನ್ನಡ ಲಿಪಿ)"=>'string',"Audio_of_example_in_BS (ಉದಾಹರಣೆ_ಆಡಿಯೊ_ಬೆಸಂ)"=>'string',"Example_in_KS_english_font (ಉದಾಹರಣೆ_ಕೌಸಂ_ಆಂಗ್ಲ ಲಿಪಿ)"=>'string',"Example_in_KS_kannada_font (ಉದಾಹರಣೆ_ಕೌಸಂ_ಕನ್ನಡ ಲಿಪಿ)"=>'string',"Audio_of_example_in_KS (ಉದಾಹರಣೆ_ಆಡಿಯೊ_ಕೌಸಂ)"=>'string',"Example_in_LS_english_font (ಉದಾಹರಣೆ_ಲಿಸಂ_ಆಂಗ್ಲ ಲಿಪಿ)"=>'string',"Example_in_LS_kannada_font (ಉದಾಹರಣೆ_ಲಿಸಂ_ಕನ್ನಡ ಲಿಪಿ)"=>'string',"Audio_of_example_in_LS (ಉದಾಹರಣೆ_ಆಡಿಯೊ_ಲಿಸಂ)"=>'string',"Example_in_MS_english_font (ಉದಾಹರಣೆ_ಮಸಂ_ಆಂಗ್ಲ ಲಿಪಿ)"=>'string',"Example_in_MS_kannada_font (ಉದಾಹರಣೆ_ಮಸಂ_ಕನ್ನಡ ಲಿಪಿ)"=>'string',"Audio_of_example_in_MS (ಉದಾಹರಣೆ_ಆಡಿಯೊ_ಮಸಂ)"=>'string');
$headerSample = array("ID (ಸಂಖ್ಯೆ)"=>'integer',"English (ಆಂಗ್ಲ)"=>'string',"Kannada_in_english (ಕನ್ನಡ_ಆಂಗ್ಲಾದಲ್ಲಿ)"=>'string',"Kannada_in_kannada (ಕನ್ನಡ_ಕನ್ನಡದಲ್ಲಿ)"=>'string',"BS_in_english (ಬೆಸಂ_ಆಂಗ್ಲಾದಲ್ಲಿ)"=>'string',"BS_in_kannada (ಬೆಸಂ_ಕನ್ನಡದಲ್ಲಿ)"=>'string',"BS_Audio (ಬೆಸಂ_ಆಡಿಯೊ)"=>'string',"KS_in_english (ಕೌಸಂ_ಆಂಗ್ಲಾದಲ್ಲಿ)"=>'string',"KS_in_kannada (ಕೌಸಂ_ಕನ್ನಡದಲ್ಲಿ)"=>'string',"KS_Audio (ಕೌಸಂ_ಆಡಿಯೊ)"=>'string',"LS_in_english (ಲಿಸಂ_ಆಂಗ್ಲಾದಲ್ಲಿ)"=>'string',"LS_in_kannada (ಲಿಸಂ_ಕನ್ನಡದಲ್ಲಿ)"=>'string',"LS_Audio (ಲಿಸಂ_ಆಡಿಯೊ)"=>'string',"MS_in_english (ಮಸಂ_ಆಂಗ್ಲಾದಲ್ಲಿ)"=>'string',"MS_in_kannada (ಮಸಂ_ಕನ್ನಡದಲ್ಲಿ)"=>'string',"MS_Audio (ಮಸಂ_ಆಡಿಯೊ)"=>'string');

$querystr = '';
$query = '';
$file = DOWNLOADS_FOLDER . 'Dictionary-'.time().'.xlsx'; 
$header = $headerDict;
for($a=0;$a<=26;$a++)
//for($a=24;$a<=24;$a++)
{
  $rows = array();


  if($a == 26)
  {
    $querystr = 'samplesentences';
    $header = $headerSample;
  }
  else
    $querystr = $alphabet[$a];
  
  $writer->writeSheetHeader($querystr, $header);


  $query = 'select * from ' . $querystr; 
  $user_query = mysqli_query($conn,$query);
  while ($datafromsql = mysqli_fetch_assoc($user_query)) {
    
   $rows[] = $datafromsql;

  }

  foreach($rows as $key => $row)
	
  {
//    $value = $rows[$key]['BS_Audio']; 
    $value = $rows[$key]['BS_Audio (ಬೆಸಂ_ಆಡಿಯೊ)']; 
//    $rows[$key]['BS_Audio'] = '=HYPERLINK("' . $value . '")';
    $rows[$key]['BS_Audio (ಬೆಸಂ_ಆಡಿಯೊ)'] = '=HYPERLINK("' . $value . '")';
    if($a != 26){
//    $value = $rows[$key]['Audio_of_example_in_BS']; 
    $value = $rows[$key]['Audio_of_example_in_BS (ಉದಾಹರಣೆ_ಆಡಿಯೊ_ಬೆಸಂ)']; 
//    $rows[$key]['Audio_of_example_in_BS'] = '=HYPERLINK("' . $value . '")';
    $rows[$key]['Audio_of_example_in_BS (ಉದಾಹರಣೆ_ಆಡಿಯೊ_ಬೆಸಂ)'] = '=HYPERLINK("' . $value . '")';
    }
//    print_r($rows[$key]['BS_Audio']);
  }

  foreach($rows as $row)
	
      $writer->writeSheetRow($querystr, $row);


  $writer->writeToFile($file);


}
  echo $file;
}

else
{

$file = $_GET['q'];
$filename = explode('/', $file); 

ob_end_clean(); 
header('Content-Description: File Transfer');
header("Content-Transfer-Encoding: utf8"); 
header('Content-Disposition: attachment; filename='. $filename[2]);
header('Content-Type: application/vnd.ms-excel;');

header('Content-Length: ' . filesize($file));

header('Expires: 0');
header('Cache-Control: must-revalidate');

header('Pragma: public');
 

readfile($file);

unlink($file);

}

?>