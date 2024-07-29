import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CableCar from "../assets/cable.jpg";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

function About() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        imgSrc={CableCar}
        title="About Travify"
      />
      <AboutUs/>
      <Footer/>
    </>
  );
}

export default About;