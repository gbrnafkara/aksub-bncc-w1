import "./style.css";

document.querySelector("#register").innerHTML = `
  <div>
    <div class="wrapper">
      <h2 class="title">Create your account!</h2>
      <p>Let's get started with your 30 days free trial</p>
      <form action="#" class="form-wrapper">
        <div class="input-wrapper">
          <label for="name">Name<span style="color: red;">*</span></label>
          <input type="text" name="name" id="name" placeholder="john doe" />
        </div>
        <div class="input-wrapper">
          <label>Email<span style="color: red;">*</span></label>
          <input type="email" name="email" id="email" placeholder="johndoe@gmail.com" />
        </div>
        <div class="input-wrapper">
          <label for="password">Password<span style="color: red;">*</span></label>
          <input type="password" name="password" id="password" placeholder="*********" />
          <span style="text-align:left; font-size: 14px;">Passwords needs to have a minimal of 8 characters, 1 uppercase and 1 symbols</span>
        </div>
        <div class="input-wrapper">
          <label for="re-password">Password<span style="color: red;">*</span></label>
          <input type="password" name="re-password" id="re-password" placeholder="*********" />
        </div>
        <div class="checkbox">
          <input type="checkbox" name="agree" id="agree" value="yes"/>
          <label for="agree">I agree to all term, privacy policy and fees</label>
        </div>
        <button>Sign Up</button>
        <span>Already have an account? <a href="/index.html">Log in</a></span>
      </form>
    </div>
  </div>
`;
