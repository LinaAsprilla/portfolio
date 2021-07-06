import React, { useState } from "react";
import "./Contact.css";
import "./responsive.css";
import { withNamespaces } from "react-i18next";
import "./flaticon.css";
import Reveal from "react-reveal/Reveal";
import emailjs from "emailjs-com";

function Contact({ t }) {
  const [value, setValue] = useState({
    email: "",
    subject: "",
    phone: "",
    name: "",
    message: "",
  });

  const submit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mg43r4c",
        "template_0rzfya8",
        e.target,
        "user_c2JMu95jFqqwdKmxuOxXU"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Correo enviado exitosamente");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="contact-area contact-area-two" id={"contact"}>
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-12">
            <div className="get_info">
              <div className="section_title_two undefined">
                <h6>{t("Ponerse en contacto")}</h6>
                <h2>{t("Escríbeme o reúnete conmigo")} </h2>
              </div>
              <div className="media get_item">
                <i className="flaticon-phone-call"></i>

                <div className="media-body">
                  <h6>{t("Llamame ahora")} </h6>
                  <p>+573173404905</p>
                </div>
              </div>
              <div className="media get_item">
                <i className="flaticon-chat"></i>
                <div className="media-body">
                  <h6>{t("Contácteme")}</h6>
                  <p>linaasprilla@hotmail.com</p>
                </div>
              </div>
              <div className="media get_item">
                <i className="flaticon-pin"></i>
                <div className="media-body">
                  <h6>{t("Buscame aquí")}</h6>
                  <p>Cali, Colombia</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-md-12">
            <Reveal effect="fadeInRight" duration={800}>
              <div className=" input_form">
                <div className="section_title_two ">
                  <h6>{t("Contácto")}</h6>
                  <h2>{t("Hazme saber lo que quieres")}</h2>
                </div>

                <form className="form-class" onSubmit={submit}>
                  <div className="row">
                    <div className="col-lg-6">
                      <input
                        type="text"
                        id="name"
                        name="user_name"
                        className="form-control"
                        placeholder={t("Tu Nombre*")}
                        defaultValue={value.name}
                        onChange={(e) => (value.name = e.target.value)}
                        required
                      />
                      <div className="invalid-feedback">
                        Please enter a message in the textarea.
                      </div>
                      <p></p>
                    </div>
                    <div className="col-lg-6">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="user_email"
                        placeholder={t("Tu Email*")}
                        defaultValue={value.email}
                        onChange={(e) => (value.email = e.target.value)}
                        required
                      />
                      <div className="invalid-feedback">
                        Please enter a message in the textarea.
                      </div>
                      <p></p>
                    </div>
                    <div className="col-lg-6">
                      <input
                        type="text"
                        id="subject"
                        name="user_subject"
                        className="form-control"
                        placeholder={t("Asunto*")}
                        defaultValue={value.subject}
                        onChange={(e) => (value.subject = e.target.value)}
                        required
                      />
                      <div className="invalid-feedback">
                        Please enter a message in the textarea.
                      </div>
                      <p></p>
                    </div>
                    <div className="col-lg-6">
                      <input
                        type="text"
                        className="form-control"
                        id="phone"
                        name="user_phone"
                        placeholder={t("Teléfono*")}
                        defaultValue={value.phone}
                        onChange={(e) => (value.phone = e.target.value)}
                        required
                      />
                      <div className="invalid-feedback">
                        Please enter a message in the textarea.
                      </div>
                      <p></p>
                    </div>
                  </div>
                  <textarea
                    name="user_message"
                    id="message"
                    className="form-control"
                    rows="6"
                    placeholder={t("Tu Mensaje ...")}
                    defaultValue={value.message}
                    onChange={(e) => (value.message = e.target.value)}
                    required
                  ></textarea>
                  <div className="invalid-feedback">
                    Please enter a message in the textarea.
                  </div>
                  <button type="submit" className="btn send_btn theme_btn">
                    {t("Enviar Mensaje")}
                  </button>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
export default withNamespaces()(Contact);
