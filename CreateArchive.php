<?php

Class ZipArchiver 
{
    private $z;

    function __construct($zipPath) 
    {
        $this->z = new ZipArchive();
        $this->z->open($zipPath, ZipArchive::CREATE);
    }

    public function zipDir($sourcePath, $subDir)
    {   //echo "sourcePath:". $sourcePath . "  "; ./data/Audio
        $pathInfo = pathinfo($sourcePath); //echo "pathInfo:". $pathInfo . "  "; ./data/Audio
        $parentPath = $pathInfo['dirname']; //echo "parentPath:". $parentPath . "  ";  ./data
        $dirName = $pathInfo['basename'];  //echo "dirName:". $dirName . "  "; Audio
//echo "src=". $sourcePath . "  " . "dirName=" . $dirName . "  ";
        if($sourcePath == $dirName)
          self::dirToZip($sourcePath, 0, $subDir);
        else
   //       self::dirToZip($sourcePath, strlen("$parentPath/"), $subDir);        
//            self::dirToZip($sourcePath, 7, $subDir);        
            self::dirToZip($sourcePath, strlen(BASE_DATA_FOLDER), $subDir);        
    }
    
    private function dirToZip($folder, $exclusiveLength, $subDir)
    { //echo "folder=" . $folder . "  " . "exclLen=" . $exclusiveLength . "  " .  "subDir=" . $subDir . "\n";
        $handle = opendir($folder);
        while(FALSE !== $f = readdir($handle)){//echo "f=" . $f . "\n\n";
            // Check for local/parent path or zipping file itself and skip
             if($f != '.' && $f != '..' && $f != basename(__FILE__)){ 
                $filePath = "$folder/$f"; 
	//          if(($subDir != "Audio") && (is_dir($filePath)) && $f != $subDir) continue; 
                if((is_dir($filePath)) && $f != $subDir) continue; 
                // Remove prefix from file path before add to zip
                $localPath = substr($filePath, $exclusiveLength);
                if(is_file($filePath)){
                    $this->z->addFile($filePath, $localPath); 
                }elseif(is_dir($filePath)){//echo "localpath:".$localPath." " ; echo "filepath:".$filePath." " ;  echo "exclusiveLength:".$exclusiveLength." " ;  echo "subDir:".$subDir." " ;
                    // Add sub-directory
                    $this->z->addEmptyDir($localPath); 
                      self::dirToZip($filePath, $exclusiveLength, $subDir); 
                }
            }
        }
        closedir($handle);
     }    

      public function zipFile($fullfilename,$filename)
      {
         $this->z->addFile($fullfilename,$filename);
      }

      public function addDir($filePath)
      {
          $this->z->addEmptyDir($filePath); // for Audio
      }

      public function cleanup()
      {
	   $this->z->close();
      }

      public function zipFiles($sourceFiles)
      {     
        $i=sizeof($sourceFiles); 
	for($n=0;$n<$i;$n++)
	{
           $filePath = BASE_DATA_FOLDER . $sourceFiles[$n]; 
	   $this->z->addFile($filePath, $sourceFiles[$n]);
	}
      }
}

?>