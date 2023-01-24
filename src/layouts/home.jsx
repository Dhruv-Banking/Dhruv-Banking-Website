import { useEffect } from "react";

import Navbar from "../components/navbar/navbar";
import SplashHome from "../components/splashHome/SplashHome";
import MainHome from "../components/mainHome/mainHome";
import Footer from "../components/footer/footer";

function Home() {
  useEffect(() => {
    document.title = "Home | Dhruv Banking";
  });

  return (
    <>
      <Navbar />
      <SplashHome />
      <MainHome />
      <Footer />
    </>
  );
}

export default Home;
