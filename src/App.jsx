import { Route, Routes } from "react-router-dom";
import "./App.css";

// for components
import MiniNavBar from "./components/MiniNavBar/MiniNavBar";
import Navbar from "./components/Navbar/Navbar";
import ContactSection from "./components/ContactSection/ContactSection";

// for pages
import Home from "./pages/Home";
import PropertyDetails from "./pages/PropertyDetails";
import Contact from "./pages/Contact";
import Properties from "./pages/Properties";
import { useState } from "react";

// for icons in mininavbar
import { faEnvelope, faMap } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer/Footer";

function App() {
  // data for navbar
  const links = [
    {
      title: "home",
      to: "/",
    },
    {
      title: "properties",
      to: "/properties",
    },
    {
      title: "property details",
      to: "/property-details",
    },
    {
      title: "contact us",
      to: "/contact-us",
    },
    {
      title: "scedual a visit",
      to: "/visit",
    },
  ];

  // data for mininavbar
  const [contact] = useState([
    {
      id: 1,
      icon: faEnvelope,
      link: "info@company.com",
    },
    {
      id: 2,
      icon: faMap,
      link: "Sunny Isles Beach, FL 33160",
    },
  ]);

  const [ContactIcons] = useState([
    {
      id: 1,
      icon: faFacebook,
      //   here's for facebook url
      link: "#",
    },
    {
      id: 2,
      icon: faTwitter,
      link: "#",
    },
    {
      id: 3,
      icon: faLinkedin,
      link: "#",
    },
    {
      id: 4,
      icon: faInstagram,
      link: "#",
    },
  ]);

  return (
    <>
      <MiniNavBar Contact={contact} ContactIcons={ContactIcons} />
      <Navbar logo="villa" links={links} />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/property-details" element={<PropertyDetails />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>
      <Footer line="Copyright &copy; 2048 Villa Agency Co, Ltd All rights reserved - Desighn: TemplateMo" />
    </>
  );
}

export default App;
