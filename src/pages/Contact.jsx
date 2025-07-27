
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const { toast } = useToast();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: '🚧 Contact Form Coming Soon!',
      description: 'Message sending isn\'t implemented yet—but don\'t worry! You can request email integration in your next prompt! 🚀',
      duration: 5000,
    });
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    toast({
      title: '🚧 Newsletter Signup Coming Soon!',
      description: 'Newsletter subscription isn\'t implemented yet—but don\'t worry! You can request email list integration in your next prompt! 🚀',
      duration: 5000,
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-gold" />,
      title: 'Email Us',
      details: 'info@schooloffreedom.org',
      description: 'Send us a message anytime'
    },
    {
      icon: <Phone className="w-6 h-6 text-gold" />,
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      description: 'Monday - Friday, 9AM - 5PM PST'
    },
    {
      icon: <MapPin className="w-6 h-6 text-gold" />,
      title: 'Visit Us',
      details: 'Sacramento, CA',
      description: 'UC Davis Campus Area'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us - The School of Freedom</title>
        <meta name="description" content="Get in touch with The School of Freedom. Contact us for inquiries, partnerships, or to learn more about our educational programs." />
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
            <h1 className="text-5xl md:text-6xl font-bold font-display mb-6">Get in Touch</h1>
            <p className="text-xl md:text-2xl">
              We'd love to hear from you. Reach out with questions, partnership opportunities, 
              or to learn more about our mission.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">How to Reach Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you're interested in supporting our mission, partnering with us, 
              or simply want to learn more, we're here to help.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="card p-6 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-center mb-4">
                  {info.icon}
                </div>
                <h3 className="text-xl font-semibold text-navy mb-2">{info.title}</h3>
                <p className="text-lg font-medium text-gold mb-2">{info.details}</p>
                <p className="text-gray-600">{info.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-light-gray">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="card p-8">
                <h2 className="text-3xl font-bold text-navy mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="form-input"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="form-input"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      required
                      className="form-input"
                      value={formData.subject}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      className="form-textarea"
                      placeholder="Tell us how we can help you..."
                      value={formData.message}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary text-lg py-4 flex items-center justify-center space-x-2"
                  >
                    <Send size={20} />
                    <span>Send Message</span>
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* FAQ */}
              <div className="card p-8">
                <h3 className="text-2xl font-semibold text-navy mb-6">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-navy mb-2">How can I volunteer?</h4>
                    <p className="text-gray-600">We welcome volunteers with various skills. Contact us to learn about current opportunities.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy mb-2">Can I visit your programs?</h4>
                    <p className="text-gray-600">Due to security concerns for our students, visits are arranged on a case-by-case basis.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy mb-2">How are donations used?</h4>
                    <p className="text-gray-600">Donations go directly to educational materials, teacher stipends, and technology access for students.</p>
                  </div>
                </div>
              </div>

              {/* Partnership */}
              <div className="card p-8">
                <h3 className="text-2xl font-semibold text-navy mb-4">Partnership Opportunities</h3>
                <p className="text-gray-600 mb-4">
                  We're always looking for partners who share our commitment to education and empowerment.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Educational institutions</li>
                  <li>• Technology companies</li>
                  <li>• Humanitarian organizations</li>
                  <li>• Corporate sponsors</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-navy text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold font-display mb-6">Stay Connected</h2>
            <p className="text-xl mb-8">
              Join our newsletter to receive updates about our programs, student success stories, 
              and ways you can make a difference.
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto">
              <div className="flex space-x-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-700"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="btn-primary px-6 py-3 flex items-center space-x-2"
                >
                  <MessageCircle size={20} />
                  <span>Subscribe</span>
                </button>
              </div>
            </form>
            
            <p className="text-gray-300 mt-4 text-sm">
              We respect your privacy and will never share your email address.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Our Location</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Based in the Sacramento area near UC Davis, we serve students globally 
              through our virtual programs and locally through our refugee support initiatives.
            </p>
          </motion.div>

          <motion.div 
            className="bg-light-gray rounded-lg p-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-navy" />
            </div>
            <h3 className="text-2xl font-semibold text-navy mb-4">Sacramento, California</h3>
            <p className="text-gray-600 mb-6">
              Our headquarters are located in the Sacramento area, where we coordinate 
              our global virtual programs and local refugee support services.
            </p>
            <button 
              className="btn-primary"
              onClick={() => {
                toast({
                  title: '🚧 Interactive Map Coming Soon!',
                  description: 'Map integration isn\'t available yet—but don\'t worry! You can request Google Maps integration in your next prompt! 🚀',
                  duration: 5000,
                });
              }}
            >
              View on Map
            </button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Contact;
