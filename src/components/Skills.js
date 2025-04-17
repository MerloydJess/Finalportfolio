import React from 'react';

const Skills = () => {
  const codingSkills = [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 85 },
    { name: 'JavaScript', level: 75 },
    { name: 'React', level: 80 },
    { name: 'Tailwind CSS', level: 85 },
  ];

  const professionalSkills = [
    { name: 'Web Design', level: 90 },
    { name: 'Problem Solving', level: 80 },
    { name: 'Communication', level: 85 },
    { name: 'Time Management', level: 75 },
    { name: 'Team Collaboration', level: 80 },
  ];

  const renderBars = (skills) =>
    skills.map((skill, i) => (
      <div key={i} className="mb-5">
        <div className="flex justify-between mb-1">
          <span className="text-gray-300">{skill.name}</span>
          <span className="text-cyan-400 font-medium">{skill.level}%</span>
        </div>
        <div className="w-full bg-gray-700 h-3 rounded">
          <div
            className="bg-cyan-400 h-3 rounded"
            style={{ width: `${skill.level}%` }}
          ></div>
        </div>
      </div>
    ));

  return (
    <section id="skills" className="bg-[#0f172a] text-white py-20 px-6">
      <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-16">
        My <span className="text-cyan-400">Skills</span>
      </h2>
      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <div>
          <h3 className="text-2xl font-bold mb-6 text-cyan-300">Coding Skills</h3>
          {renderBars(codingSkills)}
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-6 text-cyan-300">Professional Skills</h3>
          {renderBars(professionalSkills)}
        </div>
      </div>
    </section>
  );
};

export default Skills;
