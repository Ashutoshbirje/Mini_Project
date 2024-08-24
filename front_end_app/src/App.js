import './App.css';
import Navbar from './Component/Navigation/Navbar';
import HeroSection from './Component/Home/HeroSection';
import Footer from './Component/footer/Footer';
import TestimonialCarousel from './Component/TestimonialCarousel/TestimonialCarousel';
import SearchBar from './Component/Search/SearchBar';
import ServiceSection from './Component/Help/ServiceSection';
import Notice from './Component/Notice/Notice';
function App() {
  return(
    <div className="App">
      <Navbar />
      <HeroSection />
      <ServiceSection />
      <SearchBar />
      <TestimonialCarousel />
      <Notice/>
      <Footer />
    </div>
  );
}

export default App;
