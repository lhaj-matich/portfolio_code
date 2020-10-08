import React from "react";

const Button = ({ config, link, cta }) => {
  return (
    <div className="btn">
      <a href={`${link}`} className={`btn__${config}`}>
        {cta}
      </a>
    </div>
  );
};

export default Button;
