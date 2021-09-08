function printValidFeedback(Id,Msg){
    document.getElementById(Id).innerHTML = Msg;
}


function validateForm(){
    var name = document.Form.name.value;
    var email = document.Form.email.value;
    var phone = document.Form.phone.value;
    var reasonForInquiry = document.Form.reasonForInquiry.value;
    var aditionalInformation = document.Form.aditionalInformation.value;
    var visit = document.Form.visit.value;
    var day = document.Form.day.value;
    
    
    var nameValidFeedback = emailValidFeedback = phoneValidFeedback = reasonForInquiryvalidFeedback = aditionalInformationValidFeedback = visitFeedback = dayValidFeedback = true;
  
     if(name==""){
         printValidFeedback("nameValidFeedback", "pleas enter your name");
         var elem = document.getElementById("name");
             elem.classList.add("input-2");
             elem.classList.remove("input-1");
     }else{
         var regex = / ^[ a-zA-Z\s]+$/;
         if(regex.test(name)===false){
             printValidFeedback("nameValidFeedback", "pleas enter a valid name");
             var elem = document.getElementById("name");
             elem.classList.add("input-2");
             elem.classList.remove("input-1");
         }else{
            printValidFeedback("nameValidFeedback", "");
            nameValidFeedback = false;
            var elem = document.getElementById("name");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
         }
     }


     if(email==""){
        printValidFeedback("emailValidFeedback", "pleas enter your email address");
        var elem = document.getElementById("email");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
    }else{
        var regex = / ^\s+@\s+\.\s+$/;
        if(regex.test(email)===false){
            printValidFeedback("emailValidFeedback", "pleas enter a valid email address");
            var elem = document.getElementById("email");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        }else{
           printValidFeedback("emailValidFeedback", "");
           nameValidFeedback = false;
           var elem = document.getElementById("email");
           elem.classList.add("input-2");
           elem.classList.remove("input-1");
        }
    }

    if(phone==""){
        printValidFeedback("phoneValidFeedback", "pleas enter your phone number");
        var elem = document.getElementById("phone");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
    }else{
        var regex = / ^[1-9]\d{9}$/;
        if(regex.test(phone)===false){
            printValidFeedback("phoneValidFeedback", "pleas enter a your phone number");
            var elem = document.getElementById("phone");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        }else{
           printValidFeedback("phoneValidFeedback", "");
           nameValidFeedback = false;
           var elem = document.getElementById("phone");
           elem.classList.add("input-2");
           elem.classList.remove("input-1");
        }
    }

    if(reasonForInquiry=="select"){
        printValidFeedback("reasonForInquiryValidFeedback", "pleas select one reason");
        var elem = document.getElementById("reasonForInquiry");
            elem.classList.add("input-4");
            elem.classList.remove("input-3");
    }else{
            printValidFeedback("reasonForInquiryValidFeedback", "");
            reasonForInquiryValidFeedback = false;
            var elem = document.getElementById("reasonForInquiry");
            elem.classList.add("input-4");
            elem.classList.remove("input-3");
      
        
    }
    if(aditionalInformation==""){
        printValidFeedback("aditionalInformationValidFeedback", "pleas enter aditional information");
        var elem = document.getElementById("aditionalInformation");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
    }else{
        var regex = / ^[ a-zA-Z\s]+$/;
        if(regex.test(aditionalInformation)===false){
            printValidFeedback("aditionalInformation", "pleas enter aditional information");
            var elem = document.getElementById("phone");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        }else{
           printValidFeedback("aditionalInformationValidFeedback", "");
           nameValidFeedback = false;
           var elem = document.getElementById("aditionalInformation");
           elem.classList.add("input-2");
           elem.classList.remove("input-1");
        }
    }

    if( visit=="select"){
        printValidFeedback(" visitValidFeedback", "pleas select one ");
        var elem = document.getElementById("visit");
            elem.classList.add("input-4");
            elem.classList.remove("input-3");
    }else{
            printValidFeedback(" visitValidFeedback", "");
            visitValidFeedback = false;
            var elem = document.getElementById("visit");
            elem.classList.add("input-4");
            elem.classList.remove("input-3");
       }
     if(day=="select"){
        printValidFeedback("dayValidFeedback", "pleas select one day ");
        var elem = document.getElementById("day");
            elem.classList.add("input-4");
            elem.classList.remove("input-3");
    }else{
            printValidFeedback("dayValidFeedback", "");
            dayValidFeedback = false;
            var elem = document.getElementById("day");
            elem.classList.add("input-4");
            elem.classList.remove("input-3");
       }
       if((nameValidFeedback || emailValidFeedback || phoneValidFeedback || reasonForInquiryvalidFeedback || aditionalInformationValidFeedback || visitFeedback || dayValidFeedback )== true){
           return false; 
       }
};

