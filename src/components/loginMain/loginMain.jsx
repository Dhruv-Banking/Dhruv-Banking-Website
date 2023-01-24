import "./loginMain.css";

export default function LoginMain() {
  return (
    <>
      <main>
        <div id="loader"></div>
        <form className="DHB__Login-Form" onsubmit="return false">
          <h2>Login</h2>

          <label for="Username">Username:</label>
          <input
            type="text"
            name="Username"
            id="Username"
            placeholder="Enter Username Please"
            required
          />

          <label for="Password">Password</label>
          <input
            type="password"
            name="Password"
            id="Password"
            placeholder="Enter Password Please"
            required
          />

          <input type="submit" id="Submit" />
        </form>
      </main>

      <a className="DHB__Login-Forgot_Password" href="/forgotPassword">
        Forgot Password?
      </a>
    </>
  );
}
