import React, {useState, useRef} from 'react'
import emailjs from 'emailjs-com';
import './contact.css'
import { motion } from "framer-motion";

function Contact() {

    const textAnimation = {
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

  const [formData, setFormData] = useState({
    form_name: "",
    user_email: "",
    message:""
  });

  const form = useRef();
  
  function sentEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_ji1faia','template_978sx1a', form.current, 'lzuz9XoL1O9orY99M')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    form.current?.reset()
  }
    function handleChacge(event) {
    setFormData(event.target.name)
  }

  return (
    <section className='am__contact' id='contact'>

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
        <h1 className='am__works-num'>03</h1>
        <h2 className='am__works-header'>Связаться со мной</h2>
      </motion.div>

      <motion.form 
        onSubmit={(sentEmail)} ref={form}

        initial="hidden"
        whileInView="visible"
        variants={textAnimation}
        viewport={{amount: 0.2 , once: true}}
        transition={{
            type: "spring",
            ease: 'easeOut',
            duration: 2,
          }}
      >

        <div className='am__contact-input-container'>
          <p>Ваше имя:</p>
          <input
            required
            type="text" 
            name='from_name'
            placeholder='Имя'
            onChange={handleChacge}
          />
        </div>

        <div className='am__contact-input-container'>
          <p>Ваш email:</p>
          <input
            required
            type="email" 
            name="user_email"
            placeholder="email"
            onChange={handleChacge}
          />
        </div>

        <div className='am__contact-input-container'>
          <p>Ваше сообщение:</p>
          <textarea
            required
            placeholder='Сообщение'
            name='message'
            onChange={handleChacge}
          />
        </div>

        <button className='am__form-btn' type='submit'>Отправить</button>
    </motion.form>

    </section>
  )
}

export default Contact