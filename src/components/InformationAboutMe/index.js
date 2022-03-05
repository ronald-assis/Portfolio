import React from "react";
import Icon from "../../icons/Icon";
import "./informationAboutMe.css";

function InformationAboutMe() {
  return (
    <div className="info-about-me">
      <div className="titles">
        <h1>Ronald Assis</h1>
        <h2>Desenvolvedor Web</h2>
      </div>
      <div className="paragraph">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem
          voluptates quasi, corrupti porro tenetudr, unde delectus laboriosam
          odit labore aliquam laudantium veniam inventore asperiores non dicta
          aut suscipit cumque. Eligendi! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Sint veritatis voluptatem sed odit repellat fugit id
          explicabo nobis tempore minima natus, debitis itaque repellendus, qui
          quasi officiis quidem delectus quod.
        </p>
      </div>
      <div className="link-to-github">
        <a
          href="https://github.com/ronald-assis/Portfolio"
          target="_blank"
          rel="noreferrer"
        >
          <Icon name="github" />
          <span>potifolio</span>
        </a>
      </div>
    </div>
  );
}

export default InformationAboutMe;
