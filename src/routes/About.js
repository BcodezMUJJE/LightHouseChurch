import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CableCar from "../assets/cable.jpg";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        imgSrc={CableCar}
        title="About Travify"
        text="Our mission is to deliver inspiring and enriching travel experiences. We craft unique, personalized adventures tailored to each traveler's preferences, ensuring every trip meets their individual needs."
      />
      <Footer/>
    </>
  );
}

export default About;