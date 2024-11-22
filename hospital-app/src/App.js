import Banner from "./components/banner";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Plans from "./components/plans";
import Services from "./components/services";




function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Hero />
      <Services />
      <Plans />
      <Contact />
      <Footer/>   
    </div>
  );
}

export default App;
