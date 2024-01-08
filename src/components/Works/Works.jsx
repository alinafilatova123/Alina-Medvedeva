import React, {useState} from 'react'
import './works.css'
import { Link } from 'react-router-dom'
import {BsFillEyeFill} from 'react-icons/bs'
import { motion } from "framer-motion"

import PreviewImage1 from '../../assets/design/shirt.png'
import PreviewImage2 from '../../assets/design/shef.png'
import PreviewImage3 from '../../assets/design/drive.png'
import PreviewImage4 from '../../assets/design/tiger.png'
import PreviewImage5 from '../../assets/design/dron.png'

import PreviewImage6 from '../../assets/typography/1.jpg'
import PreviewImage7 from '../../assets/typography/2.jpg'
import PreviewImage8 from '../../assets/typography/3.jpg'
import PreviewImage9 from '../../assets/typography/4.jpg'
import PreviewImage10 from '../../assets/typography/5.jpg'

function Works() {

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

  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState('');

  const getImg = (link) =>{
    setTempImgSrc(link);
    setModel(true);
  }

  return (
    <section className='am__works' id='works'>

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
        <h1 className='am__works-num'>01</h1>
        <h2 className='am__works-header'>Мои Работы</h2>
      </motion.div>

      <div className='am__works-container'>

        <motion.div className='am__works-container-work'
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

          <h2>- Дизайн Фирменного Стиля -</h2>

        <div className={model? "model open" : "model"} onClick={()=> setModel(false)}>
          <img src={tempImgSrc} alt="img" />
        </div>

          <Link to='saratovvolga' className='am__works-img down' >
            <BsFillEyeFill className='am__eye-icon' size={60} fill={'white'}/>
            <img src={PreviewImage1} style={{objectPosition: '-110px'}} alt="" />
          </Link>
          <Link to={'shef'} className='am__works-img'>
            <BsFillEyeFill className='am__eye-icon' size={60} fill={'white'}/>
            <img src={PreviewImage2} style={{objectPosition: '-100px'}} alt="" />
          </Link>

          <div className='am__works-img down'>
            <BsFillEyeFill className='am__eye-icon' size={60} fill={'white'}/>
            <img src={PreviewImage3} style={{objectPosition: '-320px -30px'}} alt="" onClick={()=> getImg(PreviewImage3)} />
          </div>

          <Link to={'yaroslav'} className='am__works-img'>
            <BsFillEyeFill className='am__eye-icon' size={60} fill={'white'}/>
            <img src={PreviewImage4} style={{objectPosition: '-500px'}} alt="" />
          </Link>
          <Link to={'dron'} className='am__works-img down'>
            <BsFillEyeFill className='am__eye-icon' size={60} fill={'white'}/>
            <img src={PreviewImage5} style={{objectPosition: '-320px'}} alt="" />
          </Link>
        </motion.div>

        <div className='am__works-container-work'>
          <h2 className='am__works-alt-header'>- Типография -</h2>

          <div className='am__works-img down'>
            <BsFillEyeFill className='am__eye-icon' size={60} fill={'white'}/>
            <img src={PreviewImage6} alt="" onClick={()=> getImg(PreviewImage6)} />
          </div>
          <div className='am__works-img'>
            <BsFillEyeFill className='am__eye-icon' size={60} fill={'white'}/>
            <img src={PreviewImage7} style={{objectPosition: '-410px -40px'}} alt="" onClick={()=> getImg(PreviewImage7)} />
          </div>
          <div className='am__works-img down'>
            <BsFillEyeFill className='am__eye-icon' size={60} fill={'white'}/>
            <img src={PreviewImage8} style={{objectPosition: '-340px -60px'}} alt="" onClick={()=> getImg(PreviewImage8)} />
          </div>
          <div className='am__works-img'>
            <BsFillEyeFill className='am__eye-icon' size={60} fill={'white'}/>
            <img src={PreviewImage9} style={{objectPosition: '-252px -45px'}} alt="" onClick={()=> getImg(PreviewImage9)} />
          </div>
          <div className='am__works-img down'>
            <BsFillEyeFill className='am__eye-icon' size={60} fill={'white'}/>
            <img src={PreviewImage10} style={{objectPosition: '-220px -30px'}} alt="" onClick={()=> getImg(PreviewImage10)} />
          </div>
        </div>

      </div>

    </section>
  )
}

export default Works