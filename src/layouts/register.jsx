import { useEffect } from "react";

import Navbar from "../components/navbar/navbar";
import RegisterMain from "../components/registerMain/registerMain";

export default function Register() {
  useEffect(() => {
    document.title = "Register | Dhruv Banking";
  });

  return (
    <>
      <Navbar />
      <RegisterMain />
    </>
  );
}
