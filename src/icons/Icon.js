import React from "react";
import code from "./code";
import email from "./email";
import github from "./github";
import person from "./person";

const Icons = {
  code,
  email,
  github,
  person,
};

function Icon({ name, ...props }) {
  const IconsComponents = Icons[name];

  return <IconsComponents {...props} />;
}

export default Icon;
