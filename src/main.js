import "./style.css";
import { validationFunc } from "./validationForm";

document.querySelector("#app").innerHTML = `
  <div>
    <div class="wrapper">
      <h2 class="title">Login to your account!</h2>
      <p>Enter your credentials to login to your account</p>
      <form action="#" class="form-wrapper" novalidate>
        <div class="input-wrapper">
          <label for="email">Email</label>
          <input type="email" id="email" name="email" placeholder="johndoe@gmail.com" required />
          <span id="lblemail"></span>
        </div>
        <div class="input-wrapper">
          <label for="password">Password</label>
          <input type="password" id="password" placeholder="*********" required />
          <span id="lblpassword"></span>
        </div>
        <button type="submit">Login</button>
        <span>Don\’t have an account? <a href="/register.html">Create an account</a></span>
      </form>
    </div>
  </div>
`;
const form = document.querySelector(".form-wrapper");
const email = document.getElementById("email");
const password = document.getElementById("password");
const lblemail = document.getElementById("lblemail");
const lblpassword = document.getElementById("lblpassword");

email.addEventListener("input", function () {
  validationFunc(email, lblemail, "This field can't be empty!");
});

password.addEventListener("input", function () {
  validationFunc(password, lblpassword, "This field can't be empty!");
});

form.addEventListener("submit", function (e) {
  e.preventDefault();

  validationFunc(email, lblemail, "This field can't be empty!");
  validationFunc(password, lblpassword, "This field can't be empty!");
});
