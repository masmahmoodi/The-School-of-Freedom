import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { BookOpen, Users, Heart, Award, ArrowRight } from 'lucide-react';

const Home = () => {
  const stats = [
    { number: '1,200+', label: 'Students Empowered' },
    { number: '50+', label: 'Dedicated Teachers' },
    { number: '3', label: 'Countries Served' },
    { number: '100%', label: 'Hope & Determination' },
  ];

  const features = [
    {
      icon: <BookOpen className="w-8 h-8 text-gold" />,
      title: 'Virtual Learning',
      description: 'Providing quality education to Afghan girls through innovative online platforms.'
    },
    {
      icon: <Users className="w-8 h-8 text-gold" />,
      title: 'Mentorship Programs',
      description: 'Connecting students with mentors for guidance, support, and leadership development.'
    },
    {
      icon: <Heart className="w-8 h-8 text-gold" />,
      title: 'Refugee Support',
      description: 'Supporting Afghan refugee youth in the U.S. with tutoring and college preparation.'
    },
    {
      icon: <Award className="w-8 h-8 text-gold" />,
      title: 'Leadership Training',
      description: 'Developing the next generation of leaders through comprehensive training programs.'
    },
  ];

  return (
    <>
      <Helmet>
        <title>The School of Freedom - Education is Her Freedom</title>
        <meta name="description" content="Empowering over 1,200 Afghan girls and refugee youth through education, mentorship, and leadership development. Founded by Walid Jailani." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img  
            className="w-full h-full object-cover" 
            alt="Afghan girls celebrating graduation with cake cutting ceremony"
            src="https://cloudfront-us-east-2.images.arcpublishing.com/reuters/SYAG5VDK6NLOLC3C7C5OR6OBKI.jpg" />
          <div className="absolute inset-0 gradient-overlay"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold font-display mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Education is Her Freedom
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Empowering over 1,200 Afghan girls and refugee youth through education and courage
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a 
              href="https://www.zeffy.com/donation-form/donate-to-make-a-difference-8491" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary text-lg px-8 py-4"
            >
              Donate Now
            </a>
            <a 
              href="https://form.jotform.com/251385758940064" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-secondary text-lg px-8 py-4"
            >
              Sign the Petition
            </a>
          </motion.div>
        </div>
      </section>

      {/* Quote Section */}
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
              "It wasn't always easy, but it's worth it."
            </p>
            <p className="text-lg font-semibold">— Wagma, School of Freedom Student</p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-navy text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="stats-number">{stat.number}</div>
                <p className="text-lg font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Transforming Lives Through Education</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe that education is the most powerful tool for change. Through our comprehensive programs, 
              we're breaking barriers and creating opportunities for Afghan girls and refugee youth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="card p-6 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-navy mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-light-gray">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-6">
                The School of Freedom is dedicated to fostering education and empowerment for Afghan girls, 
                guiding them toward independence and job opportunities. We're breaking societal barriers and 
                challenging norms to ensure equal access to education.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                In the United States, we support Afghan refugee youth through after-school tutoring, 
                college preparation, ESL mentorship, and culturally inclusive advising.
              </p>
              <a href="/about" className="btn-primary inline-flex items-center space-x-2">
                <span>Learn More About Us</span>
                <ArrowRight size={20} />
              </a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img  
                className="w-full h-96 object-cover rounded-lg shadow-lg" 
                alt="Afghan students studying together in classroom"
                src="https://www.hrw.org/sites/default/files/styles/opengraph/public/media_2021/10/202110asia_afghanistan_woman.jpg?h=e5aec6c8&itok=FjfBDv9o" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 hero-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
              Join Us in Changing Lives
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Every donation, every signature, every voice matters. Together, we can ensure that 
              education remains a fundamental right for every girl, everywhere.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://www.zeffy.com/donation-form/donate-to-make-a-difference-8491" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary text-lg px-8 py-4"
              >
                Make a Donation
              </a>
              <a 
                href="https://form.jotform.com/251385758940064" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-secondary text-lg px-8 py-4"
              >
                Support Our Petition
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;
