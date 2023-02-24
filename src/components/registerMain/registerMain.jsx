import "./registerMain.css";

import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RegisterMain() {
  let navigate = useNavigate();
  const username = useRef("");
  const firstname = useRef("");
  const lastname = useRef("");
  const email = useRef("");
  const phoneNumber = useRef("");
  const password = useRef("");
  const confirmPassword = useRef("");

  let [passwordsSame, setPasswordsSame] = useState(null);

  let API_URL = "https://banking-api.dhruvrayat.com/";

  let getPostToken = (username, password) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      username: username,
      password: password,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(`${API_URL}dhruvbanking/login`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        sessionStorage.setItem("postToken", result.postUserToken);
      })
      .catch((error) => console.log("error", error));
  };

  let logicfunc = async (data) => {
    getPostToken(data.username, data.password);

    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      `Bearer ${sessionStorage.getItem("postToken")}`
    );
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      username: data.username,
      firstname: data.firstname,
      lastname: data.lastname,
      email: data.email,
      phonenumber: data.phoneNumber,
      password: data.password,
    });
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    fetch(`${API_URL}dhruvbanking/post/verifyEmail`, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        alert("Verifican email sent!");
      })
      .catch((error) => alert("Unknown error try again later."));
  };

  return (
    <main>
      <form
        className="DHB__Register-Form"
        onSubmit={(e) => {
          e.preventDefault();

          const userData = {
            username: username.current.value,
            firstname: firstname.current.value,
            lastname: lastname.current.value,
            email: email.current.value,
            phoneNumber: phoneNumber.current.value,
            password: password.current.value,
          };

          logicfunc(userData);
        }}
      >
        <h2>Register</h2>

        <label htmlFor="Username">Username</label>
        <input
          type="text"
          name="Username"
          id="Username"
          placeholder="Enter Username Please"
          ref={username}
          required
        />

        <label htmlFor="Firstname">Firstname</label>
        <input
          type="text"
          name="Firstname"
          id="Firstname"
          placeholder="Enter Firstname Please"
          ref={firstname}
          required
        />

        <label htmlFor="Lastname">Lastname</label>
        <input
          type="text"
          name="Lastname"
          id="Lastname"
          placeholder="Enter Lastname Please"
          ref={lastname}
          required
        />

        <label htmlFor="Email">Email</label>
        <input
          type="text"
          name="Email"
          id="Email"
          placeholder="Enter Email Please"
          ref={email}
          required
        />

        <label htmlFor="PhoneNumber">Phone Number</label>
        <input
          type="number"
          name="PhoneNumber"
          id="PhoneNumber"
          placeholder="Enter Phone Number Please"
          ref={phoneNumber}
          required
        />

        <label htmlFor="Password">Password</label>
        <input
          type="password"
          name="password"
          id="Password"
          placeholder="Enter Password Please"
          ref={password}
          required
          onChange={(e) => {
            let checker = document.getElementById("checkerTag");

            if (e.target.value !== confirmPassword.current.value) {
              checker.style.visibility = "visible";
              checker.style.color = "red";
              setPasswordsSame("Passwords are not the same");
            } else {
              checker.style.color = "green";
              setPasswordsSame("Passwords are the same");
            }
          }}
        />

        <label htmlFor="ConfirmPassword">Confirm Password</label>
        <input
          type="password"
          name="ConfirmPassword"
          id="ConfirmPassword"
          placeholder="Re-enter Password Please"
          ref={confirmPassword}
          onChange={(e) => {
            let checker = document.getElementById("checkerTag");

            if (e.target.value !== password.current.value) {
              checker.style.visibility = "visible";
              checker.style.color = "red";
              setPasswordsSame("Passwords are not the same");
            } else {
              checker.style.color = "green";
              setPasswordsSame("Passwords are the same");
            }
          }}
        />

        <input type="submit" id="Submit" />

        <p id="checkerTag">{passwordsSame}</p>
      </form>
    </main>
  );
}
