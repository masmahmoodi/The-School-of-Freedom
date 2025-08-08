import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, Linkedin } from 'lucide-react';

import maleIcon from '../images/male-icon.png';
import femaleIcon from '../images/female-icon.png';

const Team = () => {
  const americanTeam = [
    { name: 'Walid Jailani', role: 'Founder & Executive Director', gender: 'male' },
    { name: 'Moheb Salemi', role: 'Communications Manager', gender: 'male' },
    { name: 'Robina Haqiqi', role: 'Program Coordinator', gender: 'female' },
    { name: 'Jasmine', role: 'Student Mentor', gender: 'female' },
    { name: 'Mariam Saleh', role: 'Academic Coordinator', gender: 'female' },
    { name: 'Hamid', role: 'Technology Specialist', gender: 'male' },
  ];

  const afghanistanTeam = [
    { name: 'Sadia', role: 'Principal (Afghanistan Program)', gender: 'female' },
    { name: 'Amina Quraishi', role: 'Lead Teacher', gender: 'female' },
    { name: 'Shabir Rahmani', role: 'Operations Assistant', gender: 'male' },
    { name: 'Fatima Nazari', role: 'Student Support Coordinator', gender: 'female' },
    { name: 'Zahra Noori', role: 'Mentorship Liaison', gender: 'female' },
    { name: 'Ahmad Wali', role: 'Logistics Coordinator', gender: 'male' },
  ];

  const renderTeam = (team, title) => (
    <div className="mb-20">
      <h2 className="text-3xl font-bold text-center text-navy mb-10">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {team.map((member, index) => (
          <motion.div
            key={index}
            className="card team-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <img
              className="w-32 h-32 rounded-full object-cover mx-auto mb-4 border-4 border-gold"
              alt={`${member.name}, ${member.role}`}
              src={member.gender === 'male' ? maleIcon : femaleIcon}
            />
            <h3 className="text-xl font-semibold text-navy mb-2">{member.name}</h3>
            <p className="text-gold font-medium mb-4">{member.role}</p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Dedicated team member working to empower education and support students.
            </p>
            <div className="flex justify-center space-x-4 mt-6">
              <button className="p-2 bg-navy text-white rounded-full hover:bg-opacity-80 transition-all duration-300">
                <Mail size={16} />
              </button>
              <button className="p-2 bg-navy text-white rounded-full hover:bg-opacity-80 transition-all duration-300">
                <Linkedin size={16} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <Helmet>
        <title>Meet Our Team - The School of Freedom</title>
        <meta
          name="description"
          content="Meet the dedicated team behind The School of Freedom, including founder Walid Jailani and our passionate educators, coordinators, and specialists."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold font-display mb-6">Meet Our Team</h1>
            <p className="text-xl md:text-2xl">
              Dedicated individuals working together to transform lives through education and empowerment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Sections */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Our Passionate Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each member of our team brings unique skills, experiences, and unwavering dedication
              to our mission of providing education and hope to Afghan girls and refugee youth.
            </p>
          </motion.div>

          {renderTeam(americanTeam, 'American Team')}
          {renderTeam(afghanistanTeam, 'Afghanistan Team')}
        </div>
      </section>
    </>
  );
};

export default Team;
