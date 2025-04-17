import React from 'react';
import profilePic from '../assets/profile.jpg';

const AboutMe = () => {
  return (
    <section
      id="about"
      className="bg-[#0f172a] text-white py-20 px-6 flex flex-col items-center"
    >
      <h2 className="text-4xl sm:text-5xl font-extrabold mb-10 text-white">
        About <span className="text-cyan-400">Me</span>
      </h2>

      <div className="w-40 h-40 sm:w-48 sm:h-48 mb-6 rounded-full border-4 border-cyan-400 overflow-hidden shadow-lg">
        <img
          src={profilePic}
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>

      <h3 className="text-2xl font-semibold text-cyan-300 mb-3">
        Frontend Developer!
      </h3>

      <p className="text-center max-w-3xl text-gray-300 text-lg leading-relaxed mb-8">
      Hi! I'm Merloyd Jess O. Aroco, a passionate and driven web developer currently studying at the University of the Cordilleras. Hailing from the peaceful mountains of Tublay, Benguet, I blend the calmness of the province with the fast-paced creativity of web development. I enjoy crafting clean, interactive, and visually engaging websites, always striving to balance functionality with a touch of fun. Whether I’m solving a tricky bug or designing smooth user experiences, I bring dedication, curiosity, and a bit of funky flair to everything I build.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="#contact"
          className="px-6 py-3 border-2 border-cyan-400 text-cyan-400 rounded-md hover:bg-cyan-400 hover:text-black transition duration-300 text-center"
        >
          Hire Me
        </a>
        <button className="px-6 py-3 border-2 border-cyan-400 text-cyan-400 rounded-md hover:bg-cyan-400 hover:text-black transition duration-300">
          Read More
        </button>
      </div>
    </section>
  );
};

export default AboutMe;
