import React from "react";
import "../../App.css";
import Egg from "./imagess/Egg.PNG";
import onion from "./imagess/onion.PNG";

const Onion = () => {
  return (
    <div className="EggMilk_head">
      <div>
        <img src={onion} width="300 px" />
        <h2>Onion</h2>
        <p>
          per price <br />
          <span>$8</span>
        </p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default Onion;
