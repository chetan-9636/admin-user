document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    if (username === "k.shravya reddy" && password === "280593") { // corrected password
      // Successful login
      window.location.href = "admin.html"; // Redirect to admin page
    } else {
      // Failed login
      document.getElementById("error-message").innerText = "Invalid username or password.";
    }
  });
  
  