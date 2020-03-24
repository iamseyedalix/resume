import React from "react";
import Fullpage from "../components/Fullpage";
import data from "../data.json";
import "./AboutSection.css";
import Data from "../data.json";
import DownIcon from "../components/DownIcon";
import { Link, Element } from "react-scroll";

const AboutSection = (props, context) => {
  var BgColor = props.BGColor;
  var textColor = props.textColor;
  return (
    <div
      id="About"
      style={{
        backgroundColor: BgColor
      }}
    >
      <Fullpage>
        <div className="title1">
          <h1
            style={{
              color: textColor
            }}
          >
            {data.sections[0].title}
          </h1>
        </div>
        <div
          className="AboutContent"
          style={{
            color: textColor
          }}
        >
          <p>{data.sections[0].items[0].content}</p>
        </div>
        <div style={{
          color: textColor,
          marginRight: '15px'
        }}>
          <h1>\ (•◡•) /</h1>
        </div>
      </Fullpage>
      <Link
        activeClass="active"
        className="test1"
        to="test2"
        spy={true}
        smooth={true}
        duration={500}
      >
        <DownIcon color={textColor} classAni="arrowDown" />
      </Link>
      <Element name="test2" className="element"></Element>
    </div>
  );
};

export default AboutSection;
