const loginbtn = document.getElementById("loginbtn");
const signupbtn = document.getElementById("signupbtn")

loginbtn.addEventListener("click", (e)=>{
    e.preventDefault();

    const username =  document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const users = JSON.parse(localStorage.getItem("users")) || []

    let matcheduser = users.find(user => user.username === username && user.password === password )

    if (matcheduser ) {
    window.location.href = "products.html"; 
  } else {
    alert("Invalid username or password.");
  }
})

signupbtn.addEventListener("click", () => {
    window.location.href = "signup.html"
})