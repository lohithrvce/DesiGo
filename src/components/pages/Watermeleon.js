import React from "react";
import "../../App.css";

import watermeleon from "./imagess/watermeleon.PNG";

const Watermeleon = () => {
  return (
    <div className="EggMilk_head">
      <div>
        <img src={watermeleon} width="300 px" />
        <h2>Watermeleon</h2>
        <p>
          per price <br />
          <span>$10</span>
        </p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default Watermeleon;
