<?php
$server_name="localhost";
$username="root";
$password="";
$database_name="thavage";

$conn=mysqli_connect($server_name,$username,$password,$database_name);
if(!$conn)
{
    die("connection failed:" . mysqli_connect_error());
}
if(isset($_POST['save']))
{	
	 $full_name = $_POST['full_name'];
	 $contact = $_POST['contact'];
     $age = $_POST['age'];
	 $gender = $_POST['gender'];
	 $email = $_POST['emaill'];
	 $pass = $_POST['passs'];

	 $sql_query = "INSERT INTO signup_details (full_name,contact,age,gender,email,pass)
	 VALUES ('$full_name','$contact','$age','$gender','$email','$pass')";

	 if (mysqli_query($conn, $sql_query)) 
	 {
		echo "New Details Entry inserted successfully !";
	 } 
	 else
     {
		echo "Error: " . $sql . "" . mysqli_error($conn);
	 }
	 mysqli_close($conn);
}
?>