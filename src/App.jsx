import React, { useState } from "react";
import "./App.css";
import "./responsive.css";
import Home from "./views/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import es_logo from "../src/images/es_language.png";
import en_logo from "../src/images/en_language.png";
import i18n from "../src/i18next/i18next";
import Scroll from "./context/Scroll";
import Language from "./context/Language";
import StateNav from "./context/StateNav";

function App() {
  const [english, setEnglish] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [stateNav, setStateNav] = useState("");

  //SCROLL
  window.onscroll = () => {
    if (window.scrollY >= 100) {
      setScroll(true);
    } else setScroll(false);

    if (window.scrollY < 400) {
      setStateNav("home");
    }
    if (window.scrollY > 850 && window.scrollY < 950) {
      setStateNav("service");
    }
    if (window.scrollY > 1300 && window.scrollY < 2000) {
      setStateNav("portfolio");
    }
    if (window.scrollY > 2100 && window.scrollY < 2800) {
      setStateNav("skill");
    }
    if (window.scrollY > 2900 && window.scrollY < 3069) {
      setStateNav("contact");
    }
  };

  //CAMBIAR EL LENGUAJE
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    if (lng === "es") {
      setEnglish(false);
    } else {
      setEnglish(true);
    }
  };

  return (
    <>
      <StateNav.Provider value={stateNav}>
        <Scroll.Provider value={scroll}>
          <Language.Provider value={english}>
            <Router>
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
              </Switch>
            </Router>
          </Language.Provider>
        </Scroll.Provider>
      </StateNav.Provider>

      <div className={`language ${scroll ? "menu-two-link" : ""}`}>
        {english ? (
          <>
            <span>ES </span>
            <button
              className="btn-language"
              onClick={() => changeLanguage("es")}
            >
              <img className="img_language" src={es_logo} alt="Español" />
            </button>
          </>
        ) : (
          <>
            <span className="">EN </span>
            <button
              className="btn-language"
              onClick={() => changeLanguage("en")}
            >
              <img className="img_language" src={en_logo} alt="English" />
            </button>
          </>
        )}
      </div>
    </>
  );
}

export default App;
