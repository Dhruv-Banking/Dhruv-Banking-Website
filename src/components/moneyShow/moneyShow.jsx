import "./moneyShow.css";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function MoneyShow(props) {
  let [DHB__Profile_MoneyAccount, setDHB__Profile_MoneyAccount] = useState("");

  let navigate = useNavigate();
  useEffect(() => {
    props.img === "/src/assets/checkings.png"
      ? setDHB__Profile_MoneyAccount("DHB__Account_Checkings")
      : setDHB__Profile_MoneyAccount("DHB__Account_Savings");

    if (sessionStorage.getItem("refresh") === null) {
      navigate("/");
    }
  }, []);

  return (
    <>
      {props.img === "/src/assets/checkings.png" ? (
        <div className={`DHB__Profile-MoneyShow ${DHB__Profile_MoneyAccount}`}>
          <h2>Checkings</h2>
          <p>${props.money}</p>
        </div>
      ) : (
        <div className={`DHB__Profile-MoneyShow ${DHB__Profile_MoneyAccount}`}>
          <h2>Savings</h2>
          <p>${props.money}</p>
        </div>
      )}
    </>
  );
}
