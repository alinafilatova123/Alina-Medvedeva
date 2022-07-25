import React from 'react'
import './shef.css'
import '../page.css'
import {Link} from 'react-router-dom'
import {imagesShef} from '../images'
import {ScrollToTop} from '../../components/import'

function Shef() {
  return (
    <article className='am__page'>
      <Link to={'/'} style={{textDecoration: 'none'}} className='am__alt-header'>
        <span className="am__alt-header-logo">Алина Медведева</span>
      </Link>

      <section className='am__shef-content'>

        <ScrollToTop/>

          {imagesShef.map(image=>{
            return (
                <div key={image} className='am__shef-img'>
                  <img src={image}/>
                </div>
              )
          })}
      </section>
    </article>
  )
}

export default Shef