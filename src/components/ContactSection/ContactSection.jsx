import "./ContactSection.css";
import { useState } from "react";

import phoneIcon from "./../../../public/images/phone-icon.png";
import emailIcon from "./../../../public/images/email-icon.png";

import Title from "../Title/Title";
import ContactForm from "../ContactForm/ContactForm";
import ContactMiniCard from "../ContactMiniCard/ContactMiniCard";

export default function ContactSection() {
  const [data] = useState([
    {
      id: 1,
      icon: phoneIcon,
      main: "010-020-0340",
      sub: "phone Number",
    },
    {
      id: 2,
      icon: emailIcon,
      main: "info@villa.com",
      sub: "business email",
    },
  ]);
  return (
    <section className="contact-section pd-y container">
      <Title sub_title="contact us" title="get in touch with our agents" />

      <div id="contact-section" className="contact-section-wrapper flex">
        <div className="contact-section-iframe">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423284.044166461!2d-118.74138735752985!3d34.02060845586251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2snl!4v1724914428860!5m2!1sen!2snl"></iframe>
          <ContactMiniCard MiniCardData={data} />
        </div>

        <div className="contact-section-form">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
