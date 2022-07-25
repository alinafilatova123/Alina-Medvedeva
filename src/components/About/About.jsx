import React from 'react'
import './about.css'
import photo from '../../assets/photo.jpg'
import { motion } from "framer-motion";

function About() {

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
      x: -100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  }
  const headerAnimation = {
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
    <section className='am__about' id='about'>

    <motion.div className='am__works-header-container'
      initial="hidden"
      whileInView="visible"
      variants={headerAnimation}
      viewport={{amount: 0.2 , once: true}}
      transition={{
          type: "spring",
          ease: 'easeOut',
          duration: 2,
          delay: .7
        }}
      >
      <h1 className='am__works-num'>02</h1>
      <h2 className='am__works-header'>Про Меня</h2>
    </motion.div>


    <section className='am__about-section'>
      <div className='am__about-photo'>
        <motion.img src={photo} alt="" 
          initial="hidden"
          whileInView="visible"
          variants={imageAnimation}
          viewport={{amount: 0.2 , once: true}}
          transition={{
              type: "spring",
              ease: 'easeOut',
              duration: 2,
            }}
          />
      </div>

      <motion.div className='am__about-container'
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
      >

        <div>
          <h1 className='am__about-container-header'> Мой Инструментарий</h1>
          <div className='am__about-container-list'>
            <p> <span>Adobe Illustrator</span> / <span>Adobe Photoshop</span> / <span>Adobe InDesign</span> / <span>Autodesk 3ds Max</span> / <span>Figma</span> / <span>Power Point</span></p>
          </div>
        </div>

        <div>
          <h1 className='am__about-container-header'>Мой Опыт</h1>
          <div className='am__about-container-list'>
            <p>
              <span>05.2021-по настоящее время</span> - Фриланс
            </p>
            <p>
              <span>12.2020-03.2021</span> - CONTINU-UM
              студия компьютерной графики,
              графический дизайнер, web-дизайнер
              стажер
            </p>
            <p>
              <span>09.2019-04.2020</span> - ПАО «Россети Волга»,
              отдел дизайна, стажер
            </p>
          </div>
        </div>
          
      </motion.div>

    </section>

    <motion.div className='am__about-achievements'
      initial="hidden"
      whileInView="visible"
      variants={imageAnimation}
      viewport={{amount: 0.2 , once: true}}
      transition={{
          type: "spring",
          ease: 'easeOut',
          duration: 2,
        }}
    >
      <h1 className='am__about-container-header'>Мои Достижения</h1>
      <div className='am__about-achievements-list'>
        <p>
          <span>1.</span> Победитель Регионального чемпионата
          «Молодые профессионалы»
          (WorldSkills Russia)
          компетенция «Разработка VR/AR»
          24-28.02.2020
        </p>
        <p>
          <span>2.</span> Диплом | степени международного
          конкурса профессионального мастерства
          «Искусство печати» в номинации
          «Графический дизайнер» 23.11-5.12.2020
        </p>
        <p>
          <span>3.</span> Лауреат || степени в номинации
          «Рисунок» во Всероссийском конкурсе
          молодежных проектов «НАША ИСТОРИЯ»
          7-9 мая 2019г., г. Москва
        </p>
      </div>
    </motion.div>


    </section>
  )
}

export default About