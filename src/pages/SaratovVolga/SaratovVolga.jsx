import React from 'react'
import './saratovVolga.css'
import { Link } from 'react-router-dom'
import {imagesVolga} from '../images'
import '../page.css'
import {ScrollToTop} from '../../components/import'

function SaratovVolga() {
  return (
    <article className='am__page'>
      <Link to={'/'} style={{textDecoration: 'none'}} className='am__alt-header'>
        <span className="am__alt-header-logo">Алина Медведева</span>
      </Link>

      <section className='am__volga-content'>

        <ScrollToTop/>

          {imagesVolga.map(image=>{
            return (
                <div key={image} className='am__volga-img'>
                  <img src={image}/>
                </div>
              )
          })}
      </section>
    </article>
  )
}

export default SaratovVolga