import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          // "Data Scientist",
          // "Astroparticle Physicist",
          // "Physics Engineer",
          // "Experimentalist",
          // "Developer",
          "PhD in Astroparticle Physics",
          "Data Scientist",
          "Machine Learning & Statistics",
          "Signal Processing Expert",
          "Turning Data into Insight",
          "Python, SQL, Git, LaTeX",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 75,
      }}
    />
  );
}

export default Type;
