import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import RSVPModal from './components/RSVPModal';
import AdminDashboard from './components/AdminDashboard';

const App: React.FC = () => {
  const [isRSVPModalOpen, setIsRSVPModalOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  const openRSVP = () => setIsRSVPModalOpen(true);
  const closeRSVP = () => setIsRSVPModalOpen(false);

  const openAdmin = () => setIsAdminOpen(true);
  const closeAdmin = () => setIsAdminOpen(false);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar onOpenRSVP={openRSVP} />
      <main className="flex-grow">
        <Hero onOpenRSVP={openRSVP} />
        <Services />
        <About />
      </main>
      <Contact onOpenAdmin={openAdmin} />
      
      {/* Modals */}
      <RSVPModal isOpen={isRSVPModalOpen} onClose={closeRSVP} />
      <AdminDashboard isOpen={isAdminOpen} onClose={closeAdmin} />
    </div>
  );
};

export default App;
