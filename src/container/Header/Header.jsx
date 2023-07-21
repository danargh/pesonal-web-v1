import React from 'react';
import { motion } from 'framer-motion';

import { images } from '../../constants';
import './Header.scss';
import { AppWrap } from '../../wrapper';
import { TypeAnimation } from 'react-type-animation';

// const scaleVariants = {
//    whileInView: {
//       scale: [0, 1],
//       opacity: [0, 2],
//       transition: {
//          duration: 1,
//          ease: 'easeInOut',
//       },
//    },
// };

const Header = () => {
   return (
      <div className="app__header app__flex">
         <motion.div
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 3 }}
            className="app__header-info"
         >
            <div className="app__header-badge">
               <div className="app__header-content">
                  <img src={images.profiledanar} alt="Profile" width="100px" />
                  <div
                     style={{
                        marginTop: 20,
                        textAlign: 'center',
                     }}
                  >
                     <TypeAnimation
                        sequence={[
                           'Hello, I am Danar',
                           1000,
                           'Developer based in Indonesia',
                           2000,
                           'Coding is about how make it clean',
                           1000,
                           'Coding is about how make it readable',
                           1000,
                           'Coding is about how make it refactorable',
                           1000,
                           () => {
                              console.log('Done typing!');
                           },
                        ]}
                        wrapper="div"
                        cursor={true}
                        repeat={Infinity}
                        className="greet-text"
                     />
                     {/* <p className="greet-text">👋 Hello, I am Danar</p> */}
                  </div>
                  <div style={{ marginTop: 40 }}>
                     <p className="head-text">
                        Frontend Developer & UI/UX Designer
                     </p>
                  </div>
                  <div
                     style={{
                        marginTop: 40,
                        marginRight: 'auto',
                        marginLeft: 'auto',
                     }}
                  >
                     <button type="button" className="p-text">
                        <a href="#contact">Contact Me</a>
                     </button>
                  </div>
               </div>
            </div>
         </motion.div>

         {/* <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, delayChildren: 0.5 }}
            className="app__header-img"
         >
            <img src={images.profile} alt="profile_bg" />
            <motion.img
               whileInView={{ opacity: [0, 1] }}
               transition={{ duration: 1, ease: 'easeInOut' }}
               className="overlay_circle"
               src={images.circle}
               alt="profile_circle"
            ></motion.img>
         </motion.div> */}

         {/* <motion.div variants={scaleVariants} whileInView={scaleVariants.whileInView} className="app__header-circles">
            {[images.flutter, images.redux, images.sass].map((circle) => {
               return (
                  <div className="circle-cmp app__flex" key={circle}>
                     <img src={circle} alt="circle" />
                  </div>
               );
            })}
         </motion.div> */}
      </div>
   );
};

export default AppWrap(Header, 'home');
