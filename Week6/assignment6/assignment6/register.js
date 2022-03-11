window.onload = pageLoad;
function pageLoad()
{
    var form = document.getElementById("myForm");
    form.onsubmit = validateForm;
}

function validateForm() 
{
    alert("validateForm Run");

    var firstname = document.forms["myForm"]["firstname"];
    var lastname = document.forms["myForm"]["lastname"];
    var gender = document.forms["myForm"]["gender"];
    var birtday = document.forms["myForm"]["bday"];
    var email = document.forms["myForm"]["email"];
    var username = document.forms["myForm"]["username"];
    var password = document.forms["myForm"]["password"];
    var errormsg = document.getElementById("errormsg")
    errormsg.innerText = "";
    var result = true;

    if(firstname.value == ""){
        errormsg.innerText += "required firstname,"
        result = false; 

    }

    if(lastname.value == ""){
        errormsg.innerText += "required lastname,"
        result = false; 

    }
    if(gender.value == ""){
        errormsg.innerText += "required gender,"
        result = false; 

    }
    if(birtday.value == ""){
        errormsg.innerText += "required birtday,"
        result = false; 

    }
    if(email.value == ""){
        errormsg.innerText += "requiredemail,"
        result = false; 

    }
    if(username.value == ""){
        errormsg.innerText += "required username,"
        result = false; 

    }

    if(password[0].value != password[1].value )
    {
        errormsg.innerText += "required PasswordValue,"
        result = false;
    }
    if (result == false)
    {
        return false;
    }
    
   
}