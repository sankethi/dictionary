<?php
$constants = 0;
include("Constants.php");
include("CreateArchive.php");  

$zipPath = DOWNLOADS_FOLDER . 'SanketiDictionary-'.time().'.zip';
$zipper = new ZipArchiver($zipPath);
$dir = explode ("/", BASE_AUDIO_FOLDER);    
$zipper->addDir($dir[2]); 

if($q == "All")
{
   $zipper->zipDir(BASE_AUDIO_FOLDER, AUDIO_FOLDER_DICTIONARY_WORDS_BS);
   $zipper->zipDir(BASE_AUDIO_FOLDER, AUDIO_FOLDER_DICTIONARY_EXAMPLES_BS);
   $zipper->cleanup();
   echo $zipPath;
   exit;
}

include("ReadDictionary.php");

$dir = explode ("\\", $output[0][AUDIO_BS_WORD]);    
$zipper->addDir($dir[0] . "/" . $dir[1]);
$dir = explode ("\\", $output[0][AUDIO_BS_EXAMPLE]);   
$zipper->addDir($dir[0] . "/" . $dir[1]);

for($n=0;$n<count($output);$n++)
{ 
   addToZipFile($zipper,$output[$n][AUDIO_BS_WORD]); 
   addToZipFile($zipper,$output[$n][AUDIO_BS_EXAMPLE]); 
}

$zipper->cleanup();
echo $zipPath;

function addToZipFile($z,$file)
{
    $filename =  str_replace('\\', '/', $file);
    $fullfilename = BASE_DATA_FOLDER . $filename; 
    $z->zipFile($fullfilename,$filename);
}
?>