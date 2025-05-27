const membershipTab = document.getElementById("membership_tab");
const ordersTab = document.getElementById("orders_tab");
const membershipSection = document.getElementById("membership_section");
const orderContainer = document.getElementById("order_cont");
const loginbtn = document.getElementById("login_btn");
const signupbtn  = document.getElementById("signup_btn")

membershipTab.addEventListener("click", () => {
  membershipSection.style.display = "block";
  orderContainer.style.display = "none";
  membershipTab.style.backgroundColor = "#ddd";
  ordersTab.style.backgroundColor = "#f0f0f0";
});

ordersTab.addEventListener("click", () => {
  orderContainer.style.display = "block";
  membershipSection.style.display = "none";
  ordersTab.style.backgroundColor = "#ddd";
  membershipTab.style.backgroundColor = "#f0f0f0";
});

loginbtn.addEventListener("click", ()=>{
  window.location.href = "login.html"
})

signupbtn.addEventListener("click", ()=>{
  window.location.href = "signup.html"
})