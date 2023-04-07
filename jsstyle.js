// let slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassmember("mySlides");
//   let dots = document.getElementsByClassmember("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].classmember = dots[i].classmember.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].classmember += " active";

// }

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

function openForm1() {
  document.getElementById("myForm1").style.display = "block";
}

function closeForm1() {
  document.getElementById("myForm1").style.display = "none";
}

function printError(elemId, hintMsg) {
  document.getElementById(elemId).innerHTML = hintMsg;
}

// function validateForm() { 
//   var member = document.myForm1.member.value;
//   var contact = document.myForm1.contact.value;
//   var age = document.myForm1.age.value;
//   var gender = document.myForm1.gender.value;
//   var email = document.myForm1.emaill.value;
//   // var pass = document.myForm1.pass.value

//   // var memberErr =  contactErr = ageErr = genderErr = emailErr = true;
//   var memberErr = true;
//   var contactErr = true;
//   var ageErr = true;
//   var genderErr = true;
//   var emailErr = true;


//   if(member == "")
//   {
//     printError("memberErr", "Please enter your member");
//   } 
//   else 
//   {
//     var regex = /^[a-zA-Z\s]+$/;                
//     if(regex.test(member) === false) 
//     {
//         printError("memberErr", "Please enter a valid member");
//     } 
//     else 
//     {
//         printError("memberErr", "");
//         memberErr = false;
//     }
//   }

//   if(contact == "") 
//   {
//     printError("contactErr", "Please enter your mobile number");
//   } 
//   else 
//   {
//     var regex = /^[1-9]\d{9}$/;
//     if(regex.test(contact) === false) 
//     {
//       printError("contactErr", "Please enter a valid 10 digit mobile number");
//     } 
//     else
//     {
//       printError("contactErr", "");
//       contactErr = false;
//     }
//   }

//   if(gender == "") 
//   {
//     printError("genderErr", "Please select your gender");
//   } 
//   else {
//     printError("genderErr", "");
//     genderErr = false;
//   }

//   if(age == "") 
//   {
//     printError("ageErr", "Please enter your age");
//   } 
//   else 
//   {
//     var regex = /^[1-9]\d{1}$/;
//     if(regex.test(age) === false) 
//     {
//       printError("ageErr", "Please enter a valid age.");
//     } 
//     else
//     {
//       printError("ageErr", "");
//       ageErr = false;
//     }
//   }

//   if(email == "") 
//   {
//     printError("emailErr", "Please enter your email address");
//   } 
//   else 
//   {
//     var regex = /^\S+@\S+\.\S+$/;
//     if(regex.test(email) === false) 
//     {
//       printError("emailErr", "Please enter a valid email address");
//     } 
//     else
//     {
//       printError("emailErr", "");
//       emailErr = false;
//     }
//   }

//   if((memberErr || emailErr || contactErr || ageErr || genderErr) == true) 
//   {
//     return false;
//   }
//   else 
//   {
//     var dataPreview = "You've entered the following details: \n" +
//                       "Full member: " + member + "\n" +
//                       "Email Address: " + email + "\n" +
//                       "Contact Number: " + contact + "\n" +
//                       "Age: " + age + "\n" +
//                       "Gender: " + gender + "\n";
//     alert(dataPreview);
//   }

// }

// function validateForm() {
//   var memberInput = document.forms["myForm1"]["member"];
//   var contactInput = document.forms["myForm1"]["contact"];
//   var ageInput = document.forms["myForm1"]["age"];
//   var genderInput = document.querySelector('input[member="gender"]:checked');
//   var emailInput = document.forms["myForm1"]["emaill"];
//   var passwordInput = document.forms["myForm1"]["passs"];

//   var memberErr = document.getElementById("memberErr");
//   var contactErr = document.getElementById("contactErr");
//   var ageErr = document.getElementById("ageErr");
//   var sexErr = document.getElementById("sexErr");
//   var emailErr = document.getElementById("emailErr");

