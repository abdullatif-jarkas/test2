import './PropertyDetails.css'

import Hero from "../components/Hero/Hero";
import FeaturedInfo from "../components/FeaturedInfo/FeaturedInfo";
import Accordion from "../components/Accordion/Accordion";
import Deals from "../components/Deals/Deals";

// for images
import poolImg from "./../../public/images/pool.jpg";

import detailIcon1 from "./../../public/images/info-icon-01.png";
import detailIcon2 from "./../../public/images/info-icon-02.png";
import detailIcon3 from "./../../public/images/info-icon-03.png";
import detailIcon4 from "./../../public/images/info-icon-04.png";

import { useState } from "react";

function PropertyDetails() {
  // for accordion
  const [data] = useState([
    {
      id: 1,
      question: "Best Usefull links ?",
      answer: (
        <>
          Dolor <b>almest amet</b>, consectetur adipiscing eli, sed doesn't
          eiusmod tempor kinfolk tonx seitan curcifix 3 wolf moon bicycle right
          keffiyeh snackwave wolf same vice, chillwave vexillologist indcididunt
          ut labore consectetur <span>adipiscing </span>
          elit, sed do eiusmod tempor incididunt ut labore et dolore manga
          aliqua.
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
      content: "450 m2",
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
    <>
      <Hero link="PropertyDetails" title="single property" />
      <section className="container pd-y">
        <div className="single-property-wrapper flex">
          <div className="parent-for-property-details">
            <div className="img-container">
              <img src={poolImg} alt="villa-img" />
              <p className="pink">apartment</p>
              <h3 className="main-title">24 new street miami, OR 24560</h3>
              <p className="desc">
                Get <b>the best villa agency</b> HTML CSS Bootstrap Template for
                your company website. TemplateMo provides you the{" "}
                <a href="#">best free CSS templates</a> in the world. Please
                tell your friends about it. Thank you... Cloud bread kogi
                bitters pitchfork shoreditch tumblr yr succulents single-origin
                coffee schlitz enamel pin you probably haven't heard of them ugh
                hella.
              </p>
              <p className="desc">
                When tou look for free CSS templates, you can simply type
                TemplateMo in any search engine website. In addition, you can
                type TemplateMo Digital Marketing, TemplateMo Corporate Layouts,
                etc... Master cardigan hoodie pop-up
              </p>

              <Accordion accordionDetails={data} />
            </div>
          </div>
          <FeaturedInfo content={info} />
        </div>
      </section>
      <Deals />
    </>
  );
}

export default PropertyDetails;
