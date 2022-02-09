import React from "react";
import code from "./code";
import email from "./email";
import github from "./github";
import person from "./person";
import linkedin from "./linkedin";

const Icons = {
  code,
  email,
  github,
  person,
  linkedin,
};

function Icon({ name, ...props }) {
  const IconsComponents = Icons[name];

  return <IconsComponents {...props} />;
}

export default Icon;
