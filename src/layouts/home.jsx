import { useEffect } from "react";
import Footer from "../components/footer/footer";

import Navbar from "../components/navbar/navbar";

function Home() {
  useEffect(() => {
    document.title = "Home | Dhruv Banking";
  });

  return (
    <>
      <Navbar />
      <Footer />
    </>
  );
}

export default Home;
