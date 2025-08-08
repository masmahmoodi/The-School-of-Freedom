import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, Linkedin } from 'lucide-react';
import walidImg from '../images/walid.jpg'; // 👈 Imported Walid's image

const Team = () => {
  const teamMembers = [
    {
      name: 'Walid Jailani',
      role: 'Founder & Executive Director',
      bio: 'Passionate advocate for education and human rights, Walid founded The School of Freedom to ensure Afghan girls have access to quality education. A UC Davis student with a vision for global change.'
    },
    {
      name: 'Moheb Salemi',
      role: 'Communications Manager',
      bio: 'Expert in strategic communications and outreach, Moheb ensures our message reaches the right audiences and builds meaningful connections with supporters worldwide.'
    },
    {
      name: 'Sadia',
      role: 'Principal (Afghanistan Program)',
      bio: 'Leading our educational initiatives in Afghanistan, Sadia brings years of teaching experience and deep understanding of local educational needs and challenges.'
    },
    {
      name: 'Robina Haqiqi',
      role: 'Program Coordinator',
      bio: 'Dedicated to ensuring smooth program operations and student support, Robina coordinates between different initiatives to maximize impact and efficiency.'
    },
    {
      name: 'Jasmine',
      role: 'Student Mentor',
      bio: 'Providing guidance and support to students, Jasmine helps bridge the gap between education and personal development through dedicated mentorship.'
    },
    {
      name: 'Ghezal Karma',
      role: 'Cultural Advisor',
      bio: 'Ensuring our programs are culturally sensitive and appropriate, Ghezal provides valuable insights into Afghan culture and traditions.'
    },
    {
      name: 'Mariam Saleh',
      role: 'Academic Coordinator',
      bio: 'Overseeing curriculum development and academic standards, Mariam ensures our educational programs meet the highest quality standards.'
    },
    {
      name: 'Hamid',
      role: 'Technology Specialist',
      bio: 'Managing our digital platforms and ensuring seamless virtual learning experiences, Hamid bridges technology and education for maximum accessibility.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Meet Our Team - The School of Freedom</title>
        <meta name="description" content="Meet the dedicated team behind The School of Freedom, including founder Walid Jailani and our passionate educators, coordinators, and specialists." />
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

      {/* Team Grid */}
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
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
  src={walidImg}
/>

                <h3 className="text-xl font-semibold text-navy mb-2">{member.name}</h3>
                <p className="text-gold font-medium mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>

                <div className="flex justify-center space-x-4 mt-6">
                  <button 
                    className="p-2 bg-navy text-white rounded-full hover:bg-opacity-80 transition-all duration-300"
                    onClick={() => {
                      const event = new CustomEvent('show-toast', {
                        detail: {
                          title: '🚧 Feature Coming Soon!',
                          description: 'Contact information isn\'t available yet—but don\'t worry! You can request it in your next prompt! 🚀'
                        }
                      });
                      window.dispatchEvent(event);
                    }}
                  >
                    <Mail size={16} />
                  </button>
                  <button 
                    className="p-2 bg-navy text-white rounded-full hover:bg-opacity-80 transition-all duration-300"
                    onClick={() => {
                      const event = new CustomEvent('show-toast', {
                        detail: {
                          title: '🚧 Feature Coming Soon!',
                          description: 'LinkedIn profiles aren\'t linked yet—but don\'t worry! You can request it in your next prompt! 🚀'
                        }
                      });
                      window.dispatchEvent(event);
                    }}
                  >
                    <Linkedin size={16} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Spotlight */}
      <section className="py-16 bg-light-gray">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img  
                className="w-full h-96 object-cover rounded-lg shadow-lg" 
                alt="Walid Jailani speaking at UC Davis event about School of Freedom"
                src="https://unfoldpodcast.ucdavis.edu/sites/default/files/styles/sf_landscape_16x9/public/media/images/20250512-facetoface-2273.jpg?h=854a7be2&itok=Zrytjxrm" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title mb-6">Founder's Vision</h2>
              <div className="space-y-6 text-lg text-gray-700">
                <p>
                  Walid Jailani, a UC Davis student and passionate advocate for human rights, 
                  founded The School of Freedom with a clear vision: to ensure that every Afghan 
                  girl has access to quality education, regardless of the barriers they face.
                </p>
                <p>
                  His dedication stems from a deep understanding of the challenges faced by his 
                  community and an unwavering belief in the transformative power of education. 
                  Through his leadership, The School of Freedom has grown to serve over 1,200 students.
                </p>
                <p>
                  Walid's work has been recognized by major media outlets and has inspired a 
                  global movement of support for Afghan girls' education.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-16 bg-navy text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold font-display mb-6">Join Our Mission</h2>
            <p className="text-xl mb-8">
              We're always looking for passionate individuals who share our commitment to 
              education and empowerment. Whether you're an educator, technologist, or advocate, 
              there's a place for you in our team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="btn-primary text-lg px-8 py-4"
                onClick={() => {
                  const event = new CustomEvent('show-toast', {
                    detail: {
                      title: '🚧 Volunteer Applications Coming Soon!',
                      description: 'Volunteer opportunities aren\'t available yet—but don\'t worry! You can request more info in your next prompt! 🚀'
                    }
                  });
                  window.dispatchEvent(event);
                }}
              >
                Volunteer With Us
              </button>
              <button 
                className="btn-secondary text-lg px-8 py-4"
                onClick={() => {
                  const event = new CustomEvent('show-toast', {
                    detail: {
                      title: '🚧 Career Opportunities Coming Soon!',
                      description: 'Job openings aren\'t posted yet—but don\'t worry! You can request updates in your next prompt! 🚀'
                    }
                  });
                  window.dispatchEvent(event);
                }}
              >
                View Opportunities
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Team;