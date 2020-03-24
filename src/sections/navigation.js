import React, { Component } from "react";
import "./navigation.css";
import UseAnimations from "react-useanimations";
class Navigaion extends Component {
  state = {
    cursor: 'default'
  }
  changeMouseIcon = () => {
    this.setState({
      cursor: 'pointer'
    })
  }
  render() {
    var textColor = this.props.textColor;

    return (
      <div className="navbar">
        <div className="NavContainer">
          <div className="changeColorBtn" style={{
            cursor: this.state.cursor
          }}
          onMouseOver= {() => {
            this.changeMouseIcon()
          }}
          >
            <UseAnimations
              animationKey="alertTriangle"
              size={60}
              style={{ color: textColor }}
              onMouseDown={() => {
                window.location.reload(false);
              }}
            />
          </div>
          <div className="ItemsNav">
            <a
              href="#TitleAndIconsPage"
              className="SkillStyle"
              style={{
                color: textColor
              }}
            >
              Home
            </a>
          </div>
          <div className="ItemsNav">
            <a
              href="#About"
              className="SkillStyle"
              style={{
                color: textColor
              }}
            >
              About
            </a>
          </div>
          <div className="ItemsNav">
            <a
              href="#Skill"
              className="SkillStyle"
              style={{
                color: textColor
              }}
            >
              Skills
            </a>
          </div>
        </div>
      </div>
    );
  }
  
  
};

export default Navigaion;
