import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Navbar
import Navbar from "./components/Navbar";

// Home page
import Home from "./pages/Home";
// Recipes page
import Recipes from "./pages/Recipes";
// Setting page

//Footer
import Footer from "./components/Footer";
import Settings from "./pages/Settings";
function App() {
  return (
    <Router>
      <Navbar />
      <div className='container main'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/recipes' element={<Recipes />} />
          <Route path='/settings' element={<Settings />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
