import React from 'react'
import {BsFillArrowUpCircleFill} from 'react-icons/bs'
import './scroll.css'


function ScrollToTop() {

  function scrollToTop(){
    document.querySelector("body").scrollTo(0,0)
  }

  return (
    <>
    <div onClick={scrollToTop} className='am__scroll-btn-container'>
      <button className='am__scroll-btn'>
        <BsFillArrowUpCircleFill size={50} fill={'var(--dark-blue-color)'}/>
      </button>
    </div>
      
    </>
  )
}

export default ScrollToTop