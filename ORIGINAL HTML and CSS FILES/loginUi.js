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