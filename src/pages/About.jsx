
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Globe, Target, Heart, Users } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Globe className="w-8 h-8 text-gold" />,
      title: 'Global Impact',
      description: 'Breaking geographical barriers to provide education worldwide.'
    },
    {
      icon: <Target className="w-8 h-8 text-gold" />,
      title: 'Focused Mission',
      description: 'Dedicated specifically to empowering Afghan girls and refugee youth.'
    },
    {
      icon: <Heart className="w-8 h-8 text-gold" />,
      title: 'Compassionate Approach',
      description: 'Understanding the unique challenges faced by our students.'
    },
    {
      icon: <Users className="w-8 h-8 text-gold" />,
      title: 'Community Building',
      description: 'Creating supportive networks for lasting change.'
    },
  ];

  return (
    <>
      <Helmet>
        <title>About Us - The School of Freedom</title>
        <meta name="description" content="Learn about The School of Freedom's mission to educate and empower Afghan girls and refugee youth through innovative programs and mentorship." />
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
            <h1 className="text-5xl md:text-6xl font-bold font-display mb-6">About Our Mission</h1>
            <p className="text-xl md:text-2xl">
              Dedicated to fostering education and empowerment for Afghan girls, 
              guiding them toward independence and job opportunities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title mb-6">Our Story</h2>
              <div className="space-y-6 text-lg text-gray-700">
                <p>
                  The School of Freedom is dedicated to fostering education and empowerment for Afghan girls, 
                  guiding them toward independence and job opportunities. The educational situation in Afghanistan 
                  has been deeply affected by years of conflict, political instability, and social constraints, 
                  particularly limiting girls' access to education.
                </p>
                <p>
                  With a focus on innovation, we offer tailored programs and mentorship that create a nurturing 
                  environment where girls can thrive both academically and professionally. Our expertise spans 
                  educational development, leadership training, and advocacy for gender equality.
                </p>
                <p>
                  We are committed to breaking societal barriers and challenging norms to ensure that Afghan 
                  girls gain equal access to opportunities, enabling them to become influential leaders in 
                  their communities and contribute to a brighter future for Afghanistan.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img  
                className="w-full h-96 object-cover rounded-lg shadow-lg" 
                alt="Afghan girls in traditional dress studying with books"
               src="https://www.hrw.org/sites/default/files/styles/opengraph/public/media_2022/07/202207asia_afghanistan_girlsed.jpg?h=3f384d51&itok=GGBtrge7" />
            </motion.div>
          </div>

          {/* Additional Mission */}
          <motion.div 
            className="bg-light-gray rounded-lg p-8 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-navy mb-4">Expanding Our Reach</h3>
            <p className="text-lg text-gray-700 mb-4">
               In addition to our global efforts, The School of Freedom is taking bold steps locally by launching a dual-immersion 
               charter school in Sacramento. This school is designed to support refugee and newcomer students, 
               offering a culturally responsive learning environment that values identity, language, and community. 
               Through tailored instruction, academic support,
                and inclusive programming, we aim to ensure that newcomers not only adapt but thrive in their new educational journeys. 
                This charter school reflects our commitment to building bridges between cultures and providing every student with the tools to succeed.
            </p>
          </motion.div>
        </div>
      </section>

      {/* US Programs Section */}
      <section className="py-16 bg-navy text-white">
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
                alt="Diverse group of refugee students in American classroom"
               src="http://c.files.bbci.co.uk/64FA/production/_122005852_primaryreuterssmall.jpg" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold font-display mb-6">Supporting Refugees in the U.S.</h2>
              <div className="space-y-6 text-lg">
                <p>
                  In the U.S., The School of Freedom supports Afghan refugee youth through after-school 
                  tutoring, college preparation, ESL mentorship, and culturally inclusive advising.
                </p>
                <p>
                  We are currently in the process of launching a dual-immersion charter school in 
                  Sacramento to serve refugee and newcomer communities with language support, 
                  identity-affirming education, and long-term academic opportunity.
                </p>
                <p>
                  This groundbreaking initiative will provide a safe, supportive environment where 
                  refugee students can maintain their cultural identity while excelling academically 
                  in their new home.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do and shape our approach to education and empowerment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="card p-6 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-navy mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Quote */}
      <section className="py-16 bg-light-gray">
        <div className="container mx-auto px-4">
          <motion.div 
            className="quote-card max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-2xl md:text-3xl font-medium mb-4 font-display">
              "Education is the most powerful weapon which you can use to change the world."
            </p>
            <p className="text-lg font-semibold">— Nelson Mandela</p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
