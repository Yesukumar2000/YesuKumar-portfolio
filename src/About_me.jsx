import React from 'react'
import './about_me.css'
import { motion } from 'framer-motion';

const AboutMe = () => {
  return (
    <motion.div
    initial={{
     opacity:0,
     y:40
    }} 
    whileInView={
     {
       opacity:1,
       y:0
     }
    }
    
    transition={{
     delay:0.2,
     duration:0.5
    }}
    viewport={{
      once:true
     }}
      className='about_me'  id="aboutMey">
      <h2 className='heading'>About Me</h2>
    <div className="about_me_info">
        <p className='about_me_left'>Hello! I'm M. Yesu Kumar Bhuvanagiri,Software Engineer with 1+ years of experience at LSN Software Pvt Ltd and Guna Technologies, Seeking a full-time
      React JS Developer Roles or Mern stack Developer. My journey in web development began with a fascination for
      technology and design. Over the past year, I have honed my skills in building responsive and visually appealing
      interfaces, specializing in JavaScript and React JS. I am skilled in HTML, CSS,JS, Node js,Express Js and Mongo
      DB and Material UI. I have experience with version control using Git and GitHub, facilitating effective collaboration
      and project management.</p>
        <div className="about_me_right"></div>
    </div>

    </motion.div>
    
  )
}

export default AboutMe
