import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AirBus from "../assets/afrigalPraise.jpg";
import Destination from "../components/Destinations";
import Trip from "../components/Trip";
import Footer from "../components/Footer";


function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        imgSrc={AirBus}
        title="Lighthouse Grace Church, Bulindo"
        text="Welcome to Lighthouse Grace Church, Bulindo Community!"
        buttonText="Join Community"
        url="/"
        btnClass="show"
      />
      <Destination/>
      <Trip/>
      <Footer/>
    </>
  );
}

export default Home;
