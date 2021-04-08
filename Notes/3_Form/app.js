function validate() {
	var fname  = document.getElementById("firstname").value;
	var lname  = document.getElementById("lastname").value;
	var email  = document.getElementById("email").value;
	var pass   = document.getElementById("password").value;
	var gender = document.querySelector("input[name='gender']:checked").value;
	var pwdTxt = document.getElementById("password-form-text");
	if(pass.length < 8){
		pwdTxt.hidden = false; 
		pwdTxt.style.color = "red";
		return false;
	}
	pwdTxt.hidden = true;
	return true;
}