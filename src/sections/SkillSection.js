import React, { Component } from "react";
import data from "../data.json";
import "./SkillSection.css";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import DefaultCardContents from "../components/DefaultCardContents";
import Fullpage from "../components/Fullpage";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";
import DownIcon from "../components/DownIcon";
{
  /*my export class*/
}

const SkillSection = props => {
  var BgColor = props.BGColor;
  var textColor = props.textColor;
  var skillColor = props.skillColor;
  var textSkillColor = props.textSkillColor;

  const FlippyStyle = {
    width: "200px",
    height: "300px",
    textAlign: "center",
    color: "#FFF",
    fontFamily: "sans-serif",
    fontSize: "30px",
    justifyContent: "center"
  };

  const FlippyOnHoverReact = ({ flipDirection = "vertical" }) => (
    <Flippy
      flipOnHover={true}
      flipDirection={flipDirection}
      style={FlippyStyle}
    >
      <DefaultCardContents
        image={data.sections[1].items[0].content.image}
        text="I can create a site with React"
        title="React"
        skillColor={skillColor}
        textSkillColor={textSkillColor}
      ></DefaultCardContents>
    </Flippy>
  );

  const FlippyOnHoverPython = ({ flipDirection = "horizontal" }) => (
    <Flippy
      flipOnHover={true}
      flipDirection={flipDirection}
      style={FlippyStyle}
    >
      <DefaultCardContents
        image={data.sections[1].items[1].content.image}
        text="I can make a server with Python"
        title="Python"
        skillColor={skillColor}
        textSkillColor={textSkillColor}
      ></DefaultCardContents>
    </Flippy>
  );

  const FlippyOnHoverAndroid = ({ flipDirection = "vertical" }) => (
    <Flippy
      flipOnHover={true}
      flipDirection={flipDirection}
      style={FlippyStyle}
    >
      <DefaultCardContents
        image={data.sections[1].items[2].content.image}
        text="I can create a program with Android"
        title="Android"
        skillColor={skillColor}
        textSkillColor={textSkillColor}
      ></DefaultCardContents>
    </Flippy>
  );

  return (
    <div
      id="Skill"
      style={{
        backgroundColor: BgColor
      }}
    >
      <Fullpage>
        <div>
          <h1
            style={{
              color: textColor,
              textAlign: "center"
            }}
          >
            {data.sections[1].title}
          </h1>
          <div className="containerbox">
            <FlippyOnHoverReact />
            <FlippyOnHoverPython />
            <FlippyOnHoverAndroid />
          </div>
        </div>
      </Fullpage>
    </div>
  );
};

export default SkillSection;
