import "./loginMain.css";

import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginMain() {
  let navigate = useNavigate();
  const username = useRef("");
  const password = useRef("");

  let [errorClass, setErrorClass] = useState("DHB__Login-ErrorFalse");
  let [counter, setCounter] = useState(0);
  let [loader, setLoader] = useState("loader-hidden");

  let API_URL = "https://banking-api.dhruvrayat.com/";

  let loginfunc = (data) => {
    setLoader("loader-visible");
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      username: data.username,
      password: data.password,
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
        if (
          result.accessToken === undefined &&
          result.refreshToken === undefined
        ) {
          setErrorClass(".DHB__Login-ErrorTrue");
          setCounter((counter += 1));
          setLoader("loader-hidden");
          return;
        }

        sessionStorage.setItem("token", result.accessToken);
        sessionStorage.setItem("refresh", result.refreshToken);
        setLoader("loader-hidden");

        var myHeaders = new Headers();
        myHeaders.append(
          "Authorization",
          `Bearer ${sessionStorage.getItem("token")}`
        );

        var requestOptions = {
          method: "GET",
          headers: myHeaders,
          redirect: "follow",
        };

        fetch(
          `${API_URL}dhruvbanking/get/getSpecificUser?username=${data.username}`,
          requestOptions
        )
          .then((response) => response.json())
          .then((result) => {
            sessionStorage.setItem("username", result.username);
            sessionStorage.setItem("checkings", result.checkings);
            sessionStorage.setItem("savings", result.savings);
            sessionStorage.setItem("transactions", result.transactions);
            navigate("/profile");
          })
          .catch((error) => console.log("error", error));
      })
      .catch((error) => {
        alert("An error has occoured");
        setLoader("loader-hidden");
      });
  };

  return (
    <>
      <main>
        <div id={loader}></div>
        <form
          className="DHB__Login-Form"
          onSubmit={(e) => {
            e.preventDefault();

            const userData = {
              username: username.current.value,
              password: password.current.value,
            };

            loginfunc(userData);
          }}
        >
          <h2>Login</h2>

          <label htmlFor="Username">Username:</label>
          <input
            type="text"
            ref={username}
            name="Username"
            id="Username"
            placeholder="Enter Username Please"
            required
          />

          <label htmlFor="Password">Password</label>
          <input
            type="password"
            ref={password}
            name="Password"
            id="Password"
            placeholder="Enter Password Please"
            required
          />

          <input type="submit" id="Submit" />

          <p className={errorClass}>
            Incorrect username or password (x{counter})
          </p>
        </form>
      </main>

      <a className="DHB__Login-Forgot_Password" href="/forgotPassword">
        Forgot Password?
      </a>
    </>
  );
}
