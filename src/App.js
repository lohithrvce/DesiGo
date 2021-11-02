import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import AboutHumus from "./components/pages/About Humus";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Vegetables from "./components/pages/Vegetables";
import Fruits from "./components/pages/Fruits";
import FAQ from "./components/pages/FAQ";
import PrivacyPolicy from "./components/pages/PrivacyPolicy";
import ContactUs from "./components/pages/ContactUs";
import SignUp from "./components/pages/SignUp";
import Marketing from "./components/pages/Marketing";
import Consulting from "./components/pages/Consulting";
import BookData from "./Data.json";
import SearchBar from "./components/pages/SearchBar";
import OurStores from "./components/pages/OurStores";
import EggMilk from "./components/pages/EggMilk";
import EggNati from "./components/pages/EggNati";
import EggHybrid from "./components/pages/EggHybrid";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={AboutHumus} />
        <Route path="/Vegetables" component={Vegetables} />
        <Route path="/Fruits" component={Fruits} />
        <Route path="/FAQ" component={FAQ} />
        <Route path="/PrivacyPolicy" component={PrivacyPolicy} />
        <Route path="/ContactUs" component={ContactUs} />
        <Route path="/OurStores" component={OurStores} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/marketing" component={Marketing} />
        <Route path="/consulting" component={Consulting} />
        <Route path="/EggMilk" component={EggMilk} />
        <Route path="/EggNati" component={EggNati} />
        <Route path="/EggHybrid" component={EggHybrid} />
      </Switch>
    </Router>
  );
}

export default App;
