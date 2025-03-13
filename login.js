
let inputuser = document.getElementById('inputuser');
let intputpass = document.getElementById('inputpass');
let btnlogin = document.getElementById('btn.login');

btnlogin.addEventListener("click", function(e) {
	
	  e.preventDefault()
	  
	  if (inputuser.value == "Jermae") {
		  
		  if (inpupass.value == "1234) {
			  
			  location.href = "main.html";
			  
		  } else {
			  alert ("Invalid Password");
		  }
    } else { 
	     alert ("Invalid Username");
	}
	
});