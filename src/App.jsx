import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Statistics from "./components/Statistics";
import SearchDonor from "./components/SearchDonor";
import RegisterDonor from "./components/RegisterDonor";
import EmergencyRequest from "./components/EmergencyRequest";
import Hospitaldirectory from "./components/Hospitaldirectory";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./styles/Navbar.css";
import "./styles/Hero.css";
import "./styles/Statistics.css";
import "./styles/SearchDonor.css";
import "./styles/RegisterDonor.css";
import "./styles/EmergencyRequest.css";
import "./styles/HospitalDirectory.css";
import "./styles/Contact.css";
import "./styles/DonorCard.css";
import "./styles/Footer.css";

function App() {
  return (
    <div className="App">
      <Navbar />

      <main>
        <Hero />
        <Statistics />
        <SearchDonor />
        <RegisterDonor />
        <EmergencyRequest />
        <Hospitaldirectory />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;