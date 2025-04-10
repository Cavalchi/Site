import React from 'react';

import dataScienceImg from '../Icons/data-science.png';
import dataAnalysisImg from '../Icons/data-analysis.png';
import kpiImg from '../Icons/kpi.png';
import f1Img from '../Icons/f1.png';
import decisionImg from '../Icons/decision.png';
import modelingImg from '../Icons/modeling.png';
import strategyImg from '../Icons/strategy.png';

export default function About() {
  const skills = [
    { nome: 'Data Science', img: dataScienceImg },
    { nome: 'Data Analysis', img: dataAnalysisImg },
    { nome: 'KPIs & Metrics', img: kpiImg },
    { nome: 'Automotive Industry', img: f1Img },
    { nome: 'Data-Driven Decision Making', img: decisionImg },
    { nome: 'Data Modeling', img: modelingImg },
    { nome: 'Performance & Strategy', img: strategyImg }
  ];

  return (
    <section className="About">
      <h3>Skills</h3>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li key={index} className="skill-item">
            <span>{skill.nome}</span>
            <img src={skill.img} alt={skill.nome} />
          </li>
        ))}
      </ul>
    </section>
  );
}
