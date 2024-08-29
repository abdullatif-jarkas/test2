import { useState } from "react";

import Title from "../components/Title/Title";
import Carousel from "../components/Carousel/Carousel";
import Featured from "../components/Featured/Featured";
import Video from "../components/Video/Video";
import PropertiesCards from "../components/PropertiesCards/PropertiesCards";
import ContactSection from "../components/ContactSection/ContactSection";

// for images
import propertyOne from "./../../public/images/property-01.jpg";
import propertyTwo from "./../../public/images/property-02.jpg";
import propertyThree from "./../../public/images/property-03.jpg";
import propertyFour from "./../../public/images/property-04.jpg";
import propertyFive from "./../../public/images/property-05.jpg";
import propertySix from "./../../public/images/property-06.jpg";

import villaOne from "./../../public/images/banner-01.jpg";
import villaTwo from "./../../public/images/banner-02.jpg";
import villaThree from "./../../public/images/banner-03.jpg";
import Deals from "../components/Deals/Deals";

function Home() {
  // for carousel hero content
  const [content] = useState([
    {
      id: 1,
      src: villaOne,
      header: "hurry! get the best villa for you",
      location1: "toronto, ",
      location2: "canada",
    },
    {
      id: 2,
      src: villaTwo,
      header: "we have it all ...",
      location1: "united state, ",
      location2: "florida",
    },
    {
      id: 3,
      src: villaThree,
      header: "come on and get it! ",
      location1: "syria, ",
      location2: "tartous",
    },
  ]);

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
  ]);

  return (
    <>
      <Carousel CarouselContent={content} />
      <Featured />
      <Video />
      <Deals />
      <section className="properties-section pd-y container">
        <Title
          sub_title="properties"
          title="we provide the best property you like"
        />

        <PropertiesCards property={properties} />
      </section>
      <ContactSection />
    </>
  );
}

export default Home;
