import { useState } from "react";
import "./Accordion.css";

function Accordion({ accordionDetails }) {
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected == i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <div className="accordion">
      {accordionDetails.map((item) => {
        return (
          <div key={item.id} className="accordion-item">
            <div
              className={
                selected === item.id
                  ? "accordion-question question-active"
                  : "accordion-question"
              }
              onClick={() => toggle(item.id)}
            >
              <h3>{item.question}</h3>
            </div>
            <p
              className={
                selected === item.id
                  ? "accordion-answer accordion-active"
                  : "accordion-answer"
              }
            >
              {item.answer}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default Accordion;
