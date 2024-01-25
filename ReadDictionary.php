<?php    

include("Constants.php");
include("Database.php");

if(!empty($row))
  foreach($row as $rows)
  { 
	array_push($output,array($rows['ID (ಸಂಖ್ಯೆ)'],
                          $rows['English (ಆಂಗ್ಲ)'],
                          $rows['Kannada_in_english (ಕನ್ನಡ_ಆಂಗ್ಲಾದಲ್ಲಿ)'],
                          $rows['Kannada_in_kannada (ಕನ್ನಡ_ಕನ್ನಡದಲ್ಲಿ)'],
                          $rows['BS_in_english (ಬೆಸಂ_ಆಂಗ್ಲಾದಲ್ಲಿ)'],
                          $rows['BS_in_kannada (ಬೆಸಂ_ಕನ್ನಡದಲ್ಲಿ)'],
                          $rows['BS_Audio (ಬೆಸಂ_ಆಡಿಯೊ)'],
                          $rows['KS_in_english (ಕೌಸಂ_ಆಂಗ್ಲಾದಲ್ಲಿ)'],
                          $rows['KS_in_kannada (ಕೌಸಂ_ಕನ್ನಡದಲ್ಲಿ)'],
                          $rows['KS_Audio (ಕೌಸಂ_ಆಡಿಯೊ)'],
                          $rows['LS_in_english (ಲಿಸಂ_ಆಂಗ್ಲಾದಲ್ಲಿ)'],
                          $rows['LS_in_kannada (ಲಿಸಂ_ಕನ್ನಡದಲ್ಲಿ)'],
                          $rows['LS_Audio (ಲಿಸಂ_ಆಡಿಯೊ)'],
                          $rows['MS_in_english (ಮಸಂ_ಆಂಗ್ಲಾದಲ್ಲಿ)'],
                          $rows['MS_in_kannada (ಮಸಂ_ಕನ್ನಡದಲ್ಲಿ)'],
                          $rows['MS_Audio (ಮಸಂ_ಆಡಿಯೊ)'],
                          $rows['Part_of_Speech (ಪದ ವಿಭಾಗ)'],
                          $rows['Category (ವರ್ಗ)'],
                          $rows['Example_in_english (ಉದಾಹರಣೆ_ಆಂಗ್ಲಾದಲ್ಲಿ)'],
                          $rows['Example_in_kannada_english_font (ಉದಾಹರಣೆ_ಕನ್ನಡ_ಆಂಗ್ಲ ಲಿಪಿ)'],
                          $rows['Example_in_kannada_kannada_font (ಉದಾಹರಣೆ_ಕನ್ನಡ_ಕನ್ನಡ ಲಿಪಿ)'],
                          $rows['Example_in_BS_english_font (ಉದಾಹರಣೆ_ಬೆಸಂ_ಆಂಗ್ಲ ಲಿಪಿ)'],
                          $rows['Example_in_BS_kannada_font (ಉದಾಹರಣೆ_ಬೆಸಂ_ಕನ್ನಡ ಲಿಪಿ)'],
                          $rows['Audio_of_example_in_BS (ಉದಾಹರಣೆ_ಆಡಿಯೊ_ಬೆಸಂ)'],
                          $rows['Example_in_KS_english_font (ಉದಾಹರಣೆ_ಕೌಸಂ_ಆಂಗ್ಲ ಲಿಪಿ)'],
                          $rows['Example_in_KS_kannada_font (ಉದಾಹರಣೆ_ಕೌಸಂ_ಕನ್ನಡ ಲಿಪಿ)'],
                          $rows['Audio_of_example_in_KS (ಉದಾಹರಣೆ_ಆಡಿಯೊ_ಕೌಸಂ)'],
                          $rows['Example_in_LS_english_font (ಉದಾಹರಣೆ_ಲಿಸಂ_ಆಂಗ್ಲ ಲಿಪಿ)'],
                          $rows['Example_in_LS_kannada_font (ಉದಾಹರಣೆ_ಲಿಸಂ_ಕನ್ನಡ ಲಿಪಿ)'],
                          $rows['Audio_of_example_in_LS (ಉದಾಹರಣೆ_ಆಡಿಯೊ_ಲಿಸಂ)'],
                          $rows['Example_in_MS_english_font (ಉದಾಹರಣೆ_ಮಸಂ_ಆಂಗ್ಲ ಲಿಪಿ)'],
                          $rows['Example_in_MS_kannada_font (ಉದಾಹರಣೆ_ಮಸಂ_ಕನ್ನಡ ಲಿಪಿ)'],
                          $rows['Audio_of_example_in_MS (ಉದಾಹರಣೆ_ಆಡಿಯೊ_ಮಸಂ)'])); 
   }
?>
