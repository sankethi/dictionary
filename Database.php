<?php

$conn = new mysqli($servername,$username,$password,$dbname);
     
if ($conn -> connect_errno)
{
   echo "Failed to connect to MySQL: " . $conn -> connect_error;
   exit();
}
$conn->set_charset("utf8"); 

$sql = "select * from " . $q;
$result = ($conn->query($sql));

$row = []; 
$output = []; 
  
if ($result->num_rows > 0) 
{
    $row = $result->fetch_all(MYSQLI_ASSOC);  
}
?>
