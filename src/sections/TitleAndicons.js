import React, { Component } from "react";
import Fullpage from "../components/Fullpage";
import "./TitleAndIcons.css";
import SnowStorm from "react-snowstorm";
import TypingSubtitle from "../components/TypingSubtitle";
import Data from "../data.json";
import DownIcon from "../components/DownIcon";
import SocailIcons from "../components/SocailIcons";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";

class TitleAndIcons extends Component {
  render() {
    var BgColor = this.props.BGColor;
    var textColor = this.props.textColor;
    return (
      <div
        id="TitleAndIconsPage"
        style={{
          backgroundColor: BgColor
        }}
      >
        <Fullpage>
          <div
            className="subject"
            style={{
              color: textColor
            }}
          >
            <p>{Data.subject}</p>
          </div>
          <div
            className="subtitle"
            style={{
              color: textColor
            }}
          >
            <TypingSubtitle />
          </div>
          <SocailIcons textColor={textColor} />
          <div>
            <SnowStorm
              flakesMax="128"
              excludeMobile="true"
              animationInterval="30"
              flakesMaxActive="128"
              vMaxY="5"
              vMaxX="4"
              snowColor={textColor}
            />
          </div>
        </Fullpage>
        <Link
          activeClass="active"
          className="test1"
          to="test1"
          spy={true}
          smooth={true}
          duration={500}
        >
          <DownIcon color={textColor} classAni="arrowDown" />
        </Link>
        <Element name="test1" className="element"></Element>
      </div>
    );
  }
}

export default TitleAndIcons;
