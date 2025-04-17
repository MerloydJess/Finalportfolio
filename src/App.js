import React from 'react';
import './index.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-[#0f172a] min-h-screen text-white font-sans scroll-smooth">
      <Navbar />

      <header className="text-center py-20 bg-gradient-to-r from-blue-800 via-blue-600 to-cyan-500 text-white shadow-md">
        <h1 className="text-5xl font-extrabold tracking-wide drop-shadow">
          Welcome to <span className="text-cyan-300">My Portfolio</span>
        </h1>
        <p className="mt-4 text-lg text-gray-200 font-medium">
          Explore my whole experience in a single website ✨
        </p>
        <a
          href="#contact"
          className="inline-block mt-6 px-6 py-3 border-2 border-white rounded-md hover:bg-white hover:text-black transition duration-300 font-semibold"
        >
          Hire Me
        </a>
      </header>

      <main className="max-w-6xl mx-auto px-6 space-y-24 py-16">
        <section id="about"><AboutMe /></section>
        <section id="education"><Education /></section>
        <section id="experience"><Experience /></section>
        <section id="skills"><Skills /></section>
        <section id="contact"><Contact /></section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
