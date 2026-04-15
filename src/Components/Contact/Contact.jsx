import "./Contact.css";

export const Contact = () => {
  return (
    <section id="contact">
      <h1 className="contact-logo">Khumo Gardens.</h1>
      <div className="contact-line"></div>
      <p className="contact-header">Contact info</p>
      <div className="contact-details">
        <p className="detail">
          <a className="facebook" href="https://www.facebook.com/KhumoGardens/">
            facebook
          </a>
        </p>
        <div className="dot"></div>
        <p className="detail">060 974 4364</p>
        <div className="dot"></div>
        <p className="detail">&copy; khumo Gardens</p>
      </div>
    </section>
  );
};
