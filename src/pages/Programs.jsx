import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { BookOpen, Users, Globe, Palette, GraduationCap, Heart, ExternalLink } from 'lucide-react';

// >>> import your local art images
import art1 from '../images/art1.png';
import art2 from '../images/art2.png';
import art3 from '../images/art31.jpeg';

const Programs = () => {
  const programs = [
    {
      icon: <Globe className="w-12 h-12 text-gold" />,
      title: 'Virtual Learning for Afghan Girls',
      description: 'Comprehensive online education programs designed specifically for Afghan girls, providing access to quality education despite geographical and social barriers.',
      features: ['Live interactive classes', 'Recorded lessons for flexible learning', 'Digital literacy training', 'Safe learning environment']
    },
    {
      icon: <Users className="w-12 h-12 text-gold" />,
      title: 'Leadership & Mentorship',
      description: 'Developing the next generation of leaders through one-on-one mentorship, leadership workshops, and personal development programs.',
      features: ['Personal mentorship matching', 'Leadership skill development', 'Public speaking training', 'Career guidance']
    },
    {
      icon: <GraduationCap className="w-12 h-12 text-gold" />,
      title: 'ESL Tutoring & College Prep',
      description: 'Supporting Afghan refugee youth in the U.S. with English language learning, academic tutoring, and college preparation services.',
      features: ['English language instruction', 'Academic subject tutoring', 'College application support', 'Scholarship guidance']
    },
    {
      icon: <Palette className="w-12 h-12 text-gold" />,
      title: 'Student Artwork & Creative Expression',
      description: 'Encouraging creativity and self-expression through art programs that help students process their experiences and share their stories.',
      features: ['Art therapy sessions', 'Creative writing workshops', 'Digital art training', 'Cultural expression projects']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Programs - The School of Freedom</title>
        <meta name="description" content="Explore our comprehensive programs including virtual learning for Afghan girls, leadership development, ESL tutoring, and creative expression initiatives." />
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
            <h1 className="text-5xl md:text-6xl font-bold font-display mb-6">Our Programs</h1>
            <p className="text-xl md:text-2xl">
              Comprehensive educational initiatives designed to empower, inspire, and transform lives through learning.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programs Grid */}
      <section id="programs-section" className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                className="card p-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-6">
                  {program.icon}
                  <h3 className="text-2xl font-semibold text-navy ml-4">{program.title}</h3>
                </div>
                <p className="text-gray-700 mb-6 text-lg">{program.description}</p>
                <ul className="space-y-2">
                  {program.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Art / Expression Section */}
      <section className="py-16 bg-light-gray">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Student Artwork & Expression</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our students express their hopes, dreams, and experiences through powerful artwork that tells their stories.
            </p>
          </motion.div>

          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                className="w-full h-96 object-cover rounded-lg shadow-lg"
                alt="Student artwork 1"
                src={art1}
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="quote-card">
                <p className="text-2xl font-medium mb-4 font-display">
                  "It wasn't always easy, but it's worth it."
                </p>
                <p className="text-lg font-semibold mb-6">— Wagma, School of Freedom Student</p>
                <p className="text-gray-700">
                  This powerful piece represents the resilience and determination of our students. 
                  Through art, they share their journey of overcoming challenges and finding strength 
                  in education and community.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-2 md:order-1"
            >
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-navy mb-4">The Power of Creative Expression</h3>
                <p className="text-gray-700 mb-4">
                  Art serves as a universal language that transcends barriers and allows our students 
                  to communicate their experiences, hopes, and dreams. Through creative expression, 
                  they process their journey and inspire others.
                </p>
                <p className="text-gray-700">
                  Each piece tells a story of courage, resilience, and the transformative power of 
                  education. These artworks remind us why our mission is so important and the 
                  impact we're making in young lives.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-1 md:order-2"
            >
              <img
                className="w-full h-96 object-cover rounded-lg shadow-lg"
                alt="Student artwork 2"
                src={art2}
              />
            </motion.div>
          </div>

          {/* Mini gallery with your third image */}
        {/* Mini gallery with your third image */}
<div className="mt-16">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div className="rounded-lg shadow-lg bg-white flex items-center justify-center p-2 md:col-span-3">
      <img
        src={art3}
        alt="Student artwork 3"
        className="max-h-[420px] w-auto object-contain"
        loading="lazy"
      />
    </div>
  </div>
</div>


          {/* Beautiful link card to Google Drive gallery */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <a
              href="https://drive.google.com/drive/folders/1F2FfPeTWKtcKUegTJcPkv_bTowxjhBwz"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-2xl bg-gradient-to-r from-gold to-yellow-400 p-1 shadow-lg hover:shadow-xl transition"
            >
              <div className="bg-white rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between">
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold text-navy">Explore More Student Art</h3>
                  <p className="text-gray-600 mt-2">
                    Visit our full gallery to see additional drawings, paintings, and creative projects.
                  </p>
                </div>
                <div className="mt-6 md:mt-0 flex items-center gap-3 text-navy">
                  <span className="font-semibold">Open Gallery</span>
                  <ExternalLink className="w-5 h-5" />
                </div>
              </div>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-navy text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold font-display mb-6">Making a Real Difference</h2>
            <p className="text-xl mb-8">
              Our programs are more than just educational initiatives—they're lifelines that provide 
              hope, opportunity, and a pathway to a brighter future for Afghan girls and refugee youth.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-navy" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Quality Education</h3>
                <p>Providing world-class education regardless of location or circumstances.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-navy" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Emotional Support</h3>
                <p>Creating safe spaces for healing, growth, and personal development.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-navy" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Community Building</h3>
                <p>Fostering connections and building supportive networks for lasting impact.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Programs;
