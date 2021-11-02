import React from "react";
import "../../App.css";
import WaterMeleon from "./imagess/watermeleon.PNG";
import bananna from "./imagess/bananna.PNG";
import promogranate from "./imagess/promogranate.PNG";
import apple from "./imagess/Apple.PNG";

const Fruits = () => {
  return (
    <div class="row">
      <div class="column">
        <img src={WaterMeleon} width="200 px" />
        <h2>WaterMeleon</h2>
        <p>
          per Kg <br />
          <span>$10</span>
        </p>
        <button>Add to Cart</button>
      </div>
      <div class="column">
        <img src={promogranate} width="200 px" />
        <h2>Promogranate</h2>
        <p>
          per Kg <br />
          <span>$8</span>
        </p>
        <button>Add to Cart</button>
      </div>
      <div class="column">
        <img src={bananna} width="200 px" />
        <h2>Bananna</h2>
        <p>
          per Kg <br />
          <span>$8</span>
        </p>
        <button>Add to Cart</button>
      </div>
      <div class="row">
        <div class="column">
          <img src={apple} width="200 px" />
          <h2>Apple</h2>
          <p>
            per Kg <br />
            <span>$10</span>
          </p>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Fruits;
