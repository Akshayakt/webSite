 function validateform1()
{
	    var uid = document.regForm1.userid1;  
	    var paswd=document.regForm1.psw1;
	    
	    
	    if(user_valid(uid,5,15))
	    {
	   		if (paswd_valid(paswd,8,20)) {
			}
		}
						 return false;
}
function user_valid(uid,min,max)  
    {  
    var uid_len = uid.value.length;  
    if (uid_len == 0 || uid_len >= max || uid_len < min)  
    {  
    	alert("User Id should not be empty / length be between "+min+" to "+max);  
    	uid.focus();  
    	return false;  
    }  
    return true;  
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
         alert('Form Successfully Submitted');  
        window.location.reload(true);
        return true;  
    }
    
}