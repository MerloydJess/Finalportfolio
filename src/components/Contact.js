import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thanks! Message sent 🚀');
  };

  return (
    <section
      id="contact"
      className="bg-[#1e293b] text-white py-20 px-6"
    >
      <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-12">
        Contact <span className="text-cyan-400">Me</span>
      </h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto grid gap-6 bg-[#0f172a] p-8 rounded-lg shadow-lg"
      >
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          required
          className="bg-gray-700 text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
          value={form.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          required
          className="bg-gray-700 text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
          value={form.email}
          onChange={handleChange}
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          required
          className="bg-gray-700 text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400 resize-none"
          value={form.message}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="bg-cyan-500 hover:bg-cyan-600 transition text-white py-3 rounded-md font-semibold"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
