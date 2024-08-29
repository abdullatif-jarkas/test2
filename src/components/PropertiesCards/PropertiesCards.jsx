import "./PropertiesCards.css";

export default function PropertiesCards({property}) {
  return (
      <div className="properties-wrapper flex">
        {property.map((item, index) => {
          return (
            <div key={`item${index}`} className="property-card">
              <img src={item.img} alt="propery" />
              <div className="property-price flex">
                <p>{item.typeOfVilla}</p>
                <span>&#x24;{item.price}</span>
              </div>
              <h3 className="property-location">{item.location}</h3>
              <ul className="property-details flex">
                <li>
                  bedrooms:
                  <span>{item.bedrooms}</span>
                </li>
                <li>
                  bathrooms: 
                  <span>{item.bathrooms}</span>
                </li>
                <li>
                  area: 
                  <span>{item.area}</span>
                </li>
                <li>
                  floor: 
                  <span>{item.floor}</span>
                </li>
                <li>
                  parking: 
                  <span>{item.parking}</span>
                </li>
              </ul>
              <a className="property-link" href={item.link}>
                schedual a visit
              </a>
            </div>
          );
        })}
      </div>
  );
}
