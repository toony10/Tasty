// Navbar
import Navbar from "./components/Navbar";

// Home Sections
import HeroSection from "./components/HeroSection";
import ImproveSkills from "./components/ImproveSkills";
import QuotesSection from "./components/QuotesSection";
import ChefsSection from "./components/ChefsSection";
import Footer from "./components/Footer";
function App() {
  return (
    <div className='App'>
      <Navbar />
      <div className='container main'>
        <HeroSection />
        <ImproveSkills />
        <QuotesSection />
        <ChefsSection />
      </div>
      <Footer />
    </div>
  );
}

export default App;
