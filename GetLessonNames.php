<?php
 
 $constants = 0;
 include("Constants.php");
 $folder = BASE_AUDIO_FOLDER . "/" . AUDIO_FOLDER_LESSONS . "/" . $q;
 $handle = opendir($folder);
 $filenames = array();
 while(FALSE !== $f = readdir($handle))
  if($f != '.' && $f != '..' && $f != basename(__FILE__))
  {
    $name = explode (".", $f);  
    if($name[1] == "aac")  
      array_push($filenames,$name[0]);
  }
 closedir($handle); 
 echo(json_encode($filenames));

?>