import React, { Component } from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";

const FlippyStyle = {
  width: "200px",
  height: "300px",
  textAlign: "center",
  color: "#FFF",
  fontFamily: "sans-serif",
  fontSize: "30px",
  justifyContent: "center"
};

export default class DefaultCardContents extends Component {
  render() {
    const { children } = this.props;
    var skillColor = this.props.skillColor;
    var textSkillColor = this.props.textSkillColor;
    return (
      <React.Fragment>
        <FrontSide
          style={{
            backgroundColor: "white",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            
          }}
        >
          <img
            src={this.props.image}
            style={{
              maxWidth: "100%",
              maxHeight: "100%"
            }}
          />
          <div style={{
            color: textSkillColor
          }}>{this.props.title}</div>
        </FrontSide>
        <BackSide
          style={{
            backgroundColor: skillColor,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column"
          }}
        >
          {this.props.text}
        </BackSide>
      </React.Fragment>
    );
  }
}
