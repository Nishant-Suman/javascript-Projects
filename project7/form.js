function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let qualification = document.getElementById("qualification").value;
    // let dob = document.getElementById("dob").value;
    

    let dob = new Date(document.getElementById("dob").value);
    let today = new Date();

    let age = today.getFullYear() - dob.getFullYear();
    let m = today.getMonth() - dob.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
    age--;
    }

    if (age < 18) {
    alert("You must be at least 18 years old");
    return false;
    }


    if (dob === "") {
      alert("Please select your Date of Birth");
      return false;
    }

    if (name === "") {
      alert("Name is required");
      return false;
    }
  
    if (email === "") {
      alert("Email is required");
      return false;
    }
  
    if (phone === "" || phone.length != 10) {
      alert("Enter valid 10-digit phone number");
      return false;
    }
  
    if (qualification === "") {
      alert("Please select a qualification");
      return false;
    }
  
    // redirect to other page
    window.location.href = "success.html?name=" + encodeURIComponent(name);

    return false; // stop default form submit
  }