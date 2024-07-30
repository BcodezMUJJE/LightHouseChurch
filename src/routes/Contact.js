import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Qatar from "../assets/BIBLE.jpg";
import Footer from "../components/Footer";

function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        imgSrc={Qatar}
        title="About Lighthouse Grace Church"
        text="We are a discipling movement, impacting our community spiritually, socially, and economically through planting Light and Life-giving churches. We aim to catalyze spiritual renewal by creating Missional Families (M.F) within our community, fostering a family-centered and based church environment. Our focus is on creating missional families, which function like home cells where people are discipled and grow in the character and competence of Jesus Christ."
      />
      <Footer/>
    </>
  );
}

export default Contact;
