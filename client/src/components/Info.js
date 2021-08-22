import React from "react";
import Experience from "./Contact";
import Resume from "./Resume";
import Services from "./Services";
import Skills from "./Skills";

const Info = () => {
  return (
    <section>
      <Services />
      <Skills />
      <Resume />
      <Experience />
    </section>
  );
};

export default Info;
