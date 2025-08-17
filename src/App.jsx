import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async'; // ✅ if you're using react-helmet-async
import { Toaster } from '@/components/ui/toaster';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

import Home from '@/pages/Home.jsx';
import About from '@/pages/About.jsx';
import Programs from '@/pages/Programs.jsx';
import Team from '@/pages/Team.jsx';
import Donate from '@/pages/Donate.jsx';
import Petition from '@/pages/Petition.jsx';
import Updates from '@/pages/Updates.jsx';
import Contact from '@/pages/Contact.jsx';

import { trackVisitOnce } from '@/track'; // src/track.js

function App() {
  useEffect(() => {
    trackVisitOnce(); // logs exactly once per tab/session
  }, []);

  return (
    <HelmetProvider>
      <Router
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/programs" element={<Programs />} />
              <Route path="/team" element={<Team />} />
              <Route path="/donate" element={<Donate />} />
              <Route path="/petition" element={<Petition />} />
              {/* use lowercase path for consistency */}
              <Route path="/updates" element={<Updates />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
          <Toaster />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
