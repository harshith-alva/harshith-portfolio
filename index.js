// validation

var username=false;
var useremail=false;
var usernumber=false;
var usermsg=false;
var color=getElementById("email")


function namecheck(){
	var name=document.getElementById("name").value 
	var letters=/^[A-Z a-z]+$/;
	if(name.match(letters)){
		username=true
		document.getElementById("nameerror").innerText=""

	}else{
		username=false
		document.getElementById("nameerror").innerText="Enter a vaild name"
		

	}
}

function emailcheck(){
	var mail=document.getElementById("email").value

var regx=/\b^[^ ][a-z.\-_0-9]+@[a-z 0-9]+\.[a-z]{2,3}\b/;
if(mail.match(regx)){
	useremail=true
	document.getElementById("emailerror").innerText=""
}else{
	useremail=false;
	document.getElementById("emailerror").innerText="Enter a valid E-mail Id"
}
}


function numbercheck(){
	var num=document.getElementById("number").value;
	var digits=/\b[0-9]{10}\b/;
	if(num.match(digits)){
		usernumber=true;
		document.getElementById("numbererror").innerText=""
	}else{
		usernumber=false;
		document.getElementById("numbererror").innerText="Enter valid phone number"
	}

}


function msgcheck(){
	var message=document.getElementById("message").value;
	if(message!=""){
		usermsg=true;
		document.getElementById("message").innerText=""
	}else{
		usermsg=false;
		document.getElementById("message").innerText="Message cannot be blank"
	}
}