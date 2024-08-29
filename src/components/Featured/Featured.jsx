import "./Featured.css";
import { useState } from "react";

import Title from "../Title/Title";
import Accordion from "../Accordion/Accordion";
import FeaturedInfo from "../FeaturedInfo/FeaturedInfo";

import feature from "./../../../public/images/featured.jpg";
import featureIcon from "./../../../public/images/featured-icon.png";

import detailIcon1 from "./../../../public/images/info-icon-01.png";
import detailIcon2 from "./../../../public/images/info-icon-02.png";
import detailIcon3 from "./../../../public/images/info-icon-03.png";
import detailIcon4 from "./../../../public/images/info-icon-04.png";

export default function Featured() {
  // for accordion
  const [data] = useState([
    {
      id: 1,
      question: "Best Usefull links ?",
      answer: (
        <>
          get <b>the best villa</b> websites template in HTML CSS and Bootstrao
          for your buainess. TemplateMo provides you the{" "}
          <a href="#">best CSS templates</a> in the world. please tell your
          friends about it.
        </>
      ),
    },
    {
      id: 2,
      question: "how does this work ?",
      answer: "just follow our instructions...",
    },
    {
      id: 3,
      question: "Why is villa agency is the best ?",
      answer:
        "because we provide you villas that youve never actually seen in your life.",
    },
  ]);

  // for featured info
  const [info] = useState([
    {
      id: 1,
      icon: detailIcon1,
      content: "225 m2",
      paragrapgh: "total flat space",
    },
    {
      id: 2,
      icon: detailIcon2,
      content: "Contract",
      paragrapgh: "contract ready",
    },
    {
      id: 3,
      icon: detailIcon3,
      content: "Payment Process",
      paragrapgh: "payment",
    },
    {
      id: 4,
      icon: detailIcon4,
      content: "Safety",
      paragrapgh: "24/7 under control",
    },
  ]);

  return (
    <section className="features-section flex pd-y container">
      <div className="featured-img">
        <img src={feature} alt="feature" className="feature" />
        <div className="feature-icon">
          <img src={featureIcon} alt="feature-icon" />
        </div>
      </div>

      <div className="feature-content">
        <Title sub_title="featured" title="best apartment & sea view" />
        <Accordion accordionDetails={data} />
      </div>

      <FeaturedInfo content={info} />
    </section>
  );
}
