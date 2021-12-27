import React from "react";
import "../../App.css";
import Egg from "./imagess/Egg.PNG";
import promogranate from "./imagess/promogranate.PNG";

const Promogranate = () => {
  return (
    <div className="EggMilk_head">
      <div>
        <img src={promogranate} width="300 px" />
        <h2>Promogranate</h2>
        <p>
          per price <br />
          <span>$8</span>
        </p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default Promogranate;
