import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
  // import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";

  import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
  } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyCkWpa1hNYHbnGAhh_c8f47OQnRaUfURHA",
    authDomain: "bootcamp-5f3e8.firebaseapp.com",
    projectId: "bootcamp-5f3e8",
    storageBucket: "bootcamp-5f3e8.appspot.com",
    messagingSenderId: "608928182775",
    appId: "1:608928182775:web:19d6e8614bdfae58983ef2",
    measurementId: "G-CEEY9ZH6ZX"
  };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const auth = getAuth();

  const submitButton = document.getElementById("submit");
  const signupButton = document.getElementById("sign-up");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const main = document.getElementById("main");
  const createacct = document.getElementById("create-acct");
  
  const signupEmailIn = document.getElementById("email-signup");
  const confirmSignupEmailIn = document.getElementById("confirm-email-signup");
  const signupPasswordIn = document.getElementById("password-signup");
  const confirmSignupPasswordIn = document.getElementById(
    "confirm-password-signup"
  );
  const createacctbtn = document.getElementById("create-acct-btn");
  
  const returnBtn = document.getElementById("return-btn");



  var email,
  password,
  signupEmail,
  signupPassword,
  confirmSignupEmail,
  confirmSignupPassword


createacctbtn.addEventListener("click",function (){
    console.log("hello")
    var isVarified = true;

    signupEmail = signupEmailIn.Value;
    confirmSignupEmail = confirmEmailSignupIn.Value;
    if (signupEmail != confirmSignupEmail){
        window.alert("Email input does not match");
        isVarified = false;
    }

    signupPassword = signupPasswordIn.Value;
    confirmSignupPassword = confirmSignupPasswordIn.Value;
    if (signupPassword != confirmSignupPassword){
        window.alert("password input does not match");
        isVarified = false;
    }

    if (signupEmail == null ||
        confirmSignupEmailIn == null ||
        signupPassword == null ||
        confirmSignupPassword == null 
        ) {
            window.alert("please fill aut all required fields");
        }

        if (isVarified){
            createUserWithEmailAndPassword(auth, signupEmail, signupPassword)
            .then((userCreadentials) => {
                window.alert("succes! Account Created");
                window.location = "createTask.html";
          })
          .catch((error) => {
            window.alert("error occured.Try Again")
          });
        }         
})

submitButton.addEventListener("click", function (){
  email = emailInput.Value;
  password = passwordInput.Value;

signInWithEmailAndPassword(auth,email,password)
.then((userCreadentials) => {
  window.alert("succes! Wellcome Back");
  window.location = "./createTask.html";
}
)
.catch((error) => {
   const errorMessage = error.message
   window.alert(errorMessage);
})



})


 signupButton.addEventListener("click", function(){
    main.style.display = "none";
     createacct.style.display = "block"
 })
 
returnBtn.addEventListener("click", function(){
    main.style.display = "block";
    createacct.style.display = "none"
})
 