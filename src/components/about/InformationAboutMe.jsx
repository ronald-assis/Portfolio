import React from 'react';
import GitHub from '../images/github.svg'
import './styles/informationAboutMe.css';

function InformationAboutMe() {
  return (
    <div className="infoAbouMe">
      <div className="titles">
        <h1>Ronald Assis</h1>
        <h2>Desenvolvedor Web</h2>
      </div>
      <div className="paragraph">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem voluptates quasi, corrupti porro tenetur, unde delectus laboriosam odit labore aliquam laudantium veniam inventore asperiores non dicta aut suscipit cumque. Eligendi!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint veritatis voluptatem sed odit repellat fugit id explicabo nobis tempore minima natus, debitis itaque repellendus, qui quasi officiis quidem delectus quod.
        </p>
      </div>
      <div className="link-to-gitHub">
        <img src={GitHub} alt="gitHub img" />
        <a href="https://github.com/ronald-assis" target="_blank" rel="noreferrer">ronald-assis</a>
      </div>
    </div>
  );
};

export default InformationAboutMe;
