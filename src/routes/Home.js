import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AirBus from "../assets/airbus.jpg";

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
    </>
  );
}

export default Home;
