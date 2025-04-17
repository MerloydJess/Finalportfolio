import React from 'react';

const Experience = () => {
  const jobs = [
    {
      role: 'Intern - Junior Web Dev',
      company: 'Benguet Technical School',
      years: '2025',
      description:
        'Assisted in developing small React components, fixed bugs, and improved accessibility features.',
    },
    {
      role: 'Frontend Developer',
      company: 'University of the Cordilleras',
      years: '2024',
      description:
        'Led the redesign of capstone websites, collaborated other students, and built reusable Tailwind css websites.',
    },
    {
      role: 'Freelancer',
      company: 'Remote & Independent',
      years: '2024 - Present',
      description:
        'Worked on portfolio websites, animations, and SPA dashboards. Specialized in micro-interactions and theme toggles.',
    },
  ];

  return (
    <section id="experience" className="bg-[#0f172a] text-white py-20 px-6">
      <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-16">
        My <span className="text-cyan-400">Experience</span>
      </h2>

      <div className="max-w-4xl mx-auto space-y-10 relative border-l-4 border-cyan-400 pl-8">
        {jobs.map((job, index) => (
          <div key={index} className="relative">
            <div className="absolute -left-4 top-2 w-4 h-4 bg-cyan-400 rounded-full"></div>
            <div className="bg-[#1e293b] p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
              <h3 className="text-xl font-semibold text-cyan-300">{job.role}</h3>
              <p className="text-sm text-gray-400 italic">
                {job.company} &mdash; {job.years}
              </p>
              <p className="mt-2 text-gray-300">{job.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
