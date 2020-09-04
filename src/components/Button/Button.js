import React from "react";
import { Link } from "gatsby";
import "./Button.css";

const Button = props => {
  const { buttonText } = props;
  return (
    <Link to="/contactus" className="button d-flex align-items-center">
      {buttonText}
      <span />
      <span />
      <span />
      <span />
    </Link>
  );
};

export default Button;
