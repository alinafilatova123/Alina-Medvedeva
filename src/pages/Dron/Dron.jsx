import React from 'react'
import './dron.css'
import '../page.css'
import {Link} from 'react-router-dom'
import {imagesDron} from '../images'
import {ScrollToTop} from '../../components/import'


function Dron() {
  return (
    <article className='am__page'>
      <Link to={'/'} style={{textDecoration: 'none'}} className='am__alt-header'>
        <span className="am__alt-header-logo">Алина Медведева</span>
      </Link>

      <section className='am__dron-content'>

        <ScrollToTop/>

          {imagesDron.map(image=>{
            return (
                <div key={image} className='am__dron-img'>
                  <img src={image}/>
                </div>
              )
          })}
      </section>
    </article>
  )
}

export default Dron