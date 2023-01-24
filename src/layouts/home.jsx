import { useEffect } from "react";

import Navbar from "../components/navbar/navbar";
import SplashHome from "../components/splashHome/SplashHome";
import Footer from "../components/footer/footer";

function Home() {
  useEffect(() => {
    document.title = "Home | Dhruv Banking";
  });

  return (
    <>
      <Navbar />
      <SplashHome />
      <Footer />
    </>
  );
}

export default Home;
