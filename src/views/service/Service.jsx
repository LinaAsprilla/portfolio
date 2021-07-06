import React from "react";
import "./Service.css";
import { withNamespaces } from "react-i18next";
import Design from "./images/uix.svg";
import Mobile from "./images/mobile.svg";
import Web from "./images/web.svg";
import './responsive.css'

function Service({ t }) {
  return (
    <div className="service-area" id="service">
      <div className="container">
        <div className="row align-items-center flex-row-reverse">
          <div className="col-lg-5">
            <div className="service_content">
              <div className="section_title_two">
                <h6>{t("¿A qué me dedico?")}</h6>
                <h2>
                  {t(
                    "Busco soluciones innovadoras para hacer crecer tus proyectos creativos"
                  )}
                </h2>
              </div>
              <p>
                {t(
                  "Soy desarrolladora web. Me especializo en ayudar a las nuevas empresas a hacer crecer sus negocios."
                )}
              </p>
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="uix-tab"
                    data-toggle="tab"
                    href="#uix"
                    role="tab"
                    aria-controls="uix"
                    aria-selected="true"
                  >
                    {t(
                      "Diseño de interfaz de usuario y Experiencia de usuario"
                    )}
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="mobile-tab"
                    data-toggle="tab"
                    href="#mobile"
                    role="tab"
                    aria-controls="mobile"
                    aria-selected="false"
                  >
                    {t("Diseño de aplicaciones móviles")}
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="web-tab"
                    data-toggle="tab"
                    href="#web"
                    role="tab"
                    aria-controls="web"
                    aria-selected="false"
                  >
                    {t("Desarrollo Web")}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="uix"
                role="tabpanel"
                aria-labelledby="uix-tab"
              >
                <div className="service_img">
                  <img src={Design} alt="" width="580" />
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="mobile"
                role="tabpanel"
                aria-labelledby="mobile-tab"
              >
                <div className="service_img">
                  <img src={Mobile} alt="" width="550" />
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="web"
                role="tabpanel"
                aria-labelledby="web-tab"
              >
                <div className="service_img">
                  <img src={Web} alt="" width="530" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default withNamespaces()(Service);
