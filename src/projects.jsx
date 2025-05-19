import React from 'react'
import Card from './Card';
import Emart from "./images/E-mart.png"
import FoodBlog from "./images/FoodBlog.png"
import Travel from"./images/Travelgo.png"
import { motion } from 'framer-motion';

const Projects = () => {
   const cards = [
    {
       imageUrl: Emart,
      altText: 'E-Mart website',
      title: 'E-Mart',
      description: 'A fully functional e-commerce website with product listings, shopping cart, user authentication, and order processing.',
      explore: 'https://github.com/Yesukumar2000',
    },
    {
      imageUrl: FoodBlog,
      altText: 'Food Blogging App',
      title: 'Food Blogging',
      description: 'A collaborative platform for food enthusiasts to share recipes, reviews, and culinary experiences.',
      explore: 'https://github.com/Yesukumar2000',
    },
    {
      imageUrl: Travel,
      altText: 'College Portal Dashboard',
      title: 'College Portal',
      description: 'A comprehensive college portal with login and registration for different roles, password recovery, and dedicated dashboards for students and the principal.',
      explore: 'https://github.com/Yesukumar2000',
    },
    {
      imageUrl: Travel,
      altText: 'Travelgo',
      title: 'Travelgo',
      description: 'A travel application to explore destinations, plan trips, and manage bookings.',
      explore: 'https://travel-go-website.netlify.app/',
    },
  ];

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
        margin:"-100px",
      once:true
     }} className="up_gap " id="project">
        <h2 className='heading1 down_gap'>Projects</h2>
        <div className="completely">
        
    <div className="grid" >
        
      {cards.map((card, index) => (
        
        <Card
          key={index}
          imageUrl={card.imageUrl}
          altText={card.altText}
          title={card.title}
          description={card.description}
          explore={card.explore}
        />
      ))}
    </div>
    </div>
    </motion.div>
  )
}

export default Projects
