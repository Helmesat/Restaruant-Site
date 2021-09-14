function printError(Id,Msg){
    document.getElementById(Id).innerHTML = Msg;
}


function validateForm(){
    // var name = document.getElementById("name")
    // var email = document.getElementById("email")
    // var phone = document.getElementById("phone")

    var name = document.Form.name.value;
     var email = document.Form.email.value;
    var phone = document.Form.phone.value;
    var reasonForInquiry = document.Form.reasonForInquiry.value;
    var aditionalInformation = document.Form.aditionalInformation.value;
     var visit = document.Form.visit.value;
     var day = document.Form.day.value;
    
    
    // var nameErr = emailErr = phoneErr = reasonForInquiryErr = aditionalInformationErr = visitErr = dayErr = true;
//     if (name.value == "")
// {
//     alert("Please enter your name");
// }
//     if (email.value == "")
// {
//   alert("Please enter your email");
// }
//    if (phone.value == "")
// {
//    alert("Please enter your phone #");
// }if (name.value !="" && email.value !="" && phone.value !="")
// {
// alert("Thank you all info are valid");
// }
// return false;
// }



   if(name==""){
          printError("nameErr", "pleas enter your name");
           var elem = document.getElementById("name");
           elem.classList.add("input-2");
           elem.classList.remove("input-1");
    }else{
      var regex = / ^[ a-zA-Z\s]+$/;
          if(regex.test(name)===false){
              printError("nameErr", "pleas enter a valid name");
              var elem = document.getElementById("name");
              elem.classList.add("input-2");
              elem.classList.remove("input-1");
          }else{
             printError("nameErr", "");
             nameErr = false;
             var elem = document.getElementById("name");
             elem.classList.add("input-2");
             elem.classList.remove("input-1");
          }
      }


  if(email==""){
     printError("emailErr", "pleas enter your email address");
     var elem = document.getElementById("email");
         elem.classList.add("input-2");
         elem.classList.remove("input-1");
 }else{
     var regex = / ^\s+@\s+\.\s+$/;
     if(regex.test(email)===false){
        printError("emailErr", "pleas enter a valid email address");
         var elem = document.getElementById("email");
         elem.classList.add("input-2");
         elem.classList.remove("input-1");
     }else{
        printError("emailErr", "");
        nameErr = false;
        var elem = document.getElementById("email");
      elem.classList.add("input-2");
        elem.classList.remove("input-1");
     }
 }

 if(phone==""){
     printError("phoneErr", "pleas enter your phone number");
     var elem = document.getElementById("phone");
         elem.classList.add("input-2");
         elem.classList.remove("input-1");
 }else{
    var regex = / ^[1-9]\d{9}$/;
     if(regex.test(phone)===false){
       printError("phoneErr", "pleas enter a your phone number");
         var elem = document.getElementById("phone");
         elem.classList.add("input-2");
        elem.classList.remove("input-1");
     }else{
       printError("phoneErr", "");
       nameErr = false;
        var elem = document.getElementById("phone");
        elem.classList.add("input-2");
        elem.classList.remove("input-1");
  }
 }

  if(reasonForInquiry=="select"){
    printError("reasonForInquiryErr", "pleas select one reason");
         var elem = document.getElementById("reasonForInquiry");
            elem.classList.add("input-4");
             elem.classList.remove("input-3");
     }else{
            printError("reasonForInquiry", "");
            reasonForInquiryErr = false;
           var elem = document.getElementById("reasonForInquiry");
             elem.classList.add("input-4");
            elem.classList.remove("input-3");
      
        
  }
     if(aditionalInformation==""){
         printError("aditionalInformationErr", "pleas enter aditional information");
         var elem = document.getElementById("aditionalInformation");
             elem.classList.add("input-2");
             elem.classList.remove("input-1");
     }else{
         var regex = / ^[ a-zA-Z\s]+$/;
         if(regex.test(aditionalInformation)===false){
            printError("aditionalInformationErr", "pleas enter aditional information");
            var elem = document.getElementById("phone");
             elem.classList.add("input-2");
             elem.classList.remove("input-1");
         }else{
            printError("aditionalInformationErr", "");
            nameValidFeedback = false;
           var elem = document.getElementById("aditionalInformation");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
         }
     }

     if( visit==""){
        printError(" visitErr", "pleas select one ");
         var elem = document.getElementById("visit");
             elem.classList.add("input-4");
             elem.classList.remove("input-3");
     }else{
             printError("visitErr", "");
             visitErr = false;
           var elem = document.getElementById("visit");
            elem.classList.add("input-4");
             elem.classList.remove("input-3");
        }
      if(day==""){
         printError("dayErr", "pleas select one day ");
        var elem = document.getElementById("day");
             elem.classList.add("input-4");
             elem.classList.remove("input-3");
     }else{
            printError("dayErr", "");
             dayErr = false;
             var elem = document.getElementById("day");
             elem.classList.add("input-4");
             elem.classList.remove("input-3");
        }
        if((nameErr || emailErr || phoneErr || reasonForInquiryErr || aditionalInformationErr || visitErr || dayErr )== true){
            return false;
        }
 };

