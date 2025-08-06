import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import volunteer from '../assets/volunteer.jpg';
import rkm from '../assets/rkm.webp';
import ks from '../assets/ks.jpg';

const InvocedPage = () => {
  useEffect(() => {
    window.scroll({ top: 0, left: 0 });
  }, []);

  return (
    <>
      <SEO title="Involved | Shekhar Dixit" description="Welcome to the Official Dixit Foundation Involved Page." />
      <motion.section
        className="py-16 px-4 bg-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-4xl font-bold text-sky-400 mb-6"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Volunteer With Us
          </motion.h2>

          <motion.div
            className="mb-8"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={volunteer}
              alt="Diverse group of happy volunteers planting trees in a community park"
              className="rounded-lg shadow-lg mx-auto mb-8 w-[500px] h-[400px]"
            />
          </motion.div>

          <motion.p
            className="text-lg text-slate-50 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            At Rashtriya Kisan Manch, volunteers are the backbone of our mission for rural justice and farmer empowerment. By offering your time, energy, and skills, you can play a vital role in driving real change across India’s villages and farming communities.
            Whether you're passionate about supporting farmers’ rights, spreading awareness in rural areas, organizing campaigns, or helping with education and health initiatives—there’s a place for you in our movement. Join Shekhar Dixit and our growing network of committed citizens working for a more just and inclusive India.
            Let’s stand together for change—on the ground, and from the heart.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Link
              to="/rkmsignup"
              className="text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 shadow-lg"
            >
              <img src={rkm} alt="" className='h-24 w-56 object-contain' />
            </Link>
            <Link
              to="/personalsignup"
              className="text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 shadow-lg"
            >
              <img src={ks} alt="ks" className='h-24 w-44 object-contain' />
            </Link>
            <Link
              to="/volunteersignup"
              className="text-white font-bold flex items-center py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 shadow-lg"
            >
              Sign Up to Volunteer
            </Link>

            {/* <Link
              to="/about"
              className="bg-white text-blue-600 hover:bg-blue-50 font-bold py-3 px-8 rounded-full transition duration-300 border-2 border-blue-600 shadow-lg"
            >
              Learn More
            </Link> */}
          </motion.div>

          <motion.div
            className="mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <p className="text-sm text-slate-50">
              Questions? <Link to="/contactus" className="text-blue-600 hover:underline">Contact our volunteer team</Link>
            </p>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default InvocedPage;
