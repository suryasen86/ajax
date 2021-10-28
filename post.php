<?php

if(isset($_POST["date"]) || isset($_POST["time"])) {
$time="";
$date="";
if(isset($_POST['time'])){
  $time=$_POST['time'];
}
if(isset($_POST['date']))
{$date=$_POST['date'];}
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "ajax";
// echo $time."<br>";
// echo $date;
       // Create connection
       $conn = new mysqli($servername, $username, $password, $dbname);
       // Check connection
       if ($conn->connect_error) {
         die("Connection failed: " . $conn->connect_error);
       }
       $sql = "INSERT INTO info (text, text2)
VALUES ('$time', '$date')";

if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
}
?>