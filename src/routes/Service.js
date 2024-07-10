import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Qatar from "../assets/cruise.jpg";

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
    </>
  );
}

export default Service;
