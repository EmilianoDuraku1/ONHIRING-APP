import React from "react";
import "./About.scss";
import Botom from "../../../images/botom.png";
function About() {
  return (
    <section className="about">
      <div className="about-wrap">
        <h2>Loreem Ipsum dolor sin ahmet</h2>
        <button className="btn-color">Lorem ipsum</button>
        <img alt="" src={Botom}></img>
      </div>
    </section>
  );
}

export default About;
