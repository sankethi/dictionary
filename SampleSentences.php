<?php
/*
   $servername = "localhost";
   $username = "root";
   $password = "";
   $dbname = "sanketi dictionary";
*/
   $constants = 0;
   include("Constants.php");
     
   // connect the database with the server
   $conn = new mysqli($servername,$username,$password,$dbname);
     
    // if error occurs 
    if ($conn -> connect_errno)
    {
       echo "Failed to connect to MySQL: " . $conn -> connect_error;
       exit();
    }
    $conn->set_charset("utf8"); // This will remove ? characters from appearing for letters that have a dot below


    $sql = "select * from " . "samplesentences";
    $result = ($conn->query($sql));
    //declare array to store the data of database
    $row = []; 
    $output = []; // this is the output buffer that is echoed
  
    if ($result->num_rows > 0) 
    {
        // fetch all data from db into array 
        $row = $result->fetch_all(MYSQLI_ASSOC);  
    }

    if(!empty($row))
      foreach($row as $rows)
      { 
/*
	array_push($output,array($rows['ID'],
                          $rows['English'],
                          $rows['Kannada_in_english'],
                          $rows['Kannada_in_kannada'],
                          $rows['BS_in_english'],
                          $rows['BS_in_kannada'],
                          $rows['BS_Audio'],
                          $rows['KS_in_english'],
                          $rows['KS_in_kannada'],
                          $rows['KS_Audio'],
                          $rows['LS_in_english'],
                          $rows['LS_in_kannada'],
                          $rows['LS_Audio'],
                          $rows['MS_in_english'],
                          $rows['MS_in_kannada'],
                          $rows['MS_Audio']
                   )); 
*/
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
                          $rows['MS_Audio (ಮಸಂ_ಆಡಿಯೊ)']
                   )); 
      }

    echo(json_encode($output));
?>
