import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'

import { motion } from 'framer-motion'

import 'react-vertical-timeline-component/style.min.css'
import { styles } from '../styles'
import { education } from '../constants'
import { SectionWrapper } from '../hoc'
import { textVariant } from '../utils/motion'

const EducationCard = ({ education }) => (
  <VerticalTimelineElement
    contentStyle={{ background: '#1d1836', color: '#fff'}}
    contentArrowStyle={{ borderRight: '7px solid #232631'}}
    date={education.date}
    // iconStyle={{ background:  }}
    icon={
      <div className='flex justify-center items-center w-full h-full'>
          <img 
          src={education.icon}
          alt={education.name}
          className='w-[100%] h-[100%] object-contain rounded-full'
        />
      </div>
    }
  >
     <div>
      <h3 className='text-white font-bold text-[24px]'>{education.certificate}</h3>
      <a href={education.school} className='text-secondary text-[16px] font-semibold' style={{ margin: 0 }}>{education.school}</a>
     </div>

     
  </VerticalTimelineElement>
)
const Education = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}></p>
        <h2 className={styles.sectionHeadText}> 
        Education</h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {education.map((education, index) => (
            <EducationCard key={index} education={education} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default  SectionWrapper(Education, "work")