import { useEffect } from "react";

import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";

export default function Profile() {
  useEffect(() => {
    document.title = "Profile | Dhruv Banking";
  });

  return (
    <>
      <Navbar />
      <Footer />
    </>
  );
}
