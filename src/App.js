import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./About/AboutUs";
import ContactUs from "./Contact/ContactUs";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home/Home";
import NotFound404 from "./NotFound404";
import ServiceDetails from "./Services/ServiceDetails";
import Services from "./Services/Services";
import TopBar from "./TopBar";
import ScrollToTop from "./Utility/ScrollToTop";

function App() {
  useEffect(() => {
    window.addEventListener("load", () => {
      Aos.init({
        duration: 700,
      });
      Aos.refresh();
    });
  }, []);

  return (
    <div>
      <TopBar />
      <Header />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="services" element={<Services />} />
        <Route path="services/:servicename" element={<ServiceDetails />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default App;
