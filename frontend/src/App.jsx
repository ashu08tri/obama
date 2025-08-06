import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Page imports
import Home from './pages/Home';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import SchedulingForm from './pages/Scheduling';
import InvocedPage from './pages/InvocedPage';
import VolunteerSignup from './components/VolunteerSignup';
import Progress from './pages/Progress';
import Gallery from './pages/Gallery';
import RKMSignup from './components/RKMSignup';
import PersonalSignup from './components/PersonalSignup';

const App = () => {
  return (
    <Routes>
      {/* Core Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/schedule" element={<SchedulingForm />} />
      <Route path="/volunteer" element={<InvocedPage />} />
      <Route path="/volunteersignup" element={<VolunteerSignup />} />
      <Route path="/rkmsignup" element={<RKMSignup />} />
      <Route path="/personalsignup" element={<PersonalSignup />} />
      <Route path="/updates" element={<Progress />} />
      <Route path="/gallery" element={<Gallery />} />

      {/* Fallback */}
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default App;
