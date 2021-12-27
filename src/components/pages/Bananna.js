import React from "react";
import "../../App.css";
import Egg from "./imagess/Egg.PNG";
import bananna from "./imagess/bananna.PNG";

const Bananna = () => {
  return (
    <div className="EggMilk_head">
      <div>
        <img src={bananna} width="300 px" />
        <h2>Bananna</h2>
        <p>
          per price <br />
          <span>$8</span>
        </p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default Bananna;
