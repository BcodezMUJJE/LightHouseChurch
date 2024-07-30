import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Qatar from "../assets/pray.jpg";
import Footer from "../components/Footer";
import Trip from "../components/Trip";

function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        imgSrc={Qatar}
        title="What We Offer"
        text="Our services include helping members plan, schedule, and manage their church-related activities and events."
      />
      <Trip/>
      <Footer/>
    </>
  );
}

export default Service;
