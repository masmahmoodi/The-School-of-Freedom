import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

import maleIcon from '../images/male-icon.png';
import femaleIcon from '../images/female-icon.png';

import walidImg from '../images/walid1.jpg';
import robinaImg from '../images/robinajpg.jpg';
import mohebImg from '../images/moheb.jpg';
import tayeebImg from '../images/tayeeb.jpg';
import ghezalImg from '../images/ghezal.jpg';
import omarImg from '../images/omar.jpg';
import mariaImg from '../images/mariam.jpg';
import masoudImg from '../images/masoud2.jpg';

const Team = () => {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const onKeyDown = (e) => e.key === 'Escape' && setSelected(null);
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, []);

  // ✅ Featured member we want centered
  const featuredAmerican = {
    name: 'Masoud Rahman Mahmoodi',
    role: 'Full-Stack Developer & Math Instructor',
    gender: 'male',
    img: masoudImg,
    bio: `Masoud Rahman Mahmoodi is a former third-year Computer Science student at Kabul University with a strong background in programming, web development, and problem-solving. During his time at Kabul University, he gained practical experience through various projects, including interactive web applications and Python-based software.

Currently, Masoud works as a Math Instructor at Willow Way, helping students strengthen their mathematical foundations and prepare for advanced studies. He also serves as a Full-Stack Developer at The School of Freedom, where he designed and developed the organization’s official website, ensuring functionality, usability, and modern design standards.

Now based in the United States, Masoud is planning to continue his education at one of the University of California campuses. His academic interests include software engineering, algorithms, and emerging technologies, and he is committed to building skills that can lead to impactful contributions in the tech industry.`
  };

  // Base American team (without Masoud)
  const americanTeamBase = [
    {
      name: 'Walid Jailani',
      role: 'Founder/President',
      gender: 'male',
      img: walidImg,
      bio: `Walid Jailani is the President and Founder of the School of Freedom, an organization committed to empowering girls from underserved communities through education and women’s empowerment. He recently graduated from the University of California, Davis, with a degree in Neurobiology, Physiology, and Behavior, and a minor in Education. His time at UC Davis has reinforced his dream of using his knowledge to make a lasting impact in the medical field, driven by a deep compassion for helping others.

Walid's commitment to service extends far beyond his academic achievements. He volunteers at the Shifa Community Clinic, where he provides essential healthcare to underserved populations. As a Nationally Certified EMT, Walid’s dedication to emergency medical services stems from his belief that compassion and immediate care can change lives.

His tireless efforts have been recognized with the California Region 3 Every Student Succeeding Award and the Presidential Medal of Volunteering. For years, Walid has shared his passion for learning through tutoring at Willow Way Tutoring Club and local schools, helping others reach their potential and pursue their dreams.

Fluent in Farsi, Pashto, Dari, and English, Walid bridges cultural gaps and ensures that people from all backgrounds receive the support they need. His dream is simple but powerful: to offer compassion, guidance, and opportunities to those who need it most. As the founder of the School of Freedom, Walid is dedicated to breaking down the barriers that hold young girls back, giving them the chance to dream big and achieve those dreams through education and empowerment.`
    },
    {
      name: 'Robina Haqiqi',
      role: 'Internal Vice President',
      gender: 'female',
      img: robinaImg,
      bio: `Robina Haqiqi is a recent graduate from the University of California, Davis, where she earned her degree in Biological Sciences with a minor in Education. Originally from Afghanistan, Robina is fluent in Dari, Farsi, Urdu, Hindi, and English, allowing her to connect with people from diverse backgrounds and foster meaningful relationships across cultures.

In addition to her academic achievements, Robina has been dedicated to the field of dentistry, working as a dental assistant since 2021. Over the past two years, she has gained valuable experience helping individuals improve their dental health, and she is eager to continue her journey toward a career in dentistry.

Robina is also deeply committed to empowering Afghan girls whose education has been disrupted by recent events. As part of her mission to give back, she has been tutoring these girls, helping them continue their education and pursue their dreams despite the challenges they face.

Robina's work reflects her passion for education and service, and she is determined to continue making a positive impact, one step at a time, while inspiring others to join her in spreading positivity and creating opportunities for those in need.`
    },
    {
      name: 'Moheb Salemi',
      role: 'External Vice President',
      gender: 'male',
      img: mohebImg,
      bio: `My Name is Moheb Salemi. I graduated in 2023 with a Bachelor’s degree in Economics from UC Davis. I joined the School of Freedom to be able to connect with my Afghan heritage, since I have never had a real connection because my family came to the United States as refugees in the early 90s. I saw that helping to start this nonprofit would allow me to give back while also connecting with and assisting Afghans who don’t have the same opportunities I have been blessed with.`
    },
    {
      name: 'Tayeeb Huda Jailani',
      role: 'Director of Youth Advocacy & Engagment ',
      gender: 'male',
      img: tayeebImg,
      bio: `Tayeeb Huda Jailani is currently studying Computer Science and Engineering (CSE) at the University of California, Davis, building on his strong foundation in academics and a passion for problem-solving. With over three years of tutoring experience, particularly in math and English, Tayeeb is dedicated to helping students achieve academic success and overcome challenges. He recently completed AP Calculus BC and has excelled in multiple AP English courses, including AP Language & Composition and Seminar. As a former English language learner, he is deeply empathetic to the struggles students face in language acquisition, which fuels his passion for supporting others in their educational journeys.

Tayeeb maintains an impressive GPA of 4.475 and has been repeatedly recognized by his school's English department for his exceptional writing skills. His tutoring experience spans various settings, including summer school sessions and Saturday academies, where he has honed his teaching methods to cater to diverse student needs effectively.

Outside of academics, Tayeeb is an active youth advocate and speaker within the Afghan-American community. He collaborates with the International Rescue Committee to lead a team of advocates focused on addressing critical social issues, such as substance abuse, within the community. Tayeeb also holds leadership roles as the president of both the Cultural Club and the Muslim Student Association at his school, where he promotes cultural diversity and inclusivity. As a member of the Muslim Committee, he works to implement policies that support Muslim students and foster a welcoming environment.

In his personal time, Tayeeb enjoys staying active, going to the gym three times a week, and taking evening walks to unwind. His love for mathematics and problem-solving drives his aspiration to pursue a career in engineering, where he hopes to make a lasting, positive impact.`
    },
    {
      name: 'Ghezal Karimi',
      role: 'Tutors/Teachers Coordinator',
      gender: 'female',
      img: ghezalImg,
      bio: `My name is Ghezal Karimi. I’m a recent graduate from UC Davis with a bachelor’s degree in Psychology and Economics and an incoming doctoral student in Clinical Psychology at Alliant International University (CSPP). I have played an active role in my community through many organizations and I have been involved in educating people about mental health issues and mental health advocacy. I have been part of School of Freedom since its start and as an Afghan-American who immigrated to the United States from Kabul, Afghanistan as a youth, I always wanted to give back to my home country and my people. Being part of the School of Freedom gave me an opportunity to reach my goal in the best way possible. It allowed me to help our Afghan girls reach an education that they deserve and I’m beyond proud to be part of such an amazing organization.`
    },
    {
      name: 'Omar Alhuniti',
      role: 'Outreach Coordinator',
      gender: 'male',
      img: omarImg,
      bio: `Hi, I’m Omar Alhuniti. I’m the Outreach Coordinator at SOF, where I focus on building relationships with the communities we serve and the people who help make our work possible. My role involves connecting with students, volunteers, and partners to make sure our programs stay accessible, responsive, and rooted in trust.

What drew me to School of Freedom wasn’t just the mission. It was the way the team actually lives out its values by showing up, listening first, and doing the kind of work that quietly changes lives. I’ve been involved in nonprofit spaces for a while, and this is the kind of work that brings fulfillment. I’ve helped launch student support initiatives, organized outreach efforts, and worked directly with families and students to help bridge college bound protégé’s with career involvement.

Growing up, I understood what it meant to not always have access to the same opportunities. As someone with Palestinian roots, I carry with me the deep history of resilience and community that comes from people who have faced displacement, struggle, and a longing for justice. That experience has shaped how I approach service today. I’m here to help open space, connect people, and make sure the support we offer is meaningful especially for those whose voices are often overlooked. My background motivates me to work alongside others with compassion and respect, because I know firsthand how powerful it is when communities come together to create real change.

Right now, I’m a student at UC Davis, studying toward a career in healthcare. My hope is to bring the same mindset into that space. One that centers care, accountability, and a real commitment to people.`
    },
    {
      name: 'Mariam Saleh',
      role: 'Publicity/Press Coordinator',
      gender: 'female',
      img: mariaImg,
      bio: `Mariam Saleh is a recent graduate from the University of California, Davis, where she earned her degree in Neurobiology, Physiology, and Behavior (NPB) with a minor in Education. Fluent in both Arabic and English, Mariam is passionate about connecting with people from diverse backgrounds and making a meaningful impact in her community.

In addition to her academic achievements, Mariam has been working as a Dental Assistant for almost three years, gaining hands-on experience in the field of dentistry. Her commitment to helping others extends beyond her professional career, as she has also been tutoring since high school, supporting students in their academic journeys.

Mariam joined the School of Freedom because she wanted to be a part of the change that allows Afghan girls to achieve their dreams, regardless of the challenges they face. Throughout her work with these students, she has witnessed many of them pursuing ambitious goals, and she is proud to be a part of their journey, helping them reach their full potential.

Her dedication to service, education, and empowerment continues to guide her work, and she remains committed to supporting the growth and success of those around her`
    },
    {
      name: 'Jasmine Alhuniti',
      role: 'Finance Coordinator',
      gender: 'female',
      bio: `Hi, I’m Jasmine Alhuniti. I’m the Financial Coordinator at School of Freedom, where I help keep our programs sustainable and accessible by managing resources with care and transparency. My work supports everything from volunteer-led classes to outreach, making sure our efforts reach the communities that need them most.

As someone with Palestinian roots, I understand what it means to have opportunity stripped away—and how powerful it is to reclaim it. That’s why I’m proud to be part of a team that helps Afghan girls access the education that was taken from them. Behind the scenes, I make sure the numbers align so their futures can move forward.`
    }
  ];

  const afghanistanTeam = [
    { name: 'Sadia Haidari', role: 'Principal (Afghanistan Program)', gender: 'female' },
    { name: 'Husna Haidari', role: 'Teacher', gender: 'female' },
    { name: 'Sahar Sadeed', role: 'Teacher', gender: 'female' },
    { name: 'Rana Sayedi', role: 'Teacher', gender: 'female' },
    { name: 'Husna Haidari', role: 'Teacher', gender: 'female' },
    { name: 'Shamila Dawari', role: 'Teacher', gender: 'female' },
    { name: 'Husna Haidari', role: 'Teacher', gender: 'female' },
    { name: 'Freshta Baraki', role: 'Teacher', gender: 'female' },
    { name: 'Muzhgan Hakimi', role: 'Teacher', gender: 'female' },
    { name: 'Hamid Rahim Azizi', role: 'Teacher', gender: 'male' },
    { name: 'Sadya Mohmmadi', role: 'Teacher', gender: 'female' },
    { name: 'Zabiha Hakimi', role: 'Teacher', gender: 'female' },
    { name: 'Hamid Nakzad', role: 'Teacher', gender: 'male' }
  ];

  // ---------- Cards ----------
  const Card = ({ member, index, isFeatured = false }) => {
    const photo = member.img || (member.gender === 'male' ? maleIcon : femaleIcon);

    return (
      <motion.button
        type="button"
        onClick={() => setSelected(member)}
        key={index}
        className={`card team-card flex flex-col h-full rounded-2xl bg-white/90 shadow hover:shadow-lg transition focus:outline-none focus:ring-4 focus:ring-gold/40 ${
          isFeatured ? 'ring-2 ring-gold/60' : ''
        }`}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.06 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col items-center p-5 sm:p-6">
          <img
            className={`rounded-full object-cover mb-4 border-4 border-gold ${
              isFeatured ? 'w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36' : 'w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32'
            }`}
            alt={`${member.name}, ${member.role || ''}`}
            src={photo}
            onError={(e) => {
              e.currentTarget.src = member.gender === 'male' ? maleIcon : femaleIcon;
            }}
          />
          <h3 className="text-lg sm:text-xl font-semibold text-navy mb-1 text-center">{member.name}</h3>
          {member.role && (
            <p className="text-gold font-medium text-sm sm:text-base mb-3 text-center">{member.role}</p>
          )}
          <p className="text-gray-600 text-sm leading-relaxed text-center line-clamp-3">
            {member.bio || 'Dedicated team member working to empower education and support students.'}
          </p>
          <span className="mt-3 text-center text-sm text-navy underline">Read more</span>
        </div>
      </motion.button>
    );
  };

  // ✅ Featured card (used in the grid, centered)
  const FeaturedCard = ({ member }) => (
    <div className="col-span-full flex justify-center">
      <div className="w-full max-w-3xl">
        <Card member={member} index={0} isFeatured />
      </div>
    </div>
  );

  // ---------- Renderers ----------
  const renderAmericanTeam = () => {
    // Split the base team into two halves and put the featured card between them
    const mid = Math.ceil(americanTeamBase.length / 2);
    const firstHalf = americanTeamBase.slice(0, mid);
    const secondHalf = americanTeamBase.slice(mid);

    return (
      <div className="mb-16 sm:mb-20">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-navy mb-6 sm:mb-10">
          American Team
        </h2>

        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 auto-rows-fr">
          {firstHalf.map((m, i) => (
            <Card key={`${m.name}-first-${i}`} member={m} index={i} />
          ))}

          {/* ✅ Centered Masoud */}
          <FeaturedCard member={featuredAmerican} />

          {secondHalf.map((m, i) => (
            <Card key={`${m.name}-second-${i}`} member={m} index={i + firstHalf.length + 1} />
          ))}
        </div>
      </div>
    );
  };

  const renderTeam = (team, title) => (
    <div className="mb-16 sm:mb-20">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-navy mb-6 sm:mb-10">{title}</h2>
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 auto-rows-fr">
        {team.map((m, i) => (
          <Card key={`${m.name}-${i}`} member={m} index={i} />
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

      {/* Hero */}
      <section className="py-14 sm:py-20 hero-gradient text-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl sm:max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-display mb-4 sm:mb-6">
              Meet Our Team
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl">
              Dedicated individuals working together to transform lives through education and
              empowerment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Teams */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-10 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title text-2xl sm:text-3xl">Our Passionate Team</h2>
            <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Each member of our team brings unique skills, experiences, and unwavering dedication
              to our mission.
            </p>
          </motion.div>

          {renderAmericanTeam()}
          {renderTeam(afghanistanTeam, 'Afghanistan Team')}
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            aria-modal="true"
            role="dialog"
          >
            <motion.div
              className="relative w-full max-w-3xl mx-4 sm:mx-6 bg-white rounded-2xl shadow-xl"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute right-3 top-3 p-2 rounded-full hover:bg-gray-100"
                aria-label="Close"
              >
                <X size={20} />
              </button>

              <div className="max-h-[85vh] overflow-y-auto p-5 sm:p-6">
                <div className="flex flex-col md:flex-row gap-5 sm:gap-6">
                  <img
                    className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full object-cover border-4 border-gold self-center md:self-start flex-shrink-0"
                    alt={`${selected.name}, ${selected.role || ''}`}
                    src={selected.img ? selected.img : (selected.gender === 'male' ? maleIcon : femaleIcon)}
                    onError={(e) => {
                      e.currentTarget.src = selected.gender === 'male' ? maleIcon : femaleIcon;
                    }}
                  />
                  <div className="min-w-0">
                    <h3 className="text-xl sm:text-2xl font-bold text-navy">{selected.name}</h3>
                    {selected.role && (
                      <p className="text-gold font-semibold mb-3 sm:mb-4">{selected.role}</p>
                    )}
                    <div className="prose max-w-none whitespace-pre-line text-sm sm:text-base">
                      {selected.bio || 'Dedicated team member working to empower education and support students.'}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Team;
