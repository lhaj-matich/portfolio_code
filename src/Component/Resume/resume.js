import React from "react";
import Button from "../Widgets/Button";

const Resume = () => {
  return (
    <div className="resumeSection" id="Resumee">
      <h1 className="heading__secondary--white">Resumee</h1>
      <p className="text--white">
        You can download my resumee for some extended informations about my
        education and work experience
      </p>
      <Button cta="Download Resumee" link="#" config="primary" />
    </div>
  );
};

export default Resume;
