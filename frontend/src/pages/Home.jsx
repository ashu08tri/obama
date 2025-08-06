import React, { useState, useEffect } from 'react'
import Carousel from '../components/HomeCursole'
import SEO from '../components/SEO'
import { motion } from 'framer-motion'
import {Link} from 'react-router-dom'
import profile from '../assets/profile.jpg';
import heroImage from '../assets/hero.jpg';

const Home = () => {
  const [showIcon, setShowIcon] = useState(false);

  useEffect(() => {
    window.scroll({ top: 0, left: 0 });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowIcon(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }

  return (
    <>
      <SEO title="Home | Shekhar Dixit" description="Welcome to the Official Dixit Foundation homepage." />
      <div className='bg-black pb-5'>

        {showIcon && (
          <div className='fixed right-5 bottom-5 z-50'>
            <lord-icon
              src="https://cdn.lordicon.com/wwluxohy.json"
              trigger="hover"
              className="w-[70px] h-[70px] max-md:h-[40px] max-md:w-[40px]"
              onClick={handleScrollToTop}
            />
          </div>
        )}

        {/* Welcome Section */}
          <div
            className="h-[86vh] bg-no-repeat bg-[center_top] bg-cover"
            style={{
              backgroundImage: `url(${heroImage})`,
            }}
          >
          {/* <motion.div
            className='flex h-full justify-center items-center'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className='text-center mt-10'>
              <p className='text-2xl font-bold flex justify-center'>
                <span className='w-2/3 text-slate-300 '>
                  Welcome to the Office of Shekhar Dixit – A Voice for Farmers, Justice, and Rural India
                </span>
              </p>
              <motion.p
                className='text-sky-500 font-serif pt-5 max-md:text-3xl min-md:text-6xl'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
               Together in Every Struggle
              </motion.p>
              <Link to="/about">
                <motion.button
                  type="button"
                  className="text-gray-900 font-semibold bg-white border border-gray-300 hover:bg-gray-200 rounded-lg text-sm px-5 py-2.5 me-2 mb-2 mt-10"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
                </Link>
            </div>
          </motion.div> */}
        </div>

        {/* Carousel Section */}
        <motion.div
          className=''
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h1 className='text-center text-3xl text-white py-5 font-bold'>Campaigns</h1>
          <Carousel />
        </motion.div>

        {/* Our Story Section */}
        <motion.div
          className='flex m-10 max-md:m-2 max-h-[450px] rounded-xl p-4 min-md:p-10 bg-white justify-between'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className='overflow-y-scroll min-md:text-center min-md:px-10'
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h1 className='font-bold text-3xl py-2 text-center'>My Story</h1>
            <p>
              Shekhar Dixit is a nationally recognized social and political leader, dedicated to farmers’ rights, rural justice, and constitutional values. 
              Born in 1984 in Lucknow, his activism began early and was shaped by his meeting with former Prime Minister V.P. Singh in 2003—a turning point that led him into grassroots movements and policy advocacy.
              As the National President of Rashtriya Kisan Manch, Shekhar has led landmark campaigns across India, including the Dadri land acquisition protest, MSP guarantee movements, and rural welfare initiatives. 
              His leadership is rooted in Gandhian principles, non-violence, and a strong belief in democratic participation.
              From mobilizing farmers on the ground to engaging national leaders and contesting elections, he continues to be a powerful and principled voice for inclusive, rights-based reform in India’s agrarian landscape.
            </p>
          </motion.div>
          <motion.div
            className='max-md:hidden'
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <img
              src={profile} 
              alt="Shekhar Dixit"
              className='h-full w-full rounded-xLG shadow-lg object-cover'
            />
          </motion.div>
        </motion.div>

      </div>
    </>
  )
}

export default Home
