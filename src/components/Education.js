import React from 'react';

const Education = () => {
  const education = [
    {
      level: 'Elementary School',
      school: 'Paoad Elementary School',
      years: '2006 - 2012',
      description: 'Where it all began! I learned how to count, read, and survive recess.',
    },
    {
      level: 'High School',
      school: 'Tublay School of Home Industries',
      years: '2013 - 2019',
      description: 'Started exploring coding clubs and built my first java calculator.',
    },
    {
      level: 'College',
      school: 'University of the Cordilleras',
      years: '2019 - 2025',
      description: 'Bachelor of Science in Information Technology Major in Web Technology.',
    },
  ];

  return (
    <section
      id="education"
      className="bg-[#0f172a] text-white py-20 px-6"
    >
      <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-16">
        My <span className="text-cyan-400">Journey</span>
      </h2>

      <div className="max-w-4xl mx-auto space-y-10 relative border-l-4 border-cyan-400 pl-8">
        {education.map((edu, index) => (
          <div key={index} className="relative">
            <div className="absolute -left-4 top-2 w-4 h-4 bg-cyan-400 rounded-full"></div>
            <div className="bg-[#1e293b] p-6 rounded-lg shadow-md transition hover:shadow-xl">
              <h3 className="text-xl font-semibold text-cyan-300">{edu.level}</h3>
              <p className="text-sm text-gray-400 italic">{edu.school} &mdash; {edu.years}</p>
              <p className="mt-2 text-gray-300">{edu.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
