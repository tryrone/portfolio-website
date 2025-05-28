import React from 'react'
import { motion } from 'framer-motion'
import { Tilt } from 'react-tilt'
import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionnWrapper } from '../hoc'

const ServiceCard = ({ index, title, icon }) => {
    return (
       <Tilt className="xs:w-[250px] w-full">
        <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
            className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        >
            <div options={{
                max: 45,
                scale: 1,
                speed: 450
            }}
            className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
                <img src={icon} alt={title} className="w-16 h-16 object-contain"/>
                <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
            </div>
        </motion.div>
       </Tilt>
    )
}

const About = () => {
  return (
    <>
        <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>
                Introduction
            </p>
            <h2 className={styles.sectionHeadText}>
                Overview.
            </h2>
        </motion.div>

        <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
            Hey! I am Tega Oboraruvwe. I am a Senior Front-end developer based out of Dubai.I love solving problems be it web or mobile. I came across web development about four years ago and started mobile development three years ago, and it changed me for good.
            In my free time I enjoy using frontend technologies as a tool to solve simple but real-world problems. They help me grow as a developer while also making someone else's life easier.
            My idea of fun is watching anime and good movies.
            Here are a few technologies I’ve been working with recently:
        </motion.p>
        <motion.div>
            <a download="" href="https://techashira.netlify.app/tega%20oboraruvwe.pdf" class="button button--flex" target='_blank'>
                Download CV <span class="material-symbols-outlined">download</span>
            </a>
        </motion.div>

        <div className="mt-20 flex flex-wrap gap-10">
            {services.map((service, index) => (
                <ServiceCard key={service.title} index={index} {...service} />
            ))}
        </div>
    </>
  )
}

export default SectionnWrapper(About, "about")