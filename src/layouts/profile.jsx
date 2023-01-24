import { useEffect } from "react";

import Navbar from "../components/navbar/navbar";
import MoneyShow from "../components/moneyShow/moneyShow";
import Footer from "../components/footer/footer";

// Images
import Checkings from "../assets/checkings.png";
import Savings from "../assets/savings.png";

export default function Profile() {
  useEffect(() => {
    document.title = `${sessionStorage.getItem("username")} | Dhruv Banking`;
  });

  return (
    <>
      <Navbar />
      <MoneyShow
        img={Checkings}
        account="Checkings"
        money={sessionStorage.getItem("checkings")}
      />
      <MoneyShow
        img={Savings}
        account="Savings"
        money={sessionStorage.getItem("savings")}
      />
      <Footer />
    </>
  );
}
