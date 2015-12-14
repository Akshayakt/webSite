function validateform()
{
	    var uid = document.getElementById("userid");    
	    var paswd=document.getElementById("psw");
	    var fname=document.getElementById("fname");
	    var lname=document.getElementById("lname");
	    var email=document.getElementById("email");
        var age=document.getElementById("age");
        var eng=document.getElementById("eng");
        var mal=document.getElementById("mal");
        var hin=document.getElementById("hin");
        var paswd2=document.getElementById("psw2");
        var gender=document.getElementById("gender");
	    if(fname_valid(fname)){
	    	if (lname_valid(lname)) {
                if (age_valid(age)) {
                    if(gender_valid(gender)){
                        if(lan_valid(eng,mal,hin))
                        {
	    		          if (email_valid(email)) {
	    			            if(user_valid(uid,5,15))
	    			            {
	    				           if (paswd_valid(paswd,8,20)) {
                                        if(paswd_confrm(paswd2,paswd)){
                                        }
						          }
    				            }
                            }
                        }
                    }    
	    		}
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
          
        return true;  
    }
}

function fname_valid(fname)  
{   
    var letters = /^[A-Za-z]+$/;  
    if(fname.value.match(letters))  
    {  
        return true;  
    }  
    else  
    {  
        alert('First name should not be empty / must have alphabet characters only');  
        fname.focus();  
        return false;  
    }  
}  
function lname_valid(lname)  
{   
    var letters = /^[A-Za-z]+$/;  
    if(lname.value.match(letters))  
    {  
        return true;  
    }  
    else  
    {  
        alert('Last name should not be empty / must have alphabet characters only');  
        lname.focus();  
        return false;  
    }  
}  

function email_valid(uemail)  
{  
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
    if(uemail.value.match(mailformat))  
    {  
        return true;  
    }  
    else  
    {  
        alert("You have to enter a valid email address!");  
        uemail.focus();  
        return false;  
    }  
} 
function age_valid(age)  
{   
    var numbers = /^[0-9]+$/;  
    if(age.value.match(numbers))  
    {  
        return true;  
    }  
    else  
    {  
        alert('age must have numeric characters only');  
        age.focus();  
        return false;  
    }  
}   
function lan_valid(eng,mal,hin)  
{
    x=0;  
    if(eng.checked)   
    {  
        x++;  
    } 
    if(mal.checked)  
    {  
        x++;   
    }  
    if(hin.checked)  
    {  
        x++;   
    }  
    if(x==0)  
    {  
        alert('Select Language');  
        eng.focus();  
        return false;  
    }  
    else  
    {    
        return true;  
    }  
}
function paswd_confrm(paswd2,paswd)  
{ 
    if (paswd2.value==paswd.value) {
        alert('Form Successfully Submitted');  
        window.location.reload(true);
        return true;
    }
    else{
        alert('password doesnot match');  
        paswd2.focus();
        return false;  
    }
}
function gender_valid(gender)  
{  
    if(gender.value == "Default")  
    {  
        alert('Select your gender from the list');  
        gender.focus();  
        return false;  
    }  
    else  
    {  
        return true;  
    }  
}  