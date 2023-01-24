import "./moneyShow.css";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function MoneyShow() {
  let navigate = useNavigate();
  useEffect(() => {
    if (sessionStorage.getItem("refresh") === null) {
      navigate("/");
    }
  }, []);

  return (
    <>
      <div className={`DHB__Profile-MoneyShow DHB__Account_Checkings`}>
        <h2>Checkings</h2>
        <p>${sessionStorage.getItem("checkings")}</p>
      </div>

      <div className={`DHB__Profile-MoneyShow DHB__Account_Savings`}>
        <h2>Savings</h2>
        <p>${sessionStorage.getItem("savings")}</p>
      </div>
    </>
  );
}
