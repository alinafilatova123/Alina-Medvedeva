import React from 'react'
import './yaroslav.css'
import '../page.css'
import {Link} from 'react-router-dom'
import {imagesYaroslav} from '../images'
import {ScrollToTop} from '../../components/import'

function Yaroslav() {
  return (
    <article className='am__page'>
      <Link to={'/'} style={{textDecoration: 'none'}} className='am__alt-header'>
        <span className="am__alt-header-logo">Алина Медведева</span>
      </Link>

      <section className='am__yaroslav-content'>

        <ScrollToTop/>

          {imagesYaroslav.map(image=>{
            return (
                <div key={image} className='am__yaroslav-img'>
                  <img src={image}/>
                </div>
              )
          })}
      </section>
    </article>
  )
}

export default Yaroslav