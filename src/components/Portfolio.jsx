import { useState } from 'react';
import kiloEats1 from '../assets/kiloeats-1.png';
import kiloEats2 from '../assets/kiloeats-2.png';
import kiloEats3 from '../assets/kiloeats-3.png';
import skillBoost2 from '../assets/skill-boost-2.png';
import skillBoost3 from '../assets/skill-boost-3.png';
import skillBoost4 from '../assets/skill-boost-4.png';
import Project_alx_demo from '../assets/Project_alx_demo.mp4';
import arc1 from '../assets/arc-edit-1.png';
import arc2 from '../assets/arc-edit-2.png';
import arc3 from '../assets/arc-edit-3.png';
import cvFile from '../assets/TMN CV.pdf';

const projects = [
  {
    id: 'nurtown',
    title: 'Project Nurtown - Architecture Company',
    description: 'A showcase of architectural buildings made by a construction company.',
    href: 'https://project-nurtown-xqgb.vercel.app/',
    images: [
      { src: arc1, label: 'Home page', width: 1886, height: 1002 },
      { src: arc2, label: 'About and objectives', width: 1884, height: 1002 },
      { src: arc3, label: 'Projects and contact', width: 1887, height: 1000 },
    ],
  },
  {
    id: 'kiloeats',
    title: "KiloEats App (Restaurant's side)",
    description: 'An interactive food delivery app with data visualizations, price displays, and real-time food options.',
    href: 'https://kiloeats-frontend.vercel.app/',
    images: [
      { src: kiloEats1, label: 'Add new food', width: 1887, height: 998 },
      { src: kiloEats2, label: 'Edit your menu', width: 1885, height: 1003 },
      { src: kiloEats3, label: 'Restaurant profile', width: 1908, height: 1003 },
    ],
  },
  {
    id: 'skillboost',
    title: 'SkillBoost Mobile App (UI design)',
    description: 'A modern learning platform with dynamic content loading and a clean skill sharing experience.',
    href: 'https://www.figma.com/design/kTZnZgR3yWSEuBHQVpWjAD/SkillBoost-figma-design?node-id=0-1&t=WXUAQ1D9Ga6B2w1Y-1',
    portrait: true,
    images: [
      { src: skillBoost4, label: 'Creator profile', width: 386, height: 872 },
      { src: skillBoost2, label: 'Learning dashboard', width: 377, height: 841 },
      { src: skillBoost3, label: 'Course overview', width: 393, height: 879 },
    ],
  },
  {
    id: 'polling',
    title: 'Polling/Voting App (Backend)',
    description: "Here's a short demo of my Django-based backend system that supports creating polls, managing questions and choices, and securely recording user votes.",
    href: 'https://github.com/Tselot8/alx-project-nexus.git',
    video: Project_alx_demo,
    linkText: 'View Github Repo',
  },
];

function ProjectContactSheet({ project }) {
  const [selected, setSelected] = useState(0);
  const image = project.images[selected];
  const previewId = `project-preview-${project.id}`;

  return (
    <>
      <div className="signal-project-preview" id={previewId}>
        <img src={image.src} alt={`${project.title}: ${image.label}`} width={image.width} height={image.height} loading="lazy" decoding="async" />
      </div>
      <div className="signal-project-thumbs" role="group" aria-label={`${project.title} screenshots`}>
        {project.images.map((thumbnail, index) => (
          <button
            key={thumbnail.src}
            type="button"
            className="signal-project-thumb"
            aria-label={`Show ${thumbnail.label.toLowerCase()} for ${project.title}, screenshot ${index + 1} of ${project.images.length}`}
            aria-pressed={selected === index}
            aria-controls={previewId}
            onClick={() => setSelected(index)}
          >
            <img src={thumbnail.src} alt="" width={thumbnail.width} height={thumbnail.height} loading="lazy" decoding="async" />
            <span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
          </button>
        ))}
      </div>
      <p className="signal-preview-caption" aria-live="polite" aria-atomic="true">
        <span className="visually-hidden">Preview </span>
        <span className="signal-preview-count">{String(selected + 1).padStart(2, '0')} / {String(project.images.length).padStart(2, '0')}</span>
        <span>{image.label}</span>
      </p>
    </>
  );
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="signal-portfolio">
      <div className="container">
        <div className="signal-section-heading">
          <span className="signal-section-index" aria-hidden="true">04 / WORK</span>
          <span className="signal-rule" aria-hidden="true" />
          <h2 className="signal-section-title">Portfolio</h2>
        </div>
        <p className="signal-portfolio-intro">Open the following projects with a PC for a better experience.</p>

        <div className="signal-project-list">
          {projects.map((project, index) => (
            <article className="signal-project" key={project.id} aria-labelledby={`portfolio-${project.id}`}>
              <header className="signal-project-heading">
                <span className="signal-project-number" aria-hidden="true">{String(index + 1).padStart(2, '0')} /</span>
                <h3 id={`portfolio-${project.id}`}>{project.title}</h3>
              </header>

              <div className={`signal-project-media${project.portrait ? ' signal-project-media--phone' : ''}`}>
                {project.video ? (
                  <video
                    src={project.video}
                    controls
                    preload="none"
                    playsInline
                    className="signal-project-video"
                    aria-label="Polling/Voting App (Backend) demo"
                  />
                ) : (
                  <ProjectContactSheet project={project} />
                )}
              </div>

              <div className="signal-project-description">
                <p>{project.description}</p>
                <a href={project.href} className="signal-project-link">
                  {project.linkText || 'View Project'} <span aria-hidden="true">&#8599;</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="signal-portfolio-cv">
          <span className="signal-cv-label" aria-hidden="true">CV / PDF</span>
          <span className="signal-rule" aria-hidden="true" />
          <a href={cvFile} download="Tselot-Million-Negussie-CV.pdf" className="signal-download">
            Download CV <span aria-hidden="true">&#8595;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
