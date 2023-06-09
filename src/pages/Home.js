import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SocialMedia from '../components/SocialMedia';
import '../styles/pages/home.scss';
import ParticleBackground from '../components/ParticleBackground';

export default function Home() {
  return (
    <>
      <ParticleBackground />
      <div className='all-home'>
        <Header />
        <div className="home">
          <section className="home-section home-text-animation">
            <p className="home-name-1">Paulo</p>
            <p className="home-name-2">Ricardo</p>
            <div className="home-subtitle">
              <p className="home-subtitle-1">Desenvolvedor Full-Stack</p><span>|</span>
              <p className="home-subtitle-2">Desenvolvedor de Aplicativos</p><span>|</span>
              <p className="home-subtitle-3">Desenvolvedor Web</p>
            </div>
          </section>
          <SocialMedia />
        </div>
        <Footer />
      </div>
    </>
  )
}

