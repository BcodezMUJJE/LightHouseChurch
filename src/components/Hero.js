import "./HeroStyles.css";
import AirBus from "../assets/airbus.jpg";

function Hero() {
  return (
    <>
      <div className="hero">
        <img src={AirBus} alt="Air Bus" />
        <div className="hero-text">
          <h1>Your Journey Your Story</h1>
          <p>Choose Your Favourite Destination.</p>
          <a href="/">Travel Plan</a>
        </div>
      </div>
    </>
  );
}

export default Hero;
