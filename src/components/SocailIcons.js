import React, { Component } from "react";
import { SocialIcon } from "react-social-icons";
import data from "../data.json";
import UseAnimations from "react-useanimations";
// export default class SocialIcons extends Component {

//   render() {
//     var BgColor = props.BGColor;
//     var textColor = props.textColor;
//     return (
//       <div>
//         <div className="icons">
//           {Object.keys(data.links).map(key => {
//             return (
//               <div className="icon">
//                 <SocialIcon url={data.links[key]} bgColor="#42b9f5" />
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     );
//   }
// }

const SocialIcons = props => {
  var textColor = props.textColor;

  return (
    <div>
      <div className="icons">
        <div
          className="icon"
          style={{
            marginTop: "10px"
          }}
        >
          <a href={data.links.github} target="_blank">
            <UseAnimations
              animationKey="github"
              size={40}
              style={{ color: textColor }}
            />
          </a>
        </div>
        <div className="icon">
          <a href={data.links.linkedin} target="_blank">
            <UseAnimations
              animationKey="linkedin"
              size={50}
              style={{ color: textColor }}
            />
          </a>
        </div>
        <div className="icon">
          <a href={data.links.twitter} target="_blank">
            <UseAnimations
              animationKey="twitter"
              size={50}
              style={{ color: textColor }}
            />
          </a>
        </div>
        <div className="icon" target="_blank">
          <a href={data.links.instagram}>
            <UseAnimations
              animationKey="instagram"
              size={50}
              style={{ color: textColor }}
            />
          </a>
        </div>
      </div>
    </div>
  );
};
export default SocialIcons;
