import React, { Component } from 'react';
import { Icon } from '@iconify/react';
import Header from '../components/Header';
import ListProjects from './ListProjects';

import '../styles/pages/projects.scss';

export default class Projects extends Component {
  render() {
    return (
      <div className="dark-background">
        <div className="header-social-media">
          <Header />
          <section className="header-social-media-section">
            <a href="https://www.linkedin.com/in/paulo-ricardo-575700191/" target="_blank" rel="noopener noreferrer">
              <Icon icon="akar-icons:linkedin-fill" />
            </a>
            <a href="https://github.com/Paul-Ric/" target="_blank" rel="noopener noreferrer">
              <Icon icon="bi:github" />
            </a>
            <a href="https://www.instagram.com/pauloriccardo._/" target="_blank" rel="noopener noreferrer">
              <Icon icon="bi:instagram" />
            </a>

            <a href="mailto:pauloricardo1060@gmail.com" target="_blank" rel="noopener noreferrer">
              <Icon icon="ant-design:mail-outlined" />
            </a>
          </section>
        </div>

        <div className="project">

          <section className='project-thumbnail-section'>
            <ListProjects />
          </section>

        </div>
      </div>
    )
  }
}
