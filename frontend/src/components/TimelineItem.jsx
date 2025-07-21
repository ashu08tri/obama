import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0 },
};

const TimelineItem = ({ year, title, description, delay = 0 }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) controls.start('visible');
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      className="flex flex-col md:flex-row gap-6 md:gap-10 mb-8"
      initial="hidden"
      animate={controls}
      variants={fadeInUp}
      transition={{ duration: 0.6, delay }}
    >
      {/* Year Badge */}
      <div className="text-white bg-[#3498db] font-medium rounded-lg text-md px-5 py-2 h-11 min-w-[140px] text-center whitespace-nowrap flex items-center justify-center shadow-md">
        {year}
      </div>

      {/* Content Box */}
      <div className="bg-white shadow-md w-full py-4 px-5 rounded-xl text-gray-800">
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        {description.split('\n').map((line, index) => (
          <p key={index} className="text-sm leading-relaxed mb-1">
            {line}
          </p>
        ))}
      </div>
    </motion.div>
  );
};

export default TimelineItem;
