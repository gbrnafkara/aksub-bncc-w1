import "./style.css";

document.querySelector("#app").innerHTML = `
  <div>
    <div class="wrapper">
      <h2 class="title">Login to your account!</h2>
      <p>Enter your credentials to login to your account</p>
      <form action="#" class="form-wrapper">
        <div class="input-wrapper">
          <label for="email">Email</label>
          <input type="email" id="email" placeholder="johndoe@gmail.com" required />
          <span id="lblemail" style="visibility:hidden; color: red;">This field can't be empty!</span>
        </div>
        <div class="input-wrapper">
          <label for="password">Password</label>
          <input type="password" id="password" placeholder="*********" required />
        </div>
        <button>Login</button>
        <span>Don\’t have an account? <a href="/register.html">Create an account</a></span>
      </form>
    </div>
  </div>
`;

const form = document.querySelector(".form-wrapper");

const email = document.getElementById("email");
const label = document.getElementById("lblemail");
email.addEventListener("input", function (e) {
  if (!e.target.value.trim()) {
    email.classList.add("error");
    label.classList.add("show");
    label.style.visibility = "visible";
    console.log(label.classList);
  } else {
    email.classList.remove("error");
    label.style.visibility = "hidden";
  }
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (!email.value.trim()) {
    email.classList.add("error");
    label.classList.add("show");
  }
});
