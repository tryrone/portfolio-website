import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { SectionnWrapper } from '../hoc'
import { slideIn } from '../utils/motion'

const Contact = () => {

  return (
    <section className="contact container" id="contact">
      {/* Header Section from HTML */}
      <div className="text-center mb-12">
        <h1 className={`${styles.sectionHeadText} mb-4`}>
          <span className="text-secondary">04.&nbsp;</span>What's Next?&nbsp;
        </h1>
        <h2 className={`${styles.sectionSubText} mb-6`}>Get In Touch</h2>
        <p className="text-secondary max-w-2xl mx-auto mb-8">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        
        {/* Quick Email Link */}
        <a 
          target="_blank" 
          href="mailto:tegararuvwe@gmail.com?subject=Hello%20Email&body=Hello Tega." 
          className="inline-block bg-tertiary py-3 px-8 text-white font-bold shadow-md shadow-primary rounded-xl mb-12 hover:bg-opacity-80 transition-all duration-300"
          rel="noopener noreferrer"
        >
          Say Hello
        </a>
      </div>

      {/* Main Contact Section */}
      <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
        <motion.div
          variants={slideIn('left', "tween", 0.2, 1)}
          className="flex-[0.75] bg-black-100 p-8 rounded-2xl flex flex-col justify-center items-center text-center"
        >
          <p className={`${styles.sectionSubText} mb-4`}>Ready to connect?</p>
          <h3 className={`${styles.sectionHeadText} mb-8`}>Let's Talk</h3>
          
          <p className="text-secondary mb-8 max-w-md">
            Whether you have a project in mind, want to collaborate, or just want to chat about technology, feel free to reach out!
          </p>
          
          <a 
            target="_blank" 
            href="mailto:tegararuvwe@gmail.com?subject=Hello%20Email&body=Hello Tega." 
            className="bg-tertiary py-4 px-10 text-white font-bold shadow-md shadow-primary rounded-xl hover:bg-opacity-80 transition-all duration-300 text-lg"
            rel="noopener noreferrer"
            id="btn"
          >
            Say Hello
          </a>
        </motion.div>

        <motion.div
          variants={slideIn('right', "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <EarthCanvas/>
        </motion.div>
      </div>
    </section>
  )
}

export default SectionnWrapper(Contact, "contact")