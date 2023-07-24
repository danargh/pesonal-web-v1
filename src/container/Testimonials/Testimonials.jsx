import React, { useState, useEffect } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import LazyLoadImageComponent from '../../components/LazyLoad/LazyLoadImageComponent';
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Testimonials.scss';

const Testimonials = () => {
   const [testimonials, setTestimonials] = useState([]);
   const [currentIndex, setCurrentIndex] = useState(0);

   const handleClick = (index) => {
      setCurrentIndex(index);
   };

   useEffect(() => {
      const query = '*[_type == "testimonials"]';

      client.fetch(query).then((data) => {
         setTestimonials(data);
      });
   }, []);

   const test = testimonials[currentIndex];

   return (
      <>
         {testimonials.length && (
            <>
               <div className="app__testimonial-item app__flex">
                  {/* <img src={urlFor(test.imgurl)} alt="testimonial" /> */}
                  <LazyLoadImageComponent width={100} height={100} imageUrl={test.imgurl} imageName={test.imageUrl} />
                  <div className="app__testimonial-content">
                     <p className="p-text">{testimonials[currentIndex].feedback}</p>
                     <h4 className="bold-text">{test.name}</h4>
                     <h5 className="bold-text">{test.company}</h5>
                  </div>
               </div>

               <div className="app__testimonial-btns app__flex">
                  <div className="app__flex" onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
                     <HiChevronLeft />
                  </div>
                  <div className="app__flex" onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
                     <HiChevronRight />
                  </div>
               </div>
            </>
         )}
      </>
   );
};

export default AppWrap(MotionWrap(Testimonials, 'app__testimonial'), 'testimonials', 'app__primarybg');
