

let email1 = document.getElementById("Email1");
let password1 = document.getElementById("Password1");
let name = document.getElementById("Name");
let username = document.getElementById("username");
let email2 = document.getElementById("Email2");
let password2 = document.getElementById("password2");
let submit1 = document.getElementById("submit1");
let submit2 = document.getElementById("submit2");
let errorMessageEmail1 = document.getElementById("errorMessageEmail1");
let errorMessagePassword1 = document.getElementById("errorMessagePassword1");
let errorMessageEmail = document.getElementById("errorEmail");
let errorMessagePassword = document.getElementById("errorPassword");
let errorMessageUsername = document.getElementById("errorUsername");
let errorMessageName = document.getElementById("errorName");

let checkEmpty = (str) => str === "" ? true : false ; //! not used yet


let getPassword = (str) => str.value;
let getEmail = (str) => str.value;
let getUsername = (str) => str.value;
let getName = str => str.value;

function checkEmail(email) {
    for (let str of email) {
        if (str === '@') {
            return true;
        }
    }
    return false;
}

function checkPassword(password) {
    if (password.length > 8) {
        return true;
    } else {
        return false;
    }
}

function checkUsername(user) {
    if(user === "")
    {
        return false;
    }
    for (let usr of user) {
       switch(usr)
       {
            case " ":
                case "-":
                    case "+":
                        case "`":
                            case "'":
                                case "\"":
                                    case "=":
                                         return false;
                                    break;
       }
    }
    return true;
}
let checkName = joe => (joe === "")? false : true ;


if(submit1){
submit1.addEventListener("click", function () {
    let check = checkEmail(getEmail(email1));
    if (!check) {
        errorMessageEmail1.innerHTML = "*wrong Email";
    } else {
        errorMessageEmail1.innerHTML = "";
    }
    //
    let check2 = checkPassword(getPassword(password1));
    if (!check2) {
        errorMessagePassword1.innerHTML = " *weak , password must be more than 8 characters";
    } else {
        errorMessagePassword1.innerHTML = "";
    }
});
}

if(submit2)
{
  submit2.addEventListener("click",function(){
    
    //check email  
    let check = checkEmail(getEmail(email2));
    if (!check) {
        errorMessageEmail.innerHTML = "*wrong Email";
    } else {
        errorMessageEmail.innerHTML = "";
    }
    //check password
    let check2 = checkPassword(getPassword(password2));
    if (!check2) {
        errorMessagePassword.innerHTML = " *weak , password must be more than 8 characters";
    } else {
        errorMessagePassword.innerHTML = "";
    }
    // check username
    let check3 = checkUsername (getUsername(username));
    if(!check3)
    {
        errorMessageUsername.innerHTML = "*wrong username , no special character";
    }else
    {
        errorMessageUsername.innerHTML = "";
    }
    // check Name
    if(checkName(getName(name)))
    {
        errorMessageName.innerHTML = "";
    }else
    {
        errorMessageName.innerHTML = "*empty"
    }
})  
};



