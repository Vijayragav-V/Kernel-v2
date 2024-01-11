import React from "react";
import Introduction from "../components/about/Introduction";
import OurMission from "../components/about/OurMission";
import Potential from "../components/about/Potential";

const About = () => {
  return (
    <div className="mt-16">
      <>
        <Introduction />
        <OurMission />
        <Potential />
      </>
    </div>
  );
};

export default About;
