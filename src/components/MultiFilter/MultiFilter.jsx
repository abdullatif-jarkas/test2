import { useEffect, useState } from "react";
import "./MultiFilter.css";
import PropertiesCards from "../PropertiesCards/PropertiesCards";

function MultiFilter({array, btns}) {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredItems, setFilteredItems] = useState(array);


  const handleFilterOnClick = (selectedType) => {
    if (selectedType === "show all") {
      setSelectedFilters([]);
    } else if (selectedFilters.includes(selectedType)) {
      setSelectedFilters(selectedFilters.filter((el) => el !== selectedType));
    } else {
      setSelectedFilters([...selectedFilters, selectedType]);
    }
  };

  const filterItems = () => {
    if (selectedFilters.length > 0) {
      const tempItems = array.filter((item) =>
        selectedFilters.includes(item.typeOfVilla)
      );
      setFilteredItems(tempItems);
    } else {
      setFilteredItems(array);
    }
  };

  useEffect(() => {
    filterItems();
  }, [selectedFilters]);

  return (
    <>
      <div className="btns-wrapper">
        {btns.map((item, index) => (
          <button
            onClick={() => handleFilterOnClick(item)}
            className={`deal-filter-btn ${
              selectedFilters.includes(item) ? "filter-btn-active" : ""
            }`}
            key={`filters-${index}`}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="items-wrapper">
        <PropertiesCards property={filteredItems} />
      </div>
    </>
  );
}

export default MultiFilter;
