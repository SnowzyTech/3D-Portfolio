import React from 'react'
import { BallCanvas } from './canvas'
import { technologies } from '../constants'
import { SectionWrapper } from '../hoc'
import { styles } from '../styles'
import { motion } from 'framer-motion'
import { textVariant } from '../utils/motion'
const Tech = () => {
  return (
    <>

    <motion.div variants={textVariant()} className='-mt-5 mb-5'>
        <h2 className={styles.sectionHeadText}>My Skills</h2>
      </motion.div>
    <div className=' flex flex-row flex-wrap justify-center gap-10'>
     
      {technologies.map((technology) => (
        <div key={technology.name}
             className="w-28 h-28"
        >
          <BallCanvas icon={technology.icon} />

        <div className='border-2 border-gray-800'>
          <p className='flex justify-center text-white-100 items-center'>{technology.name}</p>
        </div>

        </div>
      ))}
    </div>
    </>
  )
}

export default SectionWrapper(Tech, "");