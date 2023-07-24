import { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { urlFor } from '../../client';
import { Blurhash } from 'react-blurhash';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './LazyLoadImageComponent.scss';

export default function LazyLoadImageComponent({ imageUrl, imageName, width, height }) {
   const [isLoaded, setIsLoaded] = useState(false);
   const [isLoadStarted, setIsLoadedStarted] = useState(false);
   console.log(imageName);

   return (
      <div className="wrapper">
         <LazyLoadImage
            style={{ objectFit: 'cover' }}
            width={width}
            height={height}
            onLoad={() => {
               console.log('finish');
               setIsLoaded(true);
            }}
            beforeLoad={() => {
               console.log('start');
               setIsLoadedStarted(true);
            }}
            src={urlFor(imageUrl)}
            effect="blur"
            placeholderSrc={imageName}
         />

         {!isLoaded && isLoadStarted && (
            <div className="blur-hash__wrapper">
               <Blurhash hash="LEHV6nWB2yk8pyo0adR*.7kCMdnj" width={width} height={height} resolutionX={32} resolutionY={32} punch={1} />
            </div>
         )}
      </div>
   );
}
