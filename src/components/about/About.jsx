import React from 'react';
import Illustration from './Illustration';
import InformationAboutMe from './InformationAboutMe';
import './styles/about.css';

function About() {
  return (
    <section className="about">
      <Illustration />
      <InformationAboutMe />
    </section>
  )
};

export default About;