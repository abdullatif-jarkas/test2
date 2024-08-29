import "./Video.css";
import { useState } from "react";

import Title from "../Title/Title";
import MiniCards from "../MiniCards/MiniCard";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPlay
} from "@fortawesome/free-solid-svg-icons";

import Pic from "./../../../public/images/video-frame.jpg"

export default function Video() {
      const [miniCardsContent] = useState([
        {
            id: 1,
            number: 34,
            text: "buildings finished now"
        },
        {
            id: 2,
            number: 12,
            text: "years experience"
        },
        {
            id: 3,
            number: 24,
            text: "awards won 2023"
        }
    ])
  return (
    <section className="vedio-section background pd-y container">
      <Title sub_title="video view" title="get closer view & different feeling" />

      <div className="vedio-frame">
        <img src={Pic} alt="video-frame" />
        <div className="vedio-icon">
        <FontAwesomeIcon icon={faPlay} />
        </div>
      </div>
      <MiniCards content={miniCardsContent}/>
    </section>
  );
}
