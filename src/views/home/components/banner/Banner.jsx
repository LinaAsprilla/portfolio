import React from "react";
import banner from "../../images/background.png";
import { withNamespaces } from "react-i18next";
import "./banner.css";
import './responsive.css'
import Language from "../../../../context/Language";
import CV from "../../../../documents/Hoja de vida.pdf";
import Woman from "./images/woman.png";
import Shadow from "./images/shadow.png";
import Html from "./images/html.png";
import Js from "./images/js.png";
import Css from "./images/css.png";
import Search from "./images/search.png";
import Code from "./images/code.png";
import Reveal from "react-reveal/Reveal";

function Banner({ t }) {
  return (
    <section className="banner" id={"home"}>
      <div className="home_bubble">
        <div className="bubble b_one"></div>
        <div className="bubble b_two"></div>
        <div className="bubble b_three"></div>
        <div className="bubble b_four"></div>
        <div className="bubble b_five"></div>
        <div className="bubble b_six"></div>
      </div>
      <Reveal effect="fadeInRight" duration={500}>
        <img className="banner-img" src={banner} alt="banner" />
      </Reveal>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            {" "}
            <Language.Consumer>
              {(english) => (
                <div className="content-info">
                  <Reveal effect="fadeInUp" duration={500}>
                    {!english ? (
                      <h2>
                        {t("¡Hola!")}
                        <br />
                        {t("Soy")} Lina Asprilla <span>{t("Freelancer ")}</span>
                        {t("Independiente")}
                      </h2>
                    ) : (
                      <h2>
                        {t("¡Hola!")}
                        <br />
                        {t("Soy")} Lina Asprilla {t("Independiente")}
                        <span> {t("Freelancer")}</span>
                      </h2>
                    )}{" "}
                  </Reveal>
                  <Reveal effect="fadeInUp" duration={700}>
                  <h4>
                    <span>{t("Yo puedo crear tu página web")}</span>
                  </h4>
                  </Reveal>
                  <Reveal effect="fadeInUp" duration={900}>
                  <a className="btn-cv" href={CV} target="blank">
                    {" "}
                    {t("Descargar hv")}{" "}
                  </a>
                  </Reveal>
                </div>
              )}
            </Language.Consumer>
          </div>
          <div className="col-lg-6">
            <div className="freelancer-img">
              <Reveal effect="fadeInLeft" duration={1400}>
                <img src={Woman} className="figure woman" alt="" />
              </Reveal>
              <Reveal effect="fadeInDown" duration={2000}>
                <img src={Shadow} className="figure o-shadow" alt="" />
              </Reveal>
              <Reveal effect="fadeInDown" duration={1600}>
              <div className="f_html  ">
                <img src={Html} alt="" />
              </div>
              </Reveal>
              <div className="f_js  ">
                <img src={Js} alt="" />
              </div>
              <div className="f_css  ">
                <img src={Css} alt="" />
              </div>
              <div className="f_s  ">
                <img src={Search} alt="" />
              </div>
              <div className="f_code  ">
                <img src={Code} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default withNamespaces()(Banner);
