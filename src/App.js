import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-dark-primary to-dark-secondary">
      <ToastContainer />
      <NavBar className="z-50" /> {/* Ensure NavBar is above other content */}
      <main className="container mx-auto px-4 pt-28 md:pt-24"> {/* Adjusted padding for mobile */}
        <div className="space-y-16">
          <Home />
          <About />
          <Portfolio />
          <Experience />
          <Contact />
        </div>
      </main>
      <Footer className="z-50" /> {/* Ensure Footer is above other content */}
      <SocialLinks />
    </div>
  );
}

export default App;