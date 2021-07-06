/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { withNamespaces } from "react-i18next";
import "./Portfolio.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import LogoSteam from "./images/logo-steam.png";
import LogoProps from "./images/props-logo.jpg";
import LogoSedensa from "./images/sedensa-logo.png";
import SteamWeb from "./images/steam-web.jpg";
import VideoPo from "./images/video-politico.png";

function Portfolio({ t }) {
  const settings = {
    className: "p_item",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="portfolio_slider_area" id={'portfolio'}>
      <div className="container">
        <div className="section_title_two text-center">
          <h6>{t("Mi portafolio")}</h6>
          <h2>{t("Algo de mis últimos trabajos.")}</h2>
        </div>
        <Slider {...settings} className="portfolio-slider">
          <div className="p_item">
            <a
              href="https://youtu.be/ZBOVYv8NV0Q"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={VideoPo} alt="" />
            </a>
            <a
              href="https://youtu.be/ZBOVYv8NV0Q"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>Política Institucional De Género</h4>
            </a>
            <a
              href="https://youtu.be/ZBOVYv8NV0Q"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("Video Publicitario")}
            </a>
          </div>
          <div className="p_item">
            <a rel="noopener noreferrer">
              <img src={LogoSteam} alt="" />
            </a>
            <a target="_blank" rel="noopener noreferrer">
              <h4>Steam Video Maker</h4>
            </a>
            <a target="_blank" rel="noopener noreferrer">
              {t("Diseño de logo")}
            </a>
          </div>
          <div className="p_item">
            <a target="_blank" rel="noopener noreferrer">
              <img src={LogoProps} alt="" />
            </a>
            <a target="_blank" rel="noopener noreferrer">
              <h4>Props Store</h4>
            </a>
            <a target="_blank" rel="noopener noreferrer">
              {t("Diseño de logo")}
            </a>
          </div>
          <div className="p_item">
            <a target="_blank" rel="noopener noreferrer">
              <img src={LogoSedensa} alt="" />
            </a>
            <a target="_blank" rel="noopener noreferrer">
              <h4>Sedensa IPS</h4>
            </a>
            <a target="_blank" rel="noopener noreferrer">
              {t("Diseño de logo")}
            </a>
          </div>
          <div className="p_item">
            <a
              href="https://steamvideomaker.web.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={SteamWeb} alt="" />
            </a>
            <a
              href="https://steamvideomaker.web.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>Steam Video Maker</h4>
            </a>
            <a
              href="https://steamvideomaker.web.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("Plataforma Web")}
            </a>
          </div>
        </Slider>
      </div>
    </section>
  );
}
export default withNamespaces()(Portfolio);
