const signupbtn = document.getElementById("signupbtn");
const loginbtn = document.getElementById("loginbtn")

signupbtn.addEventListener("click", (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value
    const password = document.getElementById("password").value

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const exists = users.find(user => user.username === username);

    if (exists) {
        alert("User already exists!");
        return;
    }

    users.push({ username, password })
    localStorage.setItem("users", JSON.stringify(users));
    alert("signup sucessfully")
    window.location.href = "login.html"

})

loginbtn.addEventListener("click", () => {
    window.location.href = "login.html"
})