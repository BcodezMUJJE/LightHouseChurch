import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Qatar from "../assets/cruise.jpg";
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
        text="Our Services Include, users plan, book, and manage their trips"
      />
      <Trip/>
      <Footer/>
    </>
  );
}

export default Service;
