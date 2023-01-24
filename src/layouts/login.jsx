import { useEffect } from "react";

import Navbar from "../components/navbar/navbar";

export default function Login() {
  useEffect(() => {
    document.title = "Login | Dhruv Banking";
  });

  return (
    <>
      <Navbar />
    </>
  );
}
