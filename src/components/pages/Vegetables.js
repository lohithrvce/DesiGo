import React from "react";
import "../../App.css";
import beans from "./imagess/beans.PNG";
import beetroot from "./imagess/beetroot.PNG";
import chilli from "./imagess/chilli.PNG";
import cucumber from "./imagess/cucumber.PNG";
import potato from "./imagess/potato.PNG";
import tomato from "./imagess/tomato.PNG";
import onion from "./imagess/onion.PNG";

const Vegetable = () => {
  return (
    <div class="row">
      <div class="column">
        <img src={beans} width="200 px" />
        <h2>Beans</h2>
        <p>
          per Kg <br />
          <span>$10</span>
        </p>
        <button>Add to Cart</button>
      </div>
      <div class="column">
        <img src={beetroot} width="200 px" />
        <h2>Beetroot</h2>
        <p>
          per Kg <br />
          <span>$8</span>
        </p>
        <button>Add to Cart</button>
      </div>
      <div class="column">
        <img src={chilli} width="200 px" />
        <h2>Chilli</h2>
        <p>
          per Kg <br />
          <span>$8</span>
        </p>
        <button>Add to Cart</button>
      </div>
      <div class="row">
        <div class="column">
          <img src={onion} width="200 px" />
          <h2>Potato</h2>
          <p>
            per Kg <br />
            <span>$10</span>
          </p>
          <button>Add to Cart</button>
        </div>
        <div class="column">
          <img src={tomato} width="200 px" />
          <h2>Tomato</h2>
          <p>
            per Kg <br />
            <span>$10</span>
          </p>
          <button>Add to Cart</button>
        </div>
        <div class="column">
          <img src={cucumber} width="200 px" />
          <h2>cucumber</h2>
          <p>
            per peice <br />
            <span>$10</span>
          </p>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Vegetable;