//   // Reset errors
//   memberErr.innerHTML = "";
//   contactErr.innerHTML = "";
//   ageErr.innerHTML = "";
//   sexErr.innerHTML = "";
//   emailErr.innerHTML = "";

//   // Validate member
//   if (memberInput.value == "") {
//     memberErr.innerHTML = "Please enter your member";
//     memberInput.focus();
//     return false;
//   }

//   // Validate contact number
//   if (contactInput.value == "") {
//     contactErr.innerHTML = "Please enter your contact number";
//     contactInput.focus();
//     return false;
//   } else if (!/^\d{10}$/.test(contactInput.value)) {
//     contactErr.innerHTML = "Please enter a valid 10-digit contact number";
//     contactInput.focus();
//     return false;
//   }

//   // Validate age
//   if (ageInput.value == "") {
//     ageErr.innerHTML = "Please enter your age";
//     ageInput.focus();
//     return false;
//   } else if (!/^\d{1,2}$/.test(ageInput.value)) {
//     ageErr.innerHTML = "Please enter a valid age";
//     ageInput.focus();
//     return false;
//   }

//   // Validate gender
//   if (genderInput == null) {
//     sexErr.innerHTML = "Please select your gender";
//     return false;
//   }

//   // Validate email
//   if (emailInput.value == "") {
//     emailErr.innerHTML = "Please enter your email";
//     emailInput.focus();
//     return false;
//   } else if (!/\S+@\S+\.\S+/.test(emailInput.value)) {
//     emailErr.innerHTML = "Please enter a valid email";
//     emailInput.focus();
//     return false;
//   }

//   // Validate password
//   if (passwordInput.value == "") {
//     alert("Please enter a password.");
//     passwordInput.focus();
//     return false;
//   }

//   return true;
// }



// function validateForm1() {
//   // Get the values of the email and password input fields
//   var email = document.forms["myForm"]["email"].value;
//   var pass = document.forms["myForm"]["pass"].value;

//   // Check if the email is valid
//   var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   if (!emailRegex.test(email)) {
//     document.getElementById("eemailErr").innerHTML = "Please enter a valid email address";
//     return false;
//   } else {
//     document.getElementById("eemailErr").innerHTML = "";
//   }

//   // Check if the password is at least 8 characters long
//   if (pass.length < 8) {
//     document.getElementById("epassErr").innerHTML = "Password must be at least 8 characters long";
//     return false;
//   } else {
//     document.getElementById("epassErr").innerHTML = "";
//   }

//   // If both fields are valid, allow the form to be submitted
//   return true;
// }

// Add event listeners to the input fields to validate them as the user types
// document.getElementById("email").addEventListener("input", function() {
//   validateForm1();
// });
// document.getElementById("pass").addEventListener("input", function() {
//   validateForm1();
// });

// var app = angular.module('myApp', []);
// app.controller('myCtrl', function($scope) {
// 	$scope.submitForm = function() {
// 		// handle form submission
// 	};

// 	$scope.closeForm = function() {
// 		// handle form closing
// 	};
// });

  var app = angular.module('myApp', []);
  app.controller('myCtrl', function($scope) {
    function validate() {
      var mail = document.getElementById("mail").value;
    var eemailErr = document.getElementById("emailErr");
    var pas = document.getElementById("pas").value;
    var pasErr = document.getElementById("pasErr");

    var mailCheck = /^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    var passCheck = /^.{8}$/;


    if(mailCheck.test(mail)) {
      eemailErr.innerHTML="";
    }
    else{
      eemailErr.innerHTML="There is an error";
    }

    if(passCheck.test(pas)) {
      pasErr.innerHTML="";
    }
    else {
      pasErr.innerHTML="There is an error";
    }
    $scope.submitForm = function() {
      // your login form logic here
    };
    $scope.closeForm = function() {
      // your close form logic here
    };
    }
    
  });


