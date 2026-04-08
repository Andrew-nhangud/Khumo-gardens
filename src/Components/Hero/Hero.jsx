import "./Hero.css";
import heroImg from "../../assets/images/hero-img.jpeg";
import arrow from "../../assets/icons/arrow.svg";

export const Hero = () => {
  return (
    <section id="hero">
      <div className="hero-container">
        <h2>emalahleni, south africa</h2>
        <h1>
          Khumo <br /> Gardens
        </h1>
        <p>
          Think of this as your go to spot where nature and good vibes hang out.
          It's a beautiful, relaxed space built for making memories that
          actually stick.
        </p>

        <p className="clickable-message">
          <a href="services">explore our services</a>
          <img className="arrow-icon" src={arrow} alt="arrow icon" />
        </p>
      </div>
      <img className="hero-img" src={heroImg} alt="hero image" />
    </section>
  );
};
