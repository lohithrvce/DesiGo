import React from "react";
import "../../App.css";
import soil from "./imagess/soil.PNG";

const FAQ = () => {
  return (
    <div className="Humus-header">
      <div className="Header">
        <h1>FAQ</h1>
        <p className="para">
          <h1>Is this an Organic Veg Store?</h1>
        </p>
        <div className="Humus-image">
          <img src={soil} width="1100px" />
        </div>
        <p className="para">
          No - BUT our motive is to move towards sustainble natural & organic
          farming, which is currenty overpriced and exploited. We are aiming to
          remove the misconception that organic farming has a lesser yield and
          more expensive. By completing the agricultural value chain, we also
          strive towards meeting our main objective of value chain which is to
          bridge the gap between consumers & farmers. This would be achieved
          once we have built the confidence across all stakeholders and then we
          firmly are committed to move from chemical to organic farming. This
          way, for Organic produce too, we can accomplish access to healthy
          produce at fair prices and there shouldnt be a price difference
          between the current regular & organic prices
        </p>
        <br />
        <h1>Do you accept all methods of payment?</h1>
        <div className="para">
          Yes!
          <br />
          We accept cash, credit cards, e-Wallets, UPI payments. Contactless is
          better - given the current Covid-19 pandemic
        </div>

        <h1>What differentiates you from other stores?</h1>
        <div className="para">
          <p>
            In short - Quality @ Fair Market Price Our key vision is to directly
            connect the farmers to end consumers and eliminate the multiple
            links in the chain. Our aim is not profit but provide a fair market
            price to both farmers and consumers
          </p>
          <h1 className="text">Is this the only store in Bangalore?</h1>
          <p className="para">
            For now, we have 4 Stores Open and Serving. There is always a first
            and JP Nagar is where we started our first store. For all our Store
            Locations Check out Store Location Page. We will be gradually
            opening in other areas of Namma Bengaluru.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
