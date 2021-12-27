import React from "react";
import "../../App.css";
import Egg from "./imagess/Egg.PNG";
import beans from "./imagess/beans.PNG";

const Beans = () => {
  return (
    <div className="EggMilk_head">
      <div>
        <img src={beans} width="300 px" />
        <h2>Beans</h2>
        <p>
          per price <br />
          <span>$8</span>
        </p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default Beans;
