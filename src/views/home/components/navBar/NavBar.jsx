import React, { useState } from "react";
import logo from "../../../../images/logo.png";
import "./NavBar.css";
import "./responsive.css";
import { withNamespaces } from "react-i18next";
import Scroll from "../../../../context/Scroll";
import StateNav from "../../../../context/StateNav";

function NavBar({ t }) {
  const [expanded, setExpanded] = useState("");

  const name = () => {
    var button = document.getElementById("btn-menu");
    var collapse = button.getAttribute("aria-expanded");
    if (collapse === "true") {
      setExpanded("no-toggler");
    }
    if (collapse === "false") {
      setExpanded("toggler");
    }
  };

  const service = () => {
    var el = document.getElementById("service");
    el.scrollIntoView();
  };

  const home = () => {
    var el = document.getElementById("home");
    el.scrollIntoView();
  };

  const portfolio = () => {
    var el = document.getElementById("portfolio");
    el.scrollIntoView();
  };

  const skill = () => {
    var el = document.getElementById("skill");
    el.scrollIntoView();
  };

  const contact = () => {
    var el = document.getElementById("contact");
    el.scrollIntoView();
  };

  return (
    <>
      <StateNav.Consumer>
        {(stateNav) => (
          <Scroll.Consumer>
            {(scroll) => (
              <nav
                className={`navbar navbar-expand-lg navbar-light ${
                  scroll ? "menu-two" : ""
                }`}
              >
                <div className={`container ${expanded}`}>
                  <a className="navbar-brand logo-a" href="##">
                    <img src={logo} alt="" width="60" height="60" />
                  </a>
                  <button
                    id="btn-menu"
                    className="navbar-toggler d-lg-none"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapsibleNavId"
                    aria-controls="collapsibleNavId"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    onClick={name}
                  >
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                  <div
                    className="collapse navbar-collapse"
                    id="collapsibleNavId"
                  >
                    <ul className="navbar-nav m-auto">
                      <li className="nav-item">
                        <a
                          onClick={home}
                          className={`nav-link ${
                            stateNav === "home" ? "active" : ""
                          } ${scroll ? "menu-two-link" : ""}`}
                          href="##"
                        >
                          {t("INICIO")}
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className={`nav-link ${stateNav === "service" ? "active" : ""} ${
                            scroll ? "menu-two-link" : ""
                          }`}
                          href="##"
                          onClick={service}
                        >
                          {t("SERVICIO")}
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          onClick={portfolio}
                          className={`nav-link ${stateNav === "portfolio" ? "active" : ""} ${
                            scroll ? "menu-two-link" : ""
                          }`}
                          href="##"
                        >
                          {t("PORTAFOLIO")}
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          onClick={skill}
                          className={`nav-link ${stateNav === "skill" ? "active" : ""} ${
                            scroll ? "menu-two-link" : ""
                          }`}
                          href="##"
                        >
                          {t("HABILIDADES")}
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          onClick={contact}
                          className={`nav-link ${stateNav === "contact" ? "active" : ""} ${
                            scroll ? "menu-two-link" : ""
                          }`}
                          href="##"
                        >
                          {t("CONTÁCTO")}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            )}
          </Scroll.Consumer>
        )}
      </StateNav.Consumer>
    </>
  );
}
export default withNamespaces()(NavBar);
