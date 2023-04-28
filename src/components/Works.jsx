import React from 'react'
import Tilt from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { github } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

const ProjectCard = ({ index, name, description, tags, image, source_code_link, live_code_link }) => {
  return(
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    >
      <Tilt options={{
          max: 45,
          sclae: 1,
          speed: 450
      }}
       className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className='relative w-full h-[230px]'>
          <img src={image} alt={name}
           className="w-full object-cover h-full rounded-2xl"
           />

           <div className='absolute inset-0 justify-end flex card-img_hover'>
            <div 
            onClick={() => window.open(source_code_link, "_blank")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img src={github} 
              alt="github" 
              className='w-1/2 h-1/2 object-contain' 
              />
            </div>
            <div 
            onClick={() => window.open(live_code_link, "_blank")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img src={github} 
              alt="github" 
              className='w-1/2 h-1/2 object-contain' 
              />
            </div>
           </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[15px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p key={tag.name}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}
const Works = () => {
  return (
    <>
       <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>

      <div className='w-ful flex'>
        <motion.p 
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] lg:text-[22px] lg:leading-[40px] max-w-4xl lg:max-w-5xl xl:max-w-6xl leading-[30px]"
        >
          The projects presented here serve as tangible evidence
          of my abilities and expertise, offering real-world illustrations
          of my work. For each project, I provide a brief description 
          along with links to both code repositories and live demos. 
          These examples demonstrate my proficiency in solving intricate problems, 
          utilizing various technologies, and efficiently managing projects.
        </motion.p>
      </div>

      <div className='mt-20  flex md:justify-center sm:items-center sm:justify-center md:items-center md:gap-17 flex-wrap gap-7'>
         {projects.map((project, index) => (
          <ProjectCard 
            key={`project-${index}`}
            index={index}
            {...project}
          />
         ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "")