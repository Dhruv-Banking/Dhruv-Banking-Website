import "./transferMoney.css";

import { useState } from "react";

import Arrow from "../../assets/arrow.png";

export default function TransferMoney() {
  const getInitialStateFrom = () => {
    const valueFrom = "Checkings";
    return valueFrom;
  };

  const [valueFrom, setValueFrom] = useState(getInitialStateFrom);
  let [errorClass, setErrorClass] = useState(
    "DHR__Main-Transfer_Money_sameAccount-ErrorFalse"
  );
  let [counter, setCounter] = useState(0);
  let [errorData, setErrorData] = useState();

  const handleChangeFrom = (e) => {
    setValueFrom(e.target.value);
  };

  const getInitialStateTo = () => {
    const valueFrom = "Savings";
    return valueFrom;
  };

  const [valueTo, setValueTo] = useState(getInitialStateTo);

  const handleChangeTo = (e) => {
    setValueTo(e.target.value);
  };

  return (
    <>
      <div className="DHR__Main-Transfer_Money">
        <h2>Transfer Money From Accounts</h2>

        <form
          id="DHR__Main-Transfer_Money_sameAccount"
          onSubmit={(e) => {
            e.preventDefault();
            console.log(valueFrom, valueTo);

            if (valueFrom === valueTo) {
              setErrorClass("DHR__Main-Transfer_Money_sameAccount-ErrorTrue");
              setCounter((counter += 1));
              setErrorData("Can not transfer to the same account.");
              return;
            }

            if (valueFrom === "Checkings") {
              alert("e");
            } else {
              alert("fuck");
            }
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
