import React from 'react';

export default function Projects() {
  const projetos = [
    { nome: 'Dashboard de Telemetria F1', link: 'https://github.com.com.br' },
    { nome: 'Análise de Pit Stops', link: 'https://github.com.com.br' },
    { nome: 'Comparativo de Desempenho em Pistas', link: 'https://github.com.com.br' },
  ];

  return (
    <section className="projects-section">
      <h2 className="section-title">Projetos</h2>
      <div className="projects-grid">
        {projetos.map((projeto, index) => (
          <a
            key={index}
            href={projeto.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
          >
            <span className="project-title">{projeto.nome}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
