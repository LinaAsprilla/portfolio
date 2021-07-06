import React from "react";
import Service from "../service/Service";
import Banner from "./components/banner/Banner";
import NavBar from "./components/navBar/NavBar";
import Portfolio from "../portfolio/Portfolio";
import Skill from "../skill/Skill";
import Contact from "../contact/Contact";


export default function Home(props) {
  return (
    <>
      {/** NAVBAR */}
      <NavBar />
      {/**BANNER */}
      <Banner scroll={props.scroll} />
      {/**SERVICE */}
      <Service />
      {/** PORTFOLIO */}
      <Portfolio />
      {/** SKILL */}
      <Skill/>
      {/**CONTACT */}
      <Contact/>
    </>
  );
}
