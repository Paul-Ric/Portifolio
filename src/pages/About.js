import React, { Component } from 'react';
import ReactGA from 'react-ga';
import { Icon } from '@iconify/react';
import hardSkillsIcons from '../data/hardSkillsIcons';
import image from '../assets/DSC_0711.JPG';

import Header from '../components/Header';
import SocialMedia from '../components/SocialMedia';

import '../styles/pages/about.scss';
import ParticleBackground from '../components/ParticleBackground';


export default class About extends Component {
  componentDidMount() {
    ReactGA.pageview(window.location.pathname);
  }
  render() {
    return (
      <>
        <ParticleBackground />
        <div className="all-about">

          <Header />
          <section className="about">
            <div className="about-header-text-skills" >

              <div className="about-text-skills">
                <section className="about-text">
                  <p className="about-text-p about-text-p-1">Olá, </p>

                  <p className="about-text-p about-text-p-2">sou o <span>Paulo Ricardo</span></p>

                  <p className="about-text-p about-text-p-3">Sou desenvolvedor <span>full-stack</span> e atuo como Desenvolvedor de software na <span>CH Tecnologia</span> !</p>

                  <p className="about-text-p about-text-p-3">Possuo experiência significativa no desenvolvimento de sistemas utilizando tecnologias como   <span>Angular</span> , <span>React</span>,<span>React Native</span>,<span>.NET</span> e <span>NODE</span> . Ao longo da minha carreira, tenho trabalhado em uma variedade de projetos, tanto de grande porte quanto de menor escala.</p>

                  <p className="about-text-p about-text-p-3">Além disso, possuo habilidades no desenvolvimento de sites utilizando o WordPress, estando apto a criar e customizar websites nessa plataforma, caso seja necessário.</p>

                  <p className="about-text-p about-text-p-3">Atualmente, estou cursando o 7º período de Sistemas de Informação na Universidade Una, localizada em Betim. Essa formação acadêmica tem me proporcionado um embasamento sólido em diversas áreas da ciência da computação, me capacitando ainda mais para desenvolver soluções eficientes e inovadoras.</p>

                  <p className="about-text-p about-text-p-6">Espero que goste do meu portfólio!</p>
                </section>
                <div className="about-image">
                  <img className="about-img" src={image} alt="profile" />
                </div>
                <section className="about-skills">
                  <p className="about-skills-p">SKILLS</p>
                  <div className="about-skill">
                    {hardSkillsIcons.map((icon, index) => (
                      <div key={index} className="about-div-icon">
                        <Icon icon={icon.icon} className={icon.className} />
                        <p className='about-icon-text'>{icon.title}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

            </div>

            <SocialMedia />
          </section>

        </div>
      </>
    )
  }
}

