<?php

// connect the database with the server
$conn = new mysqli($servername,$username,$password,$dbname);
     
// if error occurs 
if ($conn -> connect_errno)
{
   echo "Failed to connect to MySQL: " . $conn -> connect_error;
   exit();
}
$conn->set_charset("utf8"); // This will remove ? characters from appearing for letters that have a dot below

$sql = "select * from " . $q;
$result = ($conn->query($sql));
//declare array to store the data of database
$row = []; 
$output = []; // this is the output buffer that is echoed
  
if ($result->num_rows > 0) 
{
    // fetch all data from db into array 
    $row = $result->fetch_all(MYSQLI_ASSOC);  
}
?>
