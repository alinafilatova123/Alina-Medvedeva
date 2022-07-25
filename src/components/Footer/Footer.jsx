import React from 'react'
import './footer.css'
import {BsInstagram} from 'react-icons/bs'
import Vk from '../../assets/Vk.svg'

function Footer() {
  return (
    <footer>

      <div className='am__footer-container'>
        <div className='am__footer-container-block'>
          <a href="/"><p>Главная</p></a>
          <a href="#works"><p>Мои Работы</p></a>
          <a href="#about"><p>Про Меня</p></a>
        </div>

        <div className='am__footer-container-block'>
          <div>
            <BsInstagram className="am__footer-icon"/>
            <a href="#"><p>Instagram</p></a>
          </div>
          <div>
            <img className='am__footer-icon' src={Vk} alt="" />
            <a href="#"><p>Vk</p></a>
          </div>
          <h3>kvakuschka05@mail.ru</h3>
        </div>
      </div>

    </footer>
  )
}

export default Footer