import "./registerMain.css";

export default function RegisterMain() {
  return (
    <main>
      <form className="DHB__Register-Form" onsubmit="return false">
        <h2>Register</h2>

        <label for="Username">Username</label>
        <input
          type="text"
          name="Username"
          id="Username"
          placeholder="Enter Username Please"
          required
        />

        <label for="Firstname">Firstname</label>
        <input
          type="text"
          name="Firstname"
          id="Firstname"
          placeholder="Enter Firstname Please"
          required
        />

        <label for="Lastname">Lastname</label>
        <input
          type="text"
          name="Lastname"
          id="Lastname"
          placeholder="Enter Lastname Please"
          required
        />

        <label for="Email">Email</label>
        <input
          type="text"
          name="Email"
          id="Email"
          placeholder="Enter Email Please"
          required
        />

        <label for="Email">Phone Number</label>
        <input
          type="text"
          name="Email"
          id="Email"
          placeholder="Enter Phone Number Please"
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

        <label for="Password">Confirm Password</label>
        <input
          type="password"
          name="Password"
          id="Password"
          placeholder="Re-enter Password Please"
          required
        />

        <input type="submit" id="Submit" />
      </form>
    </main>
  );
}
