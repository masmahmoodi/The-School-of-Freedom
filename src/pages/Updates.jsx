import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ExternalLink, Calendar, Newspaper, Play } from 'lucide-react';

import walidImgNew from "../images/walidNewsPaper.jpg"

const Updates = () => {
  const pressItems = [
    {
      type: 'article',
      title: 'UC Davis student founds School of Freedom to educate Afghan girls amid Taliban ban',
      publication: 'The Aggie',
      date: 'January 23, 2025',
      url: 'https://theaggie.org/2025/01/23/uc-davis-student-founds-school-of-freedom-to-educate-afghan-girls-amid-taliban-ban/',
      description: 'In-depth coverage of Walid Jailani\'s mission to provide education to Afghan girls through The School of Freedom.',
      image: 'Newspaper article screenshot showing headline about UC Davis student founding School of Freedom'
    },
    {
      type: 'podcast',
      title: 'Student-led school empowers 1,200 Afghan girls',
      publication: 'UC Davis Face to Face',
      date: 'January 2025',
      url: 'https://www.ucdavis.edu/news/podcasts-and-shows/face-to-face/student-led-school-empowers-1200-afghan-girls',
      description: 'Podcast interview discussing the impact and growth of The School of Freedom program.',
      image: 'UC Davis podcast studio with microphones and Face to Face branding'
    },
    {
      type: 'news',
      title: 'Local Student Makes Global Impact',
      publication: 'Sacramento Bee',
      date: 'December 2024',
      url: '#',
      description: 'Feature story on how a local UC Davis student is changing lives internationally through education.',
      image: 'Newspaper clipping showing headline about local student making global impact'
    }
  ];

  const programHighlights = [
    {
      title: 'A Light in the Dark: How Our Secret Schools are Thriving',
      date: 'July 15, 2025',
      author: 'Jane Doe, Program Director',
      description: 'Despite the immense challenges, our network of underground schools in Afghanistan continues to grow. Discover how our brave teachers and resilient students are keeping the flame of education alive...',
      link: '#'
    },
    {
      title: "Announcing the 'Future Leaders' U.S. Charter School Initiative",
      date: 'July 1, 2025',
      author: 'John Smith, CEO',
      description: 'We are thrilled to announce the next chapter for School of Freedom: a new charter school in the U.S. dedicated to supporting refugee youth. Learn about our vision and how you can help.',
      link: '#'
    },
    {
      title: "Student Spotlight: Fatima's Journey to Becoming a Coder",
      date: 'June 20, 2025',
      author: 'Maria Garcia, Mentor',
      description: "Meet Fatima, a recent graduate who defied the odds to learn coding through our online program. Today, she's working as a junior developer and inspiring her entire community.",
      link: '#'
    }
  ];

  const mediaKit = [
    {
      title: 'High-Resolution Photos',
      description: 'Professional photos of our team, students, and programs',
      type: 'Images'
    },
    {
      title: 'Founder Biography',
      description: 'Detailed background information about Walid Jailani',
      type: 'Document'
    },
    {
      title: 'Program Statistics',
      description: 'Key numbers and impact metrics from our programs',
      type: 'Data'
    },
    {
      title: 'Student Stories',
      description: 'Inspiring testimonials and success stories',
      type: 'Stories'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Press & Media - The School of Freedom</title>
        <meta name="description" content="Latest press coverage and media resources for The School of Freedom, including articles from The Aggie and UC Davis Face to Face podcast." />
      </Helmet>

      
      <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold font-display mb-6">Press & Media</h1>
            <p className="text-xl md:text-2xl">
              Discover how The School of Freedom is making headlines and inspiring 
              communities around the world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Recent Coverage */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Recent Coverage</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our mission to educate Afghan girls and support refugee youth has captured 
              the attention of major media outlets and educational institutions.
            </p>
          </motion.div>

          <div className="space-y-12">
            {pressItems.map((item, index) => (
              <motion.div
                key={index}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <img
                    className="w-full h-auto max-h-[500px] object-contain rounded-xl shadow-xl"
                    alt={item.image}
                    src={walidImgNew}
                  />
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="flex items-center space-x-2 mb-4">
                    {item.type === 'article' && <Newspaper className="w-5 h-5 text-gold" />}
                    {item.type === 'podcast' && <Play className="w-5 h-5 text-gold" />}
                    {item.type === 'news' && <Newspaper className="w-5 h-5 text-gold" />}
                    <span className="text-sm font-medium text-gold uppercase tracking-wide">
                      {item.type}
                    </span>
                  </div>
                  <h3 className="text-2xl font-semibold text-navy mb-3">{item.title}</h3>
                  <div className="flex items-center space-x-4 mb-4 text-gray-600">
                    <span className="font-medium">{item.publication}</span>
                    <div className="flex items-center space-x-1">
                      <Calendar size={16} />
                      <span>{item.date}</span>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6">{item.description}</p>
                  {item.url !== '#' ? (
                    <a href={item.url} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-gold hover:text-navy transition-colors duration-300 font-medium">
                      <span>Read Full Article</span>
                      <ExternalLink size={16} />
                    </a>
                  ) : (
                    <span className="text-gray-500 italic">Link coming soon</span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Highlights Section */}
      <section className="section-padding bg-light-gray">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Program Highlights</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay connected with our mission through stories of impact, program updates, and announcements.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programHighlights.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div>
                  <h3 className="text-xl font-semibold text-navy mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500 mb-1">{item.date} by {item.author}</p>
                  <p className="text-gray-700 mb-4">{item.description}</p>
                </div>
                <a href={item.link} className="text-gold hover:text-navy font-medium mt-auto inline-block">
                  Read More →
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Kit */}
      <section className="py-16 bg-light-gray">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Media Resources</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Download our media kit for high-quality images, background information, 
              and key statistics about The School of Freedom.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mediaKit.map((item, index) => (
              <motion.div
                key={index}
                className="card p-6 text-center cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => {
                  if (item.title === 'Program Statistics') {
                    window.location.href = '/programs#programs-section';
                  } else {
                    const event = new CustomEvent('show-toast', {
                      detail: {
                        title: '🚧 Media Kit Coming Soon!',
                        description: 'Media resources aren\'t available for download yet—but don\'t worry! You can request them in your next prompt! 🚀'
                      }
                    });
                    window.dispatchEvent(event);
                  }
                }}
              >
                <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <ExternalLink className="w-6 h-6 text-navy" />
                </div>
                <h3 className="text-lg font-semibold text-navy mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                <span className="text-xs bg-navy text-white px-3 py-1 rounded-full">
                  {item.type}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Updates;
