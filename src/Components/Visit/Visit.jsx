import "./Visit.css";
import calendarIcon from "../../assets/Icons/calendar-lines.svg";
import clockIcon from "../../assets/Icons/clock-nine.svg";
import locationIcon from "../../assets/Icons/location.svg";
import ArrowIcon from "../../assets/Icons/arrow.svg";

export const Visit = () => {
  const visitDetails = [
    { icon: calendarIcon, header: "open days", description: "monday - sunday" },
    {
      icon: clockIcon,
      header: "operating hours",
      description: "10:00am - 7:30pm",
    },
    {
      icon: locationIcon,
      header: " plot 60, Nooitegedacht 1035",
      description: "eMalahleni",
    },
  ];

  return (
    <section id="visit">
      <h2 className="section-subheader subheader">Plan your visit</h2>
      <h1 className="section-main-header main-header">Experience the Magic</h1>
      {/* visit items */}
      <div className="visit-wrapper">
        {visitDetails.map((visit, index) => (
          <div className="visit-items" key={index}>
            <img src={visit.icon} alt="icon" />
            <div className="description-wrapper">
              <p>{visit.description}</p>
              <h2>{visit.header}</h2>
            </div>
          </div>
        ))}
      </div>
      <p className="clickable-message">
        <a href="https://maps.app.goo.gl/zVY4ihGPg1VvP3iY8" target="blank">
          get directions
        </a>
        <img className="arrow-icon" src={ArrowIcon} alt="icon" />
      </p>
    </section>
  );
};
