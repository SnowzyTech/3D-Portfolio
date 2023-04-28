import React from 'react'
import Tilt from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

import { Link } from 'react-router-dom'
const ServiceCard = ({ index, title, icon}) => {
  return(
    <Tilt className="xs:w-[250px] w-[500px]">
      <motion.div 
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain"/>
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const downloadPDF = () => {
  const url = 'IhekunaEmmanuelCV.pdf'
  window.open(url, '_blank')
}
 const About = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
      >
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)}
         className="mt-4 text-secondary text-[17px] lg:text-[22px] lg:leading-[40px] max-w-4xl lg:max-w-5xl xl:max-w-6xl leading-[30px]"
      >
      A personate and goal-driven indivdual seeking to build a career in commerce where my skills and competence such
      as front-end web Development and social media content writing can be instrumental in helping 
      businesses rise back to their feet using the internet. I'm a quick leaner and collaborate closely with
      clients to create efficient and user-friendly solutions tha solve real-world problems
      Let''s work together to bring your ideas to life!'
      </motion.p>

      <motion.button variants={fadeIn("", "", 0.4, 2)}
         className="mt-4 green-pink-gradient rounded-lg"
      >
        <Link onClick={downloadPDF} 
        className="flex items-center  text-light p-2.5 px-6 rounded-lg font-semibold hover:bg-cyan-600">
           DownLoad Resume
          </Link>
      </motion.button>



      <div className='mt-20  lg:gap-20 flex justify-center items-center flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}

      </div>
    </>
  )
}

export default SectionWrapper(About, "about")