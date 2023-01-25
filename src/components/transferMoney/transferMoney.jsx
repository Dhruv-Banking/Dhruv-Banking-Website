import "./transferMoney.css";

import { useState, useRef } from "react";

import Arrow from "../../assets/arrow.png";
let API_URL = "https://banking-api.dhruvrayat.com/";

function relodValues() {
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
    `${API_URL}dhruvbanking/get/getSpecificUser?username=${sessionStorage.getItem(
      "username"
    )}`,
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => {
      sessionStorage.setItem("username", result.username);
      sessionStorage.setItem("checkings", result.checkings);
      sessionStorage.setItem("savings", result.savings);
      sessionStorage.setItem("transactions", result.transactions);
    })
    .catch((error) => console.log("error", error));
}

export default function TransferMoney() {
  let amount = useRef("");
  let [counter, setCounter] = useState(0);
  let [errorData, setErrorData] = useState();
  let [errorClass, setErrorClass] = useState(
    "DHR__Main-Transfer_Money_sameAccount-ErrorFalse"
  );

  const getInitialStateFrom = () => {
    const valueFrom = "Checkings";
    return valueFrom;
  };

  const getInitialStateTo = () => {
    const valueTo = "Savings";
    return valueTo;
  };

  const handleChangeFrom = (e) => {
    setValueFrom(e.target.value);
  };

  const handleChangeTo = (e) => {
    setValueTo(e.target.value);
  };

  const [valueFrom, setValueFrom] = useState(getInitialStateFrom);
  const [valueTo, setValueTo] = useState(getInitialStateTo);

  let accessToken = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      token: `${sessionStorage.getItem("refresh")}`,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(`${API_URL}dhruvbanking/login/refreshToken`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.accessToken === undefined) {
          setErrorClass("DHR__Main-Transfer_Money_sameAccount-ErrorTrue");
          setCounter((counter += 1));
          setErrorData("Error querying access token, please try again leter");
          return;
        }

        sessionStorage.setItem("token", result.accessToken);
      })
      .catch((error) => console.log("error", error));
  };

  let transferMoneyCheckingsToSavings = () => {
    let transferAmount = parseInt(amount.current.value);
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      `Bearer ${sessionStorage.getItem("token")}`
    );
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      username: `${sessionStorage.getItem("username")}`,
      amount: transferAmount,
    });

    var requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(`${API_URL}dhruvbanking/put/checkingsToSavings`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (
          result.detail ===
          `Successfully transered ${transferAmount} from checkings to savings`
        ) {
          relodValues();
          alert(result.detail);
          window.location.reload(false);
        }
      })
      .catch((error) => console.log("error", error));
  };

  let transferMoneySavingsToCheckings = () => {
    let transferAmount = parseInt(amount.current.value);
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      `Bearer ${sessionStorage.getItem("token")}`
    );
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      username: `${sessionStorage.getItem("username")}`,
      amount: transferAmount,
    });

    var requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(`${API_URL}dhruvbanking/put/savingsToCheckings`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (
          result.detail ===
          `Successfully transered ${transferAmount} from savings to checkings`
        ) {
          relodValues();
          alert(result.detail);
          window.location.reload(false);
        }
        console.log(result.detail);
        console.log(
          `Successfully transered ${transferAmount} from savings to checkings`
        );
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <>
      <div className="DHR__Main-Transfer_Money">
        <h2>Transfer Money From Accounts</h2>

        <form
          id="DHR__Main-Transfer_Money_sameAccount"
          onSubmit={(e) => {
            e.preventDefault();

            if (valueFrom === valueTo) {
              setErrorClass("DHR__Main-Transfer_Money_sameAccount-ErrorTrue");
              setCounter((counter += 1));
              setErrorData("Can not transfer to the same account.");
              return;
            }

            accessToken();

            if (valueFrom === "Checkings") {
              return transferMoneyCheckingsToSavings();
            }

            return transferMoneySavingsToCheckings();
          }}
          className="DHR__Main-Transfer_Money_sameAccount"
        >
          <div>
            <select value={valueFrom} onChange={handleChangeFrom}>
              <option value="Checkings">Checkings</option>
              <option value="Savings">Savings</option>
            </select>

            <div>
              <img src={Arrow} alt="" />
            </div>

            <select value={valueTo} onChange={handleChangeTo}>
              <option value="Savings">Savings</option>
              <option value="Checkings">Checkings</option>
            </select>
          </div>

          <input
            id="Amount"
            type="number"
            step="1"
            ref={amount}
            placeholder="Enter Amount to Send"
            name="name"
            min="1"
            max="1000"
            required
          />
          <input type="submit" id="Submit" />
          <p className={errorClass}>
            {errorData} (x{counter})
          </p>
        </form>
      </div>
    </>
  );
}
