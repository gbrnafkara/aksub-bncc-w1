import "./style.css";
import { validationFunc } from "./validationForm";

document.querySelector("#register").innerHTML = `
  <div>
    <div class="wrapper">
      <h2 class="title">Create your account!</h2>
      <p>Let's get started with your 30 days free trial</p>
      <form action="#" class="form-wrapper" novalidate>
        <div class="input-wrapper">
          <label for="name">Name<span style="color: red;">*</span></label>
          <input type="text" name="name" id="name" placeholder="john doe" />
          <span id="lblname"></span>
        </div>
        <div class="input-wrapper">
          <label for="email">Email<span style="color: red;">*</span></label>
          <input type="email" name="email" id="email" placeholder="johndoe@gmail.com" />
          <span id="lblemail"></span>
        </div>
        <div class="input-wrapper">
          <label for="password">Password<span style="color: red;">*</span></label>
          <input type="password" name="password" id="password" placeholder="*********" />
          <span style="text-align:left; font-size: 14px;">Passwords needs to have a minimal of 8 characters, 1 uppercase and 1 symbols</span>
          <span id="lblpassword"></span>
        </div>
        <div class="input-wrapper">
          <label for="re-password">Confirm Password<span style="color: red;">*</span></label>
          <input type="password" name="re-password" id="re-password" placeholder="*********" />
          <span id="lblrepassword"></span>
        </div>
        <div class="checkbox">
          <input type="checkbox" name="agree" id="agree" value="yes"/>
          <label for="agree">I agree to all term, privacy policy and fees</label>
        </div>
        <button type="submit">Sign Up</button>
        <span>Already have an account? <a href="/index.html">Log in</a></span>
      </form>
    </div>
  </div>
`;

function getElementInput(element, label) {
  element.addEventListener("input", function () {
    validationFunc(element, label, "This field can't be empty!");
  });
}

const form = document.querySelector("form");
const lblname = document.getElementById("lblname");
const lblemail = document.getElementById("lblemail");
const lblpassword = document.getElementById("lblpassword");
const lblrepassword = document.getElementById("lblrepassword");

const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const repassword = document.getElementById("re-password");

getElementInput(name, lblname);
getElementInput(email, lblemail);
getElementInput(password, lblpassword);
getElementInput(repassword, lblrepassword);

form.addEventListener("submit", function (e) {
  e.preventDefault();

  validationFunc(name, lblname, "This field can't be empty!");
  validationFunc(email, lblemail, "This field can't be empty!");
  validationFunc(password, lblpassword, "This field can't be empty!");
  validationFunc(repassword, lblrepassword, "This field can't be empty!");
});
