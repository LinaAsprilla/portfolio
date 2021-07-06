import React from "react";
import { withNamespaces } from "react-i18next";
import "./Skill.css";
import './responsive.css'
import css from "./images/css-3.svg";
import html from "./images/html-5.svg";
import js from "./images/javascript.svg";
import react from "./images/react-js.png";
import nodejs from "./images/node-js-1174925.png";
import git from "./images/github.svg";
import boots from "./images/bootstrap-5-1.svg";

function Skill({ t }) {
  return (
    <>
      <section className="skill_area_two bg_color" id="skill">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="skill_content_two">
                <div className="section_title_two">
                  <h6>{t("Mis habilidades destacadas")}</h6>
                  <h2>{t("Algunos datos interesantes sobre mí.")}</h2>
                </div>
                <p>
                  {t(
                    "Soy una Programadora talentosa y creativa con experiencia en el diseño y desarrollo web. Me especializo en proyectos grupales o individuales que ayudan a mis clientes a diferenciarse dentro de su mercado competitivo."
                  )}
                </p>
              </div>
            </div>
            <div className="col-lg-6 skill_col">
              <div className="skills">
                <div className="c_items">
                  <img src={css} alt="" width="50" />
                </div>
                <div className="c_items">
                  <img src={html} alt="" width="50" />
                </div>
                <div className="c_items">
                  <img src={js} alt="" width="50" />
                </div>
                <div className="c_items middle">
                  <img src={react} alt="" width="80" />
                </div>
                <div className="c_items">
                  <img src={nodejs} alt="" width="50" />
                </div>
                <div className="c_items">
                  <img src={git} alt=" " width="50" />
                </div>
                <div className="c_items">
                  <img src={boots} alt="" width="50" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default withNamespaces()(Skill);
