 function validateform1()
{
	    var usrmail= document.getElementById("userEmail");  
        var paswd=document.getElementById("passWord");
	    
	    if(email_valid(usrmail))
	    {
	   		if (paswd_valid(paswd,7,20)) {
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
        alert("You have to enter a valid email address!");  
        usrmail.focus();  
        return false;  
    }  
} 

function paswd_valid(paswd,min,max)  
{  
    var passid_len = paswd.value.length;  
    if (passid_len == 0 ||passid_len >= max || passid_len < min)  
    {  
    	alert("Password should not be empty / length be between "+min+" to "+max);  
    	paswd.focus();  
    	return false;  
    }  
    else{
         alert('Access allowed');  
        window.location.reload(true);
        return true;  
    }
    
}