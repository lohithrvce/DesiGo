import React from "react";
import "../../App.css";
import Egg from "./imagess/Egg.PNG";
import EggHybrid from "./imagess/EggHybrid.PNG";

const EggMilk = () => {
  return (
    <div class="row">
      <div class="column">
        <img src={Egg} width="200 px" />
        <h2>Egg Nati</h2>
        <p>
          per price <br />
          <span>$8</span>
        </p>
        <button>Add to Cart</button>
      </div>
      <div class="column">
        <img src={EggHybrid} width="200 px" />
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

export default EggMilk;
