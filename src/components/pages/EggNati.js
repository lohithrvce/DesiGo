import React from "react";
import "../../App.css";
import Egg from "./imagess/Egg.PNG";
import EggHybrid from "./imagess/EggHybrid.PNG";

const EggNati = () => {
  return (
    <div className="EggMilk_head">
      <div>
        <img src={Egg} width="300 px" />
        <h2>Egg Nati</h2>
        <p>
          per price <br />
          <span>$8</span>
        </p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default EggNati;
