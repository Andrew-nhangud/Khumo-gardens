import "./Navbar.css";
import { useState } from "react";
import closeIcon from "../../assets/Icons/close.svg";
import menuIcon from "../../assets/Icons/menu.svg";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // sets the icons to false on the first render

  // nav links for the navbar menu
  const navLinks = [
    { id: "about", label: "ABOUT" },
    { id: "services", label: "SERVICES" },
    { id: "visit", label: "VISIT" },
    { id: "contact", label: "CONTACT" },
  ];

  const handleOpen = () => setIsOpen((prev) => !prev); // keeps track of the icons when pressed
  const handleClick = () => setIsOpen(false); // removes the menu if a nav link is pressed

  return (
    <nav className="global-container">
      {/* navbar container */}
      <div className="nav-container">
        <h1>
          <a className="logo" href="home">
            Khumo Gardens
          </a>
        </h1>

        {/* mobile menu icons  */}
        <img
          className="menu-icons remove-icons"
          src={isOpen ? closeIcon : menuIcon}
          onClick={handleOpen}
          alt="menu icons"
        />

        {/* desktop menu */}
        <ul className="desktop-menu">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`} onClick={handleClick}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* mobile menu */}
      {isOpen && (
        <ul className="mobile-menu">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`} onClick={handleClick}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};
