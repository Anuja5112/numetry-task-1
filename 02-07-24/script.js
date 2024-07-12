
        function validateForm() {
            let fname = document.getElementById("fname").value;
            let lname = document.getElementById("lname").value;
            let email = document.getElementById("email").value;
            let phone = document.getElementById("phone").value;
            let dob = document.getElementById("dob").value;
          
            let errorDiv = document.getElementById("error");

            errorDiv.innerHTML = "";

            const namePattern = /^[A-Za-z]+$/;
            const phonePattern = /^[5-9][0-9]{9}$/;
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            let valid = true;

            if (!namePattern.test(fname)) {
                errorDiv.innerHTML += "First name should only contain letters and no spaces.<br>";
                valid = false;
            }
            if (!namePattern.test(lname)) {
                errorDiv.innerHTML += "Last name should only contain letters and no spaces.<br>";
                valid = false;
            }
            if (!emailPattern.test(email)) {
                errorDiv.innerHTML += "Invalid email format.<br>";
                valid = false;
            }
            if (!phonePattern.test(phone)) {
                errorDiv.innerHTML += "Phone number must be exactly 10 digits and start with a digit from 5 to 9.<br>";
                valid = false;
            }
            if (new Date(dob) >= new Date()) {
                errorDiv.innerHTML += "Date of birth must be in the past.<br>";
                valid = false;
            }

            return valid;
        }

        function sendMail() {
            if (validateForm()) {
                alert("Form submitted successfully!");
                document.getElementById("registrationform").reset();
            }
        }
        document.addEventListener("DOMContentLoaded", function() {
            let today = new Date().toISOString().split('T')[0];
            document.getElementsByName("dob")[0].setAttribute('max', today);
        });