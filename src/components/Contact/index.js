import React from "react";
import Icon from "../../icons/Icon";
import "./contact.css";

function Contact() {
  return (
    <div className="contact" id="contact">
      <h1>Contato</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        nisi facere amet ipsam atque at earum maxime corporis debitis
        recusandae? Aliquam voluptatum voluptatem non nulla veniam odit aut in
        consectetur.
      </p>
      <div className="links">
        <a
          href="https://github.com/ronald-assis"
          target="_blank"
          rel="noreferrer"
        >
          <Icon name="github" />
          <span>ronald-assis</span>
        </a>
        <a href="mailto:webmaster@example.com" target="_blank" rel="noreferrer">
          <Icon name="email" />
          <span>ronaldaassis71@gmail.com</span>
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
  );
}

export default Contact;
