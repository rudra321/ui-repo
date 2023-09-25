import React from "react";
import Navbar from "../components/NavBar"
import Footer from "../components/Footer"
import HeroImg2 from "../components/HeroImg2";
import Form from "../components/Form"
import ContactForm from "../components/Contactform";
const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="Contact me." text=""/>
      <ContactForm/>
      <Footer />
    </div>
  );
};

export default Contact;
