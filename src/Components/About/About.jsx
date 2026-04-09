import "./About.css";

export const About = () => {
  return (
    <section id="about">
      <h2 className="section-subheader">Our story</h2>
      <h1 className="section-main-header">A garden like no other</h1>

      <p className="about-para">
        Tucked away in the quiet hills of Nooitgedacht, eMalahleni, Khumo
        Gardens is our labor of love. It's a place where the natural wild meets
        a bit of polished charm. We've spent years getting the balance just
        right shaping a landscape that feels lush and peaceful, yet feels like
        it was always meant to be here.
      </p>

      <div className=" italic-container">
        <div className="line"></div> {/* vertical line */}
        <em className=" italic-para">
          "We have cultivated a space that invites you to pause, breathe, and
          celebrate life's most precious moments."
        </em>
      </div>

      <p className="about-para">
        Whether you're looking for a quiet spot to escape for the day, planning
        your dream wedding, or need the perfect light for a photo shoot, these
        gardens are here to make your day feel special. We've poured our hearts
        into every path, flower, and shaded corner to make sure that from the
        moment you arrive, everything feels peaceful, easy, and a little bit
        like magic
      </p>
    </section>
  );
};
