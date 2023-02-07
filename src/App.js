import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useMemo } from "react";
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
import { initializeApp } from "firebase/app";
import { getPerformance } from "firebase/performance";
import { getCLS, getFID, getLCP } from "web-vitals";

function App() {
  const firebaseConfig = useMemo(() => {
    return {
      apiKey: "AIzaSyDy_Evuipb-gW04NwJfoVyU11-S6x8Gjoo",
      authDomain: "sublineautorob.firebaseapp.com",
      projectId: "sublineautorob",
      storageBucket: "sublineautorob.appspot.com",
      messagingSenderId: "10582242512",
      appId: "1:10582242512:web:9352a712eecf759d9c9ad5",
    };
  }, []);

  useEffect(() => {
    window.addEventListener("load", () => {
      Aos.init({
        duration: 700,
      });
      Aos.refresh();
    });
  }, []);

  useEffect(() => {
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    // Initialize Performance Monitoring and get a reference to the service
    const perf = getPerformance(app);

    getCLS(console.log);
    getFID(console.log);
    getLCP(console.log);
  }, [firebaseConfig]);

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
