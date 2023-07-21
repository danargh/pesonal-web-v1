import React from 'react';
import { BsInstagram, BsDribbble, BsGithub } from 'react-icons/bs';

const SocialMedia = () => {
   return (
      <div className="app__social">
         <a
            target="blank"
            href="https://dribbble.com/Taruna_Design"
            style={{
               display: 'flex',
               justifyContent: 'center',
            }}
         >
            <div>
               <BsDribbble />
            </div>
         </a>

         <a
            target="blank"
            href="https://github.com/danargh"
            style={{
               display: 'flex',
               justifyContent: 'center',
            }}
         >
            <div>
               <BsGithub />
            </div>
         </a>

         <a
            target="blank"
            href="https://www.instagram.com/danargh_/?next=%2F"
            style={{
               display: 'flex',
               justifyContent: 'center',
            }}
         >
            <div>
               <BsInstagram />
            </div>
         </a>
      </div>
   );
};

export default SocialMedia;
