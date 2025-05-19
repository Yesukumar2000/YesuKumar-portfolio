import React from 'react'
import './skills.css'
import './new.css'
import { motion } from 'framer-motion';
import SemiDonutChart from './SemiDonutChart';

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }} 
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      viewport={{ margin: "-100px", once: true }}
      className='skills'
    >
      <h2 className='heading1 '>Projects</h2>
      <h3 className='heading2'>Languages</h3>
      <div className="contents">
        <div className="flex">
          <SemiDonutChart percentage={70} fill="#03B0FD" txt="HTML"/>
          <SemiDonutChart percentage={45} fill="#03B0FD" txt="CSS"/>
          <SemiDonutChart percentage={50} fill="#03B0FD" txt="JavaScript"/>
        </div>
        <div className="flex">
          <SemiDonutChart percentage={70} fill="#03B0FD" txt="React JS"/>
          <SemiDonutChart percentage={70} fill="#03B0FD" txt="Node JS"/>
          <SemiDonutChart percentage={60} fill="#03B0FD" txt="Expres JS"/>
          <SemiDonutChart percentage={70} fill="#03B0FD" txt="Mongo DB"/>
        </div>
        {/* <div className="flex">
          <SemiDonutChart percentage={55} fill="#03B0FD" txt="Python"/>
        </div> */}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }} 
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        viewport={{ margin: "-100px", once: true }}
      >
        <h3 className='heading3'>Others</h3>
        <div className="contents">
          <div className="flex">
            <SemiDonutChart percentage={70} fill="#03B0FD" txt="Redux"/>
            <SemiDonutChart percentage={70} fill="#03B0FD" txt="Tailwind CSS"/>
            <SemiDonutChart percentage={90} fill="#03B0FD" txt="Bootstrap"/>
            <SemiDonutChart percentage={70} fill="#03B0FD" txt="Material UI"/>
            <SemiDonutChart percentage={100} fill="#03B0FD" txt="Git"/>
            <SemiDonutChart percentage={100} fill="#03B0FD" txt="Github"/>
          </div>
          {/* <div className="flex">
            <SemiDonutChart percentage={70} fill="#03B0FD" txt="Python"/>
          </div> */}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Skills;

