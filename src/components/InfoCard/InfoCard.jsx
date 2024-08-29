import "./InfoCard.css";

import { useState } from "react";

function InfoCard({dealsDetails}) {
 
  return (
    <div className="deal-details flex">
      {dealsDetails.map((item) => (
        <ul>
          <li>
            total flat space: <span>{item.flatSpace}</span>
          </li>
          <li>
            floor number: <span>{item.floorNumber}</span>
          </li>
          <li>
            number of rooms: <span>{item.rooms}</span>
          </li>
          <li>
            parking available: <span>{item.availability}</span>
          </li>
          <li>
            payment process: <span>{item.paymentProcess}</span>
          </li>
        </ul>
      ))}
    </div>
  );
}

export default InfoCard;
