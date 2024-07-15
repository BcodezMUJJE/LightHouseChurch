import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AirBus from "../assets/qatar.jpg";
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
        title="Your Journey Your Story"
        text="Choose Your Favourite Destination."
        buttonText="Travel Plan"
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
