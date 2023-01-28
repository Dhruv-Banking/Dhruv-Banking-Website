import "./transferMoneyAnotherUser.css";

import { useState, useRef } from "react";

const API_URL = "https://banking-api.dhruvrayat.com/";

export default function TransferMoneyAnotherUser() {
  let amount = useRef("");
  let [counter, setCounter] = useState(0);
  let [errorData, setErrorData] = useState();
  let [errorClass, setErrorClass] = useState(
    "DHR__Main-Transfer_Money_sameAccount-ErrorFalse"
  );

  return (
    <div className="DHR__Main-Transfer_Money-AnotherUser">
      <h2>Transfer money to another User</h2>
      <form
        id="DHR__Main-Transfer_Money_toAnotherUser"
        className="DHR__Main-Transfer_Money_toAnotherUser"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          id="Username"
          type="text"
          placeholder="Enter Username of the reciever"
          name="username"
          required
        />

        <input
          id="AmountTransfer"
          type="number"
          placeholder="Enter Amount to Send"
          name="name"
          min="1"
          step="0.0000001"
          max="1000"
          required
        />

        <input id="Submit" type="submit" />
      </form>
    </div>
  );
}
