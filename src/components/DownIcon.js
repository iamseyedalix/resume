import React, { Component } from "react";
import UseAnimations from 'react-useanimations';

export default class Downicon extends Component {
  state = {
    cursor: 'default'
  }
  changeMouseIcon = () => {
    this.setState({
      cursor: 'pointer'
    })
  }
  render() {
    var color = this.props.color;
    var classAni = this.props.classAni
    return (
      <div onClick={this.props.onClick}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "-50px",
            transform: "translateY(-45px)",
            colorAdjust: "white",
            marginLeft: "48vw",
            marginRight: "48vw",
            cursor: this.state.cursor

          }}
          onMouseOver= {() => {
            this.changeMouseIcon()
          }}
        >
          
          
          <UseAnimations animationKey={classAni} size={40}  style={{color: color}}/>
        </div>
        
      </div>
    );
  }
}
