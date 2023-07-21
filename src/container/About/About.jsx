import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import './About.scss';
import { urlFor, client } from '../../client';
import { AppWrap, MotionWrap } from '../../wrapper';

const About = () => {
   const [abouts, setAbouts] = useState([]);

   useEffect(() => {
      const query = '*[_type == "abouts"]';
      client.fetch(query).then((data) => {
         setAbouts(data);
      });
   }, []);

   const downloadResumeHandler = () => {
      // using Java Script method to get PDF file
      fetch('data.pdf').then((response) => {
         response.blob().then((blob) => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'data.pdf';
            alink.click();
         });
      });
   };

   return (
      <>
         <h2 className="head-text">About Me</h2>
         <button type="button" className="p-text" style={{ color: 'white' }} onClick={downloadResumeHandler}>
            Download CV
         </button>
         <div className="app__profiles">
            {abouts.map((about, index) => {
               return (
                  <motion.div whileInView={{ opacity: 1 }} whileHover={{ scale: 1.1 }} transition={{ duration: 0.5, type: 'tween' }} className="app__profile-item" key={about.title + index}>
                     <img src={urlFor(about.imgUrl)} alt={about.imageUrl} />
                     <h2 className="bold-text" style={{ marginTop: 20 }}>
                        {about.title}{' '}
                     </h2>
                     <p className="p-text" style={{ marginTop: 10 }}>
                        {about.description}{' '}
                     </p>
                  </motion.div>
               );
            })}
         </div>
      </>
   );
};

export default AppWrap(MotionWrap(About, 'app__about'), 'about', 'app__whitebg');
