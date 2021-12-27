import React from "react";
import "../../App.css";
import Egg from "./imagess/Egg.PNG";
import potato from "./imagess/potato.PNG";

const Potato = () => {
  return (
    <div className="EggMilk_head">
      <div>
        <img src={potato} width="300 px" />
        <h2>Potato</h2>
        <p>
          per price <br />
          <span>$8</span>
        </p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default Potato;
