import React from "react";
import "../../App.css";

import tomato from "./imagess/tomato.PNG";

const Tomato = () => {
  return (
    <div className="EggMilk_head">
      <div>
        <img src={tomato} width="300 px" />
        <h2>Tomato</h2>
        <p>
          per price <br />
          <span>$8</span>
        </p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default Tomato;
