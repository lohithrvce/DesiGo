import React from "react";
import "../../App.css";
import image1 from "./imagess/image1.PNG";
import image2 from "./imagess/image2.PNG";

const AboutHumus = () => {
  return (
    <div className="Humus-header">
      <div className="Header">
        <h2> About DesiGo</h2>
        <div className="Humus-image">
          <img src={image1} width="600px" />
        </div>
        <h1 className="text"> Our Vission</h1>
        <p className="para">
          All fresh produce (Vegetables and fruits) undergo three critical
          phases in their commercial lifecycle, which are Production -
          Procurement - Processing - Marketing (we simply call it 3 PM!).
          <br />
          <div className="para">
            HUMUS works on connecting each of these phases by minimising
            detours, time to plate and the most important of all, wastage. We
            educate our farmers through our Agri-Schools to move towards
            chemical-free farming and give them the best price for their produce
            grown with unmatchable hard work. We then ensure that these products
            reach our retailers Just-In-Time so that the end consumers get their
            hands on the freshest vegetables and fruits!
            <br />
          </div>
          <div className="para">
            We want the farmer to get a better price than what he is getting
            today and want the end consumer to pay less than what he is paying
            today. We achieve this by eliminating middle handling and also
            wastage of vegetable and fruits which is a consequence of the
            former. We offer convenience to our retailers by sourcing vegetables
            and fruits directly from the farmers and ensure that the product
            reaches their outlets in time and in their best quality. This again
            turns out to be a benefit to our retailers in terms of prices which
            he further transfers to our end consumers who now have to pay lesser
            prices for a fresher veggie or a fruit.
          </div>
          <br /> Quality assurance is the breath of HUMUS and we stand by it,
          which gives our customers seamless and tension free business
          transactions. A day is not far when we will take pride in claiming
          that every fruit and vegetable you consume has zero chemical residue
          and your family stays protected.
        </p>
        <h1 className="text">Our Mission</h1>
        <p className="para">
          Over the last 2 years, we, at HUMUS, have analyzed, experienced,
          studied and understood the agricultural supply chain process at
          length. We understood the complications the legacy system has
          introduced and for long unaddressed - we started from bottom up - our
          interactions ranged from farmers, their pain areas to the middlemen
          who bring the produce to the market onward to the middlemen at the
          market who control the prices and eventually the retailers and
          consumers. The consumers were paying far too much and the farmers were
          getting far too less than what they are entitled.
          <br />
          <div className="para">
            ​Simply put, the legacy process has complications and the middlemen
            have been thriving on the same.
          </div>
          <br />
          <p className="para">
            Despite offering farmers' produce at fair market prices, the
            retailers were not cascading this to the consumers.
          </p>
          <br />
          As Mahatma Gandhi had said,
          <b>
            <i>"be the change you want to see"</i>
          </b>
          , we stepped into the deep end of the Agricultural Supply Chain by
          commencing our B2B operations. Now our target is complete the circle
          by getting into the sales & marketing step of the 3PM process - the
          output of which is Bengaluru's 1st "Soil-To-Home" Fair Market
          Agriculture Market
        </p>
        <div className="Humus-image">
          <img src={image2} width="450px" />
        </div>
        <h1 className="text">The Team That Make It Possible</h1>
        <p className="para">
          At HUMUS, we wouldn’t be able to do what we do without our dedicated
          team behind us. Our committed staff goes above and beyond to make sure
          you have the most positive experience yet. Highly involved with the
          greater farmer community, our team does its best to maintain all
          aspects of our venture.
          <br />
          <p className="para">
            We are a group of like minded entrepreneurs, agriculturists, tech
            experts, product managers and budding students - we couldn’t be any
            happier to come together making our team a well-blended force.
            Contact us to get to know our team, and see what they can do for you
            today!
          </p>
        </p>
      </div>
    </div>
  );
};

export default AboutHumus;
