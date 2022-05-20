import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Sizebox from "./components/Sizebox"
import Work from "./components/Work";
import Footer from "./components/Footer";




function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Sizebox />
      <Skills />
      <Sizebox />
      <Sizebox />
      <Work />
      <Sizebox />
      <Sizebox />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
