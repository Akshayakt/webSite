 function validateform1()
{
	    var usrmail= document.getElementById("userEmail");  
        var paswd=document.getElementById("passWord");
	   var message=document.getElementById("message");
	    if(email_valid(usrmail))
	    {
	   		if (paswd_valid(paswd)) {
                location.href = "home.html?userEmail="+usrmail.value;
			}
		}
						 return false;
}
function email_valid(usrmail)  
{  
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
    if(usrmail.value.match(mailformat))  
    {  
        return true;  
    }  
    else  
    {  
        message.innerHTML ="You have to enter a valid email address!";  
        usrmail.focus();  
        return false;  
    }  
} 

function paswd_valid(paswd)  
{  
    var passid_len = paswd.value.length;  
    if (passid_len == 0)  
    {  
        message.innerHTML ="Password should not be empty";  
    	paswd.focus();  
    	return false;  
    }  
    else{
        return true;  
    }
    
}