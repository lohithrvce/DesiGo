import React from "react";
import "../../App.css";
import Egg from "./imagess/Egg.PNG";
import EggHybrid2 from "./imagess/EggHybrid.PNG";

const EggHybrid = () => {
  return (
    <div className="EggMilk_head">
      <div>
        <img src={EggHybrid2} width="300 px" />
        <h2>Egg Hybrid</h2>
        <p>
          per price <br />
          <span>$8</span>
        </p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default EggHybrid;
