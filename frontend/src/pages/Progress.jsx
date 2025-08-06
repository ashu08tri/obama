import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const Progress = () => {
  useEffect(() => {
    window.scroll({ top: 0, left: 0 });
  }, []);

  return (
    <>
      <SEO title="Progress | Shekhar Dixit" description="Welcome to the Official Dixit Foundation Progress page." />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Section 1: Header */}
        <motion.section
          className="py-16 px-4 bg-black text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-blue-400 mb-4">Current Updates</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            From the grassroots to the nation, we’re building a legacy of justice, leadership, and meaningful change through Rashtriya Kisan Manch.
          </p>
        </motion.section>

        {/* Section 2: Highlights */}
        <motion.section
          className="py-12 px-4 bg-gray-900"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
        <div className="max-w-5xl mx-auto">
        <h3 className="text-2xl font-semibold text-blue-300 mb-6 text-center">
          Highlights (2003–2025)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 text-gray-200">
          <ul className="list-disc pl-5 space-y-3">
            <li>Led nationwide campaigns for legal MSP guarantee</li>
            <li>Organized major protests against unjust land acquisition in Dadri</li>
            <li>Brought farmers' voices into mainstream political discourse</li>
          </ul>
          <ul className="list-disc pl-5 space-y-3">
            <li>Played a key role in Anna Hazare’s anti-corruption movement</li>
            <li>Advocated for equal access to education and healthcare in rural India</li>
            <li>Engaged with national leaders on agrarian reforms and rural policies</li>
          </ul>
        </div>
      </div>

        </motion.section>

        {/* Section 3: Stats */}
        <motion.section
          className="py-16 px-4 bg-black text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold text-blue-400 mb-8"> Foundation by the Numbers </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { number: '1.5L', label: "Farmer's Reached" },
              { number: '4000+', label: 'Villages Covered' },
              { number: '230', label: 'Programes Impacted' },
              { number: '5', label: 'Active States' }
            ].map((item, i) => (
              <motion.div
                key={i}
                className="px-4"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.2 }}
              >
                <h4 className="text-4xl font-bold text-blue-300">{item.number}</h4>
                <p className="text-gray-300">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Section 4: Recent Projects */}
        <motion.section
          className="py-16 px-4 bg-black"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-5xl mx-auto">
            <h3 className="text-2xl font-semibold text-blue-300 mb-6 text-center">Recent Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Kisan Nyay Yatra',
                  desc: 'Mobilizing support across India to demand justice, fair MSP, and rural welfare reforms.'
                },
                {
                  title: 'Gramin Shiksha Abhiyan',
                  desc: 'Advocating for equal access to quality education and digital learning in rural communities.'
                }

              ].map((project, i) => (
                <motion.div
                  key={i}
                  className="bg-gray-800 p-6 rounded-lg shadow-md"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                >
                  <h4 className="text-xl font-bold text-blue-400 mb-2">{project.title}</h4>
                  <p className="text-gray-300">{project.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Section 5: CTA */}
        <motion.section
          className="py-12 px-4 bg-black text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h4 className="text-2xl font-bold text-blue-400 mb-4">Join the Movement</h4>
          <p className="text-gray-300 mb-6">Support the Dixit Foundation and help shape the next generation of leaders.</p>
          <Link
            to="/invoced"
            className="bg-blue-600 hover:bg-blue-500 text-white py-3 px-6 rounded-full font-semibold transition transform hover:scale-105"
          >
            Get Involved
          </Link>
        </motion.section>
      </motion.div>
    </>
  );
};

export default Progress;
