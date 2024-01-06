<?php
$constants = 0;
$dir = $_POST['q'];  

$files = explode (",", $dir); 

include("Constants.php"); 
include("CreateArchive.php");  

$zipPath = DOWNLOADS_FOLDER . 'SanketiDictionary-Audio-'.time().'.zip';
$zipper = new ZipArchiver($zipPath);
$parentdir = explode ("/", BASE_AUDIO_FOLDER);    
$zipper->addDir($parentdir[2]); 

/*
if($files[0] == "All")
{
   $zipper->zipDir(BASE_AUDIO_FOLDER, AUDIO_FOLDER_SAMPLE_SENTENCES_BS);
   $zipper->cleanup();
   echo $zipPath;
   exit;
}
*/

if(($files[0] == "All") || ($files[0] == "AllL") || ($files[0] == "AllP"))
{
   $pathdir = "";
   $zipdir = "";
   if($files[0] == "All")
   {
      $pathdir = BASE_AUDIO_FOLDER;
      $zipdir = AUDIO_FOLDER_SAMPLE_SENTENCES_BS;
   }
   else if($files[0] == "AllL")
   {
      $zipper->addDir($parentdir[2] . "/" . AUDIO_FOLDER_LESSONS); 
      $pathdir = BASE_AUDIO_FOLDER . "/" . AUDIO_FOLDER_LESSONS;
      //$pathdir = BASE_AUDIO_FOLDER;
      $zipdir = $files[1]; 
     // $zipdir = AUDIO_FOLDER_LESSONS . "/"  . $files[1]; 
   }
   else if($files[0] == "AllP")
   {
/*
      $pathdir = "./data/Audio";
      $zipdir = "Audio";
      echo $pathdir . " " . $zipdir . "   ";
*/
      $pathdir = BASE_AUDIO_FOLDER;
      $zipdir = AUDIO_FOLDER_ESSAY;
      $zipper->zipDir($pathdir, $zipdir);

      $pathdir = BASE_AUDIO_FOLDER;
      $zipdir = AUDIO_FOLDER_DICTIONARY_EXAMPLES_BS;
      $zipper->zipDir($pathdir, $zipdir);

      $pathdir = BASE_AUDIO_FOLDER . "/" . AUDIO_FOLDER_LESSONS;
      $zipdir = "BS";
      $zipper->zipDir($pathdir, $zipdir);

      $pathdir = BASE_AUDIO_FOLDER;
      $zipdir = AUDIO_FOLDER_SAMPLE_SENTENCES_BS;
      $zipper->zipDir($pathdir, $zipdir);

      $pathdir = BASE_AUDIO_FOLDER;
      $zipdir = AUDIO_FOLDER_DICTIONARY_WORDS_BS;
      $zipper->zipDir($pathdir, $zipdir);

      $zipper->cleanup();
      echo $zipPath; 
      exit;
   } 
   $zipper->zipDir($pathdir, $zipdir);
   $zipper->cleanup();
   echo $zipPath;
   exit;
}

$subDir = explode("/", $files[0]);
if($subDir[1] == AUDIO_FOLDER_SAMPLE_SENTENCES_BS)
   $zipper->addDir($parentdir[2] . "/" . AUDIO_FOLDER_SAMPLE_SENTENCES_BS); 
else if($subDir[1] == AUDIO_FOLDER_LESSONS)
{
   $zipper->addDir($parentdir[2] . "/" . AUDIO_FOLDER_LESSONS); 
   $zipper->addDir($parentdir[2] . "/" . AUDIO_FOLDER_LESSONS . "/" . $subDir[2]); 
}
else
{
   $zipper->addDir($parentdir[2] . "/" . AUDIO_FOLDER_DICTIONARY_WORDS_BS); 
   $zipper->addDir($parentdir[2] . "/" . AUDIO_FOLDER_DICTIONARY_EXAMPLES_BS); 
}

$zipper->zipFiles($files);
$zipper->cleanup();
echo $zipPath;

?>