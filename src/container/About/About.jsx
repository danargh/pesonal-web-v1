import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './About.scss';
import { client } from '../../client';
import LazyLoadImageComponent from '../../components/LazyLoad/LazyLoadImageComponent';
import { AppWrap, MotionWrap } from '../../wrapper';
import ContentLoader from 'react-content-loader';

const About = () => {
   const [abouts, setAbouts] = useState([]);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      const query = '*[_type == "abouts"]';
      client.fetch(query).then((data) => {
         setAbouts(data);
         setLoading(false);
      });
   }, []);

   const downloadResumeHandler = () => {
      // using Java Script method to get PDF file
      fetch('Danar-Ghulamsyah-cv.pdf').then((response) => {
         response.blob().then((blob) => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'Danar-Ghulamsyah-cv.pdf';
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
            {loading === true
               ? Array(3)
                    .fill(0)
                    .map((_, index) => (
                       <div className="app__profile-item" key={index}>
                          <ContentLoader viewBox="0 0 190 300">
                             <rect x="0" y="0" rx="16" ry="16" width="190" height="170" />
                             <rect x="0" y="190" rx="6" ry="6" width="190" height="16" />
                             <rect x="0" y="220" rx="4" ry="4" width="190" height="10" />
                             <rect x="0" y="236" rx="4" ry="4" width="190" height="10" />
                             <rect x="0" y="252" rx="4" ry="4" width="190" height="10" />
                          </ContentLoader>
                       </div>
                    ))
               : abouts?.map((about, index) => {
                    return (
                       <motion.div whileInView={{ opacity: 1 }} whileHover={{ scale: 1.1 }} transition={{ duration: 0.5, type: 'tween' }} className="app__profile-item" key={about.title + index}>
                          <LazyLoadImageComponent width={190} height={170} imageUrl={about.imgUrl} imageName={about.imageUrl} />
                          <h2 className="bold-text" style={{ marginTop: 20 }}>
                             {about.title}
                          </h2>
                          <p className="p-text" style={{ marginTop: 10 }}>
                             {about.description}
                          </p>
                       </motion.div>
                    );
                 })}
         </div>
      </>
   );
};

export default AppWrap(MotionWrap(About, 'app__about'), 'about', 'app__whitebg');
