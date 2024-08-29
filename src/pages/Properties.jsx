// for css
import './Properties.css'
import "../components/Deals/Deals.css";

import { useState } from "react";

// for components
import Hero from "../components/Hero/Hero";
import MultiFilter from "../components/MultiFilter/MultiFilter";

// for images
import propertyOne from "./../../public/images/property-01.jpg";
import propertyTwo from "./../../public/images/property-02.jpg";
import propertyThree from "./../../public/images/property-03.jpg";
import propertyFour from "./../../public/images/property-04.jpg";
import propertyFive from "./../../public/images/property-05.jpg";
import propertySix from "./../../public/images/property-06.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAnglesRight} from "@fortawesome/free-solid-svg-icons";

function Properties() {
  // for cards
  const [properties] = useState([
    {
      id: 1,
      img: propertyOne,
      typeOfVilla: "luxury villa",
      price: "2.260.000",
      location: "18 new street miami, OR 97219",
      bedrooms: "8",
      bathrooms: "8",
      area: "545m2",
      floor: "3",
      parking: "6 spots",
      // for scedualling a visit
      link: "#",
    },
    {
      id: 2,
      img: propertyTwo,
      typeOfVilla: "luxury villa",
      price: "1.180.000",
      location: "54 mid street florida, OR 27001",
      bedrooms: "5",
      bathrooms: "4",
      area: "225m2",
      floor: "3",
      parking: "10 spots",
      // for scedualling a visit
      link: "#",
    },
    {
      id: 3,
      img: propertyThree,
      typeOfVilla: "luxury villa",
      price: "1.180.000",
      location: "28 old street miami, OR 38540",
      bedrooms: "5",
      bathrooms: "4",
      area: "225m2",
      floor: "3",
      parking: "10 spots",
      // for scedualling a visit
      link: "#",
    },
    {
      id: 4,
      img: propertyFour,
      typeOfVilla: "apartment",
      price: "584.500",
      location: "12 new street miami, OR 12650",
      bedrooms: "4",
      bathrooms: "3",
      area: "125m2",
      floor: "25th",
      parking: "2 cars",
      // for scedualling a visit
      link: "#",
    },
    {
      id: 5,
      img: propertyFive,
      typeOfVilla: "penthouse",
      price: "925.600",
      location: "34 beach street miami, OR 42680",
      bedrooms: "4",
      bathrooms: "4",
      area: "180m2",
      floor: "38th",
      parking: "2 cars",
      // for scedualling a visit
      link: "#",
    },
    {
      id: 6,
      img: propertySix,
      typeOfVilla: "modern cando",
      price: "450.000",
      location: "22 new street portland, OR 16540",
      bedrooms: "3",
      bathrooms: "2",
      area: "165m2",
      floor: "26th",
      parking: "3 cars",
      // for scedualling a visit
      link: "#",
    },
    {
      id: 7,
      img: propertyFive,
      typeOfVilla: "modern cando",
      price: "450.000",
      location: "22 new street portland, OR 16540",
      bedrooms: "3",
      bathrooms: "2",
      area: "165m2",
      floor: "26th",
      parking: "3 cars",
      // for scedualling a visit
      link: "#",
    },
    {
      id: 8,
      img: propertyOne,
      typeOfVilla: "modern cando",
      price: "450.000",
      location: "22 new street portland, OR 16540",
      bedrooms: "3",
      bathrooms: "2",
      area: "165m2",
      floor: "26th",
      parking: "3 cars",
      // for scedualling a visit
      link: "#",
    },
    {
      id: 9,
      img: propertyFour,
      typeOfVilla: "modern cando",
      price: "450.000",
      location: "22 new street portland, OR 16540",
      bedrooms: "3",
      bathrooms: "2",
      area: "165m2",
      floor: "26th",
      parking: "3 cars",
      // for scedualling a visit
      link: "#",
    },
  ]);

  let filters = ["show all", "apartment", "luxury villa", "penthouse"];

  return (
    <>
      <Hero link="Properties" title="properties" />
      <section className="container pd-y">
        <MultiFilter btns={filters} array={properties} />
        <ul className="pagenation flex">
          <li className="pagenation-item pagenation-item-active"><span>1</span></li>
          <li className="pagenation-item"><span>2</span></li>
          <li className="pagenation-item"><span>3</span></li>
          <li className="pagenation-item">
            <span><FontAwesomeIcon icon={faAnglesRight} /></span>
          </li>
        </ul>
      </section>
    </>
  );
}

export default Properties;
