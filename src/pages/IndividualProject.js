import React from 'react';
import { Icon } from '@iconify/react';
import '../styles/pages/projects.scss'
import { Tooltip as ReactTooltip } from 'react-tooltip';

export default function IndividualProject(project) {
  const { name, img, linkGitHub } = project.project;

  return (
    <div className='project-individual-thumbnail'>
      <img className='project-img-individual' src={img} />
      <p>{name}</p>
      <div className="project-video-icons">
        <a data-tip='GitHub' href={linkGitHub} target="_blank" rel="noopener noreferrer" className="project-btns">
          <Icon icon="uim:github-alt" className="project-video-icons-i" />
        </a>
        <ReactTooltip place="right" className='custom-tooltip' delayHide={300} effect='solid' />
      </div>
    </div>
  )
}
