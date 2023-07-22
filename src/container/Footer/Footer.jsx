import React, { useState } from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss';

const Footer = () => {
   const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: '',
   });
   const [isSubmitted, setIsSubmitted] = useState(false);
   const [isLoading, setIsLoading] = useState(false);

   const { name, email, message } = formData;

   const handleChangeInput = (event) => {
      const { name, value } = event.target;

      setFormData({ ...formData, [name]: value });
   };

   const handleSubmit = () => {
      setIsLoading(true);

      const contact = {
         _type: 'contact',
         name: formData.name,
         email: formData.email,
         message: formData.message,
      };

      console.log(contact);

      client
         .create(contact)
         .then(() => {
            setIsLoading(false);
            setIsSubmitted(true);
         })
         .catch((err) => {
            console.log(err);
         });
   };

   return (
      <>
         <h2 className="head-text">Contact Me</h2>

         <div className="app__footer-cards">
            <div className="app__footer-card">
               <img src={images.email} alt="email" />
               <a href="mailto:hello@michael.com" className="p-text">
                  danargh86@gmail.com
               </a>
            </div>
            <div className="app__footer-card">
               <img src={images.mobile} alt="mobile" />
               <a href="tel: +1 (123) 456-789" className="p-text">
                  +1 (123) 456-789
               </a>
            </div>
         </div>

         {!isSubmitted ? (
            <div className="app__footer-form app__flex">
               <div className="app__flex">
                  <input className="p-text" type="text" placeholder="Your Name" name="name" value={name} onChange={handleChangeInput} />
               </div>
               <div className="app__flex">
                  <input className="p-text" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
               </div>
               <div className="app__flex">
                  <textarea className="p-text" placeholder="Your Message" value={message} name="message" onChange={handleChangeInput} />
               </div>
               <button type="button" className="p-text" onClick={handleSubmit}>
                  {isLoading ? 'Sending..' : 'Send Message'}
               </button>
            </div>
         ) : (
            <div>
               <h3 className="head-text">Thank you for getting in touch!</h3>
            </div>
         )}
      </>
   );
};

export default AppWrap(MotionWrap(Footer, 'app__footer'), 'contact', 'app__whitebg');
