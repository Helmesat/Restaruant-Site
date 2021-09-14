function clearErrors(){
    for (var loopCounter=0;loopCounter< document.forms["newForm"].elements.length;loopCounter++){

        if(document.forms["newForm"].elements[loopCounter].parentElement.className.indexOf("has-")!=-1){
            document.forms["newForm"].elements[loopCounter].parentElement.className = "form-group";
        }
    }
}

function resetForm(){
    clearErrors();
    document.forms["newForm"]["name"].Text="";
    document.forms["newForm"]["email"].value="";
    document.forms["newForm"]["phone"].value="";
    document.forms["newForm"]["aditionalInformation"].value="";
    document.forms["newForm"]["visit"].value="";
    document.getElementById("submitButton").innerText="Send Request";
    document.forms["newForm"]["name"].focus();
}





function validateItems(){
    clearErrors();
    var name = document.forms["newForm"]["Name"].value;
    var email = document.forms["newForm"]["email"].value;
    var phone = document.forms["newForm"]["phone"].value;
    var aditionalInformation = document.forms["newForm"]["aditionalInformation"].value;
    var visit = document.forms["newForm"]["visit"].value;
    if
     (name == ""){
     alert("Please enter your name");
     document.forms["newForm"]["name"].parentElement.className="form-group has-error";
     document.forms["newForm"]["name"].focus();
     return false;
    }
    if
    (email== ""){
    alert("Please enter your valid email");
    document.forms["newForm"]["email"].parentElement.className="form-group has-error";
    document.forms["newForm"]["email"].focus();
    return false;
    }
    if
    (phone == "" || isNaN(phone)){
    alert("Please enter your phone");
    document.forms["newForm"]["phone"].parentElement.className="form-group has-error";
    document.forms["newForm"]["phone"].focus();
    return false;
    }
    if
    (aditionalInformation == ""){
    alert("Please fill this additional information.");
    document.forms["newForm"]["aditionalInformation"].parentElement.className="form-group has-error";
    document.forms["newForm"]["aditionalInformation"].focus();
    return false;
    }
    if
    (visit== ""){
    alert("Please enter your valid email");
    document.forms["newForm"]["visit"].parentElement.className="form-group has-error";
    document.forms["newForm"]["visit"].focus();
    return false;}
   
    document.getElementById("results").focus();
    return false;
}
