<!DOCTYPE html>
<html>
    <head>
        <title>Thavage Fitness</title>
        <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
    </head>
    <link rel="stylesheet" type="text/css" href="style.css"/>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,1,0" />
    <script type="text/javascript" src="jsstyle.js"></script>

    <style>

    </style>
    
    <!-- <script>
        angular.module('myApp', []).controller('namesCtrl', function($scope) {
            $scope.names = [
                {name:'Jayesh',country:'India'},
                {name:'Chintan',country:'Sweden'},
                {name:'Mahesh',country:'England'},
                {name:'Hetal',country:'Norway'},
                {name:'Arnav',country:'Pakistan',born:'jan'},
                {name:'Gaurav',country:'Sweden'},
                {name:'Binita',country:'Denmark'},
                {name:'Madhura',country:'England'},
                {name:'Kamlesh',country:'India'}
                ];
            $scope.orderByMe = function(x) {
                $scope.myOrderBy = x;
            }
        });
        </script> -->
    <!-- <body ng-app="myApp" ng-controller="namesCtrl"> -->
        
         <div class="navbar">
            <div class="left">
                <img src="logo.png" alt="">
                <div class="logo">
                    <a href="#" class="active"><h1>Thavage Fitness</h1></a>
                </div>
            </div>
            <div class="mid">
                <div class="navbar">
                    <h2 class="navbar1">
                        <!-- <a href="thavage.html" class="active">Home</a>
                        <a href="membership.html"> Memberships</a>
                        <a href="#"> Facilities</a>
                        <a href="records.html"> Records</a> -->
                         <nav>
                            <ul class="nvbr">
                                <li>
                                    <a href="thavage.html">Home</a>
                                </li>
                                <li>
                                    <a href="membership.html">Memberships</a>
                                </li>
                                <li>
                                    <a href="facilities.html">Facilities</a>
                                </li>
                                <li>
                                    <a href="records.php" class="active">Records</a>
                                </li>
                            </ul>
                        </nav>
                    </h2>
                </div>
            </div>
             <div class="right">
                <button class="signup-button" onclick="openForm1()"><h2>Join Now</h2></div>
            </div>
            <div class="signup-popup" id="myForm1">
                <form name="myForm1"  onsubmit="return validateForm()" method="post" class="form-container1">
                    <h2>Join Now</h2>

                    <label for="fname"><b>Name</b></label>
                    <input type="text" placeholder="Enter First Name" name="name" required>
                    <div class="error" id="nameErr"></div> 
                    <!-- <br>
                    <label for="lname"><b>Last Name</b></label>
                    <input type="text" placeholder="Enter Last Name" name="lname" required>
                    <div class="error" id="lnameErr"></div> -->
                    
                    <label for="contact"><b>Contact Number</b></label>
                    <input type="text" placeholder="Enter Contact Number" name="contact" maxlength="10" required>
                    <div class="error" id="contactErr"></div>
                    
                    <label for="age"><b>Age</b></label>
                    <input type="text" placeholder="Enter Age" name="age" maxlength="2" required>
                    <div class="error" id="ageErr"></div>
                    
                    <label for="sex"><b>Gender</b></label>
                    <div class="form-inline">
                        <label><input type="radio" name="gender" value="male"> Male</label>
                        <label><input type="radio" name="gender" value="female"> Female</label>
                    </div>
                    <!-- <input type="text" placeholder="Enter Gender" name="sex" maxlength="1" required> -->
                    <div class="error" id="sexErr"></div>
                    
                    <label for="emaill"><b>Email</b></label>
                    <input type="text" placeholder="Enter Email" name="emaill" required>
                    <div class="error" id="emailErr"></div>
                    
                    <label for="passs"><b>Create Password</b></label>
                    <input type="password" placeholder="Create Password" name="passs" required>

                    <br>
                    <div class="btnspace1">
                        <button type="Submit" class="btns">Join Now</button>
                        <button type="Button" class="btns cancel" onclick="closeForm1()">Close</button>
                    </div>
                    
                </form>
            </div>            
            <div class="rright">
                <button class="open-button" onclick="openForm()"><h2>Log In</h2></button>
            </div>
            <div class="form-popup" id="myForm" ng-app="myApp" ng-controller="myCont">
                <form name="myForm" action="/action_page.php" class="form-container">
                    <h2>Login</h2>

                    <label for="email"><b>Email</b></label>
                    <input type="text" placeholder="Enter Email" name="email" id="mail" required>
                    <div class="error" id="eemailErr"></div>
                    <br>
                    <label for="pass"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="pass" id="pas" required>
                    <div class="error" id="pasErr"></div>
                    <br>
                    <br>
                    <br>
                    <div class="btnspace">
                        <button type="Submit" class="btn" onclick="validate()">Login</button>
                        <button type="Button" class="btn cancel" onclick="closeForm()">Close</button>
                        <div class="error" id="passErr"></div>
                    </div>
                    
                </form>
            </div>
            <br> 
            <!-- <p>Click the table headers to change the sorting order:</p>
            <body ng-app="myApp" ng-controller="namesCtrl"></body>
                <div >
    
                    <table border="1" width="100%">
                        <tr>
                            <th ng-click="orderByMe('name')">Name</th>
                            <th ng-click="orderByMe('country')">Country</th>
                        </tr>
                        <tbody>
                            <tr ng-repeat="x in names | orderBy:myOrderBy">
                                <td>{{x.name}}</td>
                                <td>{{x.country}}</td>
                            </tr>
                        </tbody>
                    </table>
    
                </div>
            </body> -->
            <!-- <body>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Contact Number</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Email</th>
                        <th>Password</th>
                    </tr>
                </table>
            </body> -->
            <?php
            $conn = mysqli_connect("localhost", "root", "","thavage");
            if ($conn-> connect_error) {
                die("Connection Failed:". $conn-> connect_error);
            }

            $sql = "select * from signup_details";
            $result = $conn-> query($sql);
            
            if ($result-> num_rows > 0) {
                echo "<table>";
                echo "</th><th>Name</th><th>Contact</th><th>Age</th><th>Gender</th><th>Email</th><th>Password</th></tr>";
                while ($row = $result-> fetch_assoc()) {
                    echo "<tr><td>". $row["full_name"] ."</td><td>". $row["contact"] ."</td><td>". $row["age"] ."</td><td>". $row["gender"] ."</td><td>". $row["email"] ."</td><td>". $row["pass"] ."</td></tr>" ;
                }
                echo "</table>";
            }
            else {
                echo "0 result";
            }

            $conn-> close();
            ?>
        
                
        <!-- </body> -->
    </html>    