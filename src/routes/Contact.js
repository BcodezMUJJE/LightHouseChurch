import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Qatar from "../assets/sea.jpg";

function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        imgSrc={Qatar}
        title="About Travify"
        text="Our mission is to deliver inspiring and enriching travel experiences. We craft unique, personalized adventures tailored to each traveler's preferences, ensuring every trip meets their individual needs."
      />
    </>
  );
}

export default Contact;
