import React, { Component } from "react";
import "./App.css";
import TitleAndIcons from "./sections/TitleAndicons";
import AboutSection from "./sections/AboutSection";
import SkillSection from "./sections/SkillSection";
import Navigation from "./sections/navigation";

class App extends Component {
  render() {
    const themes = [
      {
        //1
        name: "blue",
        firstTime: true,
        colorPrimary: "#4ea9da",
        textPrimary: "white",
        navAlpha: "rgba(250, 250, 250, 0.75)",
        skillColor: "#275770",
        textSkillColor: "#4ea9da"
      },
      {
        //2
        name: "cyan",
        firstTime: true,
        colorPrimary: "#3dc0b0",
        textPrimary: "white",
        navAlpha: "rgba(250, 250, 250, 0.75)",
        skillColor: "#206159",
        textSkillColor: "#3dc0b0"
      },
      {
        //3
        name: "blue-alt",
        colorPrimary: "#FAFAFA",
        textPrimary: "#42b9f5",
        navAlpha: "rgba(78, 169, 218, 0.75)",
        skillColor: "#42b9f5",
        textSkillColor: "#42b9f5"
      },
      {
        //4
        name: "green", //
        colorPrimary: "#5BA150",
        textPrimary: "white",
        navAlpha: "rgba(250, 250, 250, 0.75)",
        skillColor: "#3a6133",
        textSkillColor: "#5BA150"
      },
      {
        //5
        name: "brown",
        colorPrimary: "#A26836",
        textPrimary: "white",
        navAlpha: "rgba(250, 250, 250, 0.75)",
        skillColor: "#614023",
        textSkillColor: "#A26836"
      },
      {
        //6
        name: "orange",
        colorPrimary: "#e17421",
        textPrimary: "white",
        navAlpha: "rgba(250, 250, 250, 0.75)",
        skillColor: "#964b18",
        textSkillColor: "#e17421"
      },
      {
        //7
        name: "crimson-red",
        colorPrimary: "#e64f52",
        textPrimary: "white",
        navAlpha: "rgba(250, 250, 250, 0.75)",
        skillColor: "#a3393b",
        textSkillColor: "#e64f52"
      },
      {
        //8
        name: "red",
        colorPrimary: "#af3d4e",
        textPrimary: "white",
        navAlpha: "rgba(250, 250, 250, 0.75)",
        skillColor: "#541e26",
        textSkillColor: "#af3d4e"
      },
      {
        //9
        name: "red-alt", //
        colorPrimary: "#FFFFFF",
        textPrimary: "red",
        navAlpha: "rgba(137, 48, 61, 0.75)",
        skillColor: "red",
        textSkillColor: "red"
      },
      {
        //10
        name: "grey-alt",
        colorPrimary: "#FFFFFF",
        textPrimary: "gray",
        navAlpha: "rgba(72, 85, 100, 0.75)",
        skillColor: "gray",
        textSkillColor: "gray"
      },
      {
        //11
        name: "material-cyan",
        colorPrimary: "#00BCD4",
        textPrimary: "#212121",
        navAlpha: "rgba(255, 255, 255, 0.75)",
        skillColor: "#007a8a",
        textSkillColor: "#00BCD4"
      },
      {
        //12
        name: "material-brown",
        colorPrimary: "#845c4e",
        textPrimary: "white",
        navAlpha: "rgba(255, 255, 255, 0.75)",
        skillColor: "#452f29",
        textSkillColor: "#845c4e"
      },
      {
        //13
        name: "material-grey",
        firstTime: true,
        colorPrimary: "#607D8B",
        textPrimary: "white",
        navAlpha: "rgba(255, 255, 255, 0.75)",
        skillColor: "#33424a",
        textSkillColor: "#607D8B"
      },
      {
        //14
        name: "material-grey-alt",
        colorPrimary: "gray",
        textPrimary: "#FAFAFA",
        navAlpha: "rgba(69, 90, 100, 0.75)",
        textSkillColor: "gray",
        skillColor: "#404040"
      }
    ];

    var i = 1;
    return (

      <div className="Container">
        {
          ((i = Math.floor(Math.random() * themes.length)),
          console.log(themes[i].name))
        }

        <Navigation
          BGColor={themes[i].colorPrimary}
          textColor={themes[i].textPrimary}
        />
        <TitleAndIcons
          BGColor={themes[i].colorPrimary}
          textColor={themes[i].textPrimary}
        />
        <AboutSection
          BGColor={themes[i].colorPrimary}
          textColor={themes[i].textPrimary}
        />
        <SkillSection
          BGColor={themes[i].colorPrimary}
          textColor={themes[i].textPrimary}
          skillColor={themes[i].skillColor}
          textSkillColor={themes[i].textSkillColor}
        />

      </div>
    );
  }
}

export default App;
