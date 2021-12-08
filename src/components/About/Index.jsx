import React from 'react';
import Illustration from '../Illustration/Index';
import InformationAboutMe from '../InformationAboutMe/index';
import './about.css';

function About() {
  return (
    <section className="about">
      <Illustration />
      <InformationAboutMe />
    </section>
  )
};

export default About;
