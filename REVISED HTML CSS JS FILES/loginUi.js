function checkCred()
{
    var username=document.forms["login-form"]["username"].value;
    var password=document.forms["login-form"]["password"].value;
    if(username == "school"&& password =="myPassword")
    {
        alert("you're logged in!");
        return false;
    }
    else
    {
        alert("hmm, that doesn't match our records");
        return false;
    }
}

function show(a) 
{
    var x=document.getElementById(a);
    var c=x.previousElementSibling
    if (x.getAttribute('type') === "password") 
    {
        c.removeAttribute("class");
        c.setAttribute("class","fas fa-eye");
        x.removeAttribute("type");
            x.setAttribute("type","text");
    } else {
        x.removeAttribute("type");
            x.setAttribute('type','password');
        c.removeAttribute("class");
        c.setAttribute("class","fas fa-eye-slash");
    }
}

function registerSub()
{
    var newUsername=document.getElementById('signupId').value;
    var newPassword=document.getElementById('id_new_password').value;
    var confPassword=document.getElementById('confirm_id_password').value;
    if(newUsername == " ") 
    {
        alert( "The Name field is empty!" );
        return false;
    } else if (newPassword == " ")
     {
        alert( "The Password field is empty!" );
        return false;
   } else if (confPassword == " ") {
        alert( "The Confirm Password field is empty!" );
        return false;
   } else {
        alert("Thanks For Registering!")
        return false;
   }
}
const loginForm = document.querySelector("form.login-form")
const registerForm = document.querySelector("form.register-form")
const loginBtn = document.querySelector("label.login")
const registerBtn = document.querySelector("label.register")
const loginText = document.querySelector(".log-reg-container .log-button")
const registerText = document.querySelector(".log-reg-container .reg-button")
const logEyes = document.getElementById('togglePassword')
const regEyes1 = document.getElementById('NewTogglePassword')
const regEyes2 = document.getElementById('ConfirmTogglePassword')

registerBtn.onclick = (()=>{
    loginForm.style.marginLeft = "-50%";
    loginText.style.marginLeft = "-50%";
    logEyes.style.visibility = "hidden";
    regEyes1.style.visibility = "visible";
    regEyes2.style.visibility = "visible";

});
loginBtn.onclick = (()=>{
    loginForm.style.marginLeft = "0%";
    loginText.style.marginLeft = "0%";
    logEyes.style.visibility = "visible";
    regEyes1.style.visibility = "hidden";
    regEyes2.style.visibility = "hidden";

});