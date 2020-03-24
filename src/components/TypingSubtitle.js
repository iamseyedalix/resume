import React, { Component } from "react";
import Typing from "react-typing-animation";

class TypingSubtitle extends Component {
  render() {
    return (
      <div>
        <Typing>
          <div>
            Ful Stack Dev
            <Typing.Delay ms={2000} />
            | Open-Source Enthusiast
          </div>
        </Typing>
      </div>
      
    );
  }
}

export default TypingSubtitle
