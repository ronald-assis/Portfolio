import React from "react";
import Icon from "../../icons/Icon";

import "./contact.css";

function Contact() {
  return (
    <div id="contact">
      <h1>Contato</h1>
      <div className="contact-information">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae,
          aliquam fugiat fuga hic vitae soluta culpa? Hic maiores cum sapiente
          non? Doloribus, a. Nemo suscipit non nihil. Voluptatibus, sunt eaque.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
          veritatis aut cum, reprehenderit laborum reiciendis ut maxime itaque
          optio fugit, amet iste voluptatibus eos? Commodi enim ducimus earum
          blanditiis est?
        </p>
        <div className="contact-link">
          <a
            href="https://github.com/ronald-assis"
            target="_blank"
            rel="noreferrer"
          >
            <Icon name="github" />
            <span>ronald-assis</span>
          </a>
          <a href="mailto:ronaldassis71@gmail.com?subject=Questions" title="">
            <Icon name="email" />
            <span>ronaldassis71@gmail.com</span>
          </a>
          <a
            href="https://www.linkedin.com/in/ronald-assis/"
            target="_blank"
            rel="noreferrer"
          >
            <Icon name="linkedin" />
            <span>Ronald Assis</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
