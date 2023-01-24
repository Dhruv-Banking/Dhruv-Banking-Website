import { useEffect } from "react";

import Navbar from "../components/navbar/navbar";
import LoginMain from "../components/loginMain/loginMain";

export default function Login() {
  useEffect(() => {
    document.title = "Login | Dhruv Banking";
  });

  return (
    <>
      <Navbar />
      <LoginMain />
    </>
  );
}
