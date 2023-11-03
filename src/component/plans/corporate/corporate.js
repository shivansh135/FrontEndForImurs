import React, { useState, useEffect } from "react";
import "./corporate.css";

export const Corporate = (props) => {
  const [bundlesData, setBundlesData] = useState([]);
  const [selectedMagazine, setSelectedMagazine] = useState("Select the No Magazine");

  useEffect(() => {
    // Set props.bundles in the bundlesData state
    setBundlesData(props.bundles);
  }, [props.bundles]);

  // Function to handle selection and send selected magazine back to the parent component
  const handleSelect = (magazine) => {
    setSelectedMagazine(magazine);
    // Send the selected magazine back to the parent component
    props.onMagazineSelect(magazine);
  };

  return (
    <div className="corporate">
      <div className="corporate-wrapper">Corporate Plans</div>
      <div className="dropdown">
        <button className="btn dropdown-toggle corporate-div" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          <div className="corporate-wrapper-2">{selectedMagazine}</div>
        </button>
        <ul className="dropdown-menu" style={{ width: "100%" }}>
          {bundlesData.map((perMagazine, index) => (
            <li key={index}>
              <a
                className="dropdown-item"
                href="#"
                onClick={() => handleSelect(perMagazine)}
              >
                {perMagazine}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <p className="bundle" style={{display:selectedMagazine==='Select the No Magazine'?"block":'none'}}>( Select a Bundle to view pricing )</p>
    </div>
  );
};
