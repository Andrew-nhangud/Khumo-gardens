import "./Styles/global.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { Hero } from "./Components/Hero/Hero";
import { About } from "./Components/About/About";
import { Services } from "./Components/Services/Services";
import { Visit } from "./Components/Visit/Visit";
import { Contact } from "./Components/Contact/Contact";

function App() {
  return (
    <div className="global-container">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Visit />
        <Contact />
      </main>
    </div>
  );
}

export default App;
