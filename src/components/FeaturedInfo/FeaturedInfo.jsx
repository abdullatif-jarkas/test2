// for css
import "./FeaturedInfo.css";

function FeaturedInfo({ content }) {
  return (
    <div className="details-wrapper flex">
      {content.map((item) => (
        <div key={item.id} className="detail-box flex">
          <div className="detail-icon">
            <img src={item.icon} alt="icon" />
          </div>
          <div className="detail-content">
            <h4>{item.content}</h4>
            <p>{item.paragrapgh}</p>
          </div>
        </div>
      ))}

    </div>
  );
}

export default FeaturedInfo;
