import { useEffect } from "react";

import Navbar from "../components/navbar/navbar";
import MoneyShow from "../components/moneyShow/moneyShow";
import TransferMoney from "../components/transferMoney/transferMoney";
import TransferMoneyAnotherUser from "../components/transferMoneyAnotherUser/transferMoneyAnotherUser";
import Footer from "../components/footer/footer";

export default function Profile() {
  useEffect(() => {
    document.title = `${sessionStorage.getItem("username")} | Dhruv Banking`;
  });

  return (
    <>
      <Navbar />
      <h1
        style={{
          textAlign: "center",
          marginTop: "60px",
          textDecoration: "underline",
        }}
      >
        Welcome Back {sessionStorage.getItem("username")}!
      </h1>
      <MoneyShow />
      <hr />
      <TransferMoney />
      <hr />
      <TransferMoneyAnotherUser />
      <Footer />
    </>
  );
}
