import React from 'react'
import './header.css'
import photo from '../../assets/photo.jpg'
import { motion } from "framer-motion";

function Header() {

  const imageAnimation = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  const textAnimation = {
    hidden: {
      x: -50,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  }

  return (
    <header>
      
      <article className='am__header-section'>
        <div className='am__header-img'>
          <motion.img
            initial="hidden"
            whileInView="visible"
            variants={imageAnimation}
            viewport={{amount: 0.2 , once: true}}
            transition={{
                type: "spring",
                ease: 'easeOut',
                duration: 2,
              }}

            src={photo} alt="" />
        </div>

        <motion.section
          initial="hidden"
          whileInView="visible"
          variants={textAnimation}
          viewport={{amount: 0.2 , once: true}}
          transition={{
              type: "spring",
              ease: 'easeOut',
              duration: 2,
              delay: .7
            }}

          className='am__header-container'>

          <h1><span>Привет!</span> <br/> Меня зовут Алина, <br/> я графический дизайнер.</h1>
          <p>
            Я хочу показать нашу жизнь, через призму <span>искусства</span>.
            Посмотри, как меняется мир, благодаря <span>дизайну</span>.
          </p>
        </motion.section>
      </article>

    </header>
  )
}

export default Header