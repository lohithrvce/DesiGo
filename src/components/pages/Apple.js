import React from "react";
import "../../App.css";
import Egg from "./imagess/Egg.PNG";
import apple from "./imagess/Apple.PNG";

const Apple = () => {
  return (
    <div className="EggMilk_head">
      <div>
        <img src={apple} width="300 px" />
        <h2>Apple</h2>
        <p>
          per price <br />
          <span>$8</span>
        </p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default Apple;
