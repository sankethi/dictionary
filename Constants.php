<?php    

if($constants == 0)
{

define("BASE_DATA_FOLDER", "./data/");
define("BASE_AUDIO_FOLDER", BASE_DATA_FOLDER . "Audio");
define("AUDIO_FOLDER_ESSAY", "Essay");
define("AUDIO_FOLDER_DICTIONARY_WORDS_BS", "Sanketi words");
define("AUDIO_FOLDER_DICTIONARY_EXAMPLES_BS", "Examples");
define("AUDIO_FOLDER_SAMPLE_SENTENCES_BS", "Sanketi sentences");
define("AUDIO_FOLDER_LESSONS", "Lessons");
define("DOWNLOADS_FOLDER", "./Downloads/");
define("AUDIO_BS_WORD", "6");
define("AUDIO_BS_EXAMPLE", "23");

$servername = "192.168.1.2";
$username = "root";
$password = "";
$dbname = "sanketi dictionary";

$constants = 1;

}

$q = $_REQUEST["q"];    

?>