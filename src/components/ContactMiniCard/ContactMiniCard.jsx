// for css
import "./ContactMiniCard.css";

function ContactMiniCard({ MiniCardData }) {
  return (
    <div className="contact-card-parent flex">
      {MiniCardData.map((item) => {
        return (
          <div key={item.id} className="contact-card flex">
            <div className="contact-icon">
              <img src={item.icon} alt="contact-icon" />
            </div>
            <div className="contact-details">
              <h4>{item.main}</h4>
              <p>{item.sub}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ContactMiniCard;
