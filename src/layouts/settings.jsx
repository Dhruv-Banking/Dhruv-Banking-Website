import { useEffect } from "react";

import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";

export default function Settings() {
  useEffect(() => {
    document.title = `Settings | Dhruv Banking`;
  });

  return (
    <>
      <Navbar />
      <Footer />
    </>
  );
}
